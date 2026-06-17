import { useEffect } from 'react';
import { X, Loader2, Inbox } from 'lucide-react';

export function PageHeader({ title, subtitle, actions }) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
      <div>
        <h2 className="text-xl font-bold">{title}</h2>
        {subtitle && <p className="text-sm text-ink-faint mt-1 max-w-2xl">{subtitle}</p>}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}

export function Spinner({ label }) {
  return (
    <div className="grid place-items-center py-16 text-ink-faint">
      <Loader2 className="animate-spin" size={24} />
      {label && <span className="mt-3 text-sm">{label}</span>}
    </div>
  );
}

export function EmptyState({ title, hint, action }) {
  return (
    <div className="card grid place-items-center py-14 text-center">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/5 text-ink-faint"><Inbox size={22} /></span>
      <div className="mt-3 text-sm font-semibold text-ink">{title}</div>
      {hint && <div className="mt-1 text-xs text-ink-faint max-w-sm">{hint}</div>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

export function Field({ label, children, hint }) {
  return (
    <div>
      {label && <label className="label">{label}</label>}
      {children}
      {hint && <p className="mt-1 text-[11px] text-ink-faint">{hint}</p>}
    </div>
  );
}

/** EN + AR side-by-side text inputs. */
export function Bilingual({ label, en, ar, onEn, onAr, placeholder, textarea }) {
  const C = textarea ? 'textarea' : 'input';
  return (
    <Field label={label}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <C className="input" rows={textarea ? 3 : undefined} value={en || ''} onChange={(e) => onEn(e.target.value)} placeholder={placeholder ? `EN — ${placeholder}` : 'English'} />
        <C className="input text-right" dir="rtl" rows={textarea ? 3 : undefined} value={ar || ''} onChange={(e) => onAr(e.target.value)} placeholder="العربية" />
      </div>
    </Field>
  );
}

export function Toggle({ checked, onChange, label }) {
  return (
    <button type="button" onClick={() => onChange(!checked)} className="inline-flex items-center gap-2 text-sm">
      <span className={`relative h-6 w-11 rounded-full transition ${checked ? 'bg-gold' : 'bg-white/15'}`}>
        <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-navy-950 transition ${checked ? 'left-[22px]' : 'left-0.5'}`} />
      </span>
      {label && <span className="text-ink-soft">{label}</span>}
    </button>
  );
}

export function Modal({ open, onClose, title, children, footer, wide }) {
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[80] grid place-items-center p-4">
      <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" onClick={onClose} />
      <div className={`card relative w-full ${wide ? 'max-w-3xl' : 'max-w-lg'} max-h-[88vh] overflow-y-auto`}>
        <div className="sticky top-0 flex items-center justify-between border-b border-white/5 bg-navy-850/95 px-5 py-3.5 backdrop-blur">
          <h3 className="text-sm font-bold">{title}</h3>
          <button onClick={onClose} className="text-ink-faint hover:text-ink"><X size={18} /></button>
        </div>
        <div className="p-5">{children}</div>
        {footer && <div className="sticky bottom-0 flex justify-end gap-2 border-t border-white/5 bg-navy-850/95 px-5 py-3.5 backdrop-blur">{footer}</div>}
      </div>
    </div>
  );
}

export function Confirm({ open, onClose, onConfirm, title, message }) {
  return (
    <Modal open={open} onClose={onClose} title={title || 'Confirm'}
      footer={<>
        <button className="btn-ghost" onClick={onClose}>Cancel</button>
        <button className="btn-danger" onClick={onConfirm}>Delete</button>
      </>}>
      <p className="text-sm text-ink-soft">{message || 'Are you sure? This cannot be undone.'}</p>
    </Modal>
  );
}
