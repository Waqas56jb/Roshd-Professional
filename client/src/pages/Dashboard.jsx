import { useEffect } from 'react';
import dashboardHtml from '../dashboard/dashboard.html?raw';
import { initDashboard } from '../dashboard/engine.js';

/**
 * Customer dashboard. The markup is the original index.html dashboard, preserved
 * byte-identically (dashboard.html) and injected as-is; the original engine
 * (engine.js) drives it. It stays mounted (hidden) exactly like the original,
 * and `.open` is toggled by the engine (showDashboard / hideDashboard).
 */
export function Dashboard() {
  useEffect(() => {
    initDashboard();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: dashboardHtml }} />;
}

export default Dashboard;
