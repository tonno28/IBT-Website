import type { Metadata } from "next";
import Hero from "@/components/Hero";
import LeistungenOverview from "@/components/LeistungenOverview";
import ProcessTimeline from "@/components/ProcessTimeline";
import CTABanner from "@/components/CTABanner";
import Link from "next/link";
import Foerderrechner from "@/components/Foerderrechner";

export const metadata: Metadata = {
  title: "IBT Ingenieurbüro Tonn — Energieberatung & Ingenieurleistungen Köln Bonn Rheinbach",
  description:
    "Professionelle Energieberatung (iSFP, BAFA/KfW, Förderberatung) und Ingenieurleistungen (Heizlast, U-Wert, Taupunkt) aus einer Hand. Jonas Tonn, qualifiziert nach §88 GEG, dena-gelistet. Region Köln / Bonn / Rheinbach.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <LeistungenOverview />
      <ProcessTimeline />

      {/* Förderrechner */}
      <section className="section-pad bg-void relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="glow-warm w-[500px] h-[500px] top-1/2 right-[-10%] -translate-y-1/2" />

        <div className="container-max relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div className="lg:sticky lg:top-24">
              <span className="section-eyebrow">BEG-Förderrechner</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-bright mt-3 mb-4">
                Wie viel Förderung<br />
                <span className="text-warm-grad">ist drin?</span>
              </h2>
              <p className="text-ink-body leading-relaxed mb-8">
                Berechnen Sie in 4 Schritten, wie viel Bundesförderung für effiziente Gebäude (BEG)
                Sie für Ihre geplante Sanierungsmaßnahme erhalten können —
                ohne persönliche Daten, sofort und kostenlos.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { label: "Heizungsförderung bis 70 % (Klima- + Effizienz- + Einkommensbonus)" },
                  { label: "Gebäudehülle bis 20 % (+ 5 % mit iSFP)" },
                  { label: "Baubegleitung 50 % bis 5.000 €" },
                  { label: "Alle Boni transparent erklärt" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-electric mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-sm text-ink-muted">{item.label}</span>
                  </div>
                ))}
              </div>

              <Link href="/foerderrechner" className="btn-outline text-sm">
                Vollständiger Förderrechner →
              </Link>
              <p className="font-mono text-xs text-ink-ghost mt-4">
                Unverbindliche Schätzung. Stand: BEG 2025.
              </p>
            </div>

            {/* Right: calculator */}
            <div className="card p-6 sm:p-8">
              <Foerderrechner />
            </div>
          </div>
        </div>
      </section>

      {/* Über mich */}
      <section className="section-pad bg-surface relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-line-bright to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-line-bright to-transparent" />

        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-eyebrow">Über mich</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-bright mt-3 mb-5">
                Jonas Tonn
              </h2>
              <p className="text-ink-body leading-relaxed mb-4">
                Dipl.-Ing. und Teamleiter bei der Siemens AG in Köln — nebenberuflich seit Jahren
                als unabhängiger Energieberater tätig. Was das bedeutet: keine Abhängigkeit von
                Herstellern, keine Verkaufsziele, keine Provisionen.
              </p>
              <p className="text-ink-muted leading-relaxed mb-8">
                Ich kenne beide Seiten: die technischen Anforderungen an der Schnittstelle zu
                Handwerk und Planung, und die bürokratischen Anforderungen der Förderprogramme.
                Das macht den Unterschied.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["§88 GEG qualifiziert", "dena Expertenliste", "BAFA/KfW akkreditiert", "BEG-Fachplaner"].map((b) => (
                  <span key={b} className="badge-electric text-xs">{b}</span>
                ))}
              </div>

              <Link href="/ueber-mich" className="btn-outline text-sm">
                Mehr über mich →
              </Link>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "§88 GEG",  label: "Qualifikationsnachweis" },
                { value: "BAFA",     label: "& KfW akkreditiert" },
                { value: "dena",     label: "Energieeffizienz-Experte" },
                { value: "100 %",    label: "unabhängig" },
              ].map((stat) => (
                <div key={stat.label} className="card p-6 text-center group hover:border-electric/40 transition-all">
                  <div className="font-display font-bold text-2xl text-warm mb-1 group-hover:text-electric transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs text-ink-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
