import type { FaqItem } from "./faq-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rudood.app";

const organization = {
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Rudood",
  alternateName: "ردود",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/logo.png`,
  },
  description:
    "Rudood — AI-powered customer service automation for WhatsApp, Instagram and Messenger.",
  sameAs: [] as string[],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["Arabic", "English", "Hebrew"],
    telephone: "+970597876548",
  },
};

const website = (locale: "ar" | "en") => ({
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: locale === "en" ? `${siteUrl}/en` : siteUrl,
  name: "Rudood — ردود",
  description:
    locale === "en"
      ? "AI-powered customer service automation for WhatsApp, Instagram & Messenger."
      : "أتمتة خدمة العملاء بالذكاء الاصطناعي على واتساب وإنستغرام وماسنجر.",
  inLanguage: locale === "en" ? "en" : "ar",
  publisher: { "@id": `${siteUrl}/#organization` },
});

const softwareApplication = (locale: "ar" | "en") => ({
  "@type": "SoftwareApplication",
  name: "Rudood — ردود",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, WhatsApp, Instagram, Messenger",
  description:
    locale === "en"
      ? "Rudood replies to your customers with real AI on WhatsApp, Instagram & Messenger — 24/7, no extra staff."
      : "ردود يرد على عملاءك بذكاء اصطناعي حقيقي عبر واتساب وإنستغرام وماسنجر — 24/7 بدون موظف إضافي.",
  offers: {
    "@type": "Offer",
    price: "290",
    priceCurrency: "ILS",
  },
  provider: { "@id": `${siteUrl}/#organization` },
});

const faqPage = (items: FaqItem[]) => ({
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
});

export function buildStructuredData(locale: "ar" | "en", faqItems: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      website(locale),
      softwareApplication(locale),
      faqPage(faqItems),
    ],
  };
}
