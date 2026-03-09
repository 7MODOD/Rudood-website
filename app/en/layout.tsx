import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rudood | AI-Powered Customer Service Automation",
  description:
    "Rudood automates customer service on WhatsApp, Instagram, and Messenger with AI that understands context and replies like a human.",
  keywords: "AI, customer service, WhatsApp, Instagram, Messenger, automation, chatbot, Rudood",
  openGraph: {
    title: "Rudood | AI-Powered Customer Service Automation",
    description: "Automate customer service across WhatsApp, Instagram & Messenger with contextual AI.",
    locale: "en_US",
    type: "website",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Rudood" }],
  },
  twitter: {
    card: "summary",
    title: "Rudood | AI-Powered Customer Service Automation",
    description: "Automate replies on WhatsApp, Instagram & Messenger with contextual AI.",
    images: ["/logo.png"],
  },
  manifest: "/manifest.json",
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      dir="ltr"
      lang="en"
      className={`${inter.variable} animated-gradient-bg min-h-screen`}
      style={{ fontFamily: "'Inter', system-ui, sans-serif", textAlign: "left" }}
    >
      {children}
      {/* Google Analytics */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-V2YTD0482R" strategy="afterInteractive" />
      <Script id="ga4-en" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-V2YTD0482R');`}
      </Script>
    </div>
  );
}
