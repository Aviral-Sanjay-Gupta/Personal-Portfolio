/** @type {import('tailwindcss').Config} */
const config: import('tailwindcss').Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable dark mode via class
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glow-soft': '0 0 20px rgba(255, 255, 255, 0.1)',
        'glow-dark': '0 0 20px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        parallax: 'parallax 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        parallax: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
 
export default config;