"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

/** Curva de easing de marca (entrada suave, con carácter). */
const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Revela su contenido al entrar en pantalla. Respeta prefers-reduced-motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.06 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

type ContainerTag = "div" | "ul" | "ol";

/**
 * Contenedor que escalona la entrada de sus hijos <StaggerItem>.
 * Por defecto se dispara al entrar en pantalla; con `playOnMount` arranca solo.
 */
export function Stagger({
  children,
  className,
  as = "div",
  playOnMount = false,
}: {
  children: ReactNode;
  className?: string;
  as?: ContainerTag;
  playOnMount?: boolean;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }
  const M = motion[as];
  const trigger = playOnMount
    ? { animate: "show" as const }
    : {
        whileInView: "show" as const,
        viewport: { once: true, margin: "0px 0px -10% 0px" },
      };
  return (
    <M className={className} variants={containerVariants} initial="hidden" {...trigger}>
      {children}
    </M>
  );
}

/** Elemento hijo de <Stagger>. */
export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }
  const M = motion[as];
  return (
    <M className={className} variants={itemVariants}>
      {children}
    </M>
  );
}
