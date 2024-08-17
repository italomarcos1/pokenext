import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FBFDFD",
        lightBlack: "#1F1D1D",
        darkBlack: "#161617",
      },
      fontFamily: {
        kumbh: ['var(--font-kumbh)'],
        inter: ['var(--font-inter)']
      },
    },
  },
  plugins: [],
};

export default config;
