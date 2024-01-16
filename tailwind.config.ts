import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      leta: ['Montserrat', 'sans-serif'],
    },
    extend: {
      screens: {
        xl: '1200px',
        lg: '1050px',
        md: '850px',
        sm: '700px',
        xs: '400px',
      },
    },
  },
  plugins: [],
}
export default config
