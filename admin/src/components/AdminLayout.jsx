import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'
import AdminHeader  from './AdminHeader'
import { motion, AnimatePresence } from 'framer-motion'

export default function AdminLayout() {
  const [sideOpen, setSide] = useState(false)
  const location = useLocation()

  return (
    <div style={{ display:'flex', height:'100vh', overflow:'hidden', background:'#f0f2f5' }}>
      <AdminSidebar open={sideOpen} onClose={() => setSide(false)} />

      <div style={{ flex:1, display:'flex', flexDirection:'column', minWidth:0, overflow:'hidden' }}>
        <AdminHeader onMenuClick={() => setSide(true)} />
        <main style={{ flex:1, overflowY:'auto', padding:'24px 20px' }} className="admin-main-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity:0, y:8 }}
              animate={{ opacity:1, y:0 }}
              exit={{ opacity:0 }}
              transition={{ duration:0.22, ease:[0.22,1,0.36,1] }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}
