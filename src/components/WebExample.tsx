import type { WebExample as WebExampleType } from "@/lib/services";

/**
 * Ejemplo visual de un servicio dentro de un marco tipo ventana.
 *
 * - Con `host`: se muestra como un sitio web (barra con el dominio y la
 *   captura de página completa que se desplaza sola; se pausa al pasar el
 *   cursor y se detiene con prefers-reduced-motion).
 * - Sin `host`: se muestra como una imagen enmarcada estática.
 *
 * Es un modelo visual, sin enlaces.
 */
export function WebExample({ example }: { example: WebExampleType }) {
  const isSite = Boolean(example.host);
  return (
    <figure className="overflow-hidden rounded-lg border border-bone-300 bg-bone-50 shadow-sm">
      {/* Barra superior tipo ventana */}
      <div className="flex items-center gap-2 border-b border-bone-300 bg-bone-200/60 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-arcilla/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-bone-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-petroleo/40" />
        </span>
        {isSite && (
          <span className="ml-2 flex-1 truncate rounded bg-bone-50 px-3 py-1 text-xs text-ink-soft">
            {example.host}
          </span>
        )}
      </div>

      {/* Cuerpo: sitio que se desplaza, o imagen estática */}
      {isSite ? (
        <div className="group relative h-56 overflow-hidden bg-bone-200 sm:h-72">
          <div
            className="preview-scroll h-full w-full bg-top bg-no-repeat"
            style={{
              backgroundImage: `url(${example.image})`,
              backgroundSize: "100% auto",
            }}
            role="img"
            aria-label={example.alt}
          />
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={example.image}
          alt={example.alt}
          className="block w-full bg-bone-200"
          loading="lazy"
        />
      )}

      {/* Pie (opcional) */}
      {(example.title || example.subtitle) && (
        <figcaption className="border-t border-bone-300 px-4 py-3">
          {example.title && (
            <p className="truncate font-display text-sm font-semibold text-ink">
              {example.title}
            </p>
          )}
          {example.subtitle && (
            <p className="truncate text-xs text-ink-muted">{example.subtitle}</p>
          )}
        </figcaption>
      )}
    </figure>
  );
}
