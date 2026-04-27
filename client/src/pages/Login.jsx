import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'

const BG = 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=90&auto=format&fit=crop'

const PERKS = [
  '8-tab intelligence dashboard',
  'Driver effect size & path analysis',
  'Decision simulation lab',
  'Executive-ready recommendations',
]

export default function Login() {
  const [form, setForm]       = useState({ email:'', password:'' })
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
      toast.error(err.response?.data?.error || 'Invalid email or password')
    } finally { setLoading(false) }
  }

  return (
    <div style={{ minHeight:'100vh', position:'relative', display:'flex', alignItems:'center', justifyContent:'center', padding:'24px 16px' }}>

      {/* ── Full-page background ── */}
      <img src={BG} alt="" style={{ position:'fixed', inset:0, width:'100%', height:'100%', objectFit:'cover', zIndex:0 }} />
      <div style={{ position:'fixed', inset:0, background:'linear-gradient(135deg,rgba(2,6,23,0.82) 0%,rgba(15,23,42,0.75) 100%)', zIndex:1 }} />

      {/* ── Back to home ── */}
      <Link to="/"
        style={{ position:'fixed', top:24, left:28, zIndex:10, display:'inline-flex', alignItems:'center', gap:8, textDecoration:'none', color:'rgba(255,255,255,0.6)', fontSize:13, fontWeight:600, transition:'color 0.2s' }}
        onMouseEnter={e => e.currentTarget.style.color='rgba(255,255,255,0.95)'}
        onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.6)'}
      >
        <div style={{ width:32, height:32, background:'rgba(255,255,255,0.12)', borderRadius:9, display:'flex', alignItems:'center', justifyContent:'center', border:'1px solid rgba(255,255,255,0.2)', overflow:'hidden' }}>
          <img src="/logo.png" alt="Roshd" style={{ width:26, height:26, objectFit:'contain' }} />
        </div>
        <span className="hidden sm:inline">Roshd Professional</span>
      </Link>

      {/* ── Main card ── */}
      <motion.div
        initial={{ opacity:0, y:28, scale:0.97 }}
        animate={{ opacity:1, y:0, scale:1 }}
        transition={{ duration:0.55, ease:[0.22,1,0.36,1] }}
        style={{ position:'relative', zIndex:2, width:'100%', maxWidth:920, display:'grid', gridTemplateColumns:'1fr 1fr', borderRadius:24, overflow:'hidden', boxShadow:'0 40px 100px rgba(0,0,0,0.55)' }}
        className="login-card"
      >

        {/* ── LEFT — info panel ── */}
        <div style={{ background:'rgba(2,6,23,0.92)', backdropFilter:'blur(20px)', padding:'44px 40px', display:'flex', flexDirection:'column', justifyContent:'space-between', borderRight:'1px solid rgba(255,255,255,0.07)' }}>
          <div>
            {/* Headline */}
            <div style={{ marginBottom:32 }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:6, background:'rgba(245,158,11,0.1)', border:'1px solid rgba(245,158,11,0.2)', borderRadius:999, padding:'5px 12px', marginBottom:20 }}>
                <div style={{ width:6, height:6, background:'#34d399', borderRadius:'50%' }} />
                <span style={{ fontSize:11, fontWeight:700, color:'rgba(253,230,138,0.85)', letterSpacing:'0.08em' }}>Platform Intelligence</span>
              </div>
              <h2 style={{ fontSize:28, fontWeight:900, color:'white', lineHeight:1.12, letterSpacing:'-0.02em', marginBottom:12 }}>
                Customer<br />
                <span style={{ background:'linear-gradient(135deg,#fbbf24,#f59e0b)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Intelligence</span>
                {' '}Engine
              </h2>
              <p style={{ fontSize:13.5, color:'rgba(148,163,184,0.75)', lineHeight:1.65 }}>
                Multi-driver analytics with simulation and auto-generated executive decisions.
              </p>
            </div>

            {/* Perk list */}
            <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
              {PERKS.map(p => (
                <div key={p} style={{ display:'flex', alignItems:'center', gap:10 }}>
                  <div style={{ width:18, height:18, background:'rgba(16,185,129,0.15)', border:'1px solid rgba(16,185,129,0.25)', borderRadius:5, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <CheckCircle2 style={{ width:10, height:10, color:'#34d399' }} />
                  </div>
                  <span style={{ fontSize:13, color:'rgba(203,213,225,0.75)', fontWeight:500 }}>{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div style={{ display:'flex', gap:8, marginTop:32 }}>
            {[['72%','R² Score'],['8','Analysis Tabs'],['3+','Branches']].map(([n,l]) => (
              <div key={l} style={{ flex:1, background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:10, padding:'10px 8px', textAlign:'center' }}>
                <p style={{ fontSize:17, fontWeight:900, color:'#fbbf24', lineHeight:1 }}>{n}</p>
                <p style={{ fontSize:10, color:'rgba(100,116,139,0.8)', fontWeight:600, marginTop:4 }}>{l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT — form panel ── */}
        <div style={{ background:'white', padding:'44px 40px', display:'flex', flexDirection:'column', justifyContent:'center' }}>
          <div style={{ marginBottom:28 }}>
            <h1 style={{ fontSize:24, fontWeight:900, color:'#0f172a', letterSpacing:'-0.02em', marginBottom:6 }}>Welcome back</h1>
            <p style={{ fontSize:14, color:'#94a3b8', fontWeight:500 }}>Sign in to your intelligence dashboard.</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:14 }}>
            {/* Email */}
            <div>
              <label style={{ display:'block', fontSize:11, fontWeight:800, color:'#475569', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:7 }}>Email</label>
              <div style={{ position:'relative' }}>
                <Mail style={{ position:'absolute', left:13, top:'50%', transform:'translateY(-50%)', width:14, height:14, color:'#94a3b8', pointerEvents:'none' }} />
                <input type="email" required autoComplete="email" placeholder="you@company.com"
                  value={form.email} onChange={e => setForm({...form,email:e.target.value})}
                  style={{ width:'100%', paddingLeft:38, paddingRight:14, paddingTop:11, paddingBottom:11, fontSize:14, fontWeight:500, color:'#0f172a', background:'#f8fafc', border:'1.5px solid #e2e8f0', borderRadius:11, outline:'none', transition:'all 0.15s' }}
                  onFocus={e=>{e.target.style.border='1.5px solid #f59e0b';e.target.style.boxShadow='0 0 0 3px rgba(245,158,11,0.1)';e.target.style.background='white'}}
                  onBlur={e =>{e.target.style.border='1.5px solid #e2e8f0';e.target.style.boxShadow='none';e.target.style.background='#f8fafc'}}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label style={{ display:'block', fontSize:11, fontWeight:800, color:'#475569', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:7 }}>Password</label>
              <div style={{ position:'relative' }}>
                <Lock style={{ position:'absolute', left:13, top:'50%', transform:'translateY(-50%)', width:14, height:14, color:'#94a3b8', pointerEvents:'none' }} />
                <input type={showPass?'text':'password'} required autoComplete="current-password" placeholder="Min. 6 characters"
                  value={form.password} onChange={e => setForm({...form,password:e.target.value})}
                  style={{ width:'100%', paddingLeft:38, paddingRight:40, paddingTop:11, paddingBottom:11, fontSize:14, fontWeight:500, color:'#0f172a', background:'#f8fafc', border:'1.5px solid #e2e8f0', borderRadius:11, outline:'none', transition:'all 0.15s' }}
                  onFocus={e=>{e.target.style.border='1.5px solid #f59e0b';e.target.style.boxShadow='0 0 0 3px rgba(245,158,11,0.1)';e.target.style.background='white'}}
                  onBlur={e =>{e.target.style.border='1.5px solid #e2e8f0';e.target.style.boxShadow='none';e.target.style.background='#f8fafc'}}
                />
                <button type="button" onClick={()=>setShow(s=>!s)}
                  style={{ position:'absolute', right:12, top:'50%', transform:'translateY(-50%)', background:'none', border:'none', cursor:'pointer', color:'#94a3b8', display:'flex', padding:0 }}>
                  {showPass ? <EyeOff style={{width:14,height:14}}/> : <Eye style={{width:14,height:14}}/>}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button type="submit" disabled={loading}
              style={{
                display:'flex', alignItems:'center', justifyContent:'center', gap:7,
                padding:'13px', marginTop:4,
                background:'linear-gradient(135deg,#0f172a,#1e293b)',
                color:'white', fontWeight:900, fontSize:14, borderRadius:12,
                border:'none', cursor:loading?'not-allowed':'pointer',
                boxShadow:'0 4px 18px rgba(15,23,42,0.28)', transition:'all 0.2s',
                opacity:loading?0.75:1,
              }}
              onMouseEnter={e=>!loading&&(e.currentTarget.style.transform='translateY(-1px)',e.currentTarget.style.boxShadow='0 8px 24px rgba(15,23,42,0.38)')}
              onMouseLeave={e=>(e.currentTarget.style.transform='',e.currentTarget.style.boxShadow='0 4px 18px rgba(15,23,42,0.28)')}
            >
              {loading
                ? <div style={{width:16,height:16,border:'2px solid rgba(255,255,255,0.3)',borderTopColor:'white',borderRadius:'50%',animation:'spin 0.7s linear infinite'}} />
                : <><span>Sign In</span><ArrowRight style={{width:14,height:14}}/></>
              }
            </button>
          </form>

          {/* Divider */}
          <div style={{ display:'flex', alignItems:'center', gap:12, margin:'20px 0' }}>
            <div style={{ flex:1, height:1, background:'#f1f5f9' }} />
            <span style={{ fontSize:12, color:'#cbd5e1', fontWeight:600 }}>New here?</span>
            <div style={{ flex:1, height:1, background:'#f1f5f9' }} />
          </div>

          <Link to="/signup"
            style={{
              display:'flex', alignItems:'center', justifyContent:'center', gap:7,
              padding:'12px', border:'1.5px solid #e2e8f0', borderRadius:12,
              fontSize:14, fontWeight:700, color:'#475569', textDecoration:'none', transition:'all 0.2s',
            }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor='#f59e0b';e.currentTarget.style.color='#d97706';e.currentTarget.style.background='#fefce8'}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor='#e2e8f0';e.currentTarget.style.color='#475569';e.currentTarget.style.background='white'}}
          >
            Create free account <ArrowRight style={{width:13,height:13}}/>
          </Link>
        </div>
      </motion.div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 900px) { .login-card { grid-template-columns: 1fr !important; } .login-card > div:first-child { display: none !important; } }
      `}</style>
    </div>
  )
}
