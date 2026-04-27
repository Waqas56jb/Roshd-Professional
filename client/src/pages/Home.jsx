import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import {
  BookOpen, Users, Award, Star, ArrowRight, Zap, Shield, Globe,
  LineChart, BrainCircuit, Layers, CheckCircle2, Quote,
  BarChart3, TrendingUp, Target
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

/* ── Images ── */
const HERO_BG   = 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=90&auto=format&fit=crop'
const ABOUT_IMG = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=85&auto=format&fit=crop'
const PROG = [
  'https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=700&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80&auto=format&fit=crop',
]
const AVATARS = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80&auto=format&fit=crop',
]

/* ── Animation helpers ── */
const spring = { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
const fadeUp  = { hidden: { opacity: 0, y: 36 },   show: { opacity: 1, y: 0, transition: spring } }
const fadeIn  = { hidden: { opacity: 0 },           show: { opacity: 1, transition: { duration: 0.5 } } }
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.11 } } }

function Reveal({ children, className = '' }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-72px' })
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'} className={className}>
      {children}
    </motion.div>
  )
}

function Counter({ end, suffix = '' }) {
  const [n, setN] = useState(0)
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    let i = 0
    const step = end / 60
    const id = setInterval(() => {
      i = Math.min(i + step, end)
      setN(Math.floor(i))
      if (i >= end) clearInterval(id)
    }, 20)
    return () => clearInterval(id)
  }, [inView, end])
  return <span ref={ref}>{n}{suffix}</span>
}

