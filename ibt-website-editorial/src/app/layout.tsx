import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import JsonLd from "@/components/JsonLd";
import { unternehmenSchema } from "@/lib/schema";
import { CONSENT_DEFAULT_SNIPPET, TRACKING_AKTIV } from "@/lib/consent";

/**
 * Eine Schrift für alles, so steht es auch im Markenleitfaden ("Inter 700,
 * geometrisch, technisch, kompakt"). Überschriften unterscheiden sich über
 * Größe und Gewicht, nicht über eine zweite Schriftfamilie. Das spart eine
 * Schriftdatei und hält die Seite ruhig.
 *
 * --font-display zeigt bewusst auf dieselbe Familie, damit bestehende
 * font-display-Klassen weiter funktionieren.
 */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ib-tonn.de"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  title: {
    default: "IBT Ingenieurbüro Tonn: Energieberatung und Ingenieurleistungen",
    template: "%s | IBT Ingenieurbüro Tonn",
  },
  description:
    "Professionelle Energieberatung (BAFA/KfW, iSFP, dena) und technische Ingenieurleistungen (Heizlast, Taupunkt, U-Wert) aus einer Hand. Jonas Tonn, B. Eng., für die Region Köln, Aachen und Düren.",
  keywords: [
    "Energieberatung",
    "Energieberater",
    "Köln",
    "Aachen",
    "Düren",
    "iSFP",
    "Sanierungsfahrplan",
    "BAFA",
    "KfW",
    "BEG",
    "Förderberatung",
    "Heizlastberechnung",
    "Energieausweis",
    "Wärmepumpe",
    "Gebäudesanierung",
    "dena",
    "GEG",
  ],
  authors: [{ name: "Jonas Tonn", url: "https://ib-tonn.de" }],
  creator: "Jonas Tonn",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "IBT Ingenieurbüro Tonn",
    title: "IBT Ingenieurbüro Tonn: Energieberatung und Ingenieurleistungen",
    description:
      "Energieberatung und Ingenieurleistungen aus einer Hand. Heizungsförderung bis 80 %. Region Köln / Aachen / Düren.",
  },
  robots: {
    index: true,
    follow: true,
  },
  // "./" löst Next pro Seite auf deren eigenen Pfad auf: jede Seite bekommt
  // ihre eigene Canonical-URL, ohne dass sie einzeln gepflegt werden muss.
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        {/* Consent Mode auf "denied", bevor irgendein Google-Skript laufen kann */}
        {TRACKING_AKTIV && (
          <script dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULT_SNIPPET }} />
        )}
        <JsonLd data={unternehmenSchema} />
      </head>
      <body className="bg-bg-primary text-zinc-primary antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
