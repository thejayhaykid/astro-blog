import type { IconName } from "../components/Icon";

export interface Card {
  title: string;
  description: string;
  image?: string; // Optional image that overflows from top-left
  imageOverflow?: boolean; // Controls overflow position
  icon?: IconName; // Inline icon to left of title (e.g., emoji or small SVG)
}

export interface Author {
  name: string;
  handle: string;
  imageUrl?: string;
  logoUrl?: string;
}

export interface GridTestimonial {
  title?: string;
  body: string;
  imageUrl?: string;
  icon?: IconName;
  author?: Author;
}
