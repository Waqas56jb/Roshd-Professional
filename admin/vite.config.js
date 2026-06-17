import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Admin runs on its own port and proxies /api to the Node server in dev,
// so API_BASE = window.location.origin works the same as the customer app.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    proxy: {
      '/api': {
        target: process.env.VITE_API_PROXY || 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});
