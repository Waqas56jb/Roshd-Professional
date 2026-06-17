/**
 * Admin API client. Same API_BASE detection as the customer app so it talks to
 * the same backend + database. In dev, Vite proxies /api → the Node server.
 */
export const API_BASE = (function () {
  const ROSHD_VERCEL_API_CANON = 'https://roshd-professional-s8lh.vercel.app';
  try {
    if (typeof window.__ROSHD_API_BASE__ === 'string' && window.__ROSHD_API_BASE__) {
      return String(window.__ROSHD_API_BASE__).replace(/\/$/, '');
    }
    const h = window.location.hostname;
    if (h === 'localhost' || h === '127.0.0.1' || h === '::1' || h === '[::1]') return window.location.origin;
    if (/^(192\.168\.\d{1,3}\.\d{1,3}|10\.\d{1,3}\.\d{1,3}\.\d{1,3}|172\.(1[6-9]|2\d|3[01])\.\d{1,3}\.\d{1,3})$/.test(h))
      return window.location.origin;
  } catch (_) {}
  return ROSHD_VERCEL_API_CANON;
})();

const TOKEN_KEY = 'roshd_admin_token';
export const getToken = () => { try { return localStorage.getItem(TOKEN_KEY) || ''; } catch { return ''; } };
export const setToken = (t) => { try { t ? localStorage.setItem(TOKEN_KEY, t) : localStorage.removeItem(TOKEN_KEY); } catch {} };

async function request(method, path, body) {
  const headers = { 'Content-Type': 'application/json' };
  const tok = getToken();
  if (tok) headers.Authorization = 'Bearer ' + tok;
  const res = await fetch(API_BASE + path, {
    method,
    headers,
    body: body != null ? JSON.stringify(body) : undefined,
  });
  let data = null;
  try { data = await res.json(); } catch (_) {}
  if (!res.ok) {
    const msg = (data && (data.message || data.error)) || `Request failed (${res.status})`;
    const err = new Error(msg);
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

export const api = {
  get: (p) => request('GET', p),
  post: (p, b) => request('POST', p, b),
  put: (p, b) => request('PUT', p, b),
  del: (p, b) => request('DELETE', p, b),
};

/**
 * Notify any open customer dashboard (same browser) to live-refresh after a save.
 * Mirrors the BroadcastChannel the dashboard listens on.
 */
export function notifyDashboard(type) {
  try {
    const ch = new BroadcastChannel('roshd_dashboard_sync');
    ch.postMessage({ type: type || 'config-updated' });
    ch.close();
  } catch (_) {}
}
