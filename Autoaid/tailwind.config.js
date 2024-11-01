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
        "black": '#000000'
    },
    extend: {
      borderColor: {
        'custom-gray': 'rgba(225, 225, 225, 0.43)',
      },
      boxShadow: {
        'custom-shadow': '0 28px 118px rgba(109, 108, 115, 0.12)',
      },
    },
  },
  plugins: [],
}