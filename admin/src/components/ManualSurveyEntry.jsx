import { useEffect, useState } from 'react';
import { Plus, Save, Trash2 } from 'lucide-react';
import { api, notifyDashboard } from '../lib/api.js';
import { loadKey, KEYS } from '../lib/configStore.js';
import { defaultFilterBar } from '../lib/filterDefaults.js';
import { useToast } from '../context/ToastContext.jsx';
import { Modal, Field } from './ui.jsx';
import { META_COLS, CONSTRUCTS, STAGE_COLS, constructItemKeys, rowToRecord } from '../lib/survey.js';

// Which filter-config key supplies each meta dropdown's options.
const FILTER_FOR = {
  branch: 'branch', gender: 'gender', age_group: 'age', nationality: 'extra1',
  visit_frequency: 'frequency', service_type: 'service', payer: 'extra2',
};
const STAGE_LABELS = {
  stage_before: 'Before visit', stage_reception: 'Reception', stage_repair: 'Repair',
  stage_delivery: 'Delivery', stage_after: 'After service',
};

function blankRow() {
  const r = { case_number: '' };
  META_COLS.forEach((m) => { if (m.key !== 'case_number') r[m.key] = ''; });
  CONSTRUCTS.forEach((c) => constructItemKeys(c).forEach((k) => { r[k] = 3; }));
  STAGE_COLS.forEach((k) => { r[k] = 3; });
  return r;
}
const rowHasData = (r) => !!(r.branch || r.gender || r.service_type);

export default function ManualSurveyEntry({ open, onClose, onSaved }) {
  const toast = useToast();
  const [opts, setOpts] = useState({});
  const [regions, setRegions] = useState([]);
  const [row, setRow] = useState(blankRow);
  const [batch, setBatch] = useState([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!open) return;
    setRow(blankRow()); setBatch([]);
    (async () => {
      const base = defaultFilterBar();
      const stored = await loadKey(KEYS.filterBar, null);
      if (stored && Array.isArray(stored.filters)) {
        const byKey = Object.fromEntries(stored.filters.map((f) => [f.key, f]));
        base.filters = base.filters.map((f) => (byKey[f.key] ? { ...f, ...byKey[f.key] } : f));
      }
      const o = {};
      base.filters.forEach((f) => {
        o[f.key] = (f.options || []).filter((x) => x.active !== false).map((x) => ({ value: x.value, label: x.labelEn || x.value }));
      });
      try {
        const r = await api.get('/api/regions');
        setRegions(r?.regions || []);
        if (r?.branches?.length) o.branch = r.branches.filter((b) => b.is_active !== false).map((b) => ({ value: b.name_en || b.slug, label: b.name_en || b.slug }));
      } catch (_) {}
      setOpts(o);
    })();
  }, [open]);

  const set = (k, v) => setRow((r) => ({ ...r, [k]: v }));
  const metaOptions = (key) => (key === 'region' ? regions.map((r) => ({ value: r.slug, label: r.name_en })) : (opts[FILTER_FOR[key]] || []));

  function addToBatch() {
    if (!rowHasData(row)) { toast.error('Fill at least Branch / Gender / Service first.'); return; }
    setBatch((b) => [...b, { ...row }]);
    setRow(blankRow());
    toast.success('Row added — form cleared for the next one.');
  }

  async function saveAll() {
    const all = [...batch];
    if (rowHasData(row)) all.push(row);
    if (!all.length) { toast.error('Add at least one row.'); return; }
    setSaving(true);
    try {
      const records = all.map(rowToRecord);
      await api.post('/api/admin/customers/bulk', { records });
      notifyDashboard('customer-records-updated');
      toast.success(`Saved ${records.length} survey record(s) to the database.`);
      setBatch([]); setRow(blankRow());
      onSaved && onSaved();
      onClose();
    } catch (e) { toast.error(e.message); } finally { setSaving(false); }
  }

  const Rating = ({ k }) => (
    <input type="number" min={1} max={5} step={1} className="input !px-2 text-center" style={{ width: 54 }}
      value={row[k]} onChange={(e) => set(k, e.target.value === '' ? '' : Math.max(1, Math.min(5, Number(e.target.value))))} />
  );

  return (
    <Modal open={open} onClose={onClose} title="Add survey responses manually" wide
      footer={<>
        <span className="mr-auto text-xs text-ink-faint">{batch.length} row(s) in batch{rowHasData(row) ? ' + current' : ''}</span>
        <button className="btn-ghost" onClick={addToBatch}><Plus size={15} /> Add another</button>
        <button className="btn-gold" onClick={saveAll} disabled={saving}><Save size={15} /> {saving ? 'Saving…' : 'Save to database'}</button>
      </>}>
      <div className="space-y-5">
        {/* Respondent meta */}
        <div>
          <div className="label">Respondent</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Field label="Case number"><input className="input" value={row.case_number} onChange={(e) => set('case_number', e.target.value)} placeholder="auto if blank" /></Field>
            {META_COLS.filter((m) => m.key !== 'case_number').map((m) => (
              <Field key={m.key} label={m.label}>
                <select className="input" value={row[m.key]} onChange={(e) => set(m.key, e.target.value)}>
                  <option value="">—</option>
                  {metaOptions(m.key).map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </Field>
            ))}
          </div>
        </div>

        {/* Construct ratings 1–5 */}
        {CONSTRUCTS.map((c) => (
          <div key={c.key}>
            <div className="label">{c.label} <span className="text-ink-faint normal-case">· rate each 1–5</span></div>
            <div className="flex flex-wrap gap-2">
              {constructItemKeys(c).map((k, i) => (
                <div key={k} className="flex flex-col items-center">
                  <span className="text-[10px] text-ink-faint mb-1">Q{i + 1}</span>
                  <Rating k={k} />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Stage ratings */}
        <div>
          <div className="label">Stage experience · rate each 1–5</div>
          <div className="flex flex-wrap gap-3">
            {STAGE_COLS.map((k) => (
              <div key={k} className="flex flex-col items-center">
                <span className="text-[10px] text-ink-faint mb-1">{STAGE_LABELS[k]}</span>
                <Rating k={k} />
              </div>
            ))}
          </div>
        </div>

        {/* Batch list */}
        {batch.length > 0 && (
          <div className="rounded-xl border border-white/5 bg-navy-900/50 p-3">
            <div className="text-xs font-semibold text-ink mb-2">Batch ({batch.length})</div>
            <div className="space-y-1 max-h-40 overflow-y-auto">
              {batch.map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-ink-soft">
                  <span className="flex-1 truncate">{b.case_number || `#${i + 1}`} · {b.branch || '—'} · {b.gender || '—'} · {b.service_type || '—'}</span>
                  <button className="text-ink-faint hover:text-red-300" onClick={() => setBatch((x) => x.filter((_, k) => k !== i))}><Trash2 size={13} /></button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
