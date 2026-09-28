export function AffiliateDisclosure() {
  return <aside className="rounded-2xl border border-black/10 bg-white/55 p-4 text-xs leading-5 text-[#68655e]">Disclosure: Carry-On Culture may earn a commission from qualifying purchases through affiliate links. Editorial recommendations are not altered by the presence of affiliate links.</aside>;
}

export function SponsoredDisclosure({ partner }: { partner: string }) {
  return <aside className="rounded-2xl border border-black/10 bg-[#a8ddd4]/30 p-4 text-xs leading-5 text-[#4f5d5a]">Sponsored placement: this recommendation includes a paid partner placement from {partner}. The sponsorship is labeled separately from our editorial evaluation.</aside>;
}
