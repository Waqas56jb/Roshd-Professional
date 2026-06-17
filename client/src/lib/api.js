/* ── Backend API base URL ──────────────────────────────────────────────────
 * The customer app (and the dashboard engine) call the deployed backend on
 * Vercel for every /api/* request. Override per-deployment by setting
 * window.__ROSHD_API_BASE__ before this module loads (e.g. to a local server).
 */
const ROSHD_BACKEND_URL = 'https://roshd-professional-backend.vercel.app';

export const API_BASE = (function () {
  try {
    if (typeof window !== 'undefined' && typeof window.__ROSHD_API_BASE__ === 'string' && window.__ROSHD_API_BASE__) {
      return String(window.__ROSHD_API_BASE__).replace(/\/$/, '');
    }
  } catch (_) {}
  return ROSHD_BACKEND_URL;
})();
