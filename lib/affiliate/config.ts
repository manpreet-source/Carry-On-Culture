export type AffiliateConfig = {
  brand: string;
  trackingParams?: Record<string, string>;
  enabled: boolean;
};

export function buildAffiliateUrl(url: string, config?: AffiliateConfig): string {
  if (!config?.enabled || !config.trackingParams) return url;
  try {
    const parsed = new URL(url);
    for (const [key, value] of Object.entries(config.trackingParams)) parsed.searchParams.set(key, value);
    return parsed.toString();
  } catch {
    return url;
  }
}
