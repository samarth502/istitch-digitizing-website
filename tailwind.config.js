/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customGold1: '#D0A038',
        customGold2: '#EBC764',
        customWhite: '#E5E1CC',
      },
    }
  },
  plugins: []
};
