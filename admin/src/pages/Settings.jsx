import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Palette, Save, RefreshCw, CheckCircle,
  Globe, Shield, Database, Zap,
  ChevronDown, ChevronUp,
  Navigation, Layout, Square, Monitor, BarChart2
} from 'lucide-react'
import toast from 'react-hot-toast'
import api from '../api/axios'

/* ── Storage / Broadcast ── */
const THEME_KEY    = 'roshd_theme_config'
const CHANNEL_NAME = 'roshd_theme'

const THEME_DEFAULTS = {
  /* ─ Client Dashboard ─ */
  cd_sidebar_bg:          '#0f172a',
  cd_sidebar_accent:      '#f59e0b',
  cd_sidebar_text:        '#ffffff',
  cd_page_bg:             '#f4f6f9',
  cd_header_bg:           '#ffffff',
  cd_header_border:       '#e2e8f0',
  cd_tab_active_bg:       '#f59e0b',
  cd_tab_active_text:     '#0f172a',
  cd_export_bg:           '#0f172a',
  cd_export_text:         '#ffffff',
  cd_kpi_satisfaction:    '#fef3c7',
  cd_kpi_power:           '#ede9fe',
  cd_kpi_driver:          '#d1fae5',
  cd_kpi_risk:            '#fee2e2',
  cd_insight_badge_bg:    '#f59e0b',
  cd_nav_active_bg:       '#f59e0b',
  /* ─ Admin Panel ─ */
  ap_sidebar_bg:          '#0a0f1e',
  ap_sidebar_accent:      '#f59e0b',
  ap_header_bg:           '#ffffff',
  ap_page_bg:             '#f0f2f5',
}

