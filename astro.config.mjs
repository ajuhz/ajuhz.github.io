import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ajuhz.github.io',
  base: '/ajayhazra',
  vite: {
    plugins: [tailwind()],
  },
  integrations: [],
});
