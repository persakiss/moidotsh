import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "fira-code": ["Fira Code", "monospace"],
      },
      keyframes: {
        blinker: {
          "50%": { opacity: "0" },
        },
        bounce: {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-20px)" },
          "60%": { transform: "translateY(-10px)" },
        },
        fall: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      animation: {
        blinker: "blinker 1s linear infinite",
        bounce: 'bounce 1s ease-in-out',
        fall: 'fall 3s infinite ease-in-out',

      },
      margin: {
        "-10": "-10px",
      },
    },
  },
  variants: {},
  plugins: [],
};
export default config;
