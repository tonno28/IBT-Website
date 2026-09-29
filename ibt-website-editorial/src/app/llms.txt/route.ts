import { energieberatungLeistungen, ingenieurLeistungen } from "@/lib/leistungskarten";
import { faqs } from "@/lib/faq";

/**
 * /llms.txt: Kurzprofil in Klartext für KI-Suchen (Vorschlag llmstxt.org).
 * Wird beim Build aus denselben Daten erzeugt wie die Seiten selbst, damit
 * Preise und Leistungen nirgends doppelt gepflegt werden.
 */
export const dynamic = "force-static";

const BASIS = "https://ib-tonn.de";

export function GET() {
  const liste = (ls: { href: string; title: string; desc: string; price: string }[]) =>
    ls.map((l) => `- [${l.title}](${BASIS}${l.href}/): ${l.desc} Preis: ${l.price}.`).join("\n");

  const text = `# IBT Ingenieurbüro Tonn

> Unabhängige Energieberatung und technische Ingenieurleistungen für Wohngebäude in der Region Köln, Aachen und Düren. Inhaber ist Jonas Tonn, Energieberater und Ingenieur (B. Eng. Smart Building Engineering, FH Aachen), qualifiziert nach § 88 GEG und gelistet in der Energieeffizienz-Expertenliste der dena für BAFA- und KfW-Förderung.

Energieberater und Ingenieur in einer Person: Förderanträge (BAFA, KfW), Sanierungsfahrplan und Energieausweis ebenso wie Heizlast, U-Wert, Taupunkt und Lüftungskonzept nach DIN-Normen. Keine Bindung an Hersteller oder Handwerksbetriebe, keine Provisionen. Alle Preise sind Endpreise (Kleinunternehmer nach § 19 UStG, keine Umsatzsteuer). Das Erstgespräch ist kostenlos.

## Kontakt

- Adresse: Friedhofstr. 15, 52399 Merzenich (Kreis Düren, Nordrhein-Westfalen)
- Telefon: 0152 31060247
- E-Mail: info@ib-tonn.de
- Einsatzgebiet: Köln, Aachen, Düren und Umgebung
- [Kontaktformular](${BASIS}/kontakt/)

## Energieberatung (für Eigentümer von Wohngebäuden)

${liste(energieberatungLeistungen)}

## Ingenieurleistungen (für Handwerk, Planer und Hausverwaltungen)

${liste(ingenieurLeistungen)}

## Werkzeuge

- [BEG-Förderrechner 2026](${BASIS}/foerderrechner/): Schätzung von Förderhöhe und Beratungshonorar nach der BEG-Reform vom 21.07.2026.

## Häufige Fragen

${faqs.map((f) => `### ${f.question}\n\n${f.answer}`).join("\n\n")}
`;

  return new Response(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
