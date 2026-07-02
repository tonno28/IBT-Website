import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Energieberater Aachen — IBT Ingenieurbüro Tonn",
  description:
    "Energieberater in Aachen: iSFP, BAFA/KfW-Förderung, Heizlastberechnung, Energieausweis. Jonas Tonn, §88 GEG, dena-gelistet. Für Bestandsgebäude in Aachen und der Städteregion.",
};

export default function AachenPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-30" />
        <div className="container-max relative max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-teal-mid" />
            <p className="section-label mb-0">Region Aachen</p>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-primary leading-tight mb-6">
            Energieberater in Aachen —<br />
            <span className="text-gradient-teal">IBT Ingenieurbüro Tonn</span>
          </h1>
          <p className="text-xl text-zinc-muted leading-relaxed mb-8">
            Energieberatung und Ingenieurleistungen für Aachen, Würselen, Eschweiler
            und die Städteregion Aachen. Qualifiziert, unabhängig, persönlich.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/kontakt" className="btn-primary">Anfrage Aachen</Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-card border-y border-zinc-border">
        <div className="container-max max-w-3xl">
          <h2 className="text-2xl font-bold text-zinc-primary mb-6">
            Energieberatung in Aachen und Umgebung
          </h2>
          <div className="space-y-4 text-zinc-muted text-sm leading-relaxed">
            <p>
              Aachen und die Städteregion haben viele sanierungsbedürftige Einfamilienhäuser
              aus den 1960er bis 1980er Jahren, oft mit Ölheizung, ohne Außendämmung und mit
              einfach verglasten Fenstern. Genau hier setzt die Bundesförderung BEG an.
            </p>
            <p>
              Als dena-gelisteter Energieeffizienz-Experte und BEG-akkreditierter Energieberater
              begleite ich Aachener Eigentümer von der ersten Beratung bis zur Förderauszahlung,
              vollständig, persönlich und ohne Provisionen.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {[
              { area: "Aachen-Brand" },
              { area: "Würselen" },
              { area: "Eschweiler" },
              { area: "Städteregion Aachen" },
            ].map((a) => (
              <div key={a.area} className="card-base p-3 text-center text-xs text-zinc-secondary">{a.area}</div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Energieberater in Aachen"
        description="Kostenloses Erstgespräch für Eigentümer und Handwerksbetriebe in Aachen und der Städteregion."
        primaryLabel="Anfrage für Aachen"
      />
    </>
  );
}
