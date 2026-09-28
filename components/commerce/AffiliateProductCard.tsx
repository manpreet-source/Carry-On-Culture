"use client";

import { useCallback } from "react";
import type { AffiliateProduct } from "@/lib/content/types";
import { buildAffiliateUrl, type AffiliateConfig } from "@/lib/affiliate/config";

export function AffiliateProductCard({ product, config }: { product: AffiliateProduct; config?: AffiliateConfig }) {
  const href = product.affiliateUrl ? buildAffiliateUrl(product.affiliateUrl, config) : undefined;
  const handleClick = useCallback(() => {
    if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("coc:affiliate-click", { detail: { productId: product.id, brand: product.brand, category: product.category } }));
  }, [product]);
  return (
    <article className="group overflow-hidden rounded-[28px] border border-black/10 bg-white/70">
      <div className="aspect-[4/3] bg-[#e6e0d5] p-5">{product.image ? <img src={product.image} alt={product.name} className="h-full w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-[1.03]" /> : <div className="flex h-full items-end rounded-2xl bg-[#d9d1c2] p-5"><span className="text-xs uppercase tracking-[0.18em] text-black/50">Product image coming soon</span></div>}</div>
      <div className="p-6"><p className="text-xs uppercase tracking-[0.18em] text-[#77736a]">{product.brand} · {product.category}</p><h3 className="mt-3 font-serif text-2xl">{product.name}</h3>{product.price && <p className="mt-2 text-sm text-[#68655e]">{product.price}</p>}{product.whyWePicked?.length ? <ul className="mt-4 space-y-1 text-sm text-[#68655e]">{product.whyWePicked.slice(0, 2).map((reason) => <li key={reason}>• {reason}</li>)}</ul> : null}<div className="mt-6">{href ? <a href={href} target="_blank" rel="sponsored noopener noreferrer" onClick={handleClick} className="inline-flex rounded-full bg-[#171714] px-5 py-3 text-sm text-white">Shop product ↗</a> : <span className="inline-flex rounded-full border border-black/10 px-5 py-3 text-sm text-[#77736a]">D2C link coming soon</span>}</div><p className="mt-4 text-[11px] leading-4 text-[#858078]">Affiliate disclosure: we may earn a commission from qualifying purchases.</p></div>
    </article>
  );
}
