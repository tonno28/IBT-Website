import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { CONSENT_DEFAULT_SNIPPET, TRACKING_AKTIV } from "@/lib/consent";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

// Geometric display sans for headlines — modern, fresh, energetic
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IBT Ingenieurbüro Tonn — Energieberatung & Ingenieurleistungen",
    template: "%s | IBT Ingenieurbüro Tonn",
  },
  description:
    "Professionelle Energieberatung (BAFA/KfW, iSFP, dena) und technische Ingenieurleistungen (Heizlast, Taupunkt, U-Wert) aus einer Hand. Jonas Tonn, B. Eng. — Region Köln, Aachen, Düren.",
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
    title: "IBT Ingenieurbüro Tonn — Energieberatung & Ingenieurleistungen",
    description:
      "Energieberatung und Ingenieurleistungen aus einer Hand. Förderung bis 80 %. Region Köln / Aachen / Düren.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        {/* Consent Mode auf "denied", bevor irgendein Google-Skript laufen kann */}
        {TRACKING_AKTIV && (
          <script dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULT_SNIPPET }} />
        )}
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
