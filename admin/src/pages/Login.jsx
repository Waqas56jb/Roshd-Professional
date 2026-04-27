import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck, BarChart2, Users, Zap } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'

const FEATURES = [
  { icon: BarChart2, title: 'Real-time Analytics',  desc: 'Live KPIs, trends, and segment insights from Supabase'  },
  { icon: Users,     title: 'User Management',       desc: 'Full control over accounts, roles, and permissions'       },
  { icon: Zap,       title: 'Instant Sync',          desc: 'Push config and theme changes live to client dashboard'  },
]

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
    <div className="al-wrap" style={{ minHeight:'100vh', display:'grid', gridTemplateColumns:'1fr 1fr', background:'#020617' }}>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes shimmer { 0%{backgroundPosition:200% center} 100%{backgroundPosition:-200% center} }
        .admin-input { color:#ffffff !important; }
        .admin-input::placeholder { color:rgba(255,255,255,0.25) !important; }
        .admin-input:focus { border-color:#f59e0b !important; box-shadow:0 0 0 3px rgba(245,158,11,0.14) !important; background:rgba(255,255,255,0.09) !important; color:#ffffff !important; }
        .admin-input:-webkit-autofill,
        .admin-input:-webkit-autofill:focus { -webkit-text-fill-color:#ffffff !important; -webkit-box-shadow:0 0 0 1000px rgba(15,23,42,0.95) inset !important; caret-color:#ffffff !important; }
        @media (max-width: 900px) {
          .al-left        { display: none !important; }
          .al-wrap        { grid-template-columns: 1fr !important; }
          .al-right       { padding: 32px 20px !important; align-items: flex-start !important; padding-top: 48px !important; }
          .al-form        { max-width: 100% !important; }
          .al-mobile-brand{ display: flex !important; }
        }
        @media (max-width: 480px) {
          .al-right { padding: 24px 16px !important; }
        }
      `}</style>

      {/* ── Left panel: brand + features over bg image ── */}
      <div className="al-left" style={{
        position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between', padding: '48px 44px',
      }}>
        {/* Background image */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'brightness(0.28)',
        }} />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(2,6,23,0.7) 0%, rgba(15,23,42,0.5) 50%, rgba(2,6,23,0.85) 100%)',
        }} />
        {/* Grid pattern */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.12,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
        {/* Amber glow */}
        <div style={{
          position: 'absolute', top: '-10%', left: '-10%',
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />

        {/* Brand */}
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
          style={{ position:'relative', zIndex:2 }}
        >
          <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:32 }}>
            <div style={{ width:48, height:48, borderRadius:14, background:'linear-gradient(135deg,#f59e0b,#d97706)', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 8px 24px rgba(245,158,11,0.3)', flexShrink:0 }}>
              <span style={{ fontSize:22, fontWeight:900, color:'#0f172a' }}>R</span>
            </div>
            <div>
              <p style={{ fontSize:10, letterSpacing:'0.3em', color:'#f59e0b', fontWeight:900, textTransform:'uppercase', lineHeight:1 }}>ROSHD</p>
              <p style={{ fontSize:20, fontWeight:900, color:'white', lineHeight:1.2 }}>Professional</p>
            </div>
          </div>

          <h2 style={{ fontSize:32, fontWeight:900, color:'white', lineHeight:1.15, letterSpacing:'-0.02em', marginBottom:12, maxWidth:340 }}>
            Intelligence for every decision
          </h2>
          <p style={{ fontSize:14, color:'rgba(255,255,255,0.5)', lineHeight:1.7, maxWidth:320, fontWeight:500 }}>
            A unified platform for customer satisfaction analytics, consulting, and training excellence.
          </p>
        </motion.div>

        {/* Feature list */}
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.25, duration:0.6 }}
          style={{ position:'relative', zIndex:2, display:'flex', flexDirection:'column', gap:20 }}
        >
          {FEATURES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} initial={{ opacity:0, x:-16 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.35 + i*0.1 }}
              style={{ display:'flex', gap:14, alignItems:'flex-start' }}
            >
              <div style={{ width:38, height:38, borderRadius:11, background:'rgba(245,158,11,0.14)', border:'1px solid rgba(245,158,11,0.22)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                <Icon size={17} color="#f59e0b" />
              </div>
              <div>
                <p style={{ fontSize:13, fontWeight:800, color:'white', margin:0, lineHeight:1.3 }}>{title}</p>
                <p style={{ fontSize:11, color:'rgba(255,255,255,0.42)', margin:'3px 0 0', lineHeight:1.5, fontWeight:500 }}>{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <p style={{ position:'relative', zIndex:2, fontSize:11, color:'rgba(255,255,255,0.2)', fontWeight:500 }}>
          © {new Date().getFullYear()} Roshd Professional · Secure Admin Platform
        </p>
      </div>

      {/* ── Right panel: login form ── */}
      <div className="al-right" style={{ display:'flex', alignItems:'center', justifyContent:'center', padding:'40px 32px', position:'relative' }}>
        {/* Subtle background */}
        <div style={{ position:'absolute', inset:0, background:'#020617' }} />
        <div style={{ position:'absolute', top:'-5%', right:'-5%', width:400, height:400, background:'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)', borderRadius:'50%' }} />
        <div style={{ position:'absolute', bottom:'-5%', left:'-5%', width:350, height:350, background:'radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)', borderRadius:'50%' }} />
        <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.025) 1px, transparent 0)', backgroundSize:'28px 28px' }} />

        <motion.div
          initial={{ opacity:0, x:32 }} animate={{ opacity:1, x:0 }}
          transition={{ duration:0.55, ease:[0.22,1,0.36,1] }}
          style={{ position:'relative', zIndex:2, width:'100%', maxWidth:420 }}
          className="al-form"
        >
          {/* Mobile brand – visible only on mobile (<900px) */}
          <div className="al-mobile-brand" style={{ display:'none', alignItems:'center', gap:12, marginBottom:32 }}>
            <div style={{ width:42, height:42, borderRadius:12, background:'linear-gradient(135deg,#f59e0b,#d97706)', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <span style={{ fontSize:20, fontWeight:900, color:'#0f172a' }}>R</span>
            </div>
            <div>
              <p style={{ fontSize:9, letterSpacing:'0.28em', color:'#f59e0b', fontWeight:900, textTransform:'uppercase', lineHeight:1 }}>ROSHD</p>
              <p style={{ fontSize:16, fontWeight:900, color:'white', lineHeight:1.2 }}>Professional</p>
            </div>
          </div>

          {/* Badge */}
          <div style={{ display:'inline-flex', alignItems:'center', gap:7, background:'rgba(245,158,11,0.1)', border:'1px solid rgba(245,158,11,0.22)', borderRadius:999, padding:'6px 14px', marginBottom:28 }}>
            <ShieldCheck size={12} color="#f59e0b" />
            <span style={{ fontSize:10, fontWeight:900, color:'#f59e0b', letterSpacing:'0.14em', textTransform:'uppercase' }}>Admin Access Only</span>
          </div>

          {/* Heading */}
          <h1 style={{ fontSize:30, fontWeight:900, color:'white', letterSpacing:'-0.02em', lineHeight:1.1, marginBottom:6 }}>
            Welcome back
          </h1>
          <p style={{ fontSize:14, color:'rgba(255,255,255,0.38)', marginBottom:36, fontWeight:500 }}>
            Sign in to manage the Roshd Professional platform.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:18 }}>
            {/* Email */}
            <div>
              <label style={{ display:'block', fontSize:11, fontWeight:800, color:'rgba(255,255,255,0.45)', textTransform:'uppercase', letterSpacing:'0.12em', marginBottom:8 }}>Email</label>
              <div style={{ position:'relative' }}>
                <Mail size={15} style={{ position:'absolute', left:14, top:'50%', transform:'translateY(-50%)', color:'rgba(255,255,255,0.25)', pointerEvents:'none' }} />
                <input
                  type="email" required autoComplete="email"
                  placeholder="admin@roshd.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="admin-input"
                  style={{
                    width:'100%', paddingLeft:42, paddingRight:16, paddingTop:13, paddingBottom:13,
                    fontSize:14, fontWeight:500, color:'white', caretColor:'white',
                    background:'rgba(255,255,255,0.06)', border:'1.5px solid rgba(255,255,255,0.1)',
                    borderRadius:12, outline:'none', transition:'all 0.15s',
                    boxSizing:'border-box',
                  }}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label style={{ display:'block', fontSize:11, fontWeight:800, color:'rgba(255,255,255,0.45)', textTransform:'uppercase', letterSpacing:'0.12em', marginBottom:8 }}>Password</label>
              <div style={{ position:'relative' }}>
                <Lock size={15} style={{ position:'absolute', left:14, top:'50%', transform:'translateY(-50%)', color:'rgba(255,255,255,0.25)', pointerEvents:'none' }} />
                <input
                  type={showPass ? 'text' : 'password'} required autoComplete="current-password"
                  placeholder="••••••••••"
                  value={form.password}
                  onChange={e => setForm({ ...form, password: e.target.value })}
                  className="admin-input"
                  style={{
                    width:'100%', paddingLeft:42, paddingRight:48, paddingTop:13, paddingBottom:13,
                    fontSize:14, fontWeight:500, color:'white', caretColor:'white',
                    background:'rgba(255,255,255,0.06)', border:'1.5px solid rgba(255,255,255,0.1)',
                    borderRadius:12, outline:'none', transition:'all 0.15s',
                    boxSizing:'border-box',
                  }}
                />
                <button type="button" onClick={() => setShow(s => !s)}
                  style={{ position:'absolute', right:14, top:'50%', transform:'translateY(-50%)', color:'rgba(255,255,255,0.3)', background:'none', border:'none', cursor:'pointer', padding:0, display:'flex' }}>
                  {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <motion.button type="submit" disabled={loading}
              whileHover={!loading ? { y:-1, boxShadow:'0 14px 36px rgba(245,158,11,0.45)' } : {}}
              whileTap={!loading ? { scale:0.98 } : {}}
              style={{
                display:'flex', alignItems:'center', justifyContent:'center', gap:10,
                padding:'14px 20px', marginTop:4,
                background: loading ? 'rgba(245,158,11,0.5)' : 'linear-gradient(135deg,#f59e0b 0%,#d97706 100%)',
                color: '#0f172a', fontWeight:900, fontSize:14,
                borderRadius:14, border:'none', cursor: loading ? 'not-allowed' : 'pointer',
                boxShadow:'0 8px 24px rgba(245,158,11,0.3)', transition:'all 0.2s',
                opacity: loading ? 0.75 : 1,
              }}
            >
              {loading
                ? <div style={{ width:18, height:18, border:'2.5px solid rgba(15,23,42,0.3)', borderTopColor:'#0f172a', borderRadius:'50%', animation:'spin 0.7s linear infinite' }} />
                : <><span>Sign in to Admin Panel</span><ArrowRight size={15} /></>
              }
            </motion.button>
          </form>

          {/* Divider */}
          <div style={{ display:'flex', alignItems:'center', gap:12, marginTop:28 }}>
            <div style={{ flex:1, height:1, background:'rgba(255,255,255,0.07)' }} />
            <span style={{ fontSize:11, color:'rgba(255,255,255,0.2)', fontWeight:600 }}>SECURED</span>
            <div style={{ flex:1, height:1, background:'rgba(255,255,255,0.07)' }} />
          </div>
          <p style={{ textAlign:'center', fontSize:11, color:'rgba(255,255,255,0.18)', marginTop:16, fontWeight:500 }}>
            🔒 256-bit TLS · Supabase · JWT Authentication
          </p>
        </motion.div>
      </div>
    </div>
  )
}
