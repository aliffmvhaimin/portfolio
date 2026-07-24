/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      colors: {
        accent: '#7C3AED',
        'accent-light': '#EDE9FE',
        canvas: '#F5F0E8',
      },
      boxShadow: {
        'hard-sm': '2px 2px 0px 0px #000000',
        'hard':    '4px 4px 0px 0px #000000',
        'hard-lg': '6px 6px 0px 0px #000000',
        'hard-xl': '8px 8px 0px 0px #000000',
      },
    },
  },
  plugins: [],
};
