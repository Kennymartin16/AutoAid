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
        "dark": '#1E1B1B',
    },
    extend: {},
  },
  plugins: [],
}