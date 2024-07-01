import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "flame-50": "#FFFAF5",
        "flame-100": "#FEE9D8",
        "flame-200": "#FDD3B7",
        "flame-500": "#EB5E28",
        "flame-600": "#E03C31",
        "flame-700": "#C5282D",
        "flame-800": "#9F1D24",
        "flame-900": "#421B0C",

        "wood-500": "#a37e56",

      }
    },
  },
  plugins: [],
};
export default config;
