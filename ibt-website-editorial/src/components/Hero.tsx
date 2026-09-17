import Link from "next/link";

/**
 * Die vier Zahlen sind echte Werte, keine Deko: Förder-Maxima aus der BEG
 * (Stand 21.07.2026) und der Projektstand aus den eigenen Unterlagen
 * (siehe Kommentar auf der Ingenieurleistungen-Seite). Projektzahlen bei
 * jedem Abschluss fortschreiben.
 */
const stats = [
  { value: "80 %*", label: "max. Heizungsförderung" },
  { value: "60.000 €", label: "förderfähig mit iSFP" },
  { value: "12", label: "begleitete Projekte" },
  { value: "24", label: "technische Berechnungen" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Blueprint grid backdrop */}
      <div className="absolute inset-0 grid-blueprint opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative container-max w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bg-card/80 backdrop-blur-sm border border-zinc-border text-xs font-medium text-zinc-secondary mb-8">
            Unabhängige Energieberatung · Region Köln, Aachen &amp; Düren
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-primary leading-[1.05] tracking-tight mb-6">
            Ihre Sanierung.
            <br />
            <span className="text-teal-dark">Bis zu 80 % gefördert.*</span>
            <br />
            Geplant vom Ingenieur.
          </h1>

          {/* Subline — text-balance verteilt die Zeilen gleichmäßig, statt
              eine kurze Restzeile stehen zu lassen. */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-zinc-muted leading-relaxed text-balance mb-10">
            Von der Förderantragstellung bis zur technischen Berechnung
            begleite ich Ihr Sanierungsprojekt vollständig. Für die Region
            Köln, Aachen und Düren.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/kontakt" className="btn-primary text-base px-8 py-3.5">
              Erstgespräch anfragen
            </Link>
            <Link href="/foerderrechner" className="btn-secondary text-base px-8 py-3.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Förderrechner 2026
            </Link>
          </div>

          {/* Stats bar */}
          <div className="mx-auto max-w-2xl rounded-2xl border border-zinc-border bg-bg-card/50 backdrop-blur-sm px-6 py-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center text-center">
                  <span className="stat-num text-2xl text-accent">{s.value}</span>
                  <span className="text-xs text-zinc-muted mt-1">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="mx-auto max-w-2xl text-xs text-zinc-hint mt-3">
            * Heizungstausch mit allen kombinierbaren Boni, u.&nbsp;a. Einkommensbonus
            (zu versteuerndes Haushaltseinkommen bis 30.000&nbsp;€, mit Kind im Haushalt bis 40.000&nbsp;€). Stand: BEG-Reform,
            gültig seit 21.07.2026.
          </p>

          <div className="mt-12">
            <img
              src="/images/hero-sanierung.jpg"
              alt="Saniertes Einfamilienhaus mit gedämmter Fassade, neuen Fenstern und Wärmepumpe"
              width={1600}
              height={679}
              className="w-full rounded-2xl border border-zinc-border shadow-lg shadow-black/5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
