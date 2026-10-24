import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return rss({
    title: 'Wil Massara | Blog',
    description: 'Youth leadership, Gen Z at work, co-design and education, from Gen Z keynote speaker Wil Massara.',
    site: context.site!,
    items: posts.map((p) => ({ title: p.data.title, pubDate: p.data.pubDate, description: p.data.description, link: `/blog/${p.id}/`, categories: [p.data.category, ...p.data.tags] })),
    customData: '<language>en-au</language>',
  });
}
