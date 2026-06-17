import { useEffect, useState } from 'react';
import { Save } from 'lucide-react';
import { loadKey, saveKey, KEYS } from '../lib/configStore.js';
import { useToast } from '../context/ToastContext.jsx';
import { PageHeader, Spinner, Field } from '../components/ui.jsx';

// Metric values are written positionally to the panel's `.db-model-metric-val`
// nodes (index 0..n). Labels here describe the expected order.
const METRICS = ['Explanatory Power (R²)', "Cronbach's Alpha", 'Composite Reliability (CR)', 'AVE', 'HTMT'];

export default function ModelQuality() {
  const toast = useToast();
  const [o, setO] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      const cur = await loadKey(KEYS.modelQuality, {});
      setO({ ...cur, values: cur.values || {} });
    })();
  }, []);

  if (!o) return <Spinner />;
  const setVal = (i, v) => setO({ ...o, values: { ...o.values, [String(i)]: v } });

  async function save() {
    setSaving(true);
    try { await saveKey(KEYS.modelQuality, o); toast.success('Model quality metrics saved.'); }
    catch (e) { toast.error(e.message); } finally { setSaving(false); }
  }

  return (
    <div>
      <PageHeader title="Model Quality"
        subtitle="Reliability & validity metrics shown on the Model Quality page. Enter in the order they appear on the dashboard."
        actions={<button className="btn-gold" onClick={save} disabled={saving}><Save size={16} /> {saving ? 'Saving…' : 'Save'}</button>} />
      <div className="card p-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
        {METRICS.map((m, i) => (
          <Field key={i} label={m}>
            <input className="input" value={o.values[String(i)] ?? ''} onChange={(e) => setVal(i, e.target.value)} placeholder="e.g. 0.82 or 72%" />
          </Field>
        ))}
      </div>
      <p className="mt-3 text-[11px] text-ink-faint">Tip: the Structural Measurement Model blocks (boxes + arrows) are managed on the <b className="text-gold">Measurement Model</b> page.</p>
    </div>
  );
}
