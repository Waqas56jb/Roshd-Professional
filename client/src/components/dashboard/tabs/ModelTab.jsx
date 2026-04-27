import { motion } from 'framer-motion'

const stagger = { show:{ transition:{ staggerChildren:0.08 } } }
const fadeUp  = { hidden:{opacity:0,y:16}, show:{opacity:1,y:0,transition:{duration:0.4,ease:[0.22,1,0.36,1]}} }

const METRICS = [
  { label:'Explanatory Power', id:'dynamic',  sub:'Model strength',        color:'#8b5cf6', bg:'#f5f3ff' },
  { label:"Cronbach's Alpha",  value:'0.88',   sub:'Internal reliability',  color:'#3b82f6', bg:'#eff6ff' },
  { label:'Composite Rel.',    value:'0.91',   sub:'Scale consistency',     color:'#10b981', bg:'#f0fdf4' },
  { label:'AVE',               value:'0.64',   sub:'Convergent validity',   color:'#f59e0b', bg:'#fffbeb' },
  { label:'HTMT',              value:'✓ OK',   sub:'Discriminant validity', color:'#10b981', bg:'#f0fdf4' },
]

export default function ModelTab({ data }) {
  return (
    <motion.div variants={stagger} initial="hidden" animate="show"
      className="dc-tab-grid"
    >
      {/* Metrics */}
      <motion.div variants={fadeUp} className="dc-card">
        <p className="dc-card-title">Model Quality</p>
        <p className="dc-card-sub">Use this tab to build analytical credibility with stakeholders.</p>
        <div className="dc-model-metrics">
          {METRICS.map((m,i) => (
            <motion.div key={m.label}
              initial={{opacity:0,scale:0.88}} animate={{opacity:1,scale:1}}
              transition={{delay:i*0.08,type:'spring',stiffness:200}}
              className={i===0 ? 'dc-model-metric-hero' : undefined}
              style={{background:m.bg,borderRadius:14,padding:'14px 16px',border:`1px solid ${m.color}25`}}
              whileHover={{y:-2,boxShadow:'0 6px 20px rgba(0,0,0,0.07)'}}
            >
              <p style={{fontSize:9,fontWeight:800,textTransform:'uppercase',letterSpacing:'0.12em',color:`${m.color}99`,marginBottom:4}}>{m.label}</p>
              <p style={{fontSize:i===0?32:22,fontWeight:900,color:m.color,marginBottom:3}}>
                {m.id==='dynamic' ? `${data.explanatory}%` : m.value}
              </p>
              <p style={{fontSize:10,color:'#64748b',fontWeight:600}}>{m.sub}</p>
            </motion.div>
          ))}
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(90px,1fr))',gap:8,marginTop:14}}>
          {[
            {label:'Small',  range:'f² ≈ 0.02', bg:'#fee2e2',c:'#991b1b'},
            {label:'Medium', range:'f² ≈ 0.15', bg:'#fef3c7',c:'#92400e'},
            {label:'Large',  range:'f² ≈ 0.35', bg:'#dcfce7',c:'#166534'},
          ].map(s => (
            <div key={s.label} style={{background:s.bg,borderRadius:12,padding:'10px',textAlign:'center'}}>
              <p style={{fontSize:12,fontWeight:900,color:s.c}}>{s.label}</p>
              <p style={{fontSize:10,color:s.c,opacity:0.7}}>{s.range}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Explanations */}
      <div style={{display:'flex',flexDirection:'column',gap:12}}>
        <motion.div variants={fadeUp} className="dc-card">
          <p className="dc-card-title">Management Explanation</p>
          <p className="dc-card-sub">Use in client meetings and stakeholder presentations.</p>
          <div style={{display:'flex',flexDirection:'column',gap:10}}>
            {[
              {t:'What is Explanatory Power?',
               b:`R² (${data.explanatory}%) tells us how much of customer satisfaction variance is explained by the full model. It is model-level, not factor-level.`,
               bg:'#eff6ff',bd:'#bfdbfe',tc:'#1e40af'},
              {t:'Why low score ≠ high priority?',
               b:'Factor priority comes from path coefficients and effect size. A low-scoring factor like Speed can be low priority if its Impact is weak (e.g. 0.01).',
               bg:'#fef3c7',bd:'#fde68a',tc:'#92400e'},
              {t:'The correct decision rule:',
               b:'Effect size first → path coefficient → score. Investing in Speed solely because of a low average score wastes resources.',
               bg:'#f0fdf4',bd:'#bbf7d0',tc:'#166534'},
            ].map((note,i) => (
              <motion.div key={i}
                initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} transition={{delay:i*0.1+0.2}}
                style={{background:note.bg,border:`1px solid ${note.bd}`,borderRadius:14,padding:'14px 16px'}}
              >
                <p style={{fontSize:12,fontWeight:900,color:note.tc,marginBottom:5}}>{note.t}</p>
                <p style={{fontSize:12,color:note.tc,opacity:0.85,lineHeight:1.55}}>{note.b}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
