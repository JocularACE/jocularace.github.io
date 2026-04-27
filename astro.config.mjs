import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jocularace.github.io',
  base: '/',
  output: 'static',
  integrations: [tailwind()],
  compressHTML: true,
});
