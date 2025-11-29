/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          50: '#EBF2FE',
          100: '#D7E6FD',
          200: '#AFCCFB',
          300: '#87B3F9',
          400: '#5F99F7',
          500: '#3B82F6',
          600: '#1D68E1',
          700: '#1650B3',
          800: '#103985',
          900: '#0A2157',
        },
        secondary: {
          DEFAULT: '#10B981',
          50: '#D1FAE5',
          100: '#A7F3D0',
          200: '#6EE7B7',
          300: '#34D399',
          400: '#10B981',
          500: '#059669',
          600: '#047857',
          700: '#065F46',
          800: '#064E3B',
          900: '#022C22',
        },
        accent: {
          DEFAULT: '#F59E0B',
          50: '#FEF3C7',
          100: '#FDE68A',
          200: '#FCD34D',
          300: '#FBBF24',
          400: '#F59E0B',
          500: '#D97706',
          600: '#B45309',
          700: '#92400E',
          800: '#78350F',
          900: '#451A03',
        },
      },
      fontFamily: {
        heading: ['Merriweather', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': '3rem',
        'h2': '2.5rem',
        'h3': '2rem',
      },
    },
  },
  plugins: [],
}