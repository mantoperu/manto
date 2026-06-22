import { cn } from "@/lib/cn";

/**
 * Patrón gráfico propio de Manto: una trama de líneas entrelazadas en
 * diagonal con nodos de conexión. Sobrio y reutilizable como fondo
 * decorativo. Es puramente ornamental (aria-hidden).
 */
export function WeavePattern({
  className,
  id = "manto-weave",
}: {
  className?: string;
  id?: string;
}) {
  return (
    <svg
      className={cn("pointer-events-none select-none", className)}
      aria-hidden="true"
      width="100%"
      height="100%"
    >
      <defs>
        <pattern
          id={id}
          width="48"
          height="48"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(0)"
        >
          {/* Hilos entrelazados */}
          <path
            d="M0 24 L24 0 M24 48 L48 24 M0 0 L48 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          {/* Nodos */}
          <circle cx="24" cy="24" r="1.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/**
 * Línea/cenefa entrelazada para usar como separador sutil entre secciones.
 */
export function WeaveDivider({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-2 w-full text-petroleo/25", className)}
      viewBox="0 0 240 8"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 4 Q 6 0 12 4 T 24 4 T 36 4 T 48 4 T 60 4 T 72 4 T 84 4 T 96 4 T 108 4 T 120 4 T 132 4 T 144 4 T 156 4 T 168 4 T 180 4 T 192 4 T 204 4 T 216 4 T 228 4 T 240 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
