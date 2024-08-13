/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryBg: {
          default: '#131314',
          sideBar: '#1e1f20'
        }
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(270deg, #74EBD5 0%, #ffffff 50%, #9FACE6 100%)',
      },
    },
  },
  plugins: [],
}

