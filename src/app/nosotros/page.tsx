import type { Metadata } from "next";
import {
  Layers,
  Network,
  ShieldCheck,
  Compass,
  Handshake,
  Lightbulb,
  Target,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CTASection } from "@/components/CTASection";
import { LogoMark } from "@/components/Logo";
import { WeavePattern } from "@/components/Weave";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Manto combina desarrollo web y automatización para ayudar a empresas y negocios con tecnología práctica, clara y adaptada a sus necesidades reales.",
  alternates: { canonical: "/nosotros" },
  openGraph: {
    title: `Nosotros · ${site.name}`,
    description:
      "Quiénes somos, a quién ayudamos y por qué combinamos desarrollo web y automatización.",
    url: `${site.url}/nosotros`,
  },
};

const values = [
  {
    icon: Compass,
    title: "Claridad",
    description:
      "Explicamos lo que hacemos en palabras simples. Sin tecnicismos que confundan ni promesas que no podamos cumplir.",
  },
  {
    icon: Handshake,
    title: "Cercanía",
    description:
      "Trabajamos contigo, no por encima de ti. Escuchamos cómo funciona tu negocio antes de proponer nada.",
  },
  {
    icon: Target,
    title: "Utilidad",
    description:
      "Cada solución resuelve un problema real. Si algo no aporta, no lo agregamos solo por verse moderno.",
  },
  {
    icon: ShieldCheck,
    title: "Confianza",
    description:
      "Cuidamos tu información y tus procesos, y acompañamos lo que implementamos para que siga funcionando.",
  },
  {
    icon: Lightbulb,
    title: "Adaptación",
    description:
      "No usamos la misma plantilla para todos. Ajustamos la tecnología a tu realidad y a tu forma de trabajar.",
  },
];

const meanings = [
  {
    icon: ShieldCheck,
    title: "Un manto que protege",
    description:
      "Como un manto que cubre y sostiene, cuidamos el funcionamiento de tu negocio para que opere con tranquilidad.",
  },
  {
    icon: Layers,
    title: "Un tejido de raíz peruana",
    description:
      "Inspirados en los mantos peruanos —capas, tramas y patrones que se entrelazan— construimos soluciones tejidas pieza por pieza.",
  },
  {
    icon: Network,
    title: "Una capa de tecnología",
    description:
      "Una capa que envuelve, conecta y optimiza: integramos tus herramientas para que trabajen juntas y de forma más simple.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Tecnología práctica para que tu negocio funcione mejor"
        description="Manto es una agencia peruana que une desarrollo web y automatización al servicio de empresas y negocios de todo tamaño."
      />

      {/* QUÉ ES / A QUIÉN AYUDA */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7 space-y-5 text-lg leading-relaxed text-ink-muted">
            <p>
              Manto nace para acercar la tecnología a empresas y negocios de
              todo tipo: cafés, restaurantes, estudios profesionales, tiendas,
              comercios y compañías que necesitan ordenar su trabajo, atender
              mejor a sus clientes y tener una presencia digital seria, sin
              depender de un equipo técnico completo.
            </p>
            <p>
              Ayudamos a esos negocios a automatizar tareas repetitivas, mejorar
              su atención y organizar su información de forma práctica. No
              buscamos impresionar con palabras complicadas: buscamos que la
              tecnología te dé tiempo, orden y tranquilidad.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative flex h-full min-h-[280px] items-center justify-center overflow-hidden rounded-lg bg-petroleo p-10">
              <WeavePattern className="absolute inset-0 text-bone-50/[0.07]" />
              <LogoMark
                variant="light"
                className="relative h-44 w-auto sm:h-52"
                alt="Logo de Manto"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ENFOQUE: POR QUÉ COMBINAR */}
      <Section className="bg-bone-200/40">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Nuestro enfoque"
              title="Por qué unimos desarrollo web y automatización"
            />
          </div>
          <div className="lg:col-span-7 space-y-5 text-lg leading-relaxed text-ink-muted">
            <p>
              La mayoría de los problemas de un negocio no se resuelven con una
              sola herramienta. De poco sirve una web bonita si los mensajes se
              quedan sin responder, o automatizar la atención si la información
              sigue dispersa.
            </p>
            <p>
              Por eso combinamos dos campos que se complementan: el{" "}
              <strong className="font-semibold text-ink">desarrollo web</strong>{" "}
              para tu presencia y tus canales, y la{" "}
              <strong className="font-semibold text-ink">automatización</strong>{" "}
              para quitarte trabajo repetitivo y ordenar tu información. Juntos
              forman una sola capa que cubre tu negocio de extremo a extremo.
            </p>
            <p>
              Nuestra filosofía es simple: tecnología práctica, clara y adaptada
              a las necesidades reales del negocio. Empezamos por el problema, no
              por la herramienta.
            </p>
          </div>
        </div>
      </Section>

      {/* VALORES */}
      <Section>
        <SectionHeading
          eyebrow="En qué creemos"
          title="Los valores que guían nuestro trabajo"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-lg border border-bone-300 bg-bone-50 p-6"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-petroleo/10 text-petroleo">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* SIGNIFICADO DEL NOMBRE */}
      <Section className="bg-bone-200/40">
        <SectionHeading
          eyebrow="El nombre"
          title="Por qué nos llamamos Manto"
          description="El nombre reúne tres ideas que orientan todo lo que hacemos."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {meanings.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-lg border border-bone-300 bg-bone-50 p-6"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-arcilla/10 text-arcilla-600">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
