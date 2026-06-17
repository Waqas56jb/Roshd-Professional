import { useEffect, useState } from 'react';
import { Save } from 'lucide-react';
import { loadKey, saveKey, KEYS } from '../lib/configStore.js';
import { useToast } from '../context/ToastContext.jsx';
import { PageHeader, Spinner, Field, Bilingual } from '../components/ui.jsx';

const STEP = () => ({ titleEn: '', titleAr: '', bodyEn: '', bodyAr: '' });

export default function ExecutiveText() {
  const toast = useToast();
  const [o, setO] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      const cur = await loadKey(KEYS.executive, {});
      const flow = Array.isArray(cur.flowSteps) && cur.flowSteps.length === 5 ? cur.flowSteps : Array.from({ length: 5 }, STEP);
      setO({ ...cur, flowSteps: flow, coreRuleEn: cur.coreRuleEn || '', coreRuleAr: cur.coreRuleAr || '', kpiTrend1: cur.kpiTrend1 || '' });
    })();
  }, []);

  if (!o) return <Spinner />;
  const setStep = (i, patch) => setO({ ...o, flowSteps: o.flowSteps.map((s, k) => (k === i ? { ...s, ...patch } : s)) });

  async function save() {
    setSaving(true);
    try { await saveKey(KEYS.executive, o); toast.success('Executive text saved.'); }
    catch (e) { toast.error(e.message); } finally { setSaving(false); }
  }

  return (
    <div>
      <PageHeader title="Executive Text"
        subtitle="Global executive content (no filter): the 5-step Decision Logic Flow, the Core Rule, and the KPI trend label."
        actions={<button className="btn-gold" onClick={save} disabled={saving}><Save size={16} /> {saving ? 'Saving…' : 'Save'}</button>} />

      <div className="card p-5 mb-5">
        <h3 className="text-sm font-bold mb-4">Decision Logic Flow — 5 steps</h3>
        <div className="space-y-3">
          {o.flowSteps.map((s, i) => (
            <div key={i} className="rounded-xl border border-white/5 bg-navy-900/50 p-4">
              <div className="text-xs font-semibold text-gold mb-2">Step {i + 1}</div>
              <Bilingual label="Title" en={s.titleEn} ar={s.titleAr} onEn={(v) => setStep(i, { titleEn: v })} onAr={(v) => setStep(i, { titleAr: v })} />
              <div className="mt-2"><Bilingual label="Description" en={s.bodyEn} ar={s.bodyAr} onEn={(v) => setStep(i, { bodyEn: v })} onAr={(v) => setStep(i, { bodyAr: v })} textarea /></div>
            </div>
          ))}
        </div>
      </div>

      <div className="card p-5 grid md:grid-cols-2 gap-4">
        <Bilingual label="Core Rule" en={o.coreRuleEn} ar={o.coreRuleAr} onEn={(v) => setO({ ...o, coreRuleEn: v })} onAr={(v) => setO({ ...o, coreRuleAr: v })} textarea />
        <Field label="KPI trend label" hint="e.g. ↑ +0.3"><input className="input" value={o.kpiTrend1} onChange={(e) => setO({ ...o, kpiTrend1: e.target.value })} /></Field>
      </div>
    </div>
  );
}
