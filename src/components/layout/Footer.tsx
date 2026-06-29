import Link from "next/link";
import { MessageCircle, Mail, Instagram } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import { services } from "@/lib/services";
import {
  mainNav,
  site,
  whatsappUrl,
  defaultQuoteMessage,
} from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-bone-300/70 bg-bone-200/60">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
              Agencia peruana de automatización y desarrollo web para empresas
              y negocios. Tecnología práctica, clara y adaptada a lo que tu
              negocio necesita.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a
                href={whatsappUrl(defaultQuoteMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-petroleo hover:text-petroleo-600"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp: {site.whatsapp.display}
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                className="inline-flex items-center gap-2 text-ink-muted hover:text-ink"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {site.contact.email}
              </a>
              {site.social.instagram && (
                <a
                  href={`https://instagram.com/${site.social.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-ink-muted hover:text-ink"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />@
                  {site.social.instagram}
                </a>
              )}
            </div>
          </div>

          <nav
            aria-label="Páginas"
            className="md:col-span-3"
          >
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-ink">
              Navegación
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink-muted hover:text-petroleo"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Servicios" className="md:col-span-4">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-ink">
              Servicios
            </h2>
            <ul className="mt-4 grid gap-2.5 text-sm sm:grid-cols-2 md:grid-cols-1">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="text-ink-muted hover:text-petroleo"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-bone-300/70 pt-6 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Hecho en {site.country}.
          </p>
          <p>Automatización y desarrollo web para empresas y negocios.</p>
        </div>
      </Container>
    </footer>
  );
}
