import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sliders, Save, RotateCcw, ChevronDown, ChevronUp,
  BarChart2, MapPin, TrendingUp, Activity,
  CheckCircle, AlertTriangle, Info, Palette, Database,
  Zap, Star, Target, Users, Settings2, Eye, EyeOff
} from 'lucide-react'
import toast from 'react-hot-toast'

const STORAGE_KEY = 'roshd_dashboard_config'
const CHANNEL_NAME = 'roshd_config'

const DEFAULTS = {
  overallScore:     3.8,
  explanatoryPower: 72,
  topDriver:        'Quality',
  wasteRisk:        'Speed',
  period:           'Q2 2026',
  drivers: [
    { name:'Quality',       avg:4.1, path:0.68, impact:0.32, decision:'Invest'   },
    { name:'Communication', avg:3.5, path:0.41, impact:0.17, decision:'Optimize' },
    { name:'Price',         avg:3.2, path:0.29, impact:0.13, decision:'Optimize' },
    { name:'Advisor',       avg:3.8, path:0.36, impact:0.10, decision:'Optimize' },
    { name:'Speed',         avg:2.9, path:0.04, impact:0.01, decision:'Avoid'    },
  ],
  segments: [
    { name:'Riyadh',  score:3.7, r2:74, top:'Quality',       count:89 },
    { name:'Jeddah',  score:3.4, r2:69, top:'Communication', count:67 },
    { name:'Dammam',  score:3.2, r2:63, top:'Price',         count:53 },
  ],
  invest:   ['Fund quality consistency improvements.','Audit first-time-right and rework patterns.','Make quality the main CX improvement program.'],
  optimize: ['Improve customer communication discipline.','Train advisors on clear timelines.'],
  avoid:    ['Do not add speed staff without data.','Defer price promotions — low effect size.'],
  modelAlpha: 0.88, modelCR: 0.91, modelAVE: 0.64,
  accentColor: '#f59e0b',
}

const DECISIONS  = ['Invest', 'Optimize', 'Avoid']
const TABS = [
  { id:'kpi',     label:'KPIs',           icon:Star    },
  { id:'drivers', label:'Drivers',        icon:BarChart2},
  { id:'segments',label:'Segments',       icon:MapPin  },
  { id:'recs',    label:'Recommendations',icon:TrendingUp},
  { id:'model',   label:'Model Quality',  icon:Activity},
  { id:'theme',   label:'Theme & Colors', icon:Palette },
]

function broadcast(cfg) {
  try {
    const ch = new BroadcastChannel(CHANNEL_NAME)
    ch.postMessage({ type:'CONFIG_UPDATE', cfg })
    ch.close()
  } catch {}
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cfg)) } catch {}
}

/* ── reusable field components ── */
function Label({ children }) {
  return <label style={{ display:'block', fontSize:10, fontWeight:800, letterSpacing:'0.16em', textTransform:'uppercase', color:'#64748b', marginBottom:5 }}>{children}</label>
}

function TInput({ value, onChange, type='text', ...rest }) {
  const [focus, setFocus] = useState(false)
  return (
    <input type={type} value={value}
      onChange={e => onChange(type==='number' ? +e.target.value : e.target.value)}
      onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
      style={{ width:'100%', padding:'8px 12px', borderRadius:10, border:`1.5px solid ${focus?'#f59e0b':'#e2e8f0'}`, fontSize:13, fontWeight:600, color:'#0f172a', background:'#f8fafc', outline:'none', transition:'border-color 0.15s' }}
      {...rest}
    />
  )
}

function TSelect({ value, onChange, options }) {
  return (
    <select value={value} onChange={e=>onChange(e.target.value)}
      style={{ width:'100%', padding:'8px 12px', borderRadius:10, border:'1.5px solid #e2e8f0', fontSize:13, fontWeight:600, color:'#0f172a', background:'#f8fafc', outline:'none' }}
    >
      {options.map(o=><option key={o}>{o}</option>)}
    </select>
  )
}

function Field({ label, children, span=1 }) {
  return (
    <div style={{ gridColumn:`span ${span}` }}>
      {label && <Label>{label}</Label>}
      {children}
    </div>
  )
}

