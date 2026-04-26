import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'

export default function AdminLogin() {
  const [form, setForm]       = useState({ email: '', password: '' })
  const [showPass, setShow]   = useState(false)
  const [loading, setLoading] = useState(false)
  const { login }             = useAuth()
  const navigate              = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await login(form.email, form.password)
      navigate('/dashboard')
    } catch (err) {
      toast.error(err.response?.data?.error || err.message || 'Invalid credentials')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{ background: '#020617' }}
    >
      {/* ── Ambient blobs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div style={{
          position:'absolute', top:'-10%', left:'-5%',
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position:'absolute', bottom:'-15%', right:'-5%',
          width: 700, height: 700,
          background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position:'absolute', top:'40%', right:'30%',
          width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
      </div>

      {/* ── Dot grid ── */}
      <div className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* ── Card wrapper ── */}
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-[420px]"
      >
        {/* Brand above card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="flex items-center justify-center gap-3 mb-7"
        >
          <div className="w-10 h-10 rounded-2xl overflow-hidden bg-white/10 border border-white/20 flex items-center justify-center">
            <img src="/logo.png" alt="Roshd" className="w-8 h-8 object-contain" />
          </div>
          <div>
            <p style={{ fontSize: 9, letterSpacing: '0.28em', color: '#f59e0b', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1 }}>Roshd</p>
            <p style={{ fontSize: 15, fontWeight: 900, color: 'white', lineHeight: 1.2 }}>Professional</p>
          </div>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="bg-white rounded-3xl overflow-hidden"
          style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)' }}
        >
          {/* Card top amber strip */}
          <div style={{ height: 4, background: 'linear-gradient(90deg,#f59e0b,#fbbf24,#f59e0b)' }} />

          <div className="p-8 sm:p-10">
            {/* Shield badge */}
            <div className="flex items-center gap-2 mb-7 w-fit"
              style={{ background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: 999, padding: '6px 14px' }}
            >
              <ShieldCheck style={{ width: 13, height: 13, color: '#ea580c' }} />
              <span style={{ fontSize: 11, fontWeight: 800, color: '#c2410c', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Admin Access Only
              </span>
            </div>

            {/* Title */}
            <div className="mb-8">
              <h1 style={{ fontSize: 26, fontWeight: 900, color: '#0f172a', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                Welcome back
              </h1>
              <p style={{ fontSize: 14, color: '#94a3b8', marginTop: 6, fontWeight: 500 }}>
                Sign in to manage the platform.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label style={{ display:'block', fontSize:11, fontWeight:800, color:'#475569', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:8 }}>
                  Email
                </label>
                <div className="relative">
                  <Mail style={{ position:'absolute', left:14, top:'50%', transform:'translateY(-50%)', width:15, height:15, color:'#94a3b8', pointerEvents:'none' }} />
                  <input
                    type="email" required autoComplete="email"
                    placeholder="admin@roshd.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    style={{
                      width:'100%', paddingLeft:42, paddingRight:16, paddingTop:13, paddingBottom:13,
                      fontSize:14, fontWeight:500, color:'#0f172a',
                      background:'#f8fafc', border:'1.5px solid #e2e8f0',
                      borderRadius:12, outline:'none', transition:'all 0.15s',
                    }}
                    onFocus={e => { e.target.style.border='1.5px solid #f59e0b'; e.target.style.boxShadow='0 0 0 3px rgba(245,158,11,0.12)'; e.target.style.background='#fff' }}
                    onBlur={e  => { e.target.style.border='1.5px solid #e2e8f0'; e.target.style.boxShadow='none'; e.target.style.background='#f8fafc' }}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label style={{ display:'block', fontSize:11, fontWeight:800, color:'#475569', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:8 }}>
                  Password
                </label>
                <div className="relative">
                  <Lock style={{ position:'absolute', left:14, top:'50%', transform:'translateY(-50%)', width:15, height:15, color:'#94a3b8', pointerEvents:'none' }} />
                  <input
                    type={showPass ? 'text' : 'password'} required autoComplete="current-password"
                    placeholder="••••••••••"
                    value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                    style={{
                      width:'100%', paddingLeft:42, paddingRight:46, paddingTop:13, paddingBottom:13,
                      fontSize:14, fontWeight:500, color:'#0f172a',
                      background:'#f8fafc', border:'1.5px solid #e2e8f0',
                      borderRadius:12, outline:'none', transition:'all 0.15s',
                    }}
                    onFocus={e => { e.target.style.border='1.5px solid #f59e0b'; e.target.style.boxShadow='0 0 0 3px rgba(245,158,11,0.12)'; e.target.style.background='#fff' }}
                    onBlur={e  => { e.target.style.border='1.5px solid #e2e8f0'; e.target.style.boxShadow='none'; e.target.style.background='#f8fafc' }}
                  />
                  <button type="button" onClick={() => setShow(s => !s)}
                    style={{ position:'absolute', right:14, top:'50%', transform:'translateY(-50%)', color:'#94a3b8', background:'none', border:'none', cursor:'pointer', padding:0, display:'flex' }}
                  >
                    {showPass ? <EyeOff style={{ width:15, height:15 }} /> : <Eye style={{ width:15, height:15 }} />}
                  </button>
                </div>
              </div>

              {/* CTA */}
              <button type="submit" disabled={loading}
                className="w-full flex items-center justify-center gap-2.5 mt-2"
                style={{
                  padding: '14px 20px',
                  background: loading ? '#fbbf24' : 'linear-gradient(135deg,#f59e0b 0%,#d97706 100%)',
                  color: '#0f172a',
                  fontWeight: 900, fontSize: 14,
                  borderRadius: 14, border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
                  boxShadow: '0 8px 24px rgba(245,158,11,0.35)',
                  transition: 'all 0.2s',
                  opacity: loading ? 0.8 : 1,
                }}
                onMouseEnter={e => !loading && (e.currentTarget.style.transform='translateY(-1px)', e.currentTarget.style.boxShadow='0 12px 32px rgba(245,158,11,0.45)')}
                onMouseLeave={e => (e.currentTarget.style.transform='translateY(0)', e.currentTarget.style.boxShadow='0 8px 24px rgba(245,158,11,0.35)')}
              >
                {loading
                  ? <div style={{ width:18, height:18, border:'2.5px solid rgba(15,23,42,0.3)', borderTopColor:'#0f172a', borderRadius:'50%', animation:'spin 0.7s linear infinite' }} />
                  : <><span>Sign in to Admin Panel</span><ArrowRight style={{ width:15, height:15 }} /></>
                }
              </button>
            </form>
          </div>
        </motion.div>

        {/* Below card */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          style={{ textAlign:'center', color:'rgba(255,255,255,0.2)', fontSize:12, marginTop:20, fontWeight:500 }}
        >
          © {new Date().getFullYear()} Roshd Professional · Secure Admin v1.0
        </motion.p>
      </motion.div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
