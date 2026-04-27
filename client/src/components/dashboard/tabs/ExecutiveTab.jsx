import { motion } from 'framer-motion'

const stagger = { show:{ transition:{ staggerChildren:0.07 } } }
const fadeUp  = { hidden:{opacity:0,y:16}, show:{opacity:1,y:0,transition:{duration:0.4,ease:[0.22,1,0.36,1]}} }

function ActionCard({ variant, title, items }) {
  const styles = {
    invest:   { wrap:'dc-action-invest',   title:{color:'white'},   text:{color:'rgba(255,255,255,0.78)'}, dot:'#f59e0b' },
    optimize: { wrap:'dc-action-optimize', title:{color:'#14532d'}, text:{color:'#166534'},                dot:'#22c55e' },
    avoid:    { wrap:'dc-action-avoid',    title:{color:'#881337'}, text:{color:'#9f1239'},                dot:'#ef4444' },
  }
  const s = styles[variant]
  return (
    <motion.div variants={fadeUp} className={s.wrap}>
      <p className="dc-action-title" style={s.title}>{title}</p>
      <ul className="dc-action-list">
        {items.map((item,i) => (
          <li key={i} className="dc-action-item" style={s.text}>
            <span className="dc-action-dot" style={{background:s.dot}}/>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

const FLOW = [
  { n:'01', l:'Filter',    s:'Branch / Gender / Service',   active:true  },
  { n:'02', l:'Model',     s:'Explanatory Power',           active:false },
  { n:'03', l:'Drivers',   s:'Path + Impact',               active:false },
  { n:'04', l:'Simulate',  s:'Expected lift',               active:false },
  { n:'05', l:'Recommend', s:'Do / optimize / avoid',       active:false },
]

export default function ExecutiveTab({ data }) {
  return (
    <motion.div variants={stagger} initial="hidden" animate="show"
      className="dc-tab-grid"
    >
      {/* Actions */}
      <motion.div variants={fadeUp} className="dc-card">
        <p className="dc-card-title">Executive Decision Summary</p>
        <p className="dc-card-sub">Designed for MD / C-level review — what to do, what to avoid, and why.</p>
        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          <ActionCard variant="invest"   title="🚀 Invest Now"           items={data.invest}   />
          <ActionCard variant="optimize" title="⚡ Optimize Selectively" items={data.optimize} />
          <ActionCard variant="avoid"    title="🚫 Avoid / Defer"        items={data.avoid}    />
        </div>
      </motion.div>

      {/* Logic + stats */}
      <div style={{display:'flex',flexDirection:'column',gap:14}}>
        <motion.div variants={fadeUp} className="dc-card">
          <p className="dc-card-title">Decision Logic</p>
          <p className="dc-card-sub">How the system arrives at its output.</p>
          <div style={{display:'flex',flexDirection:'column',gap:6}}>
            {FLOW.map(({n,l,s,active},i) => (
              <div key={n} style={{display:'flex',alignItems:'center',gap:12,padding:'10px 14px',borderRadius:12,background:active?'#0f172a':'#f8fafc',border:`1px solid ${active?'transparent':'#e5e9f0'}`}}>
                <div style={{width:28,height:28,borderRadius:8,background:active?'#f59e0b':'rgba(245,158,11,0.1)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,fontSize:11,color:active?'#0f172a':'#f59e0b',flexShrink:0}}>
                  {n}
                </div>
                <div>
                  <p style={{fontSize:13,fontWeight:900,color:active?'white':'#0f172a',lineHeight:1,marginBottom:2}}>{l}</p>
                  <p style={{fontSize:10,color:active?'rgba(255,255,255,0.5)':'#94a3b8',fontWeight:600}}>{s}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="dc-card" style={{background:'linear-gradient(135deg,#0f172a,#1e293b)',border:'none'}}>
          <p style={{fontSize:11,fontWeight:900,letterSpacing:'0.15em',textTransform:'uppercase',color:'rgba(255,255,255,0.4)',marginBottom:8}}>Core Rule</p>
          <p style={{fontSize:14,color:'rgba(255,255,255,0.85)',lineHeight:1.6}}>
            Low average score is <strong style={{color:'#f59e0b'}}>not</strong> a priority unless it has meaningful <strong style={{color:'#f59e0b'}}>effect size</strong>. Invest in what moves the needle.
          </p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(90px,1fr))',gap:8,marginTop:16}}>
            {[
              {label:'Score',  value:`${data.score.toFixed(1)}/5`, color:'#f59e0b'},
              {label:'R²',     value:`${data.explanatory}%`,       color:'#a78bfa'},
              {label:'Driver', value:data.top,                     color:'#34d399'},
            ].map(s => (
              <div key={s.label} style={{background:'rgba(255,255,255,0.06)',borderRadius:12,padding:'10px 12px',textAlign:'center',border:'1px solid rgba(255,255,255,0.07)'}}>
                <p style={{fontSize:9,color:'rgba(255,255,255,0.35)',fontWeight:800,textTransform:'uppercase',letterSpacing:'0.12em',marginBottom:3}}>{s.label}</p>
                <p style={{fontSize:16,fontWeight:900,color:s.color}}>{s.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
