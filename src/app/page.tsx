import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Coffee,
  UtensilsCrossed,
  Briefcase,
  Store,
  Building2,
  Stethoscope,
  Search,
  PencilRuler,
  Rocket,
  Clock,
  ShieldCheck,
  Sparkles,
  HandHeart,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { HeroArt } from "@/components/HeroArt";
import { WeavePattern } from "@/components/Weave";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/services";
import { whatsappUrl, defaultQuoteMessage } from "@/lib/site";

const businessTypes = [
  { icon: Coffee, label: "Cafés" },
  { icon: UtensilsCrossed, label: "Restaurantes" },
  { icon: Briefcase, label: "Estudios profesionales" },
  { icon: Store, label: "Tiendas" },
  { icon: Stethoscope, label: "Consultorios" },
  { icon: Building2, label: "Empresas" },
];

const steps = [
  {
    icon: Search,
    title: "Entendemos tu negocio",
    description:
      "Conversamos para conocer cómo trabajas hoy, qué te quita tiempo y qué quieres lograr.",
  },
  {
    icon: PencilRuler,
    title: "Diseñamos la solución",
    description:
      "Proponemos algo a tu medida, sin funciones de más, y te explicamos cómo va a funcionar.",
  },
  {
    icon: Rocket,
    title: "Implementamos y probamos",
    description:
      "Construimos, conectamos tus herramientas y validamos con casos reales antes de activar.",
  },
  {
    icon: HandHeart,
    title: "Acompañamos en el tiempo",
    description:
      "Te capacitamos y damos soporte para que la solución siga siendo útil a medida que creces.",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Recuperas tiempo",
    description:
      "Las tareas repetitivas dejan de consumir tus horas y las de tu equipo.",
  },
  {
    icon: MessageCircle,
    title: "Atiendes mejor",
    description:
      "Respondes más rápido y de forma ordenada, sin perder mensajes ni oportunidades.",
  },
  {
    icon: Sparkles,
    title: "Decides con claridad",
    description:
      "Tu información queda organizada y a la vista para decidir con datos, no por intuición.",
  },
  {
    icon: ShieldCheck,
    title: "Transmites confianza",
    description:
      "Una presencia profesional y procesos ordenados hacen que tu negocio se vea sólido.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <WeavePattern className="absolute inset-0 text-petroleo/[0.06]" />
        <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:py-28">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-petroleo/20 bg-bone-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-petroleo">
              Agencia peruana de automatización y desarrollo web
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Manto automatiza tareas y desarrolla la web de tu negocio
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
              Ayudamos a empresas y negocios de todo tamaño —cafés,
              restaurantes, estudios, tiendas, comercios y compañías— a
              automatizar tareas, ordenar su información, atender mejor por
              WhatsApp y tener una presencia web profesional. Tecnología
              práctica, sin complicaciones.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={whatsappUrl(defaultQuoteMessage)} size="lg">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Solicitar cotización
              </ButtonLink>
              <ButtonLink href="/servicios" size="lg" variant="secondary">
                Ver servicios
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-5">
            <HeroArt className="mx-auto w-full max-w-sm lg:max-w-none" />
          </div>
        </Container>
      </section>

      {/* QUÉ ES MANTO / PROPUESTA DE VALOR */}
      <Section className="border-t border-bone-300/70">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Qué es Manto"
              title="Una capa de tecnología que cubre y ordena tu negocio"
            />
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-ink-muted">
              Manto reúne en un solo lugar el desarrollo web y la
              automatización para resolver problemas concretos de empresas y
              negocios de cualquier tamaño. No vendemos tecnología por moda:
              elegimos
              herramientas útiles, las adaptamos a tu forma de trabajar y te
              acompañamos para que funcionen en el día a día.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              Trabajamos de forma clara y cercana, explicando cada paso en
              palabras simples. La idea es que la tecnología te dé tiempo y
              orden, no más complicaciones.
            </p>
          </div>
        </div>
      </Section>

      {/* SERVICIOS */}
      <Section className="bg-bone-200/40">
        <SectionHeading
          eyebrow="Servicios"
          title="Lo que hacemos por tu negocio"
          description="Seis servicios que puedes contratar por separado o combinar según lo que necesites."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 80}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href="/servicios" variant="secondary">
            Conocer todos los servicios
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </Section>

      {/* TIPOS DE NEGOCIOS */}
      <Section>
        <SectionHeading
          eyebrow="Con quién trabajamos"
          title="Pensado para negocios y empresas de todo tamaño"
          description="Si atiendes clientes, recibes pedidos o manejas información a diario, probablemente podemos ayudarte."
        />
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {businessTypes.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex flex-col items-center gap-3 rounded-lg border border-bone-300 bg-bone-50 px-4 py-6 text-center"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-petroleo/10 text-petroleo">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-ink">{label}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* CÓMO TRABAJAMOS */}
      <Section className="bg-bone-200/40">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Un proceso simple y ordenado"
          description="Cuatro pasos para pasar de la idea a una solución funcionando, sin tecnicismos innecesarios."
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, description }, i) => (
            <li key={title} className="relative">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-petroleo text-bone-50">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-display text-sm font-semibold text-arcilla-600">
                  Paso {i + 1}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* BENEFICIOS */}
      <Section>
        <SectionHeading
          eyebrow="Beneficios"
          title="Qué cambia en tu día a día"
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-bone-300 bg-bone-300 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-bone-50 p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-arcilla/10 text-arcilla-600">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-soft">
          Cada solución se cotiza según su alcance: nos cuentas qué necesitas y
          te respondemos con una propuesta clara, sin costos ocultos.{" "}
          <Link href="/contacto" className="text-petroleo hover:underline">
            Escríbenos para conversar.
          </Link>
        </p>
      </Section>

      {/* CIERRE */}
      <CTASection />
    </>
  );
}
