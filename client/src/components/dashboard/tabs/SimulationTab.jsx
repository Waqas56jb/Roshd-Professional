import { useState, useMemo, useRef, useEffect } from 'react'
import { motion, animate } from 'framer-motion'

const LEVERS = [
  { key:'q', label:'Quality',        driver:'Quality',        color:'#f59e0b', icon:'⭐' },
  { key:'c', label:'Communication',  driver:'Communication',  color:'#3b82f6', icon:'💬' },
  { key:'p', label:'Price Fairness', driver:'Price Fairness', color:'#10b981', icon:'💰' },
  { key:'s', label:'Speed',          driver:'Speed',          color:'#ef4444', icon:'⚡' },
]

function AnimNum({ value, decimals=2 }) {
  const ref = useRef(null)
  useEffect(() => {
    const node = ref.current; if (!node) return
    const ctrl = animate(0, value, {
      duration:0.8, ease:[0.22,1,0.36,1],
      onUpdate(v) { node.textContent = decimals ? v.toFixed(decimals) : Math.round(v) }
    })
    return () => ctrl.stop()
  }, [value])
  return <span ref={ref}/>
}

export default function SimulationTab({ data }) {
  const [vals, setVals] = useState({q:10,c:10,p:10,s:10})

  const map = useMemo(() => {
    const m={}; data.drivers.forEach(d=>{ m[d.name]=d.impact }); return m
  }, [data])

  const expected = useMemo(() => Math.min(5,
    data.score
    + vals.q*(map['Quality']||0.1)*0.11
    + vals.c*(map['Communication']||0.1)*0.11
    + vals.p*(map['Price Fairness']||0.1)*0.11
    + vals.s*(map['Speed']||0.01)*0.08
  ), [vals,data,map])

  const roi = useMemo(() => Math.round(
    (vals.q*(map['Quality']||0)+vals.c*(map['Communication']||0)
    +vals.p*(map['Price Fairness']||0)+vals.s*(map['Speed']||0))*100
  ), [vals,map])

  const lift    = expected - data.score
  const gaugeW  = Math.min(100,((expected-1)/4)*100)
  const gaugeColor = expected>=4?'#10b981':expected>=3?'#f59e0b':'#ef4444'

  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:18}}>

      {/* Controls */}
      <div style={{background:'linear-gradient(135deg,#0f172a 0%,#1a2744 100%)',borderRadius:20,padding:26,boxShadow:'0 8px 32px rgba(0,0,0,0.2)'}}>
        <div style={{marginBottom:24}}>
          <p style={{fontSize:18,fontWeight:900,color:'white',marginBottom:4}}>Decision Simulation Lab</p>
          <p style={{fontSize:12,color:'rgba(255,255,255,0.45)',lineHeight:1.5}}>
            Adjust improvement levers to estimate satisfaction lift based on driver strength.
          </p>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:22}}>
          {LEVERS.map(({key,label,driver,color,icon}) => {
            const impact  = map[driver]||0.01
            const isStrong= impact>=0.2
            const pct     = (vals[key]/20)*100
            return (
              <div key={key}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:10}}>
                  <div style={{display:'flex',alignItems:'center',gap:8}}>
                    <span>{icon}</span>
                    <span style={{fontSize:13,fontWeight:700,color:'rgba(255,255,255,0.88)'}}>{label}</span>
                    {isStrong&&<span style={{fontSize:9,fontWeight:900,background:'rgba(245,158,11,0.2)',color:'#f59e0b',padding:'2px 7px',borderRadius:99,textTransform:'uppercase',letterSpacing:'0.12em'}}>HIGH IMPACT</span>}
                  </div>
                  <span style={{fontSize:15,fontWeight:900,color:color}}>{vals[key]}%</span>
                </div>
                <div style={{position:'relative',height:6,background:'rgba(255,255,255,0.08)',borderRadius:99,marginBottom:4}}>
                  <div style={{position:'absolute',left:0,top:0,bottom:0,width:`${pct}%`,background:`linear-gradient(90deg,${color},${color}88)`,borderRadius:99,transition:'width 0.1s'}}/>
                </div>
                <input type="range" min={0} max={20} value={vals[key]}
                  onChange={e=>setVals(v=>({...v,[key]:+e.target.value}))}
                  className="sim-slider"
                  style={{marginTop:-2,'--thumb-color':color,accentColor:color}}
                />
                <div style={{display:'flex',justifyContent:'space-between',fontSize:9,color:'rgba(255,255,255,0.2)',fontWeight:600,marginTop:2}}>
                  <span>0%</span><span>10%</span><span>20%</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Results */}
      <div style={{display:'flex',flexDirection:'column',gap:14}}>
        {/* Score card */}
        <div style={{background:'white',borderRadius:20,padding:24,boxShadow:'0 4px 24px rgba(0,0,0,0.07)',border:'1px solid #e5e9f0'}}>
          <p style={{fontSize:10,fontWeight:900,textTransform:'uppercase',letterSpacing:'0.2em',color:'#94a3b8',marginBottom:8}}>Expected Satisfaction Score</p>
          <motion.div key={expected.toFixed(2)} initial={{scale:0.85,opacity:0}} animate={{scale:1,opacity:1}}
            transition={{type:'spring',stiffness:400,damping:30}}
          >
            <p style={{fontSize:64,fontWeight:900,color:gaugeColor,lineHeight:1}}>
              <AnimNum value={expected} decimals={2}/>
            </p>
          </motion.div>
          <div style={{display:'flex',alignItems:'center',gap:12,marginTop:8,marginBottom:16}}>
            <span style={{fontSize:13,color:'#64748b'}}>Baseline: <strong style={{color:'#0f172a'}}>{data.score.toFixed(2)}</strong> / 5</span>
            <span style={{fontSize:13,fontWeight:900,color:lift>0?'#10b981':'#94a3b8'}}>
              {lift>0?'+':''}{lift.toFixed(2)} pts ({((lift/data.score)*100).toFixed(1)}%)
            </span>
          </div>
          {/* Gauge */}
          <div>
            <div style={{display:'flex',justifyContent:'space-between',fontSize:10,color:'#94a3b8',fontWeight:600,marginBottom:6}}>
              <span>1.0 Poor</span><span>3.0 Average</span><span>5.0 Great</span>
            </div>
            <div style={{height:10,background:'#f1f5f9',borderRadius:99,overflow:'hidden'}}>
              <motion.div animate={{width:`${gaugeW}%`}} transition={{type:'spring',stiffness:80}}
                style={{height:'100%',borderRadius:99,background:`linear-gradient(90deg,#ef4444,#f59e0b,#10b981)`}}
              />
            </div>
          </div>
        </div>

        {/* ROI + advice */}
        <div style={{background:'linear-gradient(135deg,#0f172a,#1a2744)',borderRadius:20,padding:22,border:'1px solid rgba(255,255,255,0.06)'}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginBottom:16}}>
            <div style={{background:'rgba(245,158,11,0.1)',border:'1px solid rgba(245,158,11,0.2)',borderRadius:14,padding:'14px 16px'}}>
              <p style={{fontSize:9,fontWeight:900,textTransform:'uppercase',letterSpacing:'0.15em',color:'rgba(255,255,255,0.4)',marginBottom:5}}>ROI Index</p>
              <p style={{fontSize:28,fontWeight:900,color:'#f59e0b'}}>{roi}</p>
            </div>
            <div style={{background:'rgba(16,185,129,0.1)',border:'1px solid rgba(16,185,129,0.2)',borderRadius:14,padding:'14px 16px'}}>
              <p style={{fontSize:9,fontWeight:900,textTransform:'uppercase',letterSpacing:'0.15em',color:'rgba(255,255,255,0.4)',marginBottom:5}}>Best Lever</p>
              <p style={{fontSize:14,fontWeight:900,color:'#34d399'}}>{data.top}</p>
            </div>
          </div>
          <p style={{fontSize:12,color:'rgba(255,255,255,0.45)',lineHeight:1.6}}>
            Strongest lever: <strong style={{color:'#f59e0b'}}>{data.top}</strong>. Speed remains a low priority unless its effect size changes significantly.
          </p>
        </div>
      </div>
    </div>
  )
}
