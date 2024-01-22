import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NEXTBOOK: ["NEXT BOOK", "serif"],
        NEUE: ["Neue Machina", "serif"],
      },
      scale:{
        99.8: "0.998"
      }
    },
  },
  plugins: [],
};
export default config;
