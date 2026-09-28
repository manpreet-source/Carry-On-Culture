import type { PackingGuide, ProductReview, ShoppingEdit } from "./types";

const disclosure = "Carry-On Culture may earn a commission when you buy through qualifying links. Sponsored placements are labeled separately.";

export const packingGuides: PackingGuide[] = [
  {
    id: "two-nights-date-night-brunch", type: "packing-guide", title: "2 Nights, Date Night + Brunch", slug: "2-nights-date-night-brunch",
    excerpt: "A compact weekend wardrobe built around one carry-on and three repeatable outfit formulas.", destination: "", categories: ["Travel Apparel", "Packing"], brands: [], season: "All Season", publishedAt: "2026-09-28", updatedAt: "2026-09-28", disclosure, faqs: [],
    occasion: "Date night + brunch", tripDuration: "2 nights", carryOnCapacity: "35–40L", weightAssumption: "Target under 7kg", checklist: ["2 tops", "1 tailored layer", "1 versatile trouser", "1 evening shoe", "1 sleep set", "Minimal toiletries"], outfits: [{ occasion: "Date night", pieces: ["Tailored layer", "Versatile trouser", "Evening shoe"] }, { occasion: "Brunch", pieces: ["Light top", "Same trouser", "Walkable shoe"] }], products: []
  }
];

export const shoppingEdits: ShoppingEdit[] = [
  {
    id: "paris-weekend-edit", type: "shopping-edit", title: "Paris: What to Buy for Your Next Weekend", slug: "paris-what-to-buy-next-weekend",
    excerpt: "A carry-on-minded Paris shopping edit organized around things that earn their place in your bag.", destination: "Paris", categories: ["Accessories", "Travel Apparel"], brands: [], season: "All Season", publishedAt: "2026-09-28", updatedAt: "2026-09-28", disclosure, faqs: [], category: "Travel essentials", tripIntent: "Weekend city break", products: []
  }
];

export const productReviews: ProductReview[] = [];

export const allPosts = [...packingGuides, ...shoppingEdits, ...productReviews];
