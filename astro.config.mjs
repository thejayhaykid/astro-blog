import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import netlify from "@astrojs/netlify/functions";
import tailwind from "@astrojs/tailwind";

import robotsTxt from "astro-robots-txt";

const robotsSettings = {
	sitemap: "https://www.jakehayes.net/sitemap.xml",
}

// https://astro.build/config
export default defineConfig({
  site: 'https://www.jakehayes.net',
  integrations: [mdx(), sitemap(), tailwind(), robotsTxt(robotsSettings)],
  output: "server",
  adapter: netlify()
});