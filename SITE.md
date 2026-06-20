---
stitch-project-id: IBT-clean-corporate
---
# Project Vision & Constitution — Ingenieurbüro Tonn

> **AGENT INSTRUCTION:** Read this file before every iteration. It serves as the project's "Long-Term Memory." If `next-prompt.md` is empty, pick the highest priority item from Section 5 OR invent a new page that fits the project vision.

---

## 1. Core Identity

* **Project Name:** Ingenieurbüro Tonn — IBT Clean & Corporate
* **Mission:** Professioneller Webauftritt für einen Energieberater & Fachplaner, der Heizlastberechnungen, hydraulische Abgleiche, GEG-Nachweise und Energieberatung aus einer Hand anbietet.
* **Target Audience:** Drei gleichwertige Zielgruppen — Heizungsbauer/SHK-Betriebe, Architekten/Planer, Eigentümer/Bauherren.
* **Voice:** Präzise, technisch kompetent, sachlich — aber nicht kalt. Keine Öko-Rhetorik, keine Worthülsen. Konkrete Lieferleistungen, klare Zahlen.
* **Positioning:** "Die technische Schnittstelle zwischen Energieberatung, Bauphysik und ausführendem Handwerk."

---

## 2. Visual Language — "Clean & Corporate"

*Strikt diese Sprache beim Prompting in Stitch verwenden. Kein Code.*

### Die "Vibe"-Adjektive:
* *Primär:* **Präzise** — klare Rasterteilung, scharfe Kanten, technische Seriosität
* *Sekundär:* **Vertrauenswürdig** — ruhige Farbpalette, großzügiges Weißraum-Layout
* *Tertiär:* **Kompetent** — dichte Informationshierarchie, keine leeren Versprechen

### Farbphilosophie (Semantisch):
* **Primär:** Tiefes Petrol/Blaugrün `#1B4F5A` — steht für Präzision + Nachhaltigkeit
* **Akzent:** Warmes Amber `#C47E1A` — Energie, Wärme, Entscheidung (CTAs)
* **Neutral:** Anthrazit `#2C2C2C` für Überschriften, `#6B6B6B` für Fließtext
* **Hintergrund:** Reines Weiß `#FFFFFF` mit Hellgrau-Sektionen `#F5F6F7`
* **Kein** helles Grün, kein Solarmodul-Orange, kein Stockfoto-Blau

### Typografie:
* **Headline:** DM Sans Bold oder Inter 700 — geometrisch, technisch, kompakt
* **Body:** Inter Regular, 16px Basis, 1.65 Zeilenhöhe
* Hierarchie ausschließlich über Größe und Gewicht — keine Dekoration

### Bildwelt:
* Echte Fotos: Jonas Tonn beim Arbeiten (Vor-Ort-Messung, Software, Beratungsgespräch)
* Keine Stockbilder glücklicher Familien vor gedämmten Häusern
* Screenshots/Ausdrucke von Berechnungsberichten als Vertrauensbeweis
* Technische Visualisierungen (Isothermen, Heizlastschemata) als grafische Elemente

---

## 3. Seitenstruktur & Navigation

* **Root:** `site/public/`
* **Globale Navigation:** Logo, Lösungen, Über mich, Referenzen, Kontakt
* **Globaler Footer:** Qualifikationen, Zertifikate, Impressum, Datenschutz, LinkedIn

---

## 4. Live-Sitemap (aktueller Stand)

* [ ] `index.html` — Startseite: Hero + Zielgruppen-Navigation + Social Proof
* [ ] `loesungen.html` — Vollständige Leistungsseite (strukturiert nach Zielgruppen)
* [ ] `heizlast.html` — Landingpage: Heizlastberechnung für Handwerker
* [ ] `geg-nachweis.html` — Landingpage: GEG-Nachweis für Architekten
* [ ] `energieberatung.html` — Landingpage: Energieberatung für Eigentümer
* [ ] `ueber-mich.html` — Über Jonas Tonn: Werdegang, Qualifikationen, Philosophie
* [ ] `referenzen.html` — Referenzprojekte + Kundenstimmen
* [ ] `kontakt.html` — Kontaktformular + Click-to-Call + Terminbuchung

