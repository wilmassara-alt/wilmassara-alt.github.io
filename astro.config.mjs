// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://wilmassara.com',
  trailingSlash: 'always',
  // Old Squarespace addresses still in search indexes (seen in Google and Bing, November 2026)
  redirects: {
    '/gen-z-speaker': '/speaking/gen-z-workplace-speaker/',
    '/booking': '/book/',
    '/contact': '/book/',
    '/faqs': '/speaking/',
    '/blog/7-reasons-why-hiring-young-people-changed-the-way-i-lead-and-why-it-could-transform-your-business-too': '/blog/hiring-young-people-changed-the-way-i-lead/',
  },
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you/') && !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
