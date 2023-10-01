/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      chivo: 'Chivo',
      sigmar: 'Sigmar One',
    },
    extend: {
      colors: {
        blue: '#00d1cd',
        lightBlue: '#f4ffff',
        darkerBlue: '#01b2af',
      },
    },
  },
  plugins: [],
};
