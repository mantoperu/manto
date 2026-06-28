"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Transición de entrada al cambiar de página. `template.tsx` se vuelve a
 * montar en cada navegación, así que cada ruta aparece con un fundido sutil.
 * El encabezado y el pie quedan fuera (en el layout), por lo que no parpadean.
 */
export default function Template({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
