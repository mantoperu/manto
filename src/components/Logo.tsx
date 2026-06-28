/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/cn";

// Proporción del logo procesado (public/manto-logo*.png).
const MARK_W = 897;
const MARK_H = 641;

/**
 * Isotipo de Manto: monograma "A·M" entrelazado con la trama de nodos.
 *
 * Se sirve como PNG con fondo transparente, generado a partir del logo
 * original con `scripts/process-logo.mjs`:
 *   - variant "dark"  → tinta (#161412), para fondos claros.
 *   - variant "light" → hueso (#F6F4EE), para fondos oscuros.
 */
export function LogoMark({
  className,
  variant = "dark",
  alt = "Manto",
}: {
  className?: string;
  variant?: "dark" | "light";
  alt?: string;
}) {
  const src = variant === "light" ? "/manto-logo-light.png" : "/manto-logo.png";
  return (
    <img
      src={src}
      alt={alt}
      width={MARK_W}
      height={MARK_H}
      className={cn("w-auto", className)}
    />
  );
}

/**
 * Logotipo completo: isotipo + palabra "Manto".
 */
export function Logo({
  className,
  variant = "dark",
  showText = true,
  iconClassName,
  textClassName,
}: {
  className?: string;
  variant?: "dark" | "light";
  showText?: boolean;
  iconClassName?: string;
  textClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      {/* El nombre lo aporta el texto, así que la marca es decorativa. */}
      <LogoMark
        variant={variant}
        alt={showText ? "" : "Manto"}
        className={cn("h-8", iconClassName)}
      />
      {showText && (
        <span
          className={cn(
            "font-display text-xl font-semibold tracking-tight",
            variant === "light" ? "text-bone-50" : "text-ink",
            textClassName,
          )}
        >
          Manto
        </span>
      )}
    </span>
  );
}
