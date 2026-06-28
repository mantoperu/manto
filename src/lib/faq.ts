/**
 * Preguntas frecuentes. Contenido editable y centralizado.
 * Todo verídico: no promete plazos, precios ni resultados inventados.
 */
export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "¿Cuánto cuesta trabajar con Manto?",
    answer:
      "No publicamos precios fijos porque cada solución se cotiza según su alcance: no es lo mismo una web sencilla que una automatización conectada a varias herramientas. Nos cuentas qué necesitas y te respondemos con una propuesta clara, sin costos ocultos. La conversación inicial y la cotización no tienen costo ni compromiso.",
  },
  {
    question: "¿Cuánto tiempo toma un proyecto?",
    answer:
      "Depende del servicio y de qué tan definido esté lo que necesitas. Antes de empezar acordamos contigo un plazo realista y te lo dejamos por escrito, para que sepas qué esperar en cada etapa. No prometemos tiempos genéricos sin haber visto tu caso.",
  },
  {
    question: "¿Trabajan con negocios fuera de Lima o fuera de Perú?",
    answer:
      "Sí. Trabajamos de forma remota, así que tu ubicación no es un problema. Coordinamos todo por WhatsApp, correo o videollamada, según lo que te resulte más cómodo.",
  },
  {
    question: "¿Necesito tener conocimientos técnicos?",
    answer:
      "No. Esa es justamente la idea: que tú no tengas que volverte experto en tecnología. Explicamos cada paso en palabras simples, te acompañamos en la puesta en marcha y te dejamos todo funcionando y entendible.",
  },
  {
    question: "La automatización por WhatsApp, ¿reemplaza a mi personal?",
    answer:
      "No. Una automatización bien hecha se encarga de lo repetitivo —responder dudas comunes, ordenar pedidos y consultas, avisar casos urgentes— para que tu equipo dedique su tiempo a lo que de verdad necesita una persona. Siempre dejamos la opción de derivar a alguien del negocio cuando hace falta.",
  },
  {
    question: "¿Qué pasa después de entregar el proyecto?",
    answer:
      "Puedes contar con nuestro servicio técnico continuo: mantenimiento, actualizaciones, soporte y mejoras de lo que implementamos. La tecnología cambia y tu negocio también, así que la idea es que la solución siga siendo útil con el tiempo, no que quede abandonada.",
  },
  {
    question: "¿La web y las cuentas quedan a mi nombre?",
    answer:
      "Sí. Tu sitio, tus cuentas y tu información son tuyos. Trabajamos para que tengas el control de lo que es tuyo, sin quedar atado a nosotros para poder usarlo.",
  },
  {
    question: "¿Cómo empezamos?",
    answer:
      "Escríbenos por WhatsApp o desde la página de contacto contándonos cómo trabaja tu negocio hoy y qué te gustaría mejorar. Revisamos tu caso, te hacemos un par de preguntas y te proponemos por dónde conviene partir. Sin compromiso.",
  },
];
