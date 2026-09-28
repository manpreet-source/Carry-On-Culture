"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function FloatingObject({ children, duration = 7, distance = 10 }: { children: ReactNode; duration?: number; distance?: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      animate={reduced ? undefined : { y: [0, -distance, 0], rotateZ: [0, 1.2, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      style={{ willChange: reduced ? "auto" : "transform" }}
    >
      {children}
    </motion.div>
  );
}
