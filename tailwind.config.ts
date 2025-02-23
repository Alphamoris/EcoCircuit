import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': 'var(--primary-green)',
        'tech-blue': 'var(--tech-blue)',
        'accent-orange': 'var(--accent-orange)',
        'background': 'var(--background)',
        'text': 'var(--text)',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        opensans: ['var(--font-opensans)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