---

## 5. Roadmap (Backlog)

### Höchste Priorität
- [ ] **Startseite** (`index.html`) — Hero mit klarer Positionierung, Zielgruppen-Einstieg
- [ ] **Lösungen-Hauptseite** (`loesungen.html`) — Vollständiger Leistungsüberblick

### Mittlere Priorität
- [ ] **Heizlast-Landingpage** — für Handwerker-SEO (`heizlastberechnung-[region].html`)
- [ ] **Über-mich-Seite** — Vertrauen durch Persönlichkeit
- [ ] **Referenzseite** — 3–5 echte Projektbeschreibungen mit Ergebnis

### Niedrige Priorität
- [ ] **FAQ-Seite** — häufigste Fragen zu GEG, Heizlast, BEG
- [ ] **Blog/Wissen** — SEO-Artikel (z.B. "Hydraulischer Abgleich erklärt")

---

## 6. Lösungen — Konkreter Seiteninhalt

> Dies ist die inhaltlich wichtigste Seite neben der Startseite. Strukturiert nach Zielgruppen, nicht nach Fachbegriffen. Jede Leistung hat: Headline → konkreten Nutzen → Lieferumfang → Turnaround-Zeit → CTA.

---

### 6.1 Lösungen für Heizungsbauer & SHK-Betriebe

**Ziel:** Schnelle, normgerechte Berechnungsunterlagen — ohne eigenes Ingenieurteam.

#### Heizlastberechnung nach DIN EN 12831
* **Was du bekommst:** Vollständige Raumheizlast-Berechnung inkl. Auslegungsempfehlung je Heizkörper/Flächenheizung, Normaußentemperatur für deinen Standort, Gebäudehüllenwerte aus Bauplänen oder Aufmaß
* **Warum das wichtig ist:** Ohne normgerechte Heizlast keine BEG-Förderung, kein hydraulischer Abgleich nach Verfahren B — Handwerker haften bei falscher Auslegung
* **Lieferumfang:** PDF-Bericht (DINV-konform), raumweise Tabelle, Zusammenfassung für den Kunden
* **Turnaround:** 48 Stunden nach Eingang der Unterlagen
* **Preisorientierung:** ab 180 € (Einfamilienhaus), Staffelrabatt für Partnerbetriebe ab 5 Aufträgen/Monat
* **CTA:** "Unterlagen einsenden → Angebot in 2h"

#### Hydraulischer Abgleich — Verfahren A & B
* **Was du bekommst:** Berechnung der Sollvolumenströme je Heizkreis (Verfahren A nach Herstellerkennlinie oder Verfahren B nach DIN EN 12831), Einstellprotokolle für Thermostatventile und Strangregulierung, BAFA-konformes Nachweisdokument
* **Warum das wichtig ist:** Seit 2023 Pflicht bei Heizungstausch mit BEG-Förderung — ohne Nachweis kein Fördermittelabruf. Viele SHK-Betriebe können diesen Nachweis nicht selbst erbringen.
* **Turnaround:** 24–48 Stunden
* **CTA:** "Jetzt Verfahren anfragen"

#### Rohrnetzberechnung & Druckverlustberechnung
* **Was du bekommst:** Rohrdimensionierung für neue Leitungsführung, Druckverlustberechnung für Pumpenauslegung, Empfehlung Umwälzpumpe (Effizienzklasse A++)
* **Einsatz:** Neubau-Heizungsinstallation, Umbau/Erweiterung Bestandsanlage
* **Turnaround:** 3 Werktage

---

### 6.2 Lösungen für Architekten & Planer

