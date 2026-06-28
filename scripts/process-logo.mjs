/**
 * Procesa el logo de Manto a partir de una imagen de origen (con fondo claro)
 * y genera las versiones que usa el sitio:
 *
 *   public/manto-logo.png        → logo en tinta (#161412), fondo transparente
 *   public/manto-logo-light.png  → logo en hueso  (#F6F4EE), para fondos oscuros
 *   src/app/icon.png             → favicon cuadrado con margen
 *
 * Técnica: se calcula un canal alfa a partir de la luminancia (logo oscuro
 * sobre fondo claro), se descarta el color original y se rellena con el color
 * de marca. Así el borde queda limpio y se puede recolorear para claro/oscuro.
 *
 * Uso:  node scripts/process-logo.mjs [ruta-de-origen]
 *       (por defecto busca public/logo.png o la primera imagen en public/)
 */
import sharp from "sharp";
import { readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");

// Colores de marca (deben coincidir con tailwind.config.ts).
const INK = { r: 0x16, g: 0x14, b: 0x12 };
const BONE = { r: 0xf6, g: 0xf4, b: 0xee };

// Umbrales de luminancia para el canal alfa.
const L_TRANSPARENT = 220; // >= esto: totalmente transparente (fondo)
const L_OPAQUE = 80; //   <= esto: totalmente opaco (trazo del logo)

function resolveSource() {
  const explicit = process.argv[2];
  if (explicit) return explicit;
  const candidate = join(publicDir, "logo.png");
  if (existsSync(candidate)) return candidate;
  // Buscar cualquier imagen en public/ que no sea una de nuestras salidas.
  const generated = new Set(["manto-logo.png", "manto-logo-light.png"]);
  const found = readdirSync(publicDir).find(
    (f) => /\.(png|jpe?g|webp)$/i.test(f) && !generated.has(f),
  );
  if (found) return join(publicDir, found);
  throw new Error(
    "No encontré la imagen de origen. Guarda el logo en public/logo.png",
  );
}

async function main() {
  const source = resolveSource();
  console.log("Origen:", source);

  // Aplanar sobre blanco y recortar el margen uniforme del fondo.
  const base = sharp(source)
    .flatten({ background: "#ffffff" })
    .trim({ threshold: 12 });

  const { data, info } = await base
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const px = width * height;

  // Canal alfa a partir de la luminancia.
  const alpha = new Uint8Array(px);
  for (let i = 0; i < px; i++) {
    const o = i * channels;
    const L = 0.299 * data[o] + 0.587 * data[o + 1] + 0.114 * data[o + 2];
    let a = ((L_TRANSPARENT - L) / (L_TRANSPARENT - L_OPAQUE)) * 255;
    a = a < 0 ? 0 : a > 255 ? 255 : a;
    alpha[i] = a;
  }

  const fill = (color) => {
    const out = Buffer.alloc(px * 4);
    for (let i = 0; i < px; i++) {
      const o = i * 4;
      out[o] = color.r;
      out[o + 1] = color.g;
      out[o + 2] = color.b;
      out[o + 3] = alpha[i];
    }
    return sharp(out, { raw: { width, height, channels: 4 } });
  };

  await fill(INK).png().toFile(join(publicDir, "manto-logo.png"));
  await fill(BONE).png().toFile(join(publicDir, "manto-logo-light.png"));
  console.log(`Logo: ${width}x${height} → manto-logo.png + manto-logo-light.png`);

  // Favicon: logo en tinta sobre fondo hueso sólido (siempre legible en
  // pestañas claras u oscuras), cuadrado y con margen.
  const size = 512;
  const pad = Math.round(size * 0.14);
  const mark = await fill(INK)
    .resize(size - pad * 2, size - pad * 2, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
  await sharp({
    create: { width: size, height: size, channels: 4, background: "#F6F4EE" },
  })
    .composite([{ input: mark, gravity: "center" }])
    .png()
    .toFile(join(root, "src", "app", "icon.png"));
  console.log("Favicon: src/app/icon.png (512x512, logo sobre hueso)");
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
