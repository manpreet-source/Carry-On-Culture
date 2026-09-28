import Link from "next/link";

export function EditorialPage({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <main className="min-h-screen bg-[#f4f0e8] px-5 pb-20 pt-28 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <Link href="/" className="mono inline-block border-b border-black/20 pb-1">← Back home</Link>
        <p className="mono mt-16">{eyebrow}</p>
        <h1 className="display mt-5 max-w-5xl text-6xl leading-[.9] md:text-9xl">{title}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-black/60">{intro}</p>
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {["Coming next", "The field edit", "Worth the space"].map((label) => <div key={label} className="rounded-[1.5rem] border border-black/10 bg-white/40 p-7"><span className="mono">{label}</span><div className="mt-16 h-2 w-16 rounded-full bg-[#d7ff4f]" /><p className="mt-5 text-sm text-black/55">This section is wired into the publishing system and ready for structured content.</p></div>)}
        </div>
      </div>
    </main>
  );
}
