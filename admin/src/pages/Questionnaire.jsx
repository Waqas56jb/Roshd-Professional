import { useEffect, useState } from 'react';
import { Save, Plus, Trash2, ClipboardList } from 'lucide-react';
import { loadKey, saveKey, KEYS } from '../lib/configStore.js';
import { useToast } from '../context/ToastContext.jsx';
import { PageHeader, Spinner, Bilingual } from '../components/ui.jsx';

const SECTION = () => ({ topicEn: '', topicAr: '', questions: [] });
const Q = () => ({ code: '', en: '', ar: '' });

export default function Questionnaire() {
  const toast = useToast();
  const [sections, setSections] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      const cur = await loadKey(KEYS.questionnaire, {});
      setSections(Array.isArray(cur.sections) ? cur.sections : []);
    })();
  }, []);

  if (!sections) return <Spinner />;
  const setSec = (i, patch) => setSections(sections.map((s, k) => (k === i ? { ...s, ...patch } : s)));
  const setQ = (si, qi, patch) => setSec(si, { questions: sections[si].questions.map((q, k) => (k === qi ? { ...q, ...patch } : q)) });

  async function save() {
    setSaving(true);
    try { await saveKey(KEYS.questionnaire, { sections }); toast.success('Questionnaire saved — feeds the measurement model too.'); }
    catch (e) { toast.error(e.message); } finally { setSaving(false); }
  }

  return (
    <div>
      <PageHeader title="Questionnaire Items"
        subtitle="Define the survey constructs and their questions. Construct names & counts also drive the Structural Measurement Model diagram."
        actions={<button className="btn-gold" onClick={save} disabled={saving}><Save size={16} /> {saving ? 'Saving…' : 'Save'}</button>} />

      <div className="space-y-4">
        {sections.length === 0 && <p className="text-sm text-ink-faint">No constructs yet — add the first one below.</p>}
        {sections.map((s, si) => (
          <div key={si} className="card p-5">
            <div className="flex items-start gap-3">
              <div className="flex-1"><Bilingual label={`Construct ${si + 1}`} en={s.topicEn} ar={s.topicAr} onEn={(v) => setSec(si, { topicEn: v })} onAr={(v) => setSec(si, { topicAr: v })} /></div>
              <button className="btn-danger !py-1.5 !px-3 text-xs mt-6" onClick={() => setSections(sections.filter((_, k) => k !== si))}><Trash2 size={14} /></button>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between"><span className="label mb-0">Questions ({s.questions.length})</span>
                <button className="btn-ghost !py-1 !px-2.5 text-xs" onClick={() => setSec(si, { questions: [...s.questions, Q()] })}><Plus size={13} /> Add question</button></div>
              {s.questions.map((q, qi) => (
                <div key={qi} className="grid grid-cols-12 gap-2 items-center">
                  <input className="input col-span-2" placeholder="code" value={q.code} onChange={(e) => setQ(si, qi, { code: e.target.value })} />
                  <input className="input col-span-5" placeholder="English question" value={q.en} onChange={(e) => setQ(si, qi, { en: e.target.value })} />
                  <input className="input col-span-4 text-right" dir="rtl" placeholder="السؤال" value={q.ar} onChange={(e) => setQ(si, qi, { ar: e.target.value })} />
                  <button className="col-span-1 grid place-items-center rounded-lg p-2 text-ink-faint hover:text-red-300 hover:bg-white/5" onClick={() => setSec(si, { questions: s.questions.filter((_, k) => k !== qi) })}><Trash2 size={14} /></button>
                </div>
              ))}
            </div>
          </div>
        ))}
        <button className="btn-ghost" onClick={() => setSections([...sections, SECTION()])}><Plus size={16} /> Add construct</button>
      </div>
    </div>
  );
}
