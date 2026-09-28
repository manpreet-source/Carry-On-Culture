import Link from "next/link";
import { getPosts } from "@/lib/content/catalog";

export default async function CategoryHub({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const name = decodeURIComponent(category).replaceAll("-", " ");
  const posts = getPosts({ category: name });
  return (
    <main className="min-h-screen bg-[#f4f0e8] px-6 py-16 text-[#171714] md:px-12">
      <div className="mx-auto max-w-7xl">
        <Link href="/explore" className="text-sm underline underline-offset-4">← Explore</Link>
        <p className="mt-14 text-xs uppercase tracking-[0.28em] text-[#6d6a62]">Category edit</p>
        <h1 className="mt-3 font-serif text-6xl capitalize tracking-tight md:text-8xl">{name}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#625f58]">Carry-on-minded recommendations, guides and reviews collected around one useful category.</p>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => <Link key={post.id} href={`/explore?category=${encodeURIComponent(name)}`} className="rounded-[28px] border border-black/10 bg-white/70 p-7 transition-transform hover:-translate-y-1"><span className="text-xs uppercase tracking-[0.18em] text-[#77736a]">{post.destination || "Editorial"}</span><h2 className="mt-12 font-serif text-3xl">{post.title}</h2><p className="mt-3 text-sm leading-6 text-[#68655e]">{post.excerpt}</p></Link>)}
        </div>
        {!posts.length && <div className="mt-10 rounded-[30px] border border-black/10 bg-white/60 p-10"><h2 className="font-serif text-3xl">This category is coming soon.</h2><Link href="/explore" className="mt-6 inline-block rounded-full bg-[#171714] px-5 py-3 text-sm text-white">Explore all content</Link></div>}
      </div>
    </main>
  );
}
