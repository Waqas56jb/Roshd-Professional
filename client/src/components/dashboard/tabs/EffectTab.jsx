import { motion } from 'framer-motion'

const stagger = { show:{ transition:{ staggerChildren:0.07 } } }
const fadeUp  = { hidden:{opacity:0,y:16}, show:{opacity:1,y:0,transition:{duration:0.38,ease:[0.22,1,0.36,1]}} }

export default function EffectTab({ data }) {
  return (
    <motion.div variants={stagger} initial="hidden" animate="show"
      style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:18}}
    >
      {/* Effect Size Bars */}
      <motion.div variants={fadeUp} className="dc-card">
        <p className="dc-card-title">Effect Size Deep Dive</p>
        <p className="dc-card-sub">How much each driver explains customer satisfaction variance.</p>
        <div style={{display:'flex',flexDirection:'column',gap:20}}>
          {data.drivers.map((d,i) => {
            const pct  = Math.min(100,(d.impact/0.35)*100)
            const col  = d.impact>=0.25?'#0f172a':d.impact>=0.12?'#f59e0b':'#ef4444'
            const size = d.impact>=0.25?'Large':d.impact>=0.12?'Medium':'Small'
            const sizeBg = d.impact>=0.25?{bg:'#e0e7ff',c:'#3730a3'}:d.impact>=0.12?{bg:'#fef3c7',c:'#92400e'}:{bg:'#fee2e2',c:'#991b1b'}
            return (
              <div key={d.name}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:8}}>
                  <div style={{display:'flex',alignItems:'center',gap:8}}>
                    <span style={{fontSize:13,fontWeight:900,color:'#0f172a'}}>{d.name}</span>
                    <span style={{fontSize:10,fontWeight:800,padding:'2px 8px',borderRadius:99,background:sizeBg.bg,color:sizeBg.c}}>{size}</span>
                  </div>
                  <div style={{display:'flex',alignItems:'center',gap:8}}>
                    <span style={{fontSize:11,color:'#94a3b8',fontWeight:600}}>avg {d.avg}</span>
                    <span style={{fontSize:14,fontWeight:900,color:col}}>f²={d.impact.toFixed(2)}</span>
                  </div>
                </div>
                <div style={{height:10,background:'#f1f5f9',borderRadius:99,overflow:'hidden',position:'relative'}}>
                  <motion.div
                    initial={{width:0}} animate={{width:`${pct}%`}}
                    transition={{duration:0.9,ease:[0.22,1,0.36,1],delay:i*0.1+0.2}}
                    style={{height:'100%',borderRadius:99,background:`linear-gradient(90deg,${col}dd,${col}66)`,position:'relative'}}
                  >
                    <div style={{position:'absolute',right:0,top:'50%',transform:'translateY(-50%)',width:12,height:12,borderRadius:'50%',background:col,border:'2px solid white',boxShadow:`0 0 0 2px ${col}44`}}/>
                  </motion.div>
                </div>
              </div>
            )
          })}
        </div>
        <div style={{marginTop:20,background:'#eff6ff',border:'1px solid #bfdbfe',borderRadius:14,padding:'12px 16px'}}>
          <p style={{fontSize:12,color:'#1e40af',lineHeight:1.55}}>
            <strong>Guide:</strong> f² ≈ 0.02 small · ≈ 0.15 medium · ≈ 0.35 large.
            Business context still matters alongside statistical significance.
          </p>
        </div>
      </motion.div>

      {/* Remove Driver Scenario */}
      <motion.div variants={fadeUp} className="dc-card">
        <p className="dc-card-title">Remove Driver Scenario</p>
        <p className="dc-card-sub">What happens if each driver is ignored entirely?</p>
        <div style={{display:'flex',flexDirection:'column',gap:10}}>
          {data.drivers.slice(0,4).map((d,i) => {
            const loss = Math.round(d.impact*100)
            const risk = d.impact>=0.2?'High':d.impact>=0.1?'Medium':'Low'
            const rCfg = {High:{bg:'#fee2e2',c:'#991b1b',bar:'#ef4444'},Medium:{bg:'#fef3c7',c:'#92400e',bar:'#f59e0b'},Low:{bg:'#dcfce7',c:'#166534',bar:'#10b981'}}[risk]
            return (
              <motion.div key={d.name}
                initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} transition={{delay:i*0.08}}
                style={{padding:'14px 16px',borderRadius:14,background:'#f8fafc',border:'1px solid #e5e9f0'}}
              >
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:10}}>
                  <div style={{display:'flex',alignItems:'center',gap:8}}>
                    <div style={{width:8,height:8,borderRadius:'50%',background:rCfg.bar,flexShrink:0}}/>
                    <span style={{fontWeight:900,fontSize:13,color:'#0f172a'}}>{d.name}</span>
                  </div>
                  <span style={{fontSize:11,fontWeight:900,padding:'3px 10px',borderRadius:99,background:rCfg.bg,color:rCfg.c}}>{risk} Risk</span>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:10}}>
                  <div style={{flex:1,height:6,background:'#e2e8f0',borderRadius:99,overflow:'hidden'}}>
                    <motion.div initial={{width:0}} animate={{width:`${loss}%`}}
                      transition={{duration:0.8,ease:'easeOut',delay:i*0.08+0.4}}
                      style={{height:'100%',borderRadius:99,background:rCfg.bar}}
                    />
                  </div>
                  <span style={{fontSize:12,fontWeight:900,color:rCfg.c,minWidth:80}}>−{loss}% R² loss</span>
                </div>
              </motion.div>
            )
          })}
        </div>
        <div style={{marginTop:14,background:'linear-gradient(135deg,#fef3c7,#fde68a)',border:'1px solid #f59e0b44',borderRadius:14,padding:'12px 16px'}}>
          <p style={{fontSize:12,color:'#92400e',lineHeight:1.55}}>
            <strong>Priority:</strong> Removing <strong>{data.drivers[0].name}</strong> carries the highest risk — {Math.round(data.drivers[0].impact*100)}% explanatory contribution lost.
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
