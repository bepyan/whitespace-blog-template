// @ts-check
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';

import { SITE } from './src/site.config';

// https://astro.build/config
export default defineConfig({
  site: SITE.domain,
  output: 'static',
  integrations: [
    tailwind(),
    mdx({
      shikiConfig: {
        themes: {
          light: 'kanagawa-wave',
          dark: 'kanagawa-dragon',
        },
      },
      remarkPlugins: [remarkBreaks],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'wrap',
            properties: {
              className: ['anchor'],
            },
          },
        ],
        [
          rehypeExternalLinks,
          {
            properties: {
              class: 'external link',
            },
            target: '_blank',
            rel: ['noopener noreferrer'],
          },
        ],
      ],
    }),
  ],
});
