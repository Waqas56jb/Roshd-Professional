import legacyAdminHtml from "../legacy-index.html?raw";

function App() {
  return (
    <main className="admin-shell">
      <iframe
        title="ROSHD Admin Control Center"
        className="admin-legacy-frame"
        srcDoc={legacyAdminHtml}
      />
    </main>
  );
}

export default App;
