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
        black: {
          500: "#090816",
          700: "#272541",
          1000: "#000000"
        },
        gray: {
          50: "#DEDAC3",
          100: "#DFDEEA",
          150: "#E2E4EA",
          160: "#E0E2E8",
          200: "#F3F3F6",
          300: "#F6F6F7",
          350: "#D9D9D9",
          400: "#F0F1F3",
          450: "#FAFAFC",
          500: "#47474D",
          600: "#9C9CA7",
        },
        brown: {
          100: "#E5DDCE",
        },
        orange: {
          500: "#FFD400"
        },
        blue: {
          100: "#EBEEF7",
          500: "#00259B"
        },
        green: {
          500: "#3EBD23"
        },
        red: {
          500: "#D72424"
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      lineHeight: {
        'df': '25.6px',
      },
      borderRadius: {
        'df': '20px',
      },
      maxWidth: {
        'container': '1280px',
        'container-slick': '1312px',
        'container-jumbotron': '1392px',
      },
    },
  },
  plugins: [],
};
export default config;
