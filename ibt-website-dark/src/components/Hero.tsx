import Link from "next/link";

const stats = [
  { value: "70 %",  label: "max. BEG-Förderung" },
  { value: "§88",   label: "GEG-qualifiziert" },
  { value: "BAFA",  label: "& KfW akkreditiert" },
  { value: "dena",  label: "Expertenliste" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-void pt-20">

      {/* ── Background: dot grid ── */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* ── Glow blobs ── */}
      <div className="glow-electric w-[700px] h-[700px] top-[-10%] left-[-15%]" />
      <div className="glow-warm     w-[400px] h-[400px] bottom-[10%] right-[5%]" />

      {/* ── Thin diagonal accent line ── */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden
      >
        <svg className="absolute w-full h-full opacity-10" preserveAspectRatio="none">
          <line x1="0" y1="100%" x2="100%" y2="0" stroke="#06d6a0" strokeWidth="1" />
          <line x1="0" y1="85%"  x2="60%"  y2="0" stroke="#06d6a0" strokeWidth="0.5" />
        </svg>
      </div>

      {/* ── Hero content ── */}
      <div className="relative flex-1 flex flex-col justify-center container-max px-4 sm:px-6 lg:px-8 py-16">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <span className="section-eyebrow">Jonas Tonn · Dipl.-Ing.</span>
          <span className="h-px flex-1 max-w-[80px] bg-electric/30" />
        </div>

        {/* ── Main headline — very large, Syne display ── */}
        <div className="overflow-hidden">
          <h1 className="font-display font-extrabold leading-none tracking-tight text-ink-bright">
            {/* Line 1 */}
            <span className="block text-[clamp(3rem,10vw,8.5rem)] mb-1">
              ENERGIE
            </span>
            {/* Line 2 — with electric gradient */}
            <span className="block text-[clamp(3rem,10vw,8.5rem)] mb-1 text-electric-grad">
              BERATUNG
            </span>
            {/* Line 3 — smaller, secondary */}
            <span className="block text-[clamp(1.4rem,4vw,3.5rem)] text-ink-muted font-semibold mt-2 tracking-[0.05em]">
              &amp; INGENIEURLEISTUNGEN
            </span>
          </h1>
        </div>

        {/* Subtext */}
        <p className="mt-8 max-w-lg text-ink-body text-base sm:text-lg leading-relaxed font-light">
          Von der Förderantragstellung bis zur technischen Berechnung —
          vollständige Begleitung für Ihr Sanierungsprojekt in der
          Region&nbsp;Köln&nbsp;/&nbsp;Bonn&nbsp;/&nbsp;Rheinbach.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link href="/energieberatung" className="btn-electric text-sm">
            Energieberatung entdecken
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="/foerderrechner" className="btn-outline text-sm">
            Förderung berechnen
          </Link>
        </div>
      </div>

      {/* ── Bottom stats bar ── */}
      <div className="relative border-t border-line-dim bg-surface/60 backdrop-blur-sm">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col gap-0.5 py-5 px-6 ${
                  i < stats.length - 1 ? "border-r border-line-dim" : ""
                }`}
              >
                <span className="font-mono font-bold text-xl text-warm">{s.value}</span>
                <span className="text-xs text-ink-muted tracking-wide">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
