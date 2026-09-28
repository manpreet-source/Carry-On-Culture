export type AnalyticsEvent =
  | { name: "affiliate_click"; productId: string; brand: string; category: string }
  | { name: "newsletter_signup"; source: string }
  | { name: "content_filter"; filter: string; value: string };

export function trackEvent(event: AnalyticsEvent) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(`coc:${event.name}`, { detail: event }));
}
