import { useEffect, useState } from 'react';
import { Save, ExternalLink } from 'lucide-react';
import { api } from '../lib/api.js';
import { API_BASE } from '../lib/api.js';
import { useToast } from '../context/ToastContext.jsx';
import { PageHeader, Spinner, Field } from '../components/ui.jsx';

export default function Settings() {
  const toast = useToast();
  const [s, setS] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      try { const r = await api.get('/api/admin/settings'); setS(r?.settings || {}); }
      catch { setS({}); }
    })();
  }, []);

  if (!s) return <Spinner />;
  const set = (patch) => setS({ ...s, ...patch });

  async function save() {
    setSaving(true);
    try { await api.put('/api/admin/settings', { settings: s }); toast.success('Settings saved.'); }
    catch (e) { toast.error(e.message); } finally { setSaving(false); }
  }

  return (
    <div>
      <PageHeader title="Settings" subtitle="Platform-level settings and quick links."
        actions={<button className="btn-gold" onClick={save} disabled={saving}><Save size={16} /> {saving ? 'Saving…' : 'Save'}</button>} />

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="card p-5 space-y-4">
          <h3 className="text-sm font-bold">Branding</h3>
          <Field label="Platform display name"><input className="input" value={s.brandName || ''} onChange={(e) => set({ brandName: e.target.value })} placeholder="ROSHD Professional" /></Field>
          <Field label="Support email"><input className="input" value={s.supportEmail || ''} onChange={(e) => set({ supportEmail: e.target.value })} placeholder="info@roshd-professional.com" /></Field>
          <Field label="Default dashboard language">
            <select className="input" value={s.defaultLang || 'ar'} onChange={(e) => set({ defaultLang: e.target.value })}>
              <option value="ar">Arabic</option><option value="en">English</option>
            </select>
          </Field>
        </div>

        <div className="card p-5 space-y-3">
          <h3 className="text-sm font-bold">Environment</h3>
          <div className="flex items-center justify-between text-sm"><span className="text-ink-faint">API base</span><code className="text-ink-soft text-xs">{API_BASE}</code></div>
          <a href="/" target="_blank" rel="noreferrer" className="btn-ghost w-full justify-start"><ExternalLink size={15} /> Open customer dashboard</a>
          <p className="text-xs text-ink-faint pt-2 border-t border-white/5">Changes you make across the admin apply live to the customer dashboard via realtime + same-browser sync.</p>
        </div>
      </div>
    </div>
  );
}
