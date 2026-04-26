import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Users, UserCircle, TrendingUp, Activity,
  ArrowUpRight, ArrowDownRight, MoreHorizontal,
  BarChart2, MapPin, Clock, Zap, Globe,
  ShieldCheck, RefreshCw
} from 'lucide-react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell,
  BarChart, Bar
} from 'recharts'
import api from '../api/axios'

const BRANCH_DATA = [
  { branch:'Riyadh', short:'RYD', score:3.7, customers:89,  r2:74, prev:3.4, color:'#f59e0b' },
  { branch:'Jeddah', short:'JED', score:3.4, customers:67,  r2:69, prev:3.2, color:'#3b82f6' },
  { branch:'Dammam', short:'DAM', score:3.2, customers:53,  r2:63, prev:3.5, color:'#10b981' },
]
const TREND_DATA = [
  { month:'Oct', score:3.3, users:12 },
  { month:'Nov', score:3.5, users:18 },
  { month:'Dec', score:3.4, users:22 },
  { month:'Jan', score:3.6, users:31 },
  { month:'Feb', score:3.7, users:40 },
  { month:'Mar', score:3.8, users:55 },
]
const DRIVER_DATA = [
  { driver:'Quality',       impact:0.32, color:'#0f172a' },
  { driver:'Communication', impact:0.17, color:'#3b82f6' },
  { driver:'Price',         impact:0.13, color:'#f59e0b' },
  { driver:'Advisor',       impact:0.10, color:'#8b5cf6' },
  { driver:'Speed',         impact:0.01, color:'#ef4444' },
]
const RISK_DATA = [
  { name:'Low',    value:38, color:'#10b981' },
  { name:'Medium', value:45, color:'#f59e0b' },
  { name:'High',   value:17, color:'#ef4444' },
]
const ACTIVITY = [
  { label:'New user registered',    sub:'Ahmad Al-Rashidi joined',         time:'2m ago',  color:'#3b82f6', icon:'👤' },
  { label:'Customer record added',  sub:'Branch: Riyadh · Medium risk',    time:'18m ago', color:'#10b981', icon:'📋' },
  { label:'Config updated',         sub:'KPI values changed by admin',     time:'45m ago', color:'#f59e0b', icon:'⚙️' },
  { label:'Role updated',           sub:'Sara Hassan → Admin',             time:'1h ago',  color:'#8b5cf6', icon:'🛡️' },
  { label:'Customer record added',  sub:'Branch: Jeddah · Low risk',       time:'3h ago',  color:'#10b981', icon:'📋' },
]

const ChartTip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div style={{ background:'#0f172a', color:'white', borderRadius:12, padding:'10px 14px', fontSize:12, boxShadow:'0 8px 24px rgba(0,0,0,0.3)' }}>
      <p style={{ fontWeight:700, color:'#94a3b8', marginBottom:4 }}>{label}</p>
      {payload.map((p,i)=><p key={i} style={{ color:p.color, fontWeight:800 }}>{p.name}: {p.value}</p>)}
    </div>
  )
}

function Trend({ val, prev }) {
  const up  = val >= prev
  const pct = Math.abs(((val-prev)/prev)*100).toFixed(1)
  return (
    <span style={{ display:'inline-flex', alignItems:'center', gap:3, fontSize:11, fontWeight:800, padding:'3px 8px', borderRadius:99, background: up?'#f0fdf4':'#fef2f2', color: up?'#166534':'#dc2626' }}>
      {up ? <ArrowUpRight style={{ width:11, height:11 }}/> : <ArrowDownRight style={{ width:11, height:11 }}/>} {pct}%
    </span>
  )
}

function Card({ children, style={} }) {
  return (
    <div style={{ background:'white', borderRadius:20, border:'1px solid #f1f5f9', padding:'22px 24px', boxShadow:'0 1px 3px rgba(0,0,0,0.04)', ...style }}>
      {children}
    </div>
  )
}

function CardTitle({ title, sub, icon: Icon, action }) {
  return (
    <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:20 }}>
      <div>
        <h3 style={{ fontSize:15, fontWeight:900, color:'#0f172a', margin:0 }}>{title}</h3>
        {sub && <p style={{ fontSize:11, color:'#94a3b8', margin:'2px 0 0', fontWeight:500 }}>{sub}</p>}
      </div>
      {Icon && <Icon style={{ width:16, height:16, color:'#cbd5e1' }}/>}
      {action}
    </div>
  )
}

