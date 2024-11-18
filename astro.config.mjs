// @ts-check
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import {
  transformerMetaHighlight,
  transformerMetaWordHighlight,
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
} from '@shikijs/transformers';
import { transformerTwoslash } from '@shikijs/twoslash';
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
          light: 'github-light-default',
          dark: 'github-dark-default',
        },
        transformers: [
          transformerTwoslash({
            explicitTrigger: true,
          }),
          transformerNotationHighlight(),
          transformerNotationDiff(),
          transformerNotationFocus(),
          transformerNotationErrorLevel(),
          transformerMetaHighlight(),
          transformerMetaWordHighlight(),
        ],
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
