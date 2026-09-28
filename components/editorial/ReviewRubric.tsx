import type { ProductReview } from "@/lib/content/types";

const labels: Array<[keyof ProductReview["scores"], string]> = [
  ["packability", "Packability"],
  ["comfort", "Comfort"],
  ["durability", "Durability"],
  ["usability", "Usability"],
  ["value", "Value"],
];

export function ReviewRubric({ review }: { review: ProductReview }) {
  return (
    <section className="rounded-[32px] border border-black/10 bg-white/65 p-6 md:p-8">
      <div className="flex flex-col justify-between gap-4 border-b border-black/10 pb-6 md:flex-row md:items-end">
        <div><p className="text-xs uppercase tracking-[0.2em] text-[#77736a]">In-trip evaluation</p><h2 className="mt-2 font-serif text-3xl">The rubric</h2></div>
        <span className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] ${review.verdict === "pass" ? "bg-[#a8ddd4]" : "border border-black/10"}`}>{review.verdict}</span>
      </div>
      <div className="mt-6 space-y-5">
        {labels.map(([key, label]) => { const score = review.scores[key]; return <div key={key}><div className="mb-2 flex justify-between text-sm"><span>{label}</span><span>{score}/10</span></div><div className="h-2 overflow-hidden rounded-full bg-black/8"><div className="h-full rounded-full bg-[#171714]" style={{ width: `${Math.max(0, Math.min(10, score)) * 10}%` }} /></div></div>; })}
      </div>
      <p className="mt-7 text-sm leading-6 text-[#68655e]">Carry-on fit: {review.carryOnFit}</p>
      {review.verifiedInTrip ? <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[#5d776f]">✓ Verified in a real trip context</p> : <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[#77736a]">Trip verification not yet recorded</p>}
    </section>
  );
}
