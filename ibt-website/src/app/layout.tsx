import type { Metadata } from "next";
import { Instrument_Sans, DM_Mono } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IBT Ingenieurbüro Tonn — Energieberatung & Ingenieurleistungen",
    template: "%s | IBT Ingenieurbüro Tonn",
  },
  description:
    "Professionelle Energieberatung (BAFA/KfW, iSFP, dena) und technische Ingenieurleistungen (Heizlast, Taupunkt, U-Wert) aus einer Hand. Jonas Tonn, Dipl.-Ing. — Region Köln, Bonn, Rheinbach.",
  keywords: [
    "Energieberatung",
    "Energieberater",
    "Köln",
    "Bonn",
    "Rheinbach",
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
  authors: [{ name: "Jonas Tonn", url: "https://ibt-tonn.de" }],
  creator: "Jonas Tonn",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "IBT Ingenieurbüro Tonn",
    title: "IBT Ingenieurbüro Tonn — Energieberatung & Ingenieurleistungen",
    description:
      "Energieberatung und Ingenieurleistungen aus einer Hand. Förderung bis 70 %. Region Köln / Bonn / Rheinbach.",
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
    <html lang="de" className={`${instrumentSans.variable} ${dmMono.variable}`}>
      <body className="bg-bg-primary text-zinc-primary antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
