import { createContext, useContext, useState, useEffect } from 'react'
import api from '../api/axios'
import toast from 'react-hot-toast'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('roshd_user')
    const token  = localStorage.getItem('roshd_token')
    if (stored && token) setUser(JSON.parse(stored))
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    const { data } = await api.post('/auth/login', { email, password })
    localStorage.setItem('roshd_token', data.token)
    localStorage.setItem('roshd_user',  JSON.stringify(data.user))
    setUser(data.user)
    toast.success(`Welcome back, ${data.user.name}!`)
    return data.user
  }

  const register = async (name, email, password) => {
    const { data } = await api.post('/auth/register', { name, email, password })
    localStorage.setItem('roshd_token', data.token)
    localStorage.setItem('roshd_user',  JSON.stringify(data.user))
    setUser(data.user)
    toast.success(`Welcome to Roshd Professional, ${data.user.name}!`)
    return data.user
  }

  const logout = () => {
    localStorage.removeItem('roshd_token')
    localStorage.removeItem('roshd_user')
    setUser(null)
    toast.success('Logged out successfully')
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
