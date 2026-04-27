import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import App from './App'
import { AuthProvider } from './context/AuthContext'
import './index.css'

class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false, error: null } }
  static getDerivedStateFromError(error) { return { hasError: true, error } }
  componentDidCatch(error, info) { console.error('App error:', error, info) }
  render() {
    if (this.state.hasError) return (
      <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', background:'#0f172a', color:'white', fontFamily:'system-ui', padding:24, textAlign:'center' }}>
        <div style={{ fontSize:40, marginBottom:16 }}>⚠️</div>
        <h2 style={{ fontSize:22, fontWeight:800, marginBottom:8 }}>Something went wrong</h2>
        <p style={{ color:'rgba(255,255,255,0.5)', fontSize:14, marginBottom:24, maxWidth:360 }}>{this.state.error?.message || 'An unexpected error occurred.'}</p>
        <button onClick={() => window.location.href = '/'} style={{ padding:'12px 24px', background:'#f59e0b', color:'#0f172a', fontWeight:800, borderRadius:12, border:'none', cursor:'pointer', fontSize:14 }}>
          Go to Home
        </button>
      </div>
    )
    return this.props.children
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <AuthProvider>
          <App />
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: '#0f172a',
                color: '#fff',
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '14px',
              },
              success: { iconTheme: { primary: '#c9a227', secondary: '#fff' } },
            }}
          />
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
)
