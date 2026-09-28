import type { Post } from "../content/types";

export type PostStatus = "draft" | "published";

export type AdminPost = Post & {
  status: PostStatus;
  featured?: boolean;
  editorPickEligible?: boolean;
  editorPick?: boolean;
  partnerName?: string;
};

export function validatePost(post: Partial<Post>): string[] {
  const errors: string[] = [];
  if (!post.title?.trim()) errors.push("Title is required.");
  if (!post.slug?.trim()) errors.push("Slug is required.");
  if (!post.type) errors.push("Content type is required.");
  if (!post.excerpt?.trim()) errors.push("Excerpt is required.");
  if (!post.disclosure?.trim()) errors.push("Affiliate disclosure is required.");

  if (post.type === "packing-guide") {
    const p = post as Partial<Extract<Post, { type: "packing-guide" }>>;
    if (!p.occasion?.trim()) errors.push("Occasion is required.");
    if (!p.carryOnCapacity?.trim()) errors.push("Carry-on capacity is required.");
    if (!p.weightAssumption?.trim()) errors.push("Weight assumption is required.");
  }

  if (post.type === "shopping-edit") {
    const p = post as Partial<Extract<Post, { type: "shopping-edit" }>>;
    if (!p.destination?.trim()) errors.push("Destination is required.");
    if (!p.category?.trim()) errors.push("Shopping category is required.");
    if (!p.tripIntent?.trim()) errors.push("Trip intent is required.");
  }

  if (post.type === "product-review") {
    const p = post as Partial<Extract<Post, { type: "product-review" }>>;
    if (!p.product?.name?.trim()) errors.push("Product is required.");
    if (!p.context?.trim()) errors.push("In-trip testing context is required.");
    if (typeof p.verifiedInTrip !== "boolean") errors.push("Verification status is required.");
    if (!p.scores) errors.push("Review scores are required.");
    if (!p.carryOnFit?.trim()) errors.push("Carry-on fit is required.");
    if (!p.verdict) errors.push("Pass/fail verdict is required.");
  }

  return errors;
}

export function canUseEditorsPick(input: {
  verifiedReviewCount: number;
  minimumVerifiedReviews: number;
  monthlyPlacements: number;
  monthlyEligibleCap: number;
  requested: boolean;
}): { allowed: boolean; reason?: string } {
  if (!input.requested) return { allowed: false, reason: "Editor’s Pick was not requested." };
  if (input.verifiedReviewCount < input.minimumVerifiedReviews) return { allowed: false, reason: "Minimum verified-review threshold has not been reached." };
  if (input.monthlyPlacements >= input.monthlyEligibleCap) return { allowed: false, reason: "Monthly Editor’s Pick placement limit has been reached." };
  return { allowed: true };
}
