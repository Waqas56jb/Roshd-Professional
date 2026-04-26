import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search, RefreshCw, Trash2, ChevronLeft, ChevronRight,
  User, Edit3, X, Check, UserPlus, Mail, Shield, Calendar
} from 'lucide-react'
import api from '../api/axios'
import toast from 'react-hot-toast'

const ROLES = ['user', 'admin']
const stagger = { show: { transition: { staggerChildren: 0.04 } } }
const fadeUp  = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.22,1,0.36,1] } } }

/* Avatar color from name */
const avatarColor = (name = '') => {
  const h = (name.charCodeAt(0) || 65) * 137.5 % 360
  return { bg: `hsl(${h},65%,92%)`, text: `hsl(${h},55%,32%)` }
}

/* ── Edit Modal ── */
function EditModal({ user: u, onClose, onSave }) {
  const [form, setForm] = useState({ name: u.name, email: u.email, role: u.role })
  const [saving, setSaving] = useState(false)

  const handleSave = async (e) => {
    e.preventDefault()
    setSaving(true)
    try {
      await onSave(u.id, form)
      onClose()
    } finally { setSaving(false) }
  }

  return (
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background:'rgba(2,6,23,0.7)', backdropFilter:'blur(4px)' }}
      onClick={e => e.target===e.currentTarget && onClose()}
    >
      <motion.div initial={{ scale:0.94, opacity:0, y:16 }} animate={{ scale:1, opacity:1, y:0 }}
        exit={{ scale:0.94, opacity:0 }}
        transition={{ duration:0.25, ease:[0.22,1,0.36,1] }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm flex-shrink-0"
              style={avatarColor(u.name)}>
              {u.name?.[0]?.toUpperCase()}
            </div>
            <div>
              <p className="font-black text-slate-900 text-sm leading-none">Edit User</p>
              <p className="text-xs text-slate-400 mt-0.5">{u.email}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSave} className="p-6 space-y-4">
          <div>
            <label className="text-xs font-black text-slate-500 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
              <User className="w-3 h-3" /> Full Name
            </label>
            <input value={form.name} onChange={e => setForm({...form, name: e.target.value})}
              required className="input-field" placeholder="Full name" />
          </div>
          <div>
            <label className="text-xs font-black text-slate-500 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
              <Mail className="w-3 h-3" /> Email Address
            </label>
            <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
              required className="input-field" placeholder="Email address" />
          </div>
          <div>
            <label className="text-xs font-black text-slate-500 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
              <Shield className="w-3 h-3" /> Role
            </label>
            <div className="flex gap-3">
              {ROLES.map(r => (
                <button key={r} type="button"
                  onClick={() => setForm({...form, role: r})}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-bold border transition-all ${
                    form.role === r
                      ? 'border-amber-400 bg-amber-50 text-amber-800'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                  }`}
                >
                  {r === 'admin' ? '🛡️ Admin' : '👤 User'}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose}
              className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-50 transition-colors">
              Cancel
            </button>
            <button type="submit" disabled={saving}
              className="flex-1 py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all"
              style={{ background:'linear-gradient(135deg,var(--accent),var(--accent-hover))', color:'#fff', boxShadow:'0 4px 12px rgba(0,0,0,0.15)' }}
            >
              {saving ? <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                : <><Check className="w-4 h-4" /> Save Changes</>}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}

/* ── Delete Confirm Modal ── */
function DeleteModal({ user: u, onClose, onConfirm }) {
  const [loading, setLoading] = useState(false)
  const handle = async () => { setLoading(true); await onConfirm(); setLoading(false) }
  return (
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background:'rgba(2,6,23,0.7)', backdropFilter:'blur(4px)' }}
      onClick={e => e.target===e.currentTarget && onClose()}
    >
      <motion.div initial={{ scale:0.94, opacity:0 }} animate={{ scale:1, opacity:1 }}
        exit={{ scale:0.94, opacity:0 }}
        transition={{ duration:0.22 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 text-center"
      >
        <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Trash2 className="w-6 h-6 text-red-500" />
        </div>
        <h3 className="font-black text-slate-900 text-lg mb-1">Delete User?</h3>
        <p className="text-sm text-slate-500 mb-6">
          <strong>{u.name}</strong> will be permanently removed. This cannot be undone.
        </p>
        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-50">Cancel</button>
          <button onClick={handle} disabled={loading}
            className="flex-1 py-2.5 rounded-xl bg-red-500 text-white font-bold text-sm hover:bg-red-600 transition-colors flex items-center justify-center gap-2">
            {loading ? <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> : 'Delete'}
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ════════════════════════════════════════════════════ */
export default function Users() {
  const [users,    setUsers]   = useState([])
  const [total,    setTotal]   = useState(0)
  const [page,     setPage]    = useState(1)
  const [search,   setSearch]  = useState('')
  const [loading,  setLoading] = useState(true)
  const [editUser, setEditUser] = useState(null)
  const [delUser,  setDelUser]  = useState(null)
  const LIMIT = 15

  const fetchUsers = useCallback(async () => {
    setLoading(true)
    try {
      const { data } = await api.get('/admin/users', { params: { page, limit: LIMIT, search } })
      setUsers(data.users)
      setTotal(data.total)
    } catch { toast.error('Failed to load users') }
    finally   { setLoading(false) }
  }, [page, search])

  useEffect(() => { fetchUsers() }, [fetchUsers])

  const saveUser = async (id, form) => {
    try {
      await api.put(`/admin/users/${id}/role`, { role: form.role })
      setUsers(u => u.map(x => x.id === id ? { ...x, ...form } : x))
      toast.success('User updated')
    } catch { toast.error('Failed to update') }
  }

  const deleteUser = async (id) => {
    try {
      await api.delete(`/admin/users/${id}`)
      setUsers(u => u.filter(x => x.id !== id))
      setTotal(t => t - 1)
      setDelUser(null)
      toast.success('User deleted')
    } catch { toast.error('Failed to delete') }
  }

  const pages = Math.ceil(total / LIMIT)

  return (
    <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-5 max-w-[1400px]">

      {/* ── Header ── */}
      <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Users</h1>
          <p className="text-sm text-slate-500 mt-0.5">{total} registered accounts</p>
        </div>
      </motion.div>

      {/* ── Filter bar ── */}
      <motion.div variants={fadeUp}
        className="bg-white rounded-2xl px-5 py-3.5 border border-slate-100 flex flex-wrap items-center gap-3"
        style={{ boxShadow:'0 1px 4px rgba(0,0,0,0.05)' }}
      >
        <div className="relative flex-1 min-w-[200px] max-w-xs">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input placeholder="Search by name or email…" value={search}
            onChange={e => { setSearch(e.target.value); setPage(1) }}
            className="input-field pl-10 py-2"
          />
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-xs text-slate-400 font-semibold bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
            {total} total
          </span>
          <button onClick={fetchUsers}
            className={`btn-ghost p-2.5 rounded-xl ${loading ? 'opacity-60 pointer-events-none' : ''}`}>
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </motion.div>

      {/* ── Table ── */}
      <motion.div variants={fadeUp}
        className="bg-white rounded-2xl border border-slate-100 overflow-hidden"
        style={{ boxShadow:'0 1px 4px rgba(0,0,0,0.05)' }}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom:'1px solid #f1f5f9', background:'#fafafa' }}>
                <th className="table-head">User</th>
                <th className="table-head hidden sm:table-cell">Email</th>
                <th className="table-head">Role</th>
                <th className="table-head hidden md:table-cell">Joined</th>
                <th className="table-head w-24 text-right pr-5">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                [...Array(8)].map((_, i) => (
                  <tr key={i} className="border-b border-slate-50">
                    {[1,1,1,1,1].map((_, j) => (
                      <td key={j} className="table-cell">
                        <div className="h-4 bg-slate-100 rounded-lg animate-pulse" style={{ width: [160,200,80,100,60][j] }} />
                      </td>
                    ))}
                  </tr>
                ))
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-20">
                    <div className="flex flex-col items-center gap-3 text-slate-400">
                      <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center">
                        <User className="w-7 h-7 opacity-40" />
                      </div>
                      <p className="font-bold text-slate-500">No users found</p>
                      <p className="text-sm">Try adjusting your search</p>
                    </div>
                  </td>
                </tr>
              ) : (
                <AnimatePresence>
                  {users.map((u, i) => {
                    const av = avatarColor(u.name)
                    return (
                      <motion.tr key={u.id}
                        initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
                        transition={{ delay: i * 0.025 }}
                        className="border-b border-slate-50 hover:bg-slate-50/60 transition-colors group"
                      >
                        {/* User */}
                        <td className="table-cell">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black flex-shrink-0"
                              style={{ background: av.bg, color: av.text }}>
                              {u.name?.[0]?.toUpperCase()}
                            </div>
                            <div>
                              <p className="font-bold text-slate-900 text-sm leading-none">{u.name}</p>
                              <p className="text-xs text-slate-400 mt-0.5 sm:hidden">{u.email}</p>
                            </div>
                          </div>
                        </td>

                        {/* Email */}
                        <td className="table-cell text-slate-500 font-medium text-sm hidden sm:table-cell">{u.email}</td>

                        {/* Role badge */}
                        <td className="table-cell">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
                            u.role === 'admin'
                              ? 'bg-amber-50 text-amber-700 border border-amber-200'
                              : 'bg-slate-100 text-slate-600'
                          }`}>
                            {u.role === 'admin' ? '🛡️' : '👤'} {u.role}
                          </span>
                        </td>

                        {/* Joined */}
                        <td className="table-cell hidden md:table-cell">
                          <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
                            <Calendar className="w-3 h-3" />
                            {new Date(u.created_at).toLocaleDateString('en-GB', { day:'2-digit', month:'short', year:'numeric' })}
                          </div>
                        </td>

                        {/* Actions */}
                        <td className="table-cell">
                          <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity pr-1">
                            <button onClick={() => setEditUser(u)}
                              className="p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all"
                              title="Edit user">
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button onClick={() => setDelUser(u)}
                              className="p-2 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all"
                              title="Delete user">
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    )
                  })}
                </AnimatePresence>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {pages > 1 && (
          <div className="flex items-center justify-between px-5 py-3.5 border-t border-slate-100 bg-slate-50/40">
            <p className="text-xs text-slate-400 font-semibold">
              Showing <span className="text-slate-700 font-bold">{(page-1)*LIMIT+1}–{Math.min(page*LIMIT,total)}</span> of <span className="text-slate-700 font-bold">{total}</span>
            </p>
            <div className="flex items-center gap-1">
              <button onClick={() => setPage(p => Math.max(1,p-1))} disabled={page===1}
                className="p-1.5 rounded-lg hover:bg-slate-200 disabled:opacity-30 transition-all text-slate-600">
                <ChevronLeft className="w-4 h-4" />
              </button>
              {[...Array(Math.min(pages,5))].map((_,i) => {
                const pg = i+1
                return (
                  <button key={pg} onClick={() => setPage(pg)}
                    className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                      page===pg ? 'text-white shadow-sm' : 'hover:bg-slate-200 text-slate-600'
                    }`}
                    style={page===pg ? { background:'var(--accent)', color:'#fff' } : {}}
                  >{pg}</button>
                )
              })}
              <button onClick={() => setPage(p => Math.min(pages,p+1))} disabled={page===pages}
                className="p-1.5 rounded-lg hover:bg-slate-200 disabled:opacity-30 transition-all text-slate-600">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </motion.div>

      {/* Modals */}
      <AnimatePresence>
        {editUser && <EditModal user={editUser} onClose={() => setEditUser(null)} onSave={saveUser} />}
        {delUser  && <DeleteModal user={delUser} onClose={() => setDelUser(null)} onConfirm={() => deleteUser(delUser.id)} />}
      </AnimatePresence>
    </motion.div>
  )
}
