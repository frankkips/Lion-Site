/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'feldgrau':'#3F5E5A',
        'spring-green': '#20FC8F',
        'black-olive-lt':'#38423B',
        'black-olive':'#353831',
        'jet-black':'#2D2D2A',
      }
    },
  },
  plugins: [],
  
}

