/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '330px',
        sms: '386px',
        smm: '410px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
        xll: '1380px',
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
        lightGray: 'rgba(242, 242, 242, 1);',
        yellowC: 'rgba(226, 176, 0, 0.8);',
        yello2: 'rgba(255, 195, 52, 1);',
        lightGray2: 'rgba(53, 53, 62, 1);',
        opacityWhite: 'rgba(255, 255, 255, 0.4);',
        opacityWhite1: 'rgba(255, 255, 255, 0.5);',
        whiteOpacity: 'rgba(255, 255, 255, 0.9);',
        lightBg: 'rgba(18, 18, 30, 1);',
        bgOpacity: 'rgba(255, 255, 255, 0.1);',
        yellowc3: 'rgba(255, 173, 173, 1);',
        cyberCol: 'rgba(106, 233, 103, 1);',
        byCol: 'rgba(100, 116, 139, 1);',
        mainBlue: 'rgba(0, 67, 206, 1);',
        dotCol: 'rgba(54, 58, 67, 1);',
        mainRed: 'rgba(239, 68, 68, 1);',
        mainDRed: 'rgb(215, 12, 12);',
        overlay: 'rgba(0, 0, 0, 0.70);',
        defautC: 'rgba(245, 245, 245, 1);',
        defautGray: 'rgba(111, 111, 111, 1);',
        superS: 'linear-gradient(98.47deg, #fb585a 9.77%, #953435 56.48%);',
        dOverlay: 'rgba(0, 0, 0, 0.2);',
        bg3: 'rgba(247, 247, 247, 1);',
        sideBarBg: 'rgba(249, 249, 249, 1);',
        higherCol: 'rgba(157, 161, 167, 1);',
        backBg: 'rgba(226, 230, 235, 1);',
        activeBg: 'rgba(215, 255, 215, 1);',
        unactiveBg: 'rgba(254, 226, 226, 1);',
        mainGreen: 'rgba(74, 168, 72, 1);',
        tintBlue: 'rgba(221, 234, 255, 1);',
        fileCol: 'rgba(169, 172, 180, 1);',
        lBlue: 'rgba(32, 90, 212, 1);',
        whiteW: 'rgba(250, 250, 250, 1);',
        opacityC: 'rgba(255, 255, 255, 0.3);',
        lightOpac: 'rgba(255, 255, 255, 0.8);',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        10: '10',
        50: '50',
        100: '100',
      },
    },
  },
  plugins: [],
};
