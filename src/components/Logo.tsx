import { cn } from "@/lib/cn";

/**
 * Isotipo de Manto.
 *
 * Concepto: una "M" formada por un hilo continuo (el manto que se pliega
 * en capas) atravesada por un segundo hilo que entra y sale —un tejido—
 * con dos nodos de conexión en los vértices. Geometría sobria que evoca
 * tejido, capas y conexión, sin caer en lo folclórico.
 *
 * Diseñado para leerse bien incluso a tamaño de favicon.
 */
export function Isotipo({
  className,
  title = "Isotipo de Manto",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      role="img"
      aria-label={title}
      className={className}
    >
      {/* Hilo principal en forma de M (capas que se pliegan) */}
      <path
        d="M8 31 V13 L20 25 L32 13 V31"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Hilo transversal entrelazado (entra y sale del tejido) */}
      <path
        d="M4 20 H15"
        className="text-arcilla"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path
        d="M25 20 H36"
        className="text-arcilla"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      {/* Nodos de conexión */}
      <circle cx="8" cy="13" r="2.6" className="fill-arcilla" />
      <circle cx="32" cy="13" r="2.6" className="fill-arcilla" />
    </svg>
  );
}

/**
 * Logotipo completo: isotipo + palabra "Manto".
 */
export function Logo({
  className,
  iconClassName,
  textClassName,
  showText = true,
}: {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  showText?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Isotipo className={cn("h-7 w-7 text-petroleo", iconClassName)} />
      {showText && (
        <span
          className={cn(
            "font-display text-xl font-semibold tracking-tight text-ink",
            textClassName,
          )}
        >
          Manto
        </span>
      )}
    </span>
  );
}
