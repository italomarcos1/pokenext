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
      maxWidth: {
        "desktop": "80rem"
      },
      keyframes: {
        'pop-in-up': {
          '0%': {
            transform: 'translateY(1.5rem)',
            scale: "0.95",
            opacity: "0"
          },
          '100%': {
            transform: 'translateY(0)',
            scale: "1",
            opacity: "1"
          },
        },
      },
      animation: {
        'pop-in-up': 'pop-in-up 0.25s ease-out',
      }
    },
  },
  plugins: [],
};

export default config;
