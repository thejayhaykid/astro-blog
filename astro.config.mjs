import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify/static";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.jakehayes.net",
  integrations: [mdx(), sitemap(), tailwind()],
  output: "server",
  adapter: netlify(),
});
