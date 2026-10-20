import { cpSync, existsSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";

// Publica la exportación entregada en manto-web (1).zip sin recompilar la versión anterior.
const source = new URL("../site-static/", import.meta.url);
const output = new URL("../out/", import.meta.url);
if (!existsSync(new URL("index.html", source))) {
  throw new Error("Falta site-static/index.html");
}
rmSync(output, { recursive: true, force: true });
cpSync(source, output, { recursive: true });
console.log(`Sitio estático listo en ${fileURLToPath(output)}`);
