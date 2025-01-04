/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/compo/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/blog/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ["Outfit", "serif"]
      }
    },
    keyframes: {
      marquee: {
        from: { transform: "translateX(100%)" },
        to: { transform: "translateX(-100%)" },
      },
    },
    
    animation: {
      marquee: "marquee 30s linear infinite",
    },
    
  },
  plugins: [],
        
};
