import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        brand: {
          50:  '#e8f9ef',
          100: '#c5f0d8',
          200: '#8de0b3',
          300: '#4dcc87',
          400: '#1FAF5A',
          500: '#1a9a50',
          600: '#158043',
          700: '#106535',
          800: '#0b4a27',
          900: '#062f18',
        },
        accent: {
          lime: '#a3e635',
          limeLight: '#d4f99a',
          limeDark: '#7bc21a',
        },
        neutral: {
          50: '#ffffff',
          100: '#F5F5F5',
          150: '#efefef',
          200: '#e8e8e8',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#1a1a1a',
          950: '#111111',
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(135deg, #ffffff 0%, #F5F5F5 50%, #ffffff 100%)',
        'gradient-green': 'linear-gradient(135deg, #1FAF5A 0%, #158043 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
