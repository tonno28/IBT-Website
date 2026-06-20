# Claude Code Prompt — IBT Website Build

## Kontext

Ich baue die Website für mein Ingenieurbüro **IBT Ingenieurbüro Tonn**. Ich bin Energieberater (BAFA/KfW, dena-gelistet, §88 GEG) und Ingenieur. Die Website soll mein Zwei-Säulen-Modell abbilden: **Energieberatung** und **Ingenieurleistungen**.

## Referenz-Dokumente

Lies diese Dokumente **vor dem Start** und nutze sie als Grundlage:

1. **`docs/01-konkurrenzanalyse.md`** — Analyse von 7 Wettbewerbern im Raum Köln/Bonn/Rheinbach. Enthält deren Stärken, Schwächen, Design-Bewertung und die 8 wichtigsten Erkenntnisse für unsere Positionierung.

2. **`docs/02-seitenstruktur.md`** — Komplette Seitenstruktur (Sitemap), Positionierung, Design-Richtlinien, Startseiten-Aufbau und Differenzierungsmerkmale. Das ist die architektonische Grundlage.

3. **`docs/03-foerderrechner-spec.md`** — Detaillierte Spezifikation des interaktiven BEG-Förderrechners inkl. BEG-Logik, Flow (4 Schritte), Boni-System und analysierte Beispiele.

4. **`components/foerderrechner-ibt.jsx`** — Funktionsfähiger React-Prototyp des Förderrechners. Kann als Ausgangsbasis verwendet und in die Next.js-Struktur integriert werden.

## Aufgabe

Erstelle eine **Next.js 14+ (App Router)** Website mit folgender Struktur:

```
src/
├── app/
│   ├── layout.tsx                    → Root Layout (Dark Theme, Fonts, Meta)
│   ├── page.tsx                      → Startseite
│   ├── energieberatung/
│   │   ├── page.tsx                  → Übersicht Energieberatung
│   │   ├── isfp/page.tsx
│   │   ├── foerderberatung/page.tsx
│   │   ├── energieausweis/page.tsx
│   │   ├── baubegleitung/page.tsx
│   │   └── effizienzhaus/page.tsx
│   ├── ingenieurleistungen/
│   │   ├── page.tsx                  → Übersicht Ingenieurleistungen
│   │   ├── heizlast/page.tsx
│   │   ├── bauteil/page.tsx
│   │   ├── taupunkt/page.tsx
│   │   ├── lueftung/page.tsx
│   │   └── waermebruecken/page.tsx
│   ├── foerderrechner/page.tsx       → Förderrechner (aus Prototyp)
│   ├── ueber-mich/page.tsx
│   ├── blog/page.tsx
│   ├── kontakt/page.tsx
│   ├── region/
│   │   ├── koeln/page.tsx
│   │   ├── rheinbach/page.tsx
│   │   └── bonn/page.tsx
│   ├── impressum/page.tsx
│   └── datenschutz/page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── LeistungenOverview.tsx
│   ├── Foerderrechner.tsx            → Aus Prototyp portiert
│   ├── ProcessTimeline.tsx           → "So läuft's ab" (5 Schritte)
│   ├── Testimonials.tsx
│   ├── CTABanner.tsx
│   └── LeistungCard.tsx
└── styles/
    └── globals.css                   → CSS Variables, Dark Theme
```

## Design-Vorgaben

- **Farbpalette:**
  - Background: `#0e1117` (primary), `#16181f` (cards), `#1a2a2e` (accent surfaces)
  - Petrol/Teal: `#0F6E56` (dark), `#1D9E75` (mid), `#34d399` (light/success)
  - Amber: `#D4942A` (primary accent), `#e0a43a` (hover)
  - Text: `#f4f4f5` (primary), `#a1a1aa` (secondary), `#71717a` (muted), `#52525b` (hint)
  - Borders: `#26282f`
- **KEIN Grün im ökologischen Sinne** — Petrol ist technisch, nicht "öko"
- **Dark Theme** durchgehend — signalisiert technische Kompetenz
- **Typografie:** Markante Display-Font (z.B. Instrument Sans oder ähnlich), Monospace für Zahlen (DM Mono)
- **Tonalität:** Direkt, kompetent, nicht missionarisch. Kein "gemeinsam die Welt retten".

## Inhaltliche Positionierung

- **Claim:** „Energieberatung und Ingenieurleistungen aus einer Hand"
- **Über mich:** Jonas Tonn, Teamleiter bei Siemens AG (Köln), nebenberuflich IBT. Qualifiziert unter §88 GEG, BEG-akkreditiert (BAFA/KfW).
- **Zwei Zielgruppen, ein Ansprechpartner:**
  - Endkunden → Energieberatung (iSFP, Förderung, Ausweise)
  - Fachleute (Handwerker, Architekten) → Ingenieurleistungen (Heizlast, Bauteil, Taupunkt)

## Wichtige Regeln

1. Lies **alle 3 Referenz-Dokumente** bevor du anfängst
2. Starte mit der **Startseite** und dem **Layout** (Header/Footer)
3. Integriere den **Förderrechner** als eigenständige Seite UND als Teaser auf der Startseite
4. Jede Leistungsseite braucht: Beschreibung, Ablauf, Kosten-Indikation, CTA
5. **Responsive** — Mobile first
6. **SEO:** Sinnvolle Meta-Tags, strukturierte Daten, semantisches HTML
7. Regionale Seiten (/region/*) mit lokalen Keywords für Köln, Bonn, Rheinbach etc.
