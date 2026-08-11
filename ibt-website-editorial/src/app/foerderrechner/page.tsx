import type { Metadata } from "next";
import Link from "next/link";
import Foerderrechner from "@/components/Foerderrechner";
import CTABanner from "@/components/CTABanner";
import { BAFA, HEIZUNG, STAND } from "@/lib/foerderung";

export const metadata: Metadata = {
  title: "BEG-Förderrechner 2026: Förderung und Honorar schätzen",
  description:
    "Förderrechner nach den BEG-Richtlinien vom 17.07.2026: Heizungstausch, Dämmung, Fenster und Lüftung. Mit Einkommensbonus, iSFP-Systematik und direkter Honorarschätzung. Unverbindlich, ohne Registrierung.",
};

const KURZUEBERSICHT = [
  { label: "Heizung", wert: `${HEIZUNG.grundfoerderung}–${HEIZUNG.deckelEinkommen} %` },
  { label: "Hülle & Technik", wert: `${BAFA.grundfoerderung}–${BAFA.grundfoerderung + BAFA.isfpBonus} %` },
  { label: "Baubegleitung", wert: "50 %" },
];

const FAQ = [
  {
    q: "Was kostet mich Ihre Begleitung?",
    a: "Der Rechner zeigt Ihnen direkt eine Honorarschätzung für Ihr Vorhaben. Bei Einzelmaßnahmen an Hülle und Anlagentechnik wird davon die Hälfte über die Förderung für Fachplanung und Baubegleitung erstattet, das ist im Eigenanteil schon berücksichtigt. Verbindlich wird das Honorar nach einem Blick auf Ihr Objekt.",
  },
  {
    q: "Was hat sich zum 21. Juli 2026 geändert?",
    a: "Der Klimageschwindigkeitsbonus sinkt von 20 auf 16 % und ab Februar 2027 halbjährlich weiter. Der Einkommensbonus ist jetzt dreistufig mit bis zu 40 %, dazu kommt ein Familienzuschlag. Der Effizienzbonus entfällt, und der iSFP-Bonus greift nur noch oberhalb von 30.000 €. Rechner, die noch mit den alten Sätzen arbeiten, liegen deutlich zu hoch.",
  },
  {
    q: "Muss ich vor der Beauftragung einen Antrag stellen?",
    a: "Ja. Der Antrag muss vor der Auftragserteilung gestellt sein. Ein zu früh unterschriebener Handwerkervertrag ist der häufigste Ablehnungsgrund. Ausnahme ist der Heizungsnotfall.",
  },
  {
    q: "Kann ich mehrere Maßnahmen kombinieren?",
    a: "Ja. Wichtig ist die gemeinsame Höchstgrenze: Für alle BAFA-Einzelmaßnahmen zusammen gilt eine Obergrenze pro Gebäude und Kalenderjahr. Bei größeren Paketen kann eine Aufteilung über zwei Jahre sinnvoll sein.",
  },
];

export default function FoerderrechnerPage() {
  return (
    <>
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-30" />
        <div className="container-max relative">
          <div className="text-center max-w-2xl mx-auto">
            <p className="section-label">BEG 2026</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-primary mb-4">
              Förderrechner
            </h1>
            <p className="text-lg text-zinc-muted leading-relaxed text-balance mb-5">
              In vier Schritten zur Schätzung: Förderung, Eigenanteil und mein Honorar.
              Ohne Registrierung, ohne persönliche Daten.
            </p>
            <span className="badge-teal">{STAND.lang}</span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-primary pt-0">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="bg-bg-card border border-zinc-border rounded-2xl p-6 sm:p-8">
                <Foerderrechner />
              </div>
            </div>

            <div className="space-y-5">
              <div className="card-base p-5">
                <h2 className="font-semibold text-zinc-primary mb-3">Auf einen Blick</h2>
                <div className="space-y-2.5">
                  {KURZUEBERSICHT.map((row) => (
                    <div key={row.label} className="flex justify-between gap-3 text-sm">
                      <span className="text-zinc-muted">{row.label}</span>
                      <span className="text-amber font-semibold text-right shrink-0">
                        {row.wert}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-base p-5">
                <h2 className="font-semibold text-zinc-primary mb-2">Nächster Schritt</h2>
                <p className="text-sm text-zinc-muted mb-4 leading-relaxed">
                  Als dena-gelisteter Energieeffizienz-Experte stelle ich alle Anträge für Sie,
                  vollständig und vor der Auftragsvergabe.
                </p>
                <Link href="/kontakt" className="btn-primary w-full justify-center text-sm">
                  Kostenlose Erstberatung
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-card border-y border-zinc-border">
        <div className="container-max max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-primary text-center mb-10">
            Häufige Fragen
          </h2>
          <div className="space-y-6">
            {FAQ.map((f) => (
              <div key={f.q} className="border-b border-zinc-border pb-6 last:border-0">
                <h3 className="font-semibold text-zinc-primary mb-2">{f.q}</h3>
                <p className="text-sm text-zinc-muted leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Förderung nicht liegen lassen"
        description="Ich beantrage Ihre Förderung vollständig: BAFA und KfW, bis zum Verwendungsnachweis."
        primaryLabel="Beratung anfragen"
      />
    </>
  );
}
