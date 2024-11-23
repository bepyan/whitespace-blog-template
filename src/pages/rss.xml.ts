import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getPostsCollection } from '~/lib/mdx/post';
import { SITE } from '~/site.config';

export const GET: APIRoute = async (context) => {
  const postList = await getPostsCollection();

  return rss({
    title: SITE.title,
    description: SITE.description,
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: SITE.domain,
    items: postList.map((post) => {
      return {
        title: post.data.title,
        description: post.data.description,
        link: `/posts/${post.slug}`,
      };
    }),
  });
};
