import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "blue-main": "#D9E6F7",
        "blue-sub": "#9E6EFE",
        "red-sub": "#F03D3D",
        "green-base": "#0BB07B",
        "black-1": "#4B4B4B",
        "pl-gray": "#EFF3F8",
      },

      spacing: {
        "47": "7.8125rem",
        "240": "24rem",
        "270": "33.5rem",
        "350": "44.5rem",
        "79": "18.75rem",
        "77": "17.5rem",
        "75": "9.375rem",
        "graphic-h": "12rem",
      },

      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",

        "4xl": "1.7rem",
      },
    },
  },
  plugins: [],
};
export default config;
