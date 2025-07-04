/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'background-shine': 'background-shine 2s linear infinite',
      },
      keyframes: {
        'background-shine': {
          from: { 'background-position': '0 0' },
          to: { 'background-position': '-200% 0' },
        },
      },
    },
  },
  plugins: [],

  
}