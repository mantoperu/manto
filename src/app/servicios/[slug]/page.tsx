import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Info,
  Building2,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { CTASection } from "@/components/CTASection";
import { ButtonLink } from "@/components/ui/Button";
import {
  services,
  getService,
  getServiceSlugs,
} from "@/lib/services";
import { site, whatsappUrl } from "@/lib/site";

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.shortTitle,
    description: service.summary,
    alternates: { canonical: `/servicios/${service.slug}` },
    openGraph: {
      title: `${service.shortTitle} · ${site.name}`,
      description: service.summary,
      url: `${site.url}/servicios/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = service.icon;
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const quoteMessage = `Hola Manto 👋. Me interesa el servicio de ${service.shortTitle}. Me gustaría solicitar una cotización.`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    provider: { "@type": "Organization", name: site.name },
    areaServed: { "@type": "Country", name: site.country },
    url: `${site.url}/servicios/${service.slug}`,
  };

  return (
    <>
      <PageHero eyebrow="Servicio" title={service.title} description={service.tagline}>
        <div className="flex flex-wrap items-center gap-4">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-petroleo text-bone-50">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
          <ButtonLink href={whatsappUrl(quoteMessage)} size="lg">
            Solicitar cotización
          </ButtonLink>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Contenido principal */}
          <div className="lg:col-span-8">
            <article className="space-y-12">
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">
                  Qué es
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-ink-muted">
                  {service.whatIs}
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">
                  Qué problema resuelve
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-ink-muted">
                  {service.problem}
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">
                  Qué puede incluir
                </h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check
                        className="mt-0.5 h-5 w-5 flex-none text-petroleo"
                        aria-hidden="true"
                      />
                      <span className="text-ink-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">
                  Cómo trabaja Manto
                </h2>
                <ol className="mt-5 space-y-5">
                  {service.howWeWork.map((step, i) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-md bg-petroleo/10 font-display text-sm font-semibold text-petroleo">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-display font-semibold text-ink">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-ink-muted">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {service.note && (
                <div className="flex gap-3 rounded-lg border border-bone-300 bg-bone-200/50 p-5">
                  <Info
                    className="mt-0.5 h-5 w-5 flex-none text-arcilla-600"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-relaxed text-ink-muted">
                    {service.note}
                  </p>
                </div>
              )}
            </article>
          </div>

          {/* Barra lateral */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="rounded-lg border border-bone-300 bg-bone-50 p-6">
                <h2 className="flex items-center gap-2 font-display text-base font-semibold text-ink">
                  <Building2 className="h-5 w-5 text-petroleo" aria-hidden="true" />
                  Para qué negocios
                </h2>
                <ul className="mt-4 space-y-3 text-sm">
                  {service.forBusinesses.map((b) => (
                    <li key={b} className="flex gap-2.5">
                      <span
                        className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-arcilla"
                        aria-hidden="true"
                      />
                      <span className="text-ink-muted">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-petroleo/20 bg-petroleo/[0.04] p-6">
                <h2 className="font-display text-base font-semibold text-ink">
                  ¿Te interesa este servicio?
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Cuéntanos tu caso y te enviamos una propuesta a tu medida. No
                  fijamos precios fijos: cotizamos según el alcance.
                </p>
                <ButtonLink
                  href={whatsappUrl(quoteMessage)}
                  className="mt-4 w-full"
                >
                  Cotizar este servicio
                </ButtonLink>
                <Link
                  href="/contacto"
                  className="mt-3 inline-flex w-full items-center justify-center gap-1.5 text-sm font-medium text-petroleo hover:underline"
                >
                  Usar el formulario de contacto
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Otros servicios */}
        <div className="mt-16 border-t border-bone-300/70 pt-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-display text-xl font-semibold text-ink">
              Otros servicios
            </h2>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-petroleo hover:underline"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Ver todos
            </Link>
          </div>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {others.map((s) => {
              const OtherIcon = s.icon;
              return (
                <li key={s.slug}>
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="group flex h-full items-start gap-3 rounded-lg border border-bone-300 bg-bone-50 p-4 transition-colors hover:border-petroleo/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petroleo"
                  >
                    <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-md bg-petroleo/10 text-petroleo">
                      <OtherIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-display text-sm font-semibold text-ink group-hover:text-petroleo">
                      {s.shortTitle}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>

      <CTASection quoteMessage={quoteMessage} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
