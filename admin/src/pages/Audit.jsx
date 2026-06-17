import { useEffect, useState, useCallback } from 'react';
import { RefreshCw } from 'lucide-react';
import { api } from '../lib/api.js';
import { useToast } from '../context/ToastContext.jsx';
import { PageHeader, Spinner, EmptyState } from '../components/ui.jsx';

const COLOR = { CREATE: 'bg-emerald-500/15 text-emerald-300', UPDATE: 'bg-gold/15 text-gold', DELETE: 'bg-red-500/15 text-red-300', UPLOAD: 'bg-blue-500/15 text-blue-300', EXPORT: 'bg-purple-500/15 text-purple-300' };

export default function Audit() {
  const toast = useToast();
  const [rows, setRows] = useState(null);

  const load = useCallback(async () => {
    setRows(null);
    try { const r = await api.get('/api/admin/audit?limit=200'); setRows(r?.entries || []); }
    catch (e) { toast.error(e.message); setRows([]); }
  }, [toast]);
  useEffect(() => { load(); }, [load]);

  return (
    <div>
      <PageHeader title="Audit Log" subtitle="A trail of changes made through the admin (create / update / delete / upload)."
        actions={<button className="btn-ghost" onClick={load}><RefreshCw size={15} /> Refresh</button>} />
      {rows === null ? <Spinner /> : rows.length === 0 ? (
        <EmptyState title="No activity yet" hint="Actions you take in the admin will appear here." />
      ) : (
        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-white/5">
              <th className="table-head px-5 py-3">When</th><th className="table-head px-5 py-3">Action</th>
              <th className="table-head px-5 py-3">Entity</th><th className="table-head px-5 py-3">Actor</th><th className="table-head px-5 py-3">Status</th>
            </tr></thead>
            <tbody>
              {rows.map((e, i) => (
                <tr key={e.id || i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]">
                  <td className="px-5 py-3 text-ink-faint whitespace-nowrap">{e.created_at ? new Date(e.created_at).toLocaleString() : '—'}</td>
                  <td className="px-5 py-3"><span className={`chip ${COLOR[e.action] || 'bg-white/10 text-ink-soft'}`}>{e.action}</span></td>
                  <td className="px-5 py-3 text-ink-soft">{e.entity}{e.entity_id ? <span className="text-ink-faint"> · {String(e.entity_id).slice(0, 12)}</span> : ''}</td>
                  <td className="px-5 py-3 text-ink-soft">{e.actor_email || '—'}</td>
                  <td className="px-5 py-3 text-ink-faint">{e.status || 'success'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
