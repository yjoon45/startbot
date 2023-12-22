/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.25rem',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Adieu', 'Poppins', 'sans-serif'],
      },
      colors: {
        pink: {
          700: '#b60f52',
          600: '#dc1468',
        },
        fuchsia: {
          950: '#43155a',
        },
        blue: {
          950: '#081332',
          900: '#0f1030',
          800: '#394bb5',
        },
      },
      animation: {
        floatit: 'floatit 3s ease-in-out infinite',
      },
      keyframes: {
        floatit: {
          '0%': {
            transform: 'translatey(0px)',
          },
          '50%': {
            transform: 'translatey(-20px)',
          },
          '100%': {
            transform: 'translatey(0px)',
          },
        },
      },
    },
  },
  plugins: [],
};
