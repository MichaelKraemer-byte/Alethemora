import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        onyx: "#080808",
        charcoal: "#111111",
        "soul-gold": "#d4af37",
        "quantum-cyan": "#00E5FF"
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        glowGold: "0 0 40px rgba(212, 175, 55, 0.35)",
        glowCyan: "0 0 40px rgba(0, 229, 255, 0.3)"
      },
      backgroundImage: {
        "hex-grid":
          "radial-gradient(circle at center, rgba(212,175,55,0.08) 0, transparent 55%), linear-gradient(30deg, rgba(255,255,255,0.025) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,0.025) 87.5%, rgba(255,255,255,0.025)), linear-gradient(150deg, rgba(255,255,255,0.025) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,0.025) 87.5%, rgba(255,255,255,0.025)), linear-gradient(90deg, rgba(255,255,255,0.02) 2%, transparent 2.5%, transparent 97%, rgba(255,255,255,0.02) 97.5%, rgba(255,255,255,0.02))"
      }
    }
  },
  plugins: []
};

export default config;
