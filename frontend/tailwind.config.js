/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // white: "#fffce8",
        green: "#697a21",
        red: "#dd403a",
        darkRed: "#8E3B3D",
        brown: "#3e363f",
        gold: "#b8b42d",
      },
      keyframes: {
        backgroundColorCycle: {
          "0%, 100%": { backgroundColor: "#FF6666" },
          "25%": { backgroundColor: "#FF8081" },
          "50%": { backgroundColor: "#FFB3B3" },
          "75%": { backgroundColor: "#FFE5E4" },
        },
      },
      animation: {
        backgroundColorCycle: "backgroundColorCycle 8s infinite",
      },
    },
    plugins: [],
  },
};
