import { useState, useEffect } from 'react'

const STORAGE_KEY = 'roshd_dashboard_config'
const CHANNEL_NAME = 'roshd_config'

export function useAdminConfig() {
  const [config, setConfig] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : null
    } catch { return null }
  })

  useEffect(() => {
    // BroadcastChannel: instant same-browser cross-tab sync
    let channel
    try {
      channel = new BroadcastChannel(CHANNEL_NAME)
      channel.onmessage = (e) => {
        if (e.data?.type === 'CONFIG_UPDATE') setConfig(e.data.cfg)
      }
    } catch {}

    // Storage event: fallback for different windows
    const onStorage = (e) => {
      if (e.key === STORAGE_KEY) {
        try { setConfig(e.newValue ? JSON.parse(e.newValue) : null) } catch {}
      }
    }
    window.addEventListener('storage', onStorage)

    return () => {
      try { channel?.close() } catch {}
      window.removeEventListener('storage', onStorage)
    }
  }, [])

  return config
}
