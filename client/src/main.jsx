import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext.jsx';
import App from './App.jsx';

// Tailwind first, then the preserved legacy stylesheet (source of visual truth),
// then the additive polish layer (header/footer/filters/sidebar/responsive).
import './styles/tailwind.css';
import './styles/legacy.css';
import './styles/polish.css';
import './styles/polish-deep.css';
import './styles/polish-sidebar.css';
import './styles/polish-header.css';
import './styles/polish-cards.css';

// StrictMode is intentionally omitted: the dashboard engine drives an injected
// DOM subtree imperatively, and StrictMode's dev double-mount would re-inject
// that subtree and detach the engine's element references. Production behavior
// is unaffected either way.
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </BrowserRouter>
);
