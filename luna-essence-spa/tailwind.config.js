/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base colors
        white: '#FFFFFF',
        black: '#0A0A0A',
        background: '#FBF7F0',

        // Primary (sage green)
        primary: {
          50: '#F4F6EF',
          100: '#E5ECDB',
          200: '#CFDBBB',
          300: '#AFC393',
          400: '#93AC6F',
          500: '#759052',
          600: '#5A713F',
          700: '#475833',
          800: '#3B482C',
          900: '#35402A',
        },

        // Secondary (beige/taupe)
        secondary: {
          50: '#F9F8F2',
          100: '#EDEBDA',
          200: '#E9E4C3',
          300: '#CDC699',
          400: '#B7AA6F',
          500: '#AA955D',
          600: '#957B4E',
          700: '#7C6242',
          800: '#66503A',
          900: '#2F2319',
        },

        // Neutral (grays)
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A1A1A1',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#0A0A0A',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Headings
        'h1': '56px',
        'h2': '40px',
        'h3': '32px',
        'h4': '24px',
        'h5': '20px',
        'h6': '18px',
        // Body
        'body-lg': '18px',
        'body-md': '16px',
        'body-sm': '14px',
        'body-xs': '12px',
        // Special
        'navlink': '16px',
        'cta': '16px',
      },
      maxWidth: {
        'container': '1188px',
        'desktop': '1440px',
      },
      spacing: {
        'gutter': '32px',
        'col': '90px',
      },
    },
  },
  plugins: [],
}