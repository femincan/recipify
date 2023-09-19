/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['winter'],
  },
};
