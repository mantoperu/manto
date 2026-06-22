/**
 * Ilustración geométrica del hero: capas entrelazadas y nodos de conexión.
 * Evoca un tejido modular y una capa tecnológica que envuelve y conecta.
 * Decorativa (aria-hidden), construida con SVG original.
 */
export function HeroArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 420"
      fill="none"
      role="img"
      aria-label="Composición geométrica de capas y conexiones"
      className={className}
    >
      {/* Capas concéntricas (el manto que envuelve) */}
      {[0, 1, 2, 3].map((i) => {
        const inset = i * 34;
        return (
          <rect
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
          />
        );
      })}

      {/* Trama diagonal entrelazada */}
      <g className="text-petroleo" stroke="currentColor" strokeWidth={1.25} strokeOpacity={0.5}>
        <path d="M40 210 L210 40 L380 210 L210 380 Z" fill="none" />
        <path d="M108 210 L210 108 L312 210 L210 312 Z" fill="none" />
        <path d="M40 40 L380 380 M380 40 L40 380" strokeOpacity={0.2} />
      </g>

      {/* Hilos de acento (conexiones activas) */}
      <g className="text-arcilla" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
        <path d="M210 40 L210 108" />
        <path d="M312 210 L380 210" />
        <path d="M210 312 L210 380" />
      </g>

      {/* Nodos de conexión */}
      <g className="text-arcilla" fill="currentColor">
        <circle cx="210" cy="40" r="5" />
        <circle cx="380" cy="210" r="5" />
        <circle cx="210" cy="380" r="5" />
        <circle cx="40" cy="210" r="5" />
      </g>
      <g className="text-petroleo" fill="currentColor">
        <circle cx="210" cy="210" r="6" />
        <circle cx="210" cy="108" r="3.5" />
        <circle cx="312" cy="210" r="3.5" />
        <circle cx="210" cy="312" r="3.5" />
        <circle cx="108" cy="210" r="3.5" />
      </g>
    </svg>
  );
}
