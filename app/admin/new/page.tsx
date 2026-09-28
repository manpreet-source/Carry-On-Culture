import Link from "next/link";

const fields = {
  "packing-guide": ["Title", "Slug", "Excerpt", "Destination", "Occasion", "Trip duration", "Carry-on capacity", "Weight assumption", "Season", "Categories", "Disclosure"],
  "shopping-edit": ["Title", "Slug", "Excerpt", "Destination", "Category", "Trip intent", "Season", "Brands", "Disclosure"],
  "product-review": ["Title", "Slug", "Excerpt", "Brand", "Product", "Category", "Testing context", "Verified in trip", "Carry-on fit", "Verdict", "Disclosure"],
} as const;

export default async function NewPost({ searchParams }: { searchParams: Promise<{ type?: string }> }) {
  const params = await searchParams;
  const type = params.type === "shopping-edit" || params.type === "product-review" ? params.type : "packing-guide";
  const labels = fields[type];
  return (
    <main className="min-h-screen bg-[#f4f0e8] px-6 py-12 text-[#171714] md:px-12">
      <div className="mx-auto max-w-4xl">
        <Link href="/admin" className="text-sm underline underline-offset-4">← Studio</Link>
        <p className="mt-12 text-xs uppercase tracking-[0.28em] text-[#6d6a62]">New {type.replaceAll("-", " ")}</p>
        <h1 className="mt-3 font-serif text-5xl tracking-tight md:text-6xl">Build an editorial story.</h1>
        <form className="mt-10 space-y-5 rounded-[32px] border border-black/10 bg-white/70 p-6 md:p-10">
          {labels.map((label) => <label key={label} className="block"><span className="mb-2 block text-sm font-medium">{label}</span><input name={label.toLowerCase().replaceAll(" ", "-")} className="w-full rounded-2xl border border-black/10 bg-[#faf9f5] px-4 py-3 outline-none transition focus:border-black/40" placeholder={`Enter ${label.toLowerCase()}…`} /></label>)}
          <div className="flex flex-wrap gap-3 pt-5"><button type="button" className="rounded-full border border-black/15 px-6 py-3 text-sm">Save draft</button><button type="button" className="rounded-full bg-[#171714] px-6 py-3 text-sm text-white">Preview</button><button type="button" className="rounded-full bg-[#a8ddd4] px-6 py-3 text-sm">Publish after validation</button></div>
          <p className="pt-2 text-xs text-[#77736a]">Publishing must be connected to the persistence layer before it can make content live. No fake records are created by this UI.</p>
        </form>
      </div>
    </main>
  );
}
