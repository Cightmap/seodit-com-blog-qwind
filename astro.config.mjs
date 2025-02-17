import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://seodit.com', // Ensures proper absolute URLs
  trailingSlash: true, // Keeps consistent URL structure
  integrations: [
    sitemap(), // Auto-generate sitemap.xml
    mdx() // Enables MDX/Markdown for blogging
  ],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
