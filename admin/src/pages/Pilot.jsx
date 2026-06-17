import { useEffect, useState } from 'react';
import { Save } from 'lucide-react';
import { loadKey, saveKey, KEYS } from '../lib/configStore.js';
import { useToast } from '../context/ToastContext.jsx';
import { PageHeader, Spinner, Field } from '../components/ui.jsx';

// Pilot values are written positionally to the panel's pilot value nodes.
const FIELDS = ['Pilot sample size', 'Items before', 'Items removed', 'Items retained', "Cronbach's Alpha (pilot)"];

export default function Pilot() {
  const toast = useToast();
  const [o, setO] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      const cur = await loadKey(KEYS.pilot, {});
      setO({ ...cur, values: cur.values || {} });
    })();
  }, []);

  if (!o) return <Spinner />;
  const setVal = (i, v) => setO({ ...o, values: { ...o.values, [String(i)]: v } });

  async function save() {
    setSaving(true);
    try { await saveKey(KEYS.pilot, o); toast.success('Pilot analysis saved.'); }
    catch (e) { toast.error(e.message); } finally { setSaving(false); }
  }

  return (
    <div>
      <PageHeader title="Pilot Test Analysis"
        subtitle="Pilot test figures (sample size, items before/removed/retained, reliability). Entered in dashboard display order."
        actions={<button className="btn-gold" onClick={save} disabled={saving}><Save size={16} /> {saving ? 'Saving…' : 'Save'}</button>} />
      <div className="card p-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
        {FIELDS.map((m, i) => (
          <Field key={i} label={m}>
            <input className="input" value={o.values[String(i)] ?? ''} onChange={(e) => setVal(i, e.target.value)} />
          </Field>
        ))}
      </div>
    </div>
  );
}
