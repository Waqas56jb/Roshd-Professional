import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Map, GitBranch, Database, Activity, Upload, SlidersHorizontal, Filter, ArrowRight, Loader2 } from 'lucide-react';
import { api } from '../lib/api.js';

function Stat({ icon: Icon, label, value, sub }) {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold/12 text-gold"><Icon size={19} /></span>
        {sub && <span className="text-[11px] text-ink-faint">{sub}</span>}
      </div>
      <div className="mt-4 text-3xl font-extrabold text-ink">{value}</div>
      <div className="mt-1 text-sm text-ink-soft">{label}</div>
    </div>
  );
}

export default function Overview() {
  const [s, setS] = useState({ regions: '—', branches: '—', records: '—', config: '—', health: '…' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const out = { regions: 0, branches: 0, records: 0, config: 0, health: 'offline' };
      try { const h = await api.get('/api/health'); out.health = h?.supabase === 'connected' ? 'connected' : (h?.status || 'unknown'); } catch {}
      try { const r = await api.get('/api/regions'); out.regions = (r?.regions || []).length; out.branches = (r?.branches || []).length; } catch {}
      try { const c = await api.get('/api/customers'); out.records = (c?.customers || []).length; } catch {}
      try { const k = await api.get('/api/roshd/config'); out.config = Object.keys(k?.configs || {}).length; } catch {}
      setS(out); setLoading(false);
    })();
  }, []);

  const quick = [
    { to: '/survey', icon: Upload, label: 'Upload survey data', desc: 'Feed the auto-calculated charts' },
    { to: '/model-values', icon: SlidersHorizontal, label: 'Edit model values', desc: 'Drivers, R², reliability per filter' },
    { to: '/filters', icon: Filter, label: 'Manage filters', desc: 'Regions, branches, services & options' },
  ];

  return (
    <div className="space-y-7">
      <div>
        <h2 className="text-xl font-bold">Welcome back</h2>
        <p className="text-sm text-ink-faint mt-1">Everything you change here flows straight to the customer dashboard.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat icon={Map} label="Regions" value={loading ? <Loader2 className="animate-spin" size={22} /> : s.regions} />
        <Stat icon={GitBranch} label="Branches" value={loading ? <Loader2 className="animate-spin" size={22} /> : s.branches} />
        <Stat icon={Database} label="Survey records" value={loading ? <Loader2 className="animate-spin" size={22} /> : s.records} />
        <Stat icon={Activity} label="Backend" value={<span className={s.health === 'connected' ? 'text-emerald-400' : 'text-amber-400'}>{loading ? '…' : s.health}</span>} sub={`${s.config} config keys`} />
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        {quick.map((q) => {
          const Icon = q.icon;
          return (
            <Link key={q.to} to={q.to} className="card p-5 group hover:border-gold/30 transition">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-gold group-hover:bg-gold/12"><Icon size={18} /></span>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-ink">{q.label}</div>
                  <div className="text-xs text-ink-faint">{q.desc}</div>
                </div>
                <ArrowRight size={16} className="text-ink-faint group-hover:text-gold transition" />
              </div>
            </Link>
          );
        })}
      </div>

      <div className="card p-6">
        <h3 className="text-sm font-bold text-ink">How data flows</h3>
        <p className="text-sm text-ink-soft mt-2 leading-relaxed">
          <span className="text-gold font-semibold">Survey upload</span> feeds the auto-calculated items (CX score, sample size, demographics, distributions).
          <span className="text-gold font-semibold"> Model Values</span> let you type the analytical results (driver impact, R², reliability) per Branch/Region × Service.
          The customer dashboard listens for changes and refreshes live.
        </p>
      </div>
    </div>
  );
}
