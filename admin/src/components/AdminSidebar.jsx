import { NavLink, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard, Users, UserCircle,
  LogOut, X, ShieldCheck, Settings, Sliders,
  ChevronRight
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const NAV_GROUPS = [
  {
    label: 'Main',
    items: [
      { to: '/dashboard', label: 'Overview',    icon: LayoutDashboard },
    ],
  },
  {
    label: 'Management',
    items: [
      { to: '/users',     label: 'Users',       icon: Users      },
      { to: '/customers', label: 'Customers',   icon: UserCircle },
    ],
  },
  {
    label: 'Control',
    items: [
      { to: '/config',    label: 'Dashboard Config', icon: Sliders },
      { to: '/settings',  label: 'Settings',    icon: Settings   },
    ],
  },
]

function SidebarBody({ onClose }) {
  const { user, logout } = useAuth()
  const navigate         = useNavigate()
  const handleLogout     = () => { logout(); navigate('/login') }

  return (
    <div style={{
      display:'flex', flexDirection:'column', height:'100%',
      background:'linear-gradient(180deg,#0a0f1e 0%,#0d1526 55%,#0f172a 100%)',
      borderRight:'1px solid rgba(255,255,255,0.06)',
    }}>
      {/* Brand */}
      <div style={{ padding:'22px 20px 16px', borderBottom:'1px solid rgba(255,255,255,0.06)', display:'flex', alignItems:'flex-start', justifyContent:'space-between', flexShrink:0 }}>
        <div style={{ display:'flex', flexDirection:'column', gap:2 }}>
          <span style={{ fontSize:22, fontWeight:900, letterSpacing:'0.18em', color:'#ffffff', lineHeight:1 }}>ROSHD</span>
          <span style={{ fontSize:'9.5px', fontWeight:800, letterSpacing:'0.32em', color:'#c9a84c', textTransform:'uppercase', lineHeight:1, marginTop:3 }}>PROFESSIONAL</span>
          <span style={{ fontSize:9, fontWeight:500, letterSpacing:'0.08em', color:'rgba(255,255,255,0.28)', marginTop:6, lineHeight:1 }}>Clarity · Insight · Impact</span>
        </div>
        {onClose && (
          <button onClick={onClose} style={{ background:'rgba(255,255,255,0.06)', border:'none', cursor:'pointer', color:'rgba(255,255,255,0.4)', padding:5, borderRadius:8, flexShrink:0, marginTop:2 }}>
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Admin badge */}
      <div style={{ padding:'10px 16px 0', flexShrink:0 }}>
        <div style={{ display:'flex', alignItems:'center', gap:7, borderRadius:12, padding:'7px 12px', border:'1px solid rgba(201,168,76,0.2)', background:'rgba(201,168,76,0.07)' }}>
          <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" style={{ color:'#c9a84c' }} />
          <span style={{ fontSize:9, fontWeight:900, letterSpacing:'0.2em', textTransform:'uppercase', color:'#c9a84c' }}>Admin Console</span>
        </div>
      </div>

      <div style={{ height:1, background:'rgba(255,255,255,0.05)', margin:'14px 16px' }} />

      {/* Navigation */}
      <nav style={{ flex:1, padding:'0 10px', overflowY:'auto', display:'flex', flexDirection:'column', gap:20 }}>
        {NAV_GROUPS.map(({ label, items }) => (
          <div key={label}>
            <p style={{ fontSize:9, fontWeight:900, letterSpacing:'0.22em', textTransform:'uppercase', color:'rgba(255,255,255,0.22)', padding:'0 10px', marginBottom:4 }}>{label}</p>
            <div style={{ display:'flex', flexDirection:'column', gap:2 }}>
              {items.map(({ to, label: lbl, icon: Icon }) => (
                <NavLink key={to} to={to} onClick={onClose}
                  className={({ isActive }) => `sidebar-nav-item${isActive ? ' active' : ''}`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span style={{ flex:1, fontSize:13 }}>{lbl}</span>
                  <ChevronRight className="w-3 h-3" style={{ opacity:0.3 }} />
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* User section */}
      <div style={{ padding:16, flexShrink:0 }}>
        <div style={{ height:1, background:'rgba(255,255,255,0.05)', marginBottom:14 }} />
        <div style={{ display:'flex', alignItems:'center', gap:10, padding:'10px 12px', borderRadius:16, background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', marginBottom:8 }}>
          <div style={{ position:'relative', flexShrink:0 }}>
            <div style={{ width:32, height:32, borderRadius:'50%', background:'linear-gradient(135deg,#c9a84c,#b8963e)', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:900, fontSize:13, color:'#0f172a' }}>
              {user?.name?.[0]?.toUpperCase()}
            </div>
            <div style={{ position:'absolute', bottom:-2, right:-2, width:11, height:11, background:'#34d399', borderRadius:'50%', border:'2px solid #0a0f1e' }} />
          </div>
          <div style={{ flex:1, minWidth:0 }}>
            <p style={{ fontSize:12, fontWeight:700, color:'white', lineHeight:1, marginBottom:2, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{user?.name}</p>
            <p style={{ fontSize:10, color:'rgba(255,255,255,0.35)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{user?.email}</p>
          </div>
        </div>
        <button onClick={handleLogout}
          style={{ width:'100%', display:'flex', alignItems:'center', gap:10, padding:'9px 12px', borderRadius:12, background:'none', border:'none', cursor:'pointer', color:'rgba(255,255,255,0.32)', fontSize:13, fontWeight:600, transition:'all 0.15s' }}
          onMouseEnter={e => { e.currentTarget.style.color='#f87171'; e.currentTarget.style.background='rgba(239,68,68,0.08)' }}
          onMouseLeave={e => { e.currentTarget.style.color='rgba(255,255,255,0.32)'; e.currentTarget.style.background='transparent' }}
        >
          <LogOut className="w-4 h-4" /> Sign out
        </button>
      </div>
    </div>
  )
}

export default function AdminSidebar({ open, onClose }) {
  return (
    <>
      {/* ── Desktop: always visible static sidebar ── */}
      <aside className="hidden lg:flex flex-col w-[256px] flex-shrink-0 h-screen sticky top-0">
        <SidebarBody onClose={null} />
      </aside>

      {/* ── Mobile: overlay + slide-in drawer ── */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
              className="fixed inset-0 z-30 lg:hidden"
              style={{ background:'rgba(0,0,0,0.55)', backdropFilter:'blur(2px)' }}
              onClick={onClose}
            />
            <motion.div
              key="drawer"
              initial={{ x:'-100%' }} animate={{ x:0 }} exit={{ x:'-100%' }}
              transition={{ type:'spring', stiffness:320, damping:32 }}
              className="fixed inset-y-0 left-0 z-40 w-[256px] lg:hidden"
            >
              <SidebarBody onClose={onClose} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
