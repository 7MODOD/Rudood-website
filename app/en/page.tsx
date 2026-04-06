"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ─────────────── Navbar ─────────────── */
function EnNavbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Why Rudood?", href: "#why" },
    { label: "Platforms", href: "#platforms" },
    { label: "How It Works", href: "#how" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-night/80 border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/en" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="relative w-9 h-9">
              <Image src="/logo.png" alt="Rudood" width={36} height={36} className="object-contain"
                onError={(e) => { (e.target as HTMLImageElement).src = "/logo.svg"; }} />
            </div>
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
              {[
                { name: "WhatsApp", color: "#25D366" },
                { name: "Instagram", color: "#E1306C" },
                { name: "Messenger", color: "#0084FF" },
              ].map((p) => (
                <div key={p.name}
                  className="px-3 py-1.5 rounded-full border border-border bg-surface text-sm font-medium"
                  style={{ color: p.color }}>
                  {p.name}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact"
                className="px-8 py-4 rounded-full bg-brand-gradient text-white font-bold text-lg hover:opacity-90 shadow-brand hover:scale-[1.02] transition-all">
                Get Started Free
              </a>
              <a href="#cases"
                className="flex items-center gap-3 px-8 py-4 rounded-full border border-border text-text-muted hover:text-text-primary transition-all font-medium text-lg">
                Watch Demo
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

          {/* Stats */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { value: "24/7", label: "Always Available", color: "text-cyan" },
              { value: "Instant", label: "Response Time", color: "text-gradient-brand" },
              { value: "60%+", label: "Cost Savings", color: "text-gradient-brand" },
              { value: "3 Platforms", label: "Supported", color: "text-cyan" },
            ].map((s) => (
              <div key={s.label}
                className="p-6 rounded-2xl border border-border bg-surface-2 text-center hover:border-primary/30 transition-all">
                <p className={`text-3xl font-black ${s.color} mb-1`}>{s.value}</p>
                <p className="text-text-muted text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Platforms ─────────────── */
function EnPlatforms() {
  const platforms = [
    {
      name: "WhatsApp", color: "#25D366", bg: "rgba(37,211,102,0.08)", border: "rgba(37,211,102,0.25)",
      desc: "Automate WhatsApp Business replies — FAQs, orders, tracking, and everything your customer needs.",
      features: ["Text & media messages", "Interactive lists & buttons", "WhatsApp Business API"],
    },
    {
      name: "Instagram", color: "#E1306C", bg: "rgba(225,48,108,0.08)", border: "rgba(225,48,108,0.25)",
      desc: "Auto-reply to Instagram DMs — turn every inquiry into an instant sale without lifting a finger.",
      features: ["Direct messages (DM)", "Story reply automation", "Product catalog integration"],
    },
    {
      name: "Messenger", color: "#0084FF", bg: "rgba(0,132,255,0.08)", border: "rgba(0,132,255,0.25)",
      desc: "Automate Facebook Messenger conversations — 24/7 customer service for your Facebook followers.",
      features: ["Facebook messages", "Business page integration", "Context-aware replies"],
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
            <div key={p.name} className="p-7 rounded-3xl border hover:scale-[1.02] transition-all"
              style={{ background: p.bg, borderColor: p.border }}>
              <div className="text-3xl mb-4"
                style={{ color: p.color }}>
                ●
              </div>
              <h3 className="text-xl font-black text-text-primary mb-3">{p.name}</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">{p.desc}</p>
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
      </div>
    </section>
  );
}

/* ─────────────── Why Rudood ─────────────── */
function EnWhyRudood() {
  const pain = [
    { title: "Messages getting lost", desc: "Hundreds of daily messages and no way to track them all. A customer asked 2 hours ago — nobody replied — they went to a competitor." },
    { title: "Slow responses", desc: "A customer asks at 11 PM, nobody's available. By morning, the deal is gone. Today's customers don't wait." },
    { title: "High staff costs", desc: "A customer service agent's monthly salary costs far more than Rudood — and still comes with human error, vacations, and delays." },
  ];
  const features = [
    { title: "Context-aware AI replies", desc: "Not rigid templates. Rudood understands full conversation context and replies naturally — like your smartest employee.", badge: "GPT-4o" },
    { title: "Always on, 24/7", desc: "Works through the night, on weekends and holidays, without pause. Your customers get instant replies anytime.", badge: "Always" },
    { title: "Save 60%+ on support costs", desc: "Instead of paying thousands monthly for staff, Rudood handles repetitive questions automatically.", badge: "60%+" },
    { title: "Your data stays safe", desc: "Your data and your customers' data are encrypted and protected. We never share with third parties.", badge: "Secure" },
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
            You don't need more staff. You need a system that never sleeps and never makes mistakes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pain.map((p) => (
            <div key={p.title} className="p-6 rounded-2xl border border-red-900/30 bg-red-950/10 hover:border-red-800/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-red-950/40 border border-red-900/40 flex items-center justify-center text-red-400 mb-4 text-lg">✗</div>
              <h3 className="text-lg font-bold text-text-primary mb-2">{p.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40"></div>
            <p className="text-gradient-brand font-bold text-lg">The solution: Rudood</p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="relative p-6 rounded-2xl border border-border bg-surface-2 hover:border-primary/40 transition-all group">
              <div className="absolute top-4 end-4 text-xs font-bold text-cyan bg-cyan/10 px-2 py-0.5 rounded-full border border-cyan/20">
                {f.badge}
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-cyan mb-4 group-hover:scale-110 transition-transform text-xl">✦</div>
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
    { n: "01", title: "We understand your business", desc: "A session with our team to learn about your products, services, prices, and policies." },
    { n: "02", title: "We train the AI", desc: "We build and train the model on your brand voice and data so it replies exactly your way." },
    { n: "03", title: "Technical integration", desc: "We connect the system to your WhatsApp, Instagram, and Messenger accounts. We handle everything." },
    { n: "04", title: "Launch & monitor", desc: "After testing, the system goes live. We monitor performance and continuously improve." },
  ];
  return (
    <section id="how" className="py-24 bg-night">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">Process</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary mb-4">How We Work Together</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">Simple, clear — no complex tech, no code, no hassle.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-surface-2 border-2 border-border group-hover:border-primary/60 transition-all flex flex-col items-center justify-center mb-6 group-hover:shadow-brand-sm">
                <span className="text-cyan text-xs font-black tracking-widest mb-1">{s.n}</span>
                <span className="text-cyan text-2xl">✦</span>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">{s.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="text-4xl">⏱</div>
          <div>
            <h3 className="text-xl font-black text-text-primary mb-1">Full setup in just 3–7 business days</h3>
            <p className="text-text-muted text-sm">From first contact to your AI replying to customers — one week.</p>
          </div>
          <a href="#contact" className="shrink-0 px-6 py-3 rounded-full bg-brand-gradient text-white font-bold hover:opacity-90 transition-all whitespace-nowrap">
            Start Now
          </a>
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
      features: ["Smart WhatsApp AI replies", "Trained on your data", "Email support", "Monthly reports"],
      cta: "Start Starter",
    },
    {
      name: "Business", sub: "For active stores", price: "89", period: "/ month", msgs: "Up to 5,000 messages",
      features: ["Everything in Starter", "Up to 5,000 messages/mo", "Priority support", "Weekly detailed reports", "Monthly retraining", "Custom reply style"],
      cta: "Start Business", popular: true,
    },
    {
      name: "VIP Custom", sub: "For enterprises", price: "150+", period: "/ month", msgs: "Unlimited messages",
      features: ["Everything in Business", "Unlimited messages", "Dedicated account manager", "System integrations", "Guaranteed SLA"],
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
              <a href={t.name === "VIP Custom" ? "https://wa.me/your-number" : "#contact"}
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
      </div>
    </section>
  );
}

/* ─────────────── Contact Form ─────────────── */
function EnContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
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
          <form onSubmit={handleSubmit} className="space-y-4 bg-surface rounded-3xl p-8 border border-border">
            {[
              { label: "Full Name", type: "text", placeholder: "John Smith", dir: "ltr" },
              { label: "Phone Number", type: "tel", placeholder: "+1 XXX XXX XXXX", dir: "ltr" },
              { label: "Email Address", type: "email", placeholder: "name@business.com", dir: "ltr" },
              { label: "Business Name", type: "text", placeholder: "My Store", dir: "ltr" },
            ].map((field) => (
              <div key={field.label}>
                <label className="block text-sm font-semibold text-text-primary mb-1.5">
                  {field.label} <span className="text-red-400">*</span>
                </label>
                <input type={field.type} required placeholder={field.placeholder} dir={field.dir}
                  className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-border text-text-primary placeholder-text-faint focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm" />
              </div>
            ))}
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-1.5">
                Expected Monthly Messages <span className="text-red-400">*</span>
              </label>
              <select required className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-border text-text-primary focus:outline-none focus:border-primary transition-all text-sm appearance-none cursor-pointer">
                <option value="" disabled selected>Select expected volume</option>
                <option value="less-500">Less than 500 messages</option>
                <option value="500-2000">500 – 2,000 messages</option>
                <option value="2000-5000">2,000 – 5,000 messages</option>
                <option value="more-5000">More than 5,000 messages</option>
              </select>
            </div>
            <button type="submit" disabled={loading}
              className="w-full py-4 rounded-full bg-brand-gradient text-white font-black text-lg hover:opacity-90 shadow-brand disabled:opacity-70 mt-2">
              {loading ? "Submitting..." : "Join the Waitlist"}
            </button>
            <p className="text-center text-text-faint text-xs">
              By submitting, you agree to our{" "}
              <a href="/privacy" className="text-cyan hover:underline">Privacy Policy</a>.
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
      </div>
    </section>
  );
}

/* ─────────────── Footer ─────────────── */
function EnFooter() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="border-b border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(37,99,235,0.08) 0%, transparent 100%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-text-primary mb-4">Ready to start?</h2>
          <p className="text-text-muted text-lg mb-8 max-w-xl mx-auto">
            Join businesses saving time and growing sales with Rudood.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="px-8 py-4 rounded-full bg-brand-gradient text-white font-bold text-lg hover:opacity-90 shadow-brand">
              Get Started Free
            </a>
            <a href="https://wa.me/your-number" className="px-8 py-4 rounded-full border border-border text-text-muted hover:text-text-primary transition-all font-medium text-lg">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-text-faint text-xs">
          <div className="flex items-center gap-3">
            <a href="/en" className="flex items-center gap-2">
              <div className="relative w-6 h-6">
                <Image src="/logo.png" alt="Rudood" width={24} height={24} className="object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).src = "/logo.svg"; }} />
              </div>
              <span className="font-black text-sm text-text-primary">Rudood</span>
            </a>
            <span>·</span>
            <a href="/privacy" className="hover:text-text-muted transition-colors">Privacy Policy</a>
            <span>·</span>
            <Link href="/" className="hover:text-text-muted transition-colors">العربية</Link>
          </div>
          <p>© {new Date().getFullYear()} Rudood. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────── Live Chat ─────────────── */
function EnLiveChat() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      {open && (
        <div className="w-72 rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up"
          style={{ background: "#141E38", border: "1px solid rgba(37,99,235,0.3)", boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(37,99,235,0.15)" }}>
          <div className="bg-brand-gradient p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-black text-sm">R</div>
            <div>
              <p className="text-white font-bold text-sm">Rudood Team</p>
              <p className="text-white/70 text-xs">Usually replies in minutes</p>
            </div>
            <button onClick={() => setOpen(false)} className="ml-auto text-white/70 hover:text-white">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-4 space-y-3">
            <div className="bg-surface rounded-2xl px-3 py-2 text-sm text-text-muted">
              👋 Hi! How can we help you today?
            </div>
            {["I want to learn more about Rudood", "What does it cost?", "I want a free trial"].map((q) => (
              <a key={q} href={`https://wa.me/your-number?text=${encodeURIComponent(q)}`}
                target="_blank" rel="noopener noreferrer"
                className="block w-full text-left px-3 py-2 rounded-xl border border-border text-sm text-text-muted hover:text-text-primary hover:border-primary/40 transition-all">
                {q}
              </a>
            ))}
            <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-bold text-white hover:opacity-90 transition-all"
              style={{ background: "#25D366" }}>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
      <button onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-brand-gradient shadow-brand flex items-center justify-center text-white hover:opacity-90 hover:scale-105 transition-all">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"} />
        </svg>
      </button>
    </div>
  );
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
      <EnPricing />
      <EnContactForm />
      <EnFAQ />
      <EnFooter />
      <EnLiveChat />
    </main>
  );
}
