// @ts-check
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import { SITE } from './src/site.config';

// https://astro.build/config
export default defineConfig({
  site: SITE.domain,
  output: 'static',
  integrations: [mdx(), tailwind()],
});
