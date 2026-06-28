"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

const THREAD =
  "M0 4 Q 6 0 12 4 T 24 4 T 36 4 T 48 4 T 60 4 T 72 4 T 84 4 T 96 4 T 108 4 T 120 4 T 132 4 T 144 4 T 156 4 T 168 4 T 180 4 T 192 4 T 204 4 T 216 4 T 228 4 T 240 4";

/**
 * Hilo entrelazado de marca que se "teje" (se dibuja) al entrar en pantalla.
 * Refuerza el concepto de manto/tejido como hilo conductor entre secciones.
 */
export function WeaveThread({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <svg
      viewBox="0 0 240 8"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn("h-2 w-full text-petroleo/30", className)}
    >
      <motion.path
        d={THREAD}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        initial={reduce ? false : { pathLength: 0, opacity: 0 }}
        whileInView={reduce ? undefined : { pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />
    </svg>
  );
}
