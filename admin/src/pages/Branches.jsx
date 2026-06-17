import { useEffect, useState, useCallback } from 'react';
import { Plus, Pencil, Trash2, GitBranch } from 'lucide-react';
import { api, notifyDashboard } from '../lib/api.js';
import { useToast } from '../context/ToastContext.jsx';
import { PageHeader, Spinner, EmptyState, Modal, Bilingual, Field, Toggle, Confirm } from '../components/ui.jsx';

const blank = { slug: '', name_en: '', name_ar: '', city: '', sort_order: 0, is_active: true, region_id: '', weight: 1 };

export default function Branches() {
  const toast = useToast();
  const [rows, setRows] = useState(null);
  const [regions, setRegions] = useState([]);
  const [edit, setEdit] = useState(null);
  const [saving, setSaving] = useState(false);
  const [del, setDel] = useState(null);

  const load = useCallback(async () => {
    try {
      const r = await api.get('/api/regions');
      setRegions(r?.regions || []);
      setRows((r?.branches || []).slice().sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0)));
    } catch (e) { toast.error(e.message); setRows([]); }
  }, [toast]);
  useEffect(() => { load(); }, [load]);

  const regionName = (id) => regions.find((x) => x.id === id)?.name_en || '—';

  async function save() {
    if (!edit.slug || !edit.name_en) { toast.error('Slug and English name are required.'); return; }
    setSaving(true);
    try {
      const body = { ...edit, region_id: edit.region_id || null };
      if (edit.id) await api.put(`/api/admin/branches/${edit.id}`, body);
      else await api.post('/api/admin/branches', body);
      notifyDashboard('branches-updated');
      toast.success(`Branch ${edit.id ? 'updated' : 'created'}.`);
      setEdit(null); load();
    } catch (e) { toast.error(e.message); } finally { setSaving(false); }
  }
  async function remove() {
    try { await api.del(`/api/admin/branches/${del.id}`); notifyDashboard('branches-updated'); toast.success('Branch deleted.'); setDel(null); load(); }
    catch (e) { toast.error(e.message); }
  }

  return (
    <div>
      <PageHeader
        title="Branches"
        subtitle="Branches power the Branch filter and group under regions. Survey records and per-branch model values are keyed to these."
        actions={<button className="btn-gold" onClick={() => setEdit({ ...blank })}><Plus size={16} /> Add branch</button>}
      />
      {rows === null ? <Spinner /> : rows.length === 0 ? (
        <EmptyState title="No branches yet" hint="Add branches and link each to a region."
          action={<button className="btn-gold" onClick={() => setEdit({ ...blank })}><Plus size={16} /> Add branch</button>} />
      ) : (
        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-white/5">
              <th className="table-head px-5 py-3">Name (EN)</th>
              <th className="table-head px-5 py-3">الاسم (AR)</th>
              <th className="table-head px-5 py-3">Region</th>
              <th className="table-head px-5 py-3">Slug</th>
              <th className="table-head px-5 py-3">Status</th>
              <th className="table-head px-5 py-3 text-right">Actions</th>
            </tr></thead>
            <tbody>
              {rows.map((b) => (
                <tr key={b.id} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]">
                  <td className="px-5 py-3 font-medium flex items-center gap-2"><GitBranch size={15} className="text-gold" /> {b.name_en || b.name}</td>
                  <td className="px-5 py-3 text-right text-ink-soft" dir="rtl">{b.name_ar || '—'}</td>
                  <td className="px-5 py-3 text-ink-soft">{regionName(b.region_id)}</td>
                  <td className="px-5 py-3 text-ink-faint">{b.slug}</td>
                  <td className="px-5 py-3"><span className={`chip ${b.is_active !== false ? 'bg-emerald-500/15 text-emerald-300' : 'bg-white/10 text-ink-faint'}`}>{b.is_active !== false ? 'Active' : 'Inactive'}</span></td>
                  <td className="px-5 py-3">
                    <div className="flex justify-end gap-1">
                      <button className="rounded-lg p-2 text-ink-faint hover:text-gold hover:bg-white/5" onClick={() => setEdit({ ...blank, ...b })}><Pencil size={15} /></button>
                      <button className="rounded-lg p-2 text-ink-faint hover:text-red-300 hover:bg-white/5" onClick={() => setDel(b)}><Trash2 size={15} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Modal open={!!edit} onClose={() => setEdit(null)} title={edit?.id ? 'Edit branch' : 'Add branch'}
        footer={<>
          <button className="btn-ghost" onClick={() => setEdit(null)}>Cancel</button>
          <button className="btn-gold" onClick={save} disabled={saving}>{saving ? 'Saving…' : 'Save'}</button>
        </>}>
        {edit && (
          <div className="space-y-4">
            <Bilingual label="Branch name" en={edit.name_en} ar={edit.name_ar} onEn={(v) => setEdit({ ...edit, name_en: v })} onAr={(v) => setEdit({ ...edit, name_ar: v })} placeholder="Riyadh" />
            <div className="grid grid-cols-2 gap-3">
              <Field label="Slug" hint="lowercase id, e.g. riyadh"><input className="input" value={edit.slug} onChange={(e) => setEdit({ ...edit, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })} /></Field>
              <Field label="Region">
                <select className="input" value={edit.region_id || ''} onChange={(e) => setEdit({ ...edit, region_id: e.target.value })}>
                  <option value="">— None —</option>
                  {regions.map((r) => <option key={r.id} value={r.id}>{r.name_en}</option>)}
                </select>
              </Field>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Sort order"><input className="input" type="number" value={edit.sort_order} onChange={(e) => setEdit({ ...edit, sort_order: Number(e.target.value) })} /></Field>
              <Field label="Weight" hint="relative size (optional)"><input className="input" type="number" step="0.1" value={edit.weight ?? 1} onChange={(e) => setEdit({ ...edit, weight: Number(e.target.value) })} /></Field>
            </div>
            <Toggle checked={edit.is_active !== false} onChange={(v) => setEdit({ ...edit, is_active: v })} label="Active (visible in filters)" />
          </div>
        )}
      </Modal>

      <Confirm open={!!del} onClose={() => setDel(null)} onConfirm={remove} title="Delete branch" message={`Delete "${del?.name_en || del?.name}"?`} />
    </div>
  );
}
