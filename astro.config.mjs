// @ts-check
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import { SITE } from './src/site.config';

// https://astro.build/config
export default defineConfig({
  site: SITE.domain,
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx()],
});
