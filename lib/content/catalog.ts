import { allPosts } from "./samplePosts";
import type { ContentType, Post } from "./types";

export function getPosts(filters: { type?: ContentType; destination?: string; category?: string; brand?: string; season?: string } = {}): Post[] {
  return allPosts.filter((post) => {
    if (filters.type && post.type !== filters.type) return false;
    if (filters.destination && post.destination?.toLowerCase() !== filters.destination.toLowerCase()) return false;
    if (filters.category && !post.categories.some((c) => c.toLowerCase() === filters.category?.toLowerCase())) return false;
    if (filters.brand && !post.brands.some((b) => b.toLowerCase() === filters.brand?.toLowerCase())) return false;
    if (filters.season && post.season?.toLowerCase() !== filters.season.toLowerCase()) return false;
    return true;
  });
}

export function getPostBySlug(slug: string) {
  return allPosts.find((post) => post.slug === slug);
}

export function getDestinations() {
  return [...new Set(allPosts.map((post) => post.destination).filter(Boolean))].sort();
}

export function getCategories() {
  return [...new Set(allPosts.flatMap((post) => post.categories))].sort();
}

export function getBrands() {
  return [...new Set(allPosts.flatMap((post) => post.brands))].sort();
}
