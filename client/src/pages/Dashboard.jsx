import { useState, useMemo, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence, useSpring, useMotionValue, animate } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import {
  LayoutDashboard, TrendingUp, BarChart2, Users, Sliders,
  UserCircle, CheckSquare, Activity, LogOut, Menu, X,
  ChevronDown, Printer, Star, AlertTriangle, Target, Zap,
  ArrowUpRight, Filter, RefreshCw
} from 'lucide-react'
import { getData, DEMO_CUSTOMERS, SEGMENT_DATA } from '../data/dashboardData'
import ExecutiveTab       from '../components/dashboard/tabs/ExecutiveTab'
import DriversTab         from '../components/dashboard/tabs/DriversTab'
import EffectTab          from '../components/dashboard/tabs/EffectTab'
import SegmentsTab        from '../components/dashboard/tabs/SegmentsTab'
import SimulationTab      from '../components/dashboard/tabs/SimulationTab'
import CustomersTab       from '../components/dashboard/tabs/CustomersTab'
import RecommendationsTab from '../components/dashboard/tabs/RecommendationsTab'
import ModelTab           from '../components/dashboard/tabs/ModelTab'

const NAV = [
  { id:'executive',       label:'Executive',       icon:LayoutDashboard, color:'#f59e0b' },
  { id:'drivers',         label:'Drivers',          icon:TrendingUp,      color:'#3b82f6' },
  { id:'effect',          label:'Effect Size',      icon:BarChart2,       color:'#8b5cf6' },
  { id:'segments',        label:'Segments',         icon:Users,           color:'#10b981' },
  { id:'simulation',      label:'Simulation',       icon:Sliders,         color:'#f59e0b' },
  { id:'customers',       label:'Customers',        icon:UserCircle,      color:'#06b6d4' },
  { id:'recommendations', label:'Recommendations',  icon:CheckSquare,     color:'#10b981' },
  { id:'model',           label:'Model Quality',    icon:Activity,        color:'#8b5cf6' },
]

/* ── animated number ── */
function AnimatedNumber({ value, decimals = 0, suffix = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const controls = animate(0, value, {
      duration: 1.2, ease: [0.22, 1, 0.36, 1],
      onUpdate(v) { node.textContent = (decimals ? v.toFixed(decimals) : Math.round(v)) + suffix }
    })
    return () => controls.stop()
  }, [value])
  return <span ref={ref} />
}

function SidebarContent({ tab, setTab, onClose, data, user, logout, navigate }) {
  const handleLogout = () => { logout(); navigate('/') }
  return (
    <div className="dash-sidebar-inner">
      {/* Brand — text only */}
      <div className="dash-brand">
        <div className="dash-brand-text">
          <span className="dash-brand-roshd">ROSHD</span>
          <span className="dash-brand-pro">PROFESSIONAL</span>
          <span className="dash-brand-tagline">Clarity · Insight · Impact</span>
        </div>
        <button onClick={onClose} className="dash-close-btn lg:hidden"><X size={16}/></button>
      </div>

      {/* Insight badge */}
      <div className="dash-insight-badge">
        <Zap size={11} style={{color:'#f59e0b'}}/>
        <span>Insight Engine</span>
      </div>

      <div className="dash-divider" />

      {/* Nav */}
      <nav className="dash-nav">
        <p className="dash-nav-label">Modules</p>
        {NAV.map(({ id, label, icon:Icon, color }) => {
          const active = tab === id
          return (
            <button key={id} onClick={() => { setTab(id); onClose() }}
              className={`dash-nav-item ${active ? 'active' : ''}`}
              style={active ? { '--nav-color': color } : {}}
            >
              <div className="dash-nav-icon" style={{ background: active ? color+'22' : 'rgba(255,255,255,0.05)' }}>
                <Icon size={14} style={{ color: active ? color : 'rgba(255,255,255,0.45)' }} />
              </div>
              <span>{label}</span>
              {active && <div className="dash-nav-pip" style={{ background: color }} />}
            </button>
          )
        })}
      </nav>

      {/* User */}
      <div className="dash-user-card">
        <div className="dash-user-avatar">
          {user?.name?.[0]?.toUpperCase()}
          <div className="dash-user-dot" />
        </div>
        <div className="dash-user-info">
          <p className="dash-user-name">{user?.name}</p>
          <p className="dash-user-email">{user?.email}</p>
        </div>
        <button onClick={handleLogout} className="dash-logout-btn" title="Sign out">
          <LogOut size={14}/>
        </button>
      </div>
    </div>
  )
}