/* ── individual tab panels ── */
function KpiPanel({ cfg, set }) {
  return (
    <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:14 }}>
      <Field label="Overall Satisfaction (0–5)">
        <TInput type="number" value={cfg.overallScore} onChange={v=>set('overallScore',v)} min={0} max={5} step={0.1}/>
      </Field>
      <Field label="Explanatory Power R² (%)">
        <TInput type="number" value={cfg.explanatoryPower} onChange={v=>set('explanatoryPower',v)} min={0} max={100}/>
      </Field>
      <Field label="Top Driver">
        <TSelect value={cfg.topDriver} onChange={v=>set('topDriver',v)} options={cfg.drivers.map(d=>d.name)}/>
      </Field>
      <Field label="Waste Risk Driver">
        <TSelect value={cfg.wasteRisk} onChange={v=>set('wasteRisk',v)} options={cfg.drivers.map(d=>d.name)}/>
      </Field>
      <Field label="Period Label">
        <TInput value={cfg.period} onChange={v=>set('period',v)} placeholder="Q2 2026"/>
      </Field>
    </div>
  )
}

function DriversPanel({ cfg, setDriver }) {
  const COLORS = ['#0f172a','#f59e0b','#3b82f6','#8b5cf6','#ef4444']
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
      {cfg.drivers.map((d,i)=>(
        <div key={i} style={{ background:'#f8fafc', borderRadius:14, padding:'14px 16px', border:`2px solid ${COLORS[i%5]}18` }}>
          <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:12 }}>
            <div style={{ width:10, height:10, borderRadius:'50%', background:COLORS[i%5], flexShrink:0 }}/>
            <p style={{ fontSize:12, fontWeight:900, color:'#0f172a', margin:0, letterSpacing:'0.08em', textTransform:'uppercase' }}>{d.name}</p>
            <span style={{ marginLeft:'auto', fontSize:10, fontWeight:800, color: d.decision==='Invest'?'#0f172a':d.decision==='Avoid'?'#dc2626':'#d97706', background: d.decision==='Invest'?'#f1f5f9':d.decision==='Avoid'?'#fef2f2':'#fef3c7', padding:'3px 10px', borderRadius:99 }}>{d.decision}</span>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(120px,1fr))', gap:10 }}>
            <Field label="Avg Score"><TInput type="number" value={d.avg} onChange={v=>setDriver(i,'avg',v)} min={0} max={5} step={0.01}/></Field>
            <Field label="Path Coeff."><TInput type="number" value={d.path} onChange={v=>setDriver(i,'path',v)} min={0} max={1} step={0.01}/></Field>
            <Field label="Impact"><TInput type="number" value={d.impact} onChange={v=>setDriver(i,'impact',v)} min={0} max={1} step={0.001}/></Field>
            <Field label="Decision"><TSelect value={d.decision} onChange={v=>setDriver(i,'decision',v)} options={DECISIONS}/></Field>
          </div>
        </div>
      ))}
    </div>
  )
}

function SegmentsPanel({ cfg, setSegment }) {
  const COLORS = ['#f59e0b','#3b82f6','#10b981']
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
      {cfg.segments.map((s,i)=>(
        <div key={i} style={{ background:'#f8fafc', borderRadius:14, padding:'14px 16px', borderLeft:`4px solid ${COLORS[i%3]}` }}>
          <p style={{ fontSize:12, fontWeight:900, color:'#0f172a', margin:'0 0 12px', textTransform:'uppercase', letterSpacing:'0.08em' }}>{s.name}</p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(130px,1fr))', gap:10 }}>
            <Field label="Score"><TInput type="number" value={s.score} onChange={v=>setSegment(i,'score',v)} min={0} max={5} step={0.1}/></Field>
            <Field label="R² (%)"><TInput type="number" value={s.r2} onChange={v=>setSegment(i,'r2',v)} min={0} max={100}/></Field>
            <Field label="Top Driver"><TSelect value={s.top} onChange={v=>setSegment(i,'top',v)} options={cfg.drivers.map(d=>d.name)}/></Field>
            <Field label="Count"><TInput type="number" value={s.count} onChange={v=>setSegment(i,'count',v)} min={0}/></Field>
          </div>
        </div>
      ))}
    </div>
  )
}

