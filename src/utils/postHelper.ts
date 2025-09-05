import { getCollection } from "astro:content";
// Function to return related posts to the passed in one to show at the bottom of the post page
export const getRelatedPosts = async (
  title: string,
  category?: string,
  tags?: string[]
) => {
  const posts = await getCollection("blog");
  if (!posts) return [];

  // Exclude the current post
  const filteredPosts = posts.filter((p: any) => p.data.title !== title);

  // 1. Find posts with the same category
  let related: any[] = [];
  if (category) {
    related = filteredPosts.filter((p: any) => p.data.category === category);
  }

  // 2. If less than 3, add posts with matching tags (not already included)
  if (tags && related.length < 3) {
    const tagMatches = filteredPosts.filter(
      (p: any) =>
        p.data.tags?.some((tag: string) => tags.includes(tag)) &&
        !related.includes(p)
    );
    related = related.concat(tagMatches);
  }

  // 3. If still less than 3, add most recent posts (not already included)
  if (related.length < 3) {
    // Sort by pubDate descending
    const recentPosts = filteredPosts
      .filter((p: any) => !related.includes(p))
      .sort((a: any, b: any) => {
        const dateA = new Date(a.data.pubDate).getTime();
        const dateB = new Date(b.data.pubDate).getTime();
        return dateB - dateA;
      });
    related = related.concat(recentPosts);
  }

  // Always return exactly 3 posts, no duplicates
  return related.slice(0, 3);
};
