import type { MetadataRoute } from "next";

const BASIS = "https://ib-tonn.de";

/**
 * Alle öffentlichen Seiten. Neue Seiten hier eintragen, sonst fehlen sie in der
 * Sitemap. Ordner mit Unterstrich (z. B. _blog) sind bewusst nicht dabei.
 */
const SEITEN: { pfad: string; prio: number }[] = [
  { pfad: "/", prio: 1.0 },
  { pfad: "/energieberatung/", prio: 0.9 },
  { pfad: "/energieberatung/isfp/", prio: 0.8 },
  { pfad: "/energieberatung/foerderberatung/", prio: 0.8 },
  { pfad: "/energieberatung/energieausweis/", prio: 0.8 },
  { pfad: "/energieberatung/baubegleitung/", prio: 0.8 },
  { pfad: "/energieberatung/effizienzhaus/", prio: 0.7 },
  { pfad: "/ingenieurleistungen/", prio: 0.9 },
  { pfad: "/ingenieurleistungen/heizlast/", prio: 0.8 },
  { pfad: "/ingenieurleistungen/bauteil/", prio: 0.7 },
  { pfad: "/ingenieurleistungen/taupunkt/", prio: 0.7 },
  { pfad: "/ingenieurleistungen/lueftung/", prio: 0.7 },
  { pfad: "/ingenieurleistungen/waermebruecken/", prio: 0.7 },
  { pfad: "/foerderrechner/", prio: 0.9 },
  { pfad: "/ueber-mich/", prio: 0.6 },
  { pfad: "/kontakt/", prio: 0.8 },
  { pfad: "/impressum/", prio: 0.2 },
  { pfad: "/datenschutz/", prio: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return SEITEN.map((s) => ({
    url: BASIS + s.pfad,
    changeFrequency: s.prio >= 0.9 ? "weekly" : "monthly",
    priority: s.prio,
  }));
}
