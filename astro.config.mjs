import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify/functions";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.jakehayes.net",
  integrations: [mdx(), sitemap(), react(), tailwind()],
  output: "server",
  adapter: netlify()
});