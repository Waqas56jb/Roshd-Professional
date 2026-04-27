import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'

const BG = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=90&auto=format&fit=crop'

const PERKS = [
  'Full Customer Intelligence Dashboard',
  'Multi-branch & segment filtering',
  'Interactive simulation lab',
  'Auto-generated recommendations',
  'Executive decision summaries',
]

export default function Signup() {
  const [form, setForm]       = useState({ name:'', email:'', password:'', confirm:'' })
  const [showPass, setShow]   = useState(false)
  const [loading, setLoading] = useState(false)
  const { register }          = useAuth()
  const navigate              = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.password !== form.confirm) return toast.error('Passwords do not match')
    if (form.password.length < 6)       return toast.error('Password must be at least 6 characters')
    setLoading(true)
    try {
      await register(form.name, form.email, form.password)
      navigate('/dashboard')
    } catch (err) {
      toast.error(err.response?.data?.error || 'Registration failed')
    } finally { setLoading(false) }
  }

  const field = (extra = {}) => ({
    width:'100%', paddingLeft:38, paddingRight:14, paddingTop:11, paddingBottom:11,
    fontSize:14, fontWeight:500, color:'#0f172a', background:'#f8fafc',
    border:'1.5px solid #e2e8f0', borderRadius:11, outline:'none', transition:'all 0.15s',
    ...extra,
  })
  const focus = e => { e.target.style.border='1.5px solid #f59e0b'; e.target.style.boxShadow='0 0 0 3px rgba(245,158,11,0.1)'; e.target.style.background='white' }
  const blur  = e => { e.target.style.border='1.5px solid #e2e8f0'; e.target.style.boxShadow='none'; e.target.style.background='#f8fafc' }

  return (
    <div style={{ minHeight:'100vh', position:'relative', display:'flex', alignItems:'center', justifyContent:'center', padding:'24px 16px' }}>

      {/* BG */}
      <img src={BG} alt="" style={{ position:'fixed', inset:0, width:'100%', height:'100%', objectFit:'cover', zIndex:0 }} />
      <div style={{ position:'fixed', inset:0, background:'linear-gradient(135deg,rgba(2,6,23,0.80) 0%,rgba(15,23,42,0.72) 100%)', zIndex:1 }} />

      {/* Back link */}
      <Link to="/"
        style={{ position:'fixed', top:24, left:28, zIndex:10, display:'inline-flex', alignItems:'center', gap:8, textDecoration:'none', color:'rgba(255,255,255,0.6)', fontSize:13, fontWeight:600, transition:'color 0.2s' }}
        onMouseEnter={e => e.currentTarget.style.color='rgba(255,255,255,0.95)'}
        onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.6)'}
      >
        <div style={{ width:32, height:32, background:'linear-gradient(135deg,#f59e0b,#d97706)', borderRadius:9, display:'flex', alignItems:'center', justifyContent:'center' }}>
          <span style={{ fontSize:14, fontWeight:900, color:'#0f172a' }}>R</span>
        </div>
        <span className="hidden sm:inline">Roshd Professional</span>
      </Link>

      {/* Main card */}
      <motion.div
        initial={{ opacity:0, y:28, scale:0.97 }}
        animate={{ opacity:1, y:0, scale:1 }}
        transition={{ duration:0.55, ease:[0.22,1,0.36,1] }}
        style={{ position:'relative', zIndex:2, width:'100%', maxWidth:960, display:'grid', gridTemplateColumns:'1fr 1fr', borderRadius:24, overflow:'hidden', boxShadow:'0 40px 100px rgba(0,0,0,0.55)' }}
        className="signup-card"
      >
        {/* ── LEFT panel ── */}
        <div style={{ background:'rgba(2,6,23,0.92)', backdropFilter:'blur(20px)', padding:'44px 40px', display:'flex', flexDirection:'column', justifyContent:'space-between', borderRight:'1px solid rgba(255,255,255,0.07)' }}>
          <div>
            <div style={{ display:'inline-flex', alignItems:'center', gap:7, background:'rgba(245,158,11,0.1)', border:'1px solid rgba(245,158,11,0.2)', borderRadius:999, padding:'5px 13px', marginBottom:20 }}>
              <Sparkles style={{ width:11, height:11, color:'#fbbf24' }} />
              <span style={{ fontSize:11, fontWeight:700, color:'rgba(253,230,138,0.85)', letterSpacing:'0.08em' }}>Free · No Credit Card</span>
            </div>

            <h2 style={{ fontSize:26, fontWeight:900, color:'white', lineHeight:1.15, letterSpacing:'-0.02em', marginBottom:12 }}>
              Start Your{' '}
              <span style={{ background:'linear-gradient(135deg,#fbbf24,#f59e0b)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Intelligence</span>
              {' '}Journey
            </h2>
            <p style={{ fontSize:13.5, color:'rgba(148,163,184,0.75)', lineHeight:1.65, marginBottom:28 }}>
              Instant access to the full platform — zero setup required.
            </p>

            <div style={{ display:'flex', flexDirection:'column', gap:9 }}>
              {PERKS.map((p, i) => (
                <motion.div key={p}
                  initial={{ opacity:0, x:-12 }} animate={{ opacity:1, x:0 }}
                  transition={{ delay:0.35 + i*0.07, duration:0.35 }}
                  style={{ display:'flex', alignItems:'center', gap:10 }}
                >
                  <div style={{ width:18, height:18, background:'rgba(16,185,129,0.15)', border:'1px solid rgba(16,185,129,0.25)', borderRadius:5, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <CheckCircle2 style={{ width:10, height:10, color:'#34d399' }} />
                  </div>
                  <span style={{ fontSize:13, color:'rgba(203,213,225,0.75)', fontWeight:500 }}>{p}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div style={{ display:'flex', gap:8, marginTop:32 }}>
            {[['150+','Clients'],['10+','Years'],['95%','Satisfaction']].map(([n,l]) => (
              <div key={l} style={{ flex:1, background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:10, padding:'10px 8px', textAlign:'center' }}>
                <p style={{ fontSize:16, fontWeight:900, color:'#fbbf24', lineHeight:1 }}>{n}</p>
                <p style={{ fontSize:10, color:'rgba(100,116,139,0.8)', fontWeight:600, marginTop:4 }}>{l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT — form ── */}
        <div style={{ background:'white', padding:'36px 40px', display:'flex', flexDirection:'column', justifyContent:'center', overflowY:'auto' }}>
          <div style={{ marginBottom:22 }}>
            <h1 style={{ fontSize:22, fontWeight:900, color:'#0f172a', letterSpacing:'-0.02em', marginBottom:5 }}>Create your account</h1>
            <p style={{ fontSize:13.5, color:'#94a3b8', fontWeight:500 }}>Free access · No credit card required.</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:12 }}>
            {/* Name */}
            <div>
              <label style={{ display:'block', fontSize:10.5, fontWeight:800, color:'#475569', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:6 }}>Full Name</label>
              <div style={{ position:'relative' }}>
                <User style={{ position:'absolute', left:13, top:'50%', transform:'translateY(-50%)', width:14, height:14, color:'#94a3b8', pointerEvents:'none' }} />
                <input type="text" required placeholder="Mohammed Al-Amr"
                  value={form.name} onChange={e=>setForm({...form,name:e.target.value})}
                  style={field()} onFocus={focus} onBlur={blur} />
              </div>
            </div>

            {/* Email */}
            <div>
              <label style={{ display:'block', fontSize:10.5, fontWeight:800, color:'#475569', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:6 }}>Email</label>
              <div style={{ position:'relative' }}>
                <Mail style={{ position:'absolute', left:13, top:'50%', transform:'translateY(-50%)', width:14, height:14, color:'#94a3b8', pointerEvents:'none' }} />
                <input type="email" required autoComplete="email" placeholder="you@company.com"
                  value={form.email} onChange={e=>setForm({...form,email:e.target.value})}
                  style={field()} onFocus={focus} onBlur={blur} />
              </div>
            </div>

            {/* Password */}
            <div>
              <label style={{ display:'block', fontSize:10.5, fontWeight:800, color:'#475569', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:6 }}>Password</label>
              <div style={{ position:'relative' }}>
                <Lock style={{ position:'absolute', left:13, top:'50%', transform:'translateY(-50%)', width:14, height:14, color:'#94a3b8', pointerEvents:'none' }} />
                <input type={showPass?'text':'password'} required placeholder="Min. 6 characters"
                  value={form.password} onChange={e=>setForm({...form,password:e.target.value})}
                  style={field({paddingRight:40})} onFocus={focus} onBlur={blur} />
                <button type="button" onClick={()=>setShow(s=>!s)}
                  style={{ position:'absolute', right:12, top:'50%', transform:'translateY(-50%)', background:'none', border:'none', cursor:'pointer', color:'#94a3b8', display:'flex', padding:0 }}>
                  {showPass ? <EyeOff style={{width:14,height:14}}/> : <Eye style={{width:14,height:14}}/>}
                </button>
              </div>
            </div>

            {/* Confirm */}
            <div>
              <label style={{ display:'block', fontSize:10.5, fontWeight:800, color:'#475569', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:6 }}>Confirm Password</label>
              <div style={{ position:'relative' }}>
                <Lock style={{ position:'absolute', left:13, top:'50%', transform:'translateY(-50%)', width:14, height:14, color:'#94a3b8', pointerEvents:'none' }} />
                <input type="password" required placeholder="Repeat password"
                  value={form.confirm} onChange={e=>setForm({...form,confirm:e.target.value})}
                  style={field()} onFocus={focus} onBlur={blur} />
              </div>
            </div>

            {/* Submit */}
            <button type="submit" disabled={loading}
              style={{
                display:'flex', alignItems:'center', justifyContent:'center', gap:7,
                padding:'13px', marginTop:4,
                background:'linear-gradient(135deg,#f59e0b 0%,#d97706 100%)',
                color:'#0f172a', fontWeight:900, fontSize:14, borderRadius:12,
                border:'none', cursor:loading?'not-allowed':'pointer',
                boxShadow:'0 6px 20px rgba(245,158,11,0.3)', transition:'all 0.2s',
                opacity:loading?0.8:1,
              }}
              onMouseEnter={e=>!loading&&(e.currentTarget.style.transform='translateY(-1px)',e.currentTarget.style.boxShadow='0 10px 28px rgba(245,158,11,0.4)')}
              onMouseLeave={e=>(e.currentTarget.style.transform='',e.currentTarget.style.boxShadow='0 6px 20px rgba(245,158,11,0.3)')}
            >
              {loading
                ? <div style={{width:16,height:16,border:'2px solid rgba(15,23,42,0.25)',borderTopColor:'#0f172a',borderRadius:'50%',animation:'spin 0.7s linear infinite'}} />
                : <><span>Create Account</span><ArrowRight style={{width:14,height:14}}/></>
              }
            </button>
          </form>

          <div style={{ display:'flex', alignItems:'center', gap:12, margin:'16px 0' }}>
            <div style={{ flex:1, height:1, background:'#f1f5f9' }} />
            <span style={{ fontSize:11, color:'#cbd5e1', fontWeight:600 }}>Have an account?</span>
            <div style={{ flex:1, height:1, background:'#f1f5f9' }} />
          </div>

          <Link to="/login"
            style={{
              display:'flex', alignItems:'center', justifyContent:'center', gap:7,
              padding:'12px', border:'1.5px solid #e2e8f0', borderRadius:12,
              fontSize:13.5, fontWeight:700, color:'#475569', textDecoration:'none', transition:'all 0.2s',
            }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor='#0f172a';e.currentTarget.style.color='#0f172a'}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor='#e2e8f0';e.currentTarget.style.color='#475569'}}
          >
            Sign in instead <ArrowRight style={{width:13,height:13}}/>
          </Link>
        </div>
      </motion.div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 900px) { .signup-card { grid-template-columns: 1fr !important; } .signup-card > div:first-child { display: none !important; } }
      `}</style>
    </div>
  )
}
