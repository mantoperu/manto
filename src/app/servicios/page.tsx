import type { Metadata } from "next";
import { ArrowRight, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { ButtonLink } from "@/components/ui/Button";
import { Stagger, StaggerItem } from "@/components/Motion";
import { services } from "@/lib/services";
import { site, whatsappUrl, defaultQuoteMessage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Desarrollo web, atención por WhatsApp con IA, automatización de procesos, CRM, dashboards y servicio técnico para empresas y negocios en Perú.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: `Servicios · ${site.name}`,
    description:
      "Desarrollo web, atención por WhatsApp con IA, automatización de procesos, CRM, dashboards y servicio técnico para empresas y negocios.",
    url: `${site.url}/servicios`,
  },
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Tecnología útil para empresas y negocios"
        description="Cada servicio resuelve un problema concreto. Puedes empezar por uno o combinarlos. No publicamos precios porque cada solución se cotiza según su alcance."
        aside={
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/ejemplos/servicios.webp"
            alt="Manto une el desarrollo web y la automatización en torno a los servicios de un negocio"
            width={1200}
            height={675}
            className="w-full mix-blend-multiply"
          />
        }
      >
        <ButtonLink href={whatsappUrl(defaultQuoteMessage)} size="lg">
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          Solicitar cotización
        </ButtonLink>
      </PageHero>

      <Section>
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug} className="h-full">
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-12 rounded-lg border border-bone-300 bg-bone-200/40 p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold text-ink">
            ¿No sabes por dónde empezar?
          </h2>
          <p className="mt-2 max-w-2xl text-ink-muted">
            Cuéntanos cómo trabaja tu negocio hoy y qué te gustaría mejorar.
            Revisamos tu caso y te recomendamos por dónde conviene partir, sin
            compromiso.
          </p>
          <div className="mt-5">
            <ButtonLink href="/contacto" variant="secondary">
              Ir a contacto
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
