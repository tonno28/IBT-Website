import Link from "next/link";

interface CTABannerProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  title = "Bereit für Ihre Sanierung?",
  description = "Kostenlose Erstberatung — ich schaue mir Ihre Situation an und zeige Ihnen, welche Förderung realistisch ist. Ohne Verpflichtung.",
  primaryLabel = "Jetzt Erstberatung anfragen",
  primaryHref = "/kontakt",
  secondaryLabel = "Förderrechner starten",
  secondaryHref = "/foerderrechner",
}: CTABannerProps) {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="relative overflow-hidden rounded-2xl bg-bg-accent border border-teal-dark/30 p-8 sm:p-12">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-teal-dark/10 blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-48 h-48 rounded-full bg-amber/5 blur-[60px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Text */}
            <div className="text-center lg:text-left">
              <p className="section-label mb-2">Kostenloser Einstieg</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-primary mb-3">
                {title}
              </h2>
              <p className="text-zinc-muted max-w-lg">{description}</p>

              {/* Trust markers */}
              <div className="flex flex-wrap gap-3 mt-5 justify-center lg:justify-start">
                <div className="flex items-center gap-1.5 text-xs text-zinc-muted">
                  <svg className="w-4 h-4 text-teal-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Kostenlos & unverbindlich
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-muted">
                  <svg className="w-4 h-4 text-teal-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Antwort innerhalb 24h
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-muted">
                  <svg className="w-4 h-4 text-teal-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  dena-zertifiziert
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <Link href={primaryHref} className="btn-primary text-base px-8 py-3.5 whitespace-nowrap">
                {primaryLabel}
              </Link>
              <Link href={secondaryHref} className="btn-secondary text-sm py-3 whitespace-nowrap">
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
