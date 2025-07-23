import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://www.jakehayes.net",
  integrations: [mdx(), sitemap(), tailwind(), react(), partytown()],
  output: "server",
  adapter: netlify({
    redirects: [
      {
        from: "/stats.js",
        to: "https://cloud.umami.is/script.js",
        status: 200,
      },
    ],
  }),
  prefetch: true,
});
