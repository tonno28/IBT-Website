import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Energieberater Bonn — IBT Ingenieurbüro Tonn",
  description:
    "Energieberater in Bonn: iSFP, BAFA/KfW-Förderung, Heizlastberechnung, Energieausweis. Jonas Tonn, §88 GEG, dena-gelistet. Für Bestandsgebäude in Bonn und dem Rhein-Sieg-Kreis.",
};

export default function BonnPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-30" />
        <div className="container-max relative max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-teal-mid" />
            <p className="section-label mb-0">Region Bonn</p>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-primary leading-tight mb-6">
            Energieberater in Bonn —<br />
            <span className="text-gradient-teal">IBT Ingenieurbüro Tonn</span>
          </h1>
          <p className="text-xl text-zinc-muted leading-relaxed mb-8">
            Energieberatung und Ingenieurleistungen für Bonn, Bad Godesberg, Beuel
            und den Rhein-Sieg-Kreis. Qualifiziert, unabhängig, persönlich.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/kontakt" className="btn-primary">Anfrage Bonn</Link>
            <Link href="/foerderrechner" className="btn-secondary">Förderrechner</Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-card border-y border-zinc-border">
        <div className="container-max max-w-3xl">
          <h2 className="text-2xl font-bold text-zinc-primary mb-6">
            Energieberatung in Bonn und Umgebung
          </h2>
          <div className="space-y-4 text-zinc-muted text-sm leading-relaxed">
            <p>
              Bonn und der Rhein-Sieg-Kreis haben viele sanierungsbedürftige Einfamilienhäuser
              aus den 1960er bis 1980er Jahren — oft mit Ölheizung, ohne Außendämmung und mit
              einfach verglasten Fenstern. Genau hier setzt die Bundesförderung BEG an.
            </p>
            <p>
              Als dena-gelisteter Energieeffizienz-Experte und BEG-akkreditierter Energieberater
              begleite ich Bonner Eigentümer von der ersten Beratung bis zur Förderauszahlung —
              vollständig, persönlich und ohne Provisionen.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {[
              { area: "Bonn-Beuel" },
              { area: "Bad Godesberg" },
              { area: "Bonn-Hardtberg" },
              { area: "Rhein-Sieg-Kreis" },
            ].map((a) => (
              <div key={a.area} className="card-base p-3 text-center text-xs text-zinc-secondary">{a.area}</div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Energieberater in Bonn"
        description="Kostenloses Erstgespräch für Eigentümer und Handwerksbetriebe in Bonn und dem Rhein-Sieg-Kreis."
        primaryLabel="Anfrage für Bonn"
      />
    </>
  );
}
