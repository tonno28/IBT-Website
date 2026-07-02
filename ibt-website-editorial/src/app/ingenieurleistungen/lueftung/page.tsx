import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Lüftungskonzept DIN 1946-6 — Köln Bonn Rheinbach",
  description:
    "Lüftungskonzept nach DIN 1946-6: Pflicht bei luftdichter Gebäudehülle und energetischer Sanierung. Nachweis für BEG-Förderung. Ab 180 € für EFH. Region Köln / Bonn / Rheinbach.",
};

export default function LueftungPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-30" />
        <div className="container-max relative">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-xs text-zinc-muted mb-6">
              <Link href="/" className="hover:text-zinc-secondary">Startseite</Link>
              <span>/</span>
              <Link href="/ingenieurleistungen" className="hover:text-zinc-secondary">Ingenieurleistungen</Link>
              <span>/</span>
              <span className="text-zinc-secondary">Lüftungskonzept</span>
            </nav>
            <p className="section-label text-amber">Ingenieurleistungen</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-primary leading-tight mb-6">
              Lüftungskonzept<br />
              <span className="text-amber">nach DIN 1946-6</span>
            </h1>
            <p className="text-xl text-zinc-muted leading-relaxed mb-8">
              Bei energetisch sanierten und luftdichten Gebäuden ist das Lüftungskonzept Pflicht —
              und oft Fördervoraussetzung. Ich erstelle es normkonform und schnell.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/kontakt" className="btn-primary">Lüftungskonzept anfragen</Link>
              <span className="self-center text-xs text-zinc-hint font-mono">ab 180 € (EFH)</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-card border-y border-zinc-border">
        <div className="container-max max-w-3xl">
          <p className="section-label text-center text-amber">Wann Pflicht?</p>
          <h2 className="text-2xl font-bold text-zinc-primary text-center mb-8">
            Wann ist ein Lüftungskonzept erforderlich?
          </h2>
          <div className="space-y-4">
            {[
              { title: "Neubau", desc: "Grundsätzlich erforderlich — luftdichte Gebäudehülle erfordert kontrollierten Luftaustausch." },
              { title: "Fenstertausch", desc: "Bei Austausch von mehr als 1/3 der Fenster ist ein Lüftungsnachweis zu erstellen." },
              { title: "BEG-Förderung Anlagentechnik", desc: "Für geförderte Lüftungsanlagen (BEG EM) ist das Konzept Pflicht und Fördervoraussetzung." },
              { title: "Luftdichtheitsnachweis", desc: "Nach Blower-Door-Test: zeigt, ob Infiltration als Lüftungsweg ausreichend ist oder eine Anlage benötigt wird." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 card-base p-5">
                <div className="w-2 h-2 rounded-full bg-amber shrink-0 mt-2" />
                <div>
                  <h3 className="font-semibold text-zinc-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-zinc-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-primary">
        <div className="container-max max-w-3xl">
          <p className="section-label text-center text-amber">Leistung & Preis</p>
          <h2 className="text-2xl font-bold text-zinc-primary text-center mb-8">Was Sie erhalten</h2>
          <div className="space-y-3">
            {[
              "Lüftungskonzept nach DIN 1946-6",
              "Berechnung der Notwendigkeit (Infiltrationsnachweis)",
              "Auslegung des Lüftungsvolumenstroms",
              "Empfehlung Lüftungssystem (dezentral / zentral / Anlage)",
              "Nachweis für Förderantrag BEG und Baugenehmigung",
              "Bericht als PDF — verwendbar als Planungsunterlage",
              "Lieferzeit 3–5 Werktage",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-zinc-muted">
                <svg className="w-4 h-4 text-amber shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Lüftungskonzept beauftragen"
        description="Grundrisse und n50-Wert aus dem Blower-Door-Test — ich erstelle das normkonforme Lüftungskonzept."
        primaryLabel="Lüftungskonzept anfragen"
        secondaryLabel="Alle Ingenieurleistungen"
        secondaryHref="/ingenieurleistungen"
      />
    </>
  );
}
