"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "@/components/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { mainNav, whatsappUrl, defaultQuoteMessage } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Cierra el menú móvil al cambiar de ruta.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Evita el scroll del fondo cuando el menú móvil está abierto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-bone-300/70 bg-bone/85 backdrop-blur supports-[backdrop-filter]:bg-bone/70">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petroleo focus-visible:ring-offset-2 focus-visible:ring-offset-bone"
          aria-label="Manto — Inicio"
        >
          <Logo />
        </Link>

        {/* Navegación de escritorio */}
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "rounded px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petroleo",
                    isActive(item.href)
                      ? "text-petroleo"
                      : "text-ink-muted hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <ButtonLink
            href={whatsappUrl(defaultQuoteMessage)}
            size="md"
            aria-label="Solicitar una cotización por WhatsApp"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Cotizar
          </ButtonLink>
        </div>

        {/* Botón de menú móvil */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded p-2 text-ink md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petroleo"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">
            {open ? "Cerrar menú" : "Abrir menú"}
          </span>
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Menú móvil */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav
          aria-label="Móvil"
          className="border-t border-bone-300/70 bg-bone px-5 pb-6 pt-2 sm:px-6"
        >
          <ul className="flex flex-col">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "block rounded px-3 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petroleo",
                    isActive(item.href)
                      ? "bg-petroleo/5 text-petroleo"
                      : "text-ink hover:bg-bone-200",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <ButtonLink
              href={whatsappUrl(defaultQuoteMessage)}
              size="lg"
              className="w-full"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Solicitar cotización
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
