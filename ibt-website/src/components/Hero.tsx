import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Grid dot background */}
      <div className="absolute inset-0 grid-dots opacity-40" />

      {/* Accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal-dark/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-amber/5 blur-[80px] pointer-events-none" />

      <div className="relative container-max px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bg-card border border-zinc-border text-xs font-medium text-zinc-muted mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-light animate-pulse" />
          dena-gelistet · BAFA/KfW-akkreditiert · §88 GEG
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-zinc-primary leading-[1.05] tracking-tight mb-6">
          Energieberatung
          <br />
          <span className="text-gradient-teal">und Ingenieur&shy;leistungen</span>
          <br />
          <span className="text-zinc-secondary">aus einer Hand.</span>
        </h1>

        {/* Subline */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-zinc-muted leading-relaxed mb-10">
          Von der Förderantragstellung bis zur technischen Berechnung —
          Jonas Tonn begleitet Ihr Sanierungsprojekt vollständig. Region Köln / Bonn / Rheinbach.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="/energieberatung" className="btn-primary text-base px-8 py-3.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Energieberatung
          </Link>
          <Link href="/ingenieurleistungen" className="btn-secondary text-base px-8 py-3.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Ingenieurleistungen
          </Link>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm">
          {[
            { value: "70 %", label: "max. BEG-Förderung" },
            { value: "§88", label: "GEG-qualifiziert" },
            { value: "BAFA", label: "& KfW akkreditiert" },
            { value: "dena", label: "Expertenliste" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="text-2xl font-bold font-mono text-amber">{s.value}</span>
              <span className="text-zinc-hint">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-hint">
        <span className="text-xs tracking-widest uppercase">Mehr erfahren</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
