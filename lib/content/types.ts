export type ContentType = "packing-guide" | "shopping-edit" | "product-review";

export type AffiliateProduct = {
  id: string;
  brand: string;
  name: string;
  category: string;
  price?: string;
  image?: string;
  affiliateUrl?: string;
  whyWePicked?: string[];
};

export type BasePost = {
  id: string;
  type: ContentType;
  title: string;
  slug: string;
  excerpt: string;
  destination?: string;
  categories: string[];
  brands: string[];
  season?: string;
  publishedAt: string;
  updatedAt: string;
  disclosure: string;
  faqs: { question: string; answer: string }[];
};

export type PackingGuide = BasePost & {
  type: "packing-guide";
  occasion: string;
  tripDuration: string;
  carryOnCapacity: string;
  weightAssumption: string;
  checklist: string[];
  outfits: { occasion: string; pieces: string[] }[];
  products: AffiliateProduct[];
};

export type ShoppingEdit = BasePost & {
  type: "shopping-edit";
  category: string;
  tripIntent: string;
  products: (AffiliateProduct & { whenToBuy: string; replacesInBag: string })[];
};

export type ProductReview = BasePost & {
  type: "product-review";
  product: AffiliateProduct;
  context: string;
  verifiedInTrip: boolean;
  scores: { packability: number; comfort: number; durability: number; usability: number; value: number };
  carryOnFit: string;
  verdict: "pass" | "fail";
  pros: string[];
  cons: string[];
};

export type Post = PackingGuide | ShoppingEdit | ProductReview;
