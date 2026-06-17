import { UIProvider } from './context/UIContext.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import LoginModal from './components/landing/LoginModal.jsx';
import SignupModal from './components/landing/SignupModal.jsx';
import Toast from './components/Toast.jsx';

/**
 * App shell. The original index.html is a single document where the customer
 * dashboard is an overlay (`#customerDashboard.open`) on top of the marketing
 * landing page — not a separate route. We preserve that exactly: the landing
 * page and the dashboard are both always mounted, and the engine toggles the
 * dashboard's `.open` class (on login, or auto-restore from a stored session).
 */
function App() {
  const handleLoginSuccess = (user) => {
    // The original handleLogin called showDashboard(user) directly.
    if (typeof window.showDashboard === 'function') window.showDashboard(user);
  };

  return (
    <UIProvider onLoginSuccess={handleLoginSuccess}>
      <LandingPage />
      <Dashboard />
      <LoginModal />
      <SignupModal />
      <Toast />
    </UIProvider>
  );
}

export default App;
