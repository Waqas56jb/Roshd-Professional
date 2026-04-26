import { useState, useEffect } from 'react'

const THEME_KEY    = 'roshd_theme_config'
const CHANNEL_NAME = 'roshd_theme'

export function useAdminTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const s = localStorage.getItem(THEME_KEY)
      return s ? JSON.parse(s) : null
    } catch { return null }
  })

  useEffect(() => {
    let channel
    try {
      channel = new BroadcastChannel(CHANNEL_NAME)
      channel.onmessage = (e) => {
        if (e.data?.type === 'THEME_UPDATE') setTheme(e.data.theme)
      }
    } catch {}

    const onStorage = (e) => {
      if (e.key === THEME_KEY) {
        try { setTheme(e.newValue ? JSON.parse(e.newValue) : null) } catch {}
      }
    }
    window.addEventListener('storage', onStorage)
    return () => {
      try { channel?.close() } catch {}
      window.removeEventListener('storage', onStorage)
    }
  }, [])

  // Apply theme as CSS custom properties on the document root
  useEffect(() => {
    if (!theme) return
    const root = document.documentElement
    const map = {
      '--dash-sidebar-bg':         theme.cd_sidebar_bg,
      '--dash-sidebar-accent':     theme.cd_sidebar_accent,
      '--dash-sidebar-text':       theme.cd_sidebar_text,
      '--dash-page-bg':            theme.cd_page_bg,
      '--dash-header-bg':          theme.cd_header_bg,
      '--dash-header-border':      theme.cd_header_border,
      '--dash-tab-active-bg':      theme.cd_tab_active_bg,
      '--dash-tab-active-text':    theme.cd_tab_active_text,
      '--dash-export-bg':          theme.cd_export_bg,
      '--dash-export-text':        theme.cd_export_text,
      '--dash-kpi-satisfaction':   theme.cd_kpi_satisfaction,
      '--dash-kpi-power':          theme.cd_kpi_power,
      '--dash-kpi-driver':         theme.cd_kpi_driver,
      '--dash-kpi-risk':           theme.cd_kpi_risk,
      '--dash-insight-badge':      theme.cd_insight_badge_bg,
      '--dash-nav-active-bg':      theme.cd_nav_active_bg,
    }
    Object.entries(map).forEach(([prop, val]) => {
      if (val) root.style.setProperty(prop, val)
    })
  }, [theme])

  return theme
}
