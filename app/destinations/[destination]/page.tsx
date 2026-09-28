import Link from "next/link";
import { getPosts } from "@/lib/content/catalog";

export default async function DestinationHub({ params }: { params: Promise<{ destination: string }> }) {
  const { destination } = await params;
  const name = decodeURIComponent(destination).replaceAll("-", " ");
  const posts = getPosts({ destination: name });
  return (
    <main className="min-h-screen bg-[#f4f0e8] px-6 py-16 text-[#171714] md:px-12">
      <div className="mx-auto max-w-7xl">
        <Link href="/explore" className="text-sm underline underline-offset-4">← Explore</Link>
        <p className="mt-14 text-xs uppercase tracking-[0.28em] text-[#6d6a62]">Destination edit</p>
        <h1 className="mt-3 font-serif text-6xl capitalize tracking-tight md:text-8xl">{name}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#625f58]">Packing guides, shopping edits and travel-tested recommendations for this destination.</p>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => <Link key={post.id} href={`/${post.type === "packing-guide" ? "guides" : post.type === "shopping-edit" ? "destinations" : "reviews"}/${post.slug}`} className="rounded-[28px] border border-black/10 bg-white/70 p-7 transition-transform hover:-translate-y-1"><span className="text-xs uppercase tracking-[0.18em] text-[#77736a]">{post.type.replaceAll("-", " ")}</span><h2 className="mt-12 font-serif text-3xl">{post.title}</h2><p className="mt-3 text-sm leading-6 text-[#68655e]">{post.excerpt}</p></Link>)}
        </div>
        {!posts.length && <div className="mt-10 rounded-[30px] border border-black/10 bg-white/60 p-10"><h2 className="font-serif text-3xl">This destination edit is coming soon.</h2><p className="mt-3 text-[#68655e]">Explore another destination while this collection is being built.</p><Link href="/explore" className="mt-6 inline-block rounded-full bg-[#171714] px-5 py-3 text-sm text-white">Explore the edit</Link></div>}
      </div>
    </main>
  );
}
