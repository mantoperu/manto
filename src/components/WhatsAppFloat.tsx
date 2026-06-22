import { MessageCircle } from "lucide-react";
import { whatsappUrl, defaultQuoteMessage } from "@/lib/site";

/**
 * Botón flotante de WhatsApp: discreto, fijo en la esquina y accesible.
 * Abre WhatsApp con un mensaje inicial de cotización.
 */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl(defaultQuoteMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-petroleo px-4 py-3 text-bone-50 shadow-lg shadow-petroleo/20 transition-colors hover:bg-petroleo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petroleo focus-visible:ring-offset-2 focus-visible:ring-offset-bone"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden text-sm font-medium sm:inline">WhatsApp</span>
    </a>
  );
}
