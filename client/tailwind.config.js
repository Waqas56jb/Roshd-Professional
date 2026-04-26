/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        roshd: {
          dark:       '#0f172a',
          navy:       '#1e293b',
          gold:       '#c9a227',
          'gold-light': '#f0d060',
          blue:       '#3b82f6',
          light:      '#f8fafc',
          muted:      '#64748b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        float:        'float 6s ease-in-out infinite',
        'float-d':    'float 6s ease-in-out 2s infinite',
        'float-d2':   'float 6s ease-in-out 4s infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        shimmer:      'shimmer 3s infinite',
        'fade-in':    'fadeIn 0.5s ease-out',
        'slide-up':   'slideUp 0.6s ease-out',
      },
      keyframes: {
        float:    { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-20px)' } },
        shimmer:  { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        fadeIn:   { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp:  { from: { opacity: 0, transform: 'translateY(30px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f2a1a 100%)',
        'gold-gradient': 'linear-gradient(135deg, #c9a227, #f0d060)',
      },
      boxShadow: {
        'gold': '0 4px 24px rgba(201,162,39,0.25)',
        'card': '0 4px 24px rgba(15,23,42,0.08)',
      },
    },
  },
  plugins: [],
}
