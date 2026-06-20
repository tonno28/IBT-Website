# IBT Website — Seitenstruktur & Positionierung

## Positionierung

**Claim-Vorschlag:** „Energieberatung und Ingenieurleistungen aus einer Hand — von der Förderung bis zur technischen Berechnung."

**Kern-USP:** Technische Schnittstelle zwischen Energieberatung, Bauphysik und ausführendem Handwerk. Jonas Tonn vereint Ingenieurwissen mit Praxisverständnis der Gewerke. Das hat keiner der 7 analysierten Wettbewerber so klar.

**Zielgruppen:**
- Eigenheimbesitzer (Sanierung, Förderung, Energieausweis)
- MFH-Eigentümer / Hausverwaltungen (iSFP, Effizienzhaus)
- Handwerksbetriebe & Architekten (Ingenieurleistungen als Zuarbeit)

---

## Design-Richtlinien

- **Farbpalette:** Dark Theme mit Petrol (#0F6E56 / #1D9E75) und Amber (#D4942A) — bewusst kein Grün
- **Tonalität:** Technisch-kompetent, direkt, nicht ökologisch-missionarisch
- **Tech-Stack:** Next.js / React (Performance + SEO-Vorteile gegenüber WordPress)
- **Typografie:** Markante Displayfont + saubere Monospace für Zahlen/Daten

---

## Seitenstruktur

```
/                               → Startseite (Hero + Leistungsübersicht + Social Proof + Förderrechner-Teaser)
│
├── /energieberatung            → Übersichtsseite Energieberatung
│   ├── /energieberatung/isfp                → Individueller Sanierungsfahrplan
│   ├── /energieberatung/foerderberatung     → Förderberatung (BEG EM, KfW)
│   ├── /energieberatung/energieausweis      → Verbrauchs- & Bedarfsausweis
│   ├── /energieberatung/baubegleitung       → Fachplanung & Baubegleitung
│   └── /energieberatung/effizienzhaus       → Effizienzhaus-Bilanzierung
│
├── /ingenieurleistungen        → Übersichtsseite Ingenieurleistungen
│   ├── /ingenieurleistungen/heizlast        → Heizlastberechnung (DIN 12831)
│   ├── /ingenieurleistungen/bauteil         → Bauteilberechnung (U-Wert)
│   ├── /ingenieurleistungen/taupunkt        → Taupunktnachweis
│   ├── /ingenieurleistungen/lueftung        → Lüftungskonzepte
│   └── /ingenieurleistungen/waermebruecken  → Wärmebrückenberechnung
│
├── /foerderrechner             → Interaktiver BEG-Förderrechner
│
├── /ueber-mich                 → Persönliche Vorstellung, Qualifikationen, Vita
│
├── /blog                       → Content-Marketing (GEG-Updates, BEG-Änderungen, Praxistipps)
│
├── /region                     → Regionale SEO-Landingpages
│   ├── /region/koeln
│   ├── /region/rheinbach
│   ├── /region/bonn
│   ├── /region/meckenheim
│   └── /region/euskirchen
│
├── /kontakt                    → Kontaktformular mit Anliegen-Dropdown
│
├── /impressum
└── /datenschutz
```

---

## Startseite — Aufbau

1. **Hero:** Claim + 2 CTA-Buttons ("Energieberatung" / "Ingenieurleistungen") + Hintergrundbild oder abstrakte Grafik
2. **Leistungsübersicht:** 2 Spalten — Energieberatung (Teal) | Ingenieurleistungen (Amber/Coral)
3. **So läuft's ab:** 4-5 Schritte als visuelle Timeline (Erstgespräch → Bestandsaufnahme → Berechnung/Konzept → Antragstellung → Baubegleitung)
4. **Förderrechner-Teaser:** Kurzversion oder Link zum vollständigen Rechner
5. **Social Proof:** Kundenzitate / Google-Bewertungen
6. **Über mich (kurz):** Foto, Qualifikationen, Link zu /ueber-mich
7. **CTA-Banner:** "Kostenlose Erstberatung anfragen"

---

## Differenzierungsmerkmale (was kein Wettbewerber hat)

- **Preistransparenz:** „Ab X € für ein EFH" — baut sofort Vertrauen auf
- **Interaktiver Förderrechner:** Direkt auf der Seite, nicht als Excel-Download
- **Prozess-Visualisierung:** „So läuft's ab" in 4-5 Schritten mit Timeline
- **Blog mit echtem Mehrwert:** GEG-Änderungen, BEG-Updates, Praxistipps
- **Referenzprojekte mit Vorher/Nachher:** Keiner der Wettbewerber zeigt echte Projekte
- **Zwei-Säulen-Modell:** Klare Trennung Energieberatung vs. Ingenieurleistungen
