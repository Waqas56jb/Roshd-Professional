import { useEffect, useState } from 'react';
import { Save, Plus, Trash2, Workflow, ArrowRight } from 'lucide-react';
import { loadKey, saveKey, KEYS } from '../lib/configStore.js';
import { useToast } from '../context/ToastContext.jsx';
import { PageHeader, Spinner, Field, Bilingual } from '../components/ui.jsx';

const BLOCK = () => ({ nameEn: '', nameAr: '', descEn: '', descAr: '', qCount: 4 });

export default function Measurement() {
  const toast = useToast();
  const [o, setO] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      const cur = await loadKey(KEYS.modelQuality, {});
      const blocks = Array.isArray(cur.flowBlocks) && cur.flowBlocks.length ? cur.flowBlocks : [
        { nameEn: 'Quality', nameAr: 'الجودة', descEn: 'Repair correctness, expectation fit', descAr: '', qCount: 6 },
        { nameEn: 'Communication', nameAr: 'التواصل', descEn: 'Updates, clarity, delays', descAr: '', qCount: 7 },
        { nameEn: 'Price Fairness', nameAr: 'عدالة السعر', descEn: 'Fairness, invoice vs estimate', descAr: '', qCount: 6 },
        { nameEn: 'Speed', nameAr: 'السرعة', descEn: 'Completion time, waits', descAr: '', qCount: 6 },
      ];
      setO({ ...cur, flowBlocks: blocks });
    })();
  }, []);

  if (!o) return <Spinner />;
  const setBlock = (i, patch) => setO({ ...o, flowBlocks: o.flowBlocks.map((b, k) => (k === i ? { ...b, ...patch } : b)) });
  const add = () => o.flowBlocks.length < 16 && setO({ ...o, flowBlocks: [...o.flowBlocks, BLOCK()] });
  const del = (i) => setO({ ...o, flowBlocks: o.flowBlocks.filter((_, k) => k !== i) });

  async function save() {
    setSaving(true);
    try { await saveKey(KEYS.modelQuality, o); toast.success('Measurement model saved — diagram redraws automatically.'); }
    catch (e) { toast.error(e.message); } finally { setSaving(false); }
  }

  return (
    <div>
      <PageHeader title="Structural Measurement Model"
        subtitle="Each block becomes a box that auto-connects with an arrow to the Customer Experience Score. Add a block → a new box + arrow appear on the dashboard automatically (up to 16)."
        actions={<button className="btn-gold" onClick={save} disabled={saving}><Save size={16} /> {saving ? 'Saving…' : 'Save model'}</button>} />

      {/* live preview of the auto layout */}
      <div className="card p-5 mb-5">
        <div className="text-xs font-semibold text-ink-faint mb-3">Preview (the dashboard renders this as boxes + arrows)</div>
        <div className="flex items-center gap-6 flex-wrap">
          <div className="flex flex-col gap-2">
            {o.flowBlocks.map((b, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="rounded-lg border border-gold/30 bg-gold/5 px-3 py-1.5 text-xs">{b.nameEn || `Block ${i + 1}`} <span className="text-ink-faint">× {b.qCount}</span></div>
                <ArrowRight size={14} className="text-gold/60" />
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-gold/40 bg-gold/10 px-5 py-4 text-sm font-bold text-gold">Customer Experience Score</div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold flex items-center gap-2"><Workflow size={16} className="text-gold" /> Blocks ({o.flowBlocks.length}/16)</h3>
        <button className="btn-ghost !py-1.5 !px-3 text-xs" onClick={add} disabled={o.flowBlocks.length >= 16}><Plus size={14} /> Add block</button>
      </div>
      <div className="space-y-3">
        {o.flowBlocks.map((b, i) => (
          <div key={i} className="card p-4">
            <div className="flex items-start gap-3">
              <div className="flex-1 space-y-2">
                <Bilingual label={`Block ${i + 1} name`} en={b.nameEn} ar={b.nameAr} onEn={(v) => setBlock(i, { nameEn: v })} onAr={(v) => setBlock(i, { nameAr: v })} />
                <Bilingual label="Description" en={b.descEn} ar={b.descAr} onEn={(v) => setBlock(i, { descEn: v })} onAr={(v) => setBlock(i, { descAr: v })} />
              </div>
              <div className="w-28 shrink-0">
                <Field label="Questions"><input className="input" type="number" min="1" value={b.qCount} onChange={(e) => setBlock(i, { qCount: Math.max(1, Number(e.target.value)) })} /></Field>
                <button className="btn-danger w-full mt-2 !py-1.5 text-xs" onClick={() => del(i)}><Trash2 size={14} /> Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
