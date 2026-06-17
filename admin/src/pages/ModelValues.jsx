import { useEffect, useMemo, useState } from 'react';
import { Save, Plus, Trash2, Wand2 } from 'lucide-react';
import { api } from '../lib/api.js';
import { loadConfig, saveConfig, KEYS } from '../lib/configStore.js';
import { buildFilterKey, describeKey } from '../lib/filterKey.js';
import { defaultFilterBar } from '../lib/filterDefaults.js';
import { useToast } from '../context/ToastContext.jsx';
import { PageHeader, Spinner, Field, Bilingual } from '../components/ui.jsx';

const DECISIONS = ['Invest', 'Selective', 'Optimize', 'Monitor', 'Maintain', 'Do not overinvest'];
const COLORS = [
  { v: 'navy', label: 'Blue (invest)' }, { v: 'warning', label: 'Amber (optimize)' },
  { v: 'info', label: 'Cyan (monitor)' }, { v: '', label: 'Neutral (maintain)' }, { v: 'danger', label: 'Red (avoid)' },
];
const STD_DRIVERS = [
  { name: 'Quality', nameAr: 'الجودة', avg: 3.4, impact: 0.34, decision: 'Invest', decisionAr: 'استثمر', cls: 'navy' },
  { name: 'Communication', nameAr: 'التواصل', avg: 3.0, impact: 0.23, decision: 'Selective', decisionAr: 'انتقائي', cls: 'warning' },
  { name: 'Price Fairness', nameAr: 'عدالة السعر', avg: 2.9, impact: 0.12, decision: 'Monitor', decisionAr: 'راقب', cls: 'info' },
  { name: 'Advisor Behavior', nameAr: 'سلوك المستشار', avg: 3.8, impact: 0.10, decision: 'Maintain', decisionAr: 'حافظ', cls: '' },
  { name: 'Speed', nameAr: 'السرعة', avg: 1.4, impact: 0.01, decision: 'Do not overinvest', decisionAr: 'لا تُبالغ في الاستثمار', cls: 'danger' },
];

function Bullets({ label, en, ar, onEn, onAr }) {
  const toText = (a) => (Array.isArray(a) ? a.join('\n') : '');
  const toArr = (s) => s.split('\n').map((x) => x.trim()).filter(Boolean);
  return (
    <Field label={label} hint="One bullet per line">
      <div className="grid sm:grid-cols-2 gap-2">
        <textarea className="input" rows={4} value={toText(en)} onChange={(e) => onEn(toArr(e.target.value))} placeholder="English bullets…" />
        <textarea className="input text-right" dir="rtl" rows={4} value={toText(ar)} onChange={(e) => onAr(toArr(e.target.value))} placeholder="نقاط بالعربية…" />
      </div>
    </Field>
  );
}

