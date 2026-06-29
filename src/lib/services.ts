import type { LucideIcon } from "lucide-react";
import {
  MessageCircle,
  Workflow,
  Users,
  BarChart3,
  LifeBuoy,
  MonitorSmartphone,
} from "lucide-react";

/** Ejemplo/visual mostrado en un servicio. */
export type WebExample = {
  /** Imagen del ejemplo en /public. */
  image: string;
  /** Texto alternativo accesible. */
  alt: string;
  /**
   * Dominio para la barra del navegador. Si se define, se muestra como un
   * sitio web (con barra de URL y desplazamiento automático); si no, se
   * muestra como una imagen enmarcada estática.
   */
  host?: string;
  /** URL real del sitio. Si se define, muestra un botón "Visitar web". */
  url?: string;
  /** Título del pie (opcional). */
  title?: string;
  /** Descripción del pie (opcional). */
  subtitle?: string;
};

export type Service = {
  /** Identificador de la URL: /servicios/[slug] */
  slug: string;
  /** Título completo del servicio. */
  title: string;
  /** Título corto para tarjetas y navegación. */
  shortTitle: string;
  /** Frase de una línea que resume el servicio. */
  tagline: string;
  /** Icono de interfaz (lucide-react). */
  icon: LucideIcon;
  /** Resumen para tarjetas y listados. */
  summary: string;
  /** Qué es. */
  whatIs: string;
  /** Qué problema resuelve. */
  problem: string;
  /** Qué puede incluir. */
  includes: string[];
  /** Para qué tipos de negocios resulta útil. */
  forBusinesses: string[];
  /** Cómo trabaja Manto (pasos). */
  howWeWork: { title: string; description: string }[];
  /** Nota opcional para fijar expectativas honestas. */
  note?: string;
  /** Ejemplos de trabajos reales (portafolio) para este servicio. */
  examples?: WebExample[];
};

