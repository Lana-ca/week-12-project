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
        // Earthy, rooted colors
        earth: {
          green: "#4A5D3F",
          darkGreen: "#2C3E2A",
          red: "#8B4537",
          orange: "#C67B5C",
          brown: "#6B4423",
        },
        // Sea and sky blues
        water: {
          sky: "#7BA8C4",
          sea: "#4A6B7C",
          deep: "#2E4F5E",
        },
        // Warm tones for memories
        memory: {
          golden: "#D4A574",
          amber: "#C89858",
          sepia: "#9B7653",
        },
        // Parchment and paper
        parchment: {
          light: "#F4EFE8",
          medium: "#E8DFD2",
          dark: "#D4C4B0",
        },
      },
      fontFamily: {
        handwriting: ["Caveat", "cursive"],
        vintage: ["Crimson Text", "serif"],
        body: ["Lora", "serif"],
      },
      backgroundImage: {
        "paper-texture": "url('/textures/paper.png')",
        "vintage-paper": "url('/textures/vintage-paper.png')",
      },
    },
  },
  plugins: [],
};

export default config;
