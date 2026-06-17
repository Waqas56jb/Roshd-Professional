import { useEffect, useState } from 'react';
import { Save } from 'lucide-react';
import { loadKey, saveKey, KEYS } from '../lib/configStore.js';
import { defaultFilterBar } from '../lib/filterDefaults.js';
import { useToast } from '../context/ToastContext.jsx';
import { PageHeader, Spinner } from '../components/ui.jsx';
import FilterEditor from '../components/FilterEditor.jsx';

/** Services = the options of the `service` filter (no separate DB table). */
export default function Services() {
  const toast = useToast();
  const [cfg, setCfg] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      const stored = await loadKey(KEYS.filterBar, null);
      const base = defaultFilterBar();
      if (stored && Array.isArray(stored.filters)) {
        const byKey = Object.fromEntries(stored.filters.map((f) => [f.key, f]));
        base.filters = base.filters.map((f) => byKey[f.key] ? { ...f, ...byKey[f.key] } : f);
      }
      setCfg(base);
    })();
  }, []);

  if (!cfg) return <Spinner />;
  const idx = cfg.filters.findIndex((f) => f.key === 'service');
  const service = cfg.filters[idx];
  const setService = (f) => setCfg({ ...cfg, filters: cfg.filters.map((x, k) => (k === idx ? f : x)) });

  async function save() {
    setSaving(true);
    try { await saveKey(KEYS.filterBar, cfg); toast.success('Services saved — dashboard will refresh.'); }
    catch (e) { toast.error(e.message); } finally { setSaving(false); }
  }

  return (
    <div>
      <PageHeader
        title="Services"
        subtitle="Service lines (e.g. Mechanical, Bodyshop). These appear in the Service filter and are one of the 3 filters that scope manual Model Values."
        actions={<button className="btn-gold" onClick={save} disabled={saving}><Save size={16} /> {saving ? 'Saving…' : 'Save services'}</button>}
      />
      <div className="card p-5 max-w-3xl">
        <FilterEditor filter={service} onChange={setService} lockLabel />
      </div>
    </div>
  );
}
