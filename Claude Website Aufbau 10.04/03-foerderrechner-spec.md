# Förderrechner — Analyse & Spezifikation

## Analysierte Beispiele

### 1. EBF Energieberatung (ebf-energieberatung.de/foerdermittelrechner)
- **Typ:** Interaktives Web-Tool direkt auf der Seite
- **Eingaben:** Wohngebäude/NWG Toggle, Wohneinheiten, Maßnahmenart (Heizung/Gebäudehülle/Anlagentechnik/Heizungsoptimierung), Effizienzbonus, iSFP-Bonus, Klima-Geschwindigkeitsbonus, Einkommensbonus, Investitionskosten
- **Stärken:** Übersichtlich, keine persönlichen Daten nötig, sofortiges Ergebnis, CC BY-NC-ND 4.0 lizenziert (nicht übernehmbar, aber als Vorbild)
- **CTA:** Kontaktformular am Ende

### 2. Enerfect (enerfect.de/foerderrechner)
- **Typ:** Web-Tool auf WordPress
- **Eingaben:** Nutzungsart (Privat/Gewerblich), Wohneinheiten, Maßnahmen, geplante Kosten
- **Stärken:** Simpel, schnell zu bedienen
- **Schwächen:** Design etwas basic

### 3. BWP Wärmepumpe (waermepumpe.de/foerderrechner)
- **Typ:** Spezialisierter Web-Rechner nur für Wärmepumpen
- **Eingaben:** WP-spezifische Parameter (Wärmequelle, Kältemittel etc.)
- **Stärken:** Sehr fachlich, BEG 2024 aktuell
- **Schwächen:** Nur Heizung/WP, nicht für Hülle-Maßnahmen

### 4. EE-Experten (ee-experten.com/foerderung/foerderrechner-sanierung.html)
- **Typ:** Web-Tool mit Bundesland-Vorauswahl
- **Eingaben:** Bundesland → dann BEG-EM-Rechner
- **Stärken:** Berücksichtigt auch Landesförderung, 2716 Bewertungen als Social Proof
- **Schwächen:** Komplex, viele Schritte

### 5. Öko-Zentrum NRW (oekozentrum.nrw)
- **Typ:** Excel-Download (Version 3.5, Stand 03/2025)
- **Stärken:** Fachlich am genauesten, regelmäßig aktualisiert
- **Schwächen:** Kein Online-Tool, UX aus 2010

---

## Spezifikation IBT-Förderrechner

### Flow (4 Schritte)

**Schritt 1 — Maßnahme wählen**
- Heizungsförderung (🔥) → Wärmepumpe, Biomasse, Solarthermie, Brennstoffzelle
- Fenster & Haustür (🪟) → Austausch Fenster, Balkon-/Terrassentüren, Haustüren
- Dachdämmung (🏠) → Oberste Geschossdecke oder Dach
- Fassadendämmung (🧱) → WDVS, Kerndämmung, Innendämmung

**Schritt 2 — Gebäudedetails**
- Anzahl Wohneinheiten (Slider 1–20)
- Geschätzte Investitionskosten brutto (Freitext-Eingabe €)

**Schritt 3 — Boni prüfen**
- Heizung: Klima-Geschwindigkeitsbonus (+20%), Effizienz-Bonus (+5%), Einkommens-Bonus (+30%), max. 70%
- Hülle (Fenster/Dach/Fassade): iSFP-Bonus (+5%), max. 20%
- Live-Anzeige des aktuellen Fördersatzes

**Schritt 4 — Ergebnis**
- Förderbetrag (groß, grün)
- Aufschlüsselung: Investition → anrechenbare Kosten → Fördersatz → Betrag
- Baubegleitung (50% bis max 5.000€ + 2.000€/weitere WE)
- Eigenanteil-Anzeige
- Disclaimer (unverbindlich, Stand BEG 2025)
- CTA: "Kostenlose Erstberatung anfragen" → Jonas Tonn, IBT

### BEG-Logik (Stand 2025)

**Heizung:**
- Basis: 30%
- Klima-Geschwindigkeitsbonus: +20% (Austausch Öl/Kohle/Gas-Etagen/Nachtspeicher oder ≥20J Gas/Biomasse)
- Effizienz-Bonus: +5% (WP mit Wasser/Erdreich/Abwasser oder natürliches Kältemittel)
- Einkommens-Bonus: +30% (Selbstnutzer, ≤40.000€ Haushaltseinkommen)
- Deckel: max. 70%
- Max. förderfähig: 30.000€ erste WE + 15.000€ jede weitere

**Gebäudehülle (Fenster, Dach, Fassade):**
- Basis: 15%
- iSFP-Bonus: +5%
- Deckel: max. 20%
- Max. förderfähig: 30.000€/WE (ohne iSFP), 60.000€/WE (mit iSFP)

**Baubegleitung:**
- 50% Zuschuss
- Max. 5.000€ (EFH) + 2.000€ je weitere WE

### Technische Hinweise
- Rein clientseitig (React), kein Backend nötig
- Keine persönlichen Daten → DSGVO-unkritisch
- Fördersätze als Konfigurationsobjekt → leicht aktualisierbar
- Responsive, funktioniert auf Mobile
