import { createContext, useContext, useState, useEffect } from 'react'
import api from '../api/axios'
import toast from 'react-hot-toast'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('roshd_admin_user')
    const token  = localStorage.getItem('roshd_admin_token')
    if (stored && token) setUser(JSON.parse(stored))
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    const { data } = await api.post('/auth/login', { email, password })
    if (data.user.role !== 'admin') throw new Error('Admin access required')
    localStorage.setItem('roshd_admin_token', data.token)
    localStorage.setItem('roshd_admin_user',  JSON.stringify(data.user))
    setUser(data.user)
    toast.success(`Welcome back, ${data.user.name}!`)
    return data.user
  }

  const logout = () => {
    localStorage.removeItem('roshd_admin_token')
    localStorage.removeItem('roshd_admin_user')
    setUser(null)
    toast.success('Logged out')
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
