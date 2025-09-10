import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://www.jakehayes.net",
  integrations: [mdx(), sitemap(), react(), partytown()],
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
  vite: {
    plugins: [tailwindcss()],
  },
});
