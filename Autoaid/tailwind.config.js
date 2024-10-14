/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
        'Manrope':["Manrope", 'sans-serif']
    },
    colors:{
        "primary": '#FF6433',
        "secondary": '#661CE7',
        "mint-green": '#00D289',
        "steal-gray": '#E2E6E9',
        "light-gray": '#F2F2F2',
        "white": '#FFff',
        "dark-gry": '#1E1818',
        "gray":'#939191',
        "zinc": '#27272a',
        "orange": '#f97316',
        "darkOrange": '#ea580c',
        "black": '#000000',
    },
    extend: {},
  },
  plugins: [],
}