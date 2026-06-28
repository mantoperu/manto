/**
 * Genera el avatar de Instagram (cuadrado 1080x1080) a partir del logo de Manto.
 * Instagram recorta el avatar a un círculo, así que el monograma se centra
 * dentro del círculo inscrito con margen de seguridad.
 *
 *   public/manto-instagram-bone.png  → logo en tinta sobre círculo hueso
 *   public/manto-instagram-ink.png   → logo en hueso sobre círculo tinta
 */
import sharp from "sharp";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");

const INK = "#161412";
const BONE = "#F6F4EE";

const SIZE = 1080;            // lienzo cuadrado
const R = SIZE / 2;           // radio del círculo (toca los bordes)
const LOGO_W = Math.round(SIZE * 0.60); // ancho del logo dentro del círculo

// Círculo de fondo como SVG.
const circle = (color) =>
  Buffer.from(
    `<svg width="${SIZE}" height="${SIZE}"><circle cx="${R}" cy="${R}" r="${R}" fill="${color}"/></svg>`,
  );

async function build(name, bg, logoSrc) {
  const mark = await sharp(logoSrc)
    .resize(LOGO_W, null, { fit: "contain" })
    .toBuffer();

  await sharp(circle(bg))
    .composite([{ input: mark, gravity: "center" }])
    .png()
    .toFile(join(publicDir, name));
  console.log("→", name);
}

await build("manto-instagram-bone.png", BONE, join(publicDir, "manto-logo.png"));
await build("manto-instagram-ink.png", INK, join(publicDir, "manto-logo-light.png"));
console.log(`Listo: avatares ${SIZE}x${SIZE} en public/`);
