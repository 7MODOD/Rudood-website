"use client";

import { useState } from "react";

type Message = {
  from: "customer" | "ai";
  text: string;
  time: string;
};

type Scenario = {
  label: string;
  emoji: string;
  messages: Message[];
  callouts: { title: string; desc: string; color: string }[];
};

const scenarios: Record<string, Scenario> = {
  clothing: {
    label: "متجر ملابس",
    emoji: "👗",
    messages: [
      { from: "customer", text: "السلام عليكم، عندكم فساتين سواء؟", time: "10:32" },
      {
        from: "ai",
        text: "وعليكم السلام! 😊 أيوه عندنا مجموعة متنوعة من الفساتين السواء. إيش المناسبة اللي تبحثين عنها؟ سواء فستان كاجوال أو سهرة؟",
        time: "10:32",
      },
      { from: "customer", text: "فستان سهرة، مقاس M", time: "10:33" },
      {
        from: "ai",
        text: "ممتاز! 🌟 عندنا هالأوقات فساتين سهرة مقاس M:\n\n• فستان ميدي شيفون - ١٢٥ ريال\n• فستان كت مطرز - ١٩٠ ريال\n• فستان ساتان كلاسيك - ٢٢٠ ريال\n\nودك أرسل لك صور؟ أو تبي تشوفي كتالوج كامل؟",
        time: "10:33",
      },
      { from: "customer", text: "ارسلي صور الساتان", time: "10:34" },
      {
        from: "ai",
        text: "حالاً! 📸 راسلتك الصور. الفستان الساتان متوفر بالألوان: أسود، ذهبي، وبرغندي. التوصيل خلال ٢-٣ أيام، والدفع عند الاستلام. هل تودين الحجز؟",
        time: "10:34",
      },
    ],
    callouts: [
      { title: "رد في ثانية", desc: "فهم السؤال وأجاب فوراً في أي وقت", color: "text-teal" },
      { title: "فهم السياق", desc: "يتذكر تفاصيل المحادثة ويبني عليها", color: "text-gradient-brand" },
      { title: "يُغلق الصفقة", desc: "يقترح الخطوة التالية تلقائياً", color: "text-teal" },
    ],
  },
  restaurant: {
    label: "مطعم",
    emoji: "🍕",
    messages: [
      { from: "customer", text: "كم وقت التوصيل عندكم؟", time: "8:15" },
      {
        from: "ai",
        text: "مرحباً! 🛵 التوصيل عندنا عادةً بين ٣٠-٤٥ دقيقة حسب موقعك. هل أنت في نطاق خدمتنا؟ أرسل موقعك وأتأكد لك.",
        time: "8:15",
      },
      { from: "customer", text: "أنا في الملز، الرياض", time: "8:16" },
      {
        from: "ai",
        text: "رائع! ✅ الملز في نطاقنا وبيوصل لك خلال ٣٠-٣٥ دقيقة. الحد الأدنى للطلب ٤٥ ريال والتوصيل مجاني للطلبات فوق ٨٠ ريال. تبي تطلب؟",
        time: "8:16",
      },
      { from: "customer", text: "ايش عندكم من البيتزا؟", time: "8:17" },
      {
        from: "ai",
        text: "بيتزاوي! 🍕 هذي قائمتنا:\n\n🔥 المشهورة:\n• مارغريتا - ٤٢ ريال\n• بيبروني دبل - ٥٥ ريال\n• دجاج باربيكيو - ٥٨ ريال\n\nكلها قابلة للتخصيص. تبي تضيف شيء للطلب؟",
        time: "8:17",
      },
    ],
    callouts: [
      { title: "تحقق تلقائي", desc: "تحقق من منطقة التوصيل دون تدخل بشري", color: "text-teal" },
      { title: "يحفظ التفاصيل", desc: "يربط الموقع بسياسة التوصيل نفسه", color: "text-gradient-brand" },
      { title: "يعرض القائمة", desc: "يجيب على أسئلة المنيو بدقة وسرعة", color: "text-teal" },
    ],
  },
};

