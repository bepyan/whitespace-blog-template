/** @type {import('tailwindcss').Config} */
export default {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)', 'sans'],
      serif: ['var(--font-serif)', 'sans-serif'],
      mono: ['var(--font-mono)', 'monospace'],
      display: ['var(--font-display)', 'sans-serif'],
    },
    fontWeight: {
      normal: 'var(--font-weight-normal)',
      semibold: 'var(--font-weight-semibold)',
      bold: 'var(--font-weight-bold)',
    },
    extend: {
      screens: {
        mobile: { max: '700px' },
        tablet: { max: '1200px' },
      },
      colors: {
        'gray-1': 'var(--c-gray-1)',
        'gray-2': 'var(--c-gray-2)',
        'gray-3': 'var(--c-gray-3)',
        'gray-soft': 'var(--c-gray-soft)',
        'indigo-1': 'var(--c-indigo-1)',
        'indigo-2': 'var(--c-indigo-2)',
        'indigo-3': 'var(--c-indigo-3)',
        'indigo-soft': 'var(--c-indigo-soft)',
        'purple-1': 'var(--c-purple-1)',
        'purple-2': 'var(--c-purple-2)',
        'purple-3': 'var(--c-purple-3)',
        'purple-soft': 'var(--c-purple-soft)',
        'green-1': 'var(--c-green-1)',
        'green-2': 'var(--c-green-2)',
        'green-3': 'var(--c-green-3)',
        'green-soft': 'var(--c-green-soft)',
        'yellow-1': 'var(--c-yellow-1)',
        'yellow-2': 'var(--c-yellow-2)',
        'yellow-3': 'var(--c-yellow-3)',
        'yellow-soft': 'var(--c-yellow-soft)',
        'red-1': 'var(--c-red-1)',
        'red-2': 'var(--c-red-2)',
        'red-3': 'var(--c-red-3)',
        'red-soft': 'var(--c-red-soft)',
        //
        bg: 'var(--c-bg)',
        'bg-alt': 'var(--c-bg-alt)',
        'bg-elv': 'var(--c-bg-elv)',
        'bg-soft': 'var(--c-bg-soft)',
        //
        border: 'var(--c-border)',
        divider: 'var(--c-divider)',
        gutter: 'var(--c-gutter)',
        //
        'text-1': 'var(--c-text-1)',
        'text-2': 'var(--c-text-2)',
        'text-3': 'var(--c-text-3)',
      },
      boxShadow: {
        1: 'var(--box-shadow-1)',
        2: 'var(--box-shadow-2)',
        3: 'var(--box-shadow-3)',
        4: 'var(--box-shadow-4)',
        5: 'var(--box-shadow-5)',
      },
      space: {
        'page-w': 'var(--spacing-page-w)',
        'page-y': 'var(--spacing-page-y)',
        'page-x': 'var(--spacing-page-x)',
      },
    },
  },
  plugins: [],
};
