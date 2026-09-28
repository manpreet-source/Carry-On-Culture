import Link from "next/link";
import { getCategories, getDestinations, getPosts } from "@/lib/content/catalog";

export default async function Explore({ searchParams }: { searchParams: Promise<{ destination?: string; category?: string; type?: "packing-guide" | "shopping-edit" | "product-review" }> }) {
  const params = await searchParams;
  const posts = getPosts(params);
  return (
    <main className="min-h-screen bg-[#f4f0e8] px-6 py-16 text-[#171714] md:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.28em] text-[#6d6a62]">Explore the edit</p>
        <div className="mt-4 flex flex-col justify-between gap-6 border-b border-black/10 pb-10 md:flex-row md:items-end"><h1 className="font-serif text-5xl tracking-tight md:text-7xl">Find your next move.</h1><Link href="/" className="text-sm underline underline-offset-4">Home →</Link></div>
        <div className="flex flex-wrap gap-2 py-6 text-sm">
          <Link href="/explore" className="rounded-full border border-black/10 bg-white/70 px-4 py-2">All</Link>
          {getCategories().map((category) => <Link key={category} href={`/explore?category=${encodeURIComponent(category)}`} className="rounded-full border border-black/10 px-4 py-2">{category}</Link>)}
          {getDestinations().map((destination) => <Link key={destination} href={`/explore?destination=${encodeURIComponent(destination!)}`} className="rounded-full border border-black/10 px-4 py-2">{destination}</Link>)}
        </div>
        {posts.length ? <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{posts.map((post) => <Link key={post.id} href={`/${post.type === "packing-guide" ? "guides" : post.type === "shopping-edit" ? "destinations" : "reviews"}/${post.slug}`} className="group rounded-[28px] border border-black/10 bg-white/65 p-7 transition-transform hover:-translate-y-1"><p className="text-xs uppercase tracking-[0.18em] text-[#77736a]">{post.type.replaceAll("-", " ")}</p><h2 className="mt-14 font-serif text-3xl">{post.title}</h2><p className="mt-3 text-sm leading-6 text-[#68655e]">{post.excerpt}</p><span className="mt-7 inline-block text-sm underline underline-offset-4">Read the edit →</span></Link>)}</div> : <div className="rounded-[30px] border border-black/10 bg-white/60 p-12"><h2 className="font-serif text-3xl">Nothing in the edit yet.</h2><p className="mt-3 max-w-lg text-[#68655e]">Try another destination or category. New stories will appear here as they are published.</p><Link href="/explore" className="mt-6 inline-block rounded-full bg-[#171714] px-5 py-3 text-sm text-white">Reset filters</Link></div>}
      </div>
    </main>
  );
}
