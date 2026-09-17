# Website IBT — Checkliste

**Stand: 17.09.2026** · Diese Datei ist der Leitfaden. Sie wird bei jeder Arbeitssitzung
aktualisiert, damit jederzeit klar ist, wo wir stehen und was als Nächstes dran ist.
`[x]` erledigt · `[ ]` offen · `[?]` braucht eine Entscheidung von Jonas

---

## Wo stehen wir

**Phase 1: Design und Text fertigstellen.** Die Hauptseite (`ibt-website-editorial/`) baut
sauber: 21 Seiten plus Sitemap, robots.txt und OG-Banner, keine Fehler. Der Text aller 18
Seiten ist durchgesehen und korrigiert. Was jetzt noch fehlt, hängt an Entscheidungen und
Material von Jonas (siehe `[?]`).

**Phase 2: Veröffentlichung** beginnt, wenn Phase 1 abgehakt ist. Live auf ib-tonn.de steht
bis dahin die Coming-Soon-Seite.

---

## Phase 1 — Design und Text

### Erledigt
- [x] Farb-Hierarchie: Tannengrün ist die eine Aktionsfarbe, Ocker nur leiser Sektionsmarker
- [x] Headline-Muster sitewide vereinheitlicht: Name fett schwarz, Zusatz-/Normzeile im
      mittleren Gewicht abgesetzt. Kein Wort mehr über die Zeile gebrochen
      (Wärmebrücken-/berechnung → „Wärmebrücken / Ψ-Werte nach DIN EN ISO 10211")
- [x] Text aller 18 Seiten durchgesehen. Korrigiert:
      · 80-%-Fußnote im Hero: Einkommensgrenze war falsch (40.000 statt 30.000 €; 40.000 €
        gelten nur mit Kind im Haushalt, so wie es der Rechner rechnet)
      · Baubegleitung-Staffel präzisiert (5.000 € für 1–2 WE, ab 3 WE 2.000 €/WE, max. 20.000 €)
      · Energieausweis: „weniger als 4 WE" → „bis 4 WE, Bauantrag vor 1977"
      · Bußgeld Energieausweis: 15.000 € (alte EnEV) → 10.000 € nach § 108 GEG **[bitte gegenprüfen]**
      · Tippfehler: „Antragsstellung", „umfanggreichen"; „(iSFP/BEG)" → „(BEG)";
        „Energieeffizienz-Hausplanung" → „Effizienzhaus-Planung"; „hydraulischer Abgleich"
        im Fließtext einheitlich klein
      · Kontaktformular: „Energieberatung / iSFP" → „Energieberatung (allgemein)", weil iSFP
        eigener Eintrag ist
- [x] FAQ: alle Antworten stehen jetzt im HTML (vorher nur die geöffnete → 5 von 6 für Google
      unsichtbar). Umschalten per `hidden`, mit `aria-controls`
- [x] OG-Banner 1200 × 630 als `opengraph-image.tsx`, rendert beim Build. Wortmarke wie im
      Header, Inter als TTF im Repo (`src/app/_fonts/`)
- [x] `robots.txt`, `sitemap.xml` (18 URLs), Canonical-URL auf jeder Seite
- [x] `.htaccess` für Apache: OG-Bild hat keine Dateiendung, sonst leere Vorschau bei IONOS

### Entschieden am 17.09.
- [x] **Fotos:** KI-Symbolbilder bleiben (bewusste Entscheidung, Hinweis steht im Impressum).
- [x] **Logo:** Die Text-Wortmarke ist die Marke. `public/logo.jpg` gelöscht.
- [x] **Blog:** bleibt geparkt in `src/app/_blog/`, unsichtbar.

- [x] **Kundenstimmen:** zwei echte Google-Rezensionen (Darius Dolfen, Melanie Marquardt)
      wortgetreu in `Testimonials.tsx`, Komponente auf beiden Säulen-Seiten eingeschaltet.
      Solange es nur zwei sind, zeigen beide Seiten beide (`filter="all"`); ab zwei je Säule
      wieder filtern. Offen: Ort bei beiden, „Heizungsbau" bei Dolfen ist geschlossen, nicht
      belegt. Volle Namen wie auf Google — kürzen auf „Darius D." wäre ein Handgriff.

### Offen — Entscheidung noch nicht getroffen
- [?] **Projektzahlen** im StatsBanner: 12 Projekte / 108,3 kW / 24 Berechnungen,
      Stand August. Noch aktuell?
- [?] **Terminbuchung.** Ende August angefangen und wieder entfernt. Kommt sie (Calendly,
      cal.com …) oder bleibt es bei Formular + Telefon?

### Offen — kleinere Punkte
- [ ] Stats-Streifen auf der Energieberatung-Seite einbauen, sobald belastbare Zahlen da sind
- [ ] Kontaktformular einmal echt absenden und prüfen, dass die Mail bei info@ib-tonn.de ankommt

---

## Phase 2 — Veröffentlichung (nach Phase 1)

1. [ ] **Alles committen.** Aktuell 151 gelöschte, ~45 geänderte, ~15 neue Dateien nur lokal —
       inklusive Bilder, Favicons, Fonts und OG-Banner-Code.
2. [ ] **Hosting festzurren.** Zwei Wege sind angelegt, keiner ist fertig:
   - **IONOS Deploy Now** (`.github/workflows/`): deployt heute `coming-soon-site/` ohne
     Build-Schritt. Für die Next.js-Seite müssen in `IBT-Website-build.yaml` rein:
     `actions/setup-node`, `npm ci --prefix ibt-website-editorial`,
     `npm run build --prefix ibt-website-editorial`, und `DEPLOYMENT_FOLDER` →
     `ibt-website-editorial/out`. Domain und E-Mail bleiben bei IONOS, MX-Records nicht anfassen.
   - **Vercel** (`vercel.json`): konfiguriert, aber der Hobby-Plan ist nur nicht-kommerziell.
     Für ein Ingenieurbüro braucht es Pro (20 $/Monat) — oder eben IONOS.
   - Datenschutz nennt IONOS als Hoster. Bei Vercel muss der Abschnitt umgeschrieben werden (USA).
3. [ ] Umgebungsvariablen beim Hoster setzen: `NEXT_PUBLIC_GOOGLE_TAG_ID` (sobald ein Tag
       existiert; ohne ID gibt es kein Tracking und keinen Cookie-Banner — bewusst so gebaut).
4. [ ] Go-Live: Workflow umstellen, prüfen, `coming-soon-site/` danach löschen.
5. [ ] Nach dem Go-Live: Google Search Console anlegen, Sitemap einreichen, Google-
       Unternehmensprofil auf die Seite verlinken, OG-Vorschau in WhatsApp/LinkedIn testen.

---

## Arbeitsregeln

- **Hauptseite ist `ibt-website-editorial/`.** Dev-Server: `npm run dev` dort, dann
  http://localhost:3000. Port 3001 gehört `snagtime`.
- **Nicht bauen, während der Dev-Server läuft.** `next build` und `next dev` teilen sich
  `.next/` — ein Build unter dem laufenden Server erzeugt 404 auf CSS und JS.
- **Neue Seite = Eintrag in `src/app/sitemap.ts`.** Sonst fehlt sie in der Sitemap.
- **`.env.local` ist gitignored.** Alles dort muss beim Deploy separat gesetzt werden.
- **Stammdaten** (Adresse, Telefon, §19 UStG, Region Köln/Aachen/Düren) sind bestätigt und
  sitewide eingetragen. Nicht erfinden, nicht „verbessern".
- **Kein Dipl.-Ing.**, kein „wir", keine MwSt.-Umrechnung, kein Gedankenstrich im Fließtext.
- **Headline-Regel:** Name fett schwarz (auch über zwei Zeilen), Zusatz/Norm als
  `<span className="block font-medium text-zinc-secondary">`. Keine Farbe in Headlines.
- **Farb-Regel:** `accent` (Tannengrün) nur für Aktionen. `ocker` nie über `text-xl`, nie
  für Aktionen. Steht auch als Kommentar in `tailwind.config.ts`.
