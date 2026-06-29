/**
 * Configuración central del sitio.
 * Edita aquí los datos de contacto, navegación y textos repetidos.
 *
 * Para cambiar el número de WhatsApp, modifica `whatsapp.intl` (formato
 * internacional, sin "+", usado en los enlaces) y `whatsapp.display`
 * (cómo se muestra al usuario). Ver README para más detalle.
 */

export const site = {
  name: "Manto",
  legalName: "Manto",
  // Descripción corta reutilizable (meta description por defecto).
  description:
    "Manto es una agencia peruana de automatización y desarrollo web para empresas y negocios de cualquier tamaño. Páginas web profesionales, atención por WhatsApp con IA, automatización de procesos, CRM y dashboards.",
  // Dominio de producción.
  url: "https://mantoperu.com",
  locale: "es_PE",
  country: "Perú",

  // Datos de contacto (provisionales — reemplazar antes de publicar).
  contact: {
    email: "contacto@mantoperu.com",
    cityRegion: "Perú",
  },

  whatsapp: {
    // Cómo se muestra el número al usuario.
    display: "947 381 615",
    // Formato internacional para los enlaces wa.me (Perú = 51).
    intl: "51947381615",
  },

  social: {
    // Solo el usuario (sin @). La URL y el "@" se construyen en los componentes.
    instagram: "manto_peru",
    linkedin: "",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

/**
 * Construye un enlace a WhatsApp (wa.me) con un mensaje opcional.
 * El mensaje se codifica correctamente para la URL.
 */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${site.whatsapp.intl}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/** Mensaje por defecto para solicitar una cotización. */
export const defaultQuoteMessage =
  "Hola Manto 👋. Me gustaría solicitar una cotización para mi negocio.";

/** Mensaje por defecto para agendar una reunión. */
export const defaultMeetingMessage =
  "Hola Manto 👋. Me gustaría coordinar una reunión para conversar sobre mi negocio.";
