import { defineCollection, z, type CollectionEntry } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    draft: z.boolean().optional(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    imageCaption: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

const general = defineCollection({
  schema: z.object({
    updatedDate: z.string().optional(),
  }),
});

export const collections = { blog, general };

// Export types for use in other files
export type BlogPost = CollectionEntry<'blog'>;
export type GeneralEntry = CollectionEntry<'general'>;
export type BlogPostData = BlogPost['data'];
