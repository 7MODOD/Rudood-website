"use client";

import { useState, useRef, useEffect } from "react";

/* ── Chatwoot Public API config ── */
const BASE  = process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL  ?? "https://chat.rudood.app";
const INBOX = process.env.NEXT_PUBLIC_CHATWOOT_INBOX_ID  ?? "";
const PUB   = `${BASE}/public/api/v1/inboxes/${INBOX}`;

/* ── Types ── */
interface Msg { id?: number; from: "user" | "agent"; text: string; time: string; }
interface Session { contactId: string; convId: number; }

/* ── Helpers ── */
const clock = () =>
  new Date().toLocaleTimeString("ar-SA", { hour: "2-digit", minute: "2-digit" });

const getVisitorId = (): string => {
  const key = "rw_vid_ar";
  let id = sessionStorage.getItem(key);
  if (!id) { id = "v-" + Math.random().toString(36).slice(2, 10); sessionStorage.setItem(key, id); }
  return id;
};

/* ── Feature cards data ── */
const features = [
  { icon: "⚡", bg: "rgba(6,182,212,0.10)",  border: "rgba(6,182,212,0.25)",  title: "سرعة فائقة",       desc: "ردود خلال ثوانٍ وليس دقائق — ترتفع معدلات إغلاق الصفقات بشكل ملحوظ." },
  { icon: "🧠", bg: "rgba(124,58,237,0.10)", border: "rgba(124,58,237,0.25)", title: "فهم السياق",        desc: "يتذكر المحادثة السابقة ويرد بتسلسل منطقي كالإنسان تماماً." },
  { icon: "👥", bg: "rgba(37,99,235,0.10)",  border: "rgba(37,99,235,0.25)",  title: "تحويل بشري فوري",  desc: "عند الحاجة يُنبّه فريقك ويُحوّل المحادثة بسلاسة دون أي انقطاع." },
];

