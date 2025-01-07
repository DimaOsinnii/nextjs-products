import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      extend: {
        animation: {
          morph: 'morph 3s infinite ease-in-out', // Custom animation
        },
        keyframes: {
          morph: {
            '0%': {
              'clip-path':
                'polygon(46% 42%, 17% 70%, 122% 12%, 57% 75%, 86% 27%, -1% 71%, 14% 20%, 25% 128%, 44% 10%, 92% 95%, 31% 21%, 51% 94%, -14% 35%, 29% 66%, 41% 86%, 25% -3%)',
            },
            '50%': {
              'clip-path':
                'polygon(42% 39%, 20% 67%, 118% 14%, 54% 78%, 89% 30%, 3% 68%, 10% 23%, 28% 125%, 40% 13%, 95% 92%, 28% 24%, 53% 91%, -11% 37%, 26% 63%, 43% 83%, 23% 0%)',
            },
            '100%': {
              'clip-path':
                'polygon(46% 42%, 17% 70%, 122% 12%, 57% 75%, 86% 27%, -1% 71%, 14% 20%, 25% 128%, 44% 10%, 92% 95%, 31% 21%, 51% 94%, -14% 35%, 29% 66%, 41% 86%, 25% -3%)',
            },
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
