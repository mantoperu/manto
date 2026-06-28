"use client";

import type { CSSProperties, PointerEvent } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type Transition,
  type TargetAndTransition,
} from "motion/react";

/**
 * Ilustración geométrica del hero: capas entrelazadas y nodos de conexión.
 * Evoca un tejido modular y una capa tecnológica que envuelve y conecta.
 *
 * Movimiento: los hilos se "dibujan" al cargar; luego las capas giran
 * lentamente en sentidos opuestos, los nodos laten y salen pulsos de señal
 * desde el centro. Además, el conjunto se inclina siguiendo el cursor.
 * Todo se desactiva con prefers-reduced-motion.
 */
const ACCENT_NODES = [
  [210, 40],
  [380, 210],
  [210, 380],
  [40, 210],
] as const;

const INNER_NODES = [
  [210, 108],
  [312, 210],
  [210, 312],
  [108, 210],
] as const;

type AnimProps = {
  initial?: TargetAndTransition;
  animate?: TargetAndTransition;
  transition?: Transition;
};

export function HeroArt({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 120,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 120,
    damping: 20,
  });

  function handleMove(e: PointerEvent<HTMLDivElement>) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  // Dibujado de un trazo (una sola vez).
  const drawIn = (delay: number): AnimProps =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: {
            pathLength: { duration: 1, ease: "easeInOut", delay },
            opacity: { duration: 0.3, delay },
          },
        };

  // Aparición + latido continuo de un nodo.
  const nodePulse = (delay: number): AnimProps =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: 1, scale: [1, 1.4, 1] },
          transition: {
            opacity: { duration: 0.3, delay },
            scale: {
              duration: 2.4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay,
            },
          },
        };

  // Giro lento continuo alrededor del centro de la propia figura.
  const spin = (duration: number, dir: 1 | -1): AnimProps =>
    reduce
      ? {}
      : {
          animate: { rotate: 360 * dir },
          transition: { duration, repeat: Infinity, ease: "linear" },
        };

  const centerOrigin: CSSProperties | undefined = reduce
    ? undefined
    : { transformBox: "fill-box", transformOrigin: "center" };

  return (
    <div
      className={className}
      style={{ perspective: 1000 }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      <motion.svg
        viewBox="0 0 420 420"
        fill="none"
        role="img"
        aria-label="Composición geométrica de capas y conexiones"
        className="w-full"
        style={reduce ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {/* Capas concéntricas: giro lento horario */}
        <motion.g style={centerOrigin} {...spin(90, 1)}>
          {[0, 1, 2, 3].map((i) => {
            const inset = i * 34;
            return (
              <motion.rect
                key={i}
                x={40 + inset}
                y={40 + inset}
                width={340 - inset * 2}
                height={340 - inset * 2}
                rx={6}
                className="text-petroleo"
                stroke="currentColor"
                strokeOpacity={0.18 + i * 0.12}
                strokeWidth={1.5}
                {...drawIn(0.15 + i * 0.14)}
              />
            );
          })}
        </motion.g>

        {/* Trama diagonal: contragiro más lento */}
        <motion.g
          className="text-petroleo"
          stroke="currentColor"
          strokeWidth={1.25}
          strokeOpacity={0.5}
          style={centerOrigin}
          {...spin(120, -1)}
        >
          <motion.path d="M40 210 L210 40 L380 210 L210 380 Z" {...drawIn(0.7)} />
          <motion.path d="M108 210 L210 108 L312 210 L210 312 Z" {...drawIn(0.85)} />
          <motion.path d="M40 40 L380 380 M380 40 L40 380" strokeOpacity={0.2} {...drawIn(1)} />
        </motion.g>

        {/* Hilos de acento (estables: conectan centro y nodos) */}
        <g className="text-arcilla" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
          <motion.path d="M210 40 L210 108" {...drawIn(1.1)} />
          <motion.path d="M312 210 L380 210" {...drawIn(1.2)} />
          <motion.path d="M210 312 L210 380" {...drawIn(1.3)} />
          <motion.path d="M40 210 L108 210" {...drawIn(1.4)} />
        </g>

        {/* Pulsos tipo señal desde el centro */}
        {!reduce &&
          [0, 1.5].map((d, k) => (
            <motion.circle
              key={k}
              cx={210}
              cy={210}
              r={6}
              className="text-petroleo"
              stroke="currentColor"
              strokeWidth={1.5}
              fill="none"
              initial={{ r: 6, opacity: 0 }}
              animate={{ r: [6, 150], opacity: [0.4, 0] }}
              transition={{ duration: 3, ease: "easeOut", repeat: Infinity, delay: 1.6 + d }}
            />
          ))}

        {/* Nodos de acento (laten) */}
        <g className="text-arcilla" fill="currentColor">
          {ACCENT_NODES.map(([cx, cy], i) => (
            <motion.circle key={i} cx={cx} cy={cy} r={5} style={centerOrigin} {...nodePulse(1 + i * 0.15)} />
          ))}
        </g>

        {/* Nodo central + nodos internos (laten suave) */}
        <g className="text-petroleo" fill="currentColor">
          <motion.circle cx={210} cy={210} r={6} style={centerOrigin} {...nodePulse(1.1)} />
          {INNER_NODES.map(([cx, cy], i) => (
            <motion.circle key={i} cx={cx} cy={cy} r={3.5} style={centerOrigin} {...nodePulse(1.3 + i * 0.12)} />
          ))}
        </g>
      </motion.svg>
    </div>
  );
}
