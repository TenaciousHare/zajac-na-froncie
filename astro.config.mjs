// @ts-check
import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import tailwindcss from "@tailwindcss/vite";

import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://zajac-na-froncie.netlify.app",
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    processor: unified({
      remarkPlugins: [remarkReadingTime],
    }),
  },
  integrations: [mdx(), sitemap()],
});
