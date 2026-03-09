"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { toast, Toaster } from "sonner";
import {
  Send,
  Bot,
  Zap,
  Clock,
  Settings,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  MessageCircle,
  Instagram,
  Facebook,
  Star,
  ArrowLeft,
  Sparkles,
  Shield,
  Users,
  Globe,
} from "lucide-react";

// ── Scroll-triggered animation wrapper ───────────────────────────────────────
function AnimatedSection({
  children,
  className = "",
  delay = 0,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// WEBHOOK URL — registration form (server-side in .env.local)
// ─────────────────────────────────────────────────────────────────────────────
const N8N_FORM_WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_FORM_URL ?? "https://n8n.rudood.app/webhook/0a642cd4-ed02-487b-ab79-ef1899151276";
// ─────────────────────────────────────────────────────────────────────────────

// ── Types ────────────────────────────────────────────────────────────────────
interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  time: string;
}

interface WaitlistForm {
  name: string;
  phone: string;
  email: string;
  business: string;
  messages: string;
}

// ── Helper ───────────────────────────────────────────────────────────────────
const now = (): string =>
  new Date().toLocaleTimeString("ar-SA", { hour: "2-digit", minute: "2-digit" });

// ─────────────────────────────────────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#060b1a]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="ردود" width={40} height={40} className="rounded-xl object-contain bg-white p-0.5" />
          <span className="text-white font-extrabold text-2xl tracking-tight">ردود</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language switcher */}
          <Link
            href="/en"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-slate-300 font-semibold text-sm border border-white/15 backdrop-blur-sm transition-all duration-200 hover:text-white hover:border-white/30 hover:bg-white/8"
          >
            <Globe size={14} />
            <span>English</span>
          </Link>

          {/* CTA */}
          <a
            href="#waitlist"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
            style={{ background: "linear-gradient(135deg, #1d4ed8, #7c3aed)" }}
          >
            <Sparkles size={16} />
            انضم لقائمة الانتظار
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO SECTION
// ─────────────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden">
      {/* ── Deep radial glow orbs — stronger & more vibrant ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-right: bright cyan orb */}
        <div
          className="absolute -top-20 -right-20 w-[520px] h-[520px] rounded-full opacity-25 blur-[120px]"
          style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)" }}
        />
        {/* Bottom-left: vivid purple orb */}
        <div
          className="absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full opacity-30 blur-[100px]"
          style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)" }}
        />
        {/* Center: deep blue foundation */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-15 blur-[140px]"
          style={{ background: "radial-gradient(circle, #1d4ed8 0%, transparent 70%)" }}
        />
        {/* Extra: pink accent top-left */}
        <div
          className="absolute top-10 left-10 w-72 h-72 rounded-full opacity-15 blur-[80px]"
          style={{ background: "radial-gradient(circle, #ec4899 0%, transparent 70%)" }}
        />
      </div>

      {/* ── Tech grid overlay — denser, higher contrast ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <AnimatedSection className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm font-semibold mb-8 backdrop-blur-sm">
          <Sparkles size={14} />
          مدعوم بالذكاء الاصطناعي المتقدم
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
          خدمة عملاء{" "}
          <span
            className="block mt-1"
            style={{
              background: "linear-gradient(135deg, #22d3ee 0%, #a855f7 50%, #ec4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            لا تنام أبداً
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
          <span className="text-white font-bold">ردود</span> يؤتمت ردودك على واتساب وإنستغرام وماسنجر بذكاء اصطناعي يفهم السياق ويرد كالإنسان — على مدار الساعة، طوال الأسبوع.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#waitlist"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-white font-bold text-lg transition-all duration-300 hover:scale-105 pulse-ring shadow-2xl"
            style={{ background: "linear-gradient(135deg, #1d4ed8 0%, #7c3aed 50%, #06b6d4 100%)", backgroundSize: "200% 200%" }}
          >
            <Sparkles size={20} />
            انضم لقائمة الانتظار
            <ArrowLeft size={20} />
          </a>
          <a
            href="#demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-slate-300 font-bold text-lg border border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/5 hover:text-white hover:border-white/40"
          >
            <Bot size={20} />
            جرّب الآن مجاناً
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#7c3aed" className="text-purple-500" />
              ))}
            </div>
            <span>تجربة مستخدم استثنائية</span>
          </div>
          <div className="w-px h-4 bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <CheckCircle size={14} className="text-teal-400" />
            <span>جاهز خلال دقائق</span>
          </div>
          <div className="w-px h-4 bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Shield size={14} className="text-blue-400" />
            <span>آمن ومشفر بالكامل</span>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// INTEGRATIONS BANNER
// ─────────────────────────────────────────────────────────────────────────────
function IntegrationsBanner() {
  const platforms = [
    {
      name: "واتساب",
      icon: <MessageCircle size={22} />,
      color: "#25D366",
      bg: "rgba(37,211,102,0.12)",
      border: "rgba(37,211,102,0.25)",
    },
    {
      name: "إنستغرام",
      icon: <Instagram size={22} />,
      color: "#E1306C",
      bg: "rgba(225,48,108,0.12)",
      border: "rgba(225,48,108,0.25)",
    },
    {
      name: "ماسنجر",
      icon: <Facebook size={22} />,
      color: "#0099FF",
      bg: "rgba(0,153,255,0.12)",
      border: "rgba(0,153,255,0.25)",
    },
    {
      name: "الردود التلقائية",
      icon: <Bot size={22} />,
      color: "#7c3aed",
      bg: "rgba(124,58,237,0.12)",
      border: "rgba(124,58,237,0.25)",
    },
    {
      name: "التحليلات الذكية",
      icon: <Zap size={22} />,
      color: "#06b6d4",
      bg: "rgba(6,182,212,0.12)",
      border: "rgba(6,182,212,0.25)",
    },
    {
      name: "دعم ٢٤/٧",
      icon: <Clock size={22} />,
      color: "#f59e0b",
      bg: "rgba(245,158,11,0.12)",
      border: "rgba(245,158,11,0.25)",
    },
    {
      name: "تكامل مخصص / موقع إلكتروني",
      icon: <Globe size={22} />,
      color: "#10b981",
      bg: "rgba(16,185,129,0.12)",
      border: "rgba(16,185,129,0.25)",
    },
  ];

  const doubled = [...platforms, ...platforms];

  return (
    <section className="py-12 border-y border-white/8 overflow-hidden" style={{ background: "rgba(255,255,255,0.02)" }}>
      <div className="max-w-6xl mx-auto px-4 mb-8 text-center">
        <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest">
          متكامل مع منصاتك المفضلة
        </p>
      </div>
      <div className="marquee-wrapper-rtl">
        <div className="marquee-inner-rtl gap-4 px-4">
          {doubled.map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl mx-2 flex-shrink-0 border backdrop-blur-sm transition-all duration-300 hover:scale-105"
              style={{ background: p.bg, borderColor: p.border, color: p.color }}
            >
              {p.icon}
              <span className="font-bold text-sm whitespace-nowrap">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CHAT DEMO
// ─────────────────────────────────────────────────────────────────────────────
function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "مرحباً! كيف يمكنني مساعدتك اليوم؟ 😊", sender: "bot", time: now() },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const conversationId = useRef<number | null>(null);
  const pollTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const el = messagesContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, loading]);

  useEffect(() => {
    return () => { if (pollTimer.current) clearInterval(pollTimer.current); };
  }, []);

  // ── Poll /api/chat/messages every 3s for agent replies ────────────────────
  const startPolling = (convId: number) => {
    if (pollTimer.current) clearInterval(pollTimer.current);
    pollTimer.current = setInterval(async () => {
      try {
        const res = await fetch(`/api/chat/messages?id=${convId}`);
        const { messages: agentMsgs } = await res.json();
        if (agentMsgs?.length > 0) {
          setMessages((prev) => [
            ...prev,
            ...agentMsgs.map((m: { id: number; content: string }) => ({
              id: m.id,
              text: m.content,
              sender: "bot" as const,
              time: now(),
            })),
          ]);
        }
      } catch { /* silent */ }
    }, 3000);
  };

  // ── Send message ──────────────────────────────────────────────────────────
  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    setMessages((prev) => [...prev, { id: Date.now(), text, sender: "user", time: now() }]);
    setInput("");
    setLoading(true);

    try {
      // Init conversation on first message
      if (!conversationId.current) {
        const startRes = await fetch("/api/chat/start", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: "زائر الموقع" }) });
        const { conversationId: cId } = await startRes.json();
        if (!cId) throw new Error("no conversation");
        conversationId.current = cId;
        startPolling(cId);
      }

      // Send message
      await fetch("/api/chat/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ conversationId: conversationId.current, content: text }),
      });
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: "عذراً، تعذّر إرسال رسالتك. حاول مرة أخرى لاحقاً.", sender: "bot", time: now() },
      ]);
    } finally {
      setLoading(false);
    }
  };


  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <section id="demo" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-sm font-semibold mb-4">
            <Bot size={14} />
            جرّب ردود الآن
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            شاهد الذكاء الاصطناعي{" "}
            <span className="gradient-text">في العمل</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            أرسل رسالة واختبر كيف يرد ردود بسرعة واحترافية
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 justify-center">
          {/* Phone mockup */}
          <div className="relative float-animation">
            {/* Outer glow */}
            <div
              className="absolute -inset-4 rounded-[3rem] opacity-30 blur-2xl"
              style={{ background: "linear-gradient(135deg, #1d4ed8, #7c3aed, #06b6d4)" }}
            />
            {/* Phone frame */}
            <div
              className="relative w-[320px] sm:w-[340px] h-[640px] rounded-[2.5rem] border-2 overflow-hidden shadow-2xl"
              style={{
                background: "linear-gradient(180deg, #0d1117 0%, #0a0f2e 100%)",
                borderColor: "rgba(124,58,237,0.4)",
              }}
            >
              {/* Status bar */}
              <div className="flex justify-between items-center px-6 pt-4 pb-2">
                <span className="text-white text-xs font-semibold">9:41</span>
                <div className="w-28 h-6 rounded-full bg-black" />
                <div className="flex gap-1 items-center">
                  <div className="w-4 h-2.5 border border-white/60 rounded-sm"><div className="w-3 h-full bg-white/60 rounded-sm" /></div>
                </div>
              </div>

              {/* Chat header */}
              <div
                className="flex items-center gap-3 px-4 py-3 border-b border-white/10"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <Image src="/logo.png" alt="ردود" width={40} height={40} className="rounded-full object-contain bg-white p-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-white font-bold text-sm">ردود AI</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 pulse-ring" />
                    <p className="text-green-400 text-xs">متصل الآن</p>
                  </div>
                </div>
                <MessageCircle size={18} className="text-slate-400" />
              </div>

              {/* Messages area — ref on container, overflow-y-auto for isolated scroll */}
              <div ref={messagesContainerRef} className="overflow-y-auto px-3 py-4 space-y-3 h-[420px]">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "user" ? "justify-start" : "justify-end"} fade-in-up`}
                  >
                    <div
                      className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm font-medium leading-relaxed ${
                        msg.sender === "user"
                          ? "text-white rounded-tl-sm"
                          : "text-white rounded-tr-sm"
                      }`}
                      style={{
                        background:
                          msg.sender === "user"
                            ? "rgba(255,255,255,0.12)"
                            : "linear-gradient(135deg, #1d4ed8, #7c3aed)",
                        boxShadow:
                          msg.sender === "bot"
                            ? "0 4px 15px rgba(124,58,237,0.3)"
                            : "none",
                      }}
                    >
                      <p>{msg.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.sender === "user" ? "text-white/50 text-left" : "text-white/60 text-right"
                        }`}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {loading && (
                  <div className="flex justify-end">
                    <div
                      className="flex items-center gap-1 px-4 py-3 rounded-2xl rounded-tr-sm"
                      style={{ background: "linear-gradient(135deg, #1d4ed8, #7c3aed)" }}
                    >
                      <div className="typing-dot w-2 h-2 rounded-full bg-white" />
                      <div className="typing-dot w-2 h-2 rounded-full bg-white" />
                      <div className="typing-dot w-2 h-2 rounded-full bg-white" />
                    </div>
                  </div>
                )}
              </div>

              {/* Input area */}
              <div
                className="absolute bottom-0 left-0 right-0 px-3 py-3 border-t border-white/10"
                style={{ background: "rgba(6,11,26,0.95)", backdropFilter: "blur(10px)" }}
              >
                <div className="flex items-center gap-2 bg-white/8 rounded-2xl border border-white/10 pr-4 pl-2 py-2">
                  <input
                    className="flex-1 bg-transparent text-white text-sm placeholder-white/40 outline-none font-medium"
                    placeholder="اكتب رسالتك..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKey}
                    disabled={loading}
                  />
                  <button
                    onClick={sendMessage}
                    disabled={loading || !input.trim()}
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white transition-all duration-200 hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                    style={{ background: "linear-gradient(135deg, #1d4ed8, #7c3aed)" }}
                    aria-label="إرسال"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Feature callouts */}
          <div className="flex flex-col gap-5 max-w-sm">
            {[
              {
                icon: <Zap size={22} />,
                title: "سرعة فائقة",
                desc: "ردود خلال ثوانٍ وليس دقائق، ترتفع معدلات إغلاق الصفقات.",
                color: "#06b6d4",
                bg: "rgba(6,182,212,0.1)",
                border: "rgba(6,182,212,0.2)",
              },
              {
                icon: <Bot size={22} />,
                title: "فهم السياق",
                desc: "يتذكر المحادثة السابقة ويرد بتسلسل منطقي كالإنسان.",
                color: "#7c3aed",
                bg: "rgba(124,58,237,0.1)",
                border: "rgba(124,58,237,0.2)",
              },
              {
                icon: <Users size={22} />,
                title: "تحويل بشري فوري",
                desc: "عند الحاجة يُنبّه الفريق ويُحوّل المحادثة بسلاسة.",
                color: "#1d4ed8",
                bg: "rgba(29,78,216,0.1)",
                border: "rgba(29,78,216,0.2)",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                style={{ background: item.bg, borderColor: item.border }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: item.bg, color: item.color, border: `1px solid ${item.border}` }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FEATURES SECTION
// ─────────────────────────────────────────────────────────────────────────────
function FeaturesSection() {
  const features = [
    {
      icon: <Bot size={32} />,
      title: "فهم السياق الذكي",
      desc: "لا يرد بردود جاهزة — يقرأ المحادثة كلها ويبني رده المناسب لكل عميل وكل سياق.",
      tag: "ذكاء اصطناعي",
      color: "#7c3aed",
      bg: "rgba(124,58,237,0.08)",
      border: "rgba(124,58,237,0.2)",
      tagBg: "rgba(124,58,237,0.15)",
    },
    {
      icon: <Settings size={32} />,
      title: "إعداد سهل في دقائق",
      desc: "لا حاجة لخبرة تقنية. صِل متجرك أو شركتك وابدأ الاستقبال خلال دقائق معدودة.",
      tag: "سهل الاستخدام",
      color: "#06b6d4",
      bg: "rgba(6,182,212,0.08)",
      border: "rgba(6,182,212,0.2)",
      tagBg: "rgba(6,182,212,0.15)",
    },
    {
      icon: <Clock size={32} />,
      title: "٢٤/٧ بلا انقطاع",
      desc: "يعمل طوال اليوم والليل، الأعطلة والمناسبات — لا يتعب ولا يطلب إجازة.",
      tag: "دائم الاتصال",
      color: "#1d4ed8",
      bg: "rgba(29,78,216,0.08)",
      border: "rgba(29,78,216,0.2)",
      tagBg: "rgba(29,78,216,0.15)",
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-semibold mb-4">
            <Zap size={14} />
            مميزات ردود
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            كل ما تحتاجه{" "}
            <span className="gradient-text">في مكان واحد</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            منظومة متكاملة لخدمة عملاء احترافية بلا جهد إضافي
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.15}
              className="group relative p-8 rounded-3xl border backdrop-blur-sm transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl cursor-default"
              style={{ background: f.bg, borderColor: f.border }}
            >
              {/* Gradient corner accent */}
              <div
                className="absolute top-0 left-0 w-24 h-24 rounded-br-3xl opacity-10"
                style={{ background: `radial-gradient(circle at top left, ${f.color}, transparent)` }}
              />
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ background: f.bg, color: f.color, border: `1px solid ${f.border}` }}
              >
                {f.icon}
              </div>
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-4"
                style={{ background: f.tagBg, color: f.color }}
              >
                <CheckCircle size={11} />
                {f.tag}
              </div>
              <h3 className="text-white text-xl font-black mb-3">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">{f.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HOW IT WORKS
// ─────────────────────────────────────────────────────────────────────────────
function HowItWorksSection() {
  const steps = [
    {
      num: "١",
      title: "سجّل ووصّل حساباتك",
      desc: "اربط واتساب وإنستغرام وماسنجر في خطوات بسيطة من لوحة التحكم.",
      icon: <Settings size={24} />,
    },
    {
      num: "٢",
      title: "خصّص ردود الذكاء الاصطناعي",
      desc: "أدخل معلومات شركتك ومنتجاتك وأسلوب ردّك المفضّل. النظام يتعلم ويتكيّف.",
      icon: <Sparkles size={24} />,
    },
    {
      num: "٣",
      title: "استقبل وتوسّع بلا حدود",
      desc: "ابدأ استقبال الطلبات والاستفسارات تلقائياً بينما تركّز أنت على نمو عملك.",
      icon: <Zap size={24} />,
    },
  ];

  return (
    <section className="py-24 px-4" style={{ background: "rgba(255,255,255,0.02)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-semibold mb-4">
            <CheckCircle size={14} />
            كيف يعمل ردود؟
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            ثلاث خطوات{" "}
            <span className="gradient-text">للانطلاق</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="hidden md:block absolute top-14 right-[16.66%] left-[16.66%] h-0.5 bg-gradient-to-l from-transparent via-purple-500/40 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.18} className="flex flex-col items-center text-center">
                {/* Step number circle */}
                <div className="relative mb-6">
                  <div
                    className="w-28 h-28 rounded-full flex items-center justify-center text-white text-4xl font-black shadow-xl transition-all duration-300 hover:scale-110"
                    style={{
                      background: "linear-gradient(135deg, #1d4ed8 0%, #7c3aed 50%, #06b6d4 100%)",
                      boxShadow: "0 0 40px rgba(124,58,237,0.4)",
                    }}
                  >
                    {step.num}
                  </div>
                  <div
                    className="absolute -bottom-2 -left-2 w-10 h-10 rounded-xl flex items-center justify-center text-white"
                    style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.15)" }}
                  >
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-white text-xl font-black mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed max-w-xs">{step.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// WAITLIST FORM
// ─────────────────────────────────────────────────────────────────────────────
function WaitlistSection() {
  const [form, setForm] = useState<WaitlistForm>({
    name: "",
    phone: "",
    email: "",
    business: "",
    messages: "",
  });
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.email || !form.business || !form.messages) {
      setError("يرجى ملء جميع الحقول المطلوبة.");
      toast.error("حقول ناقصة", { description: "يرجى ملء جميع الحقول المطلوبة." });
      return;
    }
    const digits = form.phone.replace(/[^0-9+]/g, "");
    if (digits.length < 9) {
      setError("رقم الهاتف غير صحيح.");
      toast.error("رقم هاتف غير صحيح", { description: "يجب أن يحتوي على ٩ أرقام على الأقل." });
      return;
    }
    if (!form.email.includes("@")) {
      setError("البريد الإلكتروني غير صحيح.");
      toast.error("بريد غير صحيح");
      return;
    }
    if (cooldown > 0) {
      toast.error("يرجى الانتظار", { description: `حاول مجدداً خلال ${cooldown} ثانية.` });
      return;
    }

    setSubmitting(true);
    try {
      await fetch(N8N_FORM_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, submittedAt: new Date().toISOString() }),
      });
    } catch { /* webhook error - still proceed */ }
    finally {
      setSubmitting(false);
      setSubmitted(true);
      setCooldown(30);
      toast.success("أنت على القائمة! 🎉", { description: "سنتواصل معك عبر واتساب فور إطلاق ردود.", duration: 4000 });
      setTimeout(() => router.push("/thank-you"), 1500);
    }
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.06)",
    borderColor: "rgba(255,255,255,0.1)",
  };
  const focusHandler = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) =>
    (e.target.style.borderColor = "rgba(124,58,237,0.6)");
  const blurHandler = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) =>
    (e.target.style.borderColor = "rgba(255,255,255,0.1)");

  const baseInputClass = "w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 outline-none transition-all duration-200 border font-medium";

  return (
    <section id="waitlist" className="py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <div className="absolute -inset-1 rounded-3xl opacity-40 blur-xl"
            style={{ background: "linear-gradient(135deg, #1d4ed8, #7c3aed, #06b6d4)" }} />
          <div className="relative rounded-3xl p-8 sm:p-12 border"
            style={{ background: "rgba(6,11,26,0.95)", borderColor: "rgba(124,58,237,0.3)", backdropFilter: "blur(20px)" }}>
            {submitted ? (
              <div className="text-center py-8 fade-in-up">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: "linear-gradient(135deg, #1d4ed8, #7c3aed)" }}>
                  <CheckCircle size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-black text-white mb-3">أنت في القائمة! 🎉</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  شكراً <strong className="text-white">{form.name}</strong>! سنتواصل معك عبر واتساب فور إطلاق ردود.
                </p>
                <div className="flex items-center justify-center gap-2 text-green-400 font-semibold">
                  <CheckCircle size={18} /><span>تم التسجيل بنجاح</span>
                </div>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-semibold mb-4">
                    <Star size={14} fill="currentColor" /> أماكن محدودة
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">انضم لقائمة الانتظار</h2>
                  <p className="text-slate-400">سجّل بياناتك وسنتواصل معك عند الإطلاق</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* الاسم الكامل */}
                  <div>
                    <label className="block text-sm font-bold text-slate-300 mb-2">الاسم الكامل <span className="text-purple-400">*</span></label>
                    <input name="name" type="text" value={form.name} onChange={handleChange}
                      placeholder="محمد أحمد" className={baseInputClass} style={inputStyle}
                      onFocus={focusHandler} onBlur={blurHandler} />
                  </div>

                  {/* رقم الهاتف */}
                  <div>
                    <label className="block text-sm font-bold text-slate-300 mb-2">رقم الهاتف <span className="text-purple-400">*</span></label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange}
                      placeholder="+966 5X XXX XXXX" dir="ltr"
                      className={`${baseInputClass} text-left`} style={inputStyle}
                      onFocus={focusHandler} onBlur={blurHandler} />
                  </div>

                  {/* البريد الإلكتروني */}
                  <div>
                    <label className="block text-sm font-bold text-slate-300 mb-2">البريد الإلكتروني <span className="text-purple-400">*</span></label>
                    <input name="email" type="email" value={form.email} onChange={handleChange}
                      placeholder="name@company.com" dir="ltr"
                      className={`${baseInputClass} text-left`} style={inputStyle}
                      onFocus={focusHandler} onBlur={blurHandler} />
                  </div>

                  {/* اسم العمل */}
                  <div>
                    <label className="block text-sm font-bold text-slate-300 mb-2">اسم العمل / النشاط التجاري <span className="text-purple-400">*</span></label>
                    <input name="business" type="text" value={form.business} onChange={handleChange}
                      placeholder="متجر الأناقة" className={baseInputClass} style={inputStyle}
                      onFocus={focusHandler} onBlur={blurHandler} />
                  </div>

                  {/* عدد الرسائل المتوقعة */}
                  <div>
                    <label className="block text-sm font-bold text-slate-300 mb-2">عدد الرسائل المتوقعة شهرياً <span className="text-purple-400">*</span></label>
                    <select name="messages" value={form.messages} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-white outline-none transition-all duration-200 border font-medium appearance-none cursor-pointer"
                      style={inputStyle} onFocus={focusHandler} onBlur={blurHandler}>
                      <option value="" className="bg-[#0a0f2e]">اختر الحجم المتوقع</option>
                      <option value="0-500" className="bg-[#0a0f2e]">أقل من ٥٠٠ رسالة / شهر</option>
                      <option value="500-2000" className="bg-[#0a0f2e]">٥٠٠ – ٢٬٠٠٠ رسالة / شهر</option>
                      <option value="2000-10000" className="bg-[#0a0f2e]">٢٬٠٠٠ – ١٠٬٠٠٠ رسالة / شهر</option>
                      <option value="10000+" className="bg-[#0a0f2e]">أكثر من ١٠٬٠٠٠ رسالة / شهر</option>
                    </select>
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm font-medium bg-red-500/10 px-4 py-3 rounded-xl border border-red-500/20">⚠️ {error}</p>
                  )}

                  <button type="submit" disabled={submitting || cooldown > 0}
                    className="w-full py-4 rounded-xl text-white font-black text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 mt-2"
                    style={{ background: "linear-gradient(135deg, #1d4ed8 0%, #7c3aed 50%, #06b6d4 100%)", boxShadow: "0 8px 30px rgba(124,58,237,0.4)" }}
                    aria-label="التسجيل في قائمة الانتظار">
                    {submitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        جاري الإرسال…
                      </span>
                    ) : cooldown > 0 ? `انتظر ${cooldown}s` : (
                      <span className="flex items-center justify-center gap-2"><Sparkles size={20} /> سجّلني في القائمة</span>
                    )}
                  </button>

                  <p className="text-center text-slate-500 text-xs mt-3">
                    بالتسجيل توافق على{" "}
                    <Link href="/privacy" className="text-purple-400 hover:underline">سياسة الخصوصية</Link>
                    {" "}·{" "}
                    <Link href="/terms" className="text-purple-400 hover:underline">شروط الخدمة</Link>
                    {" "}·{" "}
                    <Link href="/data-deletion" className="text-purple-400 hover:underline">حذف البيانات</Link>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}



// ─────────────────────────────────────────────────────────────────────────────
// FAQ SECTION
// ─────────────────────────────────────────────────────────────────────────────
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "كيف تكون دقة ردود الذكاء الاصطناعي؟",
      a: "يستخدم ردود نماذج لغوية متقدمة مُدرَّبة بعناية على سيناريوهات خدمة العملاء. الدقة تتجاوز ٩٥٪ في الحالات الاعتيادية، ويتحسّن النظام بمرور الوقت كلما تعلَّم أسلوب علامتك التجارية.",
    },
    {
      q: "ماذا يحدث إذا لم يستطع الذكاء الاصطناعي الإجابة؟",
      a: "في حالة استفسارات معقدة أو حساسة، يُنبّه ردود فريقك البشري فوراً ويُحوّل المحادثة بسلاسة — دون أن يشعر العميل بالفرق. أنت دائماً قادر على التدخل في أي وقت.",
    },
    {
      q: "هل الإعداد صعب أو يحتاج خبرة تقنية؟",
      a: "لا أبداً! صُمّم ردود خصيصاً ليكون سهلاً للجميع. الربط مع واتساب وإنستغرام وماسنجر يستغرق أقل من ١٠ دقائق عبر واجهة بصرية بسيطة. لا برمجة، لا تعقيد.",
    },
    {
      q: "هل بيانات عملائي آمنة ومحمية؟",
      a: "نعم، نلتزم بأعلى معايير الحماية والخصوصية. جميع البيانات مُشفَّرة بروتوكول TLS، ولا نُشارك أي بيانات مع جهات خارجية. نتوافق مع سياسات Meta وجميع اللوائح المعمول بها.",
    },
  ];

  return (
    <section className="py-24 px-4" style={{ background: "rgba(255,255,255,0.015)" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-semibold mb-4">
            <MessageCircle size={14} />
            الأسئلة الشائعة
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            لديك <span className="gradient-text">أسئلة؟</span>
          </h2>
          <p className="text-slate-400">إليك ما يسأل عنه عملاؤنا دائماً</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                borderColor: openIndex === i ? "rgba(124,58,237,0.4)" : "rgba(255,255,255,0.08)",
                background: openIndex === i ? "rgba(124,58,237,0.06)" : "rgba(255,255,255,0.03)",
              }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-right transition-colors duration-200 hover:bg-white/5"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-white font-bold text-base sm:text-lg">{faq.q}</span>
                <div
                  className="flex-shrink-0 mr-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: openIndex === i ? "linear-gradient(135deg,#1d4ed8,#7c3aed)" : "rgba(255,255,255,0.08)",
                  }}
                >
                  {openIndex === i ? (
                    <ChevronUp size={16} className="text-white" />
                  ) : (
                    <ChevronDown size={16} className="text-slate-400" />
                  )}
                </div>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 fade-in-up">
                  <p className="text-slate-300 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      className="pt-16 pb-8 px-4 border-t"
      style={{ borderColor: "rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="ردود" width={40} height={40} className="rounded-xl object-contain bg-white p-0.5" />
            <div>
              <p className="text-white font-black text-2xl">ردود</p>
              <p className="text-slate-500 text-xs">أتمتة خدمة العملاء بالذكاء الاصطناعي</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors duration-200 font-medium">
              سياسة الخصوصية
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-white transition-colors duration-200 font-medium">
              شروط الخدمة
            </Link>
            <Link href="/data-deletion" className="text-slate-400 hover:text-white transition-colors duration-200 font-medium">
              حذف البيانات
            </Link>
            <a
              href="mailto:info@rudood.com"
              className="text-slate-400 hover:text-white transition-colors duration-200 font-medium"
            >
              info@rudood.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t text-sm text-slate-500"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <p>© {new Date().getFullYear()} ردود. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-2">
            <span>صُنع بـ</span>
            <span className="gradient-text font-bold">❤ الذكاء الاصطناعي</span>
            <span>لخدمة عملائك</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE EXPORT
// ─────────────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Sonner toast container — positioned top-center for Arabic RTL */}
      <Toaster
        position="top-center"
        richColors
        toastOptions={{
          style: {
            fontFamily: "'Cairo', sans-serif",
            direction: "rtl",
            textAlign: "right",
          },
        }}
      />
      <Navbar />
      <HeroSection />
      <IntegrationsBanner />
      <ChatDemo />
      <FeaturesSection />
      <HowItWorksSection />
      <WaitlistSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
