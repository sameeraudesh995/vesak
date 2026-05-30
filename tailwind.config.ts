import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        garamond: ['"EB Garamond"', 'serif'],
      },
      colors: {
        gold: { DEFAULT: '#C9A84C', light: '#F0D080', dim: '#8B6914' },
        saffron: { DEFAULT: '#E8841A', light: '#FFAD4A' },
        maroon: { DEFAULT: '#4A0E0E', mid: '#7A1C1C' },
        cream: { DEFAULT: '#FDF8EE', dark: '#F0E6CC' },
        deep: { DEFAULT: '#0D0B07', 2: '#1A1408' },
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'breathe': 'breathe 7s ease-in-out infinite',
        'rise': 'rise 8s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        'fade-up': 'fadeUp 1.2s ease both',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)', opacity: '0.7' },
          '50%': { transform: 'translateY(-20px) rotate(3deg)', opacity: '1' },
        },
        breathe: {
          '0%,100%': { transform: 'scale(1)', opacity: '0.7' },
          '50%': { transform: 'scale(1.12)', opacity: '1' },
        },
        rise: {
          '0%': { transform: 'translateY(0)', opacity: '0.8' },
          '100%': { transform: 'translateY(-100vh)', opacity: '0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
