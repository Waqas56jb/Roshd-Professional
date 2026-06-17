import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, LogOut, ShieldCheck } from 'lucide-react';
import { NAV_GROUPS, ROUTE_TITLES } from './nav.js';
import { useAuth } from '../context/AuthContext.jsx';

export default function Layout({ children }) {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const title = ROUTE_TITLES[loc.pathname] || 'Admin';

  const Sidebar = (
    <aside className="flex h-full w-[260px] shrink-0 flex-col border-r border-white/5 bg-navy-900/70 backdrop-blur">
      <div className="flex items-center gap-3 px-5 py-5 border-b border-white/5">
        <img src="/logo.png" alt="ROSHD" className="h-9 w-9 rounded-lg object-contain" onError={(e) => (e.currentTarget.style.display = 'none')} />
        <div>
          <div className="text-sm font-extrabold tracking-wide text-ink">ROSHD <span className="text-gold">Admin</span></div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-ink-faint">Control Center</div>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
        {NAV_GROUPS.map((g) => (
          <div key={g.title}>
            <div className="px-3 mb-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-faint">{g.title}</div>
            <div className="space-y-0.5">
              {g.items.map((it) => {
                const Icon = it.icon;
                return (
                  <NavLink
                    key={it.to}
                    to={it.to}
                    end={it.end}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                        isActive
                          ? 'bg-gold/12 text-gold border border-gold/25'
                          : 'text-ink-soft hover:text-ink hover:bg-white/5 border border-transparent'
                      }`
                    }
                  >
                    <Icon size={17} className="shrink-0" />
                    <span>{it.label}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
      <div className="border-t border-white/5 p-3">
        <div className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-gold/20 text-gold font-bold">
            {(user?.email || 'A').charAt(0).toUpperCase()}
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-xs font-semibold text-ink">{user?.first_name || user?.email || 'Admin'}</div>
            <div className="flex items-center gap-1 text-[10px] text-ink-faint">
              <ShieldCheck size={11} className="text-gold" /> {user?.role || 'operator'}
            </div>
          </div>
          <button onClick={logout} title="Sign out" className="text-ink-faint hover:text-red-300 transition">
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </aside>
  );

  return (
    <div className="flex h-full">
      {/* Desktop sidebar */}
      <div className="hidden lg:flex">{Sidebar}</div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-0 h-full">{Sidebar}</div>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-white/5 bg-navy-950/70 px-5 py-3.5 backdrop-blur">
          <button className="lg:hidden text-ink-soft" onClick={() => setOpen(true)}><Menu size={20} /></button>
          <h1 className="text-base font-bold text-ink">{title}</h1>
          <span className="ml-auto text-xs text-ink-faint">Changes apply live to the customer dashboard</span>
        </header>
        <main className="flex-1 overflow-y-auto p-5 lg:p-7">{children}</main>
      </div>
    </div>
  );
}
