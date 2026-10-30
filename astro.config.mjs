import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://provideroutbound.web.id',
  integrations: [tailwind({
    applyBaseStyles: false,
  })],
  compressHTML: true,
});
