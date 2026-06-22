import { buildStructuredData } from "@/lib/structured-data";
import type { FaqItem } from "@/lib/faq-data";

export default function JsonLd({
  locale,
  faqItems,
}: {
  locale: "ar" | "en";
  faqItems: FaqItem[];
}) {
  const data = buildStructuredData(locale, faqItems);
  return (
    <script
      type="application/ld+json"
      // Structured data must be a raw JSON string in the DOM.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
