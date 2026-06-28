import { cn } from "@/lib/cn";
import { Container } from "./Container";

/**
 * Sección de página con espaciado vertical consistente y contenedor.
 */
export function Section({
  className,
  containerClassName,
  children,
  id,
  as: Tag = "section",
}: {
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  id?: string;
  as?: React.ElementType;
}) {
  return (
    <Tag id={id} className={cn("py-16 sm:py-20 lg:py-24", className)}>
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  );
}

/**
 * Encabezado de sección: etiqueta, título y descripción opcional.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: TitleTag = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="text-sm font-medium uppercase tracking-[0.14em] text-petroleo">
          {eyebrow}
        </span>
      )}
      <TitleTag
        className={cn(
          "mt-3 font-display font-semibold tracking-tight text-ink",
          TitleTag === "h1"
            ? "text-3xl sm:text-4xl lg:text-5xl"
            : "text-2xl sm:text-3xl",
        )}
      >
        {title}
      </TitleTag>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
