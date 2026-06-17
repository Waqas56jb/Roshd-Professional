import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { useAuth } from './context/AuthContext.jsx';
import Layout from './components/Layout.jsx';
import Login from './pages/Login.jsx';
import Overview from './pages/Overview.jsx';
import Regions from './pages/Regions.jsx';
import Branches from './pages/Branches.jsx';
import Services from './pages/Services.jsx';
import Survey from './pages/Survey.jsx';
import Filters from './pages/Filters.jsx';
import ModelValues from './pages/ModelValues.jsx';
import ExecutiveText from './pages/ExecutiveText.jsx';
import Questionnaire from './pages/Questionnaire.jsx';
import Pilot from './pages/Pilot.jsx';
import Measurement from './pages/Measurement.jsx';
import ModelQuality from './pages/ModelQuality.jsx';
import Users from './pages/Users.jsx';
import Audit from './pages/Audit.jsx';
import Settings from './pages/Settings.jsx';

function Protected({ children }) {
  const { user, ready } = useAuth();
  const loc = useLocation();
  if (!ready) return <div className="grid h-full place-items-center text-ink-faint"><Loader2 className="animate-spin" size={26} /></div>;
  if (!user) return <Navigate to="/login" replace state={{ from: loc.pathname }} />;
  return children;
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/*"
        element={
          <Protected>
            <Layout>
              <Routes>
                <Route index element={<Overview />} />
                <Route path="regions" element={<Regions />} />
                <Route path="branches" element={<Branches />} />
                <Route path="services" element={<Services />} />
                <Route path="survey" element={<Survey />} />
                <Route path="filters" element={<Filters />} />
                <Route path="model-values" element={<ModelValues />} />
                <Route path="executive" element={<ExecutiveText />} />
                <Route path="questionnaire" element={<Questionnaire />} />
                <Route path="pilot" element={<Pilot />} />
                <Route path="measurement" element={<Measurement />} />
                <Route path="model-quality" element={<ModelQuality />} />
                <Route path="users" element={<Users />} />
                <Route path="audit" element={<Audit />} />
                <Route path="settings" element={<Settings />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Layout>
          </Protected>
        }
      />
    </Routes>
  );
}
