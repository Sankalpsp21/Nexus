import daisyui from 'daisyui';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {
      colors: {
        50: '#EBEBFF',
        100: '#D2D2FE',
        200: '#A6A4FE',
        300: '#7E7CFD',
        400: '#524FFD',
        500: '#2522FC',
        600: '#0703E2',
        700: '#0502AB',
        800: '#03026F',
        900: '#020137',
        950: '#01001E',
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [daisyui],
};
