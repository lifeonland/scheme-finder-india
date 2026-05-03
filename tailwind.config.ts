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
        premium: {
          bg: "#050505",
          primary: "#6366f1", // Indigo
          secondary: "#a855f7", // Purple
          accent: "#ec4899", // Pink
          glass: "rgba(255, 255, 255, 0.03)",
          'glass-border': "rgba(255, 255, 255, 0.1)",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'premium-gradient': 'linear-gradient(to bottom right, #6366f1, #a855f7, #ec4899)',
      },
      animation: {
        'glow': 'glow 3s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          'from': { 'box-shadow': '0 0 20px -5px rgba(99, 102, 241, 0.5)' },
          'to': { 'box-shadow': '0 0 40px 0px rgba(168, 85, 247, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
