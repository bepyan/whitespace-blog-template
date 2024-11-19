import { slugify } from '~/lib/mdx/slug';

export type TocSection = {
  slug: string;
  value: string;
  depth: number;
};

export function getTableOfContents(content: string) {
  const headings = content
    .split('\n')
    .filter((line) => line.match(/^#{1,3}\s/))
    .map((heading) => {
      const level = heading.match(/^#{1,3}/)?.[0].length || 0;
      const text = heading.replace(/^#+\s/, '');
      return {
        slug: slugify(text),
        depth: level,
        value: text,
      } satisfies TocSection;
    });

  return headings;
}
