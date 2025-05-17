/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rt-black': '#000000',
        'rt-white': '#FFFFFF',
        'rt-gray': '#F2F2F2',
        'rt-gold': '#D4AF37',
        'rt-blue': '#1F6FEB',
      },
      keyframes: {
        'fade-in-scale': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in-scale': 'fade-in-scale 0.3s ease-in-out',
      },
    },
  }  
}
