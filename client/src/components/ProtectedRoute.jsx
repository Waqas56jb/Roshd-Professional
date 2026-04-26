import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-roshd-dark">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-roshd-gold border-t-transparent rounded-full animate-spin" />
        <p className="text-white font-semibold">Loading...</p>
      </div>
    </div>
  )
  return user ? children : <Navigate to="/login" replace />
}
