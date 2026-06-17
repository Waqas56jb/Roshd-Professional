import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { useUI } from '../../context/UIContext.jsx';

/** Top navigation — logo, EN/AR toggle, hamburger + mobile menu, scroll state. */
export function Navbar() {
  const { isAr, setLanguage } = useLanguage();
  const { openLogin, loginOpen, signupOpen } = useUI();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    if (!loginOpen && !signupOpen) document.body.style.overflow = '';
  }, [loginOpen, signupOpen]);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const toggleMenu = () => (menuOpen ? closeMenu() : openMenu());

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') closeMenu();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [closeMenu]);

  // Switching language closes an open mobile menu (mirrors original setLanguage).
  const switchLang = (lang) => {
    setLanguage(lang);
    if (menuOpen) closeMenu();
  };

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <a href="#" className="nav-logo">
          <img src="/logo.png" alt="ROSHD Professional" />
        </a>
        <div className="lang-toggle-nav">
          <button className={`lang-nav-btn${!isAr ? ' active' : ''}`} id="btn-en" onClick={() => switchLang('en')}>EN</button>
          <button className={`lang-nav-btn${isAr ? ' active' : ''}`} id="btn-ar" onClick={() => switchLang('ar')}>عر</button>
        </div>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          id="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span><span></span><span></span>
        </button>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
          <li><a href="#about" onClick={closeMenu}><span className="en">About</span><span className="ar">من نحن</span></a></li>
          <li><a href="#services" onClick={closeMenu}><span className="en">Solutions</span><span className="ar">الحلول</span></a></li>
          <li><a href="#platform" onClick={closeMenu}><span className="en">Platform</span><span className="ar">المنصة</span></a></li>
          <li><a href="#contact" onClick={closeMenu}><span className="en">Contact</span><span className="ar">تواصل معنا</span></a></li>
          <li className="nav-divider"></li>
          <li><a href="#" className="nav-btn" onClick={(e) => { openLogin(e); closeMenu(); }}><span className="en">Client Login</span><span className="ar">دخول العملاء</span></a></li>
        </ul>
      </nav>
      <div className={`mobile-nav-overlay${menuOpen ? ' open' : ''}`} id="mobileNavOverlay" onClick={closeMenu}></div>
    </>
  );
}

export default Navbar;
