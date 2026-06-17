import { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, AlertTriangle, X } from 'lucide-react';

const ToastContext = createContext(null);
let _id = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const push = useCallback((message, kind = 'success') => {
    const id = ++_id;
    setToasts((t) => [...t, { id, message, kind }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4000);
  }, []);

  const toast = {
    success: (m) => push(m, 'success'),
    error: (m) => push(m, 'error'),
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div className="fixed bottom-5 right-5 z-[100] flex flex-col gap-2 w-[340px] max-w-[90vw]">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`card flex items-start gap-3 px-4 py-3 text-sm border ${
              t.kind === 'error' ? 'border-red-500/30' : 'border-gold/30'
            }`}
          >
            {t.kind === 'error'
              ? <AlertTriangle size={18} className="text-red-400 mt-0.5 shrink-0" />
              : <CheckCircle2 size={18} className="text-gold mt-0.5 shrink-0" />}
            <span className="flex-1 text-ink-soft">{t.message}</span>
            <button onClick={() => setToasts((x) => x.filter((y) => y.id !== t.id))} className="text-ink-faint hover:text-ink">
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}
