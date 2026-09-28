import Link from "next/link";
import type { Post } from "@/lib/content/types";

export function RelatedStories({ posts }: { posts: Post[] }) {
  if (!posts.length) return null;
  return <section className="mt-16"><div className="flex items-end justify-between border-b border-black/10 pb-5"><div><p className="text-xs uppercase tracking-[0.2em] text-[#77736a]">Keep exploring</p><h2 className="mt-2 font-serif text-3xl">More from the edit</h2></div><Link href="/explore" className="text-sm underline underline-offset-4">View all</Link></div><div className="mt-6 grid gap-4 md:grid-cols-3">{posts.slice(0, 3).map((post) => <Link key={post.id} href={`/${post.type === "packing-guide" ? "guides" : post.type === "shopping-edit" ? "destinations" : "reviews"}/${post.slug}`} className="rounded-[24px] border border-black/10 bg-white/60 p-6 transition-transform hover:-translate-y-1"><span className="text-xs uppercase tracking-[0.15em] text-[#77736a]">{post.type.replaceAll("-", " ")}</span><h3 className="mt-8 font-serif text-2xl">{post.title}</h3></Link>)}</div></section>;
}
