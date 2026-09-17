import type { Metadata } from "next";
import KontaktClient from "./KontaktClient";

export const metadata: Metadata = {
  title: "Kontakt: Kostenlose Erstberatung anfragen",
  description:
    "Kostenlose Erstberatung für Energieberatung, Förderung und technische Berechnungen. Antwort innerhalb eines Werktags. Region Köln / Aachen / Düren.",
};

export default function KontaktPage() {
  return <KontaktClient />;
}
