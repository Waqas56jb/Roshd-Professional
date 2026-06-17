/* ── Backend API base URL (same host in dev so GET/PUT use your running server + Supabase) ── */
// Ported verbatim from the original index.html so request behavior is identical.
export const API_BASE = (function () {
  /**
   * The one deployment that has Supabase env vars + `/api/*` wired
   * (verified: `/api/health` → `roshd_server_api: 2`, supabase connected).
   * Every other Vercel alias (3gs5, bare roshd-professional, …) lacks the
   * env vars and 500s on auth — so production frontends ALWAYS use this URL.
   * Override per-deployment by setting window.__ROSHD_API_BASE__ before this script.
   */
  const ROSHD_VERCEL_API_CANON = 'https://roshd-professional-s8lh.vercel.app';
  try {
    if (typeof window.__ROSHD_API_BASE__ === 'string' && window.__ROSHD_API_BASE__) {
      return String(window.__ROSHD_API_BASE__).replace(/\/$/, '');
    }
    const h = window.location.hostname;
    // Local development — frontend + API served from the same Node server.
    if (h === 'localhost' || h === '127.0.0.1' || h === '::1' || h === '[::1]') return window.location.origin;
    if (!h && window.location.protocol === 'file:') return 'http://localhost:5000';
    if (/^(192\.168\.\d{1,3}\.\d{1,3}|10\.\d{1,3}\.\d{1,3}\.\d{1,3}|172\.(1[6-9]|2\d|3[01])\.\d{1,3}\.\d{1,3})$/.test(h))
      return window.location.origin;
  } catch (_) {}
  // Any production host → the known-good backend.
  return ROSHD_VERCEL_API_CANON;
})();
