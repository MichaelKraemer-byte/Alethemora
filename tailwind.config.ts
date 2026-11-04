import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        weiss: "#FFFFFF",
        beige: "#ECE4D7",
        sand: "#DDD2BF",
        tinte: {
          DEFAULT: "#2A2522",
          weich: "#5E564C"
        },
        gold: "#7A5F2A",
        rose: {
          DEFAULT: "#F6A6AB",
          hover: "#F28F96"
        }
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"]
      },
      backgroundImage: {
        "hex-grid":
          "linear-gradient(30deg, rgba(221,210,191,0.55) 12%, transparent 12.5%, transparent 87%, rgba(221,210,191,0.55) 87.5%, rgba(221,210,191,0.55)), linear-gradient(150deg, rgba(221,210,191,0.45) 12%, transparent 12.5%, transparent 87%, rgba(221,210,191,0.45) 87.5%, rgba(221,210,191,0.45)), linear-gradient(90deg, rgba(221,210,191,0.4) 2%, transparent 2.5%, transparent 97%, rgba(221,210,191,0.4) 97.5%, rgba(221,210,191,0.4))"
      }
    }
  },
  plugins: []
};

export default config;
