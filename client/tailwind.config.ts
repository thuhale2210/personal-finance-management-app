import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile375: '375px',
      mobile: '640px',
      mobileBelow: { max: '640px' },
      tablet: '768px',
      tabletBelow: { max: '768px' },
      smallLaptop: '1024px',
      desktop: '1280px',
      bigLaptop: '1440px',
      television: '1536px',
    },
    extend: {
      colors: {
        'primary-gray': '#3F3F3F',
        'secondary-gray': '#B3B7BD',
        'primary-white': '#F6F6F6',
        'primary-yellow': '#FFCB74',
        'primary-black': '#2F2F2F',
      },
    },
  },
  plugins: [],
};
export default config;
