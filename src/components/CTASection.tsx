import { MessageCircle, CalendarClock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { WeavePattern } from "@/components/Weave";
import {
  whatsappUrl,
  defaultQuoteMessage,
  defaultMeetingMessage,
} from "@/lib/site";

/**
 * Bloque de cierre con llamado a la acción por WhatsApp.
 * Reutilizable al final de las páginas.
 */
export function CTASection({
  title = "¿Conversamos sobre tu negocio?",
  description = "Cuéntanos qué necesitas y te respondemos con una propuesta clara. Al escribirnos se abrirá WhatsApp para enviar tu mensaje.",
  quoteMessage = defaultQuoteMessage,
}: {
  title?: string;
  description?: string;
  quoteMessage?: string;
}) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-lg bg-petroleo px-6 py-12 sm:px-12 sm:py-16">
          <WeavePattern className="absolute inset-0 text-bone-50/10" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-bone-50 sm:text-3xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-bone-100/90 sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={whatsappUrl(quoteMessage)}
                size="lg"
                className="bg-bone-50 text-petroleo hover:bg-bone-100"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Solicitar cotización
              </ButtonLink>
              <ButtonLink
                href={whatsappUrl(defaultMeetingMessage)}
                size="lg"
                className="border border-bone-50/40 bg-transparent text-bone-50 hover:bg-bone-50/10"
              >
                <CalendarClock className="h-5 w-5" aria-hidden="true" />
                Coordinar una reunión
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
