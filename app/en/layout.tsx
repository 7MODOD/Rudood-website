import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "../globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rudood | AI-Powered Customer Service Automation",
  description:
    "Rudood automates your customer service on WhatsApp, Instagram & Messenger using real AI — 24/7, no extra staff needed.",
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <div dir="ltr" lang="en" className={`${cairo.variable} antialiased`}>
      {children}
    </div>
  );
}
