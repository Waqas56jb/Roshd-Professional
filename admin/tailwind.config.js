/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ROSHD identity — deep navy canvas + gold accent.
        navy: {
          950: '#070d1f',
          900: '#0a1228',
          850: '#0e1832',
          800: '#13203f',
          700: '#1b2c52',
          600: '#26396b',
        },
        gold: {
          DEFAULT: '#d4af55',
          light: '#e8c65c',
          dark: '#b8962e',
        },
        ink: {
          DEFAULT: '#e9edf6',
          soft: '#aab4c8',
          faint: '#6b7794',
        },
      },
      fontFamily: {
        sans: ['Inter', 'DM Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 8px 30px -12px rgba(0,0,0,0.6)',
        glow: '0 0 0 1px rgba(212,175,85,0.35), 0 8px 30px -8px rgba(212,175,85,0.25)',
      },
      borderRadius: {
        xl: '14px',
        '2xl': '18px',
      },
    },
  },
  plugins: [],
};