export default function ModelValues() {
  const toast = useToast();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [regions, setRegions] = useState([]);
  const [fb, setFb] = useState(defaultFilterBar());
  const [cfg, setCfg] = useState({ executive: {}, cxDrivers: {} });

  // combo selection
  const [geoType, setGeoType] = useState('all'); // all | branch | region
  const [geoValue, setGeoValue] = useState('');
  const [service, setService] = useState('');

  // current editable values
  const [form, setForm] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const [reg, all] = await Promise.all([api.get('/api/regions'), loadConfig()]);
        setRegions(reg?.regions || []);
        const base = defaultFilterBar();
        const stored = all[KEYS.filterBar];
        if (stored && Array.isArray(stored.filters)) {
          const byKey = Object.fromEntries(stored.filters.map((f) => [f.key, f]));
          base.filters = base.filters.map((f) => (byKey[f.key] ? { ...f, ...byKey[f.key] } : f));
        }
        setFb(base);
        setCfg({ executive: all[KEYS.executive] || {}, cxDrivers: all[KEYS.cxDrivers] || {} });
      } catch (e) { toast.error(e.message); }
      setLoading(false);
    })();
  }, [toast]);

  const branchOpts = useMemo(() => (fb.filters.find((f) => f.key === 'branch')?.options || []), [fb]);
  const serviceOpts = useMemo(() => (fb.filters.find((f) => f.key === 'service')?.options || []), [fb]);

  const key = useMemo(() => buildFilterKey({
    region: geoType === 'region' ? geoValue : '',
    branch: geoType === 'branch' ? geoValue : '',
    service,
  }), [geoType, geoValue, service]);

  // when combo changes, load that key's values
  useEffect(() => {
    if (loading) return;
    const ex = cfg.executive?.byFilter?.[key] || {};
    const dr = cfg.cxDrivers?.byFilter?.[key]?.driversRows || [];
    setForm({
      cxScore: ex.cxScore ?? '', modelPower: ex.modelPower ?? '',
      topDriverEn: ex.topDriverEn ?? '', topDriverAr: ex.topDriverAr ?? '',
      wasteRiskEn: ex.wasteRiskEn ?? '', wasteRiskAr: ex.wasteRiskAr ?? '',
      investEn: ex.investEn ?? [], investAr: ex.investAr ?? [],
      optimizeEn: ex.optimizeEn ?? [], optimizeAr: ex.optimizeAr ?? [],
      avoidEn: ex.avoidEn ?? [], avoidAr: ex.avoidAr ?? [],
      drivers: dr.map((d) => ({ ...d })),
    });
  }, [key, loading]); // eslint-disable-line

  if (loading || !form) return <Spinner label="Loading configuration…" />;

  const set = (patch) => setForm({ ...form, ...patch });
  const setDriver = (i, patch) => set({ drivers: form.drivers.map((d, k) => (k === i ? { ...d, ...patch } : d)) });
  const addDriver = () => form.drivers.length < 8 && set({ drivers: [...form.drivers, { name: '', nameAr: '', avg: 3, impact: 0.1, decision: 'Monitor', decisionAr: 'راقب', cls: 'info' }] });
  const delDriver = (i) => set({ drivers: form.drivers.filter((_, k) => k !== i) });

  async function save() {
    setSaving(true);
    try {
      const ex = { ...(cfg.executive || {}) };
      ex.byFilter = { ...(ex.byFilter || {}) };
      const exEntry = {};
      if (form.cxScore !== '') exEntry.cxScore = Number(form.cxScore);
      if (form.modelPower !== '') exEntry.modelPower = Number(form.modelPower);
      ['topDriverEn', 'topDriverAr', 'wasteRiskEn', 'wasteRiskAr'].forEach((k) => { if (form[k]) exEntry[k] = form[k]; });
      ['investEn', 'investAr', 'optimizeEn', 'optimizeAr', 'avoidEn', 'avoidAr'].forEach((k) => { if (form[k]?.length) exEntry[k] = form[k]; });
      ex.byFilter[key] = exEntry;

      const cx = { ...(cfg.cxDrivers || {}) };
      cx.byFilter = { ...(cx.byFilter || {}) };
      cx.byFilter[key] = { ...(cx.byFilter[key] || {}), driversRows: form.drivers.filter((d) => d.name || d.nameAr) };

      await saveConfig({ [KEYS.executive]: ex, [KEYS.cxDrivers]: cx });
      setCfg({ executive: ex, cxDrivers: cx });
      toast.success('Model values saved for this combination — dashboard updated.');
    } catch (e) { toast.error(e.message); } finally { setSaving(false); }
  }

  return (
    <div>
      <PageHeader
        title="Model Values"
        subtitle="Enter the statistical results per combination. These are scoped by Branch/Region × Service (the 3 manual-input filters)."
        actions={<button className="btn-gold" onClick={save} disabled={saving}><Save size={16} /> {saving ? 'Saving…' : 'Save combination'}</button>}
      />

      {/* Combination picker */}
      <div className="card p-5 mb-5">
        <div className="grid md:grid-cols-3 gap-4">
          <Field label="Scope by">
            <div className="flex rounded-xl bg-navy-900/60 p-1">
              {['all', 'branch', 'region'].map((t) => (
                <button key={t} onClick={() => { setGeoType(t); setGeoValue(''); }}
                  className={`flex-1 rounded-lg px-3 py-2 text-xs font-semibold capitalize transition ${geoType === t ? 'bg-gold text-navy-950' : 'text-ink-soft hover:text-ink'}`}>{t}</button>
              ))}
            </div>
          </Field>
          <Field label={geoType === 'region' ? 'Region' : 'Branch'}>
            <select className="input" disabled={geoType === 'all'} value={geoValue} onChange={(e) => setGeoValue(e.target.value)}>
              <option value="">{geoType === 'all' ? 'All (no geo filter)' : 'Select…'}</option>
              {geoType === 'branch' && branchOpts.map((o) => <option key={o.value} value={o.value}>{o.labelEn || o.value}</option>)}
              {geoType === 'region' && regions.map((r) => <option key={r.slug} value={r.slug}>{r.name_en}</option>)}
            </select>
          </Field>
          <Field label="Service">
            <select className="input" value={service} onChange={(e) => setService(e.target.value)}>
              <option value="">All Services</option>
              {serviceOpts.map((o) => <option key={o.value} value={o.value}>{o.labelEn || o.value}</option>)}
            </select>
          </Field>
        </div>
        <div className="mt-3 text-xs text-ink-faint">Editing: <span className="text-gold font-semibold">{describeKey({ region: geoType === 'region' ? geoValue : '', branch: geoType === 'branch' ? geoValue : '', service })}</span> · key <code className="text-ink-soft">{key}</code></div>
      </div>

      {/* Headline KPIs */}
      <div className="card p-5 mb-5">
        <h3 className="text-sm font-bold mb-4">Executive headline (KPIs)</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Field label="CX Score (1–5)" hint="Shown as score + % e.g. 3.8 → 76%"><input className="input" type="number" step="0.1" min="1" max="5" value={form.cxScore} onChange={(e) => set({ cxScore: e.target.value })} placeholder="leave blank = from survey/model" /></Field>
          <Field label="Model Explanatory Power (%)"><input className="input" type="number" min="0" max="100" value={form.modelPower} onChange={(e) => set({ modelPower: e.target.value })} placeholder="e.g. 72" /></Field>
        </div>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <Bilingual label="Top Driver" en={form.topDriverEn} ar={form.topDriverAr} onEn={(v) => set({ topDriverEn: v })} onAr={(v) => set({ topDriverAr: v })} placeholder="Quality" />
          <Bilingual label="Waste Risk" en={form.wasteRiskEn} ar={form.wasteRiskAr} onEn={(v) => set({ wasteRiskEn: v })} onAr={(v) => set({ wasteRiskAr: v })} placeholder="Speed" />
        </div>
      </div>

      {/* Driver ranking */}
      <div className="card p-5 mb-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold">Driver Ranking <span className="text-ink-faint font-normal">({form.drivers.length}/8)</span></h3>
          <div className="flex gap-2">
            <button className="btn-ghost !py-1.5 !px-3 text-xs" onClick={() => set({ drivers: STD_DRIVERS.map((d) => ({ ...d })) })}><Wand2 size={14} /> Load 5 standard</button>
            <button className="btn-ghost !py-1.5 !px-3 text-xs" onClick={addDriver} disabled={form.drivers.length >= 8}><Plus size={14} /> Add driver</button>
          </div>
        </div>
        {form.drivers.length === 0 && <p className="text-xs text-ink-faint">No drivers — add up to 8. Sorted by Effect Share automatically on the dashboard.</p>}
        <div className="space-y-2">
          {form.drivers.map((d, i) => (
            <div key={i} className="grid grid-cols-12 items-center gap-2 rounded-xl border border-white/5 bg-navy-900/50 p-2">
              <input className="input col-span-2" placeholder="Driver EN" value={d.name || ''} onChange={(e) => setDriver(i, { name: e.target.value })} />
              <input className="input col-span-2 text-right" dir="rtl" placeholder="عربي" value={d.nameAr || ''} onChange={(e) => setDriver(i, { nameAr: e.target.value })} />
              <input className="input col-span-2" type="number" step="0.1" placeholder="Avg /5" value={d.avg ?? ''} onChange={(e) => setDriver(i, { avg: Number(e.target.value) })} title="Average score (1–5)" />
              <input className="input col-span-2" type="number" step="0.01" placeholder="Impact 0–1" value={d.impact ?? ''} onChange={(e) => setDriver(i, { impact: Number(e.target.value) })} title="Effect share (0–1 → %)" />
              <select className="input col-span-2" value={d.decision || ''} onChange={(e) => setDriver(i, { decision: e.target.value })}>
                <option value="">decision…</option>{DECISIONS.map((x) => <option key={x} value={x}>{x}</option>)}
              </select>
              <select className="input col-span-1 !px-1.5" value={d.cls || ''} onChange={(e) => setDriver(i, { cls: e.target.value })} title="Badge color">
                {COLORS.map((c) => <option key={c.v} value={c.v}>{c.label.split(' ')[0]}</option>)}
              </select>
              <button className="col-span-1 grid place-items-center rounded-lg p-2 text-ink-faint hover:text-red-300 hover:bg-white/5" onClick={() => delDriver(i)}><Trash2 size={15} /></button>
            </div>
          ))}
        </div>
        <p className="mt-2 text-[11px] text-ink-faint">Impact = effect share (0–1 → shown as %). Drives the ranking table, impact map, top-driver KPI & simulation.</p>
      </div>

      {/* Recommendations */}
      <div className="card p-5 space-y-4">
        <h3 className="text-sm font-bold">Executive recommendations</h3>
        <Bullets label="Invest Now" en={form.investEn} ar={form.investAr} onEn={(v) => set({ investEn: v })} onAr={(v) => set({ investAr: v })} />
        <Bullets label="Optimize Selectively" en={form.optimizeEn} ar={form.optimizeAr} onEn={(v) => set({ optimizeEn: v })} onAr={(v) => set({ optimizeAr: v })} />
        <Bullets label="Avoid / Defer" en={form.avoidEn} ar={form.avoidAr} onEn={(v) => set({ avoidEn: v })} onAr={(v) => set({ avoidAr: v })} />
      </div>
    </div>
  );
}
