/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  relative: true,
  theme: {
    extend: {
      backgroundImage: {
        'header-bg': "url('../assets/images/desktop/image-header.jpg')",
      },
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        barlow: ['Barlow', 'sans-serif'],
      },
      fontSize: {
        base: [
          '1rem',
          {
            lineHeight: '1.3125rem',
          },
        ],
        md: [
          '1.125rem',
          {
            lineHeight: '1.4375rem',
          },
        ],
      },
      colors: {
        'accent-red': 'hsl(7,99%,70%)',
        'accent-yellow': 'hsl(51,100%,49%)',
        'cyan-500': 'hsl(167,40%,24%)',
        'cyan-700': 'hsl(198,62%,41%)',
        'neutral-800': 'hsl(212,27%,19%)',
        'neutral-600': 'hsl(213,9%,39%)',
        'neutral-500': 'hsl(232,10%,55%)',
        'neutral-400': 'hsl(210,4%,67%)',
        'neutral-100': 'hsl(0,0%,100%)',
      },
    },
    screens: {
      sm: '500px',
      md: '700px',
      tablet: '880px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1600px',
    },
  },
  plugins: [],
}
