import type { Metadata } from "next";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rudood.app";

export const metadata: Metadata = {
  title: "Rudood | AI-Powered Customer Service Automation",
  description:
    "Rudood automates your customer service on WhatsApp, Instagram & Messenger using real AI — 24/7, no extra staff needed.",
  keywords: [
    "Rudood",
    "WhatsApp AI",
    "AI customer service",
    "chatbot",
    "Instagram automation",
    "Messenger bot",
    "ecommerce automation",
  ],
  alternates: {
    canonical: "/en",
    languages: {
      ar: "/",
      en: "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_PS"],
    url: `${siteUrl}/en`,
    siteName: "Rudood",
    title: "Rudood | AI-Powered Customer Service Automation",
    description:
      "Rudood automates your customer service on WhatsApp, Instagram & Messenger using real AI — 24/7, no extra staff needed.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Rudood — AI customer service automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudood | AI-Powered Customer Service Automation",
    description:
      "Rudood automates your customer service on WhatsApp, Instagram & Messenger using real AI — 24/7, no extra staff needed.",
    images: ["/twitter-image.png"],
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <div dir="ltr" lang="en" className={`${cairo.variable} antialiased`}>
      {children}
    </div>
  );
}
