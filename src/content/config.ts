import { defineCollection } from 'astro:content';
import { postSchema } from '~/lib/types';

const postsCollection = defineCollection({
  type: 'content',
  schema: postSchema,
});

export const collections = {
  posts: postsCollection,
};
