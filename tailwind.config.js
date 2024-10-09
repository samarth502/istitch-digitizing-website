/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customGold1: '#D0A038',
        customGold2: '#EBC764',
        customWhite: '#E5E1CC',

        customBlue1: '#102044',
        customBlue2: '#2850AA',
        customWhite: '#E5E1CC',

        headerFooter: '#1F325C',
        goldenSand: '#D0A038',
        midnightBlue: '#102044',
        lightGray: '#F4F4F4'
      }
    },
    screens: {
      xs: '344px',
      // => @media (min-width: 640px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      customOne: '390px',
      customTwo: '412px',
      customThree: '430px',
      customFour: '360px',
      customFive: '820px'
    }
  },
  plugins: [require('tailwind-scrollbar-hide')]
};
