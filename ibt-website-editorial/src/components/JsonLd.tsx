/**
 * Bettet strukturierte Daten als <script type="application/ld+json"> ein.
 * "<" wird maskiert, damit kein Text aus den Daten das Script-Tag schließen kann.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
