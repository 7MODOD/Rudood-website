"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

/* ─────────────── Navbar ─────────────── */
function EnNavbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Why Rudood?", href: "#why" },
    { label: "How It Works", href: "#how" },
    { label: "Platforms", href: "#platforms" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-night/80 border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/en" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image src="/logo.png" alt="Rudood" width={36} height={36} className="object-contain" />
            <span className="font-black text-xl text-text-primary">Rudood</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-text-muted hover:text-text-primary transition-colors">
                {l.label}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Link href="/" className="px-3 py-1.5 text-xs font-semibold rounded-full border border-border text-text-muted hover:text-text-primary transition-all">
              AR
            </Link>
            <a href="#contact" className="px-5 py-2 rounded-full bg-brand-gradient text-white text-sm font-bold hover:opacity-90 shadow-brand-sm transition-all">
              Get Started
            </a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-text-muted">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in-up">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="block px-4 py-3 text-text-muted hover:text-text-primary text-sm">
                {l.label}
              </a>
            ))}
            <div className="px-4 pt-3">
              <a href="#contact" className="block text-center py-3 rounded-full bg-brand-gradient text-white text-sm font-bold">
                Get Started Free
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

/* ─────────────── Hero ─────────────── */
function EnHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 30% 40%, rgba(37,99,235,0.10) 0%, rgba(124,58,237,0.07) 40%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan/30 bg-cyan/5 text-cyan text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
              Powered by GPT-4o AI
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-text-primary">
              Never miss a{" "}
              <span className="text-gradient">customer</span>
              <br />
              because of delays
            </h1>
            <p className="text-lg sm:text-xl text-text-muted leading-relaxed max-w-xl">
              Rudood replies to your customers with context-aware AI across{" "}
              <span className="text-text-primary font-semibold">WhatsApp, Instagram & Messenger</span> —
              instantly, 24/7, no extra staff.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-text-faint text-sm">Works on:</span>
              {([
                { name: "WhatsApp", color: "#25D366", d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" },
                { name: "Instagram", color: "#E1306C", d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                { name: "Messenger", color: "#0084FF", d: "M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.1l3.13 3.26L19.752 8.1l-6.561 6.863z" },
              ] as {name:string;color:string;d:string}[]).map((p) => (
                <div key={p.name}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-surface text-sm font-medium"
                  style={{ color: p.color }}>
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d={p.d} /></svg>
                  {p.name}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact"
                className="px-8 py-4 rounded-full bg-brand-gradient text-white font-bold text-lg hover:opacity-90 shadow-brand hover:scale-[1.02] transition-all">
                Get Started Free
              </a>
              <a href="#try"
                className="flex items-center gap-3 px-8 py-4 rounded-full border border-border text-text-muted hover:text-text-primary hover:border-border-light transition-all duration-200 font-medium text-lg group">
                <span className="w-9 h-9 rounded-full bg-surface-2 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Try Now Free
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-text-muted text-sm">
              {["Setup in 3–7 days", "No technical skills needed", "Instant replies 24/7"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Platform Hub Visual */}
          <div className="flex justify-center lg:justify-start relative">
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(37,99,235,0.10) 0%, rgba(124,58,237,0.06) 40%, transparent 70%)" }} />
            <div className="relative w-full max-w-sm flex flex-col items-center justify-center gap-6 py-8">
              {/* Center AI badge */}
              <div className="relative z-10 w-24 h-24 rounded-3xl flex flex-col items-center justify-center shadow-brand animate-float"
                style={{ background: "linear-gradient(135deg, #1E3A8A 0%, #7C3AED 60%, #0891B2 100%)", boxShadow: "0 0 40px rgba(37,99,235,0.35), 0 0 80px rgba(124,58,237,0.15)" }}>
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15m-9.3-6.545l-3.488 2.152M4.5 14.5l-2.25 2.25M19.8 15l2.25 2.25M15 3.186a24.33 24.33 0 01.75.082m0 0V9a2.25 2.25 0 00.659 1.591L19.8 15m-4.8-11.814c-.251.023-.501.05-.75.082" />
                </svg>
                <span className="text-white text-xs font-black mt-1">AI</span>
              </div>
              {/* Platform cards */}
              <div className="grid grid-cols-3 gap-4 w-full">
                {[
                  { name: "WhatsApp", color: "#25D366", bg: "rgba(37,211,102,0.10)", stat: "+1,500 msg/day" },
                  { name: "Instagram", color: "#E1306C", bg: "rgba(225,48,108,0.10)", stat: "Instant DMs" },
                  { name: "Messenger", color: "#0084FF", bg: "rgba(0,132,255,0.10)", stat: "via Facebook" },
                ].map((p, i) => (
                  <div key={p.name} className="flex flex-col items-center gap-3 animate-fade-in-up"
                    style={{ animationDelay: `${i * 0.15}s` }}>
                    <div className="w-px h-8 rounded-full"
                      style={{ background: `linear-gradient(to bottom, rgba(37,99,235,0.3), ${p.color}40)` }} />
                    <div className="w-full rounded-2xl p-4 flex flex-col items-center gap-2 border hover:scale-105 transition-all"
                      style={{ background: p.bg, borderColor: `${p.color}30` }}>
                      <span className="text-text-primary text-xs font-bold text-center" style={{ color: p.color }}>{p.name}</span>
                      <span className="text-text-faint text-[10px] text-center leading-tight">{p.stat}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Live indicator */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan/20 bg-cyan/5">
                <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                <span className="text-cyan text-xs font-semibold">System is live — instant replies</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-20 pt-10 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "24/7", label: "Always available", color: "text-cyan" },
            { value: "instant", label: "Reply speed", color: "text-gradient-brand" },
            { value: "60%+", label: "Cost savings", color: "text-gradient-brand" },
            { value: "3–7", label: "Days to set up", color: "text-cyan" },
          ].map((s) => (
            <div key={s.label} className="space-y-1">
              <p className={`text-3xl font-black ${s.color}`} dir="ltr">{s.value}</p>
              <p className="text-text-muted text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Platforms ─────────────── */
function EnPlatforms() {
  const platforms = [
    {
      name: "WhatsApp", englishName: "WhatsApp Business", color: "#25D366", bg: "rgba(37,211,102,0.08)", border: "rgba(37,211,102,0.25)",
      desc: "Automate WhatsApp Business replies — FAQs, orders, tracking, and everything your customer needs.",
      features: ["Text & media messages", "Smart interactive replies", "WhatsApp Business API"],
      iconPath: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
    },
    {
      name: "Instagram", englishName: "Instagram Messaging", color: "#E1306C", bg: "rgba(225,48,108,0.08)", border: "rgba(225,48,108,0.25)",
      desc: "Auto-reply to Instagram DMs — turn every inquiry into an instant sale without lifting a finger.",
      features: ["Direct messages (DM)", "Order capture automation", "Product data integration"],
      iconPath: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    },
    {
      name: "Messenger", englishName: "Facebook Messenger", color: "#0084FF", bg: "rgba(0,132,255,0.08)", border: "rgba(0,132,255,0.25)",
      desc: "Automate Facebook Messenger conversations — 24/7 customer service for your Facebook followers.",
      features: ["Facebook messages", "Business page integration", "Context-aware replies"],
      iconPath: "M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.1l3.13 3.26L19.752 8.1l-6.561 6.863z",
    },
  ];
  return (
    <section id="platforms" className="py-24 bg-night">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">Supported Platforms</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary mb-4">
            Wherever your customers are,{" "}
            <span className="text-gradient">Rudood is there</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            One platform connecting all your messaging channels with intelligent, context-aware AI.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map((p) => (
            <div key={p.name} className="relative p-7 rounded-3xl border hover:scale-[1.02] transition-all duration-300 group"
              style={{ background: p.bg, borderColor: p.border }}>
              {/* Available badge */}
              <div className="absolute top-5 start-5 text-[10px] font-black px-2 py-0.5 rounded-full"
                style={{ background: p.bg, color: p.color, border: `1px solid ${p.border}` }}>
                Available now
              </div>
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 mt-6"
                style={{ background: p.bg, color: p.color, border: `1px solid ${p.border}` }}>
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d={p.iconPath} />
                </svg>
              </div>
              <h3 className="text-xl font-black text-text-primary mb-1">{p.name}</h3>
              <p className="text-xs font-medium text-text-faint mb-3">{p.englishName}</p>
              <p className="text-text-muted text-sm leading-relaxed mb-5">{p.desc}</p>
              <div className="space-y-2">
                {p.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 shrink-0" style={{ color: p.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-muted text-xs">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-text-faint text-sm">More platforms coming soon</p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Why Rudood ─────────────── */
function EnWhyRudood() {
  const pain = [
    {
      title: "Messages lost in chaos",
      desc: "Hundreds of daily messages and no way to track them all. A customer asked 2 hours ago — nobody replied — they went to a competitor.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
    },
    {
      title: "Replies take hours",
      desc: "A customer asks at 11 PM, nobody's available. By morning, the deal is gone. Today's customers don't wait.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    },
    {
      title: "Never-ending staff costs",
      desc: "A customer service agent's monthly salary costs far more than Rudood — and still comes with human error, vacations, and delays.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    },
  ];
  const features = [
    {
      title: "Context-aware AI replies", desc: "Not rigid templates. Rudood understands full conversation context and replies naturally — like your smartest employee.", badge: "AI",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    },
    {
      title: "Always on, 24/7", desc: "Works on WhatsApp, Instagram & Messenger through the night, on weekends and holidays, without pause.", badge: "Always",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    },
    {
      title: "Save 60%+ on support costs", desc: "Instead of paying thousands monthly for staff, Rudood handles repetitive questions automatically and escalates only complex cases.", badge: "60%+",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    },
    {
      title: "Your data stays safe", desc: "Your data and your customers' data are protected with the highest security standards. We never share with any third party.", badge: "Secure",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    },
  ];
  return (
    <section id="why" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">Why Rudood?</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary mb-4">
            The problem every business owner faces
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            You don&apos;t need more staff. You need a system that never sleeps and never makes mistakes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {pain.map((p) => (
            <div key={p.title} className="relative p-6 rounded-2xl border border-red-900/30 bg-red-950/10 hover:border-red-800/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-red-950/40 border border-red-900/40 flex items-center justify-center text-red-400 mb-4 group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">{p.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40"></div>
            <p className="text-cyan font-bold text-lg">The solution: Rudood</p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="relative p-6 rounded-2xl border border-border bg-surface-2 hover:border-primary/40 transition-all duration-300 group cursor-default">
              <div className="absolute top-4 end-4 text-xs font-bold text-cyan bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                {f.badge}
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-cyan mb-4 group-hover:bg-primary/15 group-hover:scale-110 transition-all">
                {f.icon}
              </div>
              <h3 className="text-base font-bold text-text-primary mb-2">{f.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── How It Works ─────────────── */
function EnHowItWorks() {
  const steps = [
    {
      n: "01", title: "We understand your business", desc: "A session with our team to learn about your products, services, prices, and policies. Everything your customer needs.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    },
    {
      n: "02", title: "We train the AI", desc: "We build and train the model on your brand voice and data so it replies exactly your way, with your information.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    },
    {
      n: "03", title: "Technical integration", desc: "We connect the system to your WhatsApp Business account and platforms. We handle all the technical side — you do nothing.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
    },
    {
      n: "04", title: "Launch & monitor", desc: "After testing, the system goes live. We monitor performance and continuously improve based on real conversations.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
    },
  ];
  return (
    <section id="how" className="py-24 bg-night">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary mb-4">How We Work Together</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">Simple and clear — no complex tech, no code, no hassle.</p>
        </div>
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] inset-x-[10%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent pointer-events-none" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((s) => (
              <div key={s.n} className="relative flex flex-col items-center text-center group">
                <div className="relative z-10 w-[104px] h-[104px] rounded-full bg-surface-2 border-2 border-border group-hover:border-primary/60 transition-all duration-300 flex flex-col items-center justify-center mb-6 group-hover:shadow-brand-sm">
                  <span className="text-cyan text-xs font-black tracking-widest mb-1">{s.n}</span>
                  <div className="text-cyan/80 group-hover:text-cyan transition-colors">{s.icon}</div>
                </div>
                <div className="space-y-2 px-2">
                  <h3 className="text-lg font-bold text-text-primary">{s.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-start">
          <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-cyan shrink-0 text-2xl">⏱</div>
          <div>
            <h3 className="text-xl font-black text-text-primary mb-1">Full setup in <span className="text-cyan">3 to 7</span> business days</h3>
            <p className="text-text-muted text-sm">From first contact to your AI replying to customers — one week.</p>
          </div>
          <a href="#pricing" className="shrink-0 px-6 py-3 rounded-full bg-brand-gradient text-white font-bold hover:opacity-90 transition-all duration-200 whitespace-nowrap">
            Start Now
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Try Now ─────────────── */
const EN_BASE  = process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL  ?? "https://chat.rudood.app";
const EN_INBOX = process.env.NEXT_PUBLIC_CHATWOOT_INBOX_ID  ?? "";
const EN_PUB   = `${EN_BASE}/public/api/v1/inboxes/${EN_INBOX}`;

function EnTryNow() {
  const [msgs,   setMsgs]   = useState<{ id?: number; from: "user"|"agent"; text: string; time: string }[]>([
    { from: "agent", text: "Hello! How can I help you today? 😊", time: "9:41 AM" },
  ]);
  const [input,  setInput]  = useState("");
  const [status, setStatus] = useState<"idle"|"sending"|"waiting">("idle");

  const sessionRef = useRef<{ contactId: string; convId: number } | null>(null);
  const lastIdRef  = useRef<number>(0);
  const pollRef    = useRef<ReturnType<typeof setInterval> | null>(null);
  const bottomRef  = useRef<HTMLDivElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, status]);
  useEffect(() => () => { if (pollRef.current) clearInterval(pollRef.current); }, []);

  const clock = () => new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

  const initSession = async () => {
    if (sessionRef.current) return sessionRef.current;
    const key = "rw_vid_en";
    let vid = sessionStorage.getItem(key);
    if (!vid) { vid = "v-" + Math.random().toString(36).slice(2,10); sessionStorage.setItem(key, vid); }
    const cRes  = await fetch(`${EN_PUB}/contacts`, { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({ name:"Website Visitor", identifier: vid }) });
    const cData = await cRes.json();
    const contactId: string = cData.source_id;
    const vRes  = await fetch(`${EN_PUB}/contacts/${contactId}/conversations`, { method:"POST", headers:{"Content-Type":"application/json"} });
    const vData = await vRes.json();
    const session = { contactId, convId: vData.id as number };
    sessionRef.current = session;
    return session;
  };

  const startPolling = (session: { contactId: string; convId: number }) => {
    if (pollRef.current) clearInterval(pollRef.current);
    pollRef.current = setInterval(async () => {
      try {
        const res  = await fetch(`${EN_PUB}/contacts/${session.contactId}/conversations/${session.convId}/messages`);
        const data = await res.json();
        const all: Array<{ id: number; content: string; message_type: number }> = Array.isArray(data) ? data : (data.payload ?? []);
        const fresh = all.filter(m => m.message_type === 1 && m.id > lastIdRef.current);
        if (fresh.length > 0) {
          fresh.forEach(m => {
            setMsgs(prev => [...prev, { id: m.id, from: "agent", text: m.content, time: clock() }]);
            lastIdRef.current = Math.max(lastIdRef.current, m.id);
          });
          setStatus("idle");
          clearInterval(pollRef.current!); pollRef.current = null;
        }
      } catch { /* silent */ }
    }, 2500);
    setTimeout(() => { if (pollRef.current) { clearInterval(pollRef.current); pollRef.current = null; setStatus("idle"); } }, 60_000);
  };

  const send = async () => {
    const text = input.trim();
    if (!text || status === "sending") return;
    setInput(""); setStatus("sending");
    setMsgs(prev => [...prev, { from: "user", text, time: clock() }]);
    try {
      const session = await initSession();
      await fetch(`${EN_PUB}/contacts/${session.contactId}/conversations/${session.convId}/messages`, {
        method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({ content: text }),
      });
      setStatus("waiting");
      startPolling(session);
    } catch {
      setStatus("idle");
      setMsgs(prev => [...prev, { from: "agent", text: "Connection error, please try again.", time: clock() }]);
    }
  };

  const features = [
    { icon:"⚡", bg:"rgba(6,182,212,0.10)",  border:"rgba(6,182,212,0.25)",  title:"Lightning Speed",       desc:"Responses within seconds, not minutes — closing rates increase significantly." },
    { icon:"🧠", bg:"rgba(124,58,237,0.10)", border:"rgba(124,58,237,0.25)", title:"Context Awareness",     desc:"Remembers previous messages and responds with logical flow like a real human." },
    { icon:"👥", bg:"rgba(37,99,235,0.10)",  border:"rgba(37,99,235,0.25)",  title:"Instant Human Handoff", desc:"When needed, alerts your team and transfers the conversation smoothly." },
  ];

  return (
    <section id="try" className="py-24 bg-night relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(37,99,235,0.07) 0%, rgba(124,58,237,0.05) 40%, transparent 70%)" }} />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan/30 bg-cyan/10 text-cyan text-sm font-semibold mb-5">
            <span>🤖</span> Try Rudood Now
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary mb-4">
            Watch the AI <span className="text-gradient">in Action</span>
          </h2>
          <p className="text-text-muted text-lg">Send a message and chat with the Rudood team directly</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 justify-center">
          {/* Phone */}
          <div className="relative animate-float shrink-0">
            <div className="absolute inset-0 rounded-[2.5rem] blur-2xl opacity-25 scale-95 pointer-events-none"
              style={{ background:"linear-gradient(135deg,#2563EB,#7C3AED,#06B6D4)" }} />
            <div className="relative flex flex-col overflow-hidden"
              style={{ width:"320px",height:"640px",borderRadius:"2.5rem",background:"linear-gradient(180deg,#0d1117 0%,#0a0f2e 100%)",border:"2px solid rgba(124,58,237,0.4)",boxShadow:"0 30px 80px rgba(0,0,0,0.6),0 0 40px rgba(37,99,235,0.15)" }}>
              <div className="relative flex items-center justify-between px-6 pt-3 pb-1 shrink-0">
                <span className="text-white text-xs font-semibold">9:41</span>
                <div className="absolute left-1/2 -translate-x-1/2 top-2 bg-black" style={{ width:"80px",height:"20px",borderRadius:"10px" }} />
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-px items-end">{[2,3,4,5].map(h=><div key={h} className="w-0.5 rounded-sm bg-white/70" style={{height:`${h}px`}}/>)}</div>
                  <svg className="w-3.5 h-3.5 text-white/70" fill="currentColor" viewBox="0 0 24 24"><path d="M1.371 5.878C5.042 2.457 9.283.75 12 .75s6.958 1.707 10.629 5.128a.75.75 0 01-.017 1.078L12 16.75 1.388 6.956a.75.75 0 01-.017-1.078z"/></svg>
                  <div className="flex items-center" style={{width:"24px",height:"12px",border:"1px solid rgba(255,255,255,0.4)",borderRadius:"3px",padding:"1px"}}><div className="bg-white/80 h-full rounded-sm" style={{width:"70%"}}/></div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 shrink-0" style={{background:"rgba(255,255,255,0.05)",borderBottom:"1px solid rgba(255,255,255,0.08)"}}>
                <div className="w-10 h-10 rounded-full bg-brand-gradient flex items-center justify-center text-white font-black text-sm shrink-0">R</div>
                <div>
                  <p className="text-white text-sm font-bold leading-none mb-1">Rudood AI</p>
                  <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"/><span className="text-green-400 text-xs">Online now</span></div>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto px-3 py-4 space-y-3" dir="ltr" style={{scrollbarWidth:"none"}}>
                {msgs.map((m,i)=>(
                  <div key={i} className={`flex flex-col ${m.from==="agent"?"items-start":"items-end"}`}>
                    <div className="max-w-[78%] px-4 py-2.5 text-sm font-medium text-white"
                      style={m.from==="agent"
                        ?{background:"linear-gradient(135deg,#1d4ed8,#7c3aed)",boxShadow:"0 4px 15px rgba(124,58,237,0.3)",borderRadius:"1rem",borderTopLeftRadius:"4px"}
                        :{background:"rgba(255,255,255,0.13)",borderRadius:"1rem",borderTopRightRadius:"4px"}}>
                      {m.text}
                    </div>
                    <span className="text-[10px] text-white/40 mt-1 px-1">{m.time}</span>
                  </div>
                ))}
                {status==="waiting"&&(
                  <div className="flex flex-col items-start">
                    <div className="px-4 py-3" style={{background:"linear-gradient(135deg,#1d4ed8,#7c3aed)",boxShadow:"0 4px 15px rgba(124,58,237,0.3)",borderRadius:"1rem",borderTopLeftRadius:"4px"}}>
                      <div className="flex gap-1 items-center">
                        {[0,0.2,0.4].map((d,j)=><span key={j} className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce" style={{animationDelay:`${d}s`}}/>)}
                      </div>
                    </div>
                    <span className="text-[10px] text-white/40 mt-1 px-1">typing...</span>
                  </div>
                )}
                <div ref={bottomRef}/>
              </div>
              <div className="px-3 py-3 flex items-center gap-2 shrink-0" dir="ltr"
                style={{background:"rgba(6,11,26,0.95)",backdropFilter:"blur(10px)",borderTop:"1px solid rgba(255,255,255,0.08)"}}>
                <button onClick={send} disabled={!input.trim()||status==="sending"} aria-label="Send"
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{background:"linear-gradient(135deg,#1d4ed8,#7c3aed)"}}>
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"/></svg>
                </button>
                <input type="text" value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 text-sm text-white outline-none"
                  style={{background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.10)",borderRadius:"1rem",caretColor:"#06B6D4"}}/>
              </div>
            </div>
          </div>
          {/* Cards */}
          <div className="flex flex-col gap-5 w-full max-w-sm">
            {features.map(f=>(
              <div key={f.title} className="p-5 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
                style={{background:f.bg,borderColor:f.border}}>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0" style={{background:f.bg,border:`1px solid ${f.border}`}}>{f.icon}</div>
                  <div><h3 className="text-text-primary font-bold mb-1">{f.title}</h3><p className="text-text-muted text-sm leading-relaxed">{f.desc}</p></div>
                </div>
              </div>
            ))}
            <div className="mt-1 p-5 rounded-2xl border border-primary/20 bg-primary/5 text-center">
              <p className="text-text-muted text-sm mb-3">Impressed by what you saw?</p>
              <a href="#contact" className="inline-block px-6 py-3 rounded-full bg-brand-gradient text-white text-sm font-bold hover:opacity-90 shadow-brand-sm transition-all">Get Started Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Pricing ─────────────── */
function EnPricing() {
  const tiers = [
    {
      name: "Starter", sub: "For growing stores", price: "49", period: "/ month", msgs: "Up to 1,500 messages",
      features: ["Smart reply on WhatsApp, Instagram & Messenger", "Trained on your business data", "Email support", "Up to 1,500 messages/mo"],
      cta: "Start Starter",
    },
    {
      name: "Business", sub: "For active stores", price: "89", period: "/ month", msgs: "Up to 5,000 messages",
      features: ["Everything in Starter", "Up to 5,000 messages/mo", "Priority support", "Monthly retraining", "Custom reply style"],
      cta: "Start Business", popular: true,
    },
    {
      name: "VIP Custom", sub: "For enterprises", price: "150+", period: "/ month", msgs: "Unlimited messages",
      features: ["Everything in Business", "Unlimited messages", "Dedicated account manager", "System integrations", "Guaranteed SLA", "Continuous training & improvement"],
      cta: "Contact Us",
    },
  ];
  return (
    <section id="pricing" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary mb-4">An investment that pays for itself</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">All plans include full setup and real AI-powered replies.</p>
        </div>
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-primary/30 bg-primary/5 text-sm">
            <span className="text-cyan">⚡</span>
            <span className="text-text-muted">One-time setup fee: <span className="text-cyan font-bold">$100</span> — includes full training & integration</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {tiers.map((t) => (
            <div key={t.name}
              className={`relative rounded-3xl p-7 flex flex-col gap-5 transition-all ${
                t.popular ? "bg-surface-2 border-2 border-primary/50 scale-[1.03] shadow-brand" : "bg-night border border-border hover:border-primary/30"
              }`}>
              {t.popular && (
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <div className="px-4 py-1.5 rounded-full text-white text-xs font-black bg-brand-gradient animate-shimmer">
                    ⭐ Most Popular
                  </div>
                </div>
              )}
              <div>
                <h3 className="text-xl font-black text-text-primary mb-1">{t.name}</h3>
                <p className="text-text-muted text-sm">{t.sub}</p>
              </div>
              <div>
                <div className="flex items-end gap-1">
                  <span className="text-text-muted text-lg font-medium">$</span>
                  <span className={`text-5xl font-black leading-none ${t.popular ? "text-gradient-brand" : "text-text-primary"}`}>{t.price}</span>
                </div>
                <p className="text-text-muted text-sm mt-1">{t.period} · {t.msgs}</p>
              </div>
              <a href={t.name === "VIP Custom" ? "https://wa.me/970597876548" : "#contact"}
                className={`block text-center px-6 py-3.5 rounded-full font-bold text-base transition-all ${
                  t.popular ? "bg-brand-gradient text-white hover:opacity-90 shadow-brand-sm" : "border border-border text-text-muted hover:text-text-primary hover:border-primary/40"
                }`}>
                {t.cta}
              </a>
              <div className="space-y-3 pt-2 border-t border-border">
                {t.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <svg className={`w-4 h-4 shrink-0 ${t.popular ? "text-cyan" : "text-cyan"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-muted text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-text-faint text-sm mt-10">
          All prices in USD · Monthly billing · Cancel anytime
        </p>
      </div>
    </section>
  );
}

/* ─────────────── Contact Form ─────────────── */
function EnContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    try {
      const WEBHOOK = process.env.NEXT_PUBLIC_N8N_FORM_URL ?? "https://n8n.rudood.app/webhook/0a642cd4-ed02-487b-ab79-ef1899151276";
      const response = await fetch(WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, lang: "en" }),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("An error occurred while submitting. Please try again.");
      }
    } catch {
      alert("Could not connect to server. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contact" className="py-24 bg-night relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(37,99,235,0.06) 0%, transparent 70%)" }} />
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">Get Started</p>
          <h2 className="text-3xl sm:text-4xl font-black text-text-primary mb-4">Set up your AI customer service</h2>
          <p className="text-text-muted">Submit your request and our team will reach out within 24 hours.</p>
        </div>
        {submitted ? (
          <div className="text-center py-16 space-y-4">
            <div className="w-20 h-20 rounded-full bg-brand-gradient mx-auto flex items-center justify-center shadow-brand">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-text-primary">Submitted successfully! 🎉</h3>
            <p className="text-text-muted max-w-sm mx-auto">The Rudood team will contact you within 24 hours. Check your email.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 bg-surface-2 rounded-3xl p-8 border border-border">
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-1.5">Full Name <span className="text-red-400">*</span></label>
              <input type="text" name="fullName" required placeholder="John Smith"
                className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder-text-faint focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-1.5">Phone Number <span className="text-red-400">*</span></label>
              <input type="tel" name="phone" required placeholder="+1 XXX XXX XXXX" dir="ltr"
                className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder-text-faint focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-1.5">Email Address <span className="text-red-400">*</span></label>
              <input type="email" name="email" required placeholder="name@business.com" dir="ltr"
                className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder-text-faint focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-1.5">Business Name <span className="text-red-400">*</span></label>
              <input type="text" name="businessName" required placeholder="My Store"
                className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder-text-faint focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-1.5">
                Expected Monthly Messages <span className="text-red-400">*</span>
              </label>
              <select name="expectedMessages" required defaultValue="" className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary focus:outline-none focus:border-primary transition-all text-sm appearance-none cursor-pointer">
                <option value="" disabled>Select expected volume</option>
                <option value="less-1500">Less than 1,500 messages</option>
                <option value="1500-5000">1,500 – 5,000 messages</option>
                <option value="5000-10000">5,000 – 10,000 messages</option>
                <option value="more-10000">More than 10,000 messages</option>
              </select>
            </div>
            <button type="submit" disabled={loading}
              className="w-full py-4 rounded-full bg-brand-gradient text-white font-black text-lg hover:opacity-90 transition-all duration-200 shadow-brand disabled:opacity-70 disabled:cursor-not-allowed mt-2">
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Submitting...
                </span>
              ) : "Join the Waitlist"}
            </button>
            <p className="text-center text-text-faint text-xs">
              By submitting, you agree to our{" "}
              <a href="/en/privacy" className="text-cyan hover:underline">Privacy Policy</a>.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

/* ─────────────── FAQ ─────────────── */
function EnFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "Does the AI make mistakes?", a: "The system is specifically trained on your business data and runs on GPT-4o, one of the world's most accurate models. Errors are very rare. When it faces a question outside its training, it lets you know rather than making up an answer." },
    { q: "What happens if the bot doesn't know the answer?", a: "The system is built on a 'honesty first' principle. If it encounters a question it doesn't have a clear answer for, it politely informs the customer and escalates to your human team — rather than fabricating a potentially harmful response." },
    { q: "What do I need to get started?", a: "All you need is a WhatsApp Business account (and Instagram/Messenger business accounts if desired), plus information about your products, services, prices, and policies. We handle everything else." },
    { q: "Do I need technical expertise to manage the system?", a: "Not at all. After launch, the system runs automatically without your intervention. If you want to update information (new prices, products), just let us know and we'll update the training." },
    { q: "Is my customers' data safe?", a: "Security is our top priority. All conversations are encrypted. We don't share your customers' data with any third party, and we comply with strict privacy policies. Your data is used only to improve your system's performance." },
  ];
  return (
    <section id="faq" className="py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-black text-text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-text-muted">The most common questions from business owners before getting started.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <div key={i}
              className={`rounded-2xl border overflow-hidden transition-all ${open === i ? "border-primary/40 bg-surface-2" : "border-border bg-surface-2/50 hover:border-primary/20"}`}>
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-start">
                <span className={`text-base font-semibold transition-colors ${open === i ? "text-gradient-brand" : "text-text-primary"}`}>
                  {item.q}
                </span>
                <span className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all ${open === i ? "border-primary/40 bg-primary/10 text-cyan rotate-45" : "border-border text-text-muted"}`}>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              <div className={`overflow-hidden transition-all ${open === i ? "max-h-64 pb-6" : "max-h-0"}`}>
                <p className="px-6 text-text-muted text-sm leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl border border-border bg-surface-2/50">
          <p className="text-text-muted mb-4">Have a question that&apos;s not listed here? We&apos;re here to help.</p>
          <a href="https://wa.me/970597876548?text=Hello%20Rudood%20team%2C%20I%20have%20a%20question."
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 transition-all font-semibold text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat with our team
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Footer ─────────────── */
function EnFooter() {
  const socials = [
    { label: "WhatsApp", href: "https://wa.me/970597876548?text=Hello%20Rudood%20team%2C%20I%20have%20a%20question%20about%20AI%20replies.", d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" },
    { label: "Instagram", href: "#", d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
    { label: "X / Twitter", href: "#", d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  ];
  return (
    <footer className="bg-surface border-t border-border">
      {/* CTA Banner */}
      <div className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(37,99,235,0.08) 0%, rgba(124,58,237,0.05) 50%, transparent 100%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-text-primary mb-4">Ready to start?</h2>
          <p className="text-text-muted text-lg mb-8 max-w-xl mx-auto">
            Join businesses saving time and growing sales with Rudood — 24/7 on all platforms.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="px-8 py-4 rounded-full bg-brand-gradient text-white font-bold text-lg hover:opacity-90 transition-all duration-200 shadow-brand">
              Get Started Free
            </a>
            <a href="https://wa.me/970597876548?text=Hello%20Rudood%20team%2C%20I%20have%20a%20question%20about%20AI%20replies."
              className="px-8 py-4 rounded-full border border-border text-text-muted hover:text-text-primary hover:border-border-light transition-all duration-200 font-medium text-lg">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Logo + About + Socials */}
          <div className="space-y-4">
            <a href="/en" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Rudood" width={40} height={40} className="object-contain" />
              <span className="font-black text-xl text-text-primary">Rudood</span>
            </a>
            <p className="text-text-muted text-sm leading-relaxed">
              Rudood empowers businesses to deliver smart customer service via WhatsApp, Instagram, and Messenger — 24/7, without extra staff.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-surface-2 border border-border flex items-center justify-center text-text-muted hover:text-cyan hover:border-cyan/40 transition-all duration-200">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={s.d} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Why Rudood?", href: "#why" },
                { label: "Platforms", href: "#platforms" },
                { label: "How It Works", href: "#how" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
                { label: "Privacy Policy", href: "/en/privacy" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-text-muted hover:text-cyan transition-colors text-sm">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-widest">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@rudood.app"
                  className="flex items-center gap-2 text-text-muted hover:text-cyan transition-colors text-sm">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@rudood.app
                </a>
              </li>
            </ul>
            <a href="https://wa.me/970597876548?text=Hello%20Rudood%20team%2C%20I%20have%20a%20question%20about%20AI%20replies."
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: "#25D366" }}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat with us now
            </a>
            <div className="pt-2">
              <Link href="/" className="inline-flex items-center gap-2 text-text-faint hover:text-text-muted transition-colors text-xs">
                🌐 النسخة العربية
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-text-faint text-xs">
          <p>© {new Date().getFullYear()} Rudood. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────── Live Chat (Chatwoot) ─────────────── */
function EnLiveChat() {
  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL || "https://app.chatwoot.com";
    const websiteToken = process.env.NEXT_PUBLIC_CHATWOOT_WEBSITE_TOKEN || "";
    if (!websiteToken) return;
    (window as Window & { chatwootSettings?: object }).chatwootSettings = {
      hideMessageBubble: false,
      position: "left",
      locale: "en",
      type: "standard",
    };
    const script = document.createElement("script");
    script.src = `${baseUrl}/packs/js/sdk.js`;
    script.defer = true;
    script.async = true;
    script.onload = () => {
      (window as Window & { chatwootSDK?: { run: (c: object) => void } }).chatwootSDK?.run({ websiteToken, baseUrl });
    };
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);
  return null;
}

/* ─────────────── Main Page ─────────────── */
export default function EnPage() {
  return (
    <main className="min-h-screen bg-night text-text-primary overflow-x-hidden">
      <EnNavbar />
      <EnHero />
      <EnPlatforms />
      <EnWhyRudood />
      <EnHowItWorks />
      <EnTryNow />
      <EnPricing />
      <EnContactForm />
      <EnFAQ />
      <EnFooter />
      <EnLiveChat />
    </main>
  );
}
