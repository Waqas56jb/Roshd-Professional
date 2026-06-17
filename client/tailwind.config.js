/** @type {import('tailwindcss').Config} */
export default {
  // Tailwind is available for new/structural code. The original 3,524-line
  // stylesheet (src/styles/legacy.css) remains the source of visual truth, so
  // Tailwind's preflight is disabled to avoid altering the existing design.
  content: ['./index.html', './src/**/*.{js,jsx}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