/* ══════════════════════════════════════════════ */
export default function TryNow() {
  const [msgs,    setMsgs]    = useState<Msg[]>([
    { from: "agent", text: "مرحباً! كيف يمكنني مساعدتك اليوم؟ 😊", time: "09:41" },
  ]);
  const [input,   setInput]   = useState("");
  const [status,  setStatus]  = useState<"idle" | "sending" | "waiting">("idle");

  const sessionRef    = useRef<Session | null>(null);
  const lastIdRef     = useRef<number>(0);
  const pollRef       = useRef<ReturnType<typeof setInterval> | null>(null);
  const bottomRef     = useRef<HTMLDivElement>(null);

  /* scroll to bottom on new messages */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [msgs, status]);

  /* clear poll on unmount */
  useEffect(() => () => { if (pollRef.current) clearInterval(pollRef.current); }, []);

  /* ── Init Chatwoot contact + conversation ── */
  const initSession = async (): Promise<Session> => {
    if (sessionRef.current) return sessionRef.current;

    const visitorId = getVisitorId();

    // 1. create / retrieve contact
    const cRes  = await fetch(`${PUB}/contacts`, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify({ name: "زائر الموقع", identifier: visitorId }),
    });
    const cData = await cRes.json();
    const contactId: string = cData.source_id;

    // 2. create conversation
    const vRes  = await fetch(`${PUB}/contacts/${contactId}/conversations`, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
    });
    const vData = await vRes.json();
    const convId: number = vData.id;

    const session: Session = { contactId, convId };
    sessionRef.current = session;
    return session;
  };

  /* ── Poll for agent replies ── */
  const startPolling = (session: Session) => {
    if (pollRef.current) clearInterval(pollRef.current);

    pollRef.current = setInterval(async () => {
      try {
        const res  = await fetch(
          `${PUB}/contacts/${session.contactId}/conversations/${session.convId}/messages`
        );
        const data = await res.json();
        const all: Array<{ id: number; content: string; message_type: number }> =
          Array.isArray(data) ? data : (data.payload ?? []);

        // message_type 1 = agent outgoing (agent → visitor)
        const fresh = all.filter(m => m.message_type === 1 && m.id > lastIdRef.current);

        if (fresh.length > 0) {
          fresh.forEach(m => {
            setMsgs(prev => [...prev, { id: m.id, from: "agent", text: m.content, time: clock() }]);
            lastIdRef.current = Math.max(lastIdRef.current, m.id);
          });
          setStatus("idle");
          clearInterval(pollRef.current!);
          pollRef.current = null;
        }
      } catch { /* silent */ }
    }, 2500);

    // stop polling after 60 s if no reply
    setTimeout(() => {
      if (pollRef.current) {
        clearInterval(pollRef.current);
        pollRef.current = null;
        setStatus("idle");
      }
    }, 60_000);
  };

  /* ── Send message ── */
  const send = async () => {
    const text = input.trim();
    if (!text || status === "sending") return;
    setInput("");
    setStatus("sending");
    setMsgs(prev => [...prev, { from: "user", text, time: clock() }]);

    try {
      const session = await initSession();
      await fetch(
        `${PUB}/contacts/${session.contactId}/conversations/${session.convId}/messages`,
        {
          method:  "POST",
          headers: { "Content-Type": "application/json" },
          body:    JSON.stringify({ content: text }),
        }
      );
      setStatus("waiting");
      startPolling(session);
    } catch {
      setStatus("idle");
      setMsgs(prev => [
        ...prev,
        { from: "agent", text: "حدث خطأ في الاتصال، حاول مجدداً.", time: clock() },
      ]);
    }
  };

  /* ══ Render ══ */
  return (
    <section id="try" className="py-24 bg-night relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(37,99,235,0.07) 0%, rgba(124,58,237,0.05) 40%, transparent 70%)" }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan/30 bg-cyan/10 text-cyan text-sm font-semibold mb-5">
            <span>🤖</span> جرّب ردود الآن
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary mb-4">
            شاهد الذكاء الاصطناعي <span className="text-gradient">في العمل</span>
          </h2>
          <p className="text-text-muted text-lg">أرسل رسالة وتحدث مع فريق ردود مباشرةً</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 justify-center">
          {/* ── Phone Mockup ── */}
          <div className="relative animate-float shrink-0">
            <div className="absolute inset-0 rounded-[2.5rem] blur-2xl opacity-25 scale-95 pointer-events-none"
              style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED,#06B6D4)" }} />

            <div className="relative flex flex-col overflow-hidden"
              style={{ width: "320px", height: "640px", borderRadius: "2.5rem",
                background: "linear-gradient(180deg,#0d1117 0%,#0a0f2e 100%)",
                border: "2px solid rgba(124,58,237,0.4)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.6),0 0 40px rgba(37,99,235,0.15)" }}>

              {/* Status bar */}
              <div className="relative flex items-center justify-between px-6 pt-3 pb-1 shrink-0">
                <span className="text-white text-xs font-semibold">9:41</span>
                <div className="absolute left-1/2 -translate-x-1/2 top-2 bg-black"
                  style={{ width: "80px", height: "20px", borderRadius: "10px" }} />
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-px items-end">
                    {[2,3,4,5].map(h => (
                      <div key={h} className="w-0.5 rounded-sm bg-white/70" style={{ height:`${h}px` }} />
                    ))}
                  </div>
                  <svg className="w-3.5 h-3.5 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1.371 5.878C5.042 2.457 9.283.75 12 .75s6.958 1.707 10.629 5.128a.75.75 0 01-.017 1.078L12 16.75 1.388 6.956a.75.75 0 01-.017-1.078z"/>
                  </svg>
                  <div className="flex items-center"
                    style={{ width:"24px",height:"12px",border:"1px solid rgba(255,255,255,0.4)",borderRadius:"3px",padding:"1px" }}>
                    <div className="bg-white/80 h-full rounded-sm" style={{ width:"70%" }} />
                  </div>
                </div>
              </div>

              {/* Chat header */}
              <div className="flex items-center gap-3 px-4 py-3 shrink-0"
                style={{ background:"rgba(255,255,255,0.05)", borderBottom:"1px solid rgba(255,255,255,0.08)" }}>
                <div className="w-10 h-10 rounded-full bg-brand-gradient flex items-center justify-center text-white font-black text-sm shrink-0">ر</div>
                <div>
                  <p className="text-white text-sm font-bold leading-none mb-1">ردود AI</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs">متصل الآن</span>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-3 py-4 space-y-3" dir="rtl"
                style={{ scrollbarWidth:"none" }}>
                {msgs.map((m, i) => (
                  <div key={i} className={`flex flex-col ${m.from === "agent" ? "items-start" : "items-end"}`}>
                    <div className="max-w-[78%] px-4 py-2.5 text-sm font-medium text-white"
                      style={m.from === "agent"
                        ? { background:"linear-gradient(135deg,#1d4ed8,#7c3aed)",
                            boxShadow:"0 4px 15px rgba(124,58,237,0.3)",
                            borderRadius:"1rem", borderTopRightRadius:"4px" }
                        : { background:"rgba(255,255,255,0.13)",
                            borderRadius:"1rem", borderTopLeftRadius:"4px" }}>
                      {m.text}
                    </div>
                    <span className="text-[10px] text-white/40 mt-1 px-1">{m.time}</span>
                  </div>
                ))}

                {/* Waiting indicator */}
                {status === "waiting" && (
                  <div className="flex flex-col items-start">
                    <div className="px-4 py-3"
                      style={{ background:"linear-gradient(135deg,#1d4ed8,#7c3aed)",
                        boxShadow:"0 4px 15px rgba(124,58,237,0.3)",
                        borderRadius:"1rem", borderTopRightRadius:"4px" }}>
                      <div className="flex gap-1 items-center">
                        {[0,0.2,0.4].map((d,j) => (
                          <span key={j} className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce"
                            style={{ animationDelay:`${d}s` }} />
                        ))}
                      </div>
                    </div>
                    <span className="text-[10px] text-white/40 mt-1 px-1">يكتب...</span>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              {/* Input */}
              <div className="px-3 py-3 flex items-center gap-2 shrink-0" dir="rtl"
                style={{ background:"rgba(6,11,26,0.95)", backdropFilter:"blur(10px)",
                  borderTop:"1px solid rgba(255,255,255,0.08)" }}>
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && send()}
                  placeholder="اكتب رسالتك..."
                  className="flex-1 px-4 py-2 text-sm text-white outline-none"
                  style={{ background:"rgba(255,255,255,0.08)",
                    border:"1px solid rgba(255,255,255,0.10)",
                    borderRadius:"1rem", caretColor:"#06B6D4" }}
                />
                <button
                  onClick={send}
                  disabled={!input.trim() || status === "sending"}
                  aria-label="إرسال"
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{ background:"linear-gradient(135deg,#1d4ed8,#7c3aed)" }}>
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* ── Feature Cards ── */}
          <div className="flex flex-col gap-5 w-full max-w-sm">
            {features.map(f => (
              <div key={f.title}
                className="p-5 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
                style={{ background:f.bg, borderColor:f.border }}>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
                    style={{ background:f.bg, border:`1px solid ${f.border}` }}>
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-text-primary font-bold mb-1">{f.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-1 p-5 rounded-2xl border border-primary/20 bg-primary/5 text-center">
              <p className="text-text-muted text-sm mb-3">هل أعجبك ما رأيت؟</p>
              <a href="#contact"
                className="inline-block px-6 py-3 rounded-full bg-brand-gradient text-white text-sm font-bold hover:opacity-90 shadow-brand-sm transition-all">
                ابدأ معنا الآن
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
