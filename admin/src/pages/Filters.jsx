import { useEffect, useState } from 'react';
import { Save } from 'lucide-react';
import { loadKey, saveKey, KEYS } from '../lib/configStore.js';
import { defaultFilterBar, FILTER_META } from '../lib/filterDefaults.js';
import { useToast } from '../context/ToastContext.jsx';
import { PageHeader, Spinner } from '../components/ui.jsx';
import FilterEditor from '../components/FilterEditor.jsx';

export default function Filters() {
  const toast = useToast();
  const [cfg, setCfg] = useState(null);
  const [active, setActive] = useState(0);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      const stored = await loadKey(KEYS.filterBar, null);
      const base = defaultFilterBar();
      // merge stored over default by key so new filters always present
      if (stored && Array.isArray(stored.filters)) {
        const byKey = Object.fromEntries(stored.filters.map((f) => [f.key, f]));
        base.filters = base.filters.map((f) => byKey[f.key] ? { ...f, ...byKey[f.key] } : f);
      }
      setCfg(base);
    })();
  }, []);

  if (!cfg) return <Spinner />;
  const filters = cfg.filters;
  const setFilter = (i, f) => setCfg({ ...cfg, filters: filters.map((x, k) => (k === i ? f : x)) });

  async function save() {
    setSaving(true);
    try { await saveKey(KEYS.filterBar, cfg); toast.success('Filters saved — dashboard will refresh.'); }
    catch (e) { toast.error(e.message); } finally { setSaving(false); }
  }

  return (
    <div>
      <PageHeader
        title="Filter Manager"
        subtitle="Define the 8 toolbar filters customers use. Auto-calculated charts respond to all filters; manual model values respond to Branch/Region/Service."
        actions={<button className="btn-gold" onClick={save} disabled={saving}><Save size={16} /> {saving ? 'Saving…' : 'Save filters'}</button>}
      />
      <div className="grid lg:grid-cols-[240px_1fr] gap-4">
        <div className="card p-2 h-fit">
          {filters.map((f, i) => (
            <button key={f.key} onClick={() => setActive(i)}
              className={`w-full text-left rounded-xl px-3 py-2.5 text-sm transition ${active === i ? 'bg-gold/12 text-gold' : 'text-ink-soft hover:bg-white/5'}`}>
              <div className="font-medium">{f.labelEn}</div>
              <div className="text-[10px] text-ink-faint truncate">{FILTER_META[f.key] || f.key}</div>
            </button>
          ))}
        </div>
        <div className="card p-5">
          <FilterEditor filter={filters[active]} onChange={(f) => setFilter(active, f)} />
        </div>
      </div>
    </div>
  );
}
