/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Exportación estática: genera una carpeta `out/` 100% estática,
  // ideal para subir por arrastrar-y-soltar (Netlify Drop, etc.).
  output: "export",
  // Sin optimización de imágenes en servidor (no aplica en estático).
  images: { unoptimized: true },
  // URLs con barra final → carpetas con index.html (mejor para hosting estático).
  trailingSlash: true,
};

export default nextConfig;
