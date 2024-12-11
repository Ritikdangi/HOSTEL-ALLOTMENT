/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all files in src for Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
