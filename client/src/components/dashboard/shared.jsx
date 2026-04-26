// ── Badge ─────────────────────────────────────────────────────────
export function Badge({ cls, text }) {
  const map = {
    dark:  { bg:'#0f172a', color:'white' },
    red:   { bg:'#fee2e2', color:'#991b1b' },
    amber: { bg:'#fef3c7', color:'#92400e' },
    green: { bg:'#dcfce7', color:'#166534' },
    '':    { bg:'#f1f5f9', color:'#475569' },
  }
  const s = map[cls] || map['']
  return (
    <span style={{
      display:'inline-flex', alignItems:'center',
      padding:'4px 10px', borderRadius:99,
      fontSize:11, fontWeight:900,
      background:s.bg, color:s.color,
      whiteSpace:'nowrap',
    }}>{text}</span>
  )
}

// ── Info Note ────────────────────────────────────────────────────
export function InfoNote({ children }) {
  return (
    <div style={{
      background:'#eff6ff', border:'1px solid #bfdbfe',
      color:'#1e40af', borderRadius:14,
      padding:'14px 16px', fontSize:13, lineHeight:1.6, marginTop:14,
    }}>
      {children}
    </div>
  )
}

// ── Card wrapper ─────────────────────────────────────────────────
export function Card({ children, style = {} }) {
  return (
    <div style={{
      background:'white', borderRadius:20,
      border:'1px solid #e2e8f0',
      boxShadow:'0 1px 4px rgba(0,0,0,0.05)',
      padding:24, ...style,
    }}>
      {children}
    </div>
  )
}

// ── Section heading ──────────────────────────────────────────────
export function SectionTitle({ children, sub }) {
  return (
    <div style={{ marginBottom:16 }}>
      <h2 style={{ fontSize:18, fontWeight:900, color:'#0f172a', margin:0 }}>{children}</h2>
      {sub && <p style={{ fontSize:13, color:'#64748b', marginTop:4, marginBottom:0 }}>{sub}</p>}
    </div>
  )
}

// ── Action Card ──────────────────────────────────────────────────
const ACTION_STYLES = {
  invest:   { bg:'#0f172a', border:'#0f172a', titleColor:'white',    textColor:'rgba(255,255,255,0.8)', dotColor:'#f59e0b' },
  optimize: { bg:'#f0fdf4', border:'#bbf7d0', titleColor:'#14532d',  textColor:'#166534',               dotColor:'#22c55e' },
  avoid:    { bg:'#fff1f2', border:'#fecdd3', titleColor:'#881337',  textColor:'#9f1239',               dotColor:'#ef4444' },
}

export function ActionCard({ title, items, variant = 'invest' }) {
  const s = ACTION_STYLES[variant]
  return (
    <div style={{ background:s.bg, border:`1px solid ${s.border}`, borderRadius:18, padding:20 }}>
      <h3 style={{ fontSize:15, fontWeight:900, color:s.titleColor, marginBottom:12, marginTop:0 }}>{title}</h3>
      <ul style={{ margin:0, padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:8 }}>
        {items.map((item, i) => (
          <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:8, fontSize:13, lineHeight:1.45, color:s.textColor }}>
            <span style={{ width:6, height:6, borderRadius:'50%', background:s.dotColor, flexShrink:0, marginTop:5 }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
