import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, LogOut, LayoutDashboard } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const NAV = [
  { label:'Home',     href:'/#home'     },
  { label:'Services', href:'/#services' },
  { label:'Programs', href:'/#programs' },
  { label:'About',    href:'/#about'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenu]     = useState(false)
  const { user, logout }        = useAuth()
  const navigate                = useNavigate()
  const location                = useLocation()
  const isDash                  = location.pathname === '/dashboard'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLogout = () => { logout(); navigate('/') }

  const handleNav = (href) => {
    setMenu(false)
    if (!href.startsWith('/#')) { navigate(href); return }
    const id = href.slice(2)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior:'smooth' }), 120)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior:'smooth' })
    }
  }

  const light = scrolled || isDash

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          light
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 no-underline group flex-shrink-0">
            <div className={`w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
              light ? 'bg-slate-900 border border-slate-800' : 'bg-white/10 backdrop-blur-sm border border-white/20'
            }`}>
              <img src="/logo.png" alt="Roshd Professional" className="w-8 h-8 object-contain" />
            </div>
            <div className="hidden sm:block">
              <p className="text-[9px] font-black tracking-[0.28em] text-amber-500 uppercase leading-none">Roshd</p>
              <p className={`text-[15px] font-black leading-snug transition-colors duration-300 ${light ? 'text-slate-900' : 'text-white'}`}>
                Professional
              </p>
            </div>
          </Link>

          {/* ── Desktop nav links (hidden on mobile) ── */}
          {!isDash && (
            <nav className="hidden lg:flex items-center gap-1">
              {NAV.map(item => (
                <button key={item.label} onClick={() => handleNav(item.href)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer border-0 bg-transparent ${
                    light
                      ? 'text-slate-600 hover:text-amber-600 hover:bg-amber-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}

          {/* ── Desktop CTAs (hidden on mobile) ── */}
          <div className="hidden lg:flex items-center gap-2">
            {user ? (
              <>
                <Link to="/dashboard"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-[13px] font-bold no-underline transition-all duration-200 hover:-translate-y-px"
                  style={{ background:'#f59e0b', color:'#0f172a', boxShadow:'0 4px 14px rgba(245,158,11,0.3)' }}
                >
                  <LayoutDashboard className="w-3.5 h-3.5" /> Dashboard
                </Link>
                <button onClick={handleLogout}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-[13px] font-semibold transition-all duration-200 cursor-pointer border ${
                    light
                      ? 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/15'
                  }`}
                >
                  <LogOut className="w-3.5 h-3.5" /> Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login"
                  className={`px-4 py-2 rounded-xl text-[13px] font-semibold no-underline transition-colors duration-200 ${
                    light ? 'text-slate-600 hover:text-amber-600' : 'text-white/80 hover:text-white'
                  }`}
                >
                  Sign In
                </Link>
                <Link to="/signup"
                  className="inline-flex items-center px-5 py-2.5 rounded-xl text-[13px] font-black no-underline transition-all duration-200 hover:-translate-y-px"
                  style={{ background:'#f59e0b', color:'#0f172a', boxShadow:'0 4px 14px rgba(245,158,11,0.3)' }}
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* ── Mobile hamburger (hidden on desktop) ── */}
          <button
            onClick={() => setMenu(m => !m)}
            className={`lg:hidden p-2 rounded-xl transition-all duration-200 border-0 cursor-pointer ${
              light ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-white border-b border-slate-100 lg:hidden overflow-hidden"
            style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}
          >
            <div className="px-5 py-5 flex flex-col gap-1">
              {!isDash && NAV.map(item => (
                <button key={item.label} onClick={() => handleNav(item.href)}
                  className="text-left px-4 py-3 rounded-xl text-[15px] font-semibold text-slate-700 hover:text-amber-600 hover:bg-amber-50 transition-all duration-150 border-0 bg-transparent cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              <div className="h-px bg-slate-100 my-2" />
              {user ? (
                <div className="flex flex-col gap-2">
                  <Link to="/dashboard" onClick={() => setMenu(false)}
                    className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold no-underline text-[14px]"
                    style={{ background:'#f59e0b', color:'#0f172a' }}
                  >
                    <LayoutDashboard className="w-4 h-4" /> Dashboard
                  </Link>
                  <button onClick={handleLogout}
                    className="flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 text-slate-600 font-semibold text-[14px] bg-white cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" /> Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link to="/login" onClick={() => setMenu(false)}
                    className="flex items-center justify-center py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold no-underline text-[14px]"
                  >
                    Sign In
                  </Link>
                  <Link to="/signup" onClick={() => setMenu(false)}
                    className="flex items-center justify-center py-3 rounded-xl font-black no-underline text-[14px]"
                    style={{ background:'#f59e0b', color:'#0f172a' }}
                  >
                    Get Started Free
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
