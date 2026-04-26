import { createContext, useContext, useState, useEffect } from 'react'

const PRESETS = {
  amber:  { accent:'#f59e0b', accentHover:'#d97706', accentLight:'#fef3c7', accentText:'#92400e', label:'Amber Gold' },
  blue:   { accent:'#3b82f6', accentHover:'#2563eb', accentLight:'#dbeafe', accentText:'#1e40af', label:'Ocean Blue' },
  emerald:{ accent:'#10b981', accentHover:'#059669', accentLight:'#d1fae5', accentText:'#065f46', label:'Emerald Green' },
  violet: { accent:'#8b5cf6', accentHover:'#7c3aed', accentLight:'#ede9fe', accentText:'#4c1d95', label:'Violet Purple' },
  rose:   { accent:'#f43f5e', accentHover:'#e11d48', accentLight:'#ffe4e6', accentText:'#9f1239', label:'Rose Red' },
  cyan:   { accent:'#06b6d4', accentHover:'#0891b2', accentLight:'#cffafe', accentText:'#164e63', label:'Cyan Sky' },
}

const ThemeCtx = createContext(null)

function applyTheme(key, custom) {
  const t = custom || PRESETS[key] || PRESETS.amber
  const root = document.documentElement
  root.style.setProperty('--accent',       t.accent)
  root.style.setProperty('--accent-hover', t.accentHover)
  root.style.setProperty('--accent-light', t.accentLight)
  root.style.setProperty('--accent-text',  t.accentText)
}

export function ThemeProvider({ children }) {
  const [themeKey, setThemeKey] = useState(() => localStorage.getItem('roshd_theme') || 'amber')
  const [customHex, setCustomHex] = useState(() => localStorage.getItem('roshd_custom') || '')

  useEffect(() => {
    if (customHex) {
      applyTheme(null, { accent: customHex, accentHover: customHex, accentLight: customHex + '20', accentText: '#1e293b' })
    } else {
      applyTheme(themeKey)
    }
  }, [themeKey, customHex])

  const setPreset = (key) => {
    setThemeKey(key); setCustomHex('')
    localStorage.setItem('roshd_theme', key)
    localStorage.removeItem('roshd_custom')
  }

  const setCustom = (hex) => {
    setCustomHex(hex)
    localStorage.setItem('roshd_custom', hex)
  }

  return (
    <ThemeCtx.Provider value={{ themeKey, customHex, presets: PRESETS, setPreset, setCustom }}>
      {children}
    </ThemeCtx.Provider>
  )
}

export const useTheme = () => useContext(ThemeCtx)
