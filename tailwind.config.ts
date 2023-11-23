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
        purple: "#876AFE",
        yellow: "#FFBC02",
        blue: "#2F70F2",
        grey: "#A8A8A8",
      },
    },
  },
  plugins: [],
};
export default config;
