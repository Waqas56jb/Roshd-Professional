/**
 * Customer Dashboard engine — ported VERBATIM from index.html (lines 5121–8078).
 *
 * The dashboard markup is preserved byte-identically in dashboard.html and this
 * engine renders into it exactly as the original inline <script> did. Nothing in
 * the dashboard logic is changed.
 *
 * The original was one big <script>, so a few helpers lived elsewhere in it.
 * They are bridged to the React layer here (identical behavior):
 *   - API_BASE    → imported from ../lib/api.js (same detection logic)
 *   - t(en, ar)   → reads <html data-lang> (verbatim)
 *   - setLanguage → window.setLanguage  (LanguageContext)
 *   - showToast   → window.showToast    (UIContext)
 *
 * initDashboard() runs the original load-time code (including checkStoredSession,
 * scroll persistence, and BroadcastChannel/storage sync) once, after the markup
 * is mounted.
 */
import { API_BASE } from '../lib/api.js';

let __roshdDashboardInited = false;

export function initDashboard() {
  if (__roshdDashboardInited) return;
  __roshdDashboardInited = true;

  function t(en, ar) {
    return document.documentElement.getAttribute('data-lang') === 'ar' ? ar : en;
  }
  function setLanguage(lang) { if (typeof window.setLanguage === 'function') window.setLanguage(lang); }
  function showToast(msg) { if (typeof window.showToast === 'function') window.showToast(msg); }

  /* ════════════ BEGIN verbatim dashboard logic (index.html 5121–8078) ════════════ */
/* ════════════════════════════════════════════════
   CUSTOMER DASHBOARD SYSTEM
   ════════════════════════════════════════════════ */

/* ── Dashboard Data ── */
const DB_DATA = {
  "All Branches": {
    score:3.8, explanatory:72, top:"Quality", risk:"Speed",
    topAr:"الجودة", riskAr:"السرعة",
    drivers:[
      {name:"Quality",nameAr:"الجودة",avg:3.4,path:.68,impact:.34,decision:"Invest",decisionAr:"استثمر",cls:"navy"},
      {name:"Communication",nameAr:"التواصل",avg:3.0,path:.48,impact:.23,decision:"Selective",decisionAr:"انتقائي",cls:"warning"},
      {name:"Price Fairness",nameAr:"عدالة السعر",avg:2.9,path:.32,impact:.12,decision:"Monitor",decisionAr:"راقب",cls:"info"},
      {name:"Advisor Behavior",nameAr:"سلوك المستشار",avg:3.8,path:.36,impact:.10,decision:"Maintain",decisionAr:"حافظ",cls:""},
      {name:"Speed",nameAr:"السرعة",avg:1.4,path:.04,impact:.01,decision:"Do not overinvest",decisionAr:"لا تُبالغ في الاستثمار",cls:"danger"}
    ],
    invest:["Fund quality consistency improvements.","Audit first-time-right and rework patterns.","Make quality the main CX improvement program."],
    investAr:["موّل تحسينات الجودة المستمرة.","راجع أنماط الإصلاح من أول مرة والإعادة.","اجعل الجودة برنامج التحسين الرئيسي."],
    optimize:["Improve customer communication discipline.","Use advisor scripts for updates.","Target price fairness where complaints cluster."],
    optimizeAr:["حسّن انضباط التواصل مع العملاء.","استخدم نصوص المستشار للتحديثات.","استهدف عدالة السعر حيث تتركز الشكاوى."],
    avoid:["Do not invest in speed just because its average is low.","Do not build one action plan for all branches.","Do not use averages as decision authority."],
    avoidAr:["لا تستثمر في السرعة لأن متوسطها منخفض فقط.","لا تبنِ خطة عمل واحدة لجميع الفروع.","لا تستخدم المتوسطات كسلطة قرار."]
  },
  "Riyadh": {
    score:3.7, explanatory:74, top:"Quality", risk:"Speed",
    topAr:"الجودة", riskAr:"السرعة",
    drivers:[
      {name:"Quality",nameAr:"الجودة",avg:3.5,path:.71,impact:.34,decision:"Invest",decisionAr:"استثمر",cls:"navy"},
      {name:"Advisor Behavior",nameAr:"سلوك المستشار",avg:3.9,path:.39,impact:.15,decision:"Optimize",decisionAr:"حسّن",cls:"warning"},
      {name:"Communication",nameAr:"التواصل",avg:3.2,path:.31,impact:.11,decision:"Selective",decisionAr:"انتقائي",cls:"info"},
      {name:"Price Fairness",nameAr:"عدالة السعر",avg:3.0,path:.20,impact:.07,decision:"Monitor",decisionAr:"راقب",cls:""},
      {name:"Speed",nameAr:"السرعة",avg:1.5,path:.03,impact:.01,decision:"Do not overinvest",decisionAr:"لا تُبالغ",cls:"danger"}
    ],
    invest:["Invest in repair quality consistency.","Introduce quality gate before delivery.","Tie rework reduction to branch KPIs."],
    investAr:["استثمر في استمرارية جودة الإصلاح.","أدخل بوابة جودة قبل التسليم.","اربط تخفيض الإعادة بمؤشرات الفرع."],
    optimize:["Coach advisors on expectation setting.","Improve explanation during handover.","Track advisor-level complaints."],
    optimizeAr:["درّب المستشارين على تحديد التوقعات.","حسّن الشرح أثناء التسليم.","تتبع الشكاوى على مستوى المستشار."],
    avoid:["Do not add capacity only to improve speed.","Avoid generic campaigns not linked to quality.","Do not treat Riyadh like other branches."],
    avoidAr:["لا تضف طاقة فقط لتحسين السرعة.","تجنّب الحملات العامة غير المرتبطة بالجودة.","لا تعامل الرياض مثل الفروع الأخرى."]
  },
  "Jeddah": {
    score:3.4, explanatory:69, top:"Communication", risk:"Speed",
    topAr:"التواصل", riskAr:"السرعة",
    drivers:[
      {name:"Communication",nameAr:"التواصل",avg:2.8,path:.62,impact:.26,decision:"Invest",decisionAr:"استثمر",cls:"navy"},
      {name:"Quality",nameAr:"الجودة",avg:3.4,path:.44,impact:.18,decision:"Optimize",decisionAr:"حسّن",cls:"warning"},
      {name:"Price Fairness",nameAr:"عدالة السعر",avg:2.7,path:.33,impact:.12,decision:"Selective",decisionAr:"انتقائي",cls:"info"},
      {name:"Advisor Behavior",nameAr:"سلوك المستشار",avg:3.5,path:.25,impact:.08,decision:"Monitor",decisionAr:"راقب",cls:""},
      {name:"Speed",nameAr:"السرعة",avg:1.3,path:.05,impact:.01,decision:"Do not overinvest",decisionAr:"لا تُبالغ",cls:"danger"}
    ],
    invest:["Invest in communication discipline.","Mandatory customer update checkpoints.","Daily advisor update compliance tracking."],
    investAr:["استثمر في انضباط التواصل.","نقاط تحديث إلزامية للعملاء.","تتبع يومي لامتثال تحديثات المستشار."],
    optimize:["Target quality issues in repeat complaints.","Use selective quality audit.","Improve repair explanation to customer."],
    optimizeAr:["استهدف مشكلات الجودة في الشكاوى المتكررة.","استخدم تدقيق جودة انتقائي.","حسّن شرح الإصلاح للعميل."],
    avoid:["Do not assume speed is the root cause.","Avoid staffing increases without driver evidence.","Do not overreact to low averages."],
    avoidAr:["لا تفترض أن السرعة هي السبب الجذري.","تجنّب زيادة الكوادر بدون دليل محرك.","لا تبالغ في الاستجابة لانخفاض المتوسطات."]
  },
  "Dammam": {
    score:3.2, explanatory:63, top:"Price Fairness", risk:"Speed",
    topAr:"عدالة السعر", riskAr:"السرعة",
    drivers:[
      {name:"Price Fairness",nameAr:"عدالة السعر",avg:2.5,path:.51,impact:.22,decision:"Invest",decisionAr:"استثمر",cls:"navy"},
      {name:"Communication",nameAr:"التواصل",avg:3.0,path:.37,impact:.15,decision:"Optimize",decisionAr:"حسّن",cls:"warning"},
      {name:"Quality",nameAr:"الجودة",avg:3.3,path:.30,impact:.10,decision:"Selective",decisionAr:"انتقائي",cls:"info"},
      {name:"Advisor Behavior",nameAr:"سلوك المستشار",avg:3.4,path:.21,impact:.06,decision:"Monitor",decisionAr:"راقب",cls:""},
      {name:"Speed",nameAr:"السرعة",avg:1.2,path:.04,impact:.01,decision:"Do not overinvest",decisionAr:"لا تُبالغ",cls:"danger"}
    ],
    invest:["Invest in price fairness explanation.","Improve estimate transparency.","Train advisors on value explanation."],
    investAr:["استثمر في شرح عدالة السعر.","حسّن شفافية التقديرات.","درّب المستشارين على شرح القيمة."],
    optimize:["Support price fairness with better communication.","Send clear estimates before approval.","Track price-related objections."],
    optimizeAr:["ادعم عدالة السعر بتواصل أفضل.","أرسل تقديرات واضحة قبل الموافقة.","تتبع الاعتراضات المتعلقة بالسعر."],
    avoid:["Do not discount blindly.","Do not prioritize speed.","Avoid across-the-board fixes."],
    avoidAr:["لا تُقدّم خصومات بشكل أعمى.","لا تُعطِ أولوية للسرعة.","تجنّب الإصلاحات الشاملة."]
  }
};

/** Full branch-keyed dashboard model (same shape as `DB_DATA`). Optional remote override via `/api/roshd/config`. */
const ROSHD_DB_MODEL_KEY = 'roshd_dashboard_db_model';

/** Same filter signature as admin `buildExecutiveFilterKey` / `buildCxFilterKey` (all 8 filters, ` | `). */
/**
 * Type-3 scope key — region | branch | service only (client spec).
 * Region & branch are mutually exclusive. Must match the admin panel's
 * admBuildScope3Key() exactly so saved overrides resolve here.
 */
function dbBuildDashboardFilterKey() {
  const region = dbFilValueByKey('region', '');
  const branch = dbFilValueByKey('branch', '');
  const service = dbFilValueByKey('service', '');
  const geo = region ? 'r:' + region : branch ? 'b:' + branch : 'all';
  const svc = service ? 's:' + service : 'all';
  return geo + ' | ' + svc;
}

/** Merge `GET /api/dashboard/data` (segment_insights + metrics) over embedded `DB_DATA` when no full KV model. */
function dbMergeStaticModelWithSegmentApi(base) {
  let api;
  try {
    api = typeof window !== 'undefined' ? window.__ROSHD_SEGMENT_API__ : null;
  } catch (_) {
    api = null;
  }
  if (!api || typeof api !== 'object' || !Object.keys(api).length) return base;
  const out = JSON.parse(JSON.stringify(base));
  for (const [bk, payload] of Object.entries(api)) {
    if (!payload || typeof payload !== 'object') continue;
    const prev = out[bk] || out['All Branches'];
    if (!prev) continue;
    const merged = Object.assign({}, prev, {
      score: payload.score != null ? Number(payload.score) : prev.score,
      explanatory: payload.explanatory != null ? payload.explanatory : prev.explanatory,
      top: payload.top != null ? payload.top : prev.top,
      topAr: payload.topAr != null ? payload.topAr : prev.topAr,
      risk: payload.risk != null ? payload.risk : prev.risk,
      riskAr: payload.riskAr != null ? payload.riskAr : prev.riskAr,
      invest: Array.isArray(payload.invest) ? payload.invest : prev.invest,
      investAr: Array.isArray(payload.investAr) ? payload.investAr : prev.investAr,
      optimize: Array.isArray(payload.optimize) ? payload.optimize : prev.optimize,
      optimizeAr: Array.isArray(payload.optimizeAr) ? payload.optimizeAr : prev.optimizeAr,
      avoid: Array.isArray(payload.avoid) ? payload.avoid : prev.avoid,
      avoidAr: Array.isArray(payload.avoidAr) ? payload.avoidAr : prev.avoidAr,
    });
    if (Array.isArray(payload.drivers) && payload.drivers.length) {
      merged.drivers = payload.drivers.slice(0, 8).map((dr) => ({
        name: dr.name,
        nameAr: dr.nameAr || dr.name_ar || dr.name,
        avg: Number(dr.avg),
        path: Number(dr.path != null ? dr.path : dr.impact),
        impact: Number(dr.impact != null ? dr.impact : dr.path),
        decision: dr.decision,
        decisionAr: dr.decisionAr || dr.decision_ar || dr.decision,
        cls: dr.cls || '',
      }));
    }
    out[bk] = merged;
  }
  return out;
}

function dbModelRoot() {
  try {
    const w = typeof window !== 'undefined' ? window.__ROSHD_DB_MODEL__ : null;
    if (w && typeof w === 'object') return w;
  } catch (_) {}
  try {
    const raw = localStorage.getItem(ROSHD_DB_MODEL_KEY);
    if (raw) {
      const o = JSON.parse(raw);
      if (o && typeof o === 'object') {
        try {
          window.__ROSHD_DB_MODEL__ = o;
        } catch (_) {}
        return o;
      }
    }
  } catch (_) {}
  return dbMergeStaticModelWithSegmentApi(DB_DATA);
}

/** Loads all admin-controlled JSON from `GET /api/roshd/config` into localStorage + optional embedded DB model. */
async function roshdHydrateAllConfigFromApi() {
  try {
    const base = typeof API_BASE === 'string' ? API_BASE.replace(/\/$/, '') : '';
    if (!base) return;
    const res = await fetch(base + '/api/roshd/config', { cache: 'no-store', credentials: 'omit' });
    if (!res.ok) return;
    const data = await res.json();
    if (!data || !data.success || !data.configs || typeof data.configs !== 'object') return;
    const configs = data.configs;
    const gotFiltersFromKv = Object.prototype.hasOwnProperty.call(configs, FILTER_BAR_STORAGE_KEY);
    const remoteSnapshot = data.source === 'remote';
    for (const [key, val] of Object.entries(configs)) {
      if (val == null) continue;
      if (key === ROSHD_DB_MODEL_KEY) {
        if (val && typeof val === 'object') {
          try {
            window.__ROSHD_DB_MODEL__ = val;
          } catch (_) {}
          try {
            localStorage.setItem(ROSHD_DB_MODEL_KEY, JSON.stringify(val));
          } catch (_) {}
        }
        continue;
      }
      try {
        localStorage.setItem(key, typeof val === 'string' ? val : JSON.stringify(val));
      } catch (_) {}
    }
    if (remoteSnapshot && Object.keys(configs).length > 0) {
      for (const key of ROSHD_REMOTE_CONFIG_KEYS) {
        if (Object.prototype.hasOwnProperty.call(configs, key)) continue;
        try {
          localStorage.removeItem(key);
          if (key === ROSHD_DB_MODEL_KEY) {
            try {
              delete window.__ROSHD_DB_MODEL__;
            } catch (_) {}
          }
        } catch (_) {}
      }
    }
    if (!gotFiltersFromKv) await dbTrySyncFiltersFromApi();
  } catch (_) {}
}

/** Load segment_insights + segment_driver_metrics via API and merge into live scores (unless full KV model replaced DB_DATA). */
async function dbTrySyncDashboardDataFromApi() {
  try {
    const base = typeof API_BASE === 'string' ? API_BASE.replace(/\/$/, '') : '';
    if (!base) return;
    const res = await fetch(base + '/api/dashboard/data', { cache: 'no-store', credentials: 'omit' });
    if (!res.ok) return;
    const data = await res.json();
    if (!data || !data.success || !data.data || typeof data.data !== 'object') return;
    try {
      window.__ROSHD_SEGMENT_API__ = data.data;
    } catch (_) {}
  } catch (_) {}
}

const DB_SAMPLE_TOTAL = 300;
const DB_BR_LIST = ["Riyadh", "Jeddah", "Dammam"];
const DB_GENDER_LIST = ["Male", "Female"];
const DB_SVC_LIST = ["Mechanical", "Bodyshop"];
const DB_FREQ_LIST = ["1 Visit", "2–3 Visits", "4+ Visits"];
const DB_AGE_LIST = ["<25", "25–34", "35–44", "45+"];

/** Must match admin `FILTER_BAR_STORAGE_KEY` */
const FILTER_BAR_STORAGE_KEY = 'roshd_filter_bar_config';
/** Mirror admin `ROSHD_CONFIG_KV_KEYS` — keys reconciled when GET `/api/roshd/config` returns `source: remote`. */
const ROSHD_REMOTE_CONFIG_KEYS = [
  FILTER_BAR_STORAGE_KEY,
  'roshd_executive_overrides',
  'roshd_cx_drivers_overrides',
  'roshd_units_performance_overrides',
  'roshd_demographics_overrides',
  'roshd_customer_patterns_overrides',
  'roshd_questionnaire_overrides',
  'roshd_pilot_analysis_overrides',
  'roshd_model_quality_overrides',
  ROSHD_DB_MODEL_KEY,
];
let __dbgFilterCfgSig = '';

function dbDefaultFilterBarConfig() {
  return {
    filters: [
      { key: 'branch', labelEn: 'Branch', labelAr: 'الفرع', allValue: 'All Branches', allLabelEn: 'All Branches', allLabelAr: 'جميع الفروع', options: [{ value: 'Riyadh', labelEn: 'Riyadh', labelAr: 'الرياض' }, { value: 'Jeddah', labelEn: 'Jeddah', labelAr: 'جدة' }, { value: 'Dammam', labelEn: 'Dammam', labelAr: 'الدمام' }] },
      { key: 'gender', labelEn: 'Gender', labelAr: 'الجنس', allValue: 'All Genders', allLabelEn: 'All Genders', allLabelAr: 'الجنسين', options: [{ value: 'Male', labelEn: 'Male', labelAr: 'ذكر' }, { value: 'Female', labelEn: 'Female', labelAr: 'أنثى' }] },
      { key: 'service', labelEn: 'Service', labelAr: 'الخدمة', allValue: 'All Services', allLabelEn: 'All Services', allLabelAr: 'جميع الخدمات', options: [{ value: 'Mechanical', labelEn: 'Mechanical', labelAr: 'ميكانيكي' }, { value: 'Bodyshop', labelEn: 'Bodyshop', labelAr: 'هيكل السيارة' }] },
      { key: 'frequency', labelEn: 'Frequency', labelAr: 'تكرار الزيارات', allValue: 'All Frequencies', allLabelEn: 'All Frequencies', allLabelAr: 'كل التكرارات', options: [{ value: '1 Visit', labelEn: '1 Visit', labelAr: 'زيارة واحدة' }, { value: '2–3 Visits', labelEn: '2–3 Visits', labelAr: '2–3 زيارات' }, { value: '4+ Visits', labelEn: '4+ Visits', labelAr: '4+ زيارات' }] },
      { key: 'age', labelEn: 'Age', labelAr: 'العمر', allValue: 'All Ages', allLabelEn: 'All Ages', allLabelAr: 'كل الأعمار', options: [{ value: '<25', labelEn: '<25', labelAr: 'أقل من 25' }, { value: '25–34', labelEn: '25–34', labelAr: '25–34' }, { value: '35–44', labelEn: '35–44', labelAr: '35–44' }, { value: '45+', labelEn: '45+', labelAr: '45+' }] },
      { key: 'extra1', labelEn: 'Channel', labelAr: 'القناة', allValue: '__ALL__', allLabelEn: 'All channels', allLabelAr: 'كل القنوات', options: [{ value: 'Walk-in', labelEn: 'Walk-in', labelAr: 'حضوري' }, { value: 'App', labelEn: 'App / Online', labelAr: 'التطبيق' }, { value: 'Phone', labelEn: 'Phone', labelAr: 'هاتف' }] },
      { key: 'extra2', labelEn: 'Customer type', labelAr: 'نوع العميل', allValue: '__ALL__', allLabelEn: 'All types', allLabelAr: 'كل الأنواع', options: [{ value: 'New', labelEn: 'New', labelAr: 'جديد' }, { value: 'Returning', labelEn: 'Returning', labelAr: 'عائد' }] },
      { key: 'extra3', labelEn: 'Day part', labelAr: 'فترة اليوم', allValue: '__ALL__', allLabelEn: 'All', allLabelAr: 'الكل', options: [{ value: 'Weekday', labelEn: 'Weekday', labelAr: 'يوم عمل' }, { value: 'Weekend', labelEn: 'Weekend', labelAr: 'عطلة' }] },
      { key: 'region', labelEn: 'Region', labelAr: 'المنطقة', allValue: 'All Regions', allLabelEn: 'All Regions', allLabelAr: 'كل المناطق', options: [] }
    ]
  };
}

/** Region = combination of branches; options + branch membership come from /api/regions. */
function dbInjectRegionOptions(cfg) {
  if (!cfg || !Array.isArray(cfg.filters)) return cfg;
  let rf = cfg.filters.find((f) => f && f.key === 'region');
  if (!rf) {
    rf = { key: 'region', labelEn: 'Region', labelAr: 'المنطقة', allValue: 'All Regions', allLabelEn: 'All Regions', allLabelAr: 'كل المناطق', options: [] };
    cfg.filters.push(rf);
  }
  const list = Array.isArray(window.__ROSHD_REGION_LIST__) ? window.__ROSHD_REGION_LIST__ : [];
  if (list.length) {
    rf.options = list.map((r) => ({
      value: String(r.slug),
      labelEn: String(r.name_en || r.slug),
      labelAr: String(r.name_ar || r.name_en || r.slug),
      active: true,
    }));
  }
  return cfg;
}

function dbDeepCloneJson(x) {
  try { return JSON.parse(JSON.stringify(x)); } catch (_) { return dbDefaultFilterBarConfig(); }
}

function dbNormalizeFilterBarConfig(parsed) {
  const def = dbDefaultFilterBarConfig();
  if (!parsed || typeof parsed !== 'object' || !Array.isArray(parsed.filters)) return def;
  const out = { filters: [] };
  for (let i = 0; i < def.filters.length; i++) {
    const d = dbDeepCloneJson(def).filters[i];
    const s = parsed.filters[i];
    if (!s || typeof s !== 'object') {
      out.filters.push(d);
      continue;
    }
    const merged = {
      key: d.key,
      labelEn: String(s.labelEn || d.labelEn),
      labelAr: String(s.labelAr || d.labelAr),
      allValue: String(s.allValue != null && s.allValue !== '' ? s.allValue : d.allValue),
      allLabelEn: String(s.allLabelEn || d.allLabelEn),
      allLabelAr: String(s.allLabelAr || d.allLabelAr),
      options: dbDeepCloneJson(d.options)
    };
    const rawOpts = Array.isArray(s.options) ? s.options : [];
    const seen = new Set();
    const opts = [];
    rawOpts.forEach((ro) => {
      const v = String(ro && ro.value != null ? ro.value : '').trim();
      if (!v || seen.has(v)) return;
      seen.add(v);
      opts.push({
        value: v,
        labelEn: String(ro.labelEn || v),
        labelAr: String(ro.labelAr || ro.labelEn || v),
        active: ro.active === false ? false : true
      });
    });
    if (opts.length) merged.options = opts;
    out.filters.push(merged);
  }
  return out;
}

// ── PERF: memoize the normalized filter-bar config ──────────────────────────
// dbGetFilterBarConfig() is called hundreds of times per render (per customer
// row, per filter helper), and each call used to re-parse localStorage and
// fully re-normalize the config with several deep JSON clones — ~2s/render.
// The output is a pure function of (stored config JSON, region list), so we
// cache it keyed on both. Any real change to either produces a new key and the
// cache rebuilds automatically. Values are byte-identical to the original; only
// the redundant recomputation is removed. (Verified: only dbInjectRegionOptions
// mutates the object, idempotently; all other call sites read it.)
let __fbCfgKey = null;
let __fbCfgVal = null;
function dbGetFilterBarConfig() {
  let raw = '';
  try { raw = localStorage.getItem(FILTER_BAR_STORAGE_KEY) || ''; } catch (_) {}
  const rl = Array.isArray(window.__ROSHD_REGION_LIST__) ? window.__ROSHD_REGION_LIST__ : [];
  let rkey = rl.length + '|';
  for (let i = 0; i < rl.length; i++) rkey += ((rl[i] && rl[i].slug) || '') + ',';
  const key = raw + '' + rkey;
  if (key === __fbCfgKey && __fbCfgVal) return __fbCfgVal;
  let cfg;
  try {
    cfg = raw ? dbNormalizeFilterBarConfig(JSON.parse(raw)) : dbDefaultFilterBarConfig();
  } catch (_) {
    cfg = dbDefaultFilterBarConfig();
  }
  cfg = dbInjectRegionOptions(cfg);
  __fbCfgKey = key;
  __fbCfgVal = cfg;
  return cfg;
}

/** Pull latest toolbar filters from API (same JSON as localStorage). No-op if API missing or empty. */
async function dbTrySyncFiltersFromApi() {
  try {
    const base = typeof API_BASE === 'string' ? API_BASE.replace(/\/$/, '') : '';
    if (!base) return;
    const res = await fetch(base + '/api/filters', { cache: 'no-store', credentials: 'omit' });
    if (!res.ok) return;
    const data = await res.json();
    if (!data || !data.success || data.config == null || typeof data.config !== 'object') return;
    const merged = dbNormalizeFilterBarConfig(data.config);
    localStorage.setItem(FILTER_BAR_STORAGE_KEY, JSON.stringify(merged));
  } catch (_) {}
}

function dbFilterConfigFingerprint() {
  try { return JSON.stringify(dbGetFilterBarConfig().filters); } catch (_) { return ''; }
}

/** Column index for customer row: dims 1–5 at 1–5, extras at 12–14 (risk stays at 11). */
function dbFilterDatasetCol(filterIndex) {
  if (filterIndex < 5) return 1 + filterIndex;
  return 12 + (filterIndex - 5);
}

function dbFilId(kind, i) {
  if (kind === 'exec') return 'execFil' + i;
  if (kind === 'cx') return 'cxFil' + i;
  return 'dbFil' + i;
}

function dbGetFilValue(kind, i) {
  const cfg = dbGetFilterBarConfig();
  const f = cfg.filters[i];
  if (!f) return '';
  const el = document.getElementById(dbFilId(kind, i));
  const allV = String(f.allValue ?? '').trim();
  const raw = el ? String(el.value).trim() : allV;
  if (raw === '') return allV;
  return raw;
}

function dbFilValueByKey(key, fallbackWhenAll) {
  const cfg = dbGetFilterBarConfig();
  const ix = cfg.filters.findIndex((x) => x.key === key);
  if (ix < 0) return fallbackWhenAll;
  const f = cfg.filters[ix];
  const v = dbGetFilValue('db', ix);
  const allV = String(f.allValue ?? '').trim();
  if (!v || v === allV) return fallbackWhenAll;
  return v;
}

function dbFilMatchesCustomerRow(cust, filterIndex, selectedRaw) {
  const cfg = dbGetFilterBarConfig();
  const f = cfg.filters[filterIndex];
  if (!f) return true;
  const allV = String(f.allValue ?? '').trim();
  const sel = String(selectedRaw ?? '').trim();
  if (sel === '' || sel === allV) return true;
  // Region is a grouping of branches — a row matches if its branch is in the region.
  if (f.key === 'region') {
    const branches = (window.__ROSHD_REGION_BRANCHES__ || {})[sel] || [];
    return branches.indexOf(String(cust[1] ?? '').trim()) >= 0;
  }
  const col = dbFilterDatasetCol(filterIndex);
  return String(cust[col] ?? '').trim() === sel;
}

function dbGetAllFilValues(kind) {
  const cfg = dbGetFilterBarConfig();
  const out = [];
  for (let i = 0; i < cfg.filters.length; i++) out.push(dbGetFilValue(kind, i));
  return out;
}

function dbPersistRoshdFilters() {
  const cfg = dbGetFilterBarConfig();
  const o = {};
  cfg.filters.forEach((f, i) => {
    const el = document.getElementById(dbFilId('db', i));
    o[f.key] = el ? String(el.value) : String(f.allValue ?? '');
  });
  try {
    localStorage.setItem('roshd_filters', JSON.stringify(o));
  } catch (_) {}
}

function dbRestoreRoshdFilters(obj) {
  if (!obj || typeof obj !== 'object') return;
  const cfg = dbGetFilterBarConfig();
  const legacy = {
    branch: obj.branch,
    gender: obj.gender,
    service: obj.service,
    frequency: obj.frequency,
    age: obj.age
  };
  cfg.filters.forEach((f, i) => {
    const el = document.getElementById(dbFilId('db', i));
    if (!el) return;
    let v = obj[f.key];
    if (v == null || v === '') v = legacy[f.key];
    if (v == null || v === '') return;
    const has = Array.from(el.options).some((o) => String(o.value) === String(v));
    if (has) el.value = String(v);
  });
  if (typeof dbApplyBranchRegionLock === 'function') dbApplyBranchRegionLock();
}

function dbSyncFilterBarAfterExternalConfigChange() {
  try {
    __dbgFilterCfgSig = '';
    dbBuildCustomerFilterBar();
    dbRestoreRoshdFilters(JSON.parse(localStorage.getItem('roshd_filters') || 'null'));
    dbEnsureCustomersBuiltForFilters();
    if (typeof dbRender === 'function') dbRender();
  } catch (_) {}
}

function dbEnsureCustomersBuiltForFilters() {
  const sig = dbFilterConfigFingerprint();
  if (__dbgFilterCfgSig === sig && DB_CUSTOMERS.length) return;
  __dbgFilterCfgSig = sig;
  dbRegenerateCustomers();
}

function dbEscAttr(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function dbUpdateFilterBarScrollFade(outer) {
  if (!outer) return;
  const max = outer.scrollWidth - outer.clientWidth;
  if (max <= 1) {
    outer.classList.remove('is-scrollable-start', 'is-scrollable-end');
    return;
  }
  const tol = 4;
  const sl = outer.scrollLeft;
  outer.classList.toggle('is-scrollable-start', sl > tol);
  outer.classList.toggle('is-scrollable-end', sl < max - tol);
}

let __dbFilterScrollBound = false;
function dbBindFilterBarScrollFade() {
  const outer = document.querySelector('.db-filter-bar-scroll-outer');
  if (!outer) return;
  const upd = () => {
    requestAnimationFrame(() => dbUpdateFilterBarScrollFade(outer));
  };
  upd();
  if (__dbFilterScrollBound) return;
  __dbFilterScrollBound = true;
  outer.addEventListener('scroll', upd, { passive: true });
  window.addEventListener('resize', upd);
}

function dbBuildCustomerFilterBar() {
  const host = document.getElementById('dbFilterBarInner');
  if (!host) return;
  const cfg = dbGetFilterBarConfig();
  // Keep config indices stable for value reads, but show Region right after Branch.
  const order = cfg.filters.map((f, i) => ({ f, i }));
  const regionItem = order.find((x) => x.f && x.f.key === 'region');
  if (regionItem) {
    order.splice(order.indexOf(regionItem), 1);
    const bIx = order.findIndex((x) => x.f && x.f.key === 'branch');
    order.splice(bIx >= 0 ? bIx + 1 : order.length, 0, regionItem);
  }
  host.innerHTML = order.map(({ f, i }) => {
    const fid = dbFilId('db', i);
    const lbl = `<label class="db-filter-chip-lbl" for="${fid}"><span class="en">${dbEscAttr(f.labelEn)}</span><span class="ar">${dbEscAttr(f.labelAr)}</span></label>`;
    const optAll = `<option value="${dbEscAttr(f.allValue)}" data-en="${dbEscAttr(f.allLabelEn)}" data-ar="${dbEscAttr(f.allLabelAr)}">${dbEscAttr(f.allLabelEn)}</option>`;
    const opts = (f.options || [])
      .filter((o) => o && o.active !== false)
      .map(
      (o) =>
        `<option value="${dbEscAttr(o.value)}" data-en="${dbEscAttr(o.labelEn)}" data-ar="${dbEscAttr(o.labelAr)}">${dbEscAttr(o.labelEn)}</option>`
    ).join('');
    return `<div class="db-filter-chip" data-filter-key="${dbEscAttr(f.key)}">${lbl}<div class="db-filter-chip-select-wrap"><select class="db-select" id="${fid}" aria-label="${dbEscAttr(f.labelEn)}" onchange="dbOnFilterChange(this)">${optAll}${opts}</select></div></div>`;
  }).join('');
  document.querySelectorAll('#dbFilterBarInner select option[data-en]').forEach((opt) => {
    const en = opt.dataset.en;
    const ar = opt.dataset.ar;
    opt.textContent = document.documentElement.getAttribute('data-lang') === 'ar' ? (ar || en) : en;
  });
  dbApplyBranchRegionLock();
  dbBindFilterBarScrollFade();
}

/** Client rule: Region & Branch are mutually exclusive — picking one disables the other. */
function dbApplyBranchRegionLock() {
  const cfg = dbGetFilterBarConfig();
  const bi = cfg.filters.findIndex((f) => f && f.key === 'branch');
  const ri = cfg.filters.findIndex((f) => f && f.key === 'region');
  if (bi < 0 || ri < 0) return;
  const bSel = document.getElementById(dbFilId('db', bi));
  const rSel = document.getElementById(dbFilId('db', ri));
  if (!bSel || !rSel) return;
  const bAll = String(cfg.filters[bi].allValue ?? '').trim();
  const rAll = String(cfg.filters[ri].allValue ?? '').trim();
  const bActive = bSel.value && String(bSel.value).trim() !== bAll;
  const rActive = rSel.value && String(rSel.value).trim() !== rAll;
  const setLock = (sel, locked) => {
    sel.disabled = locked;
    const chip = sel.closest('.db-filter-chip');
    if (chip) chip.classList.toggle('is-locked', locked);
  };
  if (rActive) { bSel.value = bAll; setLock(bSel, true); } else { setLock(bSel, false); }
  if (bActive) { rSel.value = rAll; setLock(rSel, true); } else { setLock(rSel, false); }
}

/** Filter <select> change handler — enforces the Branch/Region lock, then re-renders. */
function dbOnFilterChange() {
  dbApplyBranchRegionLock();
  if (typeof dbRender === 'function') dbRender();
}

/** Load regions + branch membership from the API and refresh the toolbar. */
async function dbSyncRegionsFromApi() {
  try {
    const base = typeof API_BASE === 'string' ? API_BASE.replace(/\/$/, '') : '';
    if (!base) return;
    const res = await fetch(base + '/api/regions', { cache: 'no-store', credentials: 'omit' });
    if (!res.ok) return;
    const data = await res.json();
    if (!data || !data.success || !Array.isArray(data.regions)) return;
    window.__ROSHD_REGION_LIST__ = data.regions
      .filter((r) => r && r.is_active !== false)
      .map((r) => ({ slug: r.slug, name_en: r.name_en, name_ar: r.name_ar }));
    const map = {};
    data.regions.forEach((r) => {
      map[r.slug] = (r.branches || [])
        .map((b) => String((b && (b.slug || b.name_en)) || '').trim())
        .filter(Boolean);
    });
    window.__ROSHD_REGION_BRANCHES__ = map;
    dbBuildCustomerFilterBar();
  } catch (_) {}
}

/**
 * Type-2 data source — pull real survey rows from customer_satisfaction_records.
 * When the admin has uploaded data, the dashboard computes scores/means/
 * distributions from it; otherwise it falls back to the synthetic sample.
 */
async function dbSyncCustomerRecordsFromApi() {
  try {
    const base = typeof API_BASE === 'string' ? API_BASE.replace(/\/$/, '') : '';
    if (!base) return;
    const res = await fetch(base + '/api/customers', { cache: 'no-store', credentials: 'omit' });
    if (!res.ok) return;
    const data = await res.json();
    if (!data || !data.success || !Array.isArray(data.customers) || !data.customers.length) {
      window.__ROSHD_REAL_CUSTOMERS__ = null;
      return;
    }
    const num = (v, d) => { const n = Number(v); return isFinite(n) ? n : d; };
    window.__ROSHD_REAL_CUSTOMERS__ = data.customers.map((c) => {
      const q = num(c.rating_1, 3), cm = num(c.rating_2, 3), p = num(c.rating_3, 3), s = num(c.rating_4, 3);
      let sat = num(c.overall_satisfaction, NaN);
      if (!isFinite(sat)) sat = Math.max(1, Math.min(5, q * 0.38 + cm * 0.27 + p * 0.22 + s * 0.05 + 1.0));
      const risk = c.risk_tier || (sat < 3 ? 'High' : sat < 3.6 ? 'Medium' : 'Low');
      return [
        c.customer_ref || c.id, c.branch || '', c.gender || '', c.service_line || '',
        c.visit_frequency || '', c.age_band || '',
        +q.toFixed(1), +cm.toFixed(1), +p.toFixed(1), +s.toFixed(1), +sat.toFixed(1),
        risk, '—', '—', '—',
      ];
    });
    __dbgFilterCfgSig = '';
    dbEnsureCustomersBuiltForFilters();
  } catch (_) {}
}

/** Re-pull all admin-controlled config + data, then re-render the open dashboard. */
let __roshdRtTimer = null;
function roshdLiveRefresh() {
  clearTimeout(__roshdRtTimer);
  __roshdRtTimer = setTimeout(async () => {
    try {
      await roshdHydrateAllConfigFromApi();
      await dbSyncRegionsFromApi();
      await dbSyncCustomerRecordsFromApi();
      if (typeof dbTrySyncDashboardDataFromApi === 'function') await dbTrySyncDashboardDataFromApi();
      if (typeof dbSyncFilterBarAfterExternalConfigChange === 'function') {
        dbSyncFilterBarAfterExternalConfigChange();
      } else if (typeof dbRender === 'function') {
        dbRender();
      }
    } catch (_) {}
  }, 300);
}

/** Subscribe to Supabase Realtime so admin changes reflect live, cross-device. */
async function roshdSetupRealtime() {
  try {
    if (window.__ROSHD_RT_DONE__) return;
    // Wait briefly for the deferred Supabase CDN script.
    for (let i = 0; i < 40 && !(window.supabase && window.supabase.createClient); i++) {
      await new Promise((r) => setTimeout(r, 50));
    }
    if (!window.supabase || !window.supabase.createClient) return;
    const base = typeof API_BASE === 'string' ? API_BASE.replace(/\/$/, '') : '';
    const res = await fetch(base + '/api/public-config', { cache: 'no-store', credentials: 'omit' });
    if (!res.ok) return;
    const cfg = await res.json();
    if (!cfg || !cfg.supabaseUrl || !cfg.supabaseAnonKey) return;
    const sb = window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey, {
      auth: { persistSession: false },
      realtime: { params: { eventsPerSecond: 5 } },
    });
    window.__ROSHD_RT_DONE__ = true;
    window.__ROSHD_SB__ = sb;
    const tables = [
      'roshd_config_kv', 'filter_bar_remote_config', 'regions', 'branches',
      'segment_insights', 'segment_driver_metrics', 'customer_satisfaction_records',
      'dashboard_settings', 'dashboard_model_quality', 'drivers',
    ];
    let ch = sb.channel('roshd-dashboard-rt');
    tables.forEach((t) => {
      ch = ch.on('postgres_changes', { event: '*', schema: 'public', table: t }, roshdLiveRefresh);
    });
    ch.subscribe();
    // Polling safety-net — guarantees admin changes appear even if a Realtime
    // event is missed (network blip, mobile sleep, subscription lag).
    if (!window.__ROSHD_RT_POLL__) {
      window.__ROSHD_RT_POLL__ = setInterval(() => {
        try {
          const dash = document.getElementById('customerDashboard');
          if (dash && dash.classList.contains('open')) roshdLiveRefresh();
        } catch (_) {}
      }, 30000);
    }
  } catch (_) {}
}

/** @type {Array<any>} Customer rows: … + risk @11, extra1–3 @12–14 */
const DB_CUSTOMERS = [];

function dbRegenerateCustomers() {
  DB_CUSTOMERS.length = 0;
  // Type-2: use real uploaded survey rows when available.
  const real = window.__ROSHD_REAL_CUSTOMERS__;
  if (Array.isArray(real) && real.length) {
    for (let i = 0; i < real.length; i++) DB_CUSTOMERS.push(real[i]);
    return;
  }
  const cfg = dbGetFilterBarConfig();

  function optVals(ix) {
    const o = (cfg.filters[ix] && cfg.filters[ix].options) || [];
    const out = o
      .filter((x) => x && x.active !== false)
      .map((x) => String(x.value).trim())
      .filter(Boolean);
    return out.length ? out : ['—'];
  }

  function pick(arr, seed) {
    if (!arr.length) return '';
    const u = (typeof seed === 'number' ? seed >>> 0 : 1) >>> 0;
    return arr[(u * 7919 + 104729 + (seed || 1) * 993) % arr.length];
  }

  const brOpts = optVals(0).filter((b) => b && b !== '—');
  let branchChoicesFinal = brOpts.filter((b) => dbModelRoot()[b]);
  if (!branchChoicesFinal.length) {
    branchChoicesFinal = brOpts.length ? brOpts : DB_BR_LIST.slice();
  }

  const branchPool = [];
  for (let zi = 0; zi < branchChoicesFinal.length; zi++) {
    const b = branchChoicesFinal[zi];
    const nEach = DB_SAMPLE_TOTAL / branchChoicesFinal.length;
    for (let z = 0; z < nEach; z++) branchPool.push(b);
  }
  while (branchPool.length < DB_SAMPLE_TOTAL)
    branchPool.push(branchChoicesFinal[branchPool.length % branchChoicesFinal.length]);
  for (let k = branchPool.length - 1; k > 0; k--) {
    const jj = ((k * 7919 + 104729 + k * k * 993) >>> 0) % (k + 1);
    const t = branchPool[k];
    branchPool[k] = branchPool[jj];
    branchPool[jj] = t;
  }

  for (let i = 1; i <= DB_SAMPLE_TOTAL; i++) {
    const seed = i * 31 + ((i ^ 997) >>> 0);
    let branch = branchPool[i - 1];

    let gender = pick(optVals(1), seed ^ 3);
    if (!gender || gender === '—') gender = (i * 7) % 10 < 6 ? 'Male' : 'Female';
    let service = pick(optVals(2), seed ^ 7);
    if (!service || service === '—') service = (i * 11) % 5 < 3 ? 'Mechanical' : 'Bodyshop';
    let frequency = pick(optVals(3), seed ^ 13);
    if (!frequency || frequency === '—') frequency = (i * 13) % 10 < 3 ? '1 Visit' : (i * 13) % 10 < 8 ? '2–3 Visits' : '4+ Visits';
    let age = pick(optVals(4), seed ^ 21);
    if (!age || age === '—') {
      let ageBand = (i * 17) % 12;
      age = ageBand < 2 ? '<25' : ageBand < 6 ? '25–34' : ageBand < 10 ? '35–44' : '45+';
    }
    let ex1 = pick(optVals(5), seed ^ 103);
    let ex2 = pick(optVals(6), seed ^ 107);
    let ex3 = pick(optVals(7), seed ^ 109);

    if (branch === 'Riyadh' && i % 4 === 0) service = 'Bodyshop';
    if (branch === 'Dammam' && i % 5 === 0) frequency = '4+ Visits';

    let q = branch === 'Riyadh' ? 3.7 : branch === 'Jeddah' ? 3.3 : 3.1;
    let c = branch === 'Jeddah' ? 2.8 : 3.2;
    let p = branch === 'Dammam' ? 2.5 : 2.9;
    let s = 1.2 + (i % 4) * 0.15;
    if (frequency === '4+ Visits') q += 0.25;
    if (age === '<25') p -= 0.25;
    if (gender === 'Female') c -= 0.1;
    const sat = Math.max(1, Math.min(5, q * 0.38 + c * 0.27 + p * 0.22 + s * 0.05 + 1.0));
    const risk = sat < 3 ? 'High' : sat < 3.6 ? 'Medium' : 'Low';

    DB_CUSTOMERS.push([
      'C-' + String(i).padStart(3, '0'),
      branch,
      gender,
      service,
      frequency,
      age,
      +q.toFixed(1),
      +c.toFixed(1),
      +p.toFixed(1),
      +s.toFixed(1),
      +sat.toFixed(1),
      risk,
      ex1 || '—',
      ex2 || '—',
      ex3 || '—'
    ]);
  }
}

(function dbBootstrapFiltersAndCustomers() {
  (async () => {
    try {
      await roshdHydrateAllConfigFromApi();
    } catch (_) {}
    try {
      await dbSyncRegionsFromApi();
    } catch (_) {}
    try {
      await dbSyncCustomerRecordsFromApi();
    } catch (_) {}
    dbRegenerateCustomers();
  })();
})();

function dbDedupeDrivers(arr) {
  const seen = new Set();
  return arr.filter(dr => {
    if (seen.has(dr.name)) return false;
    seen.add(dr.name);
    return true;
  });
}

function dbFilteredCustomers() {
  dbEnsureCustomersBuiltForFilters();
  const vals = dbGetAllFilValues('db');
  return DB_CUSTOMERS.filter((c) => vals.every((v, i) => dbFilMatchesCustomerRow(c, i, v)));
}

/** Benchmark for comparison charts: same demographics as toolbar, branches pooled (ignores Branch filter). */
function dbFilteredCustomersBenchSameDemo() {
  dbEnsureCustomersBuiltForFilters();
  const cfg = dbGetFilterBarConfig();
  const vals = dbGetAllFilValues('db');
  return DB_CUSTOMERS.filter((c) =>
    vals.every((v, i) => {
      const key = cfg.filters[i] && cfg.filters[i].key;
      // Benchmark pools geography — ignore Branch and Region.
      if (i === 0 || key === 'region') return true;
      return dbFilMatchesCustomerRow(c, i, v);
    })
  );
}

let dbCustDistIdSeq = 0;
function dbCustDistNext(prefix) {
  dbCustDistIdSeq++;
  return prefix + dbCustDistIdSeq;
}

function dbPassMetricCount(cust) {
  let k = 0;
  for (let ii = 6; ii <= 10; ii++) if (cust[ii] >= 3) k++;
  return k;
}

function dbMeanStd(vals) {
  const n = vals.length;
  if (!n) return { mean: 0, std: 0 };
  const mean = vals.reduce((a, b) => a + b, 0) / n;
  const v = vals.reduce((a, b) => a + (b - mean) * (b - mean), 0) / n;
  return { mean, std: Math.sqrt(v) };
}

function dbLinspace(a, b, n) {
  if (n < 2) return [a, b];
  const step = (b - a) / (n - 1);
  const out = [];
  for (let i = 0; i < n; i++) out.push(a + step * i);
  return out;
}

function dbBandwidthSilverman(vals) {
  const n = vals.length;
  if (n < 2) return 0.26;
  const { std } = dbMeanStd(vals);
  const sig = std > 1e-6 ? std : 0.22;
  return Math.min(0.5, Math.max(0.1, 1.06 * sig * Math.pow(n, -0.2)));
}

function dbKDEValues(vals, xs, h) {
  const n = vals.length;
  if (!n) return xs.map(() => 0);
  const c = 1 / (n * h * Math.sqrt(2 * Math.PI));
  const out = xs.map(() => 0);
  for (let v of vals) {
    for (let i = 0; i < xs.length; i++) {
      const t = (xs[i] - v) / h;
      out[i] += c * Math.exp(-0.5 * t * t);
    }
  }
  return out;
}

/**
 * Overlapping density areas (kernel-smoothed) — lime cohort vs teal benchmark.
 * @param {{ width?: number, height?: number, meanA?: number, meanB?: number, padTop?: number }} [opts]
 */
function dbSvgDualKDE(valsA, valsB, vmin, vmax, opts) {
  opts = opts || {};
  const W = opts.width || 340;
  const H = opts.height || 140;
  const padL = 38;
  const padR = 12;
  const padB = 30;
  const hasB = valsB && valsB.length > 0;
  const meanAOpt = opts.meanA;
  const meanBOpt = opts.meanB;
  const meanA = meanAOpt !== undefined && meanAOpt !== null ? meanAOpt : valsA.length ? dbMeanStd(valsA).mean : null;
  const meanB =
    meanBOpt !== undefined && meanBOpt !== null ? meanBOpt : hasB && valsB.length ? dbMeanStd(valsB).mean : null;
  const showMeanA = meanA != null && Number.isFinite(meanA);
  const showMeanB = hasB && meanB != null && Number.isFinite(meanB);
  let padT = typeof opts.padTop === 'number' ? opts.padTop : 14;
  if (showMeanA || showMeanB) padT = Math.max(padT, 22);

  const innerW = W - padL - padR;
  const plotH = H - padT - padB;
  const yBase = H - padB;
  const xs = dbLinspace(vmin, vmax, 96);
  const hA = dbBandwidthSilverman(valsA);
  let yA = dbKDEValues(valsA, xs, hA);
  const hB = hasB ? dbBandwidthSilverman(valsB) : hA;
  let yB = hasB ? dbKDEValues(valsB, xs, hB) : null;
  const maxY = hasB ? Math.max(...yA, ...yB, 1e-9) : Math.max(...yA, 1e-9);
  yA = yA.map(y => y / maxY);
  if (hasB) yB = yB.map(y => y / maxY);

  const xToPx = x => padL + ((x - vmin) / (vmax - vmin)) * innerW;

  function fillPath(ys) {
    let d = `M ${xToPx(xs[0]).toFixed(2)} ${yBase.toFixed(2)}`;
    for (let i = 0; i < xs.length; i++) {
      const px = xToPx(xs[i]);
      const py = yBase - ys[i] * plotH;
      d += ` L ${px.toFixed(2)} ${py.toFixed(2)}`;
    }
    d += ` L ${xToPx(xs[xs.length - 1]).toFixed(2)} ${yBase.toFixed(2)} Z`;
    return d;
  }

  function linePath(ys) {
    let d = '';
    for (let i = 0; i < xs.length; i++) {
      const px = xToPx(xs[i]);
      const py = yBase - ys[i] * plotH;
      d += i === 0 ? `M ${px.toFixed(2)} ${py.toFixed(2)}` : ` L ${px.toFixed(2)} ${py.toFixed(2)}`;
    }
    return d;
  }

  const gidA = dbCustDistNext('dbKDgA');
  const gidB = dbCustDistNext('dbKDgB');
  const x1 = padL;
  const xMid = padL + innerW / 2;
  const xMax = padL + innerW;

  let pathsB = '';
  if (hasB) {
    pathsB = `
  <path d="${fillPath(yB)}" fill="url(#${gidB})" stroke="none"/>
  <path d="${linePath(yB)}" fill="none" stroke="#2dd4bf" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" opacity="0.92"/>`;
  }

  const clampM = x => Math.max(vmin, Math.min(vmax, x));
  const yLineTop = padT + 4;
  let meanMarks = '';
  if (showMeanB) {
    const xb = xToPx(clampM(meanB));
    meanMarks += `<line x1="${xb.toFixed(2)}" y1="${yLineTop}" x2="${xb.toFixed(2)}" y2="${yBase}" stroke="#2dd4bf" stroke-width="1.5" stroke-dasharray="6 5" opacity="0.9"/>`;
  }
  if (showMeanA) {
    const xa = xToPx(clampM(meanA));
    meanMarks += `<line x1="${xa.toFixed(2)}" y1="${yLineTop}" x2="${xa.toFixed(2)}" y2="${yBase}" stroke="#bbf7d0" stroke-width="1.65" stroke-dasharray="4 4" opacity="0.95"/>`;
  }

  return `
<svg viewBox="0 0 ${W} ${H}" class="db-dist-svg" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="${gidB}" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#0f766e" stop-opacity="0.14"/>
      <stop offset="55%" stop-color="#2dd4bf" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#5eead4" stop-opacity="0.62"/>
    </linearGradient>
    <linearGradient id="${gidA}" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#065f46" stop-opacity="0.12"/>
      <stop offset="50%" stop-color="#34d399" stop-opacity="0.44"/>
      <stop offset="100%" stop-color="#86efac" stop-opacity="0.65"/>
    </linearGradient>
  </defs>${pathsB}
  <path d="${fillPath(yA)}" fill="url(#${gidA})" stroke="none"/>
  <path d="${linePath(yA)}" fill="none" stroke="#bbf7d0" stroke-width="2.05" stroke-linecap="round" stroke-linejoin="round" opacity="0.98"/>
  ${meanMarks}
  <line x1="${x1}" y1="${yBase}" x2="${xMax}" y2="${yBase}" stroke="rgba(255,255,255,0.11)" stroke-width="1"/>
  <text x="${x1}" y="${H - 7}" fill="rgba(255,255,255,0.35)" font-size="9.5">${vmin.toFixed(1)}</text>
  <text x="${xMid}" y="${H - 7}" text-anchor="middle" fill="rgba(255,255,255,0.35)" font-size="9.5">${((vmin + vmax) / 2).toFixed(1)}</text>
  <text x="${xMax}" y="${H - 7}" text-anchor="end" fill="rgba(255,255,255,0.35)" font-size="9.5">${vmax.toFixed(1)}</text>
</svg>`;
}

function dbRenderCustomerPatterns(fc) {
  const O = dbGetCustomerPatternsOverrides();
  const esc = dbExecHtmlEscape;
  const summaryEl = document.getElementById('dbCustomerPatternsSummary');
  const dashEl = document.getElementById('dbCustomerPatternsDash');
  if (!summaryEl || !dashEl) return;
  const titleEl = document.getElementById('dbCustPatTitle');
  const subEl = document.getElementById('dbCustPatSub');
  if (titleEl) titleEl.innerHTML = `<span class="en">${esc(cpS(O, 'titleEn', 'Customer Pattern View'))}</span><span class="ar">${esc(cpS(O, 'titleAr', 'عرض أنماط العملاء'))}</span>`;
  if (subEl) subEl.innerHTML = `<span class="en">${esc(cpS(O, 'subEn', 'Distribution charts respect Branch and all demographic filters in the toolbar'))}</span><span class="ar">${esc(cpS(O, 'subAr', 'مخططات التوزيع تلتزم بمرشّح الفرع وكل مرشّحات الديموغرافيا في شريط الأدوات'))}</span>`;

  const branchSel = dbFilValueByKey('branch', 'All Branches');
  const BR_AR = { Riyadh: 'الرياض', Jeddah: 'جدة', Dammam: 'الدمام' };
  const brEn = branchSel === 'All Branches' ? 'All branches' : branchSel;
  const brAr = branchSel === 'All Branches' ? 'جميع الفروع' : (BR_AR[branchSel] || branchSel);
  const n = fc.length;

  summaryEl.innerHTML =
    `<strong><span class="en">${esc(brEn)}</span><span class="ar">${esc(brAr)}</span></strong> — ` +
    (n
      ? `<span class="en">${n} ${esc(cpS(O, 'summaryHasDataEn', 'customer%s in cohort (updates with Branch & filters)').replace('%s', n === 1 ? '' : 's'))}</span><span class="ar">${n} ${esc(cpS(O, 'summaryHasDataAr', 'عميلًا في المجموعة (يتحدَّث مع الفرع والمرشّحات)'))}</span>`
      : `<span class="en">${esc(cpS(O, 'summaryNoDataEn', 'No customers match Branch and filters · widen selections to populate charts.'))}</span><span class="ar">${esc(cpS(O, 'summaryNoDataAr', 'لا يوجد عميل مطابق للفرع والمرشّحات · وسّع الاختيار لملء المخططات.'))}</span>`);

  if (!n) {
    dashEl.innerHTML =
      `<div class="db-dist-empty"><span class="en">${esc(cpS(O, 'emptyDashEn', 'No chart data · adjust Branch filter or demographics.'))}</span>` +
      `<span class="ar">${esc(cpS(O, 'emptyDashAr', 'لا بيانات للمخطّط · عدِّل مرشّح الفرع أو الديموغرافيا.'))}</span></div>`;
    return;
  }

  const fcBench = dbFilteredCustomersBenchSameDemo();
  const legendHtml = `
    <div class="db-dist-legend">
      <span class="db-dist-legend-it"><span class="db-dist-legend-dot" style="background:linear-gradient(165deg,#86efac,#22c55e)"></span><span class="en">${esc(cpS(O, 'legendCohortEn', 'Selected cohort (Branch filter)'))}</span><span class="ar">${esc(cpS(O, 'legendCohortAr', 'مجموعة العرض (الفرع الحالي)'))}</span></span>
      <span class="db-dist-legend-it"><span class="db-dist-legend-dot" style="background:linear-gradient(165deg,#5eead4,#0d9488)"></span><span class="en">${esc(cpS(O, 'legendBenchEn', 'All branches · same demographics'))}</span><span class="ar">${esc(cpS(O, 'legendBenchAr', 'جميع الفروع · نفس الديموغرافيا'))}</span></span>
    </div>`;

  const DIMS = [
    { idx: 6, en: cpS(O, 'dimQualityEn', 'Quality'), ar: cpS(O, 'dimQualityAr', 'الجودة') },
    { idx: 7, en: cpS(O, 'dimCommunicationEn', 'Communication'), ar: cpS(O, 'dimCommunicationAr', 'التواصل') },
    { idx: 8, en: cpS(O, 'dimPriceEn', 'Price'), ar: cpS(O, 'dimPriceAr', 'السعر') },
    { idx: 9, en: cpS(O, 'dimSpeedEn', 'Speed'), ar: cpS(O, 'dimSpeedAr', 'السرعة') },
    { idx: 10, en: cpS(O, 'dimSatisfactionEn', 'Satisfaction'), ar: cpS(O, 'dimSatisfactionAr', 'الرضا') }
  ];

  const scoreCardsHtml = DIMS.map(m => {
    const vals = fc.map(c => c[m.idx]);
    const valsB = fcBench.map(c => c[m.idx]);
    const { mean, std } = dbMeanStd(vals);
    const benchStats = valsB.length ? dbMeanStd(valsB) : null;
    const benchMean = benchStats ? benchStats.mean : null;
    const passFrac = vals.filter(v => v >= 3).length / n;
    const fmtMean = x => (m.idx === 10 ? dbFormatMean5(x, 2) : x.toFixed(2));
    const svg = dbSvgDualKDE(vals, valsB, 1, 5, {
      meanA: mean,
      meanB: benchMean != null ? benchMean : undefined
    });
    const cohortPill = `<span class="db-dist-avg db-dist-avg--cohort"><span class="db-dist-avg-lbl"><span class="en">${esc(cpS(O, 'cohortAvgLblEn', 'Cohort average (μ)'))}</span><span class="ar">${esc(cpS(O, 'cohortAvgLblAr', 'متوسط المجموعة (μ)'))}</span></span><strong>${fmtMean(mean)}</strong></span>`;
    const benchPill =
      benchMean != null
        ? `<span class="db-dist-avg db-dist-avg--bench"><span class="db-dist-avg-lbl"><span class="en">${esc(cpS(O, 'benchAvgLblEn', 'Benchmark average (μ)'))}</span><span class="ar">${esc(cpS(O, 'benchAvgLblAr', 'متوسط المرجع (μ)'))}</span></span><strong>${fmtMean(benchMean)}</strong></span>`
        : '';
    const avgRowHtml = `<div class="db-dist-avg-row">${cohortPill}${benchPill}</div>`;
    return `
      <div class="db-dist-card">
        <div class="db-dist-card-head"><span class="en">${m.en}</span><span class="ar">${m.ar}</span></div>
        <div class="db-dist-card-sub"><span class="en">${esc(cpS(O, 'dimCardSubEn', 'Overlapping bell-shaped densities (Gaussian kernel)'))}</span><span class="ar">${esc(cpS(O, 'dimCardSubAr', 'منحنيان متداخلان (تنعيم نواة غوسية)'))}</span></div>
        ${svg}
        ${avgRowHtml}
        ${legendHtml}
        <div class="db-dist-meta">
          <span><b>μ</b>&nbsp;${fmtMean(mean)}</span><span><b>σ</b>&nbsp;${std.toFixed(2)}</span>
          <span><span class="en"><b>${esc(cpS(O, 'probLblEn', 'P(≥3)'))}</b> ${(passFrac * 100).toFixed(0)}%</span><span class="ar"><b>${esc(cpS(O, 'probLblAr', 'احتمال ≥3'))}</b> ${(passFrac * 100).toFixed(0)}٪</span></span>
        </div>
      </div>`;
  }).join('');

  const passA = fc.map(dbPassMetricCount);
  const passB = fcBench.map(dbPassMetricCount);
  const meanPass =
    passA.length ? passA.reduce((a, k) => a + k, 0) / passA.length : 0;

  const benchMeanPass = passB.length ? dbMeanStd(passB).mean : null;
  const svgPass = dbSvgDualKDE(passA, passB, -0.45, 5.45, {
    width: 720,
    height: 152,
    meanA: meanPass,
    meanB: benchMeanPass != null ? benchMeanPass : undefined
  });
  const avgPassRow =
    benchMeanPass != null
      ? `<div class="db-dist-avg-row">
          <span class="db-dist-avg db-dist-avg--cohort"><span class="db-dist-avg-lbl"><span class="en">${esc(cpS(O, 'cohortMeanPassEn', 'Cohort mean passes'))}</span><span class="ar">${esc(cpS(O, 'cohortMeanPassAr', 'متوسط اجتيازات المجموعة'))}</span></span><strong>${meanPass.toFixed(2)}</strong></span>
          <span class="db-dist-avg db-dist-avg--bench"><span class="db-dist-avg-lbl"><span class="en">${esc(cpS(O, 'benchMeanPassEn', 'Benchmark mean passes'))}</span><span class="ar">${esc(cpS(O, 'benchMeanPassAr', 'متوسط اجتيازات المرجع'))}</span></span><strong>${benchMeanPass.toFixed(2)}</strong></span>
        </div>`
      : `<div class="db-dist-avg-row">
          <span class="db-dist-avg db-dist-avg--cohort"><span class="db-dist-avg-lbl"><span class="en">${esc(cpS(O, 'cohortMeanPassEn', 'Cohort mean passes'))}</span><span class="ar">${esc(cpS(O, 'cohortMeanPassAr', 'متوسط اجتيازات المجموعة'))}</span></span><strong>${meanPass.toFixed(2)}</strong></span>
        </div>`;
  const passWideHtml = `
    <div class="db-dist-card db-dist-card-wide">
      <div class="db-dist-card-head"><span class="en">${esc(cpS(O, 'passCardHeadEn', 'Aggregate passes · kernel density'))}</span><span class="ar">${esc(cpS(O, 'passCardHeadAr', 'مجموع الاجتيازات · كثافة نواة'))}</span></div>
      <div class="db-dist-card-sub"><span class="en">${esc(cpS(O, 'passCardSubEn', 'How many CX dimensions reach ≥ 3 per customer — smoothed like the reference overlays'))}</span><span class="ar">${esc(cpS(O, 'passCardSubAr', 'كم بُعدًا من أبعاد التجربة يحقق ≥3 لكل عميل — بتنعيم شبيه بالطبقات في المرجع'))}</span></div>
      ${svgPass}
      ${avgPassRow}
      ${legendHtml}
      <div class="db-dist-meta">
        <span><span class="en">${esc(cpS(O, 'passMetaEn', 'Mean passes / customer'))} <b>${meanPass.toFixed(2)}</b> ${esc(cpS(O, 'passMetaTailEn', '(max 5)'))}</span><span class="ar">${esc(cpS(O, 'passMetaAr', 'متوسط الاجتيازات للعميل'))} <b>${meanPass.toFixed(2)}</b> ${esc(cpS(O, 'passMetaTailAr', '(أقصى ٥)'))}</span></span>
      </div>
    </div>`;

  const riskOrder = [['High', cpS(O, 'riskHighAr', 'عالٍ')], ['Medium', cpS(O, 'riskMediumAr', 'متوسط')], ['Low', cpS(O, 'riskLowAr', 'منخفض')]];
  const riskEnMap = { High: cpS(O, 'riskHighEn', 'High'), Medium: cpS(O, 'riskMediumEn', 'Medium'), Low: cpS(O, 'riskLowEn', 'Low') };
  const riskClr = { High: '#dc2626', Medium: '#ca8a04', Low: '#22c55e' };
  let riskRows = '';
  for (const [lv, lvAr] of riskOrder) {
    const cnt = fc.filter(r => r[11] === lv).length;
    const pct = (cnt / n) * 100;
    riskRows += `
      <div class="db-dist-risk-row">
        <span class="db-dist-risk-lbl"><span class="en">${esc(riskEnMap[lv] || lv)}</span><span class="ar">${esc(lvAr)}</span></span>
        <div class="db-dist-risk-track"><span class="db-dist-risk-fill" style="width:${pct.toFixed(1)}%;background:${riskClr[lv]}"></span></div>
        <span style="font-size:11px;color:var(--db-muted);min-width:86px;text-align:end;flex-shrink:0;">${pct.toFixed(0)}% (${cnt})</span>
      </div>`;
  }
  const riskCardHtml = `
    <div class="db-dist-card">
      <div class="db-dist-card-head"><span class="en">${esc(cpS(O, 'riskHeadEn', 'Risk tier mix'))}</span><span class="ar">${esc(cpS(O, 'riskHeadAr', 'مزيج خطر الانقطاع'))}</span></div>
      <div class="db-dist-card-sub"><span class="en">${esc(cpS(O, 'riskSubEn', 'Modeled churn-risk labels · same cohort as Branch filter'))}</span><span class="ar">${esc(cpS(O, 'riskSubAr', 'وسوم مخاطرة مركَّبة · نفس مجموعة مرشّح الفرع'))}</span></div>
      ${riskRows}
    </div>`;

  dashEl.innerHTML = scoreCardsHtml + passWideHtml + riskCardHtml;
}

let dbSimValues = {};

function dbSimSpanId(name) {
  let s = '';
  for (let i = 0; i < name.length; i++) s += '_' + name.charCodeAt(i);
  return 'dbSimV' + s;
}

/** Snap simulation levers to defaults from current cohort driver averages (top 4). */
function dbSimReset() {
  const d = dbGetData();
  d.drivers.slice(0, 4).forEach(dr => {
    dbSimValues[dr.name] = dbSimDefaultV(dr);
  });
  dbRenderSimulation();
}

function dbSimSliderInput(inp) {
  const name = decodeURIComponent(inp.getAttribute('data-driver') || '');
  if (!name) return;
  const raw = inp.valueAsNumber;
  dbSimValues[name] = Number.isFinite(raw) ? Math.min(100, Math.max(0, raw)) : 0;
  const lid = inp.getAttribute('data-lab');
  const labEl = lid ? document.getElementById(lid) : null;
  if (labEl) labEl.textContent = dbSimLeverLabel(dbSimValues[name]);
  dbUpdateSimulation();
}

function dbIsAdminEmbedPreview() {
  try { return new URLSearchParams(location.search).get('adminEmbed') === '1'; }
  catch (_) { return false; }
}

function dbAdminEmbedInitialPanel() {
  if (!dbIsAdminEmbedPreview()) return undefined;
  const allow = ['executive','drivers','segments','demographics','customers','questionnaire','pilot','model'];
  try {
    const p = new URLSearchParams(location.search).get('dbPanel');
    if (p && allow.includes(p)) return p;
  } catch (_) {}
  return 'executive';
}

/* ── Dashboard: Show/Hide ── */
async function showDashboard(user) {
  const db = document.getElementById('customerDashboard');
  db.classList.add('open');
  if (dbIsAdminEmbedPreview()) db.classList.add('db-admin-embed-shell');
  document.body.style.overflow = 'hidden';

  try {
    await roshdHydrateAllConfigFromApi();
    await dbSyncRegionsFromApi();
    await dbSyncCustomerRecordsFromApi();
    await dbTrySyncDashboardDataFromApi();
  } catch (_) {}

  // Set user info
  const displayName = user?.first_name
    ? (user.first_name + (user.last_name ? ' ' + user.last_name : ''))
    : (user?.email || 'Client');
  const nameEl = document.getElementById('dbUserName');
  if (nameEl) nameEl.textContent = displayName;
  const avatarEl = document.getElementById('dbAvatar');
  if (avatarEl) avatarEl.textContent = displayName.charAt(0).toUpperCase();

  dbBuildCustomerFilterBar();
  try {
    dbRestoreRoshdFilters(JSON.parse(localStorage.getItem('roshd_filters') || 'null'));
  } catch (_) {}
  dbEnsureCustomersBuiltForFilters();
  roshdSetupRealtime();

  // Seed simulation levers from each driver's avg (top 4 only); dbRenderSimulation does the same if missing
  const d = dbGetData();
  d.drivers.slice(0, 4).forEach(dr => {
    if (dbSimValues[dr.name] === undefined) dbSimValues[dr.name] = dbSimDefaultV(dr);
  });

  dbRender();

  // Restore last active panel (default: executive). Legacy Effect panel merged into Drivers.
  const embedPanel = dbAdminEmbedInitialPanel();
  let savedPanel = embedPanel !== undefined
    ? embedPanel
    : (localStorage.getItem('roshd_panel') || 'executive');
  if (savedPanel === 'effect') {
    savedPanel = 'drivers';
    try { localStorage.setItem('roshd_panel', 'drivers'); } catch(_) {}
  }
  if (savedPanel === 'recommendations') {
    savedPanel = 'executive';
    try { localStorage.setItem('roshd_panel', 'executive'); } catch(_) {}
  }
  if (savedPanel === 'simulation') {
    savedPanel = 'drivers';
    try { localStorage.setItem('roshd_panel', 'drivers'); } catch(_) {}
  }
  const savedBtn = document.querySelector(`.db-nav-item[data-panel="${savedPanel}"]`);
  dbShowPanel(savedPanel, savedBtn || document.querySelector('.db-nav-item'));
}

function hideDashboard() {
  document.getElementById('customerDashboard').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Dashboard: Get Data ── */
function dbGetData() {
  const branch = dbFilValueByKey("branch", "All Branches");
  const gender = dbFilValueByKey("gender", "All Genders");
  const service = dbFilValueByKey("service", "All Services");
  const freq = dbFilValueByKey("frequency", "All Frequencies");
  const ageSel = dbFilValueByKey("age", "All Ages");

  const root = dbModelRoot();
  let d = JSON.parse(JSON.stringify(root[branch] || root["All Branches"]));

  if (gender === "Female") {
    d.top = "Communication";
    d.topAr = "التواصل";
    d.drivers = [
      { name: "Communication", nameAr: "التواصل", avg: 2.9, path: 0.59, impact: 0.25, decision: "Invest", decisionAr: "استثمر", cls: "navy" },
      { name: "Quality", nameAr: "الجودة", avg: 3.4, path: 0.46, impact: 0.19, decision: "Optimize", decisionAr: "حسّن", cls: "warning" },
      { name: "Advisor Behavior", nameAr: "سلوك المستشار", avg: 3.5, path: 0.34, impact: 0.13, decision: "Selective", decisionAr: "انتقائي", cls: "info" },
      { name: "Price Fairness", nameAr: "عدالة السعر", avg: 2.8, path: 0.25, impact: 0.08, decision: "Monitor", decisionAr: "راقب", cls: "" },
      { name: "Speed", nameAr: "السرعة", avg: 1.3, path: 0.05, impact: 0.01, decision: "Do not overinvest", decisionAr: "لا تُبالغ في الاستثمار", cls: "danger" }
    ];
    d.invest = ["Female segment: communication is the strongest driver.", "Improve proactive updates and clarity.", "Standardize advisor explanation before and after service."];
    d.investAr = ["شريحة الإناث: التواصل أقوى محرّك للرضا.", "حسّن التحديثات الاستباقية والوضوح.", "وحّد شرح المستشار قبل وبعد الخدمة."];
  }

  if (gender === "Male" && branch === "All Branches") {
    d.top = "Quality";
    d.topAr = "الجودة";
    if (d.drivers[0]) d.drivers[0].impact = 0.29;
    if (d.drivers.length > 1) {
      d.drivers[1] = {
        name: "Price Fairness",
        nameAr: "عدالة السعر",
        avg: 3.0,
        path: 0.38,
        impact: 0.16,
        decision: "Optimize",
        decisionAr: "حسّن",
        cls: "warning"
      };
    }
  }

  if (service === "Bodyshop") {
    d.score = Math.max(1, d.score - 0.2);
    d.explanatory = Math.max(55, d.explanatory - 3);
    if (d.drivers[0]) d.drivers[0].impact = Math.min(0.38, d.drivers[0].impact + 0.03);
  }

  if (freq === "4+ Visits") {
    d.top = "Quality";
    d.topAr = "الجودة";
    d.drivers.unshift({
      name: "Quality",
      nameAr: "الجودة",
      avg: 3.8,
      path: 0.72,
      impact: 0.35,
      decision: "Invest",
      decisionAr: "استثمر",
      cls: "navy"
    });
    d.drivers = dbDedupeDrivers(d.drivers);
    const tail = (d.invest || []).slice(0, 2);
    const tailAr = (d.investAr || d.invest || []).slice(0, 2);
    d.invest = ["High-frequency customers are quality-sensitive; protect retention through first-time-right discipline.", ...tail];
    d.investAr = ["عملاء الزيارات المتكررة أكثر حساسية للجودة؛ حافظ على الاحتفاظ عبر الانضباط في الإصلاح من أول مرة.", ...tailAr];
  }

  if (freq === "1 Visit") {
    d.top = "Communication";
    d.topAr = "التواصل";
    d.drivers.unshift({
      name: "Communication",
      nameAr: "التواصل",
      avg: 2.9,
      path: 0.55,
      impact: 0.24,
      decision: "Invest",
      decisionAr: "استثمر",
      cls: "navy"
    });
    d.drivers = dbDedupeDrivers(d.drivers);
  }

  
  if (ageSel === "<25") {
    d.top = "Price Fairness";
    d.topAr = "عدالة السعر";
    d.drivers.unshift({
      name: "Price Fairness",
      nameAr: "عدالة السعر",
      avg: 2.6,
      path: 0.57,
      impact: 0.25,
      decision: "Invest",
      decisionAr: "استثمر",
      cls: "navy"
    });
    d.drivers = dbDedupeDrivers(d.drivers);
    const tail = (d.invest || []).slice(0, 2);
    const tailAr = (d.investAr || d.invest || []).slice(0, 2);
    d.invest = ["Younger customers show stronger price sensitivity; improve estimate transparency and value explanation.", ...tail];
    d.investAr = ["العملاء الأصغر سناً أكثر حساسية للسعر؛ حسّن شفافية التقدير وشرح القيمة.", ...tailAr];
  }

  /* Do not replace model score/explanatory with the mean of synthetic micro-rows (`dbFilteredCustomers`).
   * That average ignored admin branch scores and `roshd_dashboard_db_model`, so the KPI strip never matched admin. */
  const cxOvr = dbGetCxDriversOverrides();
  const normRows = dbNormalizeCxOverrideRows(cxOvr && cxOvr.driversRows);
  if (normRows && normRows.length) {
    d.drivers = normRows.slice(0, 8).map(r => ({
      name: r.name || r.nameAr || '—',
      nameAr: r.nameAr || r.name || '—',
      avg: r.avg,
      path: Number.isFinite(Number(r.path)) ? Number(r.path) : Number(r.impact),
      impact: r.impact,
      decision: r.decision || '—',
      decisionAr: r.decisionAr || r.decision || '—',
      cls: r.cls || '',
    }));
    const top = d.drivers[0];
    if (top) {
      d.top = top.name;
      d.topAr = top.nameAr || top.name;
    }
  }

  d.drivers = d.drivers.slice(0, 8);
  d.risk = "Speed";
  d.riskAr = "السرعة";
  // Admin per-combination numeric/label overrides (additive; no-op when unset).
  // Set from the admin "Model Values" editor → roshd_executive_overrides.byFilter[key].
  try {
    const exOvr = dbGetExecutiveOverrides();
    if (exOvr) {
      if (exOvr.cxScore != null && isFinite(Number(exOvr.cxScore))) d.score = Number(exOvr.cxScore);
      if (exOvr.modelPower != null && isFinite(Number(exOvr.modelPower))) d.explanatory = Number(exOvr.modelPower);
      if (exOvr.topDriverEn) { d.top = exOvr.topDriverEn; d.topAr = exOvr.topDriverAr || exOvr.topDriverEn; }
      if (exOvr.wasteRiskEn) { d.risk = exOvr.wasteRiskEn; d.riskAr = exOvr.wasteRiskAr || exOvr.wasteRiskEn; }
    }
  } catch (_) {}
  return d;
}

/* ── Dashboard: Panel Navigation ── */
function dbShowPanel(id, btn) {
  if (id === 'effect') id = 'drivers';
  if (id === 'recommendations') id = 'executive';
  if (id === 'simulation') id = 'drivers';

  document.querySelectorAll('.db-panel').forEach(p => p.classList.remove('active'));
  const panel = document.getElementById('db-panel-' + id);
  if (panel) panel.classList.add('active');

  const dash = document.getElementById('customerDashboard');
  if (dash)
    dash.classList.toggle('db-panel-no-kpi', id === 'pilot' || id === 'demographics');

  document.querySelectorAll('.db-nav-item').forEach(b => b.classList.remove('active'));
  const navBtn = document.querySelector(`.db-nav-item[data-panel="${id}"]`) || btn;
  if (navBtn) navBtn.classList.add('active');

  const titles = {
    executive:       { en:'Executive View',       ar:'العرض التنفيذي' },
    drivers:         { en:'CX Drivers Analysis', ar:'تحليل محركات تجربة العميل' },
    segments:        { en:'Units Performance',    ar:'أداء الوحدات' },
    customers:       { en:'Customer Patterns',    ar:'أنماط العملاء' },
    model:           { en:'Model Quality',        ar:'جودة النموذج' },
    questionnaire:   { en:'Questionnaire Items', ar:'عناصر الاستبيان' },
    pilot:           { en:'Pilot Test Analysis',  ar:'تحليل الاختبار التجريبي' },
    demographics:    { en:'Demographics Engine',  ar:'محرك البيانات الديموغرافية' }
  };
  const info = titles[id] || { en: id, ar: id };
  document.getElementById('dbPageTitle').innerHTML     = `<span class="en">${info.en}</span><span class="ar">${info.ar}</span>`;
  document.getElementById('dbPageBreadcrumb').innerHTML = `<span class="en">${info.en}</span><span class="ar">${info.ar}</span>`;
  setLanguage(document.documentElement.getAttribute('data-lang'));

  if (!dbIsAdminEmbedPreview()) {
    try { localStorage.setItem('roshd_panel', id); } catch (_) {}
  }

  if (id === 'segments')   dbRenderSegments();
  closeDashboardSidebar();
}

/** Demographics visuals */
const DB_DEMO_PALETTE_CSS = ['var(--db-chart-1)', 'var(--db-chart-2)', 'var(--db-chart-3)', 'var(--db-chart-4)', 'var(--db-chart-5)'];

function dbDemoSlices(fieldIdx, labelPairs) {
  const fc = dbFilteredCustomers();
  const total = fc.length || 1;
  const slices = labelPairs.map(([value, htmlLabel]) => {
    const n = fc.filter(r => r[fieldIdx] === value).length;
    const p = total ? Math.round((n / total) * 100) : 0;
    const w = total ? (n / total) * 100 : 0;
    return { value, htmlLabel, n, p, w };
  });
  return { total, slices };
}

function dbDemoConicGradient(slices) {
  const sumN = slices.reduce((a, s) => a + s.n, 0) || 1;
  let angle = 0;
  const parts = slices.map((s, i) => {
    const a0 = angle;
    angle += (s.n / sumN) * 360;
    return `${DB_DEMO_PALETTE_CSS[i % 5]} ${a0.toFixed(2)}deg ${angle.toFixed(2)}deg`;
  });
  return `conic-gradient(${parts.join(',')})`;
}

function dbFillDemoDonutStack(containerId, fieldIdx, labelPairs, kickerEn, kickerAr) {
  const box = document.getElementById(containerId);
  if (!box) return;
  const { total, slices } = dbDemoSlices(fieldIdx, labelPairs);
  const donutBg =
    total && slices.some(s => s.n > 0)
      ? dbDemoConicGradient(slices)
      : 'conic-gradient(var(--db-muted) 0deg 360deg)';
  const legend = slices
    .map(
      (s, i) =>
        `<div class="db-demo-legend-row"><span class="db-demo-legend-sw" style="background:${DB_DEMO_PALETTE_CSS[i % 5]}"></span>` +
        `<span class="db-demo-legend-lbl">${s.htmlLabel}</span>` +
        `<span class="db-demo-legend-pct">${s.p}%</span></div>`
    )
    .join('');
  const stack = slices
    .map((s, i) => `<span style="width:${s.w}%;background:${DB_DEMO_PALETTE_CSS[i % 5]}"></span>`)
    .join('');
  const barRows = slices
    .map(
      s =>
        `<div class="db-demo-row"><span>${s.htmlLabel}</span><div class="db-demo-track"><div class="db-demo-fill" style="width:${s.p}%"></div></div><span>${s.p}%</span></div>`
    )
    .join('');
  box.classList.add('db-demo-chart--rich');
  box.innerHTML =
    `<div class="db-demo-kicker"><span class="en">${kickerEn}</span><span class="ar">${kickerAr}</span></div>` +
    `<div class="db-demo-donut-shell"><div class="db-demo-donut-wrap" aria-hidden="true"><div class="db-demo-donut" style="background:${donutBg}"></div></div>` +
    `<div class="db-demo-mini-legend">${legend}</div></div>` +
    `<div class="db-demo-stack">${stack}</div>` +
    barRows;
}

function dbFillDemoColumnBars(containerId, fieldIdx, labelPairs, kickerEn, kickerAr) {
  const box = document.getElementById(containerId);
  if (!box) return;
  const { slices } = dbDemoSlices(fieldIdx, labelPairs);
  const n = Math.max(slices.length, 1);
  const vbW = Math.round(Math.max(432, Math.min(880, 48 + n * 96)));
  const padL = 14;
  const padR = 14;
  const chartTop = 8;
  const chartH = 82;
  const baseY = chartTop + chartH;
  const vbH = baseY + 12;
  const innerW = vbW - padL - padR;
  const slotW = innerW / n;
  const barW = Math.max(14, Math.min(48, slotW * 0.55));
  const maxP = Math.max(...slices.map(s => s.p), 1);
  let rects = '';
  slices.forEach((s, i) => {
    const hRaw = chartH * (s.p / maxP);
    const h = Math.max(s.p > 0 ? 2 : 0, hRaw);
    const cx = padL + i * slotW + slotW / 2;
    const x = cx - barW / 2;
    const y = baseY - h;
    rects +=
      `<g><title>${s.p}%</title><rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW.toFixed(
        1
      )}" height="${h.toFixed(1)}" rx="5" fill="${DB_DEMO_PALETTE_CSS[i % 5]}" opacity="0.94" /></g>`;
  });
  const svg =
    `<svg viewBox="0 0 ${vbW} ${vbH}" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><line x1="${padL}" y1="${baseY}" x2="${vbW - padR}" y2="${baseY}" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>` +
    rects +
    `</svg>`;
  const labels = slices.map((s) => `<span>${s.htmlLabel}</span>`).join('');
  const barRows = slices
    .map(
      s =>
        `<div class="db-demo-row"><span>${s.htmlLabel}</span><div class="db-demo-track"><div class="db-demo-fill" style="width:${s.p}%"></div></div><span>${s.p}%</span></div>`
    )
    .join('');
  box.classList.add('db-demo-chart--rich');
  const colsGrow = containerId === 'dbAgeDemoChart' || containerId === 'dbFrequencyDemoChart';
  const colsClass = colsGrow ? 'db-demo-chart-cols db-demo-chart-cols-grow' : 'db-demo-chart-cols';
  box.innerHTML =
    `<div class="db-demo-kicker"><span class="en">${kickerEn}</span><span class="ar">${kickerAr}</span></div>` +
    `<div class="${colsClass}">` +
    `<div class="db-demo-svg-wrap">${svg}</div>` +
    `<div class="db-demo-col-grid">${labels}</div>` +
      `</div>` +
    barRows;
}

const DEMOGRAPHICS_OVERRIDES_KEY = 'roshd_demographics_overrides';

function dbGetDemographicsOverrides() {
  try {
    const raw = localStorage.getItem(DEMOGRAPHICS_OVERRIDES_KEY);
    if (!raw) return null;
    const o = JSON.parse(raw);
    return o && typeof o === 'object' ? o : null;
  } catch (_) {
    return null;
  }
}

function dqN(O, key, defVal) {
  if (!O || O[key] === undefined || O[key] === null || String(O[key]).trim() === '') return defVal;
  const n = Number(O[key]);
  return Number.isNaN(n) ? defVal : n;
}

function dqS(O, key, defVal) {
  if (!O || O[key] === undefined || O[key] === null) return defVal;
  const s = String(O[key]).trim();
  return s === '' ? defVal : s;
}

function dbFillDemographicsQualityCards(segmentN, sharePct) {
  const O = dbGetDemographicsOverrides();
  const studyN = dqN(O, 'studyN', DB_SAMPLE_TOTAL);
  const sent = dqN(O, 'sent', 1250);
  const recv = dqN(O, 'recv', 412);
  const compl = dqN(O, 'compl', 352);
  const rateR = +(recv / sent * 100).toFixed(2);
  const rateC = +(compl / recv * 100).toFixed(2);
  const rateStudyFromRecv = +(studyN / recv * 100).toFixed(2);

  const nInc = dqN(O, 'excInc', 60);
  const nSpe = dqN(O, 'excSpe', 32);
  const nLow = dqN(O, 'excLow', 20);
  const nExc = nInc + nSpe + nLow;
  const pIncRecv = +(nInc / recv * 100).toFixed(2);
  const pSpeRecv = +(nSpe / recv * 100).toFixed(2);
  const pLowRecv = +(nLow / recv * 100).toFixed(2);
  const pExcRecv = +(nExc / recv * 100).toFixed(2);
  const a1 = (nInc / nExc) * 360;
  const a2 = a1 + (nSpe / nExc) * 360;
  const donutBg = `conic-gradient(#ef4444 0deg ${a1}deg, #eab308 ${a1}deg ${a2}deg, #a855f7 ${a2}deg 360deg)`;

  const covGauge = segmentN <= 0 ? 0 : segmentN >= 60 ? 100 : Math.round((segmentN / 60) * 100);
  let msgCls = 'ok';
  let msgHtml =
    '<span class="en">' +
    dbExecHtmlEscape(dqS(O, 'strMsgOkEn', 'Sample size is adequate for reliable analysis.')) +
    '</span>' +
    '<span class="ar">' +
    dbExecHtmlEscape(dqS(O, 'strMsgOkAr', 'حجم العيّنة كافٍ لتحليل موثوق.')) +
    '</span>';
  if (segmentN < 30) {
    msgCls = 'bad';
    msgHtml =
      '<span class="en">' +
      dbExecHtmlEscape(dqS(O, 'strMsgBadEn', 'Segment is small — outputs are directional only.')) +
      '</span>' +
      '<span class="ar">' +
      dbExecHtmlEscape(dqS(O, 'strMsgBadAr', 'شريحة صغيرة — المخرجات توجيهية فقط.')) +
      '</span>';
  } else if (segmentN < 60) {
    msgCls = 'warn';
    msgHtml =
      '<span class="en">' +
      dbExecHtmlEscape(dqS(O, 'strMsgWarnEn', 'Modest segment — prioritize directionally; validate where possible.')) +
      '</span>' +
      '<span class="ar">' +
      dbExecHtmlEscape(dqS(O, 'strMsgWarnAr', 'حجم متوسط — أولْ الاتجاه والتحقق عند الإمكان.')) +
      '</span>';
  }

  const fvTop = 42;
  const fvBot = 172;
  const fvMid = (fvTop + fvBot) / 2;
  const fvSvgH = fvBot + 14;
  const fvRateTxtY = 30;
  const fvRateLnY = 38;

  const cx = [116, 344, 574];
  const wi = [176, 128, 92];
  const poly = [0, 1, 2]
    .map(i => {
      const c = cx[i];
      const w = wi[i];
      const tt = w * 0.42;
      const bb = w * 0.5;
      return `<polygon fill="url(#dbfGrad${i})" stroke="rgba(255,255,255,0.12)" stroke-width="1" stroke-linejoin="round" points="${c - tt},${fvTop} ${c + tt},${fvTop} ${c + bb},${fvBot} ${c - bb},${fvBot}"/>`;
    })
    .join('');
  const rateTx = [rateR, rateStudyFromRecv]
    .map((r, i) => {
      const m = (cx[i] + cx[i + 1]) / 2;
      return `<text x="${m}" y="${fvRateTxtY}" fill="#e2e8f0" font-size="12" font-weight="800" text-anchor="middle">${r}%</text><path d="M ${m - 20} ${fvRateLnY} H ${m + 20}" stroke="#64748b" stroke-width="1.5" stroke-linecap="round"/>`;
    })
    .join('');
  const icons = [
    `<g transform="translate(${cx[0]},${fvMid})" fill="none" stroke="#e2e8f0" stroke-width="2"><rect x="-14" y="-10" width="28" height="20" rx="2"/><polyline points="-5,-4 -5,6 7,0"/></g>`,
    `<g transform="translate(${cx[1]},${fvMid})" fill="none" stroke="#e2e8f0" stroke-width="2"><path d="M -14 -4 h 28 v 16 a 10 8 0 0 1 -10 8 h -8 a 10 8 0 0 1 -10 -8 z"/><circle cx="-4" cy="6" r="1.5" fill="#e2e8f0" stroke="none"/><circle cx="6" cy="6" r="1.5" fill="#e2e8f0" stroke="none"/></g>`,
    `<g transform="translate(${cx[2]},${fvMid})" fill="none" stroke="#86efac" stroke-width="2"><path d="M 0 -12 L -12 14 H 12 Z"/><path d="M -1 0 L 3 8 9 -6" stroke-linecap="round" stroke-linejoin="round"/></g>`
  ].join('');

  const funnel = document.getElementById('dbDemoQualityFunnel');
  if (funnel) {
    funnel.innerHTML =
      `<svg class="db-demo-funnel-svg" viewBox="0 0 688 ${fvSvgH}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs>
        <linearGradient id="dbfGrad0" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stop-color="#1e3a8a"/><stop offset="100%" stop-color="#2563eb"/></linearGradient>
        <linearGradient id="dbfGrad1" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stop-color="#1d4ed8"/><stop offset="100%" stop-color="#0ea5e9"/></linearGradient>
        <linearGradient id="dbfGrad2" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stop-color="#166534"/><stop offset="100%" stop-color="#4ade80"/></linearGradient>
      </defs>
      ${poly}
      ${rateTx}
      ${icons}
    </svg>
    <div class="db-demo-funnel-caption-grid">
      <div><span class="en">${dbExecHtmlEscape(dqS(O, 'funnelC1MainEn', 'Surveys sent'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'funnelC1MainAr', 'المرسلة'))}</span><br/><strong>${sent.toLocaleString()}</strong><small class="en">${dbExecHtmlEscape(dqS(O, 'funnelC1SmallEn', 'Invitation wave'))}</small><small class="ar">${dbExecHtmlEscape(dqS(O, 'funnelC1SmallAr', 'موجة الدعوة'))}</small></div>
      <div><span class="en">${dbExecHtmlEscape(dqS(O, 'funnelC2MainEn', 'Responses'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'funnelC2MainAr', 'المستجابات'))}</span><br/><strong>${recv}</strong><small>${rateR}% <span class="en">${dbExecHtmlEscape(dqS(O, 'funnelC2VsEn', 'vs sent'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'funnelC2VsAr', 'من المرسل'))}</span></small></div>
      <div><span class="en">${dbExecHtmlEscape(dqS(O, 'funnelC3MainEn', 'Valid sample (N)'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'funnelC3MainAr', 'عينة صالحة'))}</span><br/><strong>${studyN}</strong><small>${rateStudyFromRecv}% <span class="en">${dbExecHtmlEscape(dqS(O, 'funnelC3VsEn', 'vs responses'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'funnelC3VsAr', 'من المستجابات'))}</span></small></div>
    </div>
    <div class="db-demo-funnel-kpis">
      <div class="db-demo-kpi-mini">
        <div class="lbl"><span class="en">${dbExecHtmlEscape(dqS(O, 'funnelKpiRespLblEn', 'Response rate'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'funnelKpiRespLblAr', 'معدل الاستجابة'))}</span></div>
        <div class="val">${rateR}%</div>
        <div class="sub"><span class="en">${dbExecHtmlEscape(dqS(O, 'funnelKpiRespSubEn', 'Responses / Sent'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'funnelKpiRespSubAr', 'المستجابات / المرسل'))}</span></div>
      </div>
      <div class="db-demo-kpi-mini">
        <div class="lbl"><span class="en">${dbExecHtmlEscape(dqS(O, 'funnelKpiCompLblEn', 'Completion rate'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'funnelKpiCompLblAr', 'معدل الإتمام'))}</span></div>
        <div class="val">${rateC}%</div>
        <div class="sub"><span class="en">${dbExecHtmlEscape(dqS(O, 'funnelKpiCompSubEn', 'Completed / Responses'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'funnelKpiCompSubAr', 'المكتمل / المستجابة'))}</span></div>
      </div>
    </div>`;
  }

  const exc = document.getElementById('dbDemoQualityExclusions');
  if (exc) {
    exc.innerHTML =
      `<div class="db-exc-body">
      <div class="db-exc-donut-col">
        <div class="db-exc-donut-wrap" aria-hidden="true">
        <div class="db-exc-donut" style="background:${donutBg}"></div>
        <div class="db-exc-donut-center">
          <span class="db-exc-center-n">${nExc}</span>
          <span class="db-exc-center-lbl"><span class="en">${dbExecHtmlEscape(dqS(O, 'excDonutLblEn', 'Total excluded'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'excDonutLblAr', 'إجمالي المستبعد'))}</span></span>
        </div>
      </div>
      </div>
      <div class="db-exc-rows">
        <div class="db-exc-row">
          <span class="db-exc-row-main"><span class="db-exc-sw" style="background:#ef4444"></span><span class="db-exc-row-copy"><span class="db-exc-row-label"><span class="en">${dbExecHtmlEscape(dqS(O, 'excR1LblEn', 'Incomplete responses'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'excR1LblAr', 'غير مكتملة'))}</span></span><span class="db-exc-row-kicker"><span class="en">${dbExecHtmlEscape(dqS(O, 'excR1KickEn', 'Partial submits & drop-offs'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'excR1KickAr', 'مشاركات جزئية وانسحابات'))}</span></span></span></span>
          <span class="db-exc-stat"><span class="db-exc-num">${nInc}</span><span class="db-exc-pct-line">${pIncRecv}% <span class="en">${dbExecHtmlEscape(dqS(O, 'excRowShareEn', 'share'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'excRowShareAr', 'من المستجابات'))}</span></span></span>
        </div>
        <div class="db-exc-row">
          <span class="db-exc-row-main"><span class="db-exc-sw" style="background:#eab308"></span><span class="db-exc-row-copy"><span class="db-exc-row-label"><span class="en">${dbExecHtmlEscape(dqS(O, 'excR2LblEn', 'Speeders / too fast'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'excR2LblAr', 'سريعون جدًا'))}</span></span><span class="db-exc-row-kicker"><span class="en">${dbExecHtmlEscape(dqS(O, 'excR2KickEn', 'Below minimum engagement time'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'excR2KickAr', 'وقت تعبئة دون الحدّ الأدنى'))}</span></span></span></span>
          <span class="db-exc-stat"><span class="db-exc-num">${nSpe}</span><span class="db-exc-pct-line">${pSpeRecv}% <span class="en">${dbExecHtmlEscape(dqS(O, 'excRowShareEn', 'share'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'excRowShareAr', 'من المستجابات'))}</span></span></span>
        </div>
        <div class="db-exc-row">
          <span class="db-exc-row-main"><span class="db-exc-sw" style="background:#a855f7"></span><span class="db-exc-row-copy"><span class="db-exc-row-label"><span class="en">${dbExecHtmlEscape(dqS(O, 'excR3LblEn', 'Low-quality responses'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'excR3LblAr', 'جودة منخفضة'))}</span></span><span class="db-exc-row-kicker"><span class="en">${dbExecHtmlEscape(dqS(O, 'excR3KickEn', 'Fails attention / consistency checks'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'excR3KickAr', 'رسوب فحوص الانتباه والثبات'))}</span></span></span></span>
          <span class="db-exc-stat"><span class="db-exc-num">${nLow}</span><span class="db-exc-pct-line">${pLowRecv}% <span class="en">${dbExecHtmlEscape(dqS(O, 'excRowShareEn', 'share'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'excRowShareAr', 'من المستجابات'))}</span></span></span>
        </div>
      </div>
    </div>
    <div class="db-exc-foot">
      <span><span class="en">${dbExecHtmlEscape(dqS(O, 'excFootLblEn', 'Total excluded (vs responses)'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'excFootLblAr', 'المستبعد (مقابل المستجابات)'))}</span></span>
      <span class="db-exc-foot-strong">${nExc} (${pExcRecv}%)</span>
    </div>`;
  }

  const gaugeOff = Math.max(0.5, Math.min(100, 100 - covGauge));
  let msgSvg =
    '<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>';
  if (msgCls === 'warn')
    msgSvg =
      '<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>';
  if (msgCls === 'bad')
    msgSvg =
      '<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>';

  const capEnHtml =
    O && String(O.strGaugeCapEn || '').trim() !== ''
      ? dbExecHtmlEscape(String(O.strGaugeCapEn).trim())
      : 'Arc = progress to the <b>60-complete</b> stability target (100% when filtered N ≥ 60). Axis is <b>not</b> filtered ÷ total database.';
  const capArHtml =
    O && String(O.strGaugeCapAr || '').trim() !== ''
      ? dbExecHtmlEscape(String(O.strGaugeCapAr).trim())
      : 'القوس = التقدّم نحو هدف استقرار <b>٦٠ مكتملًا</b> (١٠٠٪ عندما يكون N المصفّى ≥ ٦٠). المحور <b>ليس</b> نسبة المصفّى إلى قاعدة البيانات كلها.';
  const twinHintEnHtml =
    O && String(O.strTwinRightHintEn || '').trim() !== ''
      ? dbExecHtmlEscape(String(O.strTwinRightHintEn).trim())
      : `Matches Branch + demographics now; Coverage &amp; KPIs use this slice · <strong>${sharePct}%</strong> of valid sample.`;
  const twinHintArHtml =
    O && String(O.strTwinRightHintAr || '').trim() !== ''
      ? dbExecHtmlEscape(String(O.strTwinRightHintAr).trim())
      : `يطابق الفرع والديموغرافيا الآن؛ التغطية والمؤشرات على هذه الشريحة · <strong>${sharePct}%</strong> من العينة الصالحة.`;

  const str = document.getElementById('dbDemoQualityStrength');
  if (str) {
    str.innerHTML =
      `      <div class="db-str-body">
      <div class="db-str-gauge">
        <svg class="db-str-gauge-svg" viewBox="0 0 120 78" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M 14 64 A 46 46 0 0 1 106 64" fill="none" stroke="rgba(255,255,255,0.09)" stroke-width="11" stroke-linecap="round"/>
          <path d="M 14 64 A 46 46 0 0 1 106 64" fill="none" stroke="#a855f7" stroke-width="11" stroke-linecap="round" pathLength="100" stroke-dasharray="100" stroke-dashoffset="${gaugeOff}" />
          <text x="14" y="74" fill="rgba(148,163,184,0.9)" font-size="9">0%</text>
          <text x="106" y="74" fill="rgba(148,163,184,0.9)" font-size="9" text-anchor="end">100%</text>
        </svg>
        <div class="db-str-val">
          <div class="db-str-val-num">${covGauge}%</div>
          <div class="db-str-val-lbl"><span class="en">${dbExecHtmlEscape(dqS(O, 'strCovLblEn', 'Coverage'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'strCovLblAr', 'التغطية'))}</span></div>
        </div>
        <p class="db-str-gauge-cap">
          <span class="en">${capEnHtml}</span>
          <span class="ar">${capArHtml}</span>
        </p>
      </div>
      <div class="db-str-aside">
        <div>
          <div class="db-str-aside-sub"><span class="en">${dbExecHtmlEscape(dqS(O, 'strSampleSubEn', 'Sample size'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'strSampleSubAr', 'حجم العيّنة'))}</span></div>
          <div class="db-str-twin">
            <div class="db-str-box">
              <div class="l"><span class="en">${dbExecHtmlEscape(dqS(O, 'strTwinLeftLblEn', 'Total valid sample (N)'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'strTwinLeftLblAr', 'إجمالي العينة الصالحة (N)'))}</span></div>
              <div class="n">${studyN}</div>
              <div class="db-str-box-hint"><span class="en">${dbExecHtmlEscape(dqS(O, 'strTwinLeftHintEn', 'After exclusions; fixed study pool for this dashboard.'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'strTwinLeftHintAr', 'بعد الاستبعاد؛ مرجع ثابت لهذه اللوحة.'))}</span></div>
            </div>
            <div class="db-str-box">
              <div class="l"><span class="en">${dbExecHtmlEscape(dqS(O, 'strTwinRightLblEn', 'Current filtered (N)'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'strTwinRightLblAr', 'المصفّى الحالي (N)'))}</span></div>
              <div class="n">${segmentN}</div>
              <div class="db-str-box-hint"><span class="en">${twinHintEnHtml}</span><span class="ar">${twinHintArHtml}</span></div>
            </div>
          </div>
            <div class="db-str-legend" role="group" aria-label="Sample strength legend">
            <div class="db-str-leg-row">
              <div class="db-str-leg-k"><span class="en">${dbExecHtmlEscape(dqS(O, 'strLeg1KeyEn', 'COVERAGE GAUGE'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'strLeg1KeyAr', 'مؤشر التغطية'))}</span></div>
              <div class="db-str-leg-v"><span class="en">${dbExecHtmlEscape(dqS(O, 'strLeg1ValEn', 'Shows how close your current sample is to the minimum required for reliable insights. It reflects data confidence—not participation rate.'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'strLeg1ValAr', 'يوضح مدى اقتراب حجم العينة الحالية من الحد الأدنى المطلوب للحصول على نتائج موثوقة. يعكس مستوى الثقة في البيانات وليس نسبة المشاركة.'))}</span></div>
            </div>
            <div class="db-str-leg-row">
              <div class="db-str-leg-k"><span class="en">${dbExecHtmlEscape(dqS(O, 'strLeg2KeyEn', 'TOTAL VALID'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'strLeg2KeyAr', 'إجمالي العينة المعتمدة'))}</span></div>
              <div class="db-str-leg-v"><span class="en">${dbExecHtmlEscape(dqS(O, 'strLeg2ValEn', 'Full dataset after cleaning. Use as the reference base.'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'strLeg2ValAr', 'يمثل كامل البيانات بعد التنقية، ويُستخدم كمرجع أساسي للمقارنة.'))}</span></div>
            </div>
            <div class="db-str-leg-row">
              <div class="db-str-leg-k"><span class="en">${dbExecHtmlEscape(dqS(O, 'strLeg3KeyEn', 'FILTERED N'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'strLeg3KeyAr', 'حجم العينة المُرشَّحة (الحالية)'))}</span></div>
              <div class="db-str-leg-v"><span class="en">${dbExecHtmlEscape(dqS(O, 'strLeg3ValEn', 'Current segment size. Smaller samples may show more fluctuation—focus on overall direction, not small differences.'))}</span><span class="ar">${dbExecHtmlEscape(dqS(O, 'strLeg3ValAr', 'يمثل حجم الشريحة قيد التحليل. عند صِغر العينة، قد تظهر تقلبات في النتائج، لذا يُفضَّل التركيز على الاتجاه العام بدل الفروقات البسيطة.'))}</span></div>
            </div>
          </div>
        </div>
        <div class="db-str-msg ${msgCls}">
          ${msgSvg}
          ${msgHtml}
        </div>
      </div>
    </div>`;
  }
}

function dbFinalizeDemographicsShells(O) {
  if (!O) return;
  const pair = (id, kEn, kAr, defEn, defAr) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML =
      `<span class="en">${dbExecHtmlEscape(dqS(O, kEn, defEn))}</span>` +
      `<span class="ar">${dbExecHtmlEscape(dqS(O, kAr, defAr))}</span>`;
  };
  pair('dbDemoHdrFunnel', 'hdrFunnelEn', 'hdrFunnelAr', '1 · Data collection funnel', '١ · قمع جمع البيانات');
  pair('dbDemoHdrExc', 'hdrExcEn', 'hdrExcAr', '2 · Data cleaning (exclusions)', '٢ · التنظيف (الاستبعاد)');
  pair('dbDemoHdrStr', 'hdrStrEn', 'hdrStrAr', '3 · Sample strength', '٣ · قوّة العيّنة');
  const desc = document.getElementById('dbDemoHdrStrDesc');
  if (desc) {
    const dEn =
      O && String(O.hdrStrDescEn || '').trim() !== ''
        ? dbExecHtmlEscape(String(O.hdrStrDescEn).trim())
        : 'Explains how far your <b>current filtered</b> cohort is from a stability benchmark—separate from funnel response rates or % of the full file.';
    const dAr =
      O && String(O.hdrStrDescAr || '').trim() !== ''
        ? dbExecHtmlEscape(String(O.hdrStrDescAr).trim())
        : 'يوضّح مدى قرب <b>المصفّى الحالي</b> من حدّ استقرار مرجعي—منفصل عن معدّلات الاستجابة في القمع أو نسبة الملف الكامل.';
    desc.innerHTML = `<span class="en">${dEn}</span><span class="ar">${dAr}</span>`;
  }
  pair('dbDemoHdrEngine', 'hdrEngineTitleEn', 'hdrEngineTitleAr', 'Demographics & Sample Engine', 'الديموغرافيا وحجم العيّنة');
  pair('dbDemoSubEngine', 'hdrEngineSubEn', 'hdrEngineSubAr', 'Insight · branches & gender for selected filters', 'خلاصة فورية وفروع وجنس وفق المرشّح');
  pair('dbDemoHdrProfile', 'hdrProfileTitleEn', 'hdrProfileTitleAr', 'Final sample profile (demographics)', 'ملف العينة النهائي (ديموغرافيا)');
  pair('dbDemoSubProfile', 'hdrProfileSubEn', 'hdrProfileSubAr', 'Service lane & visit cadence · this slice', 'الخدمة وإيقاع الزيارات · هذه الشريحة');
  pair('dbDemoHdrAge', 'hdrAgeTitleEn', 'hdrAgeTitleAr', 'Age Categories', 'فئات العمر');
  pair('dbDemoSubAge', 'hdrAgeSubEn', 'hdrAgeSubAr', 'Population spread by age category · full layout width', 'توزيع الأعمار حسب الفئة على كامل العرض لهذه الشريحة');
}

function dbRenderDemographics(d, segmentN, sharePct, freqVal, ageSel) {
  const O = dbGetDemographicsOverrides();
  dbFillDemographicsQualityCards(segmentN, sharePct);

  const demoInsight = document.getElementById('dbDemoInsight');
  const studyTotal = dqN(O, 'studyN', DB_SAMPLE_TOTAL);

  if (demoInsight) {
    const custEn = O && O.insightEn != null ? String(O.insightEn).trim() : '';
    const custAr = O && O.insightAr != null ? String(O.insightAr).trim() : '';
    if (custEn !== '' || custAr !== '') {
      demoInsight.innerHTML =
        `<span><span class="en">${dbExecHtmlEscape(custEn || custAr || '—')}</span>` +
        `<span class="ar">${dbExecHtmlEscape(custAr || custEn || '—')}</span></span>`;
    } else {
      const flagEn =
        segmentN < 30 ? 'LOW N — directional only.' : segmentN < 60 ? 'CAUTION — modest sample.' : 'OK — adequate sample.';
      const flagAr =
        segmentN < 30 ? 'حجم منخفض — نتائج توجيهية.' : segmentN < 60 ? 'انتباه — عينة متوسطة.' : 'مقبول — عينة كافية.';
      const extraFreqEn =
        freqVal === '4+ Visits'
          ? 'High-frequency customers are retention assets — quality failures are costly.'
          : freqVal === '1 Visit'
            ? 'First visits need communication clarity to build trust quickly.'
            : 'Use visit frequency to separate acquisition gaps from retention issues.';
      const extraFreqAr =
        freqVal === '4+ Visits'
          ? 'عملاء الزيارات العالية أصول احتفاظ؛ تعثر الجودة يكلف.'
          : freqVal === '1 Visit'
            ? 'الزيارات الأولى تحتاج وضوح تواصل لبناء الثقة.'
            : 'استخدم تكرار الزيارة لفصل مشاكل الجذب عن الاحتفاظ.';
      const ageEn =
        ageSel === '<25'
          ? 'Younger respondents show higher price sensitivity — prioritize estimate transparency.'
          : 'Review age mix before assuming price-led priorities.';
      const ageAr =
        ageSel === '<25'
          ? 'الأصغر حساسية أعلى للسعر؛ أولِ شفافية التقديرات.'
          : 'راجع مزيج العمر قبل افتراض أولوية السعر.';
      demoInsight.innerHTML =
        `<span><span class="en"><b>Insight:</b> <b>${segmentN}</b> of <b>${studyTotal}</b> responses in this slice (<b>${sharePct}%</b> of full sample). <b>${flagEn}</b> Strongest lever: <b>${d.top}</b>. ${extraFreqEn} ${ageEn}</span>` +
        `<span class="ar"><b>ملخص:</b> <b>${segmentN}</b> من <b>${studyTotal}</b> ضمن هذه الشريحة (<b>${sharePct}%</b> من العينة الكاملة). <b>${flagAr}</b> أقوى رافعة: <b>${d.topAr || d.top}</b>. ${extraFreqAr} ${ageAr}</span></span>`;
    }
  }

  dbFillDemoDonutStack(
    'dbBranchDemoChart',
    1,
    [
      ['Riyadh', '<span class="en">Riyadh</span><span class="ar">الرياض</span>'],
      ['Jeddah', '<span class="en">Jeddah</span><span class="ar">جدة</span>'],
      ['Dammam', '<span class="en">Dammam</span><span class="ar">الدمام</span>']
    ],
    dqS(O, 'ckBranchEn', 'Donut · share by branch'),
    dqS(O, 'ckBranchAr', 'دائرة · توزيع الفروع')
  );
  dbFillDemoDonutStack(
    'dbGenderDemoChart',
    2,
    [
      ['Male', '<span class="en">Male</span><span class="ar">ذكر</span>'],
      ['Female', '<span class="en">Female</span><span class="ar">أنثى</span>']
    ],
    dqS(O, 'ckGenderEn', 'Composition · gender mix'),
    dqS(O, 'ckGenderAr', 'التركيب · الجنس')
  );
  dbFillDemoDonutStack(
    'dbServiceDemoChart',
    3,
    [
      ['Mechanical', '<span class="en">Mechanical</span><span class="ar">ميكانيكي</span>'],
      ['Bodyshop', '<span class="en">Bodyshop</span><span class="ar">هيكل السيارة</span>']
    ],
    dqS(O, 'ckServiceEn', 'Split · service lane'),
    dqS(O, 'ckServiceAr', 'انقسام · نوع الخدمة')
  );
  dbFillDemoColumnBars(
    'dbFrequencyDemoChart',
    4,
    [
      ['1 Visit', '<span class="en">1 Visit</span><span class="ar">زيارة واحدة</span>'],
      ['2–3 Visits', '<span class="en">2–3 Visits</span><span class="ar">2–3 زيارات</span>'],
      ['4+ Visits', '<span class="en">4+ Visits</span><span class="ar">4+ زيارات</span>']
    ],
    dqS(O, 'ckFreqEn', 'Bars · visit frequency vs max'),
    dqS(O, 'ckFreqAr', 'أعمدة · تكرار الزيارات')
  );
  dbFillDemoColumnBars(
    'dbAgeDemoChart',
    5,
    [
      ['<25', '<span class="en">&lt;25</span><span class="ar">أقل من 25</span>'],
      ['25–34', '<span class="en">25–34</span><span class="ar">25–34</span>'],
      ['35–44', '<span class="en">35–44</span><span class="ar">35–44</span>'],
      ['45+', '<span class="en">45+</span><span class="ar">45+</span>']
    ],
    dqS(O, 'ckAgeEn', 'Bars · age category spread'),
    dqS(O, 'ckAgeAr', 'أعمدة · فئات العمر')
  );

  dbFinalizeDemographicsShells(O);
}

/* ── Dashboard: Main Render ── */
/** Percent of max 5 for 1–5 scale means (capped 0–100). */
function dbPctOf5(score) {
  const v = Number(score);
  if (Number.isNaN(v)) return 0;
  return Math.min(100, Math.max(0, Math.round((v / 5) * 100)));
}
/** Simulation slider 0–100 → implied mean on 0–5 scale (for labels). */
function dbSimLeverMeanFromV(vRaw) {
  const n = Number(vRaw);
  if (Number.isNaN(n)) return 0;
  return Math.min(5, Math.max(0, (n / 100) * 5));
}
/** Beside slider: "68% (3.4)" (% of scale, then implied /5 mean). */
function dbSimLeverLabel(sliderV) {
  const mean = dbSimLeverMeanFromV(sliderV);
  return `${dbPctOf5(mean)}% (${mean.toFixed(1)})`;
}
/** Default knob = driver's current avg score as % of 5-point ceiling. */
function dbSimDefaultV(dr) {
  return dbPctOf5(dr.avg);
}
/** e.g. 3.8 → "3.8 (76%)" */
function dbFormatMean5(score, decimals) {
  const d = decimals === undefined ? 1 : decimals;
  const v = Number(score);
  if (Number.isNaN(v)) return String(score);
  return `${v.toFixed(d)} (${dbPctOf5(v)}%)`;
}
/** Effect impact coefficient (typically 0–1 scale) → e.g. "34%" */
function dbImpactPct(impact, decimals) {
  const v = Number(impact);
  if (Number.isNaN(v)) return '—';
  const pct = v * 100;
  return decimals !== undefined ? `${pct.toFixed(decimals)}%` : `${Math.round(pct)}%`;
}

function dbGetExecutiveOverrides() {
  try {
    const raw = localStorage.getItem('roshd_executive_overrides');
    if (!raw) return null;
    const o = JSON.parse(raw);
    if (!o || typeof o !== 'object') return null;
    if (o.byFilter && typeof o.byFilter === 'object') {
      // Merge global (root) fields with the per-combination scoped fields so
      // global content (decision flow, core rule) and per-combo values (KPIs,
      // recommendations) both apply. Scoped wins on overlap.
      const scoped = o.byFilter[dbBuildDashboardFilterKey()];
      const root = { ...o };
      delete root.byFilter;
      return { ...root, ...(scoped && typeof scoped === 'object' ? scoped : {}) };
    }
    return o;
  } catch (_) {
    return null;
  }
}

function dbExecHtmlEscape(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const CUSTOMER_PATTERNS_OVERRIDES_KEY = 'roshd_customer_patterns_overrides';

function dbGetCustomerPatternsOverrides() {
  try {
    const raw = localStorage.getItem(CUSTOMER_PATTERNS_OVERRIDES_KEY);
    if (!raw) return null;
    const o = JSON.parse(raw);
    return o && typeof o === 'object' ? o : null;
  } catch (_) {
    return null;
  }
}

function cpS(O, key, defVal) {
  if (!O || O[key] === undefined || O[key] === null) return defVal;
  const s = String(O[key]).trim();
  return s === '' ? defVal : s;
}

const QUESTIONNAIRE_OVERRIDES_KEY = 'roshd_questionnaire_overrides';
let dbQuestionnaireDefaultInnerHtml = null;
const PILOT_ANALYSIS_OVERRIDES_KEY = 'roshd_pilot_analysis_overrides';
let dbPilotAnalysisDefaultInnerHtml = null;
const MODEL_QUALITY_OVERRIDES_KEY = 'roshd_model_quality_overrides';
let dbModelQualityDefaultInnerHtml = null;

function dbGetModelQualityOverrides() {
  try {
    const raw = localStorage.getItem(MODEL_QUALITY_OVERRIDES_KEY);
    if (!raw) return null;
    const o = JSON.parse(raw);
    if (!o || typeof o !== 'object') return null;
    // Labels + flow blocks are global; metric values resolve per Region/Branch/Service.
    const pairs = o.pairs && typeof o.pairs === 'object' ? o.pairs : {};
    const flowBlocks = Array.isArray(o.flowBlocks) ? o.flowBlocks : null;
    let values = {};
    if (o.byFilter && typeof o.byFilter === 'object') {
      const scoped = o.byFilter[dbBuildDashboardFilterKey()];
      if (scoped && typeof scoped.values === 'object') values = scoped.values;
    } else if (o.values && typeof o.values === 'object') {
      values = o.values; // legacy flat shape
    }
    return { pairs, values, flowBlocks };
  } catch (_) {
    return null;
  }
}

function dbGetQuestionnaireOverrides() {
  try {
    const raw = localStorage.getItem(QUESTIONNAIRE_OVERRIDES_KEY);
    if (!raw) return null;
    const o = JSON.parse(raw);
    return o && typeof o === 'object' ? o : null;
  } catch (_) {
    return null;
  }
}

function dbApplyQuestionnaireOverrides() {
  const panel = document.getElementById('db-panel-questionnaire');
  if (!panel) return;
  if (dbQuestionnaireDefaultInnerHtml == null) dbQuestionnaireDefaultInnerHtml = panel.innerHTML;
  const o = dbGetQuestionnaireOverrides();
  const sections = o && Array.isArray(o.sections) ? o.sections : null;
  const pairs = o && o.pairs && typeof o.pairs === 'object' ? o.pairs : null;
  const hasSections = !!(sections && sections.length);
  const hasPairs = !!(pairs && Object.keys(pairs).length);
  if (!hasSections && !hasPairs) {
    if (dbQuestionnaireDefaultInnerHtml != null && panel.innerHTML !== dbQuestionnaireDefaultInnerHtml) {
      panel.innerHTML = dbQuestionnaireDefaultInnerHtml;
    }
    return;
  }
  if (dbQuestionnaireDefaultInnerHtml != null && panel.innerHTML !== dbQuestionnaireDefaultInnerHtml) {
    panel.innerHTML = dbQuestionnaireDefaultInnerHtml;
  }
  if (hasSections) {
    const itemsInner = panel.querySelector('.db-q-items-inner');
    if (itemsInner) {
      const secHtml = sections.map((sec, si) => {
        const qHtml = (Array.isArray(sec.questions) ? sec.questions : []).map(q =>
          `<li><div class="db-q-tag">${dbExecHtmlEscape(q.code || '')}</div><div class="db-q-lines-txt"><span class="en">${dbExecHtmlEscape(q.en || '')}</span><span class="ar">${dbExecHtmlEscape(q.ar || '')}</span></div></li>`
        ).join('');
        return `<section class="db-q-section" aria-labelledby="db-q-sh-o-${si}">
          <header class="db-q-section-head" id="db-q-sh-o-${si}"><span class="en">${dbExecHtmlEscape(sec.topicEn || '')}</span><span class="ar">${dbExecHtmlEscape(sec.topicAr || '')}</span></header>
          <ol class="db-q-lines">${qHtml}</ol>
        </section>`;
      }).join('');
      itemsInner.innerHTML = secHtml;
    }
  } else if (hasPairs) {
    const enSpans = Array.from(panel.querySelectorAll('span.en'));
    const arSpans = Array.from(panel.querySelectorAll('span.ar'));
    const n = Math.min(enSpans.length, arSpans.length);
    for (let i = 0; i < n; i++) {
      const p = pairs[String(i)];
      if (!p) continue;
      if (p.en != null) enSpans[i].textContent = String(p.en);
      if (p.ar != null) arSpans[i].textContent = String(p.ar);
    }
  }
}

function dbExtractQuestionnaireSectionsFromPanel() {
  const panel = document.getElementById('db-panel-questionnaire');
  if (!panel) return [];
  const out = [];
  panel.querySelectorAll('.db-q-items-inner .db-q-section').forEach((sec) => {
    const topicEn = (sec.querySelector('.db-q-section-head .en')?.textContent || '').trim();
    const topicAr = (sec.querySelector('.db-q-section-head .ar')?.textContent || '').trim();
    const qCount = sec.querySelectorAll('.db-q-lines > li').length;
    if (!topicEn && !topicAr) return;
    out.push({
      topicEn: topicEn || topicAr || '—',
      topicAr: topicAr || topicEn || '—',
      qCount: qCount > 0 ? qCount : 1,
    });
  });
  return out;
}

function dbMeasurementColor(idx) {
  const palette = [
    '#60a5fa', '#34d399', '#eab308', '#a78bfa', '#f97316', '#22d3ee', '#f43f5e', '#84cc16',
    '#38bdf8', '#4ade80', '#fb923c', '#c084fc', '#2dd4bf', '#f472b6', '#a3e635', '#818cf8', '#94a3b8',
  ];
  return palette[idx % palette.length];
}

function dbRenderMeasurementModelFromQuestionnaire() {
  const listEl = document.getElementById('dbMqConstructList');
  const svgWrap = document.getElementById('dbMqSvgWrap');
  const capEl = document.getElementById('dbMqDiagramCaption');
  if (!listEl || !svgWrap || !capEl) return;

  const mqOverrides = dbGetModelQualityOverrides();
  const mqRows = Array.isArray(mqOverrides && mqOverrides.flowBlocks)
    ? mqOverrides.flowBlocks
        .slice(0, 16)
        .map((b) => ({
          topicEn: String((b && b.nameEn) || '').trim(),
          topicAr: String((b && b.nameAr) || '').trim(),
          descEn: String((b && b.descEn) || '').trim(),
          descAr: String((b && b.descAr) || '').trim(),
          qCount: Math.max(1, Number.parseInt(String((b && b.qCount) || 1), 10) || 1),
        }))
        .filter((b) => b.topicEn || b.topicAr || b.descEn || b.descAr)
    : [];

  const allSections = dbExtractQuestionnaireSectionsFromPanel();
  const antecedents = allSections.filter((s) => {
    const t = `${s.topicEn} ${s.topicAr}`.toLowerCase();
    return !(t.includes('customer experience score') || t.includes('درجة تجربة العميل') || t.includes('cx score'));
  });
  const outcome = allSections.find((s) => {
    const t = `${s.topicEn} ${s.topicAr}`.toLowerCase();
    return t.includes('customer experience score') || t.includes('درجة تجربة العميل') || t.includes('cx score');
  });

  const rows = (mqRows.length ? mqRows : antecedents).slice(0, 16);
  if (!rows.length) return;
  const outcomeRow = outcome || { topicEn: 'Customer Experience Score', topicAr: 'درجة تجربة العميل', qCount: 3 };
  const totalItems = rows.reduce((a, b) => a + (Number(b.qCount) || 0), 0) + (Number(outcomeRow.qCount) || 0);

  listEl.innerHTML = rows
    .map((r, i) => {
      const c = dbMeasurementColor(i);
      return `<li class="db-mq-ant" style="border-color:${dbExecHtmlEscape(c)}66;background:color-mix(in srgb, ${dbExecHtmlEscape(c)} 12%, transparent)">
        <span class="db-mq-ico" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="${dbExecHtmlEscape(c)}" stroke-width="1.75"/></svg>
        </span>
        <div class="db-mq-ant-text">
          <strong><span class="en">${dbExecHtmlEscape(r.topicEn || r.topicAr || '—')}</span><span class="ar">${dbExecHtmlEscape(r.topicAr || r.topicEn || '—')}</span></strong>
          <small><span class="en">${dbExecHtmlEscape(r.descEn || 'Block defined in Model Quality editor')}</span><span class="ar">${dbExecHtmlEscape(r.descAr || 'كتلة معرفة في محرر جودة النموذج')}</span></small>
        </div>
        <span class="db-mq-chip db-mq-chip-lg"><span class="db-mq-qty">${Math.max(1, Number(r.qCount) || 1)}</span><span class="db-mq-q-note"><span class="en">Qs</span><span class="ar">أسئلة</span></span></span>
      </li>`;
    })
    .join('') +
    `<li class="db-mq-ant db-mq-ant--cx">
      <span class="db-mq-ico" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#d4af55" stroke-width="1.75"/><circle cx="12" cy="7" r="4" stroke="#d4af55" stroke-width="1.75"/></svg>
      </span>
      <div class="db-mq-ant-text">
        <strong><span class="en">${dbExecHtmlEscape(outcomeRow.topicEn)}</span><span class="ar">${dbExecHtmlEscape(outcomeRow.topicAr)}</span></strong>
        <small><span class="en">Reflective latent · OS block</span><span class="ar">كتلة انعكاسية · OS</span></small>
      </div>
      <span class="db-mq-chip db-mq-chip-lg"><span class="db-mq-qty">${Math.max(1, Number(outcomeRow.qCount) || 1)}</span><span class="db-mq-q-note"><span class="en">Qs</span><span class="ar">أسئلة</span></span></span>
    </li>`;

  const n = rows.length;
  const step = 68;
  const topPad = 20;
  const h = Math.max(260, topPad * 2 + (n - 1) * step + 50);
  const rightBoxY = Math.max(24, (h - 130) / 2);
  const rightJoinStart = rightBoxY + 28;
  const rightJoinEnd = rightBoxY + 102;

  const nodes = rows
    .map((r, i) => {
      const y = topPad + i * step;
      const c = dbMeasurementColor(i);
      const txtY = y + 23;
      const subY = y + 40;
      return `
        <rect x="18" y="${y}" width="176" height="50" rx="12" stroke="${c}99" stroke-width="1.5" fill="${c}17"/>
        <text x="106" y="${txtY}" text-anchor="middle" fill="rgba(255,255,255,0.92)" font-size="12.5" font-weight="700">${dbExecHtmlEscape(r.topicEn)}</text>
        <text x="106" y="${subY}" text-anchor="middle" fill="${c}" font-size="10.5" font-weight="700">× ${Math.max(1, Number(r.qCount) || 1)} questions</text>
      `;
    })
    .join('');

  const linkMarkers = rows
    .map((_, i) => {
      const c = dbMeasurementColor(i);
      const marker = `dbMqDynArr${i}`;
      return `<marker id="${marker}" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto"><polygon points="0 0,9 4.5,0 9" fill="${c}"/></marker>`;
    })
    .join('');

  const links = rows
    .map((_, i) => {
      const y = topPad + i * step + 25;
      const targetY = rightJoinStart + ((rightJoinEnd - rightJoinStart) * (i + 1)) / (n + 1);
      const c = dbMeasurementColor(i);
      const marker = `dbMqDynArr${i}`;
      return `<path d="M 194 ${y} L 282 ${y} L 338 ${targetY}" stroke="${c}" stroke-width="1.85" fill="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" marker-end="url(#${marker})"/>`;
    })
    .join('');

  svgWrap.innerHTML = `<svg class="db-mq-model-svg" viewBox="0 0 548 ${h}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>${linkMarkers}</defs>
    ${nodes}
    ${links}
    <rect x="338" y="${rightBoxY}" width="188" height="130" rx="16" stroke="rgba(212,175,85,0.58)" stroke-width="1.6" fill="rgba(184,150,46,0.1)"/>
    <text x="432" y="${rightBoxY + 52}" text-anchor="middle" fill="rgba(255,255,255,0.95)" font-size="13.5" font-weight="700">${dbExecHtmlEscape(outcomeRow.topicEn)}</text>
    <text x="432" y="${rightBoxY + 84}" text-anchor="middle" fill="#e8c65c" font-size="11.5" font-weight="700">${Math.max(1, Number(outcomeRow.qCount) || 1)} indicators</text>
  </svg>`;

  capEl.innerHTML = `<span class="en">Conceptual drivers → ${dbExecHtmlEscape(outcomeRow.topicEn)} (${totalItems} items across active model blocks).</span>
  <span class="ar">محركات مفاهيمية → ${dbExecHtmlEscape(outcomeRow.topicAr)} (إجمالي ${totalItems} بندًا عبر كتل النموذج النشطة).</span>`;
}

function dbApplyPilotAnalysisOverrides() {
  const panel = document.getElementById('db-panel-pilot');
  if (!panel) return;
  if (dbPilotAnalysisDefaultInnerHtml == null) dbPilotAnalysisDefaultInnerHtml = panel.innerHTML;
  let pairs = null;
  let values = null;
  try {
    const raw = localStorage.getItem(PILOT_ANALYSIS_OVERRIDES_KEY);
    if (raw) {
      const o = JSON.parse(raw);
      if (o && typeof o === 'object' && o.pairs && typeof o.pairs === 'object') pairs = o.pairs;
      if (o && typeof o === 'object' && o.values && typeof o.values === 'object') values = o.values;
    }
  } catch (_) {}
  const hasPairs = !!(pairs && Object.keys(pairs).length);
  const hasValues = !!(values && Object.keys(values).length);
  if (!hasPairs && !hasValues) {
    if (dbPilotAnalysisDefaultInnerHtml != null && panel.innerHTML !== dbPilotAnalysisDefaultInnerHtml) {
      panel.innerHTML = dbPilotAnalysisDefaultInnerHtml;
    }
    return;
  }
  if (dbPilotAnalysisDefaultInnerHtml != null && panel.innerHTML !== dbPilotAnalysisDefaultInnerHtml) {
    panel.innerHTML = dbPilotAnalysisDefaultInnerHtml;
  }
  if (hasPairs) {
    const enSpans = Array.from(panel.querySelectorAll('span.en'));
    const arSpans = Array.from(panel.querySelectorAll('span.ar'));
    const n = Math.min(enSpans.length, arSpans.length);
    for (let i = 0; i < n; i++) {
      const p = pairs[String(i)];
      if (!p) continue;
      if (p.en != null) enSpans[i].textContent = String(p.en);
      if (p.ar != null) arSpans[i].textContent = String(p.ar);
    }
  }
  if (hasValues) {
    const nodes = Array.from(panel.querySelectorAll('.db-pilot-alpha-val, .db-pilot-flow-svg text'));
    for (let i = 0; i < nodes.length; i++) {
      if (!Object.prototype.hasOwnProperty.call(values, String(i))) continue;
      nodes[i].textContent = String(values[String(i)]);
    }
  }
}

function dbApplyModelQualityOverrides() {
  const panel = document.getElementById('db-panel-model');
  if (!panel) return;
  if (dbModelQualityDefaultInnerHtml == null) dbModelQualityDefaultInnerHtml = panel.innerHTML;
  let pairs = null;
  let values = null;
  const o = dbGetModelQualityOverrides();
  if (o && typeof o === 'object' && o.pairs && typeof o.pairs === 'object') pairs = o.pairs;
  if (o && typeof o === 'object' && o.values && typeof o.values === 'object') values = o.values;
  const hasPairs = !!(pairs && Object.keys(pairs).length);
  const hasValues = !!(values && Object.keys(values).length);
  const hasFlowBlocks = !!(o && Array.isArray(o.flowBlocks) && o.flowBlocks.length);
  if (!hasPairs && !hasValues && !hasFlowBlocks) {
    if (dbModelQualityDefaultInnerHtml != null && panel.innerHTML !== dbModelQualityDefaultInnerHtml) {
      panel.innerHTML = dbModelQualityDefaultInnerHtml;
    }
    return;
  }
  if ((hasPairs || hasValues) && dbModelQualityDefaultInnerHtml != null) {
    panel.innerHTML = dbModelQualityDefaultInnerHtml;
  }
  if (hasPairs) {
    const enSpans = Array.from(panel.querySelectorAll('span.en'));
    const arSpans = Array.from(panel.querySelectorAll('span.ar'));
    const n = Math.min(enSpans.length, arSpans.length);
    for (let i = 0; i < n; i++) {
      const p = pairs[String(i)];
      if (!p) continue;
      if (p.en != null) enSpans[i].textContent = String(p.en);
      if (p.ar != null) arSpans[i].textContent = String(p.ar);
    }
  }
  if (hasValues) {
    const nodes = Array.from(panel.querySelectorAll('.db-model-metric-val'));
    for (let i = 0; i < nodes.length; i++) {
      if (!Object.prototype.hasOwnProperty.call(values, String(i))) continue;
      nodes[i].textContent = String(values[String(i)]);
    }
  }
}

const CX_DRIVERS_OVERRIDES_KEY = 'roshd_cx_drivers_overrides';

function dbGetCxDriversOverrides() {
  try {
    const raw = localStorage.getItem(CX_DRIVERS_OVERRIDES_KEY);
    if (!raw) return null;
    const o = JSON.parse(raw);
    if (!o || typeof o !== 'object') return null;
    if (o.byFilter && typeof o.byFilter === 'object') {
      const scoped = o.byFilter[dbBuildDashboardFilterKey()];
      return scoped && typeof scoped === 'object' ? scoped : null;
    }
    return o;
  } catch (_) {
    return null;
  }
}

function dbNormalizeCxOverrideRows(rows) {
  if (!Array.isArray(rows) || !rows.length) return null;
  const norm = rows
    .map((row, i) => {
      const impact = Number(row && row.impact);
      let avg = Number(row && row.avg);
      if (!Number.isFinite(avg)) {
        const m = String((row && row.avgScore) || '').match(/-?\d+(\.\d+)?/);
        avg = m ? Number(m[0]) : NaN;
      }
      return {
        rank: Number.isFinite(Number(row && row.rank)) ? Number(row.rank) : i + 1,
        name: String((row && row.nameEn) || (row && row.name) || '').trim(),
        nameAr: String((row && row.nameAr) || (row && row.nameEn) || (row && row.name) || '').trim(),
        impact: Number.isFinite(impact) ? Math.max(0, impact) : 0,
        avg: Number.isFinite(avg) ? Math.min(5, Math.max(0, avg)) : 3,
        decision: String((row && row.decisionEn) || '').trim(),
        decisionAr: String((row && row.decisionAr) || (row && row.decisionEn) || '').trim(),
        cls: String((row && row.cls) || '').trim(),
      };
    })
    .filter(r => r.name || r.nameAr);
  norm.sort((a, b) => a.rank - b.rank);
  return norm.length ? norm : null;
}

function dbCxBadgeClass(cls) {
  const c = String(cls || '').toLowerCase();
  if (c === 'navy') return 'db-badge-navy';
  if (c === 'danger') return 'db-badge-danger';
  if (c === 'warning') return 'db-badge-warning';
  return 'db-badge-gold';
}

/** After live sim math — optional fixed copy for expected / baseline / advice. */
function dbApplyCxDriversSimulationPatch() {
  const o = dbGetCxDriversOverrides();
  if (!o) return;
  const esc = dbExecHtmlEscape;
  const leadEl = document.getElementById('dbSimExpectedLeadSpan');
  const parEl = document.getElementById('dbSimExpectedParenSpan');
  if (o.simExpectedLead != null && String(o.simExpectedLead).trim() !== '') {
    if (leadEl) leadEl.textContent = o.simExpectedLead;
    if (parEl) parEl.textContent = o.simExpectedParen != null && String(o.simExpectedParen).trim() !== '' ? o.simExpectedParen : '';
  }
  const baseEl = document.getElementById('dbSimBaseline');
  if (baseEl && o.simBaseline != null && String(o.simBaseline).trim() !== '') baseEl.textContent = o.simBaseline;
  const advEl = document.getElementById('dbSimAdvice');
  if (
    advEl &&
    ((o.simAdviceEn != null && String(o.simAdviceEn).trim() !== '') ||
      (o.simAdviceAr != null && String(o.simAdviceAr).trim() !== ''))
  ) {
    const en = String(o.simAdviceEn || '').trim();
    const ar = String(o.simAdviceAr || '').trim() || en;
    advEl.innerHTML = `<span class="en">${esc(en).replace(/\n/g, '<br/>')}</span><span class="ar">${esc(ar).replace(/\n/g, '<br/>')}</span>`;
  }
  const sfx = document.getElementById('dbCxBaselineSuffix');
  if (sfx && o.baselineSuffix != null && o.baselineSuffix !== '') sfx.textContent = o.baselineSuffix;
}

function dbApplyCxDriversSliderLabels() {
  // Slider labels now always derive from live top drivers (single source).
}

function dbApplyCxDriversDisplayOverrides() {
  const o = dbGetCxDriversOverrides();
  if (!o) return;
  const esc = dbExecHtmlEscape;

  function setPair(enId, arId, enVal, arVal) {
    const enEl = document.getElementById(enId);
    const arEl = document.getElementById(arId);
    if (enEl && enVal != null && String(enVal).trim() !== '') enEl.textContent = enVal;
    if (arEl && arVal != null && String(arVal).trim() !== '') arEl.textContent = arVal;
  }

  setPair('dbCxMapTitleEn', 'dbCxMapTitleAr', o.mapTitleEn, o.mapTitleAr);
  setPair('dbCxMapSubEn', 'dbCxMapSubAr', o.mapSubEn, o.mapSubAr);
  setPair('dbCxRankTitleEn', 'dbCxRankTitleAr', o.rankTitleEn, o.rankTitleAr);
  setPair('dbCxRankSubEn', 'dbCxRankSubAr', o.rankSubEn, o.rankSubAr);
  setPair('dbCxThRankEn', 'dbCxThRankAr', o.thRankEn, o.thRankAr);
  setPair('dbCxThDriverEn', 'dbCxThDriverAr', o.thDriverEn, o.thDriverAr);
  setPair('dbCxThEffectEn', 'dbCxThEffectAr', o.thEffectEn, o.thEffectAr);
  setPair('dbCxThAvgEn', 'dbCxThAvgAr', o.thAvgEn, o.thAvgAr);
  setPair('dbCxThDecisionEn', 'dbCxThDecisionAr', o.thDecisionEn, o.thDecisionAr);
  setPair('dbCxSimTitleEn', 'dbCxSimTitleAr', o.simTitleEn, o.simTitleAr);
  setPair('dbCxSimSubEn', 'dbCxSimSubAr', o.simSubEn, o.simSubAr);
  setPair('dbCxSimResetEn', 'dbCxSimResetAr', o.simResetEn, o.simResetAr);
  setPair('dbCxSimLblExpectedEn', 'dbCxSimLblExpectedAr', o.simLblExpectedEn, o.simLblExpectedAr);
  setPair('dbCxBaselineLblEn', 'dbCxBaselineLblAr', o.baselineLblEn, o.baselineLblAr);

  if (o.interpretEn != null && String(o.interpretEn).trim() !== '') {
    const el = document.getElementById('dbCxInterpretEn');
    if (el) el.innerHTML = `<b>Interpretation:</b> ${esc(o.interpretEn).replace(/\n/g, '<br/>')}`;
  }
  if (o.interpretAr != null && String(o.interpretAr).trim() !== '') {
    const el = document.getElementById('dbCxInterpretAr');
    if (el) el.innerHTML = `<b>التفسير:</b> ${esc(o.interpretAr).replace(/\n/g, '<br/>')}`;
  }

  // Driver rows now act as single source via dbGetData(); ranking/bubbles/simulation refresh from same model.

  dbApplyCxDriversSliderLabels();
}

function dbApplyExecutiveDisplayOverrides() {
  const o = dbGetExecutiveOverrides();
  if (!o) return;

  /* KPI numbers (CX score, R² strip, top driver, risk, sample N/share, branch bars) are set in `dbRender()`
   * from `dbGetData()` + live filters. Do not overwrite them from executive overrides — those fields are
   * snapshot-at-save-time and used to freeze the strip (e.g. stuck at 76% (3.8)) after one admin save. */
  const elTrend = document.getElementById('kpiTrend1');
  if (elTrend && o.kpiTrend1 != null && o.kpiTrend1 !== '') elTrend.textContent = o.kpiTrend1;

  const execGrid = document.getElementById('dbExecGrid');
  if (execGrid && Array.isArray(o.investEn)) {
    const isAr = document.documentElement.getAttribute('data-lang') === 'ar';
    const pick = (enArr, arArr) => {
      const a = isAr && Array.isArray(arArr) && arArr.length ? arArr : enArr;
      return (a || []).map((x) => `<li>${dbExecHtmlEscape(x)}</li>`).join('');
    };
    execGrid.innerHTML = `
    <div class="db-exec-card db-exec-invest">
      <div class="db-exec-card-title"><span class="en">Invest Now</span><span class="ar">استثمر الآن</span></div>
      <ul>${pick(o.investEn, o.investAr)}</ul>
    </div>
    <div class="db-exec-card db-exec-optimize">
      <div class="db-exec-card-title"><span class="en">Optimize Selectively</span><span class="ar">حسّن بانتقائية</span></div>
      <ul>${pick(o.optimizeEn || [], o.optimizeAr)}</ul>
    </div>
    <div class="db-exec-card db-exec-avoid">
      <div class="db-exec-card-title"><span class="en">Avoid / Defer</span><span class="ar">تجنّب / أجّل</span></div>
      <ul>${pick(o.avoidEn || [], o.avoidAr)}</ul>
    </div>`;
  }

  const flowHost = document.getElementById('dbDecisionFlowSteps');
  if (flowHost && Array.isArray(o.flowSteps) && o.flowSteps.length === 5) {
    const tile = (st, isLast) => {
      const bg = isLast ? 'var(--navy)' : 'rgba(255,255,255,0.04)';
      const border = isLast ? '1px solid var(--db-border)' : '1px solid var(--db-border-subtle)';
      const subColor = isLast ? 'rgba(255,255,255,0.4)' : 'var(--db-muted)';
      return `<div style="flex:1;min-width:100px;background:${bg};border:${border};border-radius:8px;padding:14px;text-align:center">
        <div style="font-weight:700;color:var(--gold-light);margin-bottom:4px;font-size:13px"><span class="en">${dbExecHtmlEscape(st.titleEn || '')}</span><span class="ar">${dbExecHtmlEscape(st.titleAr || st.titleEn || '')}</span></div>
        <div style="font-size:11px;color:${subColor}"><span class="en">${dbExecHtmlEscape(st.bodyEn || '')}</span><span class="ar">${dbExecHtmlEscape(st.bodyAr || st.bodyEn || '')}</span></div>
      </div>`;
    };
    flowHost.innerHTML = o.flowSteps.map((st, i) => tile(st, i === 4)).join('');
  }

  const core = document.getElementById('dbExecCoreRule');
  if (core && (o.coreRuleEn != null || o.coreRuleAr != null)) {
    const en = o.coreRuleEn != null && o.coreRuleEn !== '' ? o.coreRuleEn : '';
    const ar = o.coreRuleAr != null && o.coreRuleAr !== '' ? o.coreRuleAr : en;
    core.innerHTML = `<span class="en"><b>Core rule:</b> ${dbExecHtmlEscape(en)}</span><span class="ar"><b>القاعدة الأساسية:</b> ${dbExecHtmlEscape(ar)}</span>`;
  }

  const warnEl = document.getElementById('dbSegmentWarning');
  if (warnEl && o.segmentWarningMode) {
    if (o.segmentWarningMode === 'hide') {
      warnEl.style.display = 'none';
    } else if (o.segmentWarningMode === 'custom' && ((o.segmentWarningEn && o.segmentWarningEn.trim()) || (o.segmentWarningAr && o.segmentWarningAr.trim()))) {
      warnEl.style.display = '';
      const en = (o.segmentWarningEn || '').trim();
      const ar = (o.segmentWarningAr || '').trim() || en;
      warnEl.innerHTML = `<span><span class="en">${dbExecHtmlEscape(en)}</span><span class="ar">${dbExecHtmlEscape(ar)}</span></span>`;
    }
  }
}

const UNITS_PERF_OVERRIDES_KEY = 'roshd_units_performance_overrides';

function dbGetUnitsPerformanceOverrides() {
  try {
    const raw = localStorage.getItem(UNITS_PERF_OVERRIDES_KEY);
    if (!raw) return null;
    const o = JSON.parse(raw);
    return o && typeof o === 'object' ? o : null;
  } catch (_) {
    return null;
  }
}

/** Admin-saved Units Performance copy (localStorage). Applied after live `dbRenderSegments`. */
function dbApplyUnitsPerformanceDisplayOverrides() {
  const o = dbGetUnitsPerformanceOverrides();
  if (!o) return;
  const esc = dbExecHtmlEscape;
  const titleEl = document.getElementById('dbSegDetailTitle');
  if (!titleEl) return;

  if (
    (o.segTitleEn != null && String(o.segTitleEn).trim() !== '') ||
    (o.segTitleAr != null && String(o.segTitleAr).trim() !== '')
  ) {
    const en =
      o.segTitleEn != null && String(o.segTitleEn).trim() !== ''
        ? String(o.segTitleEn).trim()
        : '—';
    const ar =
      o.segTitleAr != null && String(o.segTitleAr).trim() !== ''
        ? String(o.segTitleAr).trim()
        : en;
    titleEl.innerHTML = `<span class="en">${esc(en)}</span><span class="ar">${esc(ar)}</span>`;
  }

}

function dbRender() {
  dbPersistRoshdFilters();

  const fc = dbFilteredCustomers();
  const segmentN = fc.length;
  const sharePct = segmentN ? Math.round((segmentN / DB_SAMPLE_TOTAL) * 100) : 0;
  const d = dbGetData();
  const isAr = document.documentElement.getAttribute('data-lang') === 'ar';
  const freqVal = dbFilValueByKey('frequency', 'All Frequencies');
  const ageSel = dbFilValueByKey('age', 'All Ages');

  const kScore = document.getElementById('kpiScore');
  if (kScore) {
    const sv = Number(d.score);
    kScore.textContent = Number.isNaN(sv)
      ? String(d.score)
      : `${dbPctOf5(sv)}% (${sv.toFixed(1)})`;
  }
  const mq = document.getElementById('mqR2');
  if (mq) mq.textContent = d.explanatory + '%';
  const stripR2 = document.getElementById('kpiStripR2');
  if (stripR2) stripR2.textContent = d.explanatory + '%';

  const sortedKpi = [...(d.drivers || [])].sort((a, b) => b.impact - a.impact);
  const kpiTopDrv = document.getElementById('kpiTopDriver');
  if (kpiTopDrv) {
    kpiTopDrv.innerHTML = sortedKpi[0]
      ? `<span class="en">${sortedKpi[0].name}</span><span class="ar">${sortedKpi[0].nameAr || sortedKpi[0].name}</span>`
      : '<span class="en">—</span><span class="ar">—</span>';
  }
  const kpiRiskEl = document.getElementById('kpiRisk');
  if (kpiRiskEl)
    kpiRiskEl.innerHTML =
      `<span class="en">${d.risk}</span><span class="ar">${d.riskAr || d.risk}</span>`;

  const sampleNEl = document.getElementById('kpiSampleN');
  const sampleShareEl = document.getElementById('kpiSampleShare');
  if (sampleNEl) sampleNEl.textContent = String(segmentN);
  if (sampleShareEl) {
    sampleShareEl.innerHTML =
      `<span class="en">${sharePct}% of full sample (${DB_SAMPLE_TOTAL})</span><span class="ar">${sharePct}% من العينة الكاملة (${DB_SAMPLE_TOTAL})</span>`;
  }


  const warnEl = document.getElementById('dbSegmentWarning');
  if (warnEl) {
    if (segmentN < 30) {
      warnEl.innerHTML =
        `<span><span class="en"><b>Warning:</b> Segment N is below 30. Treat outputs as directional, not proof.</span><span class="ar"><b>تنبيه:</b> حجم الشريحة أقل من 30. اعتبر المخرجات توجيهية وليست دليلًا نهائيًا.</span></span>`;
      warnEl.style.display = '';
    } else if (segmentN < 60) {
      warnEl.innerHTML =
        `<span><span class="en"><b>Caution:</b> Segment N is modest — use for prioritization, not definitive proof.</span><span class="ar"><b>تحفّظ:</b> حجم الشريحة متوسط — للأولوية وليس الإثبات النهائي.</span></span>`;
      warnEl.style.display = '';
    } else {
      warnEl.innerHTML =
        `<span><span class="en"><b>Sample check:</b> Segment size supports dashboard-level interpretation.</span><span class="ar"><b>مراجعة العينة:</b> الحجم ملائم لتفسير على مستوى اللوحة.</span></span>`;
      warnEl.style.display = '';
    }
  }

  const branchPerf = document.getElementById('dbBranchPerfBars');
  if (branchPerf) {
    const brModel = dbModelRoot();
    const branchKeys = Object.keys(brModel).filter((k) => k && k !== 'All Branches');
    const barBranches = branchKeys.length ? branchKeys : DB_BR_LIST;
    branchPerf.innerHTML = barBranches.map((b) => {
      const bd = brModel[b] || {};
      const w = Math.min(100, Math.round(((bd.score || 3) / 5) * 100));
      return `<div class="db-bar-row">
        <span class="db-bar-label"><span class="en">${b}</span><span class="ar">${b === 'Riyadh' ? 'الرياض' : b === 'Jeddah' ? 'جدة' : b === 'Dammam' ? 'الدمام' : b}</span></span>
        <div class="db-bar-track"><div class="db-bar-fill" style="width:${w}%"></div></div>
        <span class="db-bar-val">${dbFormatMean5(bd.score, 1)}</span>
      </div>`;
    }).join('');
  }

  const execHTML = `
    <div class="db-exec-card db-exec-invest">
      <div class="db-exec-card-title"><span class="en">Invest Now</span><span class="ar">استثمر الآن</span></div>
      <ul>${(isAr ? d.investAr||d.invest : d.invest).map(x=>`<li>${x}</li>`).join('')}</ul>
    </div>
    <div class="db-exec-card db-exec-optimize">
      <div class="db-exec-card-title"><span class="en">Optimize Selectively</span><span class="ar">حسّن بانتقائية</span></div>
      <ul>${(isAr ? d.optimizeAr||d.optimize : d.optimize).map(x=>`<li>${x}</li>`).join('')}</ul>
    </div>
    <div class="db-exec-card db-exec-avoid">
      <div class="db-exec-card-title"><span class="en">Avoid / Defer</span><span class="ar">تجنّب / أجّل</span></div>
      <ul>${(isAr ? d.avoidAr||d.avoid : d.avoid).map(x=>`<li>${x}</li>`).join('')}</ul>
    </div>`;
  const execGrid = document.getElementById('dbExecGrid');
  if (execGrid) execGrid.innerHTML = execHTML;

  // Drivers table (full ranking)
  const driversTbody = document.getElementById('dbDriversTable');
  if (driversTbody) {
    driversTbody.innerHTML = d.drivers.map((dr, i) => {
      const dName = isAr ? (dr.nameAr||dr.name) : dr.name;
      const dDec  = isAr ? (dr.decisionAr||dr.decision) : dr.decision;
      const badgeCls = dr.cls === 'navy' ? 'db-badge-navy' : dr.cls === 'danger' ? 'db-badge-danger' : dr.cls === 'warning' ? 'db-badge-warning' : 'db-badge-gold';
      return `<tr>
        <td><b>#${i+1}</b></td>
        <td><b>${dName}</b></td>
        <td><b>${dbImpactPct(dr.impact)}</b></td>
        <td>${dbFormatMean5(dr.avg, 1)}</td>
        <td><span class="db-badge ${badgeCls}">${dDec}</span></td>
      </tr>`;
    }).join('');
  }

  // Driver bubble map (grid layout — sorted by impact, sizes clamped)
  const bub = document.getElementById('dbBubbleContainer');
  if (bub) {
    const sorted = [...d.drivers].sort((a, b) => b.impact - a.impact);
    bub.innerHTML = sorted.map(dr => {
      const size = Math.min(118, Math.max(76, 56 + dr.impact * 220));
      const low = dr.name === 'Speed' ? ' low' : '';
      const lab = isAr ? (dr.nameAr || dr.name) : dr.name;
      const impLab = isAr ? 'الأثر' : 'Impact';
      return `<div class="db-bubble${low}" style="width:${size}px;height:${size}px" role="img" aria-label="${lab} ${impLab} ${dbImpactPct(dr.impact)}">
        <span class="db-bubble-name">${lab}</span>
        <span class="db-bubble-imp">${impLab} ${dbImpactPct(dr.impact)}</span>
      </div>`;
    }).join('');
  }

  dbRenderCustomerPatterns(fc);

  dbRenderDemographics(d, segmentN, sharePct, freqVal, ageSel);

  dbRenderSimulation();

  // Segments if visible
  const segPan = document.getElementById('db-panel-segments');
  if (segPan && segPan.classList.contains('active')) dbRenderSegments();

  dbApplyCxDriversDisplayOverrides();
  dbApplyExecutiveDisplayOverrides();
  dbApplyQuestionnaireOverrides();
  dbApplyPilotAnalysisOverrides();
  dbApplyModelQualityOverrides();
  dbRenderMeasurementModelFromQuestionnaire();
}

/* ── Simulation ── */
function dbRenderSimulation() {
  const d = dbGetData();
  const container = document.getElementById('dbSimSliders');
  if (!container) return;
  const top4 = d.drivers.slice(0, 4);
  if (top4.length && top4.every(dr => dbSimValues[dr.name] === 10))
    top4.forEach(dr => {
      dbSimValues[dr.name] = dbSimDefaultV(dr);
    });
  top4.forEach(dr => {
    if (dbSimValues[dr.name] === undefined) dbSimValues[dr.name] = dbSimDefaultV(dr);
  });
  const isAr = document.documentElement.getAttribute('data-lang') === 'ar';
  container.innerHTML = d.drivers.slice(0, 4).map(dr => {
    const spId = dbSimSpanId(dr.name);
    const dName = isAr ? (dr.nameAr||dr.name) : dr.name;
    const encName = encodeURIComponent(dr.name);
    const v = dbSimValues[dr.name];
    return `<div class="db-slider-wrap">
      <div class="db-slider-header">
        <span class="db-slider-name">${dName} ${t('Improvement','تحسين')}</span>
        <span class="db-slider-val" id="${spId}">${dbSimLeverLabel(v)}</span>
      </div>
      <input type="range" class="db-range" data-driver="${encName}" data-lab="${spId}" min="0" max="100" step="1" value="${v}"
        oninput="dbSimSliderInput(this)">
      <div class="db-sim-range-ticks"><span>0</span><span>50</span><span>100</span></div>
    </div>`;
  }).join('');
  dbUpdateSimulation();
}

function dbUpdateSimulation() {
  const d = dbGetData();
  let lift = 0;
  const liftScale = 20;
  d.drivers.slice(0, 4).forEach(dr => {
    const mult = dr.name === 'Speed' ? 0.08 : 0.11;
    const v = dbSimValues[dr.name] !== undefined ? dbSimValues[dr.name] : dbSimDefaultV(dr);
    const v0 = dbSimDefaultV(dr);
    lift += ((v - v0) / 100) * liftScale * dr.impact * mult;
  });
  const expected = Math.min(5, Math.max(1, d.score + lift));
  const expEl = document.getElementById('dbSimExpected');
  if (expEl)
    expEl.innerHTML = `<span class="db-sim-expected-lead" id="dbSimExpectedLeadSpan">${dbPctOf5(expected)}%</span> <span class="db-sim-expected-br" id="dbSimExpectedParenSpan">(${expected.toFixed(1)})</span>`;
  const baseEl = document.getElementById('dbSimBaseline');
  if (baseEl) baseEl.textContent = dbFormatMean5(d.score, 2);
  const advEl = document.getElementById('dbSimAdvice');
  if (advEl) advEl.innerHTML = `<span class="en">Strongest lever: <b>${d.top}</b>. Speed remains low-impact unless its effect size changes.</span><span class="ar">الرافعة الأقوى: <b>${d.topAr||d.top}</b>. السرعة تظل ضعيفة الأثر ما لم يتغيّر حجم تأثيرها.</span>`;
  dbApplyCxDriversSimulationPatch();
}

/* ── Segments ── */
function dbRenderSegments() {
  const titleEl = document.getElementById('dbSegDetailTitle');
  const subEl   = document.getElementById('dbSegDetailSub');
  const bodyEl  = document.getElementById('dbSegDetailBody');
  if (!titleEl || !subEl || !bodyEl) return;

  const d = dbGetData();
  const isAr = document.documentElement.getAttribute('data-lang') === 'ar';
  const branchVal = dbFilValueByKey('branch', 'All Branches');
  const labels = {
    'All Branches': ['All Branches', 'جميع الفروع'],
    'Riyadh': ['Riyadh', 'الرياض'],
    'Jeddah': ['Jeddah', 'جدة'],
    'Dammam': ['Dammam', 'الدمام']
  };
  const lbl = labels[branchVal] || [branchVal, branchVal];

  titleEl.innerHTML = `<span class="en">${lbl[0]} — Units Performance</span><span class="ar">${lbl[1]} — أداء الوحدات</span>`;
  subEl.innerHTML   = `${d.explanatory}% · <span class="en">Top driver:</span><span class="ar">المحرك الأول:</span> <span class="en">${d.top}</span><span class="ar">${d.topAr||d.top}</span> · ${dbFormatMean5(d.score, 1)}`;

  bodyEl.innerHTML = `
    <div class="db-bar-list" style="margin-bottom:20px">
      ${d.drivers.map(dr => `
        <div class="db-bar-row">
          <span class="db-bar-label"><span class="en">${dr.name}</span><span class="ar">${dr.nameAr||dr.name}</span></span>
          <div class="db-bar-track"><div class="db-bar-fill" style="width:${Math.min(100,dr.impact/.35*100)}%"></div></div>
          <span class="db-bar-val">${dbImpactPct(dr.impact)}</span>
        </div>`).join('')}
    </div>
    <div class="db-exec-grid">
      <div class="db-exec-card db-exec-invest">
        <div class="db-exec-card-title"><span class="en">Invest Now</span><span class="ar">استثمر الآن</span></div>
        <ul>${(isAr ? d.investAr||d.invest : d.invest).map(x=>`<li>${x}</li>`).join('')}</ul>
      </div>
      <div class="db-exec-card db-exec-optimize">
        <div class="db-exec-card-title"><span class="en">Optimize</span><span class="ar">حسّن</span></div>
        <ul>${(isAr ? d.optimizeAr||d.optimize : d.optimize).map(x=>`<li>${x}</li>`).join('')}</ul>
      </div>
      <div class="db-exec-card db-exec-avoid">
        <div class="db-exec-card-title"><span class="en">Avoid</span><span class="ar">تجنّب</span></div>
        <ul>${(isAr ? d.avoidAr||d.avoid : d.avoid).map(x=>`<li>${x}</li>`).join('')}</ul>
      </div>
    </div>`;

  dbApplyUnitsPerformanceDisplayOverrides();
}

/* ── Dashboard Logout ── */
function handleDashboardLogout() {
  try {
    localStorage.removeItem('roshd_access_token');
    localStorage.removeItem('roshd_refresh_token');
    localStorage.removeItem('roshd_user');
    localStorage.removeItem('roshd_panel');
    localStorage.removeItem('roshd_filters');
    localStorage.removeItem('roshd_scroll');
  } catch(_) {}
  hideDashboard();
  showToast(t('You have been logged out.', 'تم تسجيل خروجك.'));
}

/* ── Dashboard Sidebar mobile ── */
function toggleDashboardSidebar() {
  const sidebar  = document.getElementById('dbSidebar');
  const overlay  = document.getElementById('dbSidebarOverlay');
  const isOpen   = sidebar.classList.contains('open');
  sidebar.classList.toggle('open', !isOpen);
  overlay.classList.toggle('open', !isOpen);
}
function closeDashboardSidebar() {
  document.getElementById('dbSidebar').classList.remove('open');
  document.getElementById('dbSidebarOverlay').classList.remove('open');
}

/* ── Check for stored session on load ── */
(function checkStoredSession() {
  try {
    if (dbIsAdminEmbedPreview()) {
      const qs = new URLSearchParams(location.search);
      const lng = qs.get('lang');
      if (lng === 'en' || lng === 'ar') setLanguage(lng);
      showDashboard({
        first_name: 'Admin',
        last_name: 'Preview',
        email: 'admin.preview@roshd.local',
      });
      return;
    }

    const token = localStorage.getItem('roshd_access_token');
    const user  = JSON.parse(localStorage.getItem('roshd_user') || 'null');
    if (token && user) {
      // ── Immediately restore the dashboard — no waiting for server ──
      showDashboard(user);

      // ── Background verify: only log out on explicit 401/403 ──
      fetch(API_BASE + '/api/auth/me', { headers: { 'Authorization': 'Bearer ' + token } })
        .then(r => {
          if (r.status === 401 || r.status === 403) {
            // Token definitively rejected — clear session and exit dashboard
            try {
              localStorage.removeItem('roshd_access_token');
              localStorage.removeItem('roshd_refresh_token');
              localStorage.removeItem('roshd_user');
            } catch(_) {}
            hideDashboard();
            showToast(t('Session expired. Please log in again.', 'انتهت الجلسة. يرجى تسجيل الدخول مجدداً.'));
            return null;
          }
          return r.json();
        })
        .then(d => {
          if (d && d.success && d.user) {
            // Refresh stored user data with latest from server
            try { localStorage.setItem('roshd_user', JSON.stringify(d.user)); } catch(_) {}
            const displayName = d.user.first_name
              ? (d.user.first_name + (d.user.last_name ? ' ' + d.user.last_name : ''))
              : (d.user.email || 'Client');
            const nameEl   = document.getElementById('dbUserName');
            const avatarEl = document.getElementById('dbAvatar');
            if (nameEl)   nameEl.textContent   = displayName;
            if (avatarEl) avatarEl.textContent  = displayName.charAt(0).toUpperCase();
          }
        })
        .catch(() => {
          // Server offline / unreachable — keep dashboard open, do nothing
        });
    } else {
      // No stored session — restore main-page scroll position
      try {
        const savedScroll = localStorage.getItem('roshd_scroll');
        if (savedScroll) {
          requestAnimationFrame(() => {
            window.scrollTo({ top: parseInt(savedScroll, 10), behavior: 'instant' });
          });
        }
      } catch(_) {}
    }
  } catch(_) {}
})();

/* ── Mini-tab interaction on hero preview ── */
document.querySelectorAll('.mini-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.mini-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

/* ── Main page scroll position persistence ── */
let _scrollSaveTimer;
window.addEventListener('scroll', () => {
  const db = document.getElementById('customerDashboard');
  if (db && !db.classList.contains('open')) {
    clearTimeout(_scrollSaveTimer);
    _scrollSaveTimer = setTimeout(() => {
      try { localStorage.setItem('roshd_scroll', Math.round(window.scrollY)); } catch(_) {}
    }, 150);
  }
}, { passive: true });

/* ── Live refresh when admin saves overrides (same origin, other tab / BroadcastChannel) ── */
(function setupRoshdOverrideSync() {
  function refreshDashboardIfOpen() {
    try {
      const dash = document.getElementById('customerDashboard');
      if (!dash || !dash.classList.contains('open')) return;
      if (typeof dbRender === 'function') dbRender();
    } catch (_) {}
  }
  try {
    const ch = new BroadcastChannel('roshd_dashboard_sync');
    ch.onmessage = (ev) => {
      const t = ev.data && ev.data.type;
      if (t === 'filter-bar-config-updated') {
        dbSyncFilterBarAfterExternalConfigChange();
        return;
      }
      if (t === 'dashboard-db-model-updated') {
        try {
          const raw = localStorage.getItem(ROSHD_DB_MODEL_KEY);
          if (raw) {
            const o = JSON.parse(raw);
            if (o && typeof o === 'object') window.__ROSHD_DB_MODEL__ = o;
          } else {
            try {
              delete window.__ROSHD_DB_MODEL__;
            } catch (_) {
              window.__ROSHD_DB_MODEL__ = null;
            }
          }
        } catch (_) {}
        refreshDashboardIfOpen();
        return;
      }
      if (
        t === 'cx-drivers-overrides-updated' ||
        t === 'executive-overrides-updated' ||
        t === 'units-performance-overrides-updated' ||
        t === 'demographics-overrides-updated' ||
        t === 'customer-patterns-overrides-updated' ||
        t === 'questionnaire-overrides-updated' ||
        t === 'pilot-analysis-overrides-updated' ||
        t === 'model-quality-overrides-updated'
      )
        refreshDashboardIfOpen();
    };
  } catch (_) {}
  window.addEventListener('storage', (e) => {
    if (e.key === ROSHD_DB_MODEL_KEY) {
      try {
        if (e.newValue == null) {
          try {
            delete window.__ROSHD_DB_MODEL__;
          } catch (_) {
            window.__ROSHD_DB_MODEL__ = null;
          }
        } else {
          const o = JSON.parse(e.newValue);
          if (o && typeof o === 'object') window.__ROSHD_DB_MODEL__ = o;
        }
      } catch (_) {}
    }
    if (
      e.key === 'roshd_cx_drivers_overrides' ||
      e.key === 'roshd_executive_overrides' ||
      e.key === 'roshd_units_performance_overrides' ||
      e.key === 'roshd_demographics_overrides' ||
      e.key === 'roshd_customer_patterns_overrides' ||
      e.key === 'roshd_questionnaire_overrides' ||
      e.key === 'roshd_pilot_analysis_overrides' ||
      e.key === 'roshd_model_quality_overrides' ||
      e.key === ROSHD_DB_MODEL_KEY
    )
      refreshDashboardIfOpen();
    if (e.key === FILTER_BAR_STORAGE_KEY) dbSyncFilterBarAfterExternalConfigChange();
    if (e.key === 'roshd_filters') {
      try {
        const dash = document.getElementById('customerDashboard');
        if (!dash || !dash.classList.contains('open')) return;
        dbRestoreRoshdFilters(JSON.parse(e.newValue || 'null'));
        dbRender();
      } catch (_) {}
    }
  });
})();

  /* ════════════ END verbatim dashboard logic ════════════ */

  // Handlers referenced by inline on* attributes — in the static markup AND in
  // dynamically generated HTML (filter selects, simulator sliders) — plus the
  // language re-render hooks used by LanguageContext.setLanguage.
  Object.assign(window, {
    showDashboard, hideDashboard, dbShowPanel, toggleDashboardSidebar,
    closeDashboardSidebar, handleDashboardLogout, dbSimReset,
    dbOnFilterChange, dbSimSliderInput,
    dbRender, dbUpdateFilterBarScrollFade,
  });
}
