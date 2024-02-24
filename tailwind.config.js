/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '375px',
        sms: '386px',
        smm: '410px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
        xxl: '1600px',
      },
      fontFamily: {
        barlow: ['Barlow Semi Condensed', 'sans-serif'],
        'poppins-bold': ['Poppins', 'sans-serif', '700'],
      },
      colors: {
        borderc: 'rgba(178, 178, 178, 1);',
        lightcol: 'rgba(255, 255, 255, 1);',
        mainyellow: 'rgba(255, 195, 52, 1);',
        colorOpacity: 'rgba(255, 255, 255, 0.2);',
        lightB: 'rgba(84, 84, 84, 1);',
        extraGray: 'rgba(238, 238, 238, 1);',
        borderLight: 'rgba(228, 228, 228, 1);',
        footerCol: 'rgba(157, 161, 167, 1);',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        10: '10',
        50: '50',
      },
    },
  },
  plugins: [],
};