function RecsPanel({ cfg, setCfg }) {
  const setItem   = (k,i,v) => { const a=[...cfg[k]]; a[i]=v; setCfg(c=>({...c,[k]:a})) }
  const addItem   = (k)     => setCfg(c=>({...c,[k]:[...c[k],'']}))
  const removeItem= (k,i)   => setCfg(c=>({...c,[k]:c[k].filter((_,idx)=>idx!==i)}))
  const CARDS = [
    { key:'invest',  label:'🚀 Invest Now',       bg:'#0f172a', col:'#fff',    colMuted:'rgba(255,255,255,0.5)' },
    { key:'optimize',label:'⚡ Optimize',          bg:'#f0fdf4', col:'#14532d', colMuted:'#86efac' },
    { key:'avoid',   label:'⛔ Avoid / Defer',    bg:'#fef2f2', col:'#991b1b', colMuted:'#fca5a5' },
  ]
  return (
    <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:14 }}>
      {CARDS.map(({key,label,bg,col,colMuted})=>(
        <div key={key} style={{ background:bg, borderRadius:16, padding:16 }}>
          <p style={{ fontSize:12, fontWeight:900, color:col, marginBottom:12 }}>{label}</p>
          {cfg[key].map((item,i)=>(
            <div key={i} style={{ display:'flex', gap:6, marginBottom:8 }}>
              <input value={item} onChange={e=>setItem(key,i,e.target.value)}
                style={{ flex:1, padding:'7px 10px', borderRadius:8, border:'1.5px solid rgba(255,255,255,0.15)', fontSize:11, fontWeight:500, color:col, background:'rgba(255,255,255,0.12)', outline:'none' }}
              />
              <button onClick={()=>removeItem(key,i)}
                style={{ padding:'7px 9px', borderRadius:8, border:'none', background:'rgba(239,68,68,0.18)', color:'#dc2626', cursor:'pointer', fontSize:14, fontWeight:900 }}>×</button>
            </div>
          ))}
          <button onClick={()=>addItem(key)}
            style={{ width:'100%', padding:'8px', borderRadius:8, border:`1.5px dashed ${colMuted}`, background:'transparent', color:col, fontSize:11, fontWeight:700, cursor:'pointer', marginTop:4 }}>+ Add</button>
        </div>
      ))}
    </div>
  )
}

function ModelPanel({ cfg, set }) {
  return (
    <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))', gap:14 }}>
      <Field label="Cronbach's Alpha (0–1)"><TInput type="number" value={cfg.modelAlpha} onChange={v=>set('modelAlpha',v)} min={0} max={1} step={0.01}/></Field>
      <Field label="Composite Reliability (CR)"><TInput type="number" value={cfg.modelCR} onChange={v=>set('modelCR',v)} min={0} max={1} step={0.01}/></Field>
      <Field label="AVE"><TInput type="number" value={cfg.modelAVE} onChange={v=>set('modelAVE',v)} min={0} max={1} step={0.01}/></Field>
    </div>
  )
}

