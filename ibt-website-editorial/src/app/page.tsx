import type { Metadata } from "next";
import Hero from "@/components/Hero";
import LeistungenOverview from "@/components/LeistungenOverview";
import CTABanner from "@/components/CTABanner";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "IBT Ingenieurbüro Tonn: Energieberatung und Ingenieurleistungen",
  description:
    "Professionelle Energieberatung (iSFP, BAFA/KfW, Förderberatung) und Ingenieurleistungen (Heizlast, U-Wert, Taupunkt) aus einer Hand. Jonas Tonn, qualifiziert nach §88 GEG, dena-gelistet. Region Köln / Aachen / Düren.",
};

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Zwei Säulen (Teaser, Details auf /energieberatung und /ingenieurleistungen) */}
      <LeistungenOverview />

      {/* 3. Über mich (Preview) */}
      <section className="section-padding bg-bg-card border-y border-zinc-border">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal variant="left">
              <p className="section-label">Über mich</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-primary mb-4">
                Jonas Tonn
              </h2>
              <p className="text-zinc-muted leading-relaxed mb-4">
                Ingenieur (B. Eng. Smart Building Engineering) und unabhängiger
                Energieberater: keine Bindung an Hersteller oder Handwerksbetriebe,
                keine Verkaufsziele, keine Provisionen.
              </p>
              <p className="text-zinc-muted leading-relaxed mb-6">
                Ich kenne beide Seiten: die technischen Anforderungen an der
                Schnittstelle zu Handwerk und Planung, und die bürokratischen
                Anforderungen der Förderprogramme.
              </p>
              <Link href="/ueber-mich" className="btn-secondary text-sm">
                Mehr über mich →
              </Link>
            </Reveal>

            <Reveal variant="right">
              <div className="space-y-3">
                {[
                  {
                    title: "B. Eng. Smart Building Engineering",
                    desc: "FH Aachen: Gebäudetechnik, Energieeffizienz und Gebäudeautomation.",
                  },
                  {
                    title: "§88 GEG Qualifikationsnachweis",
                    desc: "Fachliche Eignung als Energieberater nach Gebäudeenergiegesetz.",
                  },
                  {
                    title: "dena-Energieeffizienz-Expertenliste",
                    desc: "Voraussetzung für BAFA- und KfW-Förderanträge.",
                  },
                  {
                    title: "BEG-Fachplaner & Baubegleiter",
                    desc: "Akkreditiert für Fachplanung und Baubegleitung (BAFA/KfW).",
                  },
                ].map((q) => (
                  <div key={q.title} className="card-base p-4 flex items-start gap-3">
                    <svg className="w-4 h-4 text-teal-dark shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="text-sm font-semibold text-zinc-primary">{q.title}</div>
                      <div className="text-xs text-zinc-muted mt-0.5">{q.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. CTA Banner */}
      <CTABanner />
    </>
  );
}
