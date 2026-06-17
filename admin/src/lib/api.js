/**
 * Admin API client. Talks to the deployed backend on Vercel (same backend +
 * Supabase database as the customer app). Override with window.__ROSHD_API_BASE__
 * before load to point at a local server.
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
