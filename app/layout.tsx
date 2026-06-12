import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

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
    "شات بوت واتساب",
    "ذكاء اصطناعي",
    "خدمة العملاء",
    "أتمتة المتاجر",
    "WhatsApp AI",
    "Instagram automation",
    "Messenger bot",
  ],
  alternates: {
    canonical: "/",
    languages: {
      ar: "/",
      en: "/en",
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
};

export const viewport: Viewport = {
  themeColor: "#070C18",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
