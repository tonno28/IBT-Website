import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Energieberater Rheinbach — IBT Ingenieurbüro Tonn",
  description:
    "Energieberater in Rheinbach und Umgebung (Meckenheim, Euskirchen, Swisttal): iSFP, BEG-Förderung, Heizlast, Energieausweis. Jonas Tonn, §88 GEG, dena-gelistet. Vor Ort verfügbar.",
};

export default function RheinbachPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-void relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-30" />
        <div className="container-max relative max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-teal-mid" />
            <p className="section-eyebrow mb-0">Heimatregion</p>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-ink-bright leading-tight mb-6">
            Energieberater in Rheinbach —<br />
            <span className="text-electric-grad">IBT Ingenieurbüro Tonn</span>
          </h1>
          <p className="text-xl text-ink-muted leading-relaxed mb-8">
            IBT hat seinen Sitz in Rheinbach. Beratung und Vor-Ort-Begehung für Rheinbach,
            Meckenheim, Swisttal, Euskirchen und den gesamten Kreis Euskirchen.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/kontakt" className="btn-electric">Anfrage stellen</Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface border-y border-line-dim">
        <div className="container-max max-w-3xl">
          <h2 className="text-2xl font-bold text-ink-bright mb-6">
            Ihr lokaler Energieberater
          </h2>
          <div className="space-y-4 text-ink-muted text-sm leading-relaxed">
            <p>
              Als Büro mit Sitz in Rheinbach bin ich in der Region besonders gut erreichbar.
              Kurzfristige Vor-Ort-Begehungen sind in Rheinbach, Meckenheim, Swisttal,
              Euskirchen und Umgebung ohne zusätzliche Fahrtkosten möglich.
            </p>
            <p>
              Die Region hat viele Einfamilienhäuser aus den 1970er und 1980er Jahren mit
              großem Sanierungspotential. Mit dem richtigen Energieberater und der richtigen
              Förderung können Sie mit wenig Eigenkapital erhebliche Einsparungen erzielen.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
            {[
              "Rheinbach", "Meckenheim", "Swisttal",
              "Euskirchen", "Weilerswist", "Bad Münstereifel"
            ].map((a) => (
              <div key={a} className="card p-3 text-center text-xs text-ink-body">{a}</div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Vor Ort in Rheinbach"
        description="Kurzfristige Begehungen und persönliche Beratung in Rheinbach und der Region Euskirchen."
        primaryLabel="Jetzt anfragen"
      />
    </>
  );
}
