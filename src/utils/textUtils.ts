export const squish = (text?: string): string => {
  if (!text) return "";
  // Second word onwards should have first letter capitalized
  const words = text.split(" ");
  return words
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
};
