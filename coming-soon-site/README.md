# IBT — Coming-Soon-Seite (eigenständig)

Eigenständige, statische Coming-Soon-Seite im IBT-Design. **Kein Build-Schritt nötig** —
reines HTML/CSS. Ohne Header/Footer der Hauptseite.

## Inhalt
- `index.html` — Coming-Soon-Startseite
- `impressum.html` — Impressum (Impressumspflicht)
- `datenschutz.html` — Datenschutzerklärung
- `styles.css` — gemeinsames Stylesheet (Design-Tokens aus dem Hauptprojekt)

## Lokal ansehen
Einfach `index.html` doppelklicken — öffnet direkt im Browser. Kein Server nötig.

## Deployen
Da alles statisch ist, lässt sich der Ordner überall ohne Build veröffentlichen:

- **IONOS Deploy Now / Cloudflare Pages / Netlify:** Repo verbinden, als
  „Output-/Veröffentlichungsverzeichnis" diesen Ordner (`coming-soon-site`) angeben,
  **Build-Befehl leer lassen**.
- **IONOS Webhosting (SFTP):** Inhalt dieses Ordners in das Web-Wurzelverzeichnis
  (z. B. `/`) hochladen.

## Vor dem Live-Gang prüfen
Im Impressum sind noch Platzhalter zu ersetzen:
- `[Straße, Hausnummer]`
- `[USt-IdNr.]`
