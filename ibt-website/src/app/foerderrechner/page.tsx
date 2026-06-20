import type { Metadata } from "next";
import Foerderrechner from "@/components/Foerderrechner";
import CTABanner from "@/components/CTABanner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BEG-Förderrechner — Bundesförderung berechnen 2025",
  description:
    "Interaktiver BEG-Förderrechner: Berechnen Sie Ihre mögliche Bundesförderung für Heizung, Fenster, Dach oder Fassade in 4 Schritten. Stand BEG 2025. Unverbindlich, ohne Registrierung.",
};

export default function FoerderrechnerPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-30" />
        <div className="container-max relative">
          <div className="text-center max-w-2xl mx-auto">
            <p className="section-label">BEG 2025</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-primary mb-4">
              BEG-Förderrechner
            </h1>
            <p className="text-xl text-zinc-muted leading-relaxed">
              Berechnen Sie in 4 Schritten, wie viel Bundesförderung Sie erhalten können —
              für Heizung, Fenster, Dach oder Fassade. Keine Angabe persönlicher Daten erforderlich.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-primary pt-0">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Rechner */}
            <div className="lg:col-span-2">
              <div className="bg-bg-card border border-zinc-border rounded-2xl p-6 sm:p-8">
                <Foerderrechner />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="card-base p-5">
                <h3 className="font-semibold text-zinc-primary mb-3">Hinweis zur Genauigkeit</h3>
                <p className="text-sm text-zinc-muted leading-relaxed">
                  Dieser Rechner liefert eine unverbindliche Schätzung auf Basis der
                  BEG-Richtlinie (Stand 2025). Die tatsächliche Förderung hängt von
                  weiteren technischen Voraussetzungen ab.
                </p>
              </div>

              <div className="card-base p-5">
                <h3 className="font-semibold text-zinc-primary mb-3">BEG-Kurzübersicht</h3>
                <div className="space-y-3">
                  {[
                    { label: "Heizung (Basis)", value: "30 %" },
                    { label: "Klima-Bonus (Heizung)", value: "+ 20 %" },
                    { label: "Effizienz-Bonus (WP)", value: "+ 5 %" },
                    { label: "Einkommens-Bonus", value: "+ 30 %" },
                    { label: "Max. Heizungsförderung", value: "70 %" },
                    { label: "Hülle (Basis)", value: "15 %" },
                    { label: "iSFP-Bonus (Hülle)", value: "+ 5 %" },
                    { label: "Max. Hüllenförderung", value: "20 %" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between text-sm">
                      <span className="text-zinc-muted">{row.label}</span>
                      <span className="font-mono text-amber font-semibold">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-base p-5">
                <h3 className="font-semibold text-zinc-primary mb-2">Nächster Schritt</h3>
                <p className="text-sm text-zinc-muted mb-4">
                  Als akkreditierter Energieberater stelle ich alle Anträge für Sie —
                  vollständig und korrekt.
                </p>
                <Link href="/kontakt" className="btn-primary w-full justify-center text-sm">
                  Kostenlose Erstberatung
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-bg-card border-y border-zinc-border">
        <div className="container-max max-w-3xl">
          <p className="section-label text-center">FAQ</p>
          <h2 className="text-2xl font-bold text-zinc-primary text-center mb-10">
            Häufige Fragen zur BEG-Förderung
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Kann ich mehrere Maßnahmen kombinieren?",
                a: "Ja. BEG-Einzelmaßnahmen können in Kombination beantragt werden. Jede Maßnahme wird separat berechnet. Mit einem iSFP erhalten Sie auf jede Maßnahme zusätzlich 5 % Bonus."
              },
              {
                q: "Wer kann BEG-Förderung beantragen?",
                a: "Eigentümer selbstgenutzter oder vermieteter Wohngebäude, Wohnungseigentümergemeinschaften sowie Mieter (mit Zustimmung des Vermieters). Für gewerblich genutzte Gebäude gelten andere Programme."
              },
              {
                q: "Muss ich vor Beauftragung des Handwerks einen Antrag stellen?",
                a: "Ja. Für BAFA-Zuschüsse muss der Antrag vor Beauftragung des Handwerkers gestellt werden. Eine Ausnahme gilt nur für den Austausch nicht mehr funktionsfähiger Heizungen (Heizungsnotfall)."
              },
              {
                q: "Wie lange dauert die Auszahlung?",
                a: "Nach Einreichung des Verwendungsnachweises und Prüfung durch BAFA/KfW dauert die Auszahlung in der Regel 4–8 Wochen. Der Prozess muss vollständig dokumentiert sein."
              },
            ].map((faq) => (
              <div key={faq.q} className="border-b border-zinc-border pb-6">
                <h3 className="font-semibold text-zinc-primary mb-2">{faq.q}</h3>
                <p className="text-sm text-zinc-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Förderung nicht liegen lassen"
        description="Ich beantrage Ihre Förderung vollständig — BAFA und KfW. Als akkreditierter EEE übernehme ich alle Schritte."
        primaryLabel="Beratung anfragen"
      />
    </>
  );
}
