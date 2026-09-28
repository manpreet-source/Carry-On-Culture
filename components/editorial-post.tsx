import Link from "next/link";
import type { EditorialPost } from "@/lib/content";

const labels = { "packing-guide": "Packing Guide", "shopping-edit": "Shopping Edit", "product-review": "In-Trip Review" } as const;

export function EditorialPost({ post }: { post: EditorialPost }) {
  return <article className="mx-auto max-w-6xl px-5 pb-24 pt-8 md:px-8">
    <header className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[#171714] text-[#f4f0e8] shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(198,239,66,.24),transparent_30%),linear-gradient(120deg,rgba(255,255,255,.04),transparent)]" />
      <div className="relative grid min-h-[520px] items-end md:grid-cols-[1.05fr_.95fr]">
        <div className="p-7 md:p-12 lg:p-16">
          <p className="mb-5 text-xs font-bold uppercase tracking-[.24em] text-[#c6ef42]">{labels[post.type]}</p>
          <h1 className="max-w-3xl text-5xl font-semibold tracking-[-.055em] md:text-7xl">{post.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{post.excerpt}</p>
          <div className="mt-8 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wider text-white/60">
            <span>{post.readTime}</span><span>·</span><span>Updated {post.updatedAt}</span>{post.destination && <><span>·</span><span>{post.destination}</span></>}
          </div>
        </div>
        <div className="min-h-[330px] bg-cover bg-center" style={{ backgroundImage: `url(${post.heroImage})` }} aria-label="Editorial travel image" />
      </div>
    </header>

    <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px]">
      <div>
        <section className="border-b border-black/10 pb-10"><p className="text-xl leading-9 text-black/70">{post.summary}</p></section>
        {post.carryOn && <section className="grid grid-cols-3 gap-3 border-b border-black/10 py-8">
          {Object.entries(post.carryOn).map(([key, value]) => <div key={key} className="rounded-2xl bg-[#eeece6] p-5"><p className="text-[10px] font-bold uppercase tracking-widest text-black/45">{key}</p><p className="mt-2 text-xl font-semibold">{value}</p></div>)}
        </section>}
        {post.review && <section className="border-b border-black/10 py-10"><p className="text-xs font-bold uppercase tracking-[.2em] text-black/45">Review status</p><div className="mt-4 rounded-2xl bg-[#eeece6] p-6"><p className="font-semibold">{post.review.verifiedInTrip ? "Verified in-trip" : "Verification pending"}</p><p className="mt-2 text-black/60">{post.review.verdict}</p></div></section>}
        <div className="py-10">
          {post.sections.map((section) => <section key={section.heading} className="mb-12"><h2 className="text-3xl font-semibold tracking-tight">{section.heading}</h2><p className="mt-4 text-lg leading-8 text-black/65">{section.body}</p>{section.bullets && <ul className="mt-5 grid gap-3 sm:grid-cols-2">{section.bullets.map((item) => <li key={item} className="rounded-xl border border-black/10 p-4 text-sm font-medium">{item}</li>)}</ul>}</section>)}
        </div>
        <section className="border-t border-black/10 pt-10"><h2 className="text-3xl font-semibold">FAQs</h2><div className="mt-5 divide-y divide-black/10">{post.faqs.map((faq) => <details key={faq.question} className="py-5"><summary className="cursor-pointer font-semibold">{faq.question}</summary><p className="mt-3 max-w-2xl leading-7 text-black/60">{faq.answer}</p></details>)}</div></section>
      </div>
      <aside className="lg:sticky lg:top-24 lg:self-start"><div className="rounded-3xl bg-[#171714] p-7 text-[#f4f0e8]"><p className="text-xs font-bold uppercase tracking-widest text-[#c6ef42]">Editorial disclosure</p><p className="mt-4 text-sm leading-7 text-white/65">{post.disclosure}</p><Link href="/affiliate-disclosure" className="mt-6 inline-block text-sm font-semibold underline underline-offset-4">Read full disclosure →</Link></div><Link href="/" className="mt-4 block rounded-3xl border border-black/10 p-6 text-sm font-semibold hover:bg-black hover:text-white">← Back to Carry-On Culture</Link></aside>
    </div>
  </article>;
}
