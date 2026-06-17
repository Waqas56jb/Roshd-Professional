import { useState } from 'react';
import { API_BASE } from '../../lib/api.js';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { useUI } from '../../context/UIContext.jsx';
import PasswordField from './PasswordField.jsx';

/** SIGNUP modal — ported from the original markup + handleSignup handler. */
export function SignupModal() {
  const { t, isAr } = useLanguage();
  const { signupOpen, closeSignup, switchToLogin } = useUI();
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [cpw, setCpw] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const ph = (en, ar) => (isAr ? ar : en);

  const closeOnOverlay = (e) => {
    if (e.target === e.currentTarget) closeSignup();
  };

  async function handleSignup() {
    setError(''); setSuccess('');
    const f = first.trim(), l = last.trim(), em = email.trim();
    if (!f || !l || !em || !pw) { setError(t('Please fill in all required fields.', 'يرجى ملء جميع الحقول المطلوبة.')); return; }
    if (pw.length < 8) { setError(t('Password must be at least 8 characters.', 'يجب أن تكون كلمة المرور 8 أحرف على الأقل.')); return; }
    if (pw !== cpw) { setError(t('Passwords do not match.', 'كلمتا المرور غير متطابقتين.')); return; }

    setLoading(true);
    try {
      const res = await fetch(API_BASE + '/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: em, password: pw, first_name: f, last_name: l }),
      });
      let data = {};
      try { data = await res.json(); } catch (_) {}
      if (data.success) {
        setSuccess(t('Account created! You can now sign in.', 'تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول.'));
        setFirst(''); setLast(''); setEmail(''); setPw(''); setCpw('');
        setTimeout(switchToLogin, 1800);
        return;
      }
      setError(data.message || t('Could not create account.', 'تعذّر إنشاء الحساب.'));
    } catch (_) {
      setError(t('Could not reach the server.', 'تعذّر الاتصال بالخادم.'));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={`modal-overlay${signupOpen ? ' open' : ''}`} id="signupModal" onClick={closeOnOverlay}>
      <div className="modal">
        <div className="modal-header">
          <div className="modal-logo-row"><img src="/logo.png" alt="ROSHD" /><span className="modal-logo-text">ROSHD PROFESSIONAL</span></div>
          <div className="modal-title"><span className="en">Create Account</span><span className="ar">إنشاء حساب</span></div>
          <div className="modal-subtitle"><span className="en">Join ROSHD Professional to access your analytics dashboard.</span><span className="ar">انضم إلى رُشد الاحتراف للوصول إلى لوحة التحليلات.</span></div>
          <button type="button" className="modal-close" onClick={closeSignup}>×</button>
        </div>
        <div className="modal-body">
          <div className={`modal-error${error ? ' show' : ''}`} id="signupError">{error}</div>
          <div className={`modal-success${success ? ' show' : ''}`} id="signupSuccess">{success}</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div className="form-group"><label className="form-label"><span className="en">First Name</span><span className="ar">الاسم الأول</span></label><input type="text" className="form-input" id="signupFirstName" data-ph-en="First name" data-ph-ar="الاسم الأول" placeholder={ph('First name', 'الاسم الأول')} autoComplete="given-name" value={first} onChange={(e) => setFirst(e.target.value)} /></div>
            <div className="form-group"><label className="form-label"><span className="en">Last Name</span><span className="ar">اسم العائلة</span></label><input type="text" className="form-input" id="signupLastName" data-ph-en="Last name" data-ph-ar="اسم العائلة" placeholder={ph('Last name', 'اسم العائلة')} autoComplete="family-name" value={last} onChange={(e) => setLast(e.target.value)} /></div>
          </div>
          <div className="form-group"><label className="form-label"><span className="en">Email Address</span><span className="ar">البريد الإلكتروني</span></label><input type="email" className="form-input" id="signupEmail" data-ph-en="your@email.com" data-ph-ar="your@email.com" placeholder="your@email.com" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
          <div className="form-group">
            <label className="form-label"><span className="en">Password</span><span className="ar">كلمة المرور</span></label>
            <PasswordField id="signupPassword" value={pw} onChange={(e) => setPw(e.target.value)} phEn="Min. 8 characters" phAr="8 أحرف على الأقل" autoComplete="new-password" />
          </div>
          <div className="form-group">
            <label className="form-label"><span className="en">Confirm Password</span><span className="ar">تأكيد كلمة المرور</span></label>
            <PasswordField id="signupConfirmPassword" value={cpw} onChange={(e) => setCpw(e.target.value)} phEn="Re-enter password" phAr="أعد إدخال كلمة المرور" autoComplete="new-password" />
          </div>
          <button className="btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '8px' }} onClick={handleSignup} disabled={loading}>
            {loading ? (
              t('Creating account…', 'جارٍ إنشاء الحساب…')
            ) : (
              <>
                <span className="en">Create Account</span><span className="ar">إنشاء الحساب</span>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </>
            )}
          </button>
          <div className="modal-switch">
            <span className="en">Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); switchToLogin(); }}>Sign In</a></span>
            <span className="ar">لديك حساب بالفعل؟ <a href="#" onClick={(e) => { e.preventDefault(); switchToLogin(); }}>تسجيل الدخول</a></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupModal;
