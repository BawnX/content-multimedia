import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'node:url';
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  outDir: '../dist/website',
  output: 'server',
  adapter: node({
    mode: "standalone"
  }),
  integrations: [
    react(),
    tailwind({
      configFile: fileURLToPath(
        new URL('./tailwind.config.cjs', import.meta.url)
      ),
    }),
  ],
  devToolbar: {
    enabled: false
  }
});
