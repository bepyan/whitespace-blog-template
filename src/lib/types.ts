import { z } from 'astro:schema';

export interface SEO {
  title?: string;
  description?: string;
  ogImage?: string;
}

export const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().optional(),
});
export type Post = z.infer<typeof postSchema>;

// to not importing CollectionEntry from astro:content
export type PostData = {
  id: string;
  slug: string;
  body: string;
  collection: 'posts';
  data: Post;
};
