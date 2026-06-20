import Link from "next/link";
import Image from "next/image";

const leistungen = [
  { label: "iSFP Sanierungsfahrplan", href: "/energieberatung/isfp" },
  { label: "Förderberatung BEG", href: "/energieberatung/foerderberatung" },
  { label: "Energieausweis", href: "/energieberatung/energieausweis" },
  { label: "Baubegleitung", href: "/energieberatung/baubegleitung" },
  { label: "Heizlastberechnung", href: "/ingenieurleistungen/heizlast" },
  { label: "Bauteilberechnung", href: "/ingenieurleistungen/bauteil" },
  { label: "Taupunktnachweis", href: "/ingenieurleistungen/taupunkt" },
  { label: "Lüftungskonzept", href: "/ingenieurleistungen/lueftung" },
];

const regions = [
  { label: "Energieberater Köln", href: "/region/koeln" },
  { label: "Energieberater Bonn", href: "/region/bonn" },
  { label: "Energieberater Rheinbach", href: "/region/rheinbach" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-border bg-bg-card mt-20">
      <div className="container-max section-padding pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <div className="bg-white rounded-lg px-2 py-1 inline-block">
                <Image
                  src="/logo.jpg"
                  alt="IBT Ingenieurbüro Tonn"
                  width={130}
                  height={44}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-zinc-muted leading-relaxed mb-4">
              Energieberatung und Ingenieurleistungen aus einer Hand. Qualifiziert nach §88 GEG,
              dena-gelistet, BAFA/KfW-akkreditiert.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="badge-teal">dena-gelistet</span>
              <span className="badge-amber">BAFA/KfW</span>
              <span className="badge-teal">§88 GEG</span>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-primary mb-4">Leistungen</h3>
            <ul className="space-y-2">
              {leistungen.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-zinc-muted hover:text-zinc-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Region */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-primary mb-4">Region</h3>
            <ul className="space-y-2">
              {regions.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="text-sm text-zinc-muted hover:text-zinc-primary transition-colors"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-zinc-primary mb-4">Tools</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/foerderrechner"
                    className="text-sm text-zinc-muted hover:text-zinc-primary transition-colors"
                  >
                    BEG-Förderrechner
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-sm text-zinc-muted hover:text-zinc-primary transition-colors"
                  >
                    Blog &amp; Ratgeber
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-primary mb-4">Kontakt</h3>
            <div className="space-y-3 text-sm text-zinc-muted">
              <div>
                <div className="text-zinc-secondary font-medium">Jonas Tonn</div>
                <div>IBT Ingenieurbüro Tonn</div>
              </div>
              <div>
                <a
                  href="mailto:info@ibt-tonn.de"
                  className="hover:text-amber transition-colors"
                >
                  info@ibt-tonn.de
                </a>
              </div>
              <div>
                <a
                  href="tel:+4922514839"
                  className="hover:text-amber transition-colors"
                >
                  +49 (0) 2251 48 39
                </a>
              </div>
              <div className="text-zinc-hint text-xs">
                Rheinbach / Köln / Bonn
              </div>
            </div>
            <Link href="/kontakt" className="btn-primary mt-5 text-sm py-2.5">
              Beratung anfragen
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-zinc-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-hint">
          <div>
            © {new Date().getFullYear()} IBT Ingenieurbüro Tonn · Jonas Tonn · Alle Rechte vorbehalten
          </div>
          <div className="flex gap-4">
            <Link href="/impressum" className="hover:text-zinc-muted transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-zinc-muted transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
