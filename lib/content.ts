export type ContentType = "packing-guide" | "shopping-edit" | "product-review";

export type Product = {
  id: string;
  brand: string;
  name: string;
  category: string;
  price: string;
  image: string;
  url?: string;
  why: string[];
  score?: number;
};

export type EditorialPost = {
  type: ContentType;
  slug: string;
  title: string;
  excerpt: string;
  destination?: string;
  occasion?: string;
  category?: string;
  season?: string;
  readTime: string;
  updatedAt: string;
  heroImage: string;
  tags: string[];
  summary: string;
  disclosure: string;
  products: Product[];
  sections: { heading: string; body: string; bullets?: string[] }[];
  faqs: { question: string; answer: string }[];
  carryOn?: { capacity: string; weight: string; duration: string };
  review?: { verifiedInTrip: boolean; packability: number; comfort: number; durability: number; usability: number; value: number; verdict: string };
};

const img = (seed: string) => `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=1800&q=85`;

export const posts: EditorialPost[] = [
  {
    type: "packing-guide", slug: "2-nights-date-night-brunch", title: "2 Nights, 1 Carry-On: Date Night + Brunch", excerpt: "A polished weekend wardrobe built around one compact carry-on.", occasion: "Date night + brunch", season: "All season", readTime: "7 min", updatedAt: "2026-09-28", heroImage: img("photo-1515886657613-9f3515b0c78f"), tags: ["one bag", "weekend", "outfits"], summary: "Two nights, two moods, one disciplined packing list. The edit prioritizes pieces that earn their space twice.", disclosure: "Some product links may be affiliate links. We may earn a commission if you purchase through them, at no additional cost to you.", carryOn: { capacity: "35–40 L", weight: "≤ 8 kg", duration: "2 nights" }, products: [], sections: [{ heading: "The outfit formula", body: "Build around one versatile base, one elevated evening layer, and shoes that can handle the whole weekend.", bullets: ["One tailored trouser or dark denim", "One polished evening top", "One light layer for temperature changes", "One walkable shoe", "Compact accessories that change the look"] }, { heading: "The carry-on rule", body: "Every item should solve more than one moment. Avoid single-use pieces and reserve roughly 20% of the bag for anything you pick up on the trip." }], faqs: [{ question: "What size carry-on works?", answer: "This guide assumes a compact 35–40 L cabin bag, but airline dimensions vary." }, { question: "Can this work for three nights?", answer: "Yes, by repeating the base layer and doing a small sink wash where practical." }] },
  {
    type: "shopping-edit", slug: "paris-what-to-buy-for-your-next-weekend", title: "Paris: What to Buy for Your Next Weekend", excerpt: "A considered Paris shopping edit built around useful pieces that earn a place in your bag.", destination: "Paris", category: "Travel lifestyle", season: "All season", readTime: "9 min", updatedAt: "2026-09-28", heroImage: img("photo-1502602898657-3e91760cbb34"), tags: ["Paris", "shopping", "weekend"], summary: "Skip souvenir clutter. Look for compact, useful purchases that improve the trip or replace something you packed.", disclosure: "Some product links may be affiliate links. We may earn a commission if you purchase through them, at no additional cost to you.", products: [], sections: [{ heading: "Buy for the trip, not the shelf", body: "Prioritize lightweight accessories, compact beauty, and versatile travel pieces that can immediately earn their place in your carry-on.", bullets: ["Compact travel accessories", "Packable layers", "Small beauty essentials", "Useful gifts that travel well"] }, { heading: "When to buy", body: "Shop after you have established what you actually used during the first part of the trip. That reduces impulse purchases and duplicate packing." }], faqs: [{ question: "What should I avoid buying?", answer: "Anything fragile, bulky, or difficult to carry unless it has a clear purpose for your trip." }] },
  {
    type: "product-review", slug: "carry-on-bag-in-trip-review", title: "Carry-On Bag: The In-Trip Test", excerpt: "A structured review framework for the bag that has to do everything.", category: "Bags", readTime: "8 min", updatedAt: "2026-09-28", heroImage: img("photo-1553062407-98eeb64c6a62"), tags: ["review", "carry-on", "bags"], summary: "We evaluate cabin bags by the things that matter after the airport photo: packing efficiency, comfort, durability, usability and value.", disclosure: "Some product links may be affiliate links. Review claims are only marked as verified when the underlying testing data supports them.", products: [], sections: [{ heading: "What we measure", body: "The review rubric is designed to make trade-offs visible rather than hiding them behind a single star rating.", bullets: ["Packability", "Comfort", "Durability", "Usability", "Value"] }, { heading: "Carry-on fit", body: "Always check the bag against the current airline's published cabin dimensions before travelling." }], faqs: [{ question: "Is this a verified in-trip review?", answer: "Verification is shown only when the editorial record explicitly confirms in-trip testing." }], review: { verifiedInTrip: false, packability: 0, comfort: 0, durability: 0, usability: 0, value: 0, verdict: "Testing data required before a score or pass/fail verdict is published." } }
];

export function getPost(type: ContentType, slug: string) { return posts.find((post) => post.type === type && post.slug === slug); }
export function getPosts(type?: ContentType) { return type ? posts.filter((post) => post.type === type) : posts; }
