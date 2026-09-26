# Website IBT — Checkliste

**Stand: 17.09.2026, abends** · Diese Datei ist der Leitfaden. Sie wird bei jeder Arbeitssitzung
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

- [x] **Optik-Feinschliff (26.09.):** Hero der 8 Unterseiten mit Bild jetzt zweispaltig
      (Text links, Bild rechts statt Bild unter dem Text). Emojis auf 5 Seiten durch das
      eigene Icon-Set ersetzt (neu: camera, monitor, slab). „Warum IBT" als Liste neben der
      Überschrift statt drei zentrierter Spalten. Buttons mit Druck-Feedback, Karten mit
      leichtem Schatten beim Hover.

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
- [ ] **Kontaktformular einmal aus dem Browser absenden** und prüfen, dass die Mail bei
      info@ib-tonn.de ankommt. Automatisch geht das nicht: Web3Forms sitzt hinter einem
      Cloudflare-Bot-Check, der nur echte Browser durchlässt. 30 Sekunden auf localhost.
- [ ] Bilder verkleinern: `public/images/` liegt bei 230–580 KB pro Bild, zusammen 4,5 MB.
      Ziel ~150 KB pro Bild (WebP oder JPEG 80 %, max. 1600 px breit).
- [ ] Stats-Streifen auf der Energieberatung-Seite einbauen, sobald belastbare Zahlen da sind

---

## Phase 2 — Veröffentlichung (nach Phase 1)

1. [x] **Alles committen.** Drei Commits am 17.09.: Aufräumen (92ed51c), Design und Text
       (61d656e), Checkliste (628bff2). Bilder, Favicons, Fonts und OG-Banner sind im Repo.
   - [ ] **Pushen** nach GitHub (`git push`). Löst den IONOS-Workflow aus, der aber weiterhin
         nur `coming-soon-site/` deployt — die Live-Seite ändert sich dadurch nicht.
2. [x] **Hosting: IONOS Deploy Now** (entschieden 26.09.). Vorbereitet:
   - `IBT-Website-build.yaml` baut jetzt die Next-Seite (Node 20, `npm ci`, `npm run build`)
     und lädt `ibt-website-editorial/out` hoch statt `coming-soon-site/`.
   - `deploy-to-ionos.yaml`: zwei Tippfehler aus der IONOS-Vorlage behoben (`require` →
     `required`, `path` → `paths`). Daran ist **jeder Deploy seit dem 07.08. gescheitert**
     (94 Läufe, kein Job gestartet, „workflow file issue"). Die Live-Seite stand seitdem still.
   - `.htaccess`: eigene 404-Seite (`ErrorDocument 404 /404.html`).
   - Probe-Build lokal mit Node 20 sauber: 24 Seiten, 7 MB, alle Pfade 200.
   - Web3Forms-Schlüssel steht im Code (öffentlicher Schlüssel), braucht keine Variable.
   - Vercel (`vercel.json`) ist damit vom Tisch; Datei kann nach dem Go-Live weg.
3. [ ] Umgebungsvariablen beim Hoster setzen: `NEXT_PUBLIC_GOOGLE_TAG_ID` (sobald ein Tag
       existiert; ohne ID gibt es kein Tracking und keinen Cookie-Banner — bewusst so gebaut).
4. [x] **Go-Live am 26.09.2026.** ib-tonn.de zeigt die Next-Seite (Commit 09a7804). Alle
       Seiten, Sitemap, robots.txt und OG-Bild liefern 200, falsche Adressen 404.
   - Ursache für den Stillstand seit 07.08.: GitHub stuft `deploy-to-ionos.yaml` als
     „möglicherweise schädlich" ein und startet es nur nach Freigabe im Browser (Actions →
     Lauf → „Approve"). Unfreigegebene Läufe verfallen nach 30 Tagen.
   - [ ] `toJson(secrets)` aus dem Render-Schritt entfernen, damit die Freigabe entfällt
         (keine Vorlagen-Dateien im Projekt, die Secrets bräuchten).
   - [ ] Eigene deutsche 404-Seite (`src/app/not-found.tsx`), heute Nexts englische.
   - [ ] Kontaktformular live absenden und Eingang bei info@ib-tonn.de prüfen.
   - [ ] `coming-soon-site/` und `vercel.json` löschen.
5. [ ] Nach dem Go-Live: Google Search Console anlegen, Sitemap einreichen, Google-
       Unternehmensprofil auf die Seite verlinken, OG-Vorschau in WhatsApp/LinkedIn testen.

---

## Arbeitsregeln

- **Das Projekt liegt in `~/Projekte/Website IBT/`, nicht mehr auf Google Drive.** Git auf
  einem Cloud-Mount blockiert bei jedem Commit (macOS FileProvider cancelt die Lock-Dateien),
  und Drive versucht, 18.000 `node_modules`-Dateien zu syncen. Die Sicherung ist GitHub
  (`tonno28/IBT-Website`), nicht Drive. Der alte Drive-Ordner kann gelöscht werden — vorher
  `snagtime/` und `.claude/` herausholen, die habe ich nicht mitkopiert.
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