export const services: Service[] = [
  {
    slug: "paginas-web",
    title: "Diseño y desarrollo de páginas web profesionales",
    shortTitle: "Páginas web profesionales",
    tagline:
      "Una presencia web clara, rápida y pensada para que tus clientes te encuentren y te escriban.",
    icon: MonitorSmartphone,
    summary:
      "Sitios corporativos, landing pages, cartas, catálogos y páginas de servicios que se ven bien en cualquier pantalla y conectan con WhatsApp y otras plataformas.",
    whatIs:
      "Diseñamos y desarrollamos el sitio web de tu negocio desde cero: la estructura, los textos, el diseño y la programación. Puede ser un sitio completo de varias páginas o una landing page enfocada en una campaña, un lanzamiento o un servicio puntual. El resultado es una página propia, que tú controlas, pensada para presentar lo que ofreces y facilitar que las personas te contacten.",
    problem:
      "Muchos negocios dependen solo de redes sociales o de un perfil incompleto, y pierden clientes que buscan información clara antes de decidir. Sin una web propia es difícil mostrar tu carta, tus servicios, tus horarios o tu ubicación de forma ordenada y confiable.",
    includes: [
      "Sitios corporativos, cartas digitales, catálogos y páginas de servicios.",
      "Landing pages para campañas, lanzamientos o promociones puntuales.",
      "Galerías de fotos, reseñas, ubicación en mapa y horarios de atención.",
      "Integración con WhatsApp, Rappi u otras plataformas que ya uses.",
      "Formularios de contacto y de solicitud de cotización.",
      "SEO local para aparecer en búsquedas de tu zona.",
      "Adaptación a celular, tablet y computadora.",
    ],
    forBusinesses: [
      "Cafés y restaurantes que quieren mostrar su carta y recibir pedidos.",
      "Estudios profesionales que necesitan transmitir seriedad.",
      "Tiendas que buscan un catálogo siempre disponible.",
      "Empresas que aún no tienen una web propia o quieren renovarla.",
    ],
    howWeWork: [
      {
        title: "Conversamos",
        description:
          "Entendemos tu negocio, a quién te diriges y qué necesitas comunicar.",
      },
      {
        title: "Proponemos estructura",
        description:
          "Definimos las páginas, los textos y el diseño antes de programar.",
      },
      {
        title: "Desarrollamos",
        description:
          "Construimos el sitio, lo conectamos con WhatsApp y lo probamos en todos los dispositivos.",
      },
      {
        title: "Publicamos y acompañamos",
        description:
          "Dejamos tu web en línea y te explicamos cómo mantenerla y mejorarla.",
      },
    ],
    examples: [
      {
        image: "/ejemplos/luciana-ortecho.webp",
        alt: "Sitio web de Luciana Ortecho, nutricionista",
        host: "luciana-ortecho.netlify.app",
        url: "https://luciana-ortecho.netlify.app",
        title: "Luciana Ortecho — Nutricionista",
        subtitle: "Sitio web profesional para una nutricionista.",
      },
    ],
  },
  {
    slug: "automatizacion-whatsapp",
    title: "Automatización de atención por WhatsApp con inteligencia artificial",
    shortTitle: "Atención por WhatsApp con IA",
    tagline:
      "Responde más rápido y organiza tus mensajes sin perder el trato humano.",
    icon: MessageCircle,
    summary:
      "Asistentes que responden preguntas frecuentes, clasifican mensajes y derivan a una persona cuando hace falta, configurados con la información y el tono de tu negocio.",
    whatIs:
      "Configuramos un asistente con inteligencia artificial sobre WhatsApp que atiende los primeros mensajes de tus clientes: responde dudas comunes, ordena los pedidos y reservas, y avisa cuando un caso necesita la atención de una persona.",
    problem:
      "Cuando los mensajes llegan a toda hora es difícil responder a tiempo. Las consultas repetidas consumen horas, algunos clientes se quedan sin respuesta y los pedidos importantes se mezclan con el resto. Eso se traduce en ventas perdidas y en una atención inconsistente.",
    includes: [
      "Respuestas automáticas a las preguntas más frecuentes.",
      "Clasificación de mensajes: pedidos, reservas, consultas, quejas y eventos.",
      "Alertas para los casos urgentes o de mayor valor.",
      "Organización de los mensajes para no perder ninguno.",
      "Configuración según la información, las reglas y la personalidad de tu negocio.",
      "Derivación a una persona del equipo cuando es necesario.",
    ],
    forBusinesses: [
      "Restaurantes y cafés con alto volumen de pedidos y reservas.",
      "Tiendas que reciben muchas consultas de stock y precios.",
      "Estudios y consultorios que agendan citas por WhatsApp.",
      "Negocios que atienden fuera del horario de oficina.",
    ],
    howWeWork: [
      {
        title: "Recopilamos tu información",
        description:
          "Reunimos preguntas frecuentes, reglas, horarios y la forma en que atiendes.",
      },
      {
        title: "Definimos el comportamiento",
        description:
          "Acordamos qué responde el asistente, qué clasifica y cuándo deriva a una persona.",
      },
      {
        title: "Configuramos y probamos",
        description:
          "Ajustamos el tono y validamos las respuestas con casos reales antes de activarlo.",
      },
      {
        title: "Ajustamos sobre la marcha",
        description:
          "Revisamos cómo funciona y lo afinamos según lo que pase en el día a día.",
      },
    ],
    note: "Una automatización bien hecha ahorra tiempo y ordena la atención, pero no reemplaza a tu equipo: el asistente atiende lo repetitivo y deriva a una persona cuando el caso lo necesita.",
    examples: [
      {
        image: "/ejemplos/chatbot-whatsapp.webp",
        alt: "Asistente de WhatsApp con IA atendiendo y clasificando los mensajes de un negocio",
        title: "Asistente de WhatsApp con IA",
        subtitle: "Atiende y ordena los mensajes; deriva a una persona cuando hace falta.",
      },
    ],
  },
  {
    slug: "automatizacion-procesos",
    title: "Automatización de procesos administrativos",
    shortTitle: "Automatización de procesos",
    tagline:
      "Menos trabajo manual y repetitivo, menos errores y más tiempo para lo importante.",
    icon: Workflow,
    summary:
      "Conectamos tus herramientas y automatizamos tareas como registrar información, procesar documentos y generar reportes y alertas.",
    whatIs:
      "Revisamos las tareas administrativas que tu equipo hace a mano una y otra vez, y las automatizamos. La información pasa de un lado a otro sin que alguien tenga que copiarla, y las herramientas que ya usas empiezan a trabajar conectadas.",
    problem:
      "Copiar datos entre planillas, reenviar correos, llenar los mismos formularios y armar reportes a mano toma tiempo y abre la puerta a errores. Ese trabajo repetitivo cansa al equipo y resta horas que podrían dedicarse a atender y vender.",
    includes: [
      "Registro y organización automática de la información.",
      "Procesamiento de formularios, correos y documentos.",
      "Generación de reportes, alertas y tareas.",
      "Conexión entre las herramientas que ya utiliza tu negocio.",
      "Reducción del trabajo manual y repetitivo.",
    ],
    forBusinesses: [
      "Negocios que manejan muchos pedidos, registros o comprobantes.",
      "Estudios profesionales con flujos de documentos y formularios.",
      "Equipos que pierden tiempo copiando datos entre herramientas.",
      "Empresas que quieren ordenar su operación antes de crecer.",
    ],
    howWeWork: [
      {
        title: "Mapeamos el proceso",
        description:
          "Identificamos las tareas repetitivas y dónde se pierde más tiempo.",
      },
      {
        title: "Diseñamos el flujo",
        description:
          "Definimos cómo debe moverse la información y qué herramientas conectar.",
      },
      {
        title: "Implementamos",
        description:
          "Construimos la automatización y la probamos con datos reales.",
      },
      {
        title: "Medimos y mejoramos",
        description:
          "Verificamos que ahorre tiempo de verdad y la ajustamos cuando hace falta.",
      },
    ],
    examples: [
      {
        image: "/ejemplos/automatizacion.webp",
        alt: "Procesos administrativos automatizados y herramientas conectadas",
        title: "Procesos automatizados",
        subtitle: "Tareas repetitivas conectadas y resueltas solas.",
      },
    ],
  },
  {
    slug: "crm",
    title: "Implementación de sistemas CRM sencillos",
    shortTitle: "CRM a la medida",
    tagline:
      "Ten a tus clientes, conversaciones y ventas en un solo lugar, sin complicaciones.",
    icon: Users,
    summary:
      "Un sistema simple para registrar clientes y prospectos, hacer seguimiento de conversaciones y ventas, y no dejar pasar oportunidades.",
    whatIs:
      "Implementamos un CRM (sistema para gestionar tus relaciones con clientes) hecho a la medida de tu negocio. Es el lugar donde quedan registrados tus clientes, lo que conversaste con ellos y en qué punto está cada venta o reserva.",
    problem:
      "Cuando la información de los clientes está repartida entre el celular, cuadernos y la memoria de cada persona, es fácil olvidar un seguimiento, perder una oportunidad o dar una atención desordenada. Crecer así se vuelve difícil.",
    includes: [
      "Registro de clientes y prospectos.",
      "Seguimiento de conversaciones, ventas y reservas.",
      "Historial de interacciones con cada cliente.",
      "Organización de tareas y recordatorios.",
      "Seguimiento de oportunidades comerciales.",
      "Una solución adaptada a tu negocio, sin complejidad innecesaria.",
    ],
    forBusinesses: [
      "Negocios que hacen seguimiento a cotizaciones y prospectos.",
      "Estudios y consultorios que gestionan clientes recurrentes.",
      "Tiendas y servicios que quieren fidelizar y reactivar clientes.",
      "Equipos que necesitan orden sin un sistema complicado.",
    ],
    howWeWork: [
      {
        title: "Entendemos tu venta",
        description:
          "Vemos cómo llegan tus clientes y qué pasos sigue cada oportunidad.",
      },
      {
        title: "Definimos lo esencial",
        description:
          "Elegimos solo los campos y etapas que tu negocio realmente necesita.",
      },
      {
        title: "Configuramos el sistema",
        description:
          "Dejamos el CRM listo, ordenado y fácil de usar para tu equipo.",
      },
      {
        title: "Capacitamos al equipo",
        description:
          "Te enseñamos a usarlo para que se vuelva parte del día a día.",
      },
    ],
    examples: [
      {
        image: "/ejemplos/crm.webp",
        alt: "CRM que reúne clientes, conversaciones y ventas en un solo lugar",
        title: "CRM a la medida",
        subtitle: "Clientes, conversaciones y ventas en un solo lugar.",
      },
    ],
  },
  {
    slug: "dashboards",
    title: "Creación de dashboards para negocios",
    shortTitle: "Dashboards para negocios",
    tagline:
      "Ve cómo va tu negocio de un vistazo, con información clara y actualizada.",
    icon: BarChart3,
    summary:
      "Paneles visuales que reúnen tus ventas, clientes y rendimiento para que tomes decisiones con información, no por intuición.",
    whatIs:
      "Creamos un panel visual (dashboard) que reúne en una sola pantalla los números más importantes de tu negocio. En lugar de revisar varias planillas, ves de forma clara cómo van tus ventas, tus clientes y tu rendimiento.",
    problem:
      "La información suele estar dispersa y desactualizada, así que las decisiones terminan tomándose a ciegas o por intuición. Sin una vista clara es difícil saber qué producto vende mejor, qué periodo fue más fuerte o dónde conviene poner atención.",
    includes: [
      "Visualización de ventas, clientes y rendimiento.",
      "Indicadores y reportes actualizados.",
      "Seguimiento de productos, servicios y periodos.",
      "Información centralizada en un solo lugar.",
      "Vistas claras que facilitan la toma de decisiones.",
    ],
    forBusinesses: [
      "Negocios que quieren entender qué se vende más y cuándo.",
      "Dueños que hoy revisan varias planillas para tener un panorama.",
      "Restaurantes y tiendas que siguen ventas por periodo y producto.",
      "Empresas que quieren decidir con datos y no solo por intuición.",
    ],
    howWeWork: [
      {
        title: "Definimos qué medir",
        description:
          "Acordamos los indicadores que de verdad te ayudan a decidir.",
      },
      {
        title: "Conectamos tus datos",
        description:
          "Reunimos la información desde las herramientas que ya usas.",
      },
      {
        title: "Diseñamos el panel",
        description:
          "Creamos vistas claras y fáciles de leer, sin sobrecargar de números.",
      },
      {
        title: "Lo mantenemos útil",
        description:
          "Ajustamos el dashboard a medida que cambian tus necesidades.",
      },
    ],
    examples: [
      {
        image: "/ejemplos/dashboard.webp",
        alt: "Dashboard con ventas, clientes e indicadores del negocio",
        title: "Dashboards para negocios",
        subtitle: "Ventas, clientes y rendimiento a la vista.",
      },
    ],
  },
  {
    slug: "servicio-tecnico",
    title: "Servicio técnico continuo",
    shortTitle: "Servicio técnico continuo",
    tagline:
      "Acompañamiento para que todo lo que implementamos siga funcionando bien.",
    icon: LifeBuoy,
    summary:
      "Mantenimiento, soporte, actualizaciones y mejoras para que tus soluciones sigan funcionando con el tiempo.",
    whatIs:
        "Es el acompañamiento posterior a la entrega. Nos encargamos de que tu web, tus automatizaciones y tus sistemas se mantengan funcionando, se actualicen cuando corresponde y mejoren con el tiempo.",
    problem:
      "La tecnología no se instala una vez y se olvida: necesita mantenimiento, actualizaciones y ajustes. Sin alguien que la cuide, una web puede quedar desactualizada o una automatización dejar de funcionar justo cuando más la necesitas.",
    includes: [
      "Servidor y alojamiento, cuando corresponda.",
      "Mantenimiento preventivo y correctivo.",
      "Actualizaciones de las soluciones implementadas.",
      "Soporte técnico ante dudas o incidencias.",
      "Mejoras y ajustes a medida que tu negocio cambia.",
    ],
    forBusinesses: [
      "Negocios que ya tienen una web o automatización con Manto.",
      "Equipos sin personal técnico propio que necesitan respaldo.",
      "Negocios que dependen de sus sistemas para operar a diario.",
      "Empresas que quieren tranquilidad y continuidad en el tiempo.",
    ],
    howWeWork: [
      {
        title: "Acordamos el alcance",
        description:
          "Definimos qué soluciones cubrimos y con qué nivel de soporte.",
      },
      {
        title: "Monitoreamos",
        description:
          "Estamos atentos a que todo funcione y prevenimos problemas.",
      },
      {
        title: "Respondemos",
        description:
          "Atendemos dudas e incidencias dentro de los tiempos acordados.",
      },
      {
        title: "Mejoramos",
        description:
          "Proponemos y aplicamos ajustes para que la solución siga siendo útil.",
      },
    ],
    examples: [
      {
        image: "/ejemplos/servicio-tecnico.webp",
        alt: "Monitoreo, soporte y mantenimiento continuo de los sistemas del negocio",
        title: "Servicio técnico continuo",
        subtitle: "Mantenimiento, soporte y mejoras en el tiempo.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
