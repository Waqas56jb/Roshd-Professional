import { createContext, useContext, useState, useCallback, useEffect } from 'react';

/**
 * Shared landing-page UI state: login/signup modals + toast. Ported from the
 * original modal open/close handlers, including the document.body.style.overflow
 * locking and the Escape-to-close behavior.
 */
const UIContext = createContext(null);

export function UIProvider({ children, onLoginSuccess }) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [toastShow, setToastShow] = useState(false);

  const setBodyOverflow = (v) => {
    document.body.style.overflow = v;
  };

  const closeLogin = useCallback(() => {
    setLoginOpen(false);
    setSignupOpen((s) => {
      if (!s) setBodyOverflow('');
      return s;
    });
  }, []);

  const closeSignup = useCallback(() => {
    setSignupOpen(false);
    setLoginOpen((l) => {
      if (!l) setBodyOverflow('');
      return l;
    });
  }, []);

  const openLogin = useCallback((e) => {
    e && e.preventDefault && e.preventDefault();
    setSignupOpen(false);
    setLoginOpen(true);
    setBodyOverflow('hidden');
  }, []);

  const openSignup = useCallback((e) => {
    e && e.preventDefault && e.preventDefault();
    setLoginOpen(false);
    setSignupOpen(true);
    setBodyOverflow('hidden');
  }, []);

  const switchToSignup = useCallback(() => {
    closeLogin();
    setTimeout(() => openSignup(), 120);
  }, [closeLogin, openSignup]);

  const switchToLogin = useCallback(() => {
    closeSignup();
    setTimeout(() => openLogin(), 120);
  }, [closeSignup, openLogin]);

  const showToast = useCallback((msg) => {
    setToastMsg(msg);
    setToastShow(true);
    setTimeout(() => setToastShow(false), 4000);
  }, []);

  // Expose during render so the dashboard engine bridge (window.showToast) is
  // available before any child mount effect runs.
  if (typeof window !== 'undefined') {
    window.showToast = showToast;
  }

  // Escape closes the modals (mobile menu handles its own Escape in Navbar).
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') {
        closeLogin();
        closeSignup();
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [closeLogin, closeSignup]);

  return (
    <UIContext.Provider
      value={{
        loginOpen,
        signupOpen,
        openLogin,
        closeLogin,
        openSignup,
        closeSignup,
        switchToSignup,
        switchToLogin,
        showToast,
        toastMsg,
        toastShow,
        onLoginSuccess,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error('useUI must be used within UIProvider');
  return ctx;
}