import { useAdminConfig } from '../hooks/useAdminConfig'
import { useAdminTheme }  from '../hooks/useAdminTheme'

export default function Dashboard() {
  const { user, logout }      = useAuth()
  const navigate              = useNavigate()
  const [tab, setTab]         = useState('executive')
  const [sideOpen, setSide]   = useState(false)
  const [branch,  setBranch]  = useState('All Branches')
  const [gender,  setGender]  = useState('All Genders')
  const [service, setService] = useState('All Services')

  const adminConfig = useAdminConfig()   // ← live data overrides
  useAdminTheme()                        // ← live color/theme overrides

  // Apply accent color from admin config in real-time
  useEffect(() => {
    if (adminConfig?.accentColor) {
      document.documentElement.style.setProperty('--dash-accent', adminConfig.accentColor)
    }
  }, [adminConfig?.accentColor])

  // Lock page scroll while mobile drawer is open (iOS / Android)
  useEffect(() => {
    if (!sideOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [sideOpen])

  // Merge admin config over computed data in real-time
  const baseData = useMemo(() => getData(branch, gender, service), [branch, gender, service])
  const data = useMemo(() => {
    if (!adminConfig) return baseData
    return {
      ...baseData,
      score:       adminConfig.overallScore      ?? baseData.score,
      explanatory: adminConfig.explanatoryPower  ?? baseData.explanatory,
      top:         adminConfig.topDriver         ?? baseData.top,
      risk:        adminConfig.wasteRisk         ?? baseData.risk,
      drivers:     adminConfig.drivers?.length   ? adminConfig.drivers.map(d=>({...d, cls: d.decision==='Invest'?'dark':d.decision==='Avoid'?'red':'amber'})) : baseData.drivers,
      invest:      adminConfig.invest?.length    ? adminConfig.invest    : baseData.invest,
      optimize:    adminConfig.optimize?.length  ? adminConfig.optimize  : baseData.optimize,
      avoid:       adminConfig.avoid?.length     ? adminConfig.avoid     : baseData.avoid,
      segments:    adminConfig.segments?.length  ? adminConfig.segments  : baseData.segments,
    }
  }, [baseData, adminConfig])
  const filteredCustomers = DEMO_CUSTOMERS.filter(c =>
    (branch  === 'All Branches' || c.branch  === branch) &&
    (gender  === 'All Genders'  || c.gender  === gender) &&
    (service === 'All Services' || c.service === service)
  )
  const tabProps = { data, filteredCustomers, segments: SEGMENT_DATA }

  const handlePrint = () => {
    const NAV_LABELS = {
      executive:'Executive Decision Summary', drivers:'Driver Impact Analysis',
      effect:'Effect Size Deep Dive', segments:'Segment Comparison',
      simulation:'Decision Simulation Lab', customers:'Customer Pattern View',
      recommendations:'Final Recommendations', model:'Model Quality'
    }
    const drivers = data.drivers || []
    const win = window.open('', '_blank', 'width=900,height=700')
    win.document.write(`<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8"><title>Roshd Professional — Intelligence Report</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:'Inter',sans-serif;background:#fff;color:#0f172a;font-size:13px;line-height:1.5}
  @page{margin:18mm 16mm;size:A4}

  /* ── Cover strip ── */
  .cover{background:linear-gradient(135deg,#0a0f1e 0%,#1a2744 60%,#0f172a 100%);padding:32px 36px;display:flex;align-items:center;justify-content:space-between;border-radius:0}
  .cover-brand{display:flex;flex-direction:column;gap:3px}
  .cover-roshd{font-size:26px;font-weight:900;letter-spacing:.16em;color:#fff}
  .cover-pro{font-size:9px;font-weight:800;letter-spacing:.32em;color:#c9a84c;text-transform:uppercase}
  .cover-right{text-align:right}
  .cover-title{font-size:17px;font-weight:800;color:#fff;margin-bottom:4px}
  .cover-sub{font-size:10px;color:rgba(255,255,255,.45);font-weight:500}
  .cover-badge{display:inline-flex;align-items:center;gap:6px;background:rgba(201,168,76,.12);border:1px solid rgba(201,168,76,.3);border-radius:20px;padding:5px 12px;margin-top:8px}
  .cover-badge span{font-size:9px;font-weight:800;letter-spacing:.18em;color:#c9a84c;text-transform:uppercase}

  /* ── Meta row ── */
  .meta{display:flex;gap:0;border-bottom:2px solid #f1f5f9;background:#f8fafc}
  .meta-cell{flex:1;padding:12px 18px;border-right:1px solid #e2e8f0}
  .meta-cell:last-child{border-right:none}
  .meta-label{font-size:8px;font-weight:800;letter-spacing:.22em;color:#94a3b8;text-transform:uppercase;margin-bottom:3px}
  .meta-value{font-size:14px;font-weight:900;color:#0f172a}
  .meta-value.gold{color:#b45309}
  .meta-value.purple{color:#6d28d9}
  .meta-value.green{color:#065f46}
  .meta-value.red{color:#991b1b}

  /* ── Section ── */
  .section{padding:22px 36px;border-bottom:1px solid #f1f5f9}
  .section:last-child{border-bottom:none}
  .section-title{font-size:11px;font-weight:900;letter-spacing:.22em;color:#94a3b8;text-transform:uppercase;margin-bottom:14px;display:flex;align-items:center;gap:8px}
  .section-title::after{content:'';flex:1;height:1px;background:#e2e8f0}

  /* ── KPI grid ── */
  .kpi-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:4px}
  .kpi-card{border-radius:12px;padding:14px 16px;border:1px solid transparent}
  .kpi-card.amber{background:#fef3c7;border-color:#fde68a}
  .kpi-card.purple{background:#ede9fe;border-color:#ddd6fe}
  .kpi-card.green{background:#d1fae5;border-color:#a7f3d0}
  .kpi-card.red{background:#fee2e2;border-color:#fecaca}
  .kpi-label{font-size:8px;font-weight:800;letter-spacing:.15em;text-transform:uppercase;color:#64748b;margin-bottom:6px}
  .kpi-value{font-size:22px;font-weight:900;line-height:1}
  .kpi-sub{font-size:9px;color:#94a3b8;margin-top:4px}

  /* ── Table ── */
  table{width:100%;border-collapse:collapse;font-size:12px}
  thead tr{background:#f8fafc}
  th{text-align:left;padding:9px 12px;font-weight:800;font-size:9px;letter-spacing:.15em;text-transform:uppercase;color:#64748b;border-bottom:2px solid #e2e8f0}
  td{padding:9px 12px;border-bottom:1px solid #f1f5f9;color:#334155;font-weight:500}
  tr:last-child td{border-bottom:none}
  tr:hover td{background:#f8fafc}

  /* ── Bars ── */
  .bar-row{display:grid;grid-template-columns:130px 1fr 50px;gap:10px;align-items:center;margin-bottom:8px;font-size:12px;font-weight:700}
  .bar-track{height:8px;background:#f1f5f9;border-radius:99px;overflow:hidden}
  .bar-fill{height:100%;border-radius:99px}

  /* ── Action cards ── */
  .action-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
  .action-card{border-radius:12px;padding:14px 16px}
  .action-card.dark{background:#0f172a;color:#fff}
  .action-card.green-card{background:#f0fdf4;color:#14532d}
  .action-card.red-card{background:#fef2f2;color:#991b1b}
  .action-card h3{font-size:11px;font-weight:900;margin-bottom:8px;letter-spacing:.05em}
  .action-card li{margin:5px 0;font-size:11px;line-height:1.4;list-style:disc;margin-left:14px}

  /* ── Segments ── */
  .seg-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
  .seg-card{border-radius:12px;padding:14px 16px;border-left:4px solid;background:#f8fafc}
  .seg-name{font-size:13px;font-weight:900;margin-bottom:10px}
  .seg-metrics{display:grid;grid-template-columns:1fr 1fr;gap:6px}
  .seg-metric{background:#fff;border-radius:8px;padding:8px 10px}
  .seg-metric-label{font-size:8px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#94a3b8;margin-bottom:2px}
  .seg-metric-value{font-size:16px;font-weight:900}

  /* ── Footer ── */
  .footer{padding:16px 36px;background:#f8fafc;border-top:1px solid #e2e8f0;display:flex;align-items:center;justify-content:space-between}
  .footer-left{font-size:9px;color:#94a3b8;font-weight:600}
  .footer-right{font-size:9px;color:#94a3b8;font-weight:600}

  /* ── Print ── */
  @media print{
    body{-webkit-print-color-adjust:exact;print-color-adjust:exact}
    .cover{-webkit-print-color-adjust:exact;print-color-adjust:exact}
    .no-print{display:none}
    .page-break{page-break-before:always}
  }
</style>
</head><body>

<!-- Cover -->
<div class="cover">
  <div class="cover-brand">
    <span class="cover-roshd">ROSHD</span>
    <span class="cover-pro">PROFESSIONAL</span>
    <div class="cover-badge"><span>Intelligence Report · Q2 2026</span></div>
  </div>
  <div class="cover-right">
    <div class="cover-title">Customer Satisfaction<br>Intelligence Engine</div>
    <div class="cover-sub">Decision System MVP · Powered by Roshd Professional</div>
    <div class="cover-sub" style="margin-top:6px">Generated: ${new Date().toLocaleDateString('en-GB',{day:'2-digit',month:'long',year:'numeric'})} · Segment: ${branch} / ${gender} / ${service}</div>
  </div>
</div>

<!-- KPI Meta -->
<div class="meta">
  <div class="meta-cell"><div class="meta-label">Overall Satisfaction</div><div class="meta-value gold">${data.score.toFixed(1)} / 5</div></div>
  <div class="meta-cell"><div class="meta-label">Model Explanatory Power</div><div class="meta-value purple">${data.explanatory}%</div></div>
  <div class="meta-cell"><div class="meta-label">Top Driver</div><div class="meta-value green">${data.top}</div></div>
  <div class="meta-cell"><div class="meta-label">Waste Risk</div><div class="meta-value red">${data.risk}</div></div>
</div>

<!-- KPI Cards -->
<div class="section">
  <div class="section-title">Key Performance Indicators</div>
  <div class="kpi-grid">
    <div class="kpi-card amber"><div class="kpi-label">Overall Satisfaction</div><div class="kpi-value">${data.score.toFixed(1)}<span style="font-size:13px;font-weight:600;color:#92400e"> / 5</span></div><div class="kpi-sub">Selected segment score</div></div>
    <div class="kpi-card purple"><div class="kpi-label">Explanatory Power</div><div class="kpi-value">${data.explanatory}%</div><div class="kpi-sub">Full model R²</div></div>
    <div class="kpi-card green"><div class="kpi-label">Top Driver</div><div class="kpi-value" style="font-size:18px">${data.top}</div><div class="kpi-sub">Highest effect size</div></div>
    <div class="kpi-card red"><div class="kpi-label">Waste Risk</div><div class="kpi-value" style="font-size:18px">${data.risk}</div><div class="kpi-sub">Low effect signal</div></div>
  </div>
</div>

<!-- Drivers -->
<div class="section">
  <div class="section-title">Driver Impact Ranking</div>
  ${drivers.map(d=>`
    <div class="bar-row">
      <span>${d.name}</span>
      <div class="bar-track"><div class="bar-fill" style="width:${Math.round(d.impact*100/0.5)}%;background:${d.impact>=0.35?'#0f172a':d.impact>=0.15?'#3b82f6':'#94a3b8'}"></div></div>
      <span style="text-align:right;color:#64748b">${d.impact.toFixed(3)}</span>
    </div>`).join('')}
  <table style="margin-top:16px">
    <thead><tr><th>Driver</th><th>Avg Score</th><th>Path Coeff.</th><th>Impact</th><th>Decision</th></tr></thead>
    <tbody>
      ${drivers.map(d=>`<tr>
        <td style="font-weight:700">${d.name}</td>
        <td>${d.avg.toFixed(2)}</td>
        <td>${d.path.toFixed(3)}</td>
        <td style="font-weight:800;color:${d.impact>=0.35?'#0f172a':d.impact>=0.15?'#3b82f6':'#94a3b8'}">${d.impact.toFixed(3)}</td>
        <td><span style="background:${d.decision==='Invest'?'#0f172a':d.decision==='Optimize'?'#dcfce7':'#f1f5f9'};color:${d.decision==='Invest'?'#fff':d.decision==='Optimize'?'#166534':'#475569'};padding:3px 10px;border-radius:99px;font-size:10px;font-weight:800">${d.decision}</span></td>
      </tr>`).join('')}
    </tbody>
  </table>
</div>

<!-- Segments -->
<div class="section page-break">
  <div class="section-title">Segment Comparison</div>
  <div class="seg-grid">
    ${(data.segments||[]).map((s,i)=>{
      const colors=['#f59e0b','#3b82f6','#10b981']
      return `<div class="seg-card" style="border-color:${colors[i%3]}">
        <div class="seg-name">${s.name}</div>
        <div class="seg-metrics">
          <div class="seg-metric"><div class="seg-metric-label">Satisfaction</div><div class="seg-metric-value" style="color:${colors[i%3]}">${s.score?.toFixed?.(1)??s.score}</div></div>
          <div class="seg-metric"><div class="seg-metric-label">R²</div><div class="seg-metric-value">${s.r2??'—'}%</div></div>
          <div class="seg-metric"><div class="seg-metric-label">Top Driver</div><div class="seg-metric-value" style="font-size:12px">${s.top??'—'}</div></div>
          <div class="seg-metric"><div class="seg-metric-label">Customers</div><div class="seg-metric-value">${s.count??'—'}</div></div>
        </div>
      </div>`
    }).join('')}
  </div>
</div>

<!-- Recommendations -->
<div class="section">
  <div class="section-title">Final Recommendations</div>
  <div class="action-grid">
    <div class="action-card dark"><h3>🚀 Invest Now</h3><ul>${(data.invest||[]).map(i=>`<li>${i}</li>`).join('')}</ul></div>
    <div class="action-card green-card"><h3>⚡ Optimize Selectively</h3><ul>${(data.optimize||[]).map(i=>`<li>${i}</li>`).join('')}</ul></div>
    <div class="action-card red-card"><h3>⛔ Avoid / Defer</h3><ul>${(data.avoid||[]).map(i=>`<li>${i}</li>`).join('')}</ul></div>
  </div>
</div>

<!-- Model Quality -->
<div class="section">
  <div class="section-title">Model Quality Metrics</div>
  <table>
    <thead><tr><th>Metric</th><th>Value</th><th>Interpretation</th></tr></thead>
    <tbody>
      <tr><td style="font-weight:700">Explanatory Power (R²)</td><td style="font-weight:900;color:#6d28d9">${data.explanatory}%</td><td>Model strength — how much of satisfaction is explained</td></tr>
      <tr><td style="font-weight:700">Cronbach's Alpha</td><td style="font-weight:900">0.88</td><td>Internal reliability of measurement items</td></tr>
      <tr><td style="font-weight:700">Composite Reliability (CR)</td><td style="font-weight:900">0.91</td><td>Construct-level reliability</td></tr>
      <tr><td style="font-weight:700">Average Variance Extracted (AVE)</td><td style="font-weight:900">0.64</td><td>Convergent validity — above 0.5 is acceptable</td></tr>
      <tr><td style="font-weight:700">HTMT Ratio</td><td style="font-weight:900;color:#166534">OK</td><td>Discriminant validity confirmed</td></tr>
    </tbody>
  </table>
  <div style="margin-top:14px;background:#dbeafe;border-radius:10px;padding:12px 16px;font-size:11px;color:#1e3a8a;line-height:1.6">
    <strong>Management Note:</strong> R² tells us how much of satisfaction is explained by the full model. Factor priority comes from path coefficients and effect size — not average score alone. A low-scoring factor like Speed can still be low priority if its impact is weak.
  </div>
</div>

<!-- Footer -->
<div class="footer">
  <div class="footer-left">ROSHD PROFESSIONAL · Clarity. Insight. Impact. · Confidential Report</div>
  <div class="footer-right">Generated ${new Date().toLocaleDateString('en-GB')} · Customer Satisfaction Intelligence Engine</div>
</div>

<div class="no-print" style="padding:20px;text-align:center;background:#f8fafc;border-top:1px solid #e2e8f0">
  <button onclick="window.print()" style="background:#0f172a;color:#fff;border:none;padding:12px 32px;border-radius:10px;font-size:14px;font-weight:800;cursor:pointer;letter-spacing:.05em">Print / Save as PDF</button>
  <button onclick="window.close()" style="background:#f1f5f9;color:#334155;border:none;padding:12px 24px;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer;margin-left:10px">Close</button>
</div>

</body></html>`)
    win.document.close()
    setTimeout(() => win.focus(), 300)
  }

  const TabContent = () => {
    switch (tab) {
      case 'executive':       return <ExecutiveTab       {...tabProps} />
      case 'drivers':         return <DriversTab         {...tabProps} />
      case 'effect':          return <EffectTab          {...tabProps} />
      case 'segments':        return <SegmentsTab        {...tabProps} />
      case 'simulation':      return <SimulationTab      {...tabProps} />
      case 'customers':       return <CustomersTab       {...tabProps} />
      case 'recommendations': return <RecommendationsTab {...tabProps} />
      case 'model':           return <ModelTab           {...tabProps} />
      default:                return null
    }
  }

  const kpis = [
    {
      label:'Overall Satisfaction', sub:'Selected segment',
      icon:Star, grad:'linear-gradient(135deg,#fef3c7,#fde68a)',
      border:'#f59e0b', iconBg:'#f59e0b22', iconColor:'#b45309',
      render: () => <><AnimatedNumber value={data.score} decimals={1}/><span style={{fontSize:18,fontWeight:700,color:'#92400e'}}> / 5</span></>
    },
    {
      label:'Explanatory Power', sub:'Full model R²',
      icon:Activity, grad:'linear-gradient(135deg,#ede9fe,#ddd6fe)',
      border:'#8b5cf6', iconBg:'#8b5cf622', iconColor:'#6d28d9',
      render: () => <><AnimatedNumber value={data.explanatory} suffix="%"/></>
    },
    {
      label:'Top Driver', sub:'Highest effect size',
      icon:Target, grad:'linear-gradient(135deg,#d1fae5,#a7f3d0)',
      border:'#10b981', iconBg:'#10b98122', iconColor:'#065f46',
      render: () => <span>{data.top}</span>
    },
    {
      label:'Waste Risk', sub:'Low effect signal',
      icon:AlertTriangle, grad:'linear-gradient(135deg,#fee2e2,#fecaca)',
      border:'#ef4444', iconBg:'#ef444422', iconColor:'#991b1b',
      render: () => <span>{data.risk}</span>
    },
  ]

  const FilterSelect = ({ value, set, opts }) => (
    <div style={{position:'relative'}}>
      <select value={value} onChange={e => set(e.target.value)} className="dash-filter-select">
        {opts.map(o => <option key={o}>{o}</option>)}
      </select>
      <ChevronDown size={11} style={{position:'absolute',right:9,top:'50%',transform:'translateY(-50%)',color:'#94a3b8',pointerEvents:'none'}}/>
    </div>
  )

  const currentNav = NAV.find(n => n.id === tab)

  return (
    <div className="dash-root">
      {/* Desktop sidebar */}
      <aside className="dash-sidebar hidden lg:flex lg:flex-col">
        <SidebarContent tab={tab} setTab={setTab} onClose={()=>{}} data={data} user={user} logout={logout} navigate={navigate}/>
      </aside>

      {/* Mobile drawer: portal → document.body so parent overflow never clips it; full-viewport panel */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {sideOpen && (
            <>
              <motion.div
                key="dash-drawer-backdrop"
                role="presentation"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="dash-drawer-backdrop"
                onClick={() => setSide(false)}
              />
              <motion.aside
                key="dash-drawer-panel"
                role="dialog"
                aria-modal="true"
                aria-label="Dashboard navigation"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', stiffness: 380, damping: 40 }}
                className="dash-sidebar dash-sidebar--drawer flex flex-col"
              >
                <SidebarContent tab={tab} setTab={setTab} onClose={() => setSide(false)} data={data} user={user} logout={logout} navigate={navigate}/>
              </motion.aside>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* Main */}
      <div className="dash-main">

        {/* Header */}
        <header className="dash-header">
          <div className="dash-header-left">
            <button onClick={()=>setSide(true)} className="dash-menu-btn lg:hidden" type="button" aria-label="Open menu"><Menu size={18}/></button>
            <div className="dash-header-text">
              <p className="dash-header-eyebrow">Decision System · Q2 2026</p>
              <h1 className="dash-header-title">Customer Satisfaction Intelligence Engine</h1>
            </div>
          </div>
          <div className="dash-header-right">
            <div className="hidden sm:flex items-center gap-2">
              <FilterSelect value={branch}  set={setBranch}  opts={['All Branches','Riyadh','Jeddah','Dammam']}/>
              <FilterSelect value={gender}  set={setGender}  opts={['All Genders','Male','Female']}/>
              <FilterSelect value={service} set={setService} opts={['All Services','Mechanical','Bodyshop']}/>
            </div>
            <button onClick={handlePrint} className="dash-export-btn">
              <Printer size={13}/> Export
            </button>
          </div>
        </header>

        {/* Mobile filters */}
        <div className="dash-mobile-filters sm:hidden">
          <FilterSelect value={branch}  set={setBranch}  opts={['All Branches','Riyadh','Jeddah','Dammam']}/>
          <FilterSelect value={gender}  set={setGender}  opts={['All Genders','Male','Female']}/>
          <FilterSelect value={service} set={setService} opts={['All Services','Mechanical','Bodyshop']}/>
        </div>

        {/* KPI Strip */}
        <div className="dash-kpi-strip">
          {kpis.map((k, i) => (
            <motion.div key={k.label}
              initial={{opacity:0, y:16}} animate={{opacity:1, y:0}}
              transition={{delay:i*0.08, duration:0.45, ease:[0.22,1,0.36,1]}}
              className="dash-kpi-card"
              style={{background:k.grad, borderColor:k.border+'40'}}
            >
              <div className="dash-kpi-top">
                <div className="dash-kpi-icon" style={{background:k.iconBg}}>
                  <k.icon size={16} style={{color:k.iconColor}}/>
                </div>
                <p className="dash-kpi-label">{k.label}</p>
              </div>
              <p className="dash-kpi-value">{k.render()}</p>
              <p className="dash-kpi-sub">{k.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Tab breadcrumb */}
        <div className="dash-tab-bar">
          <div className="dash-tab-info">
            {currentNav && (
              <>
                <div className="dash-tab-dot" style={{background:currentNav.color}}/>
                <span className="dash-tab-name">{currentNav.label}</span>
              </>
            )}
          </div>
          <div className="hidden lg:flex items-center gap-1">
            {NAV.map(n => (
              <button key={n.id} onClick={()=>setTab(n.id)}
                className={`dash-tab-pill ${tab===n.id?'active':''}`}
                style={tab===n.id ? {background:n.color+'18',color:n.color,borderColor:n.color+'35'} : {}}
              >
                <n.icon size={12}/> {n.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="dash-content">
          <AnimatePresence mode="wait">
            <motion.div key={tab}
              initial={{opacity:0, y:14}}
              animate={{opacity:1, y:0}}
              exit={{opacity:0, y:-8}}
              transition={{duration:0.25, ease:[0.22,1,0.36,1]}}
            >
              <TabContent/>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
