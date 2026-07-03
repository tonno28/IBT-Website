import Reveal from "./Reveal";

interface Stat {
  value: string;
  label: string;
}

interface StatsBannerProps {
  stats: [Stat, Stat, Stat];
  note?: string;
}

/**
 * Living stats strip — angelehnt an IBD Group's "300+ Projekte realisiert".
 * Werte kommen als Props rein und sollen regelmäßig aktualisiert werden,
 * sobald neue Projekte abgeschlossen sind (siehe Aufrufer-Seite).
 */
export default function StatsBanner({ stats, note }: StatsBannerProps) {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-bg-card border-y border-zinc-border">
      <div className="container-max">
        <Reveal className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="stat-num text-3xl sm:text-4xl font-bold text-amber mb-1">{s.value}</div>
              <div className="text-xs sm:text-sm text-zinc-muted">{s.label}</div>
            </div>
          ))}
        </Reveal>
        {note && <p className="text-center text-xs text-zinc-hint mt-6">{note}</p>}
      </div>
    </section>
  );
}
