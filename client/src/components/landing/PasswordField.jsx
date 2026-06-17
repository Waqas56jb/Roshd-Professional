import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext.jsx';

/**
 * Password input with show/hide toggle — ported from the `.pw-field` markup and
 * `togglePwVisibility`. Placeholder swaps with language exactly like the original
 * (data-ph-en / data-ph-ar). Controlled via value/onChange.
 */
export function PasswordField({ id, value, onChange, phEn, phAr, autoComplete }) {
  const { isAr } = useLanguage();
  const [masked, setMasked] = useState(true);
  const placeholder = isAr ? phAr : phEn;

  return (
    <div className="pw-field">
      <input
        type={masked ? 'password' : 'text'}
        className="form-input"
        id={id}
        value={value}
        onChange={onChange}
        data-ph-en={phEn}
        data-ph-ar={phAr}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
      <button type="button" className="pw-toggle" onClick={() => setMasked((m) => !m)}>
        <span className="pw-eye-open" hidden={!masked}>
          <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </span>
        <span className="pw-eye-off" hidden={masked}>
          <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
            <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
            <path d="M1 1l22 22" />
          </svg>
        </span>
      </button>
    </div>
  );
}

export default PasswordField;
