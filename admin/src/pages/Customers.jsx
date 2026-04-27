import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, RefreshCw, Trash2, ChevronLeft, ChevronRight, Plus, X } from 'lucide-react'
import api from '../api/axios'
import toast from 'react-hot-toast'

const RISK_CLS = {
  High:   'bg-red-100 text-red-700',
  Medium: 'bg-amber-100 text-amber-700',
  Low:    'bg-green-100 text-green-700',
}

const EMPTY_FORM = { id: '', branch: 'Riyadh', gender: 'Male', service: 'Mechanical', quality: 3, communication: 3, price: 3, speed: 3, risk: 'Medium' }

export default function Customers() {
  const [customers, setCustomers] = useState([])
  const [total,     setTotal]     = useState(0)
  const [page,      setPage]      = useState(1)
  const [filters,   setFilters]   = useState({ branch: '', gender: '', service: '' })
  const [loading,   setLoading]   = useState(true)
  const [modal,     setModal]     = useState(false)
  const [form,      setForm]      = useState(EMPTY_FORM)
  const [saving,    setSaving]    = useState(false)
  const LIMIT = 20

  const fetchCustomers = useCallback(async () => {
    setLoading(true)
    try {
      const { data } = await api.get('/customers', { params: { ...filters, page, limit: LIMIT } })
      setCustomers(data.customers)
      setTotal(data.total)
    } catch {
      toast.error('Failed to load customers')
    } finally {
      setLoading(false)
    }
  }, [page, filters])

  useEffect(() => { fetchCustomers() }, [fetchCustomers])

  const deleteCustomer = async (id) => {
    if (!confirm('Delete this customer record?')) return
    try {
      await api.delete(`/admin/customers/${id}`)
      setCustomers(c => c.filter(x => x.id !== id))
      setTotal(t => t - 1)
      toast.success('Deleted')
    } catch { toast.error('Delete failed') }
  }

  const addCustomer = async (e) => {
    e.preventDefault()
    setSaving(true)
    try {
      const { data } = await api.post('/admin/customers', form)
      setCustomers(c => [data.customer, ...c])
      setTotal(t => t + 1)
      setModal(false)
      setForm(EMPTY_FORM)
      toast.success('Customer record added')
    } catch { toast.error('Failed to add customer') } finally { setSaving(false) }
  }

  const pages = Math.ceil(total / LIMIT)
  const F = filters
  const setF = (k, v) => { setFilters(f => ({ ...f, [k]: v })); setPage(1) }

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-lg font-black text-roshd-dark">Customer Records</h2>
          <p className="text-xs text-roshd-muted">{total} total satisfaction records</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {[
            { k: 'branch',  opts: ['', 'Riyadh', 'Jeddah', 'Dammam'],        placeholder: 'All Branches'  },
            { k: 'gender',  opts: ['', 'Male', 'Female'],                      placeholder: 'All Genders'   },
            { k: 'service', opts: ['', 'Mechanical', 'Bodyshop'],              placeholder: 'All Services'  },
          ].map(({ k, opts, placeholder }) => (
            <select key={k} value={F[k]} onChange={e => setF(k, e.target.value)}
              className="input-field py-2 text-xs font-bold w-auto pr-6">
              {opts.map(o => <option key={o} value={o}>{o || placeholder}</option>)}
            </select>
          ))}
          <button onClick={fetchCustomers}
            className="p-2.5 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50">
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
          <button onClick={() => setModal(true)}
            className="btn-primary flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Record
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="card p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                {['ID', 'Branch', 'Gender', 'Service', 'Quality', 'Comm.', 'Price', 'Speed', 'Risk', ''].map(h => (
                  <th key={h} className="text-left px-3 py-3.5 text-xs font-black uppercase tracking-wider text-slate-500">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {loading ? (
                [...Array(8)].map((_, i) => (
                  <tr key={i}>{[...Array(10)].map((_, j) => <td key={j} className="px-3 py-4"><div className="h-3.5 bg-slate-100 rounded animate-pulse w-16" /></td>)}</tr>
                ))
              ) : customers.length === 0 ? (
                <tr><td colSpan={10} className="text-center py-12 text-roshd-muted font-semibold">No records found</td></tr>
              ) : (
                <AnimatePresence>
                  {customers.map((c, i) => (
                    <motion.tr key={c.id}
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      transition={{ delay: i * 0.03 }}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-3 py-3 font-black text-roshd-dark text-xs">{c.id}</td>
                      <td className="px-3 py-3 text-roshd-muted text-xs">{c.branch}</td>
                      <td className="px-3 py-3 text-roshd-muted text-xs">{c.gender}</td>
                      <td className="px-3 py-3 text-roshd-muted text-xs">{c.service}</td>
                      {[c.quality, c.communication, c.price, c.speed].map((v, j) => (
                        <td key={j} className="px-3 py-3">
                          <span className={`font-black text-xs ${v >= 4 ? 'text-green-600' : v <= 2 ? 'text-red-500' : 'text-slate-700'}`}>{v}</span>
                        </td>
                      ))}
                      <td className="px-3 py-3">
                        <span className={`badge text-[10px] ${RISK_CLS[c.risk] || 'bg-slate-100 text-slate-600'}`}>{c.risk}</span>
                      </td>
                      <td className="px-3 py-3">
                        <button onClick={() => deleteCustomer(c.id)}
                          className="p-1.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              )}
            </tbody>
          </table>
        </div>
        {pages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-slate-100">
            <p className="text-xs text-roshd-muted font-semibold">Page {page} of {pages}</p>
            <div className="flex items-center gap-2">
              <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
                className="p-1.5 rounded-lg hover:bg-slate-100 disabled:opacity-30"><ChevronLeft className="w-4 h-4" /></button>
              <span className="text-xs font-bold">{page}</span>
              <button onClick={() => setPage(p => Math.min(pages, p + 1))} disabled={page === pages}
                className="p-1.5 rounded-lg hover:bg-slate-100 disabled:opacity-30"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
        )}
      </div>

      {/* Add record modal */}
      <AnimatePresence>
        {modal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={e => { if (e.target === e.currentTarget) setModal(false) }}
          >
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-black text-roshd-dark">Add Customer Record</h3>
                <button onClick={() => setModal(false)} className="text-slate-400 hover:text-slate-600"><X className="w-5 h-5" /></button>
              </div>
              <form onSubmit={addCustomer} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 customers-modal-grid-2">
                  <div>
                    <label className="text-xs font-black text-slate-600 uppercase tracking-wide">ID</label>
                    <input required placeholder="C-008" value={form.id}
                      onChange={e => setForm({ ...form, id: e.target.value })} className="input-field mt-1" />
                  </div>
                  <div>
                    <label className="text-xs font-black text-slate-600 uppercase tracking-wide">Branch</label>
                    <select value={form.branch} onChange={e => setForm({ ...form, branch: e.target.value })} className="input-field mt-1">
                      {['Riyadh', 'Jeddah', 'Dammam'].map(b => <option key={b}>{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-black text-slate-600 uppercase tracking-wide">Gender</label>
                    <select value={form.gender} onChange={e => setForm({ ...form, gender: e.target.value })} className="input-field mt-1">
                      {['Male', 'Female'].map(g => <option key={g}>{g}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-black text-slate-600 uppercase tracking-wide">Service</label>
                    <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className="input-field mt-1">
                      {['Mechanical', 'Bodyshop'].map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 customers-modal-grid-4">
                  {['quality', 'communication', 'price', 'speed'].map(k => (
                    <div key={k}>
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-wide capitalize">{k.slice(0, 4)}.</label>
                      <input type="number" min={1} max={5} value={form[k]}
                        onChange={e => setForm({ ...form, [k]: +e.target.value })} className="input-field mt-1 text-center" />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="text-xs font-black text-slate-600 uppercase tracking-wide">Risk</label>
                  <select value={form.risk} onChange={e => setForm({ ...form, risk: e.target.value })} className="input-field mt-1">
                    {['Low', 'Medium', 'High'].map(r => <option key={r}>{r}</option>)}
                  </select>
                </div>
                <button type="submit" disabled={saving}
                  className="btn-gold w-full flex items-center justify-center gap-2 mt-2">
                  {saving ? <div className="w-4 h-4 border-2 border-roshd-dark border-t-transparent rounded-full animate-spin" /> : 'Add Record'}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
