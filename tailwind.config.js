/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        /* custom colors */
        enpak1: '#745e27',
        enpak2: '#f4eddc',
        customAccent: '#98a2b3',
        customGray: '#eeeeee',
      }
    },
  },
  plugins: [],
}

