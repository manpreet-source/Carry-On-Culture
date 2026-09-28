"use client";

import { motion, useReducedMotion } from "framer-motion";

export function HeroScene() {
  const reduced = useReducedMotion();
  return (
    <div className="relative h-[520px] w-full overflow-hidden rounded-[2rem] bg-[#171713] md:h-[650px]">
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 50% 42%, #d7ff4f 0, transparent 28%), radial-gradient(circle at 75% 75%, #ff7043 0, transparent 24%)" }} />
      <motion.div
        animate={reduced ? undefined : { y: [-12, 12, -12], rotate: [-2, 2, -2] }}
        transition={reduced ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-64 w-48 -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d] md:h-80 md:w-60"
      >
        <div className="absolute inset-0 rounded-[2rem] border border-white/15 bg-gradient-to-br from-[#4b4a43] via-[#262620] to-[#0b0b09] shadow-[0_50px_100px_rgba(0,0,0,.55)] [transform:rotateY(-18deg)_rotateX(8deg)]" />
        <div className="absolute left-8 right-8 top-8 h-10 rounded-full border border-white/10 bg-white/5 [transform:rotateY(-18deg)_rotateX(8deg)]" />
        <div className="absolute -right-7 top-20 h-28 w-7 rounded-r-xl border border-white/10 bg-[#33332d]" />
        <div className="absolute -top-8 left-20 h-14 w-20 rounded-t-2xl border-x border-t border-white/10 bg-[#33332d]" />
      </motion.div>
      {[
        ["PARIS", "left-[10%] top-[18%]"],
        ["SKINCARE", "right-[9%] top-[28%]"],
        ["PACK LIGHT", "left-[16%] bottom-[18%]"],
        ["ONE BAG", "right-[15%] bottom-[16%]"],
      ].map(([label, pos], i) => (
        <motion.div key={label} animate={reduced ? undefined : { y: [0, i % 2 ? 10 : -10, 0] }} transition={reduced ? undefined : { duration: 4 + i, repeat: Infinity, ease: "easeInOut" }} className={`absolute ${pos} rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[10px] font-bold tracking-[.18em] text-white backdrop-blur-md`}>
          {label}
        </motion.div>
      ))}
      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white/55">
        <span className="mono">CARRY-ON / 001</span><span className="mono">SCROLL TO EXPLORE ↓</span>
      </div>
    </div>
  );
}
