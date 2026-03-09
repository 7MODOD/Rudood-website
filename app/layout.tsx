import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ردود | أتمتة خدمة العملاء بالذكاء الاصطناعي",
  description:
    "ردود نظام ذكاء اصطناعي يؤتمت خدمة العملاء عبر واتساب وإنستغرام وماسنجر ويرد كالإنسان.",
  keywords: "ذكاء اصطناعي, خدمة عملاء, واتساب, انستغرام, ماسنجر, أتمتة, ردود",
  openGraph: {
    title: "ردود | أتمتة خدمة العملاء بالذكاء الاصطناعي",
    description: "أتمتة اكتمالية لخدمة العملاء عبر واتساب، إنستغرام وماسنجر بالذكاء الاصطناعي.",
    locale: "ar_SA",
    type: "website",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "ردود" }],
  },
  twitter: {
    card: "summary",
    title: "ردود | أتمتة خدمة العملاء بالذكاء الاصطناعي",
    description: "ردود يرد على عملائك على واتساب وإنستغرام وماسنجر تلقائياً.",
    images: ["/logo.png"],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7c3aed" />
      </head>
      <body className="antialiased animated-gradient-bg min-h-screen">
        {children}
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-V2YTD0482R" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-V2YTD0482R');`}
        </Script>
      </body>
    </html>
  );
}
