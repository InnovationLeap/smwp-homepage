import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import remarkBreaks from 'remark-breaks';

export default defineConfig({
  markdown: {
    processor: unified({ remarkPlugins: [remarkBreaks] }),
  },
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  }
});
