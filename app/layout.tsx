import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rudood.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ردود | أتمتة خدمة العملاء بالذكاء الاصطناعي على واتساب",
  description:
    "منصة ردود تمكّن متجرك من الرد على عملاءك تلقائياً على واتساب وإنستغرام وماسنجر بذكاء اصطناعي حقيقي — 24/7 بدون موظف إضافي.",
  keywords: [
    "ردود",
    "Rudood",
    "شات بوت",
    "شات بوت واتساب",
    "بوت واتساب",
    "روبوت محادثة",
    "ذكاء اصطناعي",
    "خدمة العملاء بالذكاء الاصطناعي",
    "رد آلي واتساب",
    "أتمتة المتاجر",
    "أتمتة خدمة العملاء",
    "رد تلقائي إنستغرام",
    "بوت ماسنجر",
    "WhatsApp AI",
    "WhatsApp chatbot",
    "AI customer service",
    "Instagram automation",
    "Messenger bot",
  ],
  authors: [{ name: "Rudood", url: siteUrl }],
  creator: "Rudood",
  publisher: "Rudood",
  category: "technology",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: "/",
    languages: {
      ar: "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_PS",
    alternateLocale: ["en_US"],
    url: siteUrl,
    siteName: "ردود — Rudood",
    title: "ردود | أتمتة خدمة العملاء بالذكاء الاصطناعي",
    description:
      "ردود يرد على عملاءك تلقائياً على واتساب وإنستغرام وماسنجر بذكاء اصطناعي حقيقي — 24/7 بدون موظف إضافي.",
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
    title: "ردود | أتمتة خدمة العملاء بالذكاء الاصطناعي",
    description:
      "ردود يرد على عملاءك تلقائياً على واتساب وإنستغرام وماسنجر بذكاء اصطناعي حقيقي — 24/7 بدون موظف إضافي.",
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
    shortcut: "/icon.png",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#F8FAFC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="antialiased">
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
