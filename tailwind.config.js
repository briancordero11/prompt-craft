/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8f9fa", // Replace with your desired background color
        foreground: "#000000", // Define foreground color to avoid missing class error
      },
    },
  },
  plugins: [],
};
