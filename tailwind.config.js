/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0b1220',
        inkSoft: '#1f2937',
        sand: '#f5f1e8',
        cream: '#fffaf2',
        accent: '#3b82f6',
        accentStrong: '#2563eb',
        teal: '#14b8a6',
        slateBlue: '#1e2a45',
        cloud: '#e7e2d7',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
