import { getCollection } from "astro:content";
// Function to return related posts to the passed in one to show at the bottom of the post page
export const getRelatedPosts = async (
  title: string,
  category?: string,
  tags?: string[]
) => {
  const posts = await getCollection("blog");

  if (!posts) return [];

  if (category === undefined && tags === undefined) {
    return posts.filter((p: any) => p.data.title !== title).slice(0, 3);
  }

  let relatedPosts = posts.filter((p: any) => {
    return p.data.category === category && p.data.title !== title;
  });

  if (relatedPosts.length > 3) {
    return relatedPosts.slice(0, 3);
  }

  if (tags === undefined) return relatedPosts;

  relatedPosts = relatedPosts.concat(
    posts.filter((p: any) => {
      return (
        p.data.title !== title &&
        p.data.tags &&
        p.data.tags.some((tag: string) => tags.includes(tag))
      );
    })
  );

  if (relatedPosts.length > 3) {
    return relatedPosts.slice(0, 3);
  }

  return relatedPosts;
};
