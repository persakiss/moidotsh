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
        'fira-code': ['Fira Code', 'monospace'],
      },
      keyframes: {
        blinker: {
          '50%': { opacity: '0' }
        }
      },
      animation: {
        blinker: 'blinker 1s linear infinite',
      },
      margin: {
        '-10': '-10px'
      }
    }
  },
  variants: {},
  plugins: [],
}
export default config;
