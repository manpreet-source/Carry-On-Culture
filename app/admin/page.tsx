import Link from "next/link";

const actions = [
  ["Packing Guide", "/admin/new?type=packing-guide"],
  ["Shopping Edit", "/admin/new?type=shopping-edit"],
  ["Product Review", "/admin/new?type=product-review"],
] as const;

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#f4f0e8] px-6 py-16 text-[#171714] md:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#6d6a62]">Carry-On Culture / Studio</p>
        <div className="flex flex-col justify-between gap-6 border-b border-black/10 pb-10 md:flex-row md:items-end">
          <div><h1 className="font-serif text-5xl tracking-tight md:text-7xl">Editorial Studio</h1><p className="mt-4 max-w-xl text-[#625f58]">Create structured editorial content without losing the visual language of the publication.</p></div>
          <Link href="/" className="rounded-full bg-[#171714] px-6 py-3 text-sm font-medium text-white">View publication</Link>
        </div>
        <section className="grid gap-4 py-10 md:grid-cols-3">
          {actions.map(([label, href]) => <Link key={href} href={href} className="group rounded-[28px] border border-black/10 bg-white/65 p-7 transition-transform hover:-translate-y-1"><span className="text-xs uppercase tracking-[0.2em] text-[#77736a]">Create</span><h2 className="mt-12 font-serif text-3xl">{label}</h2><p className="mt-3 text-sm text-[#6a675f]">Open the structured editor.</p><span className="mt-8 inline-block text-sm underline underline-offset-4">Start →</span></Link>)}
        </section>
        <section className="grid gap-4 md:grid-cols-3">
          {[["Drafts", "Content waiting for editorial review."], ["Published", "Live content and update status."], ["Editor’s Pick", "Eligibility, partner attribution and placement limits."]].map(([title, text]) => <div key={title} className="rounded-[28px] border border-black/10 p-7"><h3 className="font-serif text-2xl">{title}</h3><p className="mt-3 text-sm text-[#6a675f]">{text}</p></div>)}
        </section>
      </div>
    </main>
  );
}
