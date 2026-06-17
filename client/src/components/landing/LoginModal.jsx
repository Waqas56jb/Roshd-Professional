import { useState } from 'react';
import { API_BASE } from '../../lib/api.js';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { useUI } from '../../context/UIContext.jsx';
import PasswordField from './PasswordField.jsx';

/** LOGIN modal — ported from the original markup + handleLogin handler. */
export function LoginModal() {
  const { t, isAr } = useLanguage();
  const { loginOpen, closeLogin, switchToSignup, showToast, onLoginSuccess } = useUI();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const closeOnOverlay = (e) => {
    if (e.target === e.currentTarget) closeLogin();
  };

  async function handleLogin() {
    setError('');
    const em = (email || '').trim();
    if (!em || !password) {
      setError(t('Please enter your email and password.', 'يرجى إدخال البريد الإلكتروني وكلمة المرور.'));
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(API_BASE + '/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: em, password }),
      });
      let data = {};
      try { data = await res.json(); } catch (_) {}

      if (data.success) {
        try {
          localStorage.setItem('roshd_access_token', data.token);
          localStorage.setItem('roshd_refresh_token', data.refresh_token);
          localStorage.setItem('roshd_user', JSON.stringify(data.user || {}));
        } catch (_) {}
        closeLogin();
        onLoginSuccess && onLoginSuccess(data.user);
        showToast(t('Welcome back! Dashboard loaded.', 'مرحبًا بعودتك! تم تحميل لوحة التحكم.'));
        return;
      }

      const msg = data.message || (res.status === 429
        ? t('Too many attempts — wait a few minutes.', 'محاولات كثيرة — انتظر بضع دقائق.')
        : t('Invalid email or password.', 'البريد الإلكتروني أو كلمة المرور غير صحيحة.'));
      setError(msg);
    } catch (err) {
      // Never grant a session without a successful /api/auth/login.
      setError(t(
        'Could not reach the sign-in server. Check your connection and try again.',
        'تعذّر الاتصال بخادم تسجيل الدخول. تحقق من الاتصال وحاول مجدداً.'
      ));
      try { console.error('[roshd login]', err, 'API_BASE=', typeof API_BASE === 'string' ? API_BASE : ''); } catch (_) {}
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={`modal-overlay${loginOpen ? ' open' : ''}`} id="loginModal" onClick={closeOnOverlay}>
      <div className="modal">
        <div className="modal-header">
          <div className="modal-logo-row"><img src="/logo.png" alt="ROSHD" /><span className="modal-logo-text">ROSHD PROFESSIONAL</span></div>
          <div className="modal-title"><span className="en">Welcome Back</span><span className="ar">مرحبًا بعودتك</span></div>
          <div className="modal-subtitle"><span className="en">Sign in to access your analytics dashboard and make data-driven decisions.</span><span className="ar">سجّل الدخول للوصول إلى لوحة التحليلات واتخاذ قرارات مبنية على البيانات.</span></div>
          <button type="button" className="modal-close" onClick={closeLogin}>×</button>
        </div>
        <div className="modal-body">
          <div className={`modal-error${error ? ' show' : ''}`} id="loginError">{error}</div>
          <div className="form-group">
            <label className="form-label"><span className="en">Email Address</span><span className="ar">البريد الإلكتروني</span></label>
            <input type="email" className="form-input" id="loginEmail" data-ph-en="your@email.com" data-ph-ar="your@email.com" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label"><span className="en">Password</span><span className="ar">كلمة المرور</span></label>
            <PasswordField id="loginPassword" value={password} onChange={(e) => setPassword(e.target.value)} phEn="••••••••" phAr="••••••••" autoComplete="current-password" />
          </div>
          <button className="btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '8px' }} onClick={handleLogin} disabled={loading}>
            {loading ? (
              t('Signing in…', 'جارٍ تسجيل الدخول…')
            ) : (
              <>
                <span className="en">Sign In to Dashboard</span><span className="ar">الدخول إلى لوحة التحكم</span>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </>
            )}
          </button>
          <div className="modal-switch">
            <span className="en">Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); switchToSignup(); }}>Create Account</a></span>
            <span className="ar">ليس لديك حساب؟ <a href="#" onClick={(e) => { e.preventDefault(); switchToSignup(); }}>إنشاء حساب</a></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
