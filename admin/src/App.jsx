import { useCallback, useEffect } from "react";
import legacyAdminHtml from "../legacy-index.html?raw";
import customerDashboardHtml from "../../index.html?raw";

/** Must match legacy-index.html message handlers (cross-origin safe delivery into srcDoc iframe). */
const MSG_CUSTOMER_HTML = "roshd-customer-dashboard-html";
const MSG_REQUEST_HTML = "roshd-request-customer-dashboard-html";

function App() {
  const iframeRef = useRef(null);

  const pushCustomerHtmlToChild = useCallback((win) => {
    if (!win || typeof customerDashboardHtml !== "string" || !customerDashboardHtml.length) return;
    try {
      win.postMessage({ type: MSG_CUSTOMER_HTML, html: customerDashboardHtml }, "*");
    } catch (_) {}
  }, []);

  useEffect(() => {
    function onMessage(ev) {
      if (!ev.data || ev.data.type !== MSG_REQUEST_HTML) return;
      pushCustomerHtmlToChild(ev.source);
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [pushCustomerHtmlToChild]);

  return (
    <main className="admin-shell">
      <iframe
        title="ROSHD Admin Control Center"
        className="admin-legacy-frame"
        srcDoc={legacyAdminHtml}
        onLoad={(e) => pushCustomerHtmlToChild(e.currentTarget.contentWindow)}
      />
    </main>
  );
}

export default App;
