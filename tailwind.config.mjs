/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,tsx,md}'],
  theme: {
    /* All corners are sharp — 0px everywhere */
    borderRadius: {
      DEFAULT: '0px',
      none:    '0px',
      sm:      '0px',
      md:      '0px',
      lg:      '0px',
      xl:      '0px',
      '2xl':   '0px',
      '3xl':   '0px',
      full:    '0px',
    },
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"Source Serif 4"', 'Georgia', 'serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      /* Override to match design-system spec (7xl=6rem, 8xl=8rem, 9xl=10rem) */
      fontSize: {
        '7xl': ['6rem',  { lineHeight: '0.95' }],
        '8xl': ['8rem',  { lineHeight: '0.92' }],
        '9xl': ['10rem', { lineHeight: '0.88' }],
      },
      colors: {
        muted:      '#F5F5F5',
        'muted-fg': '#525252',
        'border-lt':'#E5E5E5',
      },
      transitionDuration: {
        '0': '0ms',
      },
    },
  },
};
