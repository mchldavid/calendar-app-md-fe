/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        c1: "#393646",
        c2: "#4F4557",
        c3: "#6D5D6E",
        c4: "#F4EEE0",
        completed: "#03C988",
        pending: "#ECB365",
        delete: "#F15A59"
      },
    },
  },
  plugins: [],
}
