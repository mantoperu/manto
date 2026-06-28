"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

/**
 * Barra fina superior que refleja el progreso de lectura de la página.
 * Detalle discreto; con movimiento reducido sigue el scroll sin suavizado.
 */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-petroleo"
      style={{ scaleX: reduce ? scrollYProgress : smooth }}
    />
  );
}
