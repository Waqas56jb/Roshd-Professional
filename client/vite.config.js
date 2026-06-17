import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// In local dev the original frontend used `window.location.origin` as API base
// (frontend + Node API on the same host). With Vite on a separate port we proxy
// /api → the Node server so that logic stays identical.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: process.env.VITE_API_PROXY || 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});
