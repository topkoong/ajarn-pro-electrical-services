/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    listStyleType: {
      square: 'square',
    },
    extend: {
      fontFamily: {
        'DM Sans': ['DM Sans', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
