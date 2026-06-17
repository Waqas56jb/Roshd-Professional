import { useEffect, useState, useCallback } from 'react';
import { Plus, Trash2, ShieldCheck, User } from 'lucide-react';
import { api } from '../lib/api.js';
import { useToast } from '../context/ToastContext.jsx';
import { PageHeader, Spinner, EmptyState, Modal, Field, Confirm } from '../components/ui.jsx';

const blank = { email: '', password: '', first_name: '', last_name: '', role: 'customer', branch: '', status: 'Active' };

export default function Users() {
  const toast = useToast();
  const [rows, setRows] = useState(null);
  const [create, setCreate] = useState(null);
  const [saving, setSaving] = useState(false);
  const [del, setDel] = useState(null);

  const load = useCallback(async () => {
    try { const r = await api.get('/api/admin/all-users'); setRows(r?.users || []); }
    catch (e) { toast.error(e.message); setRows([]); }
  }, [toast]);
  useEffect(() => { load(); }, [load]);

  async function save() {
    if (!create.email || !create.password) { toast.error('Email and password are required.'); return; }
    setSaving(true);
    try { await api.post('/api/admin/users', create); toast.success('User invited.'); setCreate(null); load(); }
    catch (e) { toast.error(e.message); } finally { setSaving(false); }
  }
  async function changeRole(u, role) {
    try { await api.put(`/api/admin/users/${u.id}`, { role }); toast.success(`Role updated to ${role}.`); load(); }
    catch (e) { toast.error(e.message); }
  }
  async function remove() {
    try { await api.del(`/api/admin/user/${del.id}`); toast.success('User removed.'); setDel(null); load(); }
    catch (e) { toast.error(e.message); }
  }

  return (
    <div>
      <PageHeader title="Users"
        subtitle="Customer accounts are invite-only — create them here. Promote a user to admin to grant control-center access."
        actions={<button className="btn-gold" onClick={() => setCreate({ ...blank })}><Plus size={16} /> Invite user</button>} />

      {rows === null ? <Spinner /> : rows.length === 0 ? (
        <EmptyState title="No users yet" action={<button className="btn-gold" onClick={() => setCreate({ ...blank })}><Plus size={16} /> Invite user</button>} />
      ) : (
        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-white/5">
              <th className="table-head px-5 py-3">User</th><th className="table-head px-5 py-3">Email</th>
              <th className="table-head px-5 py-3">Role</th><th className="table-head px-5 py-3">Status</th>
              <th className="table-head px-5 py-3 text-right">Actions</th>
            </tr></thead>
            <tbody>
              {rows.map((u) => (
                <tr key={u.id} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]">
                  <td className="px-5 py-3 font-medium flex items-center gap-2">
                    {u.role === 'admin' ? <ShieldCheck size={15} className="text-gold" /> : <User size={15} className="text-ink-faint" />}
                    {[u.first_name, u.last_name].filter(Boolean).join(' ') || '—'}
                  </td>
                  <td className="px-5 py-3 text-ink-soft">{u.email}</td>
                  <td className="px-5 py-3">
                    <select className="input !py-1.5 !w-32" value={u.role || 'customer'} onChange={(e) => changeRole(u, e.target.value)}>
                      <option value="customer">customer</option><option value="admin">admin</option>
                    </select>
                  </td>
                  <td className="px-5 py-3"><span className={`chip ${u.status === 'Active' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-white/10 text-ink-faint'}`}>{u.status || 'Active'}</span></td>
                  <td className="px-5 py-3 text-right">
                    <button className="rounded-lg p-2 text-ink-faint hover:text-red-300 hover:bg-white/5" onClick={() => setDel(u)}><Trash2 size={15} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Modal open={!!create} onClose={() => setCreate(null)} title="Invite user"
        footer={<><button className="btn-ghost" onClick={() => setCreate(null)}>Cancel</button><button className="btn-gold" onClick={save} disabled={saving}>{saving ? 'Creating…' : 'Create account'}</button></>}>
        {create && (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Field label="First name"><input className="input" value={create.first_name} onChange={(e) => setCreate({ ...create, first_name: e.target.value })} /></Field>
              <Field label="Last name"><input className="input" value={create.last_name} onChange={(e) => setCreate({ ...create, last_name: e.target.value })} /></Field>
            </div>
            <Field label="Email"><input className="input" type="email" value={create.email} onChange={(e) => setCreate({ ...create, email: e.target.value })} /></Field>
            <Field label="Temporary password"><input className="input" value={create.password} onChange={(e) => setCreate({ ...create, password: e.target.value })} placeholder="min 8 characters" /></Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Role"><select className="input" value={create.role} onChange={(e) => setCreate({ ...create, role: e.target.value })}><option value="customer">customer</option><option value="admin">admin</option></select></Field>
              <Field label="Branch (optional)"><input className="input" value={create.branch} onChange={(e) => setCreate({ ...create, branch: e.target.value })} /></Field>
            </div>
          </div>
        )}
      </Modal>

      <Confirm open={!!del} onClose={() => setDel(null)} onConfirm={remove} title="Remove user" message={`Remove ${del?.email}? Their login will stop working.`} />
    </div>
  );
}
