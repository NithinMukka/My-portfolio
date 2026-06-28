/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#10b981', // emerald-500
          soft: '#34d399', // emerald-400
          deep: '#059669', // emerald-600
        },
      },
      keyframes: {
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
      },
      animation: {
        reveal: 'reveal 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        float: 'float 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
