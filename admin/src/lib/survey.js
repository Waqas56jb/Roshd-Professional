/**
 * FIXED survey schema (45 columns) — the canonical contract. Column keys never
 * change, so admin data entry is unambiguous and the dashboard always pulls from
 * the same fields. Derived from the client's "Data sample" sheet.
 */
export const META_COLS = [
  { key: 'case_number', label: 'Case Number' },
  { key: 'region', label: 'Region' },
  { key: 'branch', label: 'Branch' },
  { key: 'gender', label: 'Gender' },
  { key: 'age_group', label: 'Age group' },
  { key: 'nationality', label: 'Nationality' },
  { key: 'visit_frequency', label: 'Visit frequency' },
  { key: 'service_type', label: 'Service type' },
  { key: 'payer', label: 'Who paid' },
];

export const CONSTRUCTS = [
  { key: 'quality', label: 'Quality', cols: 6 },
  { key: 'comm', label: 'Communication', cols: 7 },
  { key: 'price', label: 'Price Fairness', cols: 6 },
  { key: 'advisor', label: 'Advisor Behavior', cols: 6 },
  { key: 'speed', label: 'Speed', cols: 6 },
];

export const STAGE_COLS = [
  'stage_before', 'stage_reception', 'stage_repair', 'stage_delivery', 'stage_after',
];

export function constructItemKeys(c) {
  return Array.from({ length: c.cols }, (_, i) => `q_${c.key}_${i + 1}`);
}

/** All 45 fixed column keys, in order. */
export const ALL_COLUMNS = [
  ...META_COLS.map((m) => m.key),
  ...CONSTRUCTS.flatMap(constructItemKeys),
  ...STAGE_COLS,
];

const mean = (arr) => {
  const nums = arr.map(Number).filter((n) => isFinite(n));
  return nums.length ? nums.reduce((a, b) => a + b, 0) / nums.length : NaN;
};

/**
 * Map one fixed-schema survey row → the customer_satisfaction_records shape the
 * bulk endpoint accepts. Construct means become the 4 driver ratings + CX score.
 * (Backend currently stores 4 ratings; Advisor mean is folded into the notes via
 * source and otherwise comes from manual Model Values.)
 */
export function rowToRecord(row, i) {
  const items = (c) => constructItemKeys(c).map((k) => row[k]);
  const quality = mean(items(CONSTRUCTS[0]));
  const comm = mean(items(CONSTRUCTS[1]));
  const price = mean(items(CONSTRUCTS[2]));
  const speed = mean(items(CONSTRUCTS[4]));
  const cx = mean(STAGE_COLS.map((k) => row[k]));
  const r1 = isFinite(quality) ? +quality.toFixed(2) : 3;
  const r2 = isFinite(comm) ? +comm.toFixed(2) : 3;
  const r3 = isFinite(price) ? +price.toFixed(2) : 3;
  const r4 = isFinite(speed) ? +speed.toFixed(2) : 3;
  const sat = isFinite(cx) ? +cx.toFixed(2) : +(r1 * 0.38 + r2 * 0.27 + r3 * 0.22 + r4 * 0.05 + 1).toFixed(2);
  return {
    customer_ref: String(row.case_number || `CSR-${i + 1}`),
    branch: row.branch || '',
    gender: row.gender || '',
    service_line: row.service_type || '',
    visit_frequency: row.visit_frequency || '',
    age_band: row.age_group || '',
    rating_1: r1, rating_2: r2, rating_3: r3, rating_4: r4,
    overall_satisfaction: sat,
    risk_tier: sat < 3 ? 'High' : sat < 3.6 ? 'Medium' : 'Low',
    source: 'survey-upload',
  };
}

/** Validate a parsed sheet (array of row-objects keyed by header). */
export function validateRows(rows) {
  const errors = [];
  if (!rows.length) return { ok: false, errors: ['File has no data rows.'] };
  const headers = Object.keys(rows[0]);
  const missing = ALL_COLUMNS.filter((c) => !headers.includes(c));
  if (missing.length) errors.push(`Missing columns: ${missing.slice(0, 8).join(', ')}${missing.length > 8 ? ` (+${missing.length - 8})` : ''}`);
  // spot-check rating ranges
  let bad = 0;
  rows.slice(0, 500).forEach((r) => {
    [...CONSTRUCTS.flatMap(constructItemKeys), ...STAGE_COLS].forEach((k) => {
      const v = Number(r[k]);
      if (r[k] !== '' && r[k] != null && (isNaN(v) || v < 1 || v > 5)) bad++;
    });
  });
  if (bad) errors.push(`${bad} rating value(s) are outside the 1–5 range.`);
  return { ok: errors.length === 0, errors };
}

/** A blank CSV template with exactly the 45 fixed headers. */
export function templateCsv() {
  return ALL_COLUMNS.join(',') + '\n';
}
