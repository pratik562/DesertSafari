/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '19.5px'],
        lg: ['18px', '21.94px'],
        xl: ['20px', '24.38px'],
        '2xl': ['24px', '29.26px'],
        '3xl': ['28px', '50px'],
        '4xl': ['48px', '58px'],
        '8xl': ['96px', '106px']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'Home': "url('/assests/images/collection-background.png')",
        'card': "url('/assests/images/thumbnail-background.png')",
      },
      screens: {
        "wide": "1440px"
      },
      colors: {
        'primary': "#D6C69B",
        "accent":'#8C6239',
        "secondary":'#1F2937',
        "primary-text":"#ffffff",
        "secondary-text":"#e3e3e3",
        "primary-bg":"#ffffff",
      },
    },
  },
  plugins: [],
};
