import { ImageResponse } from "next/og";

export const alt =
  "Manto — Automatización y desarrollo web para empresas y negocios";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <svg width="64" height="64" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="8" fill="#0E4D49" />
            <path
              d="M11 30 V14 L20 23 L29 14 V30"
              stroke="#F6F4EE"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M6.5 21 H14.5" stroke="#C75B39" strokeWidth="3.2" strokeLinecap="round" />
            <path d="M25.5 21 H33.5" stroke="#C75B39" strokeWidth="3.2" strokeLinecap="round" />
            <circle cx="11" cy="14" r="2.4" fill="#C75B39" />
            <circle cx="29" cy="14" r="2.4" fill="#C75B39" />
          </svg>
          <div style={{ fontSize: 40, fontWeight: 600, color: "#161412" }}>
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
