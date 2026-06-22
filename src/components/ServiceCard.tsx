import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/services";

/**
 * Tarjeta de servicio para listados. Toda la tarjeta es enlazable.
 */
export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/servicios/${service.slug}`}
      className="group relative flex flex-col rounded-lg border border-bone-300 bg-bone-50 p-6 transition-colors hover:border-petroleo/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petroleo focus-visible:ring-offset-2 focus-visible:ring-offset-bone"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-petroleo/10 text-petroleo transition-colors group-hover:bg-petroleo group-hover:text-bone-50">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold text-ink">
        {service.shortTitle}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
        {service.summary}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-petroleo">
        Ver servicio
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
