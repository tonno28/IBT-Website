import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — GEG, BEG & Energieberatung Ratgeber",
  description:
    "Aktuelles zu GEG, BEG-Änderungen und Energieberatung: Praxistipps, Förder-Updates und Erklärungen von Jonas Tonn, IBT Ingenieurbüro Tonn.",
};

const posts = [
  {
    slug: "beg-aenderungen-2025",
    title: "BEG 2025: Was hat sich geändert?",
    date: "2025-03-15",
    category: "BEG / Förderung",
    excerpt: "Die Bundesförderung für effiziente Gebäude wurde zum Jahresbeginn 2025 angepasst. Welche Änderungen bei Heizungsförderung und Gebäudehülle relevant sind — und was das für Ihren Förderantrag bedeutet.",
  },
  {
    slug: "isfp-bonus-erklaert",
    title: "Der iSFP-Bonus: Warum sich der Sanierungsfahrplan fast immer lohnt",
    date: "2025-02-20",
    category: "iSFP",
    excerpt: "Mit einem individuellen Sanierungsfahrplan erhalten Sie +5 % auf jede BEG-Einzelmaßnahme. Klingt klein — kann bei mehreren Maßnahmen mehrere tausend Euro ausmachen. Eine Rechnung.",
  },
  {
    slug: "waermepumpe-heizlast",
    title: "Wärmepumpe ohne Heizlastberechnung — ein häufiger Fehler",
    date: "2025-01-10",
    category: "Heizung",
    excerpt: "Zu viele Wärmepumpen laufen ineffizient, weil sie falsch dimensioniert wurden. Die Ursache: keine normgerechte Heizlastberechnung. Was zu beachten ist und warum die DIN EN 12831 unverzichtbar ist.",
  },
  {
    slug: "geg-2024-ueberblick",
    title: "GEG 2024 — Was Hauseigentümer wissen müssen",
    date: "2024-12-05",
    category: "GEG",
    excerpt: "Das Gebäudeenergiegesetz wurde 2024 erheblich überarbeitet. Neue Anforderungen an Heizungen, neue Effizienzklassen, neue Ausweispflichten. Der Überblick für Bestandsgebäude.",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-void relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-30" />
        <div className="container-max relative">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Blog & Ratgeber</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-ink-bright mb-4">
              Aktuelles zu Energie & Förderung
            </h1>
            <p className="text-ink-muted leading-relaxed">
              Praxistipps, GEG-Updates, BEG-Änderungen — klar erklärt, ohne Marketing-Sprache.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-void pt-8">
        <div className="container-max max-w-4xl">
          <div className="space-y-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="card p-6 group"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="badge-electric">{post.category}</span>
                  <time className="text-xs text-ink-ghost font-mono">
                    {new Date(post.date).toLocaleDateString("de-DE", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="text-lg font-semibold text-ink-bright mb-2 group-hover:text-electric transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-ink-muted leading-relaxed mb-4">{post.excerpt}</p>
                <span className="text-xs font-medium text-electric">
                  Artikel lesen →
                </span>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="card p-8">
              <h3 className="font-semibold text-ink-bright mb-2">Mehr Beiträge in Kürze</h3>
              <p className="text-sm text-ink-muted">
                Ich schreibe regelmäßig über Energieberatung, BEG-Updates und technische
                Themen. Für Updates: Kontakt aufnehmen oder direkt anfragen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
