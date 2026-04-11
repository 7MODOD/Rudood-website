"use client";

import Link from "next/link";
import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function EnThankYouPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/en";
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ background: "linear-gradient(180deg, #060b1a 0%, #0a0f2e 100%)", fontFamily: "'Inter', system-ui, sans-serif", direction: "ltr" }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(124,58,237,0.18) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 text-center max-w-lg mx-auto">
        {/* Logo */}
        <Link href="/en" className="inline-flex items-center gap-3 mb-10">
          <Image src="/logo.png" alt="Rudood" width={44} height={44} className="rounded-xl object-contain bg-white p-0.5" />
          <span className="text-white font-extrabold text-2xl">Rudood</span>
        </Link>

        {/* Success icon */}
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
          style={{ background: "linear-gradient(135deg, #1d4ed8, #7c3aed, #06b6d4)", boxShadow: "0 0 60px rgba(124,58,237,0.5)" }}
        >
          <CheckCircle size={44} className="text-white" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">
          You&apos;re on the list! 🎉
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed mb-8">
          Thank you for joining! We&apos;ll reach out on WhatsApp the moment Rudood launches.
          <br />
          <span className="text-slate-500 text-sm mt-2 block">Redirecting you to home in 6 seconds…</span>
        </p>

        <Link
          href="/en"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-lg transition-all duration-300 hover:scale-105"
          style={{ background: "linear-gradient(135deg, #1d4ed8, #7c3aed)" }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
