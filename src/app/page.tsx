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
import { CTASection } from "@/components/CTASection";
import { Faq } from "@/components/Faq";
import { faqs } from "@/lib/faq";
import { HeroArt } from "@/components/HeroArt";
import { WeavePattern } from "@/components/Weave";
import { WeaveThread } from "@/components/WeaveThread";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* HERO */}
      <section className="relative overflow-hidden">
        <WeavePattern className="absolute inset-0 text-petroleo/[0.06]" />
        <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:py-28">
          <Stagger className="lg:col-span-7" playOnMount>
            <StaggerItem>
              <span className="inline-flex items-center gap-2 rounded-full border border-petroleo/20 bg-bone-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-petroleo">
                Agencia peruana de automatización y desarrollo web
              </span>
            </StaggerItem>
            <StaggerItem>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Manto automatiza tareas y desarrolla la web de tu negocio
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
                Ayudamos a empresas y negocios de todo tamaño —cafés,
                restaurantes, estudios, tiendas, comercios y compañías— a
                automatizar tareas, ordenar su información, atender mejor por
                WhatsApp y tener una presencia web profesional. Tecnología
                práctica, sin complicaciones.
              </p>
            </StaggerItem>
            <StaggerItem>
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
            </StaggerItem>
          </Stagger>
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

      {/* TIPOS DE NEGOCIOS */}
      <Section>
        <SectionHeading
          eyebrow="Con quién trabajamos"
          title="Pensado para negocios y empresas de todo tamaño"
          description="Si atiendes clientes, recibes pedidos o manejas información a diario, probablemente podemos ayudarte."
        />
        <Stagger
          as="ul"
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
        >
          {businessTypes.map(({ icon: Icon, label }) => (
            <StaggerItem
              key={label}
              as="li"
              className="group flex flex-col items-center gap-3 rounded-lg border border-bone-300 bg-bone-50 px-4 py-6 text-center transition-colors duration-300 hover:border-petroleo/40 hover:bg-bone-100"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-petroleo/10 text-petroleo transition-all duration-300 group-hover:scale-110 group-hover:bg-petroleo group-hover:text-bone-50">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-ink">{label}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* CÓMO TRABAJAMOS */}
      <Section className="bg-bone-200/40">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Un proceso simple y ordenado"
          description="Cuatro pasos para pasar de la idea a una solución funcionando, sin tecnicismos innecesarios."
        />
        <Stagger
          as="ol"
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map(({ icon: Icon, title, description }, i) => (
            <StaggerItem key={title} as="li" className="group relative">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-petroleo text-bone-50 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span
                  aria-hidden="true"
                  className="font-display text-3xl font-bold leading-none text-bone-400 transition-colors duration-300 group-hover:text-arcilla/40"
                >
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {description}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* BENEFICIOS */}
      <Section>
        <SectionHeading
          eyebrow="Beneficios"
          title="Qué cambia en tu día a día"
        />
        <Reveal className="mt-12 grid gap-px overflow-hidden rounded-lg border border-bone-300 bg-bone-300 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-bone-50 p-6 transition-colors duration-300 hover:bg-bone-100"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-arcilla/10 text-arcilla-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-arcilla group-hover:text-bone-50">
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
        </Reveal>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-soft">
          Cada solución se cotiza según su alcance: nos cuentas qué necesitas y
          te respondemos con una propuesta clara, sin costos ocultos.{" "}
          <Link href="/contacto" className="text-petroleo hover:underline">
            Escríbenos para conversar.
          </Link>
        </p>
      </Section>

      {/* Hilo de marca como transición */}
      <div className="py-4">
        <Container>
          <WeaveThread className="mx-auto max-w-xl" />
        </Container>
      </div>

      {/* PREGUNTAS FRECUENTES */}
      <Section className="bg-bone-200/40">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Preguntas frecuentes"
              title="Lo que sueles preguntarte antes de empezar"
            />
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              ¿Te queda otra duda? Escríbenos por WhatsApp y te respondemos sin
              compromiso.
            </p>
          </div>
          <div className="lg:col-span-8">
            <Faq />
          </div>
        </div>
      </Section>

      {/* CIERRE */}
      <CTASection />
    </>
  );
}
