import { Plus, Trash2 } from 'lucide-react';
import { Bilingual, Toggle } from './ui.jsx';

/** Edits a single filter: bilingual label + its options (value/EN/AR/active). */
export default function FilterEditor({ filter, onChange, lockLabel }) {
  const set = (patch) => onChange({ ...filter, ...patch });
  const opts = filter.options || [];
  const setOpt = (i, patch) => set({ options: opts.map((o, k) => (k === i ? { ...o, ...patch } : o)) });
  const addOpt = () => set({ options: [...opts, { value: '', labelEn: '', labelAr: '', active: true }] });
  const delOpt = (i) => set({ options: opts.filter((_, k) => k !== i) });

  return (
    <div className="space-y-5">
      {!lockLabel && (
        <Bilingual label="Filter label" en={filter.labelEn} ar={filter.labelAr}
          onEn={(v) => set({ labelEn: v })} onAr={(v) => set({ labelAr: v })} />
      )}

      {filter.key === 'region' || filter.key === 'branch' ? (
        <div className="rounded-xl border border-gold/20 bg-gold/5 px-4 py-3 text-sm text-ink-soft">
          {filter.key === 'region' ? 'Region' : 'Branch'} options are managed in{' '}
          <b className="text-gold">Masters → {filter.key === 'region' ? 'Regions' : 'Branches'}</b>{' '}
          and injected automatically into the customer dashboard. Only the label is editable here.
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="label mb-0">Options</span>
            <button className="btn-ghost !py-1.5 !px-3 text-xs" onClick={addOpt}><Plus size={14} /> Add option</button>
          </div>
          <div className="space-y-2">
            {opts.length === 0 && <p className="text-xs text-ink-faint">No options yet.</p>}
            {opts.map((o, i) => (
              <div key={i} className="grid grid-cols-12 items-center gap-2 rounded-xl border border-white/5 bg-navy-900/50 p-2">
                <input className="input col-span-3" placeholder="value" value={o.value || ''} onChange={(e) => setOpt(i, { value: e.target.value })} />
                <input className="input col-span-3" placeholder="EN label" value={o.labelEn || ''} onChange={(e) => setOpt(i, { labelEn: e.target.value })} />
                <input className="input col-span-3 text-right" dir="rtl" placeholder="عربي" value={o.labelAr || ''} onChange={(e) => setOpt(i, { labelAr: e.target.value })} />
                <div className="col-span-2 flex justify-center"><Toggle checked={o.active !== false} onChange={(v) => setOpt(i, { active: v })} /></div>
                <button className="col-span-1 grid place-items-center rounded-lg p-2 text-ink-faint hover:text-red-300 hover:bg-white/5" onClick={() => delOpt(i)}><Trash2 size={15} /></button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