function ThemePanel({ cfg, set }) {
  const PRESETS = [
    { label:'Gold',    color:'#f59e0b' },
    { label:'Blue',    color:'#3b82f6' },
    { label:'Emerald', color:'#10b981' },
    { label:'Violet',  color:'#8b5cf6' },
    { label:'Rose',    color:'#f43f5e' },
    { label:'Dark',    color:'#0f172a' },
  ]
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
      <div>
        <Label>Quick Presets</Label>
        <div style={{ display:'flex', gap:10, flexWrap:'wrap', marginTop:6 }}>
          {PRESETS.map(p=>(
            <button key={p.color} onClick={()=>set('accentColor',p.color)}
              style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:6, padding:'12px 16px', borderRadius:14, border:`2px solid ${cfg.accentColor===p.color?p.color:'#e2e8f0'}`, background: cfg.accentColor===p.color?`${p.color}10`:'white', cursor:'pointer', transition:'all 0.15s' }}>
              <div style={{ width:32, height:32, borderRadius:8, background:p.color, boxShadow:`0 4px 12px ${p.color}40` }}/>
              <span style={{ fontSize:10, fontWeight:800, color:'#64748b' }}>{p.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div style={{ display:'flex', gap:14, alignItems:'flex-end', flexWrap:'wrap' }}>
        <div>
          <Label>Color Picker</Label>
          <input type="color" value={cfg.accentColor} onChange={e=>set('accentColor',e.target.value)}
            style={{ width:56, height:46, borderRadius:12, border:'2px solid #e2e8f0', cursor:'pointer', padding:3 }}
          />
        </div>
        <div style={{ flex:1, minWidth:160 }}>
          <Label>Hex Value</Label>
          <TInput value={cfg.accentColor} onChange={v=>set('accentColor',v)} placeholder="#f59e0b"/>
        </div>
      </div>
      {/* Preview swatch */}
      <div style={{ background:'#0f172a', borderRadius:16, padding:20 }}>
        <p style={{ fontSize:10, fontWeight:800, color:'rgba(255,255,255,0.4)', letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:12 }}>Preview on Dark Sidebar</p>
        <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
          <div style={{ padding:'9px 18px', borderRadius:10, background:cfg.accentColor, color:'#0f172a', fontSize:12, fontWeight:800 }}>Active Nav Item</div>
          <div style={{ padding:'9px 18px', borderRadius:10, background:`${cfg.accentColor}18`, border:`1px solid ${cfg.accentColor}30`, color:cfg.accentColor, fontSize:12, fontWeight:700 }}>Badge</div>
          <div style={{ padding:'9px 18px', borderRadius:10, background:'rgba(255,255,255,0.06)', color:`${cfg.accentColor}`, fontSize:12, fontWeight:700 }}>Accent Text</div>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════ */
export default function DashboardConfig() {
  const [cfg,    setCfg]   = useState(() => {
    try { const s=localStorage.getItem(STORAGE_KEY); return s?JSON.parse(s):DEFAULTS } catch { return DEFAULTS }
  })
  const [activeTab, setTab] = useState('kpi')
  const [saved,     setSaved] = useState(false)
  const [autoSync,  setAutoSync] = useState(true)

  const set = useCallback((key, val) => {
    setCfg(c => {
      const next = { ...c, [key]: val }
      if (autoSync) broadcast(next)
      return next
    })
  }, [autoSync])

  const setDriver = useCallback((i, key, val) => {
    setCfg(c => {
      const drivers = [...c.drivers]
      drivers[i] = { ...drivers[i], [key]: ['avg','path','impact'].includes(key) ? +val : val }
      const next = { ...c, drivers }
      if (autoSync) broadcast(next)
      return next
    })
  }, [autoSync])

  const setSegment = useCallback((i, key, val) => {
    setCfg(c => {
      const segments = [...c.segments]
      segments[i] = { ...segments[i], [key]: ['score','r2','count'].includes(key) ? +val : val }
      const next = { ...c, segments }
      if (autoSync) broadcast(next)
      return next
    })
  }, [autoSync])

  const setCfgAndSync = useCallback((updater) => {
    setCfg(c => {
      const next = typeof updater === 'function' ? updater(c) : updater
      if (autoSync) broadcast(next)
      return next
    })
  }, [autoSync])

  const handleSave = () => {
    broadcast(cfg)
    setSaved(true)
    toast.success('Config saved & pushed to client dashboard!')
    setTimeout(()=>setSaved(false), 3000)
  }

  const handleReset = () => {
    setCfg(DEFAULTS)
    broadcast(DEFAULTS)
    localStorage.removeItem(STORAGE_KEY)
    toast.success('Reset to defaults')
  }

  const stagger = { show:{ transition:{ staggerChildren:0.05 } } }
  const fadeUp  = { hidden:{ opacity:0, y:10 }, show:{ opacity:1, y:0, transition:{ duration:0.3, ease:[0.22,1,0.36,1] } } }

  const currentTab = TABS.find(t=>t.id===activeTab)

  return (
    <motion.div variants={stagger} initial="hidden" animate="show" style={{ maxWidth:900, margin:'0 auto' }}>

      {/* ── Header ── */}
      <motion.div variants={fadeUp} style={{ marginBottom:24 }}>
        <div style={{ background:'linear-gradient(135deg,#0a0f1e 0%,#1a2744 60%,#0f172a 100%)', borderRadius:20, padding:'24px 28px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:16 }}>
          <div style={{ display:'flex', alignItems:'center', gap:14 }}>
            <div style={{ width:46, height:46, borderRadius:14, background:'rgba(201,168,76,0.15)', border:'1px solid rgba(201,168,76,0.25)', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <Sliders style={{ width:20, height:20, color:'#c9a84c' }}/>
            </div>
            <div>
              <h1 style={{ fontSize:20, fontWeight:900, color:'white', margin:0 }}>Dashboard Configuration</h1>
              <p style={{ fontSize:11, color:'rgba(255,255,255,0.45)', margin:'3px 0 0', fontWeight:500 }}>All changes push instantly to the client dashboard</p>
            </div>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:10, flexWrap:'wrap' }}>
            {/* Auto-sync toggle */}
            <button onClick={()=>setAutoSync(s=>!s)}
              style={{ display:'inline-flex', alignItems:'center', gap:7, padding:'8px 14px', borderRadius:10, border:`1.5px solid ${autoSync?'rgba(52,211,153,0.3)':'rgba(255,255,255,0.15)'}`, background: autoSync?'rgba(52,211,153,0.1)':'rgba(255,255,255,0.06)', color: autoSync?'#34d399':'rgba(255,255,255,0.5)', fontSize:11, fontWeight:800, cursor:'pointer', letterSpacing:'0.05em' }}>
              {autoSync ? <Zap style={{ width:13, height:13 }}/> : <EyeOff style={{ width:13, height:13 }}/>}
              {autoSync ? 'Live Sync ON' : 'Live Sync OFF'}
            </button>
            <button onClick={handleReset}
              style={{ display:'inline-flex', alignItems:'center', gap:7, padding:'9px 16px', borderRadius:10, border:'1.5px solid rgba(255,255,255,0.12)', background:'rgba(255,255,255,0.06)', color:'rgba(255,255,255,0.6)', fontSize:12, fontWeight:700, cursor:'pointer' }}>
              <RotateCcw style={{ width:13, height:13 }}/> Reset
            </button>
            <button onClick={handleSave}
              style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'9px 20px', borderRadius:10, border:'none', background: saved?'#10b981':'linear-gradient(135deg,#c9a84c,#b8963e)', color: saved?'white':'#0f172a', fontSize:12, fontWeight:900, cursor:'pointer', boxShadow:'0 4px 14px rgba(201,168,76,0.4)', transition:'all 0.3s' }}>
              {saved ? <><CheckCircle style={{ width:14, height:14 }}/> Saved!</> : <><Save style={{ width:13, height:13 }}/> Save & Push</>}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Live sync indicator */}
      {autoSync && (
        <motion.div variants={fadeUp}
          style={{ display:'flex', alignItems:'center', gap:8, background:'#f0fdf4', border:'1px solid #bbf7d0', borderRadius:12, padding:'9px 14px', marginBottom:16 }}>
          <div style={{ width:8, height:8, borderRadius:'50%', background:'#10b981' }} className="animate-pulse"/>
          <span style={{ fontSize:11, color:'#166534', fontWeight:700 }}>Live sync active — every change is pushed to the client dashboard in real-time. No page reload needed.</span>
        </motion.div>
      )}

      {/* ── Tab bar ── */}
      <motion.div variants={fadeUp}
        style={{ display:'flex', gap:4, background:'white', borderRadius:16, padding:6, border:'1px solid #f1f5f9', boxShadow:'0 1px 4px rgba(0,0,0,0.05)', marginBottom:16, flexWrap:'wrap' }}>
        {TABS.map(t=>{
          const active = t.id===activeTab
          return (
            <button key={t.id} onClick={()=>setTab(t.id)}
              style={{ display:'flex', alignItems:'center', gap:7, padding:'9px 16px', borderRadius:10, border:'none', cursor:'pointer', fontSize:12, fontWeight: active?800:600, color: active?'#0f172a':'#64748b', background: active?'#f59e0b':'transparent', transition:'all 0.15s', boxShadow: active?'0 2px 8px rgba(245,158,11,0.25)':'none', flex:'1 1 auto', justifyContent:'center', minWidth:80 }}>
              <t.icon style={{ width:13, height:13 }}/>
              {t.label}
            </button>
          )
        })}
      </motion.div>

      {/* ── Tab content ── */}
      <AnimatePresence mode="wait">
        <motion.div key={activeTab}
          initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }}
          transition={{ duration:0.2 }}
          style={{ background:'white', borderRadius:20, border:'1px solid #f1f5f9', padding:24, boxShadow:'0 1px 4px rgba(0,0,0,0.05)', minHeight:300 }}>

          <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20, paddingBottom:16, borderBottom:'1px solid #f1f5f9' }}>
            <div style={{ width:36, height:36, borderRadius:10, background:'#fef3c7', display:'flex', alignItems:'center', justifyContent:'center' }}>
              {currentTab && <currentTab.icon style={{ width:16, height:16, color:'#d97706' }}/>}
            </div>
            <div>
              <h2 style={{ fontSize:15, fontWeight:900, color:'#0f172a', margin:0 }}>{currentTab?.label}</h2>
              <p style={{ fontSize:11, color:'#94a3b8', margin:0, fontWeight:500 }}>
                {activeTab==='kpi'      && 'Core dashboard KPI values shown at the top'}
                {activeTab==='drivers'  && 'Driver ranking, path coefficients, and effect sizes'}
                {activeTab==='segments' && 'Per-branch performance metrics and scores'}
                {activeTab==='recs'     && 'Invest / Optimize / Avoid recommendation lists'}
                {activeTab==='model'    && 'Statistical model quality indicators'}
                {activeTab==='theme'    && 'Accent color applied across the client dashboard'}
              </p>
            </div>
          </div>

          {activeTab==='kpi'      && <KpiPanel      cfg={cfg} set={set}/>}
          {activeTab==='drivers'  && <DriversPanel  cfg={cfg} setDriver={setDriver}/>}
          {activeTab==='segments' && <SegmentsPanel cfg={cfg} setSegment={setSegment}/>}
          {activeTab==='recs'     && <RecsPanel     cfg={cfg} setCfg={setCfgAndSync}/>}
          {activeTab==='model'    && <ModelPanel    cfg={cfg} set={set}/>}
          {activeTab==='theme'    && <ThemePanel    cfg={cfg} set={set}/>}
        </motion.div>
      </AnimatePresence>

      {/* Sticky bottom bar */}
      <div style={{ position:'sticky', bottom:0, background:'rgba(255,255,255,0.96)', backdropFilter:'blur(12px)', borderTop:'1px solid #e2e8f0', padding:'12px 0', marginTop:16, display:'flex', alignItems:'center', justifyContent:'space-between', gap:16 }}>
        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
          <Database style={{ width:14, height:14, color:'#94a3b8' }}/>
          <span style={{ fontSize:11, color:'#94a3b8', fontWeight:600 }}>localStorage · BroadcastChannel · real-time push</span>
        </div>
        <button onClick={handleSave}
          style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'10px 22px', borderRadius:12, border:'none', background: saved?'#10b981':'linear-gradient(135deg,#f59e0b,#d97706)', color: saved?'white':'#0f172a', fontSize:13, fontWeight:900, cursor:'pointer', boxShadow:'0 4px 14px rgba(245,158,11,0.3)', transition:'all 0.3s' }}>
          {saved ? <><CheckCircle style={{ width:15, height:15 }}/> Saved!</> : <><Save style={{ width:15, height:15 }}/> Save & Push to Client</>}
        </button>
      </div>

    </motion.div>
  )
}
