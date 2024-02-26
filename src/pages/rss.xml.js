import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function get(context) {
  const posts = await getCollection("blog");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      content: sanitizeHtml(parser.render(post.content)),
      link: `/blog/${post.slug}/`,
    })),
  });
}
