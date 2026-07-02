import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Energieberater Düren — IBT Ingenieurbüro Tonn",
  description:
    "Energieberater in Düren und Umgebung (Merzenich, Jülich, Niederzier): iSFP, BEG-Förderung, Heizlast, Energieausweis. Jonas Tonn, §88 GEG, dena-gelistet. Vor Ort verfügbar.",
};

export default function DuerenPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-30" />
        <div className="container-max relative max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-teal-mid" />
            <p className="section-label mb-0">Heimatregion</p>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-primary leading-tight mb-6">
            Energieberater in Düren —<br />
            <span className="text-gradient-teal">IBT Ingenieurbüro Tonn</span>
          </h1>
          <p className="text-xl text-zinc-muted leading-relaxed mb-8">
            IBT ist in der Region Düren zu Hause. Beratung und Vor-Ort-Begehung für Düren,
            Merzenich, Niederzier, Jülich und den gesamten Kreis Düren.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/kontakt" className="btn-primary">Anfrage stellen</Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-card border-y border-zinc-border">
        <div className="container-max max-w-3xl">
          <h2 className="text-2xl font-bold text-zinc-primary mb-6">
            Ihr lokaler Energieberater
          </h2>
          <div className="space-y-4 text-zinc-muted text-sm leading-relaxed">
            <p>
              In der Region Düren bin ich besonders gut erreichbar. Kurzfristige
              Vor-Ort-Begehungen sind in Düren, Merzenich, Niederzier, Jülich und Umgebung
              ohne zusätzliche Fahrtkosten möglich.
            </p>
            <p>
              Die Region hat viele Einfamilienhäuser aus den 1970er und 1980er Jahren mit
              großem Sanierungspotential. Mit dem richtigen Energieberater und der richtigen
              Förderung können Sie mit wenig Eigenkapital erhebliche Einsparungen erzielen.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
            {[
              "Düren", "Merzenich", "Niederzier",
              "Jülich", "Langerwehe", "Kreis Düren"
            ].map((a) => (
              <div key={a} className="card-base p-3 text-center text-xs text-zinc-secondary">{a}</div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Vor Ort in Düren"
        description="Kurzfristige Begehungen und persönliche Beratung in Düren und der Region."
        primaryLabel="Jetzt anfragen"
      />
    </>
  );
}
