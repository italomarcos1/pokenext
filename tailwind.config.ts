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
        type: {
          normal: "rgb(159,161,159)",
          fire: "rgb(230,40,41)",
          fighting: "rgb(255,128,0)",
          water: "rgb(41,128,239)",
          flying: "rgb(129,185,239)",
          grass: "rgb(63,161,41)",
          poison: "rgb(145,65,203)",
          electric: "rgb(250,192,0)",
          ground: "rgb(145,81,33)",
          psychic: "rgb(239,65,121)",
          rock: "rgb(175,169,129)",
          ice: "rgb(61,206,243)",
          bug: "rgb(145,161,25)",
          dragon: "rgb(80,96,225)",
          ghost: "rgb(112,65,112)",
          dark: "rgb(98,77,78)",
          steel: "rgb(96,161,184)",
          fairy: "rgb(239,112,239)"
        }
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
        'stagger-slide-in': {
          '0%': {
            transform: 'translateX(-6.25rem)',
            opacity: "0"
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: "1",
          },
        },
      },
      animation: {
        'pop-in-up': 'pop-in-up 0.25s ease-out',
        'stagger-slide-in': 'stagger-slide-in 0.375s ease-out',
      }
    },
  },
  plugins: [],
};

export default config;
