import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Vorschaubild für Link-Teiler (WhatsApp, LinkedIn, Google-Unternehmensprofil).
 * Wird beim Build einmal als /opengraph-image.png gerendert und von Next
 * automatisch als og:image eingetragen. Gestaltung wie die Seite selbst:
 * Weiß, die Wortmarke aus Logo.tsx, eine Zeile Tannengrün, sonst nichts.
 * (Das Bild-Logo mit Haus und Blatt wird auf der Website nirgends benutzt,
 * deshalb auch hier nicht.)
 *
 * Schriften liegen als TTF in _fonts/, weil der Renderer (Satori) kein
 * woff2 versteht und der Build nicht vom Netz abhängen soll.
 */

export const alt = "IBT Ingenieurbüro Tonn: Energieberatung und Ingenieurleistungen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const wurzel = process.cwd();
  const [inter700, inter500] = await Promise.all([
    readFile(join(wurzel, "src/app/_fonts/Inter-700.ttf")),
    readFile(join(wurzel, "src/app/_fonts/Inter-500.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "64px 72px",
          fontFamily: "Inter",
          color: "#0f1d15",
        }}
      >
        {/* Wortmarke wie im Header: grüner Strich über IBT, Hairline, Name */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", width: "100%", height: 4, background: "#0b6b3a", borderRadius: 2, marginBottom: 6 }} />
            <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: 2, lineHeight: 1 }}>IBT</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderLeft: "2px solid #cbdad0",
              paddingLeft: 20,
              fontSize: 18,
              fontWeight: 500,
              letterSpacing: 3.5,
              lineHeight: 1.35,
              textTransform: "uppercase",
            }}
          >
            <span style={{ color: "#43554a" }}>Ingenieurbüro</span>
            <span style={{ color: "#8b9c91" }}>Tonn</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              width: 64,
              height: 4,
              background: "#0b6b3a",
              marginBottom: 28,
            }}
          />
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -1.5,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Energieberatung und</span>
            <span>Ingenieurleistungen</span>
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 500,
              color: "#43554a",
              marginTop: 24,
            }}
          >
            Förderung, iSFP und technische Berechnungen aus einer Hand.
          </div>
        </div>

        {/* Fußzeile */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            fontWeight: 500,
            color: "#5f7166",
          }}
        >
          <span>Jonas Tonn, B. Eng. · Köln · Aachen · Düren</span>
          <span style={{ color: "#0b6b3a", fontWeight: 700 }}>ib-tonn.de</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: inter700, weight: 700, style: "normal" },
        { name: "Inter", data: inter500, weight: 500, style: "normal" },
      ],
    }
  );
}