const COMPONENT_GROUPS = [
  {
    id: 'sidebar',
    label: 'Client Sidebar',
    icon: Navigation,
    color: '#f59e0b',
    description: 'Left navigation panel on the client dashboard',
    preview: (t) => (
      <div style={{ width:90, borderRadius:10, overflow:'hidden', boxShadow:'0 4px 16px rgba(0,0,0,0.2)', flexShrink:0 }}>
        <div style={{ background:t.cd_sidebar_bg, padding:'8px 6px', height:110, display:'flex', flexDirection:'column', gap:4 }}>
          <div style={{ padding:'3px 6px', borderRadius:4 }}>
            <div style={{ fontSize:6, fontWeight:900, color:t.cd_sidebar_text, letterSpacing:'0.12em' }}>ROSHD</div>
            <div style={{ fontSize:4, color:t.cd_sidebar_accent, letterSpacing:'0.2em', fontWeight:800 }}>PROFESSIONAL</div>
          </div>
          <div style={{ height:1, background:'rgba(255,255,255,0.08)', margin:'1px 0' }}/>
          {['Executive','Drivers','Segments'].map((item,i)=>(
            <div key={item} style={{ padding:'4px 6px', borderRadius:4, background: i===0 ? t.cd_nav_active_bg : 'transparent', display:'flex', alignItems:'center', gap:4 }}>
              <div style={{ width:4, height:4, borderRadius:'50%', background: i===0 ? t.cd_sidebar_bg : 'rgba(255,255,255,0.3)' }}/>
              <span style={{ fontSize:5, fontWeight: i===0?900:600, color: i===0 ? t.cd_sidebar_bg : 'rgba(255,255,255,0.5)' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    fields: [
      { key:'cd_sidebar_bg',      label:'Background',           hint:'Dark navy base' },
      { key:'cd_sidebar_accent',  label:'Accent / Active Color',hint:'Nav item highlight' },
      { key:'cd_sidebar_text',    label:'Text Color',           hint:'Brand name text' },
      { key:'cd_nav_active_bg',   label:'Active Nav Background',hint:'Selected nav item fill' },
    ],
  },
  {
    id: 'header',
    label: 'Client Header',
    icon: Layout,
    color: '#3b82f6',
    description: 'Top bar with title, filters, and export button',
    preview: (t) => (
      <div style={{ width:220, borderRadius:10, overflow:'hidden', boxShadow:'0 2px 12px rgba(0,0,0,0.1)', flexShrink:0 }}>
        <div style={{ background:t.cd_header_bg, borderBottom:`1px solid ${t.cd_header_border}`, padding:'8px 10px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <div>
            <div style={{ fontSize:5, color:'#94a3b8', fontWeight:800, letterSpacing:'0.15em' }}>DECISION SYSTEM · Q2 2026</div>
            <div style={{ fontSize:8, fontWeight:900, color:'#0f172a', marginTop:2 }}>Customer Satisfaction Engine</div>
          </div>
          <div style={{ background:t.cd_export_bg, color:t.cd_export_text, fontSize:5, fontWeight:900, padding:'4px 8px', borderRadius:5 }}>Export</div>
        </div>
        <div style={{ background:'#f8fafc', padding:'6px 10px', display:'flex', gap:4 }}>
          {['All Branches','All Genders','All Services'].map(f=>(
            <div key={f} style={{ background:'white', border:'1px solid #e2e8f0', borderRadius:4, padding:'2px 5px', fontSize:4, fontWeight:700, color:'#475569' }}>{f}</div>
          ))}
        </div>
      </div>
    ),
    fields: [
      { key:'cd_header_bg',     label:'Header Background', hint:'Top bar fill' },
      { key:'cd_header_border', label:'Header Border',     hint:'Bottom divider line' },
      { key:'cd_export_bg',     label:'Export Button Background', hint:'Print / export CTA' },
      { key:'cd_export_text',   label:'Export Button Text',       hint:'Button label color' },
    ],
  },
  {
    id: 'tabs',
    label: 'Tab Navigation',
    icon: Square,
    color: '#8b5cf6',
    description: 'Module tabs bar below the header (Executive, Drivers, etc.)',
    preview: (t) => (
      <div style={{ background:'white', borderRadius:10, padding:'8px 10px', boxShadow:'0 2px 12px rgba(0,0,0,0.08)', flexShrink:0 }}>
        <div style={{ display:'flex', gap:4 }}>
          {['Executive','Drivers','Effect Size','Segments'].map((tab,i)=>(
            <div key={tab} style={{ padding:'5px 8px', borderRadius:6, background: i===0?t.cd_tab_active_bg:'transparent', fontSize:5, fontWeight: i===0?900:700, color: i===0?t.cd_tab_active_text:'#94a3b8', whiteSpace:'nowrap' }}>{tab}</div>
          ))}
        </div>
      </div>
    ),
    fields: [
      { key:'cd_tab_active_bg',   label:'Active Tab Background', hint:'Selected module tab' },
      { key:'cd_tab_active_text', label:'Active Tab Text',       hint:'Selected tab label' },
    ],
  },
  {
    id: 'kpi',
    label: 'KPI Cards',
    icon: BarChart2,
    color: '#10b981',
    description: 'Four metric cards at the top of the dashboard',
    preview: (t) => (
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:5, flexShrink:0 }}>
        {[
          { label:'Satisfaction', bg:t.cd_kpi_satisfaction, val:'3.8/5' },
          { label:'Power',        bg:t.cd_kpi_power,        val:'72%'  },
          { label:'Top Driver',   bg:t.cd_kpi_driver,       val:'Quality' },
          { label:'Waste Risk',   bg:t.cd_kpi_risk,         val:'Speed'   },
        ].map(k=>(
          <div key={k.label} style={{ background:k.bg, borderRadius:8, padding:'7px 8px', minWidth:68 }}>
            <div style={{ fontSize:5, color:'#64748b', fontWeight:800, textTransform:'uppercase', marginBottom:3 }}>{k.label}</div>
            <div style={{ fontSize:9, fontWeight:900, color:'#0f172a' }}>{k.val}</div>
          </div>
        ))}
      </div>
    ),
    fields: [
      { key:'cd_kpi_satisfaction', label:'KPI — Overall Satisfaction', hint:'Amber / yellow gradient' },
      { key:'cd_kpi_power',        label:'KPI — Explanatory Power',    hint:'Purple / violet gradient' },
      { key:'cd_kpi_driver',       label:'KPI — Top Driver',           hint:'Green gradient' },
      { key:'cd_kpi_risk',         label:'KPI — Waste Risk',           hint:'Red / pink gradient' },
    ],
  },
  {
    id: 'page',
    label: 'Page Layout',
    icon: Monitor,
    color: '#6366f1',
    description: 'Overall page and content area background',
    preview: (t) => (
      <div style={{ background:t.cd_page_bg, borderRadius:10, padding:10, width:120, height:70, display:'flex', gap:6, boxShadow:'0 2px 12px rgba(0,0,0,0.1)', flexShrink:0 }}>
        <div style={{ width:28, background:t.cd_sidebar_bg, borderRadius:6, flexShrink:0 }}/>
        <div style={{ flex:1, display:'flex', flexDirection:'column', gap:4 }}>
          <div style={{ height:10, background:'white', borderRadius:4 }}/>
          <div style={{ flex:1, background:'white', borderRadius:4, opacity:0.7 }}/>
        </div>
      </div>
    ),
    fields: [
      { key:'cd_page_bg', label:'Page Background', hint:'Main content area fill' },
    ],
  },
  {
    id: 'insight',
    label: 'Insight Engine Badge',
    icon: Zap,
    color: '#f59e0b',
    description: '"Insight Engine" badge in the client sidebar',
    preview: (t) => (
      <div style={{ background:'#0f172a', borderRadius:10, padding:'12px 14px', flexShrink:0 }}>
        <div style={{ display:'inline-flex', alignItems:'center', gap:5, background:`${t.cd_insight_badge_bg}12`, border:`1px solid ${t.cd_insight_badge_bg}30`, borderRadius:8, padding:'6px 10px' }}>
          <div style={{ width:8, height:8, borderRadius:'50%', background:t.cd_insight_badge_bg }}/>
          <span style={{ fontSize:8, fontWeight:900, letterSpacing:'0.12em', color:t.cd_insight_badge_bg }}>INSIGHT ENGINE</span>
        </div>
      </div>
    ),
    fields: [
      { key:'cd_insight_badge_bg', label:'Badge Accent Color', hint:'Insight Engine badge glow' },
    ],
  },
  {
    id: 'admin',
    label: 'Admin Panel',
    icon: Shield,
    color: '#ef4444',
    description: 'Colors for the admin sidebar and page background',
    preview: (t) => (
      <div style={{ display:'flex', gap:6, flexShrink:0 }}>
        <div style={{ width:60, height:90, borderRadius:10, background:t.ap_sidebar_bg, padding:'6px 5px', boxShadow:'0 4px 16px rgba(0,0,0,0.25)', display:'flex', flexDirection:'column', gap:3 }}>
          <div style={{ fontSize:5, fontWeight:900, color:'white', letterSpacing:'0.12em' }}>ROSHD</div>
          <div style={{ fontSize:4, color:t.ap_sidebar_accent, letterSpacing:'0.2em', fontWeight:800 }}>PROFESSIONAL</div>
          <div style={{ height:1, background:'rgba(255,255,255,0.08)', margin:'2px 0' }}/>
          {['Overview','Users','Config'].map((item,i)=>(
            <div key={item} style={{ padding:'3px 5px', borderRadius:4, background: i===0 ? t.ap_sidebar_accent : 'transparent' }}>
              <span style={{ fontSize:5, fontWeight: i===0?900:600, color: i===0 ? '#0f172a' : 'rgba(255,255,255,0.5)' }}>{item}</span>
            </div>
          ))}
        </div>
        <div style={{ flex:1, display:'flex', flexDirection:'column', gap:4 }}>
          <div style={{ background:t.ap_header_bg, borderRadius:8, padding:'6px 8px', fontSize:6, fontWeight:800, color:'#0f172a', boxShadow:'0 1px 4px rgba(0,0,0,0.08)' }}>Admin Header</div>
          <div style={{ flex:1, background:t.ap_page_bg, borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center' }}>
            <div style={{ width:20, height:3, borderRadius:99, background:t.ap_sidebar_accent, opacity:0.6 }}/>
          </div>
        </div>
      </div>
    ),
    fields: [
      { key:'ap_sidebar_bg',     label:'Admin Sidebar Background', hint:'Dark navy base' },
      { key:'ap_sidebar_accent', label:'Admin Accent Color',       hint:'Active nav + badges' },
      { key:'ap_header_bg',      label:'Admin Header Background',  hint:'Top bar fill' },
      { key:'ap_page_bg',        label:'Admin Page Background',    hint:'Main content area' },
    ],
  },
]

function broadcast(theme) {
  try {
    const ch = new BroadcastChannel(CHANNEL_NAME)
    ch.postMessage({ type:'THEME_UPDATE', theme })
    ch.close()
  } catch {}
  try { localStorage.setItem(THEME_KEY, JSON.stringify(theme)) } catch {}
}

function ColorSwatch({ value, onChange }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:8, position:'relative' }}>
      <div style={{ position:'relative' }}>
        <input type="color" value={value} onChange={e=>onChange(e.target.value)}
          style={{ width:44, height:38, borderRadius:10, border:'2px solid #e2e8f0', cursor:'pointer', padding:3, background:'white' }}
        />
      </div>
      <input value={value} onChange={e=>onChange(e.target.value)}
        style={{ flex:1, padding:'8px 12px', borderRadius:10, border:'1.5px solid #e2e8f0', fontSize:12, fontWeight:700, color:'#0f172a', background:'#f8fafc', outline:'none', fontFamily:'monospace' }}
        onFocus={e=>e.target.style.borderColor='#f59e0b'}
        onBlur={e=>e.target.style.borderColor='#e2e8f0'}
      />
      <div style={{ width:28, height:28, borderRadius:8, background:value, border:'2px solid #e2e8f0', flexShrink:0, boxShadow:`0 2px 8px ${value}40` }}/>
    </div>
  )
}

const stagger = { show:{ transition:{ staggerChildren:0.05 } } }
const fadeUp  = { hidden:{ opacity:0, y:12 }, show:{ opacity:1, y:0, transition:{ duration:0.3, ease:[0.22,1,0.36,1] } } }

export default function Settings() {
  const [theme,    setThemeState] = useState(() => {
    try { const s=localStorage.getItem(THEME_KEY); return s?{...THEME_DEFAULTS,...JSON.parse(s)}:THEME_DEFAULTS } catch { return THEME_DEFAULTS }
  })
  const [saved,    setSaved]    = useState(false)
  const [autoSync, setAutoSync] = useState(true)
  const [openGroup, setOpen]    = useState('sidebar')

  // Site info
  const [siteName,    setSiteName]    = useState('Roshd Professional')
  const [siteTagline, setSiteTagline] = useState('Consulting & Training Platform')

  const setColor = useCallback((key, val) => {
    setThemeState(t => {
      const next = { ...t, [key]: val }
      if (autoSync) broadcast(next)
      return next
    })
  }, [autoSync])

  const handleSave = () => {
    broadcast(theme)
    setSaved(true)
    toast.success('Theme saved & pushed to client dashboard!')
    setTimeout(()=>setSaved(false), 3000)
    api.post('/admin/log-event', {
      action: 'config.update',
      entityType: 'config',
      detail: 'Client dashboard theme colors updated by admin',
    }).catch(() => {})
  }

  const handleReset = () => {
    setThemeState(THEME_DEFAULTS)
    broadcast(THEME_DEFAULTS)
    localStorage.removeItem(THEME_KEY)
    toast.success('Reset to defaults')
  }

  return (
    <motion.div variants={stagger} initial="hidden" animate="show" style={{ maxWidth:960, margin:'0 auto' }}>

      {/* ── Header ── */}
      <motion.div variants={fadeUp} style={{ marginBottom:20 }}>
        <div style={{ background:'linear-gradient(135deg,#0a0f1e 0%,#1a2744 55%,#0f172a 100%)', borderRadius:22, padding:'24px 28px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:16 }}>
          <div style={{ display:'flex', alignItems:'center', gap:14 }}>
            <div style={{ width:46, height:46, borderRadius:14, background:'rgba(201,168,76,0.15)', border:'1px solid rgba(201,168,76,0.25)', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <Palette style={{ width:20, height:20, color:'#c9a84c' }}/>
            </div>
            <div>
              <h1 style={{ fontSize:20, fontWeight:900, color:'white', margin:0 }}>Theme & Settings</h1>
              <p style={{ fontSize:11, color:'rgba(255,255,255,0.45)', margin:'3px 0 0' }}>Edit every color of every component — changes push live to client</p>
            </div>
          </div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            <button onClick={()=>setAutoSync(s=>!s)}
              style={{ display:'inline-flex', alignItems:'center', gap:7, padding:'8px 14px', borderRadius:10, border:`1.5px solid ${autoSync?'rgba(52,211,153,0.3)':'rgba(255,255,255,0.15)'}`, background: autoSync?'rgba(52,211,153,0.1)':'rgba(255,255,255,0.06)', color: autoSync?'#34d399':'rgba(255,255,255,0.5)', fontSize:11, fontWeight:800, cursor:'pointer' }}>
              <Zap style={{ width:13, height:13 }}/> {autoSync?'Live ON':'Live OFF'}
            </button>
            <button onClick={handleReset}
              style={{ display:'inline-flex', alignItems:'center', gap:7, padding:'9px 16px', borderRadius:10, border:'1.5px solid rgba(255,255,255,0.12)', background:'rgba(255,255,255,0.06)', color:'rgba(255,255,255,0.6)', fontSize:12, fontWeight:700, cursor:'pointer' }}>
              <RefreshCw style={{ width:13, height:13 }}/> Reset
            </button>
            <button onClick={handleSave}
              style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'9px 20px', borderRadius:10, border:'none', background: saved?'#10b981':'linear-gradient(135deg,#c9a84c,#b8963e)', color: saved?'white':'#0f172a', fontSize:12, fontWeight:900, cursor:'pointer', boxShadow:'0 4px 14px rgba(201,168,76,0.35)', transition:'all 0.3s' }}>
              {saved ? <><CheckCircle style={{ width:14, height:14 }}/> Saved!</> : <><Save style={{ width:13, height:13 }}/> Save & Push</>}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Live sync */}
      {autoSync && (
        <motion.div variants={fadeUp}
          style={{ display:'flex', alignItems:'center', gap:8, background:'#f0fdf4', border:'1px solid #bbf7d0', borderRadius:12, padding:'9px 14px', marginBottom:16 }}>
          <div style={{ width:7, height:7, borderRadius:'50%', background:'#10b981', flexShrink:0 }} className="animate-pulse"/>
          <span style={{ fontSize:11, color:'#166534', fontWeight:700 }}>Live sync active — every color change applies to the client dashboard instantly. No reload needed.</span>
        </motion.div>
      )}

      {/* ══ COMPONENT COLOR GROUPS ══ */}
      <motion.div variants={fadeUp} style={{ marginBottom:10 }}>
        <p style={{ fontSize:10, fontWeight:900, letterSpacing:'0.22em', textTransform:'uppercase', color:'#94a3b8', marginBottom:10 }}>Client Dashboard Components</p>
      </motion.div>

      <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
        {COMPONENT_GROUPS.map(grp => {
          const isOpen = openGroup === grp.id
          return (
            <motion.div key={grp.id} variants={fadeUp}
              style={{ background:'white', borderRadius:18, border:'1px solid #f1f5f9', overflow:'hidden', boxShadow:'0 1px 4px rgba(0,0,0,0.04)' }}>

              {/* Group header */}
              <button onClick={()=>setOpen(isOpen?null:grp.id)}
                style={{ width:'100%', display:'flex', alignItems:'center', gap:14, padding:'16px 20px', background:'none', border:'none', cursor:'pointer', textAlign:'left' }}>
                <div style={{ width:38, height:38, borderRadius:12, background:`${grp.color}12`, border:`1.5px solid ${grp.color}25`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <grp.icon style={{ width:16, height:16, color:grp.color }}/>
                </div>
                <div style={{ flex:1, minWidth:0 }}>
                  <p style={{ fontSize:14, fontWeight:900, color:'#0f172a', margin:0 }}>{grp.label}</p>
                  <p style={{ fontSize:11, color:'#94a3b8', margin:'1px 0 0', fontWeight:500 }}>{grp.description}</p>
                </div>
                {/* Color dots preview */}
                <div style={{ display:'flex', gap:4, marginRight:10 }}>
                  {grp.fields.slice(0,4).map(f=>(
                    <div key={f.key} style={{ width:18, height:18, borderRadius:5, background:theme[f.key], border:'2px solid white', boxShadow:'0 1px 4px rgba(0,0,0,0.15)', flexShrink:0 }}
                      title={f.label}
                    />
                  ))}
                </div>
                {isOpen ? <ChevronUp style={{ width:15, height:15, color:'#94a3b8', flexShrink:0 }}/> : <ChevronDown style={{ width:15, height:15, color:'#94a3b8', flexShrink:0 }}/>}
              </button>

              {/* Expanded content */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height:0, opacity:0 }} animate={{ height:'auto', opacity:1 }}
                    exit={{ height:0, opacity:0 }} transition={{ duration:0.22 }}
                    style={{ overflow:'hidden' }}
                  >
                    <div style={{ padding:'0 20px 20px', borderTop:'1px solid #f8fafc' }}>
                      <div style={{ display:'flex', gap:20, marginTop:16, flexWrap:'wrap' }}>

                        {/* Preview */}
                        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', padding:'16px 20px', background:'#f8fafc', borderRadius:14, border:'1px solid #f1f5f9', minWidth:0 }}>
                          {grp.preview(theme)}
                        </div>

                        {/* Color fields */}
                        <div style={{ flex:1, minWidth:260, display:'flex', flexDirection:'column', gap:14 }}>
                          {grp.fields.map(f=>(
                            <div key={f.key}>
                              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:6 }}>
                                <label style={{ fontSize:11, fontWeight:800, color:'#334155', letterSpacing:'0.06em' }}>{f.label}</label>
                                <span style={{ fontSize:10, color:'#94a3b8', fontWeight:500 }}>{f.hint}</span>
                              </div>
                              <ColorSwatch value={theme[f.key]} onChange={v=>setColor(f.key, v)}/>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      {/* ══ SITE INFO ══ */}
      <motion.div variants={fadeUp}
        style={{ background:'white', borderRadius:18, border:'1px solid #f1f5f9', padding:'20px 22px', boxShadow:'0 1px 4px rgba(0,0,0,0.04)', marginTop:16 }}>
        <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:18, paddingBottom:14, borderBottom:'1px solid #f8fafc' }}>
          <div style={{ width:34, height:34, borderRadius:10, background:'#eff6ff', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <Globe style={{ width:15, height:15, color:'#3b82f6' }}/>
          </div>
          <div>
            <p style={{ fontSize:14, fontWeight:900, color:'#0f172a', margin:0 }}>Site Information</p>
            <p style={{ fontSize:11, color:'#94a3b8', margin:0, fontWeight:500 }}>Platform name and description</p>
          </div>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:14 }} className="admin-grid-2col">
          {[
            { label:'Platform Name', value:siteName, set:setSiteName },
            { label:'Tagline', value:siteTagline, set:setSiteTagline },
          ].map(({label,value,set})=>(
            <div key={label}>
              <label style={{ fontSize:10, fontWeight:800, letterSpacing:'0.15em', textTransform:'uppercase', color:'#64748b', display:'block', marginBottom:6 }}>{label}</label>
              <input value={value} onChange={e=>set(e.target.value)}
                style={{ width:'100%', padding:'9px 13px', borderRadius:10, border:'1.5px solid #e2e8f0', fontSize:13, fontWeight:600, color:'#0f172a', background:'#f8fafc', outline:'none' }}
                onFocus={e=>e.target.style.borderColor='#f59e0b'}
                onBlur={e=>e.target.style.borderColor='#e2e8f0'}
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* ══ DATABASE STATUS ══ */}
      <motion.div variants={fadeUp}
        style={{ background:'white', borderRadius:18, border:'1px solid #f1f5f9', padding:'20px 22px', boxShadow:'0 1px 4px rgba(0,0,0,0.04)', marginTop:10, marginBottom:20 }}>
        <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:18, paddingBottom:14, borderBottom:'1px solid #f8fafc' }}>
          <div style={{ width:34, height:34, borderRadius:10, background:'#f0fdf4', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <Database style={{ width:15, height:15, color:'#16a34a' }}/>
          </div>
          <p style={{ fontSize:14, fontWeight:900, color:'#0f172a', margin:0 }}>Database</p>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:12, padding:'12px 14px', borderRadius:12, background:'#f0fdf4', border:'1px solid #bbf7d0', marginBottom:10 }}>
          <div style={{ width:8, height:8, borderRadius:'50%', background:'#10b981', flexShrink:0 }} className="animate-pulse"/>
          <div style={{ flex:1 }}>
            <p style={{ fontSize:13, fontWeight:700, color:'#0f172a', margin:0 }}>Supabase Connection</p>
            <p style={{ fontSize:11, color:'#16a34a', margin:'2px 0 0', fontWeight:600 }}>Connected · sofxmykocibzcrxdvjag</p>
          </div>
          <span style={{ fontSize:11, fontWeight:800, color:'#166534', background:'#dcfce7', padding:'3px 10px', borderRadius:99 }}>Active</span>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:10 }} className="admin-grid-2col">
          {[['6','Tables'],['RLS','Row Level Security'],['JWT','Auth Method'],['bcrypt','Password Hashing']].map(([v,l])=>(
            <div key={l} style={{ padding:'12px 14px', borderRadius:12, background:'#f8fafc', border:'1px solid #f1f5f9', textAlign:'center' }}>
              <p style={{ fontSize:18, fontWeight:900, color:'#0f172a', margin:'0 0 2px' }}>{v}</p>
              <p style={{ fontSize:10, color:'#94a3b8', margin:0, fontWeight:600 }}>{l}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Sticky save */}
      <div className="admin-sticky-footer" style={{ position:'sticky', bottom:0, background:'rgba(255,255,255,0.96)', backdropFilter:'blur(12px)', borderTop:'1px solid #e2e8f0', padding:'12px 0', display:'flex', alignItems:'center', justifyContent:'space-between', gap:16 }}>
        <span style={{ fontSize:11, color:'#94a3b8', fontWeight:600 }}>All color changes broadcast via BroadcastChannel in real-time</span>
        <button onClick={handleSave}
          style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'10px 22px', borderRadius:12, border:'none', background: saved?'#10b981':'linear-gradient(135deg,#f59e0b,#d97706)', color: saved?'white':'#0f172a', fontSize:13, fontWeight:900, cursor:'pointer', boxShadow:'0 4px 14px rgba(245,158,11,0.3)', transition:'all 0.3s' }}>
          {saved ? <><CheckCircle style={{ width:15, height:15 }}/> Saved!</> : <><Save style={{ width:15, height:15 }}/> Save & Apply Theme</>}
        </button>
      </div>

    </motion.div>
  )
}
