/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "text-white",
    "text-orange",
    "text-darkRed",
    "text-green",
    "text-red",
    "text-brown",
    "text-gold",
    "text-purewhite",
    "bg-purewhite",
    "bg-white",
    "bg-orange",
    "bg-darkRed",
    "bg-green",
    "bg-red",
    "bg-brown",
    "bg-gold",
  ],
  theme: {
    extend: {
      colors: {
        white: "#F8F9FA",
        orange: "#ff7900",
        darkRed: "#8E3B3D",
        green: "#697a21",
        red: "#dd403a",
        brown: "#3e363f",
        gold: "#b8b42d",
        purewhite: "#fff"
      },
    },
    plugins: [],
  },
};
