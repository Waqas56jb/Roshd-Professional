import { useEffect, useState, useCallback } from 'react';
import { Plus, Pencil, Trash2, MapPin } from 'lucide-react';
import { api, notifyDashboard } from '../lib/api.js';
import { useToast } from '../context/ToastContext.jsx';
import { PageHeader, Spinner, EmptyState, Modal, Bilingual, Field, Toggle, Confirm } from '../components/ui.jsx';

const blank = { slug: '', name_en: '', name_ar: '', sort_order: 0, is_active: true };

export default function Regions() {
  const toast = useToast();
  const [rows, setRows] = useState(null);
  const [edit, setEdit] = useState(null);
  const [saving, setSaving] = useState(false);
  const [del, setDel] = useState(null);

  const load = useCallback(async () => {
    try {
      const r = await api.get('/api/regions');
      setRows((r?.regions || []).slice().sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0)));
    } catch (e) { toast.error(e.message); setRows([]); }
  }, [toast]);
  useEffect(() => { load(); }, [load]);

  async function save() {
    if (!edit.slug || !edit.name_en) { toast.error('Slug and English name are required.'); return; }
    setSaving(true);
    try {
      if (edit.id) await api.put(`/api/admin/regions/${edit.id}`, edit);
      else await api.post('/api/admin/regions', edit);
      notifyDashboard('regions-updated');
      toast.success(`Region ${edit.id ? 'updated' : 'created'}.`);
      setEdit(null); load();
    } catch (e) { toast.error(e.message); } finally { setSaving(false); }
  }
  async function remove() {
    try { await api.del(`/api/admin/regions/${del.id}`); notifyDashboard('regions-updated'); toast.success('Region deleted.'); setDel(null); load(); }
    catch (e) { toast.error(e.message); }
  }

  return (
    <div>
      <PageHeader
        title="Regions"
        subtitle="A region is a group of branches. It powers the Region filter (mutually exclusive with Branch) on the customer dashboard."
        actions={<button className="btn-gold" onClick={() => setEdit({ ...blank })}><Plus size={16} /> Add region</button>}
      />
      {rows === null ? <Spinner /> : rows.length === 0 ? (
        <EmptyState title="No regions yet" hint="Create your first region, then assign branches to it."
          action={<button className="btn-gold" onClick={() => setEdit({ ...blank })}><Plus size={16} /> Add region</button>} />
      ) : (
        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-white/5">
              <th className="table-head px-5 py-3">Name (EN)</th>
              <th className="table-head px-5 py-3">الاسم (AR)</th>
              <th className="table-head px-5 py-3">Slug</th>
              <th className="table-head px-5 py-3">Branches</th>
              <th className="table-head px-5 py-3">Status</th>
              <th className="table-head px-5 py-3 text-right">Actions</th>
            </tr></thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]">
                  <td className="px-5 py-3 font-medium flex items-center gap-2"><MapPin size={15} className="text-gold" /> {r.name_en}</td>
                  <td className="px-5 py-3 text-right text-ink-soft" dir="rtl">{r.name_ar || '—'}</td>
                  <td className="px-5 py-3 text-ink-faint">{r.slug}</td>
                  <td className="px-5 py-3 text-ink-soft">{(r.branches || []).length}</td>
                  <td className="px-5 py-3">
                    <span className={`chip ${r.is_active !== false ? 'bg-emerald-500/15 text-emerald-300' : 'bg-white/10 text-ink-faint'}`}>{r.is_active !== false ? 'Active' : 'Inactive'}</span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex justify-end gap-1">
                      <button className="rounded-lg p-2 text-ink-faint hover:text-gold hover:bg-white/5" onClick={() => setEdit({ ...blank, ...r })}><Pencil size={15} /></button>
                      <button className="rounded-lg p-2 text-ink-faint hover:text-red-300 hover:bg-white/5" onClick={() => setDel(r)}><Trash2 size={15} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Modal open={!!edit} onClose={() => setEdit(null)} title={edit?.id ? 'Edit region' : 'Add region'}
        footer={<>
          <button className="btn-ghost" onClick={() => setEdit(null)}>Cancel</button>
          <button className="btn-gold" onClick={save} disabled={saving}>{saving ? 'Saving…' : 'Save'}</button>
        </>}>
        {edit && (
          <div className="space-y-4">
            <Bilingual label="Region name" en={edit.name_en} ar={edit.name_ar} onEn={(v) => setEdit({ ...edit, name_en: v })} onAr={(v) => setEdit({ ...edit, name_ar: v })} placeholder="Central Region" />
            <div className="grid grid-cols-2 gap-3">
              <Field label="Slug" hint="lowercase id, e.g. central"><input className="input" value={edit.slug} onChange={(e) => setEdit({ ...edit, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })} /></Field>
              <Field label="Sort order"><input className="input" type="number" value={edit.sort_order} onChange={(e) => setEdit({ ...edit, sort_order: Number(e.target.value) })} /></Field>
            </div>
            <Toggle checked={edit.is_active !== false} onChange={(v) => setEdit({ ...edit, is_active: v })} label="Active (visible in filters)" />
          </div>
        )}
      </Modal>

      <Confirm open={!!del} onClose={() => setDel(null)} onConfirm={remove} title="Delete region" message={`Delete "${del?.name_en}"? Branches in it will lose their region link.`} />
    </div>
  );
}
