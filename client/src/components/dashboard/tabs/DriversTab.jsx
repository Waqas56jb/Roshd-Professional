import { motion } from 'framer-motion'

const stagger = { show:{ transition:{ staggerChildren:0.07 } } }
const fadeUp  = { hidden:{opacity:0,y:16}, show:{opacity:1,y:0,transition:{duration:0.38,ease:[0.22,1,0.36,1]}} }

const BADGE = {
  dark:  {bg:'#0f172a',color:'white'},
  amber: {bg:'#fef3c7',color:'#92400e'},
  red:   {bg:'#fee2e2',color:'#991b1b'},
  '':    {bg:'#f1f5f9',color:'#475569'},
}

export default function DriversTab({ data }) {
  return (
    <motion.div variants={stagger} initial="hidden" animate="show"
      className="dc-tab-grid"
    >
      {/* Bubble map */}
      <motion.div variants={fadeUp} className="dc-card">
        <p className="dc-card-title">Driver Impact Map</p>
        <p className="dc-card-sub">X = path coefficient · Y = avg score · Size = effect size</p>
        <div className="dc-driver-bubble-viz">
          {/* Grid lines */}
          {[25,50,75].map(p => (
            <div key={p} style={{position:'absolute',left:`${12+p*0.76}%`,top:0,bottom:36,width:1,background:'rgba(148,163,184,0.15)'}}/>
          ))}
          {[25,50,75].map(p => (
            <div key={p} style={{position:'absolute',bottom:`${12+p*0.72}%`,left:10,right:10,height:1,background:'rgba(148,163,184,0.15)'}}/>
          ))}
          {/* Axes */}
          <div style={{position:'absolute',bottom:36,left:10,right:10,height:1,background:'#cbd5e1'}}/>
          <div style={{position:'absolute',top:10,bottom:36,left:10,width:1,background:'#cbd5e1'}}/>
          <span style={{position:'absolute',bottom:8,left:'50%',transform:'translateX(-50%)',fontSize:9,color:'#94a3b8',fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase'}}>Path Coefficient →</span>
          {/* Bubbles */}
          {data.drivers.map((d,i) => {
            const left   = 14 + d.path * 72
            const bottom = 14 + (d.avg / 5) * 60
            const size   = 42 + d.impact * 140
            const isLow  = d.name === 'Speed'
            const colors = ['#0f172a','#3b82f6','#8b5cf6','#10b981','#ef4444']
            const c = isLow ? '#ef4444' : colors[i] || '#0f172a'
            return (
              <motion.div key={d.name}
                initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}}
                transition={{delay:i*0.1,type:'spring',stiffness:180,damping:20}}
                whileHover={{scale:1.12,zIndex:10}}
                title={`${d.name} | Path: ${d.path} | Impact: ${d.impact}`}
                style={{
                  position:'absolute',left:`${left}%`,bottom:`${bottom}%`,
                  width:size,height:size,transform:'translate(-50%,50%)',
                  borderRadius:'50%',display:'flex',alignItems:'center',
                  justifyContent:'center',textAlign:'center',cursor:'pointer',
                  background:isLow?'rgba(239,68,68,0.12)':`${c}12`,
                  border:`2px solid ${c}44`,
                  boxShadow:`0 4px 20px ${c}25`,zIndex:i+1,
                }}
              >
                <div>
                  <p style={{fontSize:Math.max(8,size/8.5),fontWeight:900,color:c,lineHeight:1.1}}>{d.name}</p>
                  <p style={{fontSize:9,color:`${c}99`,fontWeight:700}}>f²={d.impact.toFixed(2)}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Ranking table */}
      <motion.div variants={fadeUp} className="dc-card">
        <p className="dc-card-title">Driver Ranking</p>
        <p className="dc-card-sub">Priority by effect size, not average score.</p>
        <div style={{display:'flex',flexDirection:'column',gap:10}}>
          {data.drivers.map((d,i) => {
            const pct = Math.min(100,(d.impact/0.35)*100)
            const col = d.impact>=0.25?'#0f172a':d.impact>=0.12?'#f59e0b':'#ef4444'
            const bs  = BADGE[d.cls] || BADGE['']
            return (
              <motion.div key={d.name}
                initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} transition={{delay:i*0.08}}
                style={{padding:'12px 14px',borderRadius:14,background:'#f8fafc',border:'1px solid #e5e9f0',transition:'all 0.15s'}}
                onMouseEnter={e => { e.currentTarget.style.background='#f0f4ff'; e.currentTarget.style.borderColor='#c7d2fe' }}
                onMouseLeave={e => { e.currentTarget.style.background='#f8fafc'; e.currentTarget.style.borderColor='#e5e9f0' }}
              >
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:8}}>
                  <div style={{display:'flex',alignItems:'center',gap:8}}>
                    <div style={{width:24,height:24,borderRadius:6,background:`${col}18`,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,fontSize:11,color:col}}>
                      {i+1}
                    </div>
                    <span style={{fontWeight:900,fontSize:13,color:'#0f172a'}}>{d.name}</span>
                  </div>
                  <span style={{fontSize:11,fontWeight:900,padding:'3px 10px',borderRadius:99,background:bs.bg,color:bs.color}}>
                    {d.decision}
                  </span>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'1fr auto',gap:8,alignItems:'center'}}>
                  <div style={{height:6,background:'#e2e8f0',borderRadius:99,overflow:'hidden'}}>
                    <motion.div
                      initial={{width:0}} animate={{width:`${pct}%`}}
                      transition={{duration:0.9,ease:'easeOut',delay:i*0.1+0.3}}
                      style={{height:'100%',borderRadius:99,background:`linear-gradient(90deg,${col},${col}99)`}}
                    />
                  </div>
                  <div style={{display:'flex',gap:12,fontSize:11,fontWeight:700,color:'#64748b',whiteSpace:'nowrap'}}>
                    <span>Avg <strong style={{color:'#0f172a'}}>{d.avg}</strong></span>
                    <span>f²=<strong style={{color:col}}>{d.impact.toFixed(2)}</strong></span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </motion.div>
  )
}
