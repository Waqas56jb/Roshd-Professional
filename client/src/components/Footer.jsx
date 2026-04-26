import { Link } from 'react-router-dom'
import { BookOpen, Mail, Phone, Linkedin, Twitter, Globe, ArrowRight } from 'lucide-react'

const LINKS = {
  Services: [
    { label: 'Strategic Consulting', to: '/#services' },
    { label: 'Professional Training', to: '/#programs' },
    { label: 'Customer Intelligence', to: '/#services' },
    { label: 'Performance Analytics', to: '/#services' },
  ],
  Company: [
    { label: 'About Us',    to: '/#about' },
    { label: 'Programs',    to: '/#programs' },
    { label: 'Case Studies',to: '/' },
    { label: 'Careers',     to: '/' },
  ],
  Platform: [
    { label: 'Dashboard', to: '/dashboard' },
    { label: 'Sign Up',   to: '/signup' },
    { label: 'Login',     to: '/login' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(170deg,#020617 0%,#0f172a 60%,#0c1825 100%)', color: 'white' }}>

      {/* ── Top CTA strip ── */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '56px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <div>
            <h3 style={{ fontSize: 26, fontWeight: 900, color: 'white', letterSpacing: '-0.02em', marginBottom: 8 }}>
              Ready to elevate your organisation?
            </h3>
            <p style={{ fontSize: 15, color: 'rgba(148,163,184,0.75)', fontWeight: 400 }}>
              Start your free account today — no credit card required.
            </p>
          </div>
          <Link to="/signup"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, flexShrink: 0,
              padding: '14px 28px', borderRadius: 14,
              background: 'linear-gradient(135deg,#f59e0b,#d97706)',
              color: '#0f172a', fontWeight: 900, fontSize: 14,
              textDecoration: 'none', transition: 'all 0.2s',
              boxShadow: '0 8px 24px rgba(245,158,11,0.3)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 32px rgba(245,158,11,0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 8px 24px rgba(245,158,11,0.3)' }}
          >
            Get Started Free <ArrowRight style={{ width: 15, height: 15 }} />
          </Link>
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 32px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40 }} className="footer-grid">

          {/* Brand column */}
          <div>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ width: 44, height: 44, background: 'linear-gradient(135deg,#f59e0b,#d97706)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(245,158,11,0.25)' }}>
                <BookOpen style={{ width: 21, height: 21, color: 'white' }} />
              </div>
              <div>
                <p style={{ fontSize: 9, fontWeight: 900, letterSpacing: '0.3em', color: '#fbbf24', textTransform: 'uppercase', lineHeight: 1 }}>Roshd</p>
                <p style={{ fontSize: 17, fontWeight: 900, color: 'white', lineHeight: 1.2 }}>Professional</p>
              </div>
            </div>

            <p style={{ fontSize: 14, color: 'rgba(148,163,184,0.7)', lineHeight: 1.75, maxWidth: 280, marginBottom: 28 }}>
              Bridging knowledge with real-world excellence. Empowering organisations through consulting, training, and data-driven intelligence.
            </p>

            {/* Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
              {[
                { icon: Mail,  text: 'hello@roshd.pro' },
                { icon: Phone, text: '+966 50 000 0000' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 30, height: 30, background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon style={{ width: 13, height: 13, color: '#fbbf24' }} />
                  </div>
                  <span style={{ fontSize: 13, color: 'rgba(148,163,184,0.8)', fontWeight: 500 }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 8 }}>
              {[Linkedin, Twitter, Globe].map((Icon, i) => (
                <button key={i}
                  style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'rgba(148,163,184,0.7)', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background='#f59e0b'; e.currentTarget.style.borderColor='#f59e0b'; e.currentTarget.style.color='#0f172a' }}
                  onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.1)'; e.currentTarget.style.color='rgba(148,163,184,0.7)' }}
                >
                  <Icon style={{ width: 15, height: 15 }} />
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([title, items]) => (
            <div key={title}>
              <p style={{ fontSize: 11, fontWeight: 900, color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 20 }}>{title}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {items.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to}
                      style={{ fontSize: 14, color: 'rgba(148,163,184,0.65)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.15s' }}
                      onMouseEnter={e => e.currentTarget.style.color='rgba(255,255,255,0.9)'}
                      onMouseLeave={e => e.currentTarget.style.color='rgba(148,163,184,0.65)'}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '20px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <p style={{ fontSize: 13, color: 'rgba(100,116,139,0.7)', fontWeight: 500 }}>
            © {new Date().getFullYear()} Roshd Professional. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(t => (
              <Link key={t} to="/"
                style={{ fontSize: 13, color: 'rgba(100,116,139,0.7)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.color='rgba(255,255,255,0.8)'}
                onMouseLeave={e => e.currentTarget.style.color='rgba(100,116,139,0.7)'}
              >{t}</Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 639px)  { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}