function ChatBubble({ msg }: { msg: Message }) {
  const isCustomer = msg.from === "customer";
  return (
    <div className={`flex ${isCustomer ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[88%] rounded-2xl px-3 py-2 shadow-sm ${
          isCustomer
            ? "rounded-tr-sm bg-white text-gray-800"
            : "rounded-tl-sm text-gray-800"
        }`}
        style={!isCustomer ? { background: "#DCF8C6" } : {}}
      >
        {!isCustomer && (
          <p className="text-[10px] text-teal-700 font-semibold mb-1">ردود AI ✦</p>
        )}
        <p className="text-[12px] leading-relaxed whitespace-pre-line" dir="auto">
          {msg.text}
        </p>
        <p className={`text-[9px] text-gray-400 mt-1 ${isCustomer ? "text-start" : "text-end"}`} dir="ltr">
          {msg.time} {!isCustomer && "✓✓"}
        </p>
      </div>
    </div>
  );
}

export default function UseCases() {
  const [active, setActive] = useState<"clothing" | "restaurant">("clothing");
  const scenario = scenarios[active];

  return (
    <section id="cases" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gradient-brand text-sm font-semibold uppercase tracking-widest mb-3">
            أمثلة حية
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary mb-4">
            شوف ردود في العمل
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            محادثات حقيقية — ردود ذكية تفهم السياق وتخدم العميل مثل موظفك الأفضل.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="flex gap-2 p-1.5 bg-surface-2 rounded-full border border-border">
            {(["clothing", "restaurant"] as const).map((key) => {
              const s = scenarios[key];
              return (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    active === key
                      ? "bg-brand-gradient text-white shadow-brand-sm"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  <span>{s.emoji}</span>
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main content: phone + callouts */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-12">
          {/* Phone mockup */}
          <div className="shrink-0">
            <div
              className="w-[280px] sm:w-[300px] rounded-[40px] p-3 shadow-2xl"
              style={{
                background: "linear-gradient(145deg, #1C2040 0%, #13162A 100%)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
              }}
            >
              {/* Status bar */}
              <div className="flex justify-between px-3 py-1.5 text-[10px] text-white/40 mb-1" dir="ltr">
                <span>9:41</span>
                <span>●●●</span>
              </div>

              {/* Screen */}
              <div className="rounded-[28px] overflow-hidden">
                {/* WhatsApp Header */}
                <div className="flex items-center gap-3 px-4 py-3" style={{ background: "#075E54" }}>
                  <div className="w-9 h-9 rounded-full bg-teal/80 flex items-center justify-center text-white text-sm font-bold shrink-0 animate-pulse-ring">
                    ر
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">ردود AI</p>
                    <p className="text-[11px] text-green-300">متصل الآن ●</p>
                  </div>
                </div>

                {/* Messages */}
                <div
                  className="p-3 space-y-2 overflow-y-auto"
                  style={{ background: "#ECE5DD", minHeight: "340px", maxHeight: "380px" }}
                  dir="rtl"
                >
                  {scenario.messages.map((msg, i) => (
                    <div
                      key={i}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${i * 0.12}s`, animationFillMode: "both" }}
                    >
                      <ChatBubble msg={msg} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Callout cards */}
          <div className="flex flex-col gap-4 max-w-sm w-full lg:pt-8">
            <p className="text-text-muted text-sm font-semibold uppercase tracking-widest text-center lg:text-start mb-2">
              ما الذي حدث للتو؟
            </p>
            {scenario.callouts.map((c, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-surface-2 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className={`w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 ${c.color}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className={`font-bold text-sm mb-0.5 ${c.color}`}>{c.title}</p>
                  <p className="text-text-muted text-sm">{c.desc}</p>
                </div>
              </div>
            ))}

            {/* Bottom note */}
            <div className="mt-4 p-4 rounded-2xl border border-primary/20 bg-primary/5 text-center">
              <p className="text-gradient-brand text-sm font-semibold mb-1">كل هذا في ثوانٍ</p>
              <p className="text-text-muted text-xs">
                بدون موظف، بدون انتظار، بدون أخطاء.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
