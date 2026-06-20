import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bald verfügbar",
  description:
    "Die Website von IBT Ingenieurbüro Tonn befindet sich im Aufbau. Energieberatung (BAFA/KfW, iSFP, dena) und Ingenieurleistungen aus einer Hand — Region Köln / Bonn / Rheinbach.",
  robots: { index: false, follow: false },
};

export default function ComingSoonPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-16">
      {/* Grid dot background */}
      <div className="absolute inset-0 grid-dots opacity-40" />

      {/* Accent glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal-dark/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-amber/5 blur-[80px] pointer-events-none" />

      <div className="relative container-max text-center animate-fade-up">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-lg px-3 py-2 shrink-0">
            <Image
              src="/logo.jpg"
              alt="IBT Ingenieurbüro Tonn"
              width={160}
              height={54}
              className="h-12 w-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bg-card border border-zinc-border text-xs font-medium text-zinc-muted mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-light animate-pulse" />
          Website im Aufbau
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-primary leading-[1.08] tracking-tight mb-6">
          Wir sind bald
          <br />
          <span className="text-gradient-teal">für Sie da.</span>
        </h1>

        {/* Subline */}
        <p className="max-w-xl mx-auto text-lg text-zinc-muted leading-relaxed mb-10">
          An unserem neuen Webauftritt wird gerade gearbeitet. Energieberatung und
          Ingenieurleistungen aus einer Hand — Jonas Tonn, Dipl.-Ing., für die Region
          Köln / Bonn / Rheinbach.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <span className="badge-teal">dena-gelistet</span>
          <span className="badge-amber">BAFA/KfW-akkreditiert</span>
          <span className="badge-teal">§88 GEG</span>
        </div>

        {/* Contact card */}
        <div className="max-w-md mx-auto card-base p-6 text-left mb-10">
          <div className="section-label">Schon jetzt erreichbar</div>
          <div className="space-y-3 text-sm">
            <a
              href="mailto:info@ibt-tonn.de"
              className="flex items-center gap-3 text-zinc-secondary hover:text-amber transition-colors"
            >
              <svg className="w-4 h-4 shrink-0 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@ibt-tonn.de
            </a>
            <a
              href="tel:+4922514839"
              className="flex items-center gap-3 text-zinc-secondary hover:text-amber transition-colors"
            >
              <svg className="w-4 h-4 shrink-0 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +49 (0) 2251 48 39
            </a>
            <div className="flex items-center gap-3 text-zinc-muted">
              <svg className="w-4 h-4 shrink-0 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Rheinbach / Köln / Bonn
            </div>
          </div>
        </div>

        {/* Legal links (Impressumspflicht) */}
        <div className="flex justify-center gap-4 text-xs text-zinc-hint">
          <Link href="/impressum" className="hover:text-zinc-muted transition-colors">
            Impressum
          </Link>
          <span>·</span>
          <Link href="/datenschutz" className="hover:text-zinc-muted transition-colors">
            Datenschutz
          </Link>
        </div>
      </div>
    </section>
  );
}
