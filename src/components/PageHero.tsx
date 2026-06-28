import { Container } from "@/components/ui/Container";
import { WeavePattern } from "@/components/Weave";

/**
 * Encabezado de página interior, con patrón de tejido sutil.
 * Si se pasa `aside`, el encabezado se divide en dos columnas (texto a la
 * izquierda, contenido —p. ej. una vista previa— a la derecha).
 */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
  aside,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  aside?: React.ReactNode;
}) {
  const main = (
    <div>
      {eyebrow && (
        <span className="text-sm font-medium uppercase tracking-[0.14em] text-petroleo">
          {eyebrow}
        </span>
      )}
      <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
          {description}
        </p>
      )}
      {children && <div className="mt-7">{children}</div>}
    </div>
  );

  return (
    <section className="relative overflow-hidden border-b border-bone-300/70 bg-bone-200/40">
      <WeavePattern className="absolute inset-0 text-petroleo/[0.06]" />
      <Container className="relative py-14 sm:py-16 lg:py-20">
        {aside ? (
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            {main}
            <div className="w-full lg:justify-self-end">{aside}</div>
          </div>
        ) : (
          main
        )}
      </Container>
    </section>
  );
}
