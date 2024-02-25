import { getCollection } from "astro:content";
// Function to return related posts to the passed in one to show at the bottom of the post page
export const getRelatedPosts = async (post: any) => {
  const posts = await getCollection("blog");

  if (!posts) return [];

  let relatedPosts = posts.filter((p: any) => {
    return p.category === post.category && p.title !== post.title;
  });

  if (relatedPosts.length > 3) {
    return relatedPosts.slice(0, 3);
  }

  if (post.tags === undefined) return relatedPosts;

  relatedPosts = relatedPosts.concat(
    posts.filter((p: any) => {
      return (
        p.title !== post.title &&
        p.tags &&
        p.tags.some((tag: string) => post.tags.includes(tag))
      );
    })
  );

  if (relatedPosts.length > 3) {
    return relatedPosts.slice(0, 3);
  }

  return relatedPosts;
};