**Ziel:** Normgerechte Energienachweise, pünktlich geliefert — passgenau zur Planungsphase.

#### Wärme­schutz­nachweis nach GEG (§ 10, § 14, § 15)
* **Was du bekommst:** Berechnung des Jahres-Primärenergiebedarfs (QP) und Transmissionswärmeverlust (HT'), Nachweis sommerlicher Wärmeschutz nach DIN 4108-2, Nachweisdokument zur Baugenehmigung
* **Besonderheit:** Übergabe in strukturierter Form mit Variantenvergleich (z.B. Dämmstärken vs. Fenstergüte) — du entscheidest, nicht das Programm
* **Einsatz:** Neubau Wohngebäude + Nichtwohngebäude, Erweiterungen und Umbauten mit GEG-Relevanz
* **Lieferformate:** PDF-Bericht + XLSX-Eingabeliste für deine Dokumentation
* **Einbindung:** HOAI LP 1 (Grundlagenermittlung, Zielwerte), LP 3–4 (Vorentwurf/Genehmigungsplanung), LP 5 (Ausführungsplanung — finale Nachweise)
* **Turnaround:** 5 Werktage (einfaches EFH), 10 Werktage (NWG/Sonderbau)
* **CTA:** "Planungsunterlagen senden → Rückmeldung in 24h"

#### U-Wert-Berechnungen & Bauteilaufbauten
* **Was du bekommst:** Berechnung aller thermisch relevanten Bauteile nach DIN EN ISO 6946, Nachweis Tauwasserausfall nach Glaser-Verfahren (DIN 4108-3), Empfehlung Bauteilaufbau bei Unstimmigkeiten
* **Typische Anlässe:** Baustoffe noch nicht festgelegt, Alternativprodukte prüfen, Gutachtenanforderung des Bauamts
* **CTA:** "Bauteilaufbau anfragen"

#### Wärmebrücken­berechnung nach DIN EN ISO 10211
* **Was du bekommst:** Numerische Berechnung von Psi-Werten (Ψ) für Sonderkonstruktionen die nicht im Wärmebrückenkatalog abgedeckt sind, ISO-Thermendarstellung, Einbauerklärung für den GEG-Nachweis
* **Einsatz:** Attiken, Loggien, Balkonplatten, Sonderfenstereinbau, Fassadenanker
* **Turnaround:** 3–5 Werktage je Anschlussdetail
* **CTA:** "Detail einreichen → Psi-Wert berechnen lassen"

#### Blower-Door-Test & Luftdichtheits­planung
* **Was du bekommst:** n50-Messung nach DIN EN ISO 9972 (Druckdifferenzprüfung), Leckageortung mit Infrarotkamera (optional), Messprotokoll zur Vorlage beim Bauherrn und im GEG-Nachweis
* **Einbindung:** LP 8 (Bauüberwachung) — Messung bei fertig verputzter, noch unverkleideter Konstruktion

---

### 6.3 Lösungen für Eigentümer & Bauherren

**Ziel:** Mehr Klarheit, mehr Förderung — ohne technischen Stress.

#### Energieberatung Wohngebäude (BAFA-gefördert)
* **Was du bekommst:** Vor-Ort-Analyse des Ist-Zustands (Gebäudehülle, Heizung, Lüftung), schriftlicher Beratungsbericht mit konkreten Maßnahmen und Prioritätenreihenfolge, Fördermittelübersicht (BEG, KfW, Landesförderung)
* **Besonderheit:** BAFA-Zuschuss von bis zu 80% der Beratungskosten möglich — du zahlst oft weniger als 200 €
* **Lieferzeit:** Bericht innerhalb von 2 Wochen nach Vor-Ort-Termin
* **CTA:** "Kostenfreies Erstgespräch buchen"

#### Individueller Sanierungsfahrplan (iSFP)
* **Was du bekommst:** Strukturierter Stufenplan für die energetische Sanierung über mehrere Jahre, Berechnung der erreichbaren Energieeinsparung je Maßnahme, 5% Extra-Förderbonus bei BEG-Maßnahmen wenn iSFP vorliegt
* **Warum das wichtig ist:** Mit iSFP sicherst du dir höhere Fördersätze und sanierst in einem sinnvollen Tempo — kein finanzieller Druck, kein Fehler bei der Reihenfolge
* **Preis:** ab 400 € nach BAFA-Abzug (je nach Gebäudegröße)
* **CTA:** "iSFP anfragen — inkl. Fördercheck"

#### Energieausweis (Bedarfs- & Verbrauchsausweis)
* **Was du bekommst:** Gesetzlich vorgeschriebener Energieausweis für Verkauf, Vermietung oder Neubau, wahlweise Bedarfsausweis (genauer, für Sanierung wichtig) oder Verbrauchsausweis (günstiger, für Routineabruf)
* **Hinweis:** Beim Hausverkauf Pflicht — Bußgeld bis 10.000 € bei fehlendem Ausweis
* **Turnaround:** 3 Werktage
* **CTA:** "Energieausweis beauftragen"

#### Fördermittelberatung BEG / KfW / BAFA
* **Was du bekommst:** Überblick über alle aktuell verfügbaren Förderprogramme für dein Gebäude und deine geplanten Maßnahmen, Empfehlung welche Kombination den größten Effekt hat, Unterstützung beim Antragsweg
* **Besonderheit:** Förderprogramme ändern sich laufend (BEG 2025/2026) — laufende Aktualisierung ist Pflicht
* **CTA:** "Förderpotenzial prüfen lassen"

---

## 7. Differenzierung — Was IBT von Mitbewerbern unterscheidet

*(Für Hero-Texte, Über-mich-Seite und Positionierungsaussagen nutzen)*

| Merkmal | Mitbewerber (typisch) | IBT Tonn |
|---|---|---|
| Heizlastberechnung für Handwerker | kaum sichtbar oder nur als Randleistung | eigenständige Landingpage, Turnaround 48h kommuniziert |
| Preistransparenz | keine Preisangaben | Preisorientierung + Staffelrabatt für B2B |
| Zielgruppen-Trennung | alles auf einer Seite | drei klare Einstiegspunkte je Besucher |
| Lieferzeiten | nicht kommuniziert | konkret benannt bei jeder Leistung |
| Technische Spezialleistungen (Wärmebrücken, Blower-Door) | kaum sichtbar | eigenständig beschrieben mit Einsatzfall |
| GEG-Aktualität | veraltet oder fehlt | Aktualitätsversprechen "immer auf Stand GEG + BEG" |

---

## 8. SEO-Fokus-Keywords

*(Je Landingpage 1 Primär-Keyword + 2–3 Long-Tail-Varianten)*

* `heizlastberechnung [region]` / `heizlast din 12831 handwerker`
* `hydraulischer abgleich berechnung beauftragen`
* `geg nachweis architekt` / `wärmeschutznachweis neubau`
* `energieberatung bafa gefördert [region]`
* `wärmebrückenberechnung psi-wert`
* `isfp individueller sanierungsfahrplan`
* `u-wert berechnung bauteil`

---

## 9. Rules of Engagement

1. Keine generischen Stockbilder — Echtfotos oder technische Visualisierungen.
2. Jede Leistung hat einen konkreten Lieferumfang, eine Turnaround-Zeit und einen CTA.
3. Preisangaben (Orientierungswerte) sind ein Wettbewerbsvorteil — immer nennen.
4. Zielgruppen nicht mischen — klare Einstiegspunkte.
5. Immer auf dem aktuellen Stand von GEG und BEG bleiben (Jahreszahl im Footer oder im Leistungstext).
6. `next-prompt.md` vor Abschluss jeder Iteration aktualisieren.
