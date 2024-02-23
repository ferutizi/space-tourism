import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontSize: {
        '7xl': '5rem',
        '10xl': '10rem'
      },
      textUnderlineOffset: {
        custom: '2rem'
      },
      height: {
        98: '26rem',
        100: '34rem'
      },
      width: {
        98: '26rem',
        99: '28rem',
        100: '32rem'
      }
    }
  },
  plugins: []
}
export default config
