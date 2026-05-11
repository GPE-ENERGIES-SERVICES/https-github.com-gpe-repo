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
          50:  '#eef5f1',
          100: '#cfe3d8',
          200: '#9ec7b1',
          300: '#5a9474',
          400: '#2e5240',
          500: '#254437',
          600: '#1c342b',
          700: '#13241e',
          800: '#0a1511',
          900: '#040807',
        },
        accent: {
          lime: '#5a9474',
          limeLight: '#9ec7b1',
          limeDark: '#2e5240',
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
          900: '#1f3628',
          950: '#1a2e22',
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
        'gradient-green': 'linear-gradient(135deg, #2e5240 0%, #13241e 100%)',
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
