/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      // Hex values (same as the CSS variables in src/styles/tailwind.css) so Tailwind opacity
      // modifiers like bg-primary/80 or text-primary-foreground/60 are generated. With var()
      // colours they silently produced nothing (missing overlays, invisible faded text).
      colors: {
        background: '#F4F6F9',
        foreground: '#0A1628',
        primary: {
          DEFAULT: '#0A1628',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#1A2B4A',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#CC0000',
          foreground: '#FFFFFF',
          green: '#2D7A2D',
          'green-foreground': '#FFFFFF',
        },
        muted: {
          DEFAULT: '#E8ECF2',
          foreground: '#5A6A7E',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#0A1628',
        },
        border: '#D1D9E6',
        input: '#E8ECF2',
        ring: '#CC0000',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        sm: 'calc(var(--radius) - 2px)',
        md: 'var(--radius)',
        lg: 'calc(var(--radius) + 4px)',
        xl: 'calc(var(--radius) + 8px)',
        '2xl': 'calc(var(--radius) + 16px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};