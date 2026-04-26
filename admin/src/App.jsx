import { Routes, Route, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Login         from './pages/Login'
import Dashboard     from './pages/Dashboard'
import Users         from './pages/Users'
import Customers     from './pages/Customers'
import Settings      from './pages/Settings'
import DashboardConfig from './pages/DashboardConfig'
import ProtectedRoute  from './components/ProtectedRoute'
import AdminLayout     from './components/AdminLayout'

export default function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route index             element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard"  element={<Dashboard />} />
          <Route path="users"      element={<Users />} />
          <Route path="customers"  element={<Customers />} />
          <Route path="config"     element={<DashboardConfig />} />
          <Route path="settings"   element={<Settings />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </AnimatePresence>
  )
}
