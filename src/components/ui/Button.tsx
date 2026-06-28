import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded font-medium transition duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petroleo focus-visible:ring-offset-2 focus-visible:ring-offset-bone disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transform-none motion-reduce:transition-colors";

const variants: Record<Variant, string> = {
  primary:
    "bg-petroleo text-bone-50 hover:bg-petroleo-600 active:bg-petroleo-700",
  secondary:
    "border border-petroleo/30 bg-transparent text-petroleo hover:border-petroleo hover:bg-petroleo/5 active:bg-petroleo/10",
  ghost: "text-ink hover:text-petroleo",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

function classes(variant: Variant, size: Size, className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

/** Botón como enlace interno (next/link). */
export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps & { href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  if (external) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={classes(variant, size, className)}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes(variant, size, className)} {...rest}>
      {children}
    </Link>
  );
}

/** Botón nativo (acciones, formularios). */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={classes(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}
