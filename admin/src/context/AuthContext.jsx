import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { api, getToken, setToken } from '../lib/api.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  // Restore session on load.
  useEffect(() => {
    (async () => {
      if (!getToken()) { setReady(true); return; }
      try {
        const me = await api.get('/api/auth/me');
        if (me && me.success) setUser(me.user);
        else setToken('');
      } catch (_) {
        setToken('');
      } finally {
        setReady(true);
      }
    })();
  }, []);

  const login = useCallback(async (email, password) => {
    const res = await api.post('/api/auth/login', { email, password });
    if (!res || !res.success) throw new Error((res && res.message) || 'Login failed.');
    setToken(res.token);
    setUser(res.user);
    return res.user;
  }, []);

  const logout = useCallback(() => {
    setToken('');
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, ready, login, logout, isAdmin: user?.role === 'admin' }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
