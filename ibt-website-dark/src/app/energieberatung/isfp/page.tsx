import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "iSFP Sanierungsfahrplan — Individueller Sanierungsfahrplan",
  description:
    "Individueller Sanierungsfahrplan (iSFP) nach BEG: maßgeschneiderte Sanierungsreihenfolge, 5 % Extra-Förderbonus auf alle Folgemaßnahmen. Ab 650 € für EFH. Region Köln / Bonn / Rheinbach.",
};

const steps = [
  { step: "01", title: "Erstgespräch", desc: "Klärung Ihrer Ziele, Zeitrahmen und Budget. Ich erkläre, was ein iSFP bringt und was er kostet." },
  { step: "02", title: "Vor-Ort-Begehung", desc: "Aufnahme des Gebäudezustands: Hülle, Heizung, Lüftung, Fenster. Basis für die Bilanzierung." },
  { step: "03", title: "Energiebilanzierung", desc: "Berechnung des Ist-Zustands und aller geplanten Maßnahmen nach GEG-Methodik." },
  { step: "04", title: "Maßnahmenpakete", desc: "Bis zu 4 Sanierungsstufen mit Kosten, Förderbeträgen und Energieeinsparung je Paket." },
  { step: "05", title: "Übergabe & Beantragung", desc: "Übergabe des iSFP-Dokuments und sofortige Nutzung des 5 % Bonus bei Förderanträgen." },
];

export default function ISFPPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-void relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-30" />
        <div className="container-max relative">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-xs text-ink-muted mb-6">
              <Link href="/" className="hover:text-ink-body">Startseite</Link>
              <span>/</span>
              <Link href="/energieberatung" className="hover:text-ink-body">Energieberatung</Link>
              <span>/</span>
              <span className="text-ink-body">iSFP</span>
            </nav>
            <p className="section-eyebrow">Energieberatung</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-ink-bright leading-tight mb-6">
              Individueller<br />
              <span className="text-electric-grad">Sanierungsfahrplan</span>
            </h1>
            <p className="text-xl text-ink-muted leading-relaxed mb-8">
              Der iSFP ist Ihr persönlicher Masterplan: Welche Maßnahmen in welcher Reihenfolge,
              welche Förderung, welche Einsparung. Und: +5 % Extra-Bonus auf jede geförderte Maßnahme.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/kontakt" className="btn-electric">iSFP anfragen</Link>
              <span className="badge-electric self-center">5 % iSFP-Bonus</span>
            </div>
          </div>
        </div>
      </section>

      {/* Was ist ein iSFP */}
      <section className="section-pad bg-surface border-y border-line-dim">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="section-eyebrow">Leistung</p>
              <h2 className="text-2xl font-bold text-ink-bright mb-4">Was ist ein iSFP?</h2>
              <div className="space-y-4 text-ink-muted text-sm leading-relaxed">
                <p>
                  Der individuelle Sanierungsfahrplan (iSFP) ist ein staatlich gefördertes
                  Beratungsprodukt der Bundesregierung. Er zeigt Ihnen, welche Sanierungsmaßnahmen
                  für Ihr Gebäude sinnvoll sind, in welcher Reihenfolge sie umgesetzt werden sollten
                  und welche Förderung Sie jeweils erhalten.
                </p>
                <p>
                  Der iSFP wird von einem akkreditierten Energieeffizienz-Experten erstellt und gilt
                  für 15 Jahre. In dieser Zeit können Sie jede im iSFP empfohlene Maßnahme mit
                  einem zusätzlichen Bonus von 5 % gefördert bekommen.
                </p>
                <p>
                  Beispiel: Dachdämmung ohne iSFP = 15 % BEG. Mit iSFP = 20 % BEG.
                  Bei 20.000 € Investition bedeutet das 1.000 € mehr Förderung — allein für eine
                  Maßnahme.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="card p-5">
                <div className="text-2xl font-bold text-electric font-mono mb-1">+5 %</div>
                <div className="text-sm font-semibold text-ink-bright mb-1">iSFP-Bonus</div>
                <div className="text-xs text-ink-muted">auf alle BEG-Einzelmaßnahmen die im iSFP empfohlen sind</div>
              </div>
              <div className="card p-5">
                <div className="text-2xl font-bold text-warm font-mono mb-1">15 Jahre</div>
                <div className="text-sm font-semibold text-ink-bright mb-1">Gültigkeit</div>
                <div className="text-xs text-ink-muted">Maßnahmen können schrittweise umgesetzt werden</div>
              </div>
              <div className="card p-5">
                <div className="text-2xl font-bold text-electric font-mono mb-1">ab 650 €</div>
                <div className="text-sm font-semibold text-ink-bright mb-1">Kosten</div>
                <div className="text-xs text-ink-muted">netto für EFH · zzgl. MwSt.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="section-pad bg-void">
        <div className="container-max">
          <p className="section-eyebrow text-center">Ablauf</p>
          <h2 className="text-2xl font-bold text-ink-bright text-center mb-10">So läuft Ihr iSFP ab</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-electric/10 border border-electric/20 flex items-center justify-center text-xs font-bold text-electric font-mono shrink-0 mt-0.5">
                  {s.step}
                </div>
                <div>
                  <div className="font-semibold text-ink-bright text-sm">{s.title}</div>
                  <div className="text-sm text-ink-muted mt-0.5">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-surface border-y border-line-dim">
        <div className="container-max max-w-3xl">
          <p className="section-eyebrow text-center">FAQ</p>
          <h2 className="text-2xl font-bold text-ink-bright text-center mb-10">Häufige Fragen zum iSFP</h2>
          <div className="space-y-6">
            {[
              {
                q: "Ist der iSFP selbst förderbar?",
                a: "Ja. Die Beratungskosten für den iSFP sind über die Bundesförderung für Energieberatung Wohngebäude (BEW) zu 80 % förderbar (max. 1.300 € für EFH). Ich unterstütze Sie auch hier bei der Antragstellung."
              },
              {
                q: "Muss ich alle Maßnahmen umsetzen?",
                a: "Nein. Der iSFP ist ein Fahrplan, keine Verpflichtung. Sie können die empfohlenen Maßnahmen ganz oder teilweise, in beliebiger Reihenfolge und über viele Jahre verteilt umsetzen."
              },
              {
                q: "Gilt der iSFP-Bonus für alle Maßnahmen?",
                a: "Der +5 % Bonus gilt für alle BEG-Einzelmaßnahmen (BEG EM), die im iSFP explizit empfohlen sind. Heizungsförderung und Komplettsanierung (BEG WG) haben eigene Regelungen."
              },
              {
                q: "Wie lange dauert die Erstellung?",
                a: "Nach der Vor-Ort-Begehung erhalten Sie den fertigen iSFP in der Regel innerhalb von 2–3 Wochen. Eilaufträge sind möglich."
              },
            ].map((faq) => (
              <div key={faq.q} className="border-b border-line-dim pb-6">
                <h3 className="font-semibold text-ink-bright mb-2">{faq.q}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="iSFP erstellen lassen"
        description="Erster Schritt: kostenlose Erstberatung. Ich erkläre Ihnen, ob und wie ein iSFP für Ihr Gebäude Sinn macht."
        primaryLabel="iSFP anfragen"
      />
    </>
  );
}
