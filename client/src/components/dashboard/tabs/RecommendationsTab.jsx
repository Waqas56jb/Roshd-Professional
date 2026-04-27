import { motion } from 'framer-motion'

const stagger = { show:{ transition:{ staggerChildren:0.07 } } }
const fadeUp  = { hidden:{opacity:0,y:16}, show:{opacity:1,y:0,transition:{duration:0.38,ease:[0.22,1,0.36,1]}} }

export default function RecommendationsTab({ data }) {
  return (
    <motion.div variants={stagger} initial="hidden" animate="show"
      style={{display:'flex',flexDirection:'column',gap:18}}
    >
      {/* Header strip */}
      <motion.div variants={fadeUp}
        style={{background:'linear-gradient(135deg,#0f172a,#1e293b)',borderRadius:20,padding:'20px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:14}}
      >
        <div>
          <p style={{fontSize:18,fontWeight:900,color:'white',marginBottom:3}}>Final Recommendations</p>
          <p style={{fontSize:12,color:'rgba(255,255,255,0.45)'}}>Auto-generated output for the selected segment. Ready for management presentation.</p>
        </div>
        <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
          {[
            {label:'Priority #1', value:data.drivers[0]?.name,  color:'#f59e0b'},
            {label:'Score',       value:`${data.score.toFixed(1)}/5`,color:'#34d399'},
            {label:'R²',          value:`${data.explanatory}%`, color:'#a78bfa'},
          ].map(s => (
            <div key={s.label} style={{background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:12,padding:'8px 14px',textAlign:'center'}}>
              <p style={{fontSize:9,color:'rgba(255,255,255,0.4)',fontWeight:800,textTransform:'uppercase',letterSpacing:'0.12em',marginBottom:3}}>{s.label}</p>
              <p style={{fontSize:16,fontWeight:900,color:s.color}}>{s.value}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Action cards */}
      <motion.div variants={fadeUp} className="dc-rec-actions">
        {[
          {variant:'invest',   title:'🚀 Invest Now',           items:data.invest},
          {variant:'optimize', title:'⚡ Optimize Selectively', items:data.optimize},
          {variant:'avoid',    title:'🚫 Avoid / Defer',        items:data.avoid},
        ].map(({variant,title,items}) => {
          const s = {
            invest:   {wrap:'dc-action-invest',   titleC:'white',       textC:'rgba(255,255,255,0.78)',dot:'#f59e0b'},
            optimize: {wrap:'dc-action-optimize', titleC:'#14532d',     textC:'#166534',               dot:'#22c55e'},
            avoid:    {wrap:'dc-action-avoid',    titleC:'#881337',     textC:'#9f1239',               dot:'#ef4444'},
          }[variant]
          return (
            <div key={variant} className={s.wrap}>
              <p className="dc-action-title" style={{color:s.titleC}}>{title}</p>
              <ul className="dc-action-list">
                {items.map((item,i) => (
                  <li key={i} className="dc-action-item" style={{color:s.textC}}>
                    <span className="dc-action-dot" style={{background:s.dot}}/>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </motion.div>

      {/* Summary metrics */}
      <motion.div variants={fadeUp} className="dc-cust-summary" style={{ gap: 12 }}>
        {[
          {label:'Invest Actions',    value:data.invest.length,                  color:'#0f172a', bg:'#f1f5f9'},
          {label:'Optimize Actions',  value:data.optimize.length,                color:'#166534', bg:'#f0fdf4'},
          {label:'Avoid Actions',     value:data.avoid.length,                   color:'#991b1b', bg:'#fff1f2'},
          {label:'Total Actions',     value:data.invest.length+data.optimize.length+data.avoid.length, color:'#1e40af', bg:'#eff6ff'},
        ].map(s => (
          <div key={s.label} style={{background:s.bg,borderRadius:14,padding:'14px 16px',border:`1px solid ${s.color}20`}}>
            <p style={{fontSize:9,color:`${s.color}88`,fontWeight:800,textTransform:'uppercase',letterSpacing:'0.12em',marginBottom:4}}>{s.label}</p>
            <p style={{fontSize:26,fontWeight:900,color:s.color}}>{s.value}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}
