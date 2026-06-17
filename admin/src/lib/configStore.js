import { api, notifyDashboard } from './api.js';

/** Canonical KV keys the customer dashboard reads (must match the engine). */
export const KEYS = {
  filterBar: 'roshd_filter_bar_config',
  executive: 'roshd_executive_overrides',
  cxDrivers: 'roshd_cx_drivers_overrides',
  units: 'roshd_units_performance_overrides',
  demographics: 'roshd_demographics_overrides',
  customerPatterns: 'roshd_customer_patterns_overrides',
  questionnaire: 'roshd_questionnaire_overrides',
  pilot: 'roshd_pilot_analysis_overrides',
  modelQuality: 'roshd_model_quality_overrides',
  dbModel: 'roshd_dashboard_db_model',
};

/** Load the full config bundle from roshd_config_kv. */
export async function loadConfig() {
  try {
    const r = await api.get('/api/roshd/config');
    return (r && r.configs) || {};
  } catch {
    return {};
  }
}

/** Load a single key's payload (object), with a fallback. */
export async function loadKey(key, fallback = {}) {
  const all = await loadConfig();
  const v = all[key];
  return v != null && typeof v === 'object' ? v : fallback;
}

/** Persist one or more keys, then ping any open dashboard to refresh live. */
export async function saveConfig(configs) {
  await api.put('/api/roshd/config', { configs });
  notifyDashboard('config-updated');
}

export async function saveKey(key, payload) {
  await saveConfig({ [key]: payload });
}
