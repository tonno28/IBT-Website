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
    <section className="section-pad bg-void">
      <div className="container-max">
        <div className="relative overflow-hidden rounded-3xl border border-line-mid bg-surface p-8 sm:p-14">

          {/* Background glows */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-electric/8 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-20 -left-10 w-60 h-60 bg-warm/6 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 dot-grid opacity-20" />

          {/* Top rule */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            {/* Text */}
            <div className="max-w-xl">
              <span className="section-eyebrow">Kostenloser Einstieg</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-bright mt-3 mb-4">
                {title}
              </h2>
              <p className="text-ink-body leading-relaxed">{description}</p>

              <div className="flex flex-wrap gap-4 mt-6">
                {[
                  "Kostenlos & unverbindlich",
                  "Antwort innerhalb 24h",
                  "dena-zertifiziert",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-ink-muted">
                    <svg className="w-4 h-4 text-electric shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 shrink-0 w-full lg:w-auto">
              <Link href={primaryHref} className="btn-electric justify-center text-sm py-4 px-8">
                {primaryLabel}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
              <Link href={secondaryHref} className="btn-outline justify-center text-sm py-3.5">
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
