import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Automatización y desarrollo web para empresas y negocios`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "automatización para negocios",
    "desarrollo web en Perú",
    "chatbots para WhatsApp",
    "CRM para empresas",
    "dashboards empresariales",
    "agencia de automatización Perú",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Automatización y desarrollo web para empresas y negocios`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Automatización y desarrollo web`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.description,
    url: site.url,
    areaServed: { "@type": "Country", name: site.country },
    knowsLanguage: ["es"],
    serviceType: [
      "Desarrollo de páginas web",
      "Automatización de atención por WhatsApp con IA",
      "Automatización de procesos administrativos",
      "Implementación de CRM",
      "Creación de dashboards",
      "Servicio técnico",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "ventas",
      telephone: `+${site.whatsapp.intl}`,
      availableLanguage: ["es"],
    },
  };

  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
