/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter:["Inter"],
        petiteFormal:["Petit Formal Script"],
        russonOne:["Russon One"],
      },

      colors:{
        dark:"#0d1117",
        royalBlue:"#4169e1",
      },

      backgroundImage:
      {
        wrapperBg:"url(../../src/assets/wrapperBackground.svg)",
      },

      container:
      {
        screens:
        {
          sm:"6400px",
          md:"7670px",
          lg:"1140",
          xl:"1440",
          "2xl":"1800",
        }
      },
      screens: {
        
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}
