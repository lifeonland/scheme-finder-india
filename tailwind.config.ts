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
        brand: {
          blue: "#4F46E5",      // Reverted: Modern Enterprise Indigo
          accent: "#475569",    // Sophisticated Neutral Slate
          white: "#FFFFFF",
          neutral: "#F8FAFC",   // Clean Light Gray
          text: "#0F172A",      // Midnight Navy
          muted: "#64748B",     // Professional Slate
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
