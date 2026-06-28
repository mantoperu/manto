import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// Genera la imagen una sola vez en el build (compatible con output: export).
export const dynamic = "force-static";

export const alt =
  "Manto — Automatización y desarrollo web para empresas y negocios";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Logo embebido en base64 (se lee en tiempo de build).
const logoSrc = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public", "manto-logo.png"),
).toString("base64")}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F6F4EE",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Isotipo + marca */}
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} height={84} width={118} alt="" />
          <div style={{ fontSize: 44, fontWeight: 600, color: "#161412" }}>
            Manto
          </div>
        </div>

        {/* Mensaje */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 60,
              fontWeight: 700,
              color: "#161412",
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            Automatización y desarrollo web para empresas y negocios
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#57514A" }}>
            Agencia peruana · WhatsApp con IA · CRM · Dashboards
          </div>
        </div>

        {/* Barra de acento */}
        <div style={{ display: "flex", gap: "8px" }}>
          <div style={{ width: 120, height: 8, backgroundColor: "#0E4D49" }} />
          <div style={{ width: 40, height: 8, backgroundColor: "#C75B39" }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
