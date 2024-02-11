import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Michroma: ["Michroma", "sans-serif"],
        Saira: ["Saira", "sans-serif"],
        Stalinist: ["Stalinist One", "sans-serif"],
        Coda: ["Coda", "sans-serif"],
        Goldman: ["Goldman", "sans-serif"],
        Alien: ["Alien-Encounters-Solid-Bold", "sans-serif"],
      },
      colors:{
        gradient: `linear-gradient(0deg, #000000, #000000),
        linear-gradient(198.97deg, #FFFFFF 25.67%, #000000 149.68%)`,
        primary:{
          100: '#0B0A0A'
        },
        secondary: {
          100: '#FFFBFB',
          200: 'rgba(217, 217, 217, 0.5)',
          300: '#D9D9D9',
          400: 'rgba(255, 23, 23, 1)',
          500: 'rgba(247, 255, 236, 1)'
        }
      },
      fontSize: {
        xs: ["0.875rem", { lineHeight: "1.5rem" }],
        sm: ["1rem", { lineHeight: "1.5rem" }],
        md: ["1.125rem", { lineHeight: "1.625rem" }],
        lg: ["1.5rem", { lineHeight: "2.1875rem" }],
        xl: ["1.625rem", { lineHeight: "2rem" }],
        "2xl": ["2.25rem", { lineHeight: "2.75rem" }],
        "3xl": ["3.375rem", { lineHeight: "3.875rem" }],
        "4xl": ["3.5rem", { lineHeight: "4.125rem" }],
        "6xl": ["4rem", { lineHeight: "4.5rem" }],
        "7xl": ["6.25rem", { lineHeight: "6.25rem" }],
        "8xl": ["8rem", { lineHeight: "6.65rem" }],
      },
      backgroundImage: {
        // 'coming-soon-1': `linear-gradient(0deg, #000000, #000000),
        // linear-gradient(198.97deg, #FFFFFF 25.67%, #000000 149.68%)`,
        buttonRed: `
        linear-gradient(0deg, #E02B2B, #E02B2B)`,
        landingText: 'linear-gradient(198.97deg, #FFFFFF 25.67%, #000000 149.68%)'
      },
      boxShadow: {
        
      },
      
    },
  },
  plugins: [],
}
export default config
