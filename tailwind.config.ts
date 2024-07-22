import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "airbnb": "#ff385c",
        "airbnb-dark": "#d50027",
        "airbnb-light": "#ffd0e0",
        "airbnb-text": "#818181",
      },
    },
  },
  plugins: [],
};
export default config;
