/**
 * Build the per-combination override key EXACTLY like the customer engine's
 * dbBuildDashboardFilterKey(): geo (region OR branch) + service.
 *   region → "r:<value> | s:<value>"
 *   branch → "b:<value> | s:<value>"
 *   none   → "all | s:<value>" / "all | all"
 * Region & Branch are mutually exclusive (pick one).
 */
export function buildFilterKey({ region, branch, service }) {
  const r = (region || '').trim();
  const b = (branch || '').trim();
  const s = (service || '').trim();
  const geo = r ? 'r:' + r : b ? 'b:' + b : 'all';
  const svc = s ? 's:' + s : 'all';
  return geo + ' | ' + svc;
}

export function describeKey({ region, branch, service }) {
  const geo = region ? `Region: ${region}` : branch ? `Branch: ${branch}` : 'All (Region/Branch)';
  const svc = service ? `Service: ${service}` : 'All Services';
  return `${geo} · ${svc}`;
}
