import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ردود | أتمتة خدمة العملاء بالذكاء الاصطناعي على واتساب",
  description:
    "منصة ردود تمكّن متجرك من الرد على عملاءك تلقائياً على واتساب بذكاء اصطناعي حقيقي — 24/7 بدون موظف إضافي.",
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
