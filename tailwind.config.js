/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class", // ✅ enable class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#a855f7",
      },
    },
  },
  plugins: [],
};

export default config;