import Link from "next/link";
import { HeroScene } from "@/components/HeroScene";

const guides = [
  { tag: "PACKING GUIDE", title: "2 nights. Date night. Brunch. One bag.", image: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&w=1200&q=85" },
  { tag: "SHOPPING EDIT", title: "Paris, edited: what is actually worth bringing home.", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85" },
  { tag: "IN-TRIP REVIEW", title: "The carry-on that earned its place in the overhead bin.", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=85" },
];
const categories = ["Bags", "Packing", "Travel Apparel", "Skincare", "Shoes", "Accessories", "Tech", "Wellness"];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <main className="noise overflow-hidden">
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-7">
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between rounded-full border border-black/10 bg-[#f4f0e8]/85 px-5 py-3 backdrop-blur-xl">
          <Link href="/" className="font-extrabold tracking-[-.04em]">CARRY-ON <span className="font-normal italic">CULTURE</span></Link>
          <div className="hidden items-center gap-7 md:flex mono"><Link href="/guides">Guides</Link><Link href="/destinations">Destinations</Link><Link href="/reviews">Reviews</Link><Link href="/shop">Shop</Link></div>
          <Link href="/search" aria-label="Search" className="grid h-9 w-9 place-items-center rounded-full bg-black text-white">⌕</Link>
        </nav>
      </header>

      <section className="grid-paper px-5 pb-10 pt-28 md:px-10 md:pt-36">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-8 flex items-center justify-between mono"><span>ISSUE 001 / THE LIGHT TRAVELLER</span><span>EST. 2026</span></div>
          <div className="grid items-end gap-8 lg:grid-cols-[.9fr_1.1fr]">
            <div className="reveal">
              <p className="mono mb-5">TRAVEL / STYLE / PRACTICALITY</p>
              <h1 className="display max-w-3xl text-[clamp(4rem,9vw,9rem)] leading-[.82]">PACK<br/><i>LIGHT.</i><br/>GO FAR.</h1>
              <p className="mt-8 max-w-md text-base leading-7 text-black/65">Carry-on guides, destination shopping edits and products tested in the places you actually travel.</p>
              <div className="mt-8 flex flex-wrap gap-3"><Link href="/guides" className="rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-105">Explore the edits <Arrow /></Link><Link href="/destinations" className="rounded-full border border-black/20 px-6 py-3 text-sm font-bold hover:bg-black hover:text-white">Find a destination</Link></div>
            </div>
            <HeroScene />
          </div>
        </div>
      </section>

      <section className="bg-[#11110f] px-5 py-24 text-[#f4f0e8] md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-end justify-between gap-5"><div><p className="mono text-[#d7ff4f]">THE EDIT</p><h2 className="display mt-4 text-5xl md:text-7xl">Less stuff.<br/><i>Better stuff.</i></h2></div><Link href="/guides" className="hidden rounded-full border border-white/20 px-5 py-3 text-sm md:block">View all <Arrow /></Link></div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">{guides.map((item, i) => <article key={item.title} className={`group ${i === 1 ? "md:translate-y-16" : ""}`}><div className="overflow-hidden rounded-[1.5rem] bg-[#292923]"><img src={item.image} alt="" className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" /></div><p className="mono mt-5 text-[#d7ff4f]">{item.tag}</p><h3 className="mt-2 max-w-md text-2xl font-semibold leading-tight">{item.title}</h3><Link href="/guides" className="mono mt-4 inline-block border-b border-white/25 pb-1">Read the edit <Arrow /></Link></article>)}</div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]"><p className="mono">SHOP BY CATEGORY</p><div className="mt-8 flex flex-wrap gap-3">{categories.map((category) => <Link key={category} href={`/categories/${category.toLowerCase().replaceAll(" ", "-")}`} className="rounded-full border border-black/15 px-6 py-4 text-lg transition hover:-translate-y-1 hover:bg-black hover:text-white">{category} <Arrow /></Link>)}</div></div>
      </section>

      <section className="px-5 pb-24 md:px-10 md:pb-32"><div className="mx-auto grid max-w-[1400px] overflow-hidden rounded-[2rem] bg-[#d7ff4f] lg:grid-cols-2"><div className="p-8 md:p-14"><p className="mono">DESTINATION 001</p><h2 className="display mt-10 text-6xl leading-[.9] md:text-8xl">PARIS,<br/><i>EDITED.</i></h2><p className="mt-8 max-w-md leading-7 text-black/65">The things worth buying, when to buy them, and what they can replace in your one-bag setup.</p><Link href="/destinations/paris" className="mt-8 inline-flex rounded-full bg-black px-6 py-3 text-sm font-bold text-white">Explore Paris <Arrow /></Link></div><img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=90" alt="Paris" className="min-h-[420px] w-full object-cover lg:min-h-full" /></div></section>

      <footer className="border-t border-black/10 px-5 py-10 md:px-10"><div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 md:flex-row"><div><div className="text-xl font-extrabold">CARRY-ON <span className="font-normal italic">CULTURE</span></div><p className="mt-2 max-w-sm text-sm text-black/55">A smarter way to travel light.</p></div><div className="flex flex-wrap gap-5 mono"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/affiliate-disclosure">Affiliate disclosure</Link><Link href="/newsletter">Newsletter</Link></div></div></footer>
    </main>
  );
}
