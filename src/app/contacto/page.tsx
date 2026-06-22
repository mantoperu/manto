import type { Metadata } from "next";
import { MessageCircle, CalendarClock, Mail, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/ContactForm";
import { ButtonLink } from "@/components/ui/Button";
import {
  site,
  whatsappUrl,
  defaultQuoteMessage,
  defaultMeetingMessage,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Solicita una cotización o coordina una reunión con Manto. Te respondemos por WhatsApp. Cuéntanos sobre tu negocio y qué necesitas mejorar.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: `Contacto · ${site.name}`,
    description:
      "Solicita una cotización o coordina una reunión con Manto. Te respondemos por WhatsApp.",
    url: `${site.url}/contacto`,
  },
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Conversemos sobre tu negocio"
        description="Nuestro principal canal es WhatsApp. Completa el formulario y se abrirá WhatsApp con tu solicitud lista para enviar, o escríbenos directamente."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Formulario */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Solicita una cotización
            </h2>
            <p className="mt-2 text-ink-muted">
              Cuéntanos lo esencial. Con esa información preparamos una propuesta
              clara y a tu medida.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          {/* Canales directos */}
          <aside className="lg:col-span-5">
            <div className="space-y-5 lg:sticky lg:top-24">
              <div className="rounded-lg border border-petroleo/20 bg-petroleo/[0.04] p-6">
                <h2 className="font-display text-lg font-semibold text-ink">
                  Escríbenos directamente
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Si prefieres, abre una conversación con nosotros ahora mismo.
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <ButtonLink
                    href={whatsappUrl(defaultQuoteMessage)}
                    className="w-full"
                  >
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    Cotizar por WhatsApp
                  </ButtonLink>
                  <ButtonLink
                    href={whatsappUrl(defaultMeetingMessage)}
                    variant="secondary"
                    className="w-full"
                  >
                    <CalendarClock className="h-5 w-5" aria-hidden="true" />
                    Coordinar una reunión
                  </ButtonLink>
                </div>
              </div>

              <div className="rounded-lg border border-bone-300 bg-bone-50 p-6">
                <h2 className="font-display text-lg font-semibold text-ink">
                  Otros datos
                </h2>
                <ul className="mt-4 space-y-4 text-sm">
                  <li className="flex gap-3">
                    <MessageCircle
                      className="mt-0.5 h-5 w-5 flex-none text-petroleo"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-medium text-ink">WhatsApp</p>
                      <a
                        href={whatsappUrl(defaultQuoteMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ink-muted hover:text-petroleo"
                      >
                        {site.whatsapp.display}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Mail
                      className="mt-0.5 h-5 w-5 flex-none text-petroleo"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-medium text-ink">Correo</p>
                      <a
                        href={`mailto:${site.contact.email}`}
                        className="text-ink-muted hover:text-petroleo"
                      >
                        {site.contact.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Clock
                      className="mt-0.5 h-5 w-5 flex-none text-petroleo"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-medium text-ink">Respuesta</p>
                      <p className="text-ink-muted">
                        Te respondemos lo antes posible en horario laboral.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
