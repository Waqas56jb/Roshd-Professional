import { createContext, useContext, useState, useCallback, useEffect } from 'react';

/**
 * Language System — ported from the original index.html `setLanguage` / `t`.
 * The visual switch is driven by CSS: `html[data-lang="ar"] .en { display:none }`
 * and the reverse for `.ar`, so both languages stay in the DOM and only the
 * <html data-lang> attribute changes. Default is Arabic, same as the original.
 */
const LanguageContext = createContext(null);

function readInitialLang() {
  try {
    return localStorage.getItem('roshd-lang') || 'ar';
  } catch (e) {
    return 'ar';
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readInitialLang);

  // Faithful port of the original setLanguage(), including the dashboard
  // language buttons, placeholder/option swaps, and dashboard re-render hook.
  const setLanguage = useCallback((next) => {
    const isAr = next === 'ar';
    document.documentElement.setAttribute('data-lang', next);
    document.documentElement.setAttribute('lang', next);
    // Dashboard nav buttons (live in the injected dashboard markup, by id).
    const dbBtnAr = document.getElementById('db-btn-ar');
    const dbBtnEn = document.getElementById('db-btn-en');
    if (dbBtnAr) dbBtnAr.classList.toggle('active', isAr);
    if (dbBtnEn) dbBtnEn.classList.toggle('active', !isAr);
    // Placeholders.
    document.querySelectorAll('[data-ph-en]').forEach((el) => {
      el.placeholder = isAr ? (el.dataset.phAr || '') : (el.dataset.phEn || '');
    });
    // Dashboard filter <select> options.
    document.querySelectorAll('#customerDashboard select option[data-en]').forEach((opt) => {
      opt.textContent = isAr ? (opt.dataset.ar || opt.dataset.en) : opt.dataset.en;
    });
    try {
      localStorage.setItem('roshd-lang', next);
    } catch (e) {}
    // Re-render the dashboard if it is open (mirrors original setLanguage).
    try {
      const db = document.getElementById('customerDashboard');
      if (db && db.classList.contains('open') && typeof window.dbRender === 'function') {
        window.dbRender();
        const fb = document.querySelector('.db-filter-bar-scroll-outer');
        if (fb && typeof window.dbUpdateFilterBarScrollFade === 'function') {
          requestAnimationFrame(() => window.dbUpdateFilterBarScrollFade(fb));
        }
      }
    } catch (_) {}
    setLang(next);
  }, []);

  // Expose during render (not in an effect) so the dashboard engine's bridge
  // (window.setLanguage) is available before any child mount effect runs.
  if (typeof window !== 'undefined') {
    window.setLanguage = setLanguage;
  }

  // Apply the initial language attributes on mount (mirrors the original IIFE).
  useEffect(() => {
    setLanguage(readInitialLang());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const t = useCallback((en, ar) => (lang === 'ar' ? ar : en), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, isAr: lang === 'ar', setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
