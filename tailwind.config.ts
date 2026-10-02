import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#fafaf8",
        ink: "#141414",
        mark: "#ffe14d",
      },
    },
  },
  plugins: [],
};

export default config;
