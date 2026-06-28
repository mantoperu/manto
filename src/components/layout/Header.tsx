"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X, MessageCircle, ChevronDown, ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { mainNav, whatsappUrl, defaultQuoteMessage } from "@/lib/site";
import { services } from "@/lib/services";
import { cn } from "@/lib/cn";

const SERVICES_HREF = "/servicios";

export function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Cierra menús al cambiar de ruta.
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Compacta el encabezado al hacer scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={cn(
        "sticky top-0 z-40 border-b backdrop-blur transition-colors duration-300",
        scrolled
          ? "border-bone-300/70 bg-bone/85 shadow-sm shadow-ink/[0.03] supports-[backdrop-filter]:bg-bone/70"
          : "border-transparent bg-bone/60 supports-[backdrop-filter]:bg-bone/40",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-content items-center justify-between px-5 transition-[height] duration-300 sm:px-6 lg:px-8",
          scrolled ? "h-14" : "h-16",
        )}
      >
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
            {mainNav.map((item) => {
              const active = isActive(item.href);
              const hasMenu = item.href === SERVICES_HREF;
              return (
                <li
                  key={item.href}
                  className="relative"
                  onMouseEnter={hasMenu ? () => setServicesOpen(true) : undefined}
                  onMouseLeave={hasMenu ? () => setServicesOpen(false) : undefined}
                  onFocus={hasMenu ? () => setServicesOpen(true) : undefined}
                  onBlur={
                    hasMenu
                      ? (e) => {
                          if (!e.currentTarget.contains(e.relatedTarget as Node))
                            setServicesOpen(false);
                        }
                      : undefined
                  }
                  onKeyDown={
                    hasMenu
                      ? (e) => {
                          if (e.key === "Escape") setServicesOpen(false);
                        }
                      : undefined
                  }
                >
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    aria-haspopup={hasMenu ? "menu" : undefined}
                    aria-expanded={hasMenu ? servicesOpen : undefined}
                    className={cn(
                      "relative inline-flex items-center gap-1 rounded px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petroleo",
                      active ? "text-petroleo" : "text-ink-muted hover:text-ink",
                    )}
                  >
                    {item.label}
                    {hasMenu && (
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200",
                          servicesOpen && "rotate-180",
                        )}
                        aria-hidden="true"
                      />
                    )}
                    {active && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-petroleo"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>

                  {hasMenu && (
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          role="menu"
                          aria-label="Servicios"
                          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.97 }}
                          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
                          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 6, scale: 0.97 }}
                          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          style={{ transformOrigin: "top center" }}
                          className="absolute left-1/2 top-full z-50 w-[min(92vw,540px)] -translate-x-1/2 pt-2"
                        >
                          <div className="overflow-hidden rounded-lg border border-bone-300 bg-bone-50 shadow-xl shadow-ink/5">
                            <div className="grid grid-cols-2 gap-1 p-2">
                              {services.map((s) => {
                                const SIcon = s.icon;
                                return (
                                  <Link
                                    key={s.slug}
                                    href={`/servicios/${s.slug}`}
                                    role="menuitem"
                                    className="group/item flex items-start gap-3 rounded-md p-3 transition-colors hover:bg-bone-200/70 focus-visible:bg-bone-200/70 focus-visible:outline-none"
                                  >
                                    <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-md bg-petroleo/10 text-petroleo transition-colors group-hover/item:bg-petroleo group-hover/item:text-bone-50">
                                      <SIcon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                    <span className="min-w-0">
                                      <span className="block text-sm font-semibold text-ink">
                                        {s.shortTitle}
                                      </span>
                                      <span className="mt-0.5 block truncate text-xs text-ink-muted">
                                        {s.tagline}
                                      </span>
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                            <Link
                              href="/servicios"
                              role="menuitem"
                              className="flex items-center justify-between gap-2 border-t border-bone-300 bg-bone-200/40 px-4 py-3 text-sm font-medium text-petroleo transition-colors hover:bg-bone-200/70 focus-visible:bg-bone-200/70 focus-visible:outline-none"
                            >
                              Ver todos los servicios
                              <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              );
            })}
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
          <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Menú móvil */}
      <div id="mobile-menu" className={cn("md:hidden", open ? "block" : "hidden")}>
        <nav
          aria-label="Móvil"
          className="border-t border-bone-300/70 bg-bone px-5 pb-6 pt-2 sm:px-6"
        >
          <ul className="flex flex-col">
            {mainNav.map((item) => {
              const active = isActive(item.href);
              if (item.href === SERVICES_HREF) {
                return (
                  <li key={item.href}>
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex-1 rounded px-3 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petroleo",
                          active ? "bg-petroleo/5 text-petroleo" : "text-ink hover:bg-bone-200",
                        )}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-label={mobileServicesOpen ? "Ocultar servicios" : "Mostrar servicios"}
                        aria-expanded={mobileServicesOpen}
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        className="rounded p-3 text-ink-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petroleo"
                      >
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 transition-transform duration-200",
                            mobileServicesOpen && "rotate-180",
                          )}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                    <AnimatePresence initial={false}>
                      {mobileServicesOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          {services.map((s) => (
                            <li key={s.slug}>
                              <Link
                                href={`/servicios/${s.slug}`}
                                className="block rounded px-3 py-2.5 pl-6 text-sm text-ink-muted transition-colors hover:bg-bone-200 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petroleo"
                              >
                                {s.shortTitle}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block rounded px-3 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petroleo",
                      active ? "bg-petroleo/5 text-petroleo" : "text-ink hover:bg-bone-200",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
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
