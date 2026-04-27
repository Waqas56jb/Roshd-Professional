import { motion } from 'framer-motion'

const stagger = { show:{ transition:{ staggerChildren:0.1 } } }
const fadeUp  = { hidden:{opacity:0,y:20}, show:{opacity:1,y:0,transition:{duration:0.45,ease:[0.22,1,0.36,1]}} }

const SEG_COLORS = ['#3b82f6','#10b981','#f59e0b']
const SEG_ICONS  = ['🏙️','🏖️','🏭']

export default function SegmentsTab({ data, segments }) {
  return (
    <motion.div variants={stagger} initial="hidden" animate="show"
      style={{display:'flex',flexDirection:'column',gap:18}}
    >
      {/* Segment cards */}
      <div className="dc-tab-grid--seg">
        {segments.map((s,i) => (
          <motion.div key={s.branch} variants={fadeUp}
            style={{background:'white',borderRadius:20,border:`1px solid ${SEG_COLORS[i]}30`,boxShadow:'0 2px 12px rgba(0,0,0,0.05)',overflow:'hidden',transition:'transform 0.2s,box-shadow 0.2s'}}
            whileHover={{y:-4,boxShadow:'0 12px 32px rgba(0,0,0,0.1)'}}
          >
            <div style={{height:5,background:`linear-gradient(90deg,${SEG_COLORS[i]},${SEG_COLORS[i]}88)`}}/>
            <div style={{padding:'18px 20px'}}>
              <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:14}}>
                <div style={{width:42,height:42,borderRadius:12,background:`${SEG_COLORS[i]}14`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,flexShrink:0}}>
                  {SEG_ICONS[i]}
                </div>
                <div>
                  <p style={{fontSize:17,fontWeight:900,color:'#0f172a'}}>{s.branch}</p>
                  <p style={{fontSize:11,color:'#94a3b8',fontWeight:600}}>Branch Segment</p>
                </div>
              </div>
              <div className="dc-grid-2" style={{marginBottom:14}}>
                <div style={{background:'#f8fafc',borderRadius:12,padding:'10px 12px',border:'1px solid #e5e9f0'}}>
                  <p style={{fontSize:9,color:'#94a3b8',fontWeight:800,textTransform:'uppercase',letterSpacing:'0.12em',marginBottom:3}}>Top Driver</p>
                  <p style={{fontSize:14,fontWeight:900,color:SEG_COLORS[i]}}>{s.top}</p>
                </div>
                <div style={{background:'#f8fafc',borderRadius:12,padding:'10px 12px',border:'1px solid #e5e9f0'}}>
                  <p style={{fontSize:9,color:'#94a3b8',fontWeight:800,textTransform:'uppercase',letterSpacing:'0.12em',marginBottom:3}}>R² Score</p>
                  <p style={{fontSize:14,fontWeight:900,color:'#0f172a'}}>{s.exp}</p>
                </div>
              </div>
              <div style={{display:'flex',alignItems:'center',gap:8,flexWrap:'wrap'}}>
                <span style={{padding:'5px 11px',background:`${SEG_COLORS[i]}14`,color:SEG_COLORS[i],borderRadius:99,fontSize:11,fontWeight:900,border:`1px solid ${SEG_COLORS[i]}30`}}>
                  {s.impact}
                </span>
                <span style={{fontSize:12,color:'#475569',fontWeight:600}}>{s.action}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Key insight */}
      <motion.div variants={fadeUp} className="dc-card"
        style={{background:'linear-gradient(135deg,#0f172a,#1e293b)',border:'none'}}
      >
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:12}}>
          {[
            {label:'Branches Analyzed', value:'3',    sub:'Riyadh · Jeddah · Dammam', color:'#60a5fa'},
            {label:'Unique Top Drivers', value:'3',   sub:'Quality, Comm., Price',     color:'#34d399'},
            {label:'R² Variance',        value:'±5%', sub:'Across all segments',       color:'#f59e0b'},
            {label:'Key Principle',      value:'↗',   sub:'Segment ≠ One Plan',        color:'#c084fc'},
          ].map(item => (
            <div key={item.label} style={{background:'rgba(255,255,255,0.06)',borderRadius:14,padding:'14px 16px',border:'1px solid rgba(255,255,255,0.07)'}}>
              <p style={{fontSize:9,color:'rgba(255,255,255,0.35)',fontWeight:800,textTransform:'uppercase',letterSpacing:'0.12em',marginBottom:5}}>{item.label}</p>
              <p style={{fontSize:24,fontWeight:900,color:item.color,marginBottom:3}}>{item.value}</p>
              <p style={{fontSize:10,color:'rgba(255,255,255,0.4)',fontWeight:600}}>{item.sub}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
