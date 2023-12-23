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
        blue: {
          50: '#cbd3d7',
          100: '#e3e7ea',
          700: '#276ac1',
          800: '#253e62',
          950: '#09111c',
        },
        slate: {
          50: '#f0f1f0',
          300: '#aebdc4',
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
