export function EditorsPickBadge({ partner }: { partner?: string }) {
  return <div className="inline-flex items-center gap-2 rounded-full border border-[#171714]/15 bg-[#a8ddd4]/70 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em]"><span aria-hidden="true">✦</span> Editor’s Pick{partner ? <span className="normal-case tracking-normal opacity-70">· Partner placement: {partner}</span> : null}</div>;
}