const stagger = { show:{ transition:{ staggerChildren:0.06 } } }
const fadeUp  = { hidden:{ opacity:0, y:14 }, show:{ opacity:1, y:0, transition:{ duration:0.4, ease:[0.22,1,0.36,1] } } }

export default function AdminDashboard() {
  const [stats, setStats] = useState({ totalUsers:2, totalCustomers:0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/admin/stats')
      .then(r => setStats(r.data))
      .catch(()=>{})
      .finally(()=>setLoading(false))
  }, [])

  const kpis = [
    {
      label:'Total Users', value: loading ? '…' : stats.totalUsers,
      icon:Users, grad:'linear-gradient(135deg,#eff6ff,#dbeafe)', border:'#bfdbfe',
      iconBg:'#3b82f6', trend:'+12%', up:true, sub:'Registered accounts',
      bar:'#3b82f6'
    },
    {
      label:'Customer Records', value: loading ? '…' : stats.totalCustomers,
      icon:UserCircle, grad:'linear-gradient(135deg,#f0fdf4,#dcfce7)', border:'#bbf7d0',
      iconBg:'#10b981', trend:'+8.4%', up:true, sub:'Satisfaction entries',
      bar:'#10b981'
    },
    {
      label:'Avg Satisfaction', value:'3.8 / 5',
      icon:TrendingUp, grad:'linear-gradient(135deg,#fffbeb,#fef3c7)', border:'#fde68a',
      iconBg:'#f59e0b', trend:'+0.4', up:true, sub:'All branches combined',
      bar:'#f59e0b'
    },
    {
      label:'Model R² Score', value:'72%',
      icon:Activity, grad:'linear-gradient(135deg,#f5f3ff,#ede9fe)', border:'#ddd6fe',
      iconBg:'#8b5cf6', trend:'Strong fit', up:true, sub:'Explanatory power',
      bar:'#8b5cf6'
    },
  ]

  return (
    <motion.div variants={stagger} initial="hidden" animate="show" style={{ maxWidth:1400, display:'flex', flexDirection:'column', gap:20 }}>

      {/* ── Hero Header ── */}
      <motion.div variants={fadeUp}
        style={{ background:'linear-gradient(135deg,#0a0f1e 0%,#1a2744 55%,#0f172a 100%)', borderRadius:24, padding:'28px 32px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:16 }}>
        <div style={{ display:'flex', alignItems:'center', gap:16 }}>
          <div style={{ width:50, height:50, borderRadius:16, background:'rgba(201,168,76,0.15)', border:'1px solid rgba(201,168,76,0.25)', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <ShieldCheck style={{ width:22, height:22, color:'#c9a84c' }}/>
          </div>
          <div>
            <h1 style={{ fontSize:22, fontWeight:900, color:'white', margin:0 }}>Platform Overview</h1>
            <p style={{ fontSize:12, color:'rgba(255,255,255,0.45)', margin:'3px 0 0', fontWeight:500 }}>Monitor satisfaction metrics, branch performance, and user activity.</p>
          </div>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <div style={{ display:'flex', alignItems:'center', gap:7, background:'rgba(52,211,153,0.1)', border:'1px solid rgba(52,211,153,0.2)', borderRadius:12, padding:'8px 14px' }}>
            <div style={{ width:8, height:8, borderRadius:'50%', background:'#34d399' }} className="animate-pulse"/>
            <span style={{ fontSize:11, fontWeight:800, color:'#34d399', letterSpacing:'0.05em' }}>Live · Q2 2026</span>
          </div>
          <div style={{ display:'flex', gap:3 }}>
            {BRANCH_DATA.map(b=>(
              <div key={b.branch} style={{ padding:'6px 12px', borderRadius:8, background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.1)', fontSize:10, fontWeight:800, color:'rgba(255,255,255,0.55)' }}>
                {b.short}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── KPI Cards ── */}
      <motion.div variants={fadeUp} style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:14 }}>
        {kpis.map(k=>(
          <motion.div key={k.label}
            whileHover={{ y:-3, boxShadow:'0 12px 32px rgba(0,0,0,0.1)' }}
            style={{ background:k.grad, borderRadius:20, padding:'20px 22px', border:`1px solid ${k.border}`, cursor:'default', transition:'all 0.2s ease' }}
          >
            <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:14 }}>
              <div style={{ width:42, height:42, borderRadius:13, background:'white', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:`0 4px 12px ${k.iconBg}30` }}>
                <k.icon style={{ width:19, height:19, color:k.iconBg }}/>
              </div>
              <span style={{ fontSize:11, fontWeight:800, padding:'3px 9px', borderRadius:99, background:'white', color: k.up?'#166534':'#dc2626', boxShadow:'0 1px 3px rgba(0,0,0,0.08)' }}>
                {k.trend}
              </span>
            </div>
            <p style={{ fontSize:28, fontWeight:900, color:'#0f172a', lineHeight:1, margin:'0 0 4px' }}>{k.value}</p>
            <p style={{ fontSize:12, fontWeight:800, color:'#374151', margin:'0 0 2px' }}>{k.label}</p>
            <p style={{ fontSize:11, color:'#6b7280', margin:'0 0 12px', fontWeight:500 }}>{k.sub}</p>
            <div style={{ height:3, borderRadius:99, background:'rgba(0,0,0,0.07)', overflow:'hidden' }}>
              <motion.div initial={{ width:0 }} animate={{ width:'70%' }} transition={{ duration:1, delay:0.3 }}
                style={{ height:'100%', background:k.bar, borderRadius:99 }}/>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Row 1: Trend + Risk ── */}
      <motion.div variants={fadeUp} style={{ display:'grid', gridTemplateColumns:'2fr 1fr', gap:16 }}>

        {/* Satisfaction Trend */}
        <Card>
          <CardTitle title="Satisfaction Trend" sub="6-month rolling average" icon={TrendingUp}
            action={
              <div style={{ display:'flex', gap:14, fontSize:11, fontWeight:700, color:'#94a3b8' }}>
                <span style={{ display:'flex', alignItems:'center', gap:5 }}><span style={{ width:10, height:10, borderRadius:'50%', background:'#f59e0b', display:'inline-block' }}/>Score</span>
                <span style={{ display:'flex', alignItems:'center', gap:5 }}><span style={{ width:10, height:10, borderRadius:'50%', background:'#3b82f6', display:'inline-block' }}/>Users</span>
              </div>
            }
          />
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={TREND_DATA} margin={{ top:0, right:0, left:-20, bottom:0 }}>
              <defs>
                <linearGradient id="sGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#f59e0b" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="uGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#3b82f6" stopOpacity={0.12}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false}/>
              <XAxis dataKey="month" tick={{ fontSize:11, fill:'#94a3b8', fontWeight:600 }} axisLine={false} tickLine={false}/>
              <YAxis yAxisId="s" domain={[3,4]} tick={{ fontSize:10, fill:'#94a3b8' }} axisLine={false} tickLine={false}/>
              <YAxis yAxisId="u" orientation="right" tick={{ fontSize:10, fill:'#94a3b8' }} axisLine={false} tickLine={false}/>
              <Tooltip content={<ChartTip/>}/>
              <Area yAxisId="s" type="monotone" dataKey="score" name="Score" stroke="#f59e0b" strokeWidth={2.5} fill="url(#sGrad)" dot={{ r:4, fill:'#f59e0b', stroke:'white', strokeWidth:2 }} activeDot={{ r:6 }}/>
              <Area yAxisId="u" type="monotone" dataKey="users" name="Users" stroke="#3b82f6" strokeWidth={2} fill="url(#uGrad)" strokeDasharray="5 4" dot={false}/>
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Risk Donut */}
        <Card>
          <CardTitle title="Risk Distribution" sub="Customer risk segments"/>
          <ResponsiveContainer width="100%" height={140}>
            <PieChart>
              <Pie data={RISK_DATA} dataKey="value" cx="50%" cy="50%" innerRadius={40} outerRadius={62} paddingAngle={4} strokeWidth={0}>
                {RISK_DATA.map(e=><Cell key={e.name} fill={e.color}/>)}
              </Pie>
              <Tooltip formatter={v=>[`${v}%`]} contentStyle={{ borderRadius:12, fontSize:12, fontWeight:700, border:'none', boxShadow:'0 4px 24px rgba(0,0,0,0.12)' }}/>
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display:'flex', flexDirection:'column', gap:10, marginTop:4 }}>
            {RISK_DATA.map(({ name, value, color })=>(
              <div key={name} style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                <div style={{ display:'flex', alignItems:'center', gap:8, fontSize:13 }}>
                  <div style={{ width:10, height:10, borderRadius:'50%', background:color, flexShrink:0 }}/>
                  <span style={{ fontWeight:600, color:'#475569' }}>{name} Risk</span>
                </div>
                <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                  <div style={{ width:56, height:5, background:'#f1f5f9', borderRadius:99, overflow:'hidden' }}>
                    <div style={{ height:'100%', width:`${value}%`, background:color, borderRadius:99 }}/>
                  </div>
                  <span style={{ fontWeight:900, color:'#0f172a', fontSize:13, width:32, textAlign:'right' }}>{value}%</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* ── Row 2: Drivers + Branches ── */}
      <motion.div variants={fadeUp} style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>

        {/* Driver Impact */}
        <Card>
          <CardTitle title="Driver Impact" sub="Effect size by satisfaction driver" icon={BarChart2}/>
          <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
            {DRIVER_DATA.map(({ driver, impact, color })=>{
              const pct = Math.min(100, (impact/0.35)*100)
              return (
                <div key={driver}>
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:6 }}>
                    <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                      <div style={{ width:8, height:8, borderRadius:'50%', background:color, flexShrink:0 }}/>
                      <span style={{ fontSize:13, fontWeight:700, color:'#334155' }}>{driver}</span>
                    </div>
                    <span style={{ fontSize:13, fontWeight:900, color }}>{impact.toFixed(2)}</span>
                  </div>
                  <div style={{ height:7, background:'#f1f5f9', borderRadius:99, overflow:'hidden' }}>
                    <motion.div initial={{ width:0 }} animate={{ width:`${pct}%` }} transition={{ duration:0.9, ease:'easeOut', delay:0.2 }}
                      style={{ height:'100%', background:`linear-gradient(90deg,${color},${color}88)`, borderRadius:99 }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </Card>

        {/* Branch Performance */}
        <Card>
          <CardTitle title="Branch Performance" sub="Score vs previous period" icon={MapPin}/>
          <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
            {BRANCH_DATA.map(b=>(
              <div key={b.branch} style={{ display:'flex', alignItems:'center', gap:12, padding:'12px 14px', borderRadius:14, background:'#f8fafc', border:'1px solid #f1f5f9' }}>
                <div style={{ width:38, height:38, borderRadius:12, background:b.color+'18', border:`1.5px solid ${b.color}30`, display:'flex', alignItems:'center', justifyContent:'center', fontWeight:900, fontSize:12, color:b.color, flexShrink:0 }}>
                  {b.short}
                </div>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:3 }}>
                    <span style={{ fontWeight:800, color:'#0f172a', fontSize:13 }}>{b.branch}</span>
                    <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                      <span style={{ fontSize:18, fontWeight:900, color: b.score>=3.6?'#059669':b.score>=3.3?'#d97706':'#dc2626' }}>{b.score.toFixed(1)}</span>
                      <Trend val={b.score} prev={b.prev}/>
                    </div>
                  </div>
                  <div style={{ display:'flex', gap:10, fontSize:11, color:'#94a3b8', fontWeight:600 }}>
                    <span>{b.customers} customers</span>
                    <span style={{ color:'#d97706', fontWeight:800 }}>R² {b.r2}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop:14 }}>
            <ResponsiveContainer width="100%" height={70}>
              <BarChart data={BRANCH_DATA} barCategoryGap="40%">
                <XAxis dataKey="branch" tick={{ fontSize:10, fill:'#94a3b8', fontWeight:600 }} axisLine={false} tickLine={false}/>
                <YAxis domain={[0,5]} hide/>
                <Tooltip content={<ChartTip/>}/>
                <Bar dataKey="score" name="Score" radius={[6,6,0,0]}>
                  {BRANCH_DATA.map((b,i)=><Cell key={i} fill={b.color}/>)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </motion.div>

      {/* ── Activity Feed ── */}
      <motion.div variants={fadeUp}>
        <Card>
          <CardTitle title="Recent Activity" sub="Latest platform events" icon={Clock}/>
          <div>
            {ACTIVITY.map((a,i)=>(
              <div key={i} style={{ display:'flex', alignItems:'center', gap:14, padding:'12px 0', borderBottom: i<ACTIVITY.length-1?'1px solid #f8fafc':'none' }}>
                <div style={{ width:36, height:36, borderRadius:10, background:`${a.color}12`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:16, flexShrink:0 }}>
                  {a.icon}
                </div>
                <div style={{ flex:1, minWidth:0 }}>
                  <p style={{ fontSize:13, fontWeight:700, color:'#0f172a', margin:0 }}>{a.label}</p>
                  <p style={{ fontSize:11, color:'#94a3b8', margin:'2px 0 0', fontWeight:500 }}>{a.sub}</p>
                </div>
                <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                  <div style={{ width:6, height:6, borderRadius:'50%', background:a.color, flexShrink:0 }}/>
                  <span style={{ fontSize:11, color:'#94a3b8', fontWeight:600, whiteSpace:'nowrap' }}>{a.time}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

    </motion.div>
  )
}
