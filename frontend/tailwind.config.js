/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: "#F19ED2",
          100: "#E8C5E5",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        text:{
          DEFAULT:'#624E88',
          title:'#F19ED2',
          100:'#8967B3'
        },
        btn:{
          primary: "#91DDCF",
          text:'#F19ED2',
          hover:'#E8C5E5',
          thover:'#1E1E2D',
        },
        backround: {
          DEFAULT: "#F7F9F2",
        },
      },
      fontFamily: {
        roboto: ['Roboto Mono', 'sans-serif'],
        rubik: ['Rubik Mono One', 'sans-serif'],
      },
      fontSize: {
        big: '2.75rem',
        h1: '1.5rem',
        h2: '1.25rem',
        h3: '1rem',
        normal: '0.938rem',
        small: '0.813rem',
        smaller: '0.75rem',
      },
      zIndex: {
        tooltip: '10',
        fixed: '100',
        modal: '1000',
      },
      screens: {
        // 自定义 max-width 断点
        'lg': {'max': '992px'}, 
        'md': {'max': '768px'},  
        'sm': {'max': '576px'}, 
        'xs': {'max': '350px'}, 
      }
    },
  },
  plugins: [],
}

