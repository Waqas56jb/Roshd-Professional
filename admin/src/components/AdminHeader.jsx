import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Menu, Search, X } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { motion, AnimatePresence } from 'framer-motion'

const BREADCRUMBS = {
  '/dashboard': [{ label: 'Overview' }],
  '/users':     [{ label: 'Management' }, { label: 'Users' }],
  '/customers': [{ label: 'Management' }, { label: 'Customers' }],
  '/config':    [{ label: 'Control' }, { label: 'Dashboard Config' }],
  '/settings':  [{ label: 'System' }, { label: 'Settings' }],
}

export default function AdminHeader({ onMenuClick }) {
  const { pathname }  = useLocation()
  const { user }      = useAuth()
  const [searchOpen, setSearchOpen] = useState(false)
  const crumbs = BREADCRUMBS[pathname] || [{ label: 'Admin' }]
  const pageTitle = crumbs[crumbs.length - 1]?.label

  return (
    <header className="flex-shrink-0 bg-white border-b border-slate-100 px-5 sm:px-6 h-16 flex items-center justify-between gap-4"
      style={{ boxShadow: '0 1px 0 #e2e8f0' }}
    >
      {/* Left */}
      <div className="flex items-center gap-3 min-w-0 flex-1 overflow-hidden">
        <button onClick={onMenuClick}
          className="lg:hidden p-2 rounded-xl hover:bg-slate-100 text-slate-500 transition-colors flex-shrink-0"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Breadcrumb — show only last crumb on mobile */}
        <div className="flex items-center gap-1.5 text-sm min-w-0 overflow-hidden">
          {crumbs.map((c, i) => (
            <span key={i} className={`flex items-center gap-1.5 ${i < crumbs.length - 1 ? 'hidden sm:flex' : ''}`}>
              {i > 0 && <span className="text-slate-300 hidden sm:inline">/</span>}
              <span className={`${i === crumbs.length - 1
                ? 'font-black text-slate-900 truncate'
                : 'font-semibold text-slate-400'
              }`}>{c.label}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        {/* Search */}
        <AnimatePresence>
          {searchOpen ? (
            <motion.div
              initial={{ width: 40, opacity: 0 }}
              animate={{ width: 'min(220px, 50vw)', opacity: 1 }}
              exit={{ width: 40, opacity: 0 }}
              className="relative"
            >
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input autoFocus placeholder="Search anything…"
                className="w-full pl-9 pr-9 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400 transition-all"
              />
              <button onClick={() => setSearchOpen(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ) : (
            <button onClick={() => setSearchOpen(true)}
              className="p-2 rounded-xl hover:bg-slate-100 text-slate-500 transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
          )}
        </AnimatePresence>

        {/* Divider */}
        <div className="w-px h-6 bg-slate-200" />

        {/* User avatar */}
        <div className="flex items-center gap-2.5 pl-1 cursor-pointer group">
          <div className="relative">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center text-slate-900 font-black text-sm shadow">
              {user?.name?.[0]?.toUpperCase()}
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white" />
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-bold text-slate-900 leading-none">{user?.name?.split(' ')[0]}</p>
            <p className="text-[10px] text-slate-400 leading-none mt-0.5">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  )
}
