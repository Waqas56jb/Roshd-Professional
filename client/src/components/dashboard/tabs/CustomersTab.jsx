import { motion } from 'framer-motion'

const RISK = {
  High:   {bg:'#fee2e2',c:'#991b1b',dot:'#ef4444'},
  Medium: {bg:'#fef3c7',c:'#92400e',dot:'#f59e0b'},
  Low:    {bg:'#dcfce7',c:'#166534',dot:'#10b981'},
}
const SCORE_BG = v => v>=4?{bg:'#dcfce7',c:'#166534'}:v<=2?{bg:'#fee2e2',c:'#991b1b'}:{bg:'#f1f5f9',c:'#0f172a'}

export default function CustomersTab({ filteredCustomers }) {
  const riskCounts = Object.fromEntries(
    ['High','Medium','Low'].map(r=>[r,filteredCustomers.filter(c=>c.risk===r).length])
  )

  return (
    <div style={{display:'flex',flexDirection:'column',gap:14}}>
      {/* Summary row */}
      <div className="dc-cust-summary">
        {[
          {label:'Total Shown',    value:filteredCustomers.length, color:'#3b82f6', bg:'#eff6ff'},
          {label:'High Risk',      value:riskCounts.High,          color:'#ef4444', bg:'#fff1f2'},
          {label:'Medium Risk',    value:riskCounts.Medium,        color:'#f59e0b', bg:'#fffbeb'},
          {label:'Low Risk',       value:riskCounts.Low,           color:'#10b981', bg:'#f0fdf4'},
        ].map(s => (
          <motion.div key={s.label}
            initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}
            style={{background:s.bg,borderRadius:14,padding:'12px 16px',border:`1px solid ${s.color}25`}}
          >
            <p style={{fontSize:9,fontWeight:800,textTransform:'uppercase',letterSpacing:'0.12em',color:`${s.color}aa`,marginBottom:4}}>{s.label}</p>
            <p style={{fontSize:22,fontWeight:900,color:s.color}}>{s.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Table */}
      <div className="dc-card" style={{padding:0,overflow:'hidden'}}>
        <div style={{padding:'16px 20px',borderBottom:'1px solid #e5e9f0',background:'#fafbfc'}}>
          <p className="dc-card-title" style={{marginBottom:0}}>Customer Pattern View</p>
          <p className="dc-card-sub" style={{marginBottom:0,marginTop:3}}>Operational view for branch managers — customer-level signals behind the model.</p>
        </div>
        <div style={{overflowX:'auto'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:13}}>
            <thead>
              <tr style={{background:'#f8fafc'}}>
                {['#','Branch','Gender','Service','Quality','Comm.','Price','Speed','Risk'].map(h=>(
                  <th key={h} style={{textAlign:'left',padding:'11px 14px',fontSize:10,fontWeight:900,textTransform:'uppercase',letterSpacing:'0.1em',color:'#64748b',borderBottom:'1px solid #e5e9f0',whiteSpace:'nowrap'}}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.length===0 ? (
                <tr><td colSpan={9} style={{padding:48,textAlign:'center',color:'#94a3b8',fontWeight:600,fontSize:14}}>
                  No customer records for this segment combination.
                </td></tr>
              ) : filteredCustomers.map((c,i) => (
                <motion.tr key={c.id}
                  initial={{opacity:0}} animate={{opacity:1}} transition={{delay:i*0.04}}
                  style={{borderBottom:'1px solid #f1f5f9',transition:'background 0.15s'}}
                  onMouseEnter={e=>e.currentTarget.style.background='#f8faff'}
                  onMouseLeave={e=>e.currentTarget.style.background='transparent'}
                >
                  <td style={{padding:'11px 14px',fontWeight:900,color:'#94a3b8',fontSize:11}}>{i+1}</td>
                  <td style={{padding:'11px 14px',fontWeight:700,color:'#0f172a'}}>{c.branch}</td>
                  <td style={{padding:'11px 14px',color:'#475569',fontWeight:600}}>{c.gender}</td>
                  <td style={{padding:'11px 14px',color:'#475569',fontWeight:600}}>{c.service}</td>
                  {[c.quality,c.communication,c.price,c.speed].map((v,j)=>{
                    const s = SCORE_BG(v)
                    return (
                      <td key={j} style={{padding:'11px 14px'}}>
                        <span style={{display:'inline-flex',width:26,height:26,borderRadius:8,alignItems:'center',justifyContent:'center',fontWeight:900,fontSize:12,background:s.bg,color:s.c}}>
                          {v}
                        </span>
                      </td>
                    )
                  })}
                  <td style={{padding:'11px 14px'}}>
                    <span style={{display:'inline-block',padding:'4px 10px',borderRadius:99,fontSize:11,fontWeight:900,background:RISK[c.risk]?.bg||'#f1f5f9',color:RISK[c.risk]?.c||'#475569'}}>
                      {c.risk}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