/* ══════════════════════════════════════════════════ */
export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* ━━━━━━━━━━━━━━━━━━ HERO ━━━━━━━━━━━━━━━━━━ */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,rgba(2,6,23,0.72) 0%,rgba(2,6,23,0.60) 50%,rgba(2,6,23,0.88) 100%)' }} />
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        </div>
        {/* Amber glow */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.14, 0.06] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position:'absolute', top:'45%', left:'50%', transform:'translate(-50%,-50%)', width:700, height:700, background:'radial-gradient(circle, #f59e0b 0%, transparent 70%)', pointerEvents:'none' }}
        />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 text-center pt-32 pb-36">
          <motion.div initial="hidden" animate="show" variants={stagger}>

            {/* Badge */}
            <motion.div variants={fadeUp} className="flex justify-center mb-7">
              <span style={{
                display:'inline-flex', alignItems:'center', gap:8,
                background:'rgba(245,158,11,0.1)', border:'1px solid rgba(245,158,11,0.3)',
                backdropFilter:'blur(12px)', borderRadius:999,
                padding:'8px 20px', color:'#fcd34d',
                fontSize:11, fontWeight:800, letterSpacing:'0.2em', textTransform:'uppercase',
              }}>
                <Zap style={{ width:12, height:12 }} />
                Consulting · Training · Intelligence
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeUp}
              style={{ fontSize:'clamp(2.6rem,7vw,5.5rem)', fontWeight:900, lineHeight:1.02, letterSpacing:'-0.025em', color:'white', marginBottom:24 }}
            >
              Transform Knowledge<br />
              Into{' '}
              <span style={{
                background:'linear-gradient(135deg,#fbbf24 0%,#f59e0b 50%,#fde68a 100%)',
                WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
              }}>
                Business Excellence
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p variants={fadeUp}
              style={{ fontSize:'clamp(1rem,2vw,1.2rem)', color:'rgba(203,213,225,0.9)', fontWeight:400, lineHeight:1.7, maxWidth:680, margin:'0 auto 44px', letterSpacing:'0.005em' }}
            >
              Roshd Professional delivers strategic consulting, world-class training programs,
              and AI-grade customer satisfaction intelligence — so your organisation always
              knows exactly what to do next.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:14, marginBottom:64 }}>
              <Link to="/signup" className="hero-cta-primary">
                Get Started Free <ArrowRight style={{ width:16, height:16 }} />
              </Link>
              <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior:'smooth' })}
                className="hero-cta-ghost">
                Explore Services
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={fadeUp}>
              <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:28 }}>
                <div style={{ flex:1, height:1, background:'rgba(255,255,255,0.08)' }} />
                <span style={{ fontSize:10, color:'rgba(255,255,255,0.25)', fontWeight:800, letterSpacing:'0.25em', textTransform:'uppercase' }}>Trusted by leading organisations</span>
                <div style={{ flex:1, height:1, background:'rgba(255,255,255,0.08)' }} />
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(100px,1fr))', gap:16, maxWidth:420, margin:'0 auto' }}>
                {[
                  { n:'150+', l:'Clients Served',   icon: Users   },
                  { n:'10+',  l:'Years Experience',  icon: Award   },
                  { n:'95%',  l:'Satisfaction Rate', icon: Star    },
                ].map(({ n, l, icon: Icon }) => (
                  <div key={l} style={{ textAlign:'center' }}>
                    <div style={{ width:44, height:44, background:'rgba(245,158,11,0.12)', border:'1px solid rgba(245,158,11,0.2)', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 10px' }}>
                      <Icon style={{ width:20, height:20, color:'#fbbf24' }} />
                    </div>
                    <p style={{ fontSize:28, fontWeight:900, color:'#fbbf24', lineHeight:1 }}>{n}</p>
                    <p style={{ fontSize:11, color:'rgba(148,163,184,0.9)', fontWeight:600, marginTop:4 }}>{l}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.button
          animate={{ y: [0, 10, 0] }} transition={{ duration: 2.5, repeat: Infinity }}
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior:'smooth' })}
          style={{ position:'absolute', bottom:32, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:8, color:'rgba(255,255,255,0.25)', background:'none', border:'none', cursor:'pointer' }}
        >
          <div style={{ width:26, height:42, border:'2px solid rgba(255,255,255,0.18)', borderRadius:13, display:'flex', alignItems:'flex-start', justifyContent:'center', paddingTop:6 }}>
            <motion.div animate={{ y:[0,12,0], opacity:[1,0,1] }} transition={{ duration:2.5, repeat:Infinity }}
              style={{ width:5, height:10, background:'rgba(245,158,11,0.7)', borderRadius:3 }}
            />
          </div>
          <span style={{ fontSize:9, fontWeight:800, letterSpacing:'0.28em', textTransform:'uppercase' }}>Scroll</span>
        </motion.button>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━ SERVICES ━━━━━━━━━━━━━━━━━━ */}
      <section id="services" className="py-28" style={{ background:'#f8fafc' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <span className="chip"><Layers style={{ width:12, height:12 }} /> What We Offer</span>
              <h2 className="section-heading">Our Core Services</h2>
              <p className="section-sub">End-to-end solutions from strategic consulting to data-driven customer intelligence.</p>
            </motion.div>
          </Reveal>

          <Reveal>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:20 }}>
              {[
                { num:'01', icon: BrainCircuit, title:'Strategic Consulting',    desc:'Expert advisory to navigate complex business challenges with clarity and confidence.',     accent:'#3b82f6', bg:'#eff6ff' },
                { num:'02', icon: BookOpen,     title:'Professional Training',   desc:'Structured programs that build skills, foster growth, and deliver measurable outcomes.',   accent:'#f59e0b', bg:'#fffbeb' },
                { num:'03', icon: LineChart,    title:'Customer Intelligence',   desc:'Multi-driver satisfaction models that reveal what truly moves your customers forward.',    accent:'#10b981', bg:'#ecfdf5' },
                { num:'04', icon: Target,       title:'Performance Analytics',   desc:'Real-time dashboards that translate raw data into decisive, prioritised action plans.',    accent:'#8b5cf6', bg:'#f5f3ff' },
              ].map((s) => (
                <motion.div key={s.title} variants={fadeUp}
                  whileHover={{ y: -6 }}
                  style={{ background:'white', borderRadius:20, padding:'28px 24px', border:'1px solid #f1f5f9', boxShadow:'0 1px 3px rgba(0,0,0,0.04)', cursor:'pointer', transition:'all 0.25s', borderTop:`3px solid ${s.accent}` }}
                >
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:20 }}>
                    <div style={{ width:48, height:48, background:s.bg, borderRadius:14, display:'flex', alignItems:'center', justifyContent:'center' }}>
                      <s.icon style={{ width:22, height:22, color:s.accent }} />
                    </div>
                    <span style={{ fontSize:12, fontWeight:800, color:'#e2e8f0', letterSpacing:'0.05em' }}>{s.num}</span>
                  </div>
                  <h3 style={{ fontSize:16, fontWeight:900, color:'#0f172a', marginBottom:8 }}>{s.title}</h3>
                  <p style={{ fontSize:13.5, color:'#64748b', lineHeight:1.65, marginBottom:16 }}>{s.desc}</p>
                  <span style={{ fontSize:12, fontWeight:700, color:s.accent, display:'flex', alignItems:'center', gap:4 }}>
                    Learn more <ArrowRight style={{ width:12, height:12 }} />
                  </span>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━ STATS ━━━━━━━━━━━━━━━━━━ */}
      <section style={{ background:'linear-gradient(135deg,#0f172a 0%,#1e293b 100%)', padding:'80px 0', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)', backgroundSize:'28px 28px' }} />
        <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,rgba(245,158,11,0.4),transparent)' }} />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:32 }}>
              {[
                { icon: Users,    end:150, suffix:'+', label:'Clients Served',     color:'#60a5fa' },
                { icon: Award,    end:10,  suffix:'+', label:'Years Experience',   color:'#fbbf24' },
                { icon: BookOpen, end:50,  suffix:'+', label:'Training Programs',  color:'#34d399' },
                { icon: Star,     end:95,  suffix:'%', label:'Satisfaction Rate',  color:'#a78bfa' },
              ].map((s) => (
                <motion.div key={s.label} variants={fadeUp} style={{ textAlign:'center' }}>
                  <div style={{ width:60, height:60, background:`${s.color}18`, border:`1px solid ${s.color}30`, borderRadius:18, display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 16px' }}>
                    <s.icon style={{ width:28, height:28, color:s.color }} />
                  </div>
                  <p style={{ fontSize:48, fontWeight:900, color:s.color, lineHeight:1, marginBottom:8 }}>
                    <Counter end={s.end} suffix={s.suffix} />
                  </p>
                  <p style={{ fontSize:13, color:'rgba(148,163,184,0.85)', fontWeight:600 }}>{s.label}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
        <div style={{ position:'absolute', bottom:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,rgba(245,158,11,0.3),transparent)' }} />
      </section>

      {/* ━━━━━━━━━━━━━━━━━━ PROGRAMS ━━━━━━━━━━━━━━━━━━ */}
      <section id="programs" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <span className="chip"><BookOpen style={{ width:12, height:12 }} /> Learning Paths</span>
              <h2 className="section-heading">Featured Programs</h2>
              <p className="section-sub">World-class curricula designed for real, measurable transformation.</p>
            </motion.div>
          </Reveal>

          <Reveal>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:24 }}>
              {[
                {
                  img: PROG[0], badge:'Most Popular', badgeColor:'#92400e', badgeBg:'#fef3c7',
                  accent:'#f59e0b',
                  title:'Customer Intelligence Mastery',
                  desc:'Learn to analyze satisfaction drivers, interpret path coefficients, and build decision-ready reports for any segment.',
                  features:['Driver effect size analysis','Segment filtering & comparison','Simulation lab','Executive summaries'],
                },
                {
                  img: PROG[1], badge:'Advanced', badgeColor:'#1e40af', badgeBg:'#dbeafe',
                  accent:'#3b82f6',
                  title:'Strategic Decision Systems',
                  desc:'Build structured decision frameworks that connect data to action across all levels of management.',
                  features:['Decision logic mapping','Investment prioritization','Risk assessment','Stakeholder reporting'],
                },
                {
                  img: PROG[2], badge:'New 2026', badgeColor:'#065f46', badgeBg:'#d1fae5',
                  accent:'#10b981',
                  title:'Organisational Performance',
                  desc:'Systemise performance tracking, KPI frameworks, and continuous improvement cycles across your organisation.',
                  features:['KPI design & tracking','Branch comparison','Action planning','Progress monitoring'],
                },
              ].map((p) => (
                <motion.div key={p.title} variants={fadeUp} whileHover={{ y: -6 }}
                  style={{ background:'white', borderRadius:24, overflow:'hidden', border:'1px solid #f1f5f9', boxShadow:'0 2px 8px rgba(0,0,0,0.05)', transition:'all 0.3s' }}
                >
                  <div style={{ position:'relative', height:200, overflow:'hidden' }}>
                    <img src={p.img} alt={p.title} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.6s' }}
                      onMouseEnter={e => e.currentTarget.style.transform='scale(1.05)'}
                      onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}
                    />
                    <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }} />
                    <span style={{ position:'absolute', top:16, left:16, padding:'4px 12px', borderRadius:999, fontSize:11, fontWeight:800, background:p.badgeBg, color:p.badgeColor }}>
                      {p.badge}
                    </span>
                    <div style={{ position:'absolute', bottom:16, left:16, width:32, height:32, background:p.accent, borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center' }}>
                      <BookOpen style={{ width:15, height:15, color:'white' }} />
                    </div>
                  </div>
                  <div style={{ padding:'24px 24px 28px' }}>
                    <h3 style={{ fontSize:18, fontWeight:900, color:'#0f172a', marginBottom:8, letterSpacing:'-0.01em' }}>{p.title}</h3>
                    <p style={{ fontSize:13.5, color:'#64748b', lineHeight:1.65, marginBottom:18 }}>{p.desc}</p>
                    <ul style={{ marginBottom:20, display:'flex', flexDirection:'column', gap:8 }}>
                      {p.features.map(f => (
                        <li key={f} style={{ display:'flex', alignItems:'center', gap:10, fontSize:13, color:'#475569' }}>
                          <CheckCircle2 style={{ width:14, height:14, color:'#10b981', flexShrink:0 }} /> {f}
                        </li>
                      ))}
                    </ul>
                    <Link to="/signup" style={{ display:'inline-flex', alignItems:'center', gap:6, fontSize:13, fontWeight:800, color:p.accent, textDecoration:'none' }}>
                      Enroll Now <ArrowRight style={{ width:13, height:13 }} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━ WHY ROSHD ━━━━━━━━━━━━━━━━━━ */}
      <section id="about" style={{ background:'#f8fafc', padding:'96px 0' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center' }} className="lg-split">
            {/* Image */}
            <Reveal>
              <motion.div variants={fadeUp} style={{ position:'relative' }}>
                <div style={{ borderRadius:24, overflow:'hidden', boxShadow:'0 24px 64px rgba(0,0,0,0.12)' }}>
                  <img src={ABOUT_IMG} alt="Analytics" style={{ width:'100%', height:460, objectFit:'cover' }} />
                </div>
                <div style={{ position:'absolute', top:-16, left:-16, width:80, height:80, background:'#fbbf24', borderRadius:16, opacity:0.12, zIndex:-1 }} />
              </motion.div>
            </Reveal>

            {/* Text */}
            <Reveal>
              <motion.div variants={stagger}>
                <motion.div variants={fadeUp}>
                  <span className="chip"><Shield style={{ width:12, height:12 }} /> Why Choose Us</span>
                  <h2 className="section-heading mt-2">Where Expertise<br />Meets Execution</h2>
                </motion.div>
                <motion.p variants={fadeUp} style={{ fontSize:16, color:'#64748b', lineHeight:1.75, marginBottom:28 }}>
                  We don't just deliver reports — we deliver decisions. Our platform combines rigorous analytical methods with practical business intelligence so your team always knows exactly what to do next.
                </motion.p>
                {[
                  { icon: Shield,  title:'Evidence-Based Decisions',   desc:'Every recommendation is backed by statistical rigor — path coefficients, effect sizes, and model validity scores.',     color:'#3b82f6', bg:'#eff6ff' },
                  { icon: Globe,   title:'Segment-Level Precision',     desc:'We reveal exactly what matters for each branch, gender, and service type. No generic action plans.',                      color:'#10b981', bg:'#ecfdf5' },
                  { icon: Zap,     title:'Actionable Intelligence',     desc:'From raw data to executive decision in minutes. Our simulation lab lets you test improvements before committing.',           color:'#f59e0b', bg:'#fffbeb' },
                ].map((f) => (
                  <motion.div key={f.title} variants={fadeUp}
                    style={{ display:'flex', gap:16, padding:'18px 20px', borderRadius:16, border:'1px solid transparent', marginBottom:8, transition:'all 0.2s', cursor:'default' }}
                    whileHover={{ background:'white', borderColor:'#f1f5f9', boxShadow:'0 4px 20px rgba(0,0,0,0.06)' }}
                  >
                    <div style={{ width:44, height:44, background:f.bg, borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                      <f.icon style={{ width:20, height:20, color:f.color }} />
                    </div>
                    <div>
                      <h4 style={{ fontSize:15, fontWeight:800, color:'#0f172a', marginBottom:4 }}>{f.title}</h4>
                      <p style={{ fontSize:13, color:'#64748b', lineHeight:1.6 }}>{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━ TESTIMONIALS ━━━━━━━━━━━━━━━━━━ */}
      <section style={{ background:'white', padding:'96px 0' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <span className="chip"><Star style={{ width:12, height:12 }} /> Client Voices</span>
              <h2 className="section-heading">What Our Clients Say</h2>
            </motion.div>
          </Reveal>
          <Reveal>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:20 }}>
              {[
                { av: AVATARS[0], name:'Mohammed Al-Rashid', role:'Operations Director, Riyadh',  text:'Roshd Professional transformed how we make CX decisions. We stopped guessing and started acting on evidence. The simulation lab alone saved us from two costly investments.' },
                { av: AVATARS[1], name:'Sara Al-Mansouri',   role:'Quality Manager, Jeddah',      text:'The segment-level insight was eye-opening. We discovered that what drives satisfaction in Jeddah is completely different from Riyadh — the platform made that crystal clear.' },
                { av: AVATARS[2], name:'Khalid Al-Fahad',    role:'GM After-Sales, Dammam',       text:'Before Roshd, we invested in speed improvements because the score was low. Their analysis showed near-zero impact. We redirected budget and saw real results.' },
              ].map((t) => (
                <motion.div key={t.name} variants={fadeUp}
                  style={{ background:'#f8fafc', borderRadius:22, padding:'28px 28px 28px', border:'1px solid #f1f5f9', position:'relative', transition:'all 0.25s' }}
                  whileHover={{ boxShadow:'0 12px 40px rgba(0,0,0,0.09)', background:'white' }}
                >
                  <Quote style={{ position:'absolute', top:24, right:24, width:28, height:28, color:'#e2e8f0' }} />
                  {/* Stars */}
                  <div style={{ display:'flex', gap:2, marginBottom:18 }}>
                    {[...Array(5)].map((_, j) => <Star key={j} style={{ width:14, height:14, fill:'#fbbf24', color:'#fbbf24' }} />)}
                  </div>
                  <p style={{ fontSize:14, color:'#475569', lineHeight:1.75, marginBottom:22, fontStyle:'italic' }}>"{t.text}"</p>
                  <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                    <img src={t.av} alt={t.name} style={{ width:44, height:44, borderRadius:12, objectFit:'cover' }} />
                    <div>
                      <p style={{ fontSize:14, fontWeight:800, color:'#0f172a' }}>{t.name}</p>
                      <p style={{ fontSize:12, color:'#94a3b8', fontWeight:500 }}>{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━ CTA ━━━━━━━━━━━━━━━━━━ */}
      <section style={{ background:'linear-gradient(135deg,#0f172a 0%,#1e293b 100%)', padding:'100px 0', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)', backgroundSize:'28px 28px' }} />
        <motion.div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:600, height:600, background:'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)', pointerEvents:'none' }}
          animate={{ scale:[1,1.2,1] }} transition={{ duration:8, repeat:Infinity, ease:'easeInOut' }}
        />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center" style={{ zIndex:1 }}>
          <Reveal>
            <motion.div variants={fadeUp}>
              <span className="chip" style={{ background:'rgba(245,158,11,0.12)', color:'#fcd34d', borderColor:'rgba(245,158,11,0.3)' }}>
                <Zap style={{ width:12, height:12 }} /> Get Started Today
              </span>
              <h2 style={{ fontSize:'clamp(2rem,5vw,3.5rem)', fontWeight:900, color:'white', letterSpacing:'-0.025em', lineHeight:1.1, margin:'20px 0 20px' }}>
                Ready to Transform<br />Your Business?
              </h2>
              <p style={{ fontSize:18, color:'rgba(148,163,184,0.85)', marginBottom:44, lineHeight:1.7, maxWidth:560, margin:'0 auto 44px' }}>
                Join hundreds of organisations using Roshd Professional to make smarter, faster, evidence-based decisions.
              </p>
              <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:14 }}>
                <Link to="/signup" className="hero-cta-primary">
                  Create Free Account <ArrowRight style={{ width:16, height:16 }} />
                </Link>
                <Link to="/login" className="hero-cta-ghost">
                  Sign In
                </Link>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
