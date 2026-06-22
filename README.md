# Manto — Sitio web

Sitio web público y multipágina de **Manto**, agencia peruana de automatización
y desarrollo web para empresas y negocios.

Construido con **Next.js (App Router)**, **TypeScript** y **Tailwind CSS**.
Renderizado estático, sin base de datos ni panel administrativo. Listo para
desplegarse en **Vercel** o **Netlify**.

---

## Requisitos

- **Node.js 18.18 o superior** (recomendado Node 20+).
- npm (incluido con Node).

## Instalación

```bash
npm install
```

## Ejecución en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Comandos disponibles

| Comando             | Descripción                                         |
| ------------------- | --------------------------------------------------- |
| `npm run dev`       | Servidor de desarrollo con recarga en caliente.     |
| `npm run build`     | Compila el sitio para producción.                   |
| `npm run start`     | Sirve la versión compilada (tras `build`).          |
| `npm run lint`      | Ejecuta ESLint.                                      |
| `npm run typecheck` | Comprueba los tipos con TypeScript (`tsc --noEmit`). |

---

## Estructura del proyecto

```
Manto/
├─ src/
│  ├─ app/                      # Rutas (App Router)
│  │  ├─ layout.tsx             # Layout raíz: fuentes, metadata, header/footer
│  │  ├─ page.tsx               # Inicio (/)
│  │  ├─ servicios/
│  │  │  ├─ page.tsx            # Lista de servicios (/servicios)
│  │  │  └─ [slug]/page.tsx     # Página individual por servicio
│  │  ├─ nosotros/page.tsx      # /nosotros
│  │  ├─ contacto/page.tsx      # /contacto
│  │  ├─ globals.css            # Estilos base + utilidades
│  │  ├─ icon.svg               # Favicon (isotipo)
│  │  ├─ opengraph-image.tsx    # Imagen Open Graph (generada en build)
│  │  ├─ sitemap.ts             # sitemap.xml
│  │  ├─ robots.ts              # robots.txt
│  │  └─ not-found.tsx          # Página 404
│  ├─ components/               # Componentes reutilizables (UI, layout, marca)
│  └─ lib/
│     ├─ site.ts                # ⚙️ Configuración: contacto, navegación, WhatsApp
│     ├─ services.ts            # 📝 Contenido de los seis servicios
│     └─ cn.ts                  # Utilidad para clases CSS
├─ tailwind.config.ts           # Paleta, tipografías y tokens de diseño
└─ next.config.mjs
```

---

## Editar el contenido

El contenido vive centralizado para que sea fácil de mantener:

- **Textos de los servicios** → [`src/lib/services.ts`](src/lib/services.ts).
  Cada servicio define: qué es, qué problema resuelve, qué incluye, para qué
  negocios sirve y cómo trabaja Manto. Al agregar un servicio al arreglo, su
  página individual, las tarjetas, el menú del footer, el formulario y el
  `sitemap.xml` se actualizan solos.
- **Datos de contacto, navegación y dominio** → [`src/lib/site.ts`](src/lib/site.ts).
- **Paleta y tipografías** → [`tailwind.config.ts`](tailwind.config.ts).

### Cambiar el número de WhatsApp

Edita **un solo archivo**: [`src/lib/site.ts`](src/lib/site.ts), dentro del
objeto `site.whatsapp`:

```ts
whatsapp: {
  // Cómo se muestra al usuario en pantalla:
  display: "999 999 999",
  // Formato internacional para los enlaces wa.me (Perú = 51), sin "+" ni espacios:
  intl: "51999999999",
},
```

- `display` es solo el texto visible.
- `intl` es el número usado en todos los enlaces `https://wa.me/...` (botón
  flotante, botones de cotización y el formulario de contacto).

Todos los enlaces de WhatsApp se generan con la función `whatsappUrl()`, así que
no hay números repetidos por el código.

---

## Cómo funciona el formulario de contacto

El formulario (`/contacto`) **no envía datos a ningún servidor**. Al validar y
enviar, construye un mensaje ordenado con los datos ingresados y abre WhatsApp
(`wa.me`) con ese mensaje listo para enviar. Esto se indica claramente al
usuario antes de enviar. No hay backend, base de datos ni confirmaciones
simuladas.

---

## Identidad visual

- **Paleta:** fondo hueso (`bone`), tinta cálida casi negra (`ink`), petróleo
  (teal profundo, color principal) y arcilla (terracota desaturada, acento).
- **Tipografías:** Space Grotesk (títulos) e Inter (texto), vía `next/font`.
- **Logo e isotipo:** SVG originales (`src/components/Logo.tsx`). El isotipo es
  una “M” tejida con nodos de conexión; se reutiliza como favicon.
- **Patrón gráfico:** trama entrelazada reutilizable (`src/components/Weave.tsx`).

La referencia peruana es sutil (tejido, capas, tramas y nodos), sin símbolos
turísticos ni folclóricos.

---

## SEO incluido

- Metadata por página (título, descripción, canonical, Open Graph).
- `sitemap.xml` y `robots.txt` generados automáticamente.
- Datos estructurados JSON-LD (`ProfessionalService` y `Service`).
- Favicon e imagen Open Graph propios.

> **Importante:** el dominio de producción es provisional. Antes de publicar,
> actualiza `site.url` en [`src/lib/site.ts`](src/lib/site.ts) para que los
> enlaces canónicos, el sitemap y las metaetiquetas Open Graph apunten al
> dominio real.

---

## Despliegue

### Vercel

1. Sube el proyecto a un repositorio (GitHub/GitLab/Bitbucket).
2. Importa el repo en [vercel.com](https://vercel.com). Next.js se detecta solo.
3. No se requieren variables de entorno.

### Netlify

1. Sube el proyecto a un repositorio.
2. En Netlify, crea un sitio desde el repo. El plugin oficial de Next.js se
   instala automáticamente.
3. Build command: `npm run build`. No se requieren variables de entorno.

---

## Información real por sustituir antes de publicar

- **Número de WhatsApp:** hoy es provisional (`999 999 999` / `51999999999`).
- **Dominio:** `https://www.manto.pe` es provisional (`site.url`).
- **Correo de contacto:** `hola@manto.pe` es provisional (`site.contact`).
- **Redes sociales:** vacías en `site.social` hasta tener perfiles reales.

No se han incluido datos inventados (años de experiencia, clientes, proyectos,
testimonios, estadísticas, premios ni nombres de fundadores).
