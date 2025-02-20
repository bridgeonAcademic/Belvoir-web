import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: "#0E0E25",
        light: "#E4F6FF",
        morelight: "#F3FBFF",
      },
      fontFamily: {
        jacques: ['Jacques Francois'],
        Libre: ['Libre Caslon Display'],
        Cormorant : ['Cormorant SC'],
      },
      boxShadow: {
        'custom': '0px 3px 8px rgba(0, 0, 0, 0.24)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
} satisfies Config;
