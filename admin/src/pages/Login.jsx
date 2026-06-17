import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, Loader2, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext.jsx';

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email.trim(), password);
      nav('/', { replace: true });
    } catch (err) {
      setError(err.message || 'Login failed.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid min-h-full place-items-center px-4 py-10">
      <div className="w-full max-w-[420px]">
        <div className="mb-6 text-center">
          <img src="/logo.png" alt="ROSHD" className="mx-auto h-14 w-14 rounded-xl object-contain" onError={(e) => (e.currentTarget.style.display = 'none')} />
          <h1 className="mt-4 text-2xl font-extrabold tracking-tight">ROSHD <span className="text-gold">Admin</span></h1>
          <p className="mt-1 text-sm text-ink-faint">Control Center — sign in to manage the platform</p>
        </div>
        <form onSubmit={submit} className="card p-6 space-y-4">
          {error && (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-3.5 py-2.5 text-sm text-red-300">{error}</div>
          )}
          <div>
            <label className="label">Email</label>
            <input className="input" type="email" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@roshd-professional.com" />
          </div>
          <div>
            <label className="label">Password</label>
            <div className="relative">
              <input className="input pr-11" type={show ? 'text' : 'password'} autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
              <button type="button" onClick={() => setShow((s) => !s)} className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-faint hover:text-ink">
                {show ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>
          </div>
          <button type="submit" disabled={loading} className="btn-gold w-full">
            {loading ? <Loader2 size={17} className="animate-spin" /> : <LogIn size={17} />}
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
        <p className="mt-4 text-center text-xs text-ink-faint">Authorized administrators only.</p>
      </div>
    </div>
  );
}
