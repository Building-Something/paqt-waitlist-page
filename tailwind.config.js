/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      colors: {
        ink: {
          950: '#05060f',
          900: '#0a0c1c',
          800: '#10132b',
          700: '#1a1f3d',
        },
        brand: {
          50: '#eef4ff',
          100: '#dce8fe',
          200: '#c2d8fd',
          300: '#98bffb',
          400: '#679cf7',
          500: '#3f78f2',
          600: '#2a5ce7',
          700: '#234ad4',
          800: '#223dac',
          900: '#213888',
          950: '#192553',
        },
      },
      boxShadow: {
        soft: '0 2px 16px -4px rgba(5, 6, 15, 0.5), 0 8px 32px -8px rgba(5, 6, 15, 0.5)',
        card: '0 1px 2px rgba(5, 6, 15, 0.6), 0 16px 48px -12px rgba(5, 6, 15, 0.6)',
        glow: '0 0 0 1px rgba(127, 94, 246, 0.25), 0 12px 48px -12px rgba(127, 94, 246, 0.55)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
        'aurora-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'grid-move': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '56px 56px' },
        },
        marquee: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.7' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 55% 45% / 55% 45% 60% 40%' },
          '50%': { borderRadius: '40% 60% 45% 55% / 45% 55% 40% 60%' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'ticker': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.6s ease-out both',
        float: 'float 7s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'aurora-shift': 'aurora-shift 18s ease-in-out infinite',
        'grid-move': 'grid-move 12s linear infinite',
        marquee: 'marquee 30s linear infinite',
        shimmer: 'shimmer 3.5s linear infinite',
        'spin-slow': 'spin-slow 24s linear infinite',
        'pulse-ring': 'pulse-ring 2.4s ease-out infinite',
        blob: 'blob 12s ease-in-out infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
        ticker: 'ticker 40s linear infinite',
      },
    },
  },
  plugins: [],
};
