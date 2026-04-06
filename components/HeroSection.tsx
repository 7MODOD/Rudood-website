const platforms = [
  {
    name: "واتساب",
    color: "#25D366",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    name: "إنستغرام",
    color: "#E1306C",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "ماسنجر",
    color: "#0084FF",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.1l3.13 3.26L19.752 8.1l-6.561 6.863z" />
      </svg>
    ),
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Dot Grid Background */}
      <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />

      {/* Brand gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 70% 40%, rgba(37,99,235,0.10) 0%, rgba(124,58,237,0.07) 40%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text Column */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan/30 bg-cyan/5 text-cyan text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
              مدعوم بالذكاء الاصطناعي GPT-4o
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-text-primary">
              لا تخسر{" "}
              <span className="text-gradient">عميلاً واحداً</span>
              <br />
              بسبب الانتظار
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-text-muted leading-relaxed max-w-xl">
              ردود يرد على عملاءك بذكاء اصطناعي حقيقي يفهم سياق بزنسك — عبر{" "}
              <span className="text-text-primary font-semibold">واتساب وإنستغرام وماسنجر</span> —
              24/7 بدون موظف إضافي.
            </p>

            {/* Supported Platforms */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-text-faint text-sm">يعمل على:</span>
              {platforms.map((p) => (
                <div
                  key={p.name}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-surface text-sm font-medium"
                  style={{ color: p.color }}
                >
                  {p.icon}
                  {p.name}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#contact"
                className="px-8 py-4 rounded-full bg-brand-gradient text-white font-bold text-lg hover:opacity-90 transition-all duration-200 shadow-brand hover:scale-[1.02] active:scale-[0.98]"
              >
                ابدأ الآن مجاناً
              </a>
              <a
                href="#cases"
                className="flex items-center gap-3 px-8 py-4 rounded-full border border-border text-text-muted hover:text-text-primary hover:border-border-light transition-all duration-200 font-medium text-lg group"
              >
                <span className="w-9 h-9 rounded-full bg-surface-2 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <svg className="w-4 h-4 rtl:rotate-180" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                شاهد العرض
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-text-muted text-sm pt-2">
              {[
                "إعداد في 3-7 أيام",
                "بدون خبرة تقنية",
                "ردود فورية 24/7",
              ].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Visual Column */}
          <div className="flex justify-center lg:justify-start relative">
            {/* Glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(37,99,235,0.12) 0%, rgba(124,58,237,0.08) 40%, transparent 70%)",
              }}
            />

            {/* Phone Mockup */}
            <div className="relative animate-float">
              <div
                className="relative w-[280px] sm:w-[300px] rounded-[40px] p-3 shadow-2xl"
                style={{
                  background: "linear-gradient(145deg, #141E38 0%, #0D1628 100%)",
                  boxShadow:
                    "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06), inset 0 0 0 1px rgba(255,255,255,0.04)",
                }}
              >
                {/* Status bar */}
                <div className="flex justify-between items-center px-3 py-1.5 text-[10px] text-white/40 mb-1" dir="ltr">
                  <span>9:41</span>
                  <span>●●●</span>
                </div>

                {/* Screen */}
                <div className="rounded-[28px] overflow-hidden" style={{ background: "#ECE5DD" }}>
                  {/* WhatsApp Header */}
                  <div className="flex items-center gap-3 px-4 py-3" style={{ background: "#075E54" }}>
                    <div className="w-9 h-9 rounded-full bg-cyan/80 flex items-center justify-center text-white text-xs font-bold animate-pulse-ring shrink-0">
                      ر
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white leading-tight">ردود AI</p>
                      <p className="text-[11px] text-green-300">ردود فورية ●</p>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="p-3 space-y-2 min-h-[220px]" dir="rtl">
                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-white px-3 py-2 shadow-sm">
                        <p className="text-[12px] text-gray-800 leading-relaxed" dir="auto">
                          كم سعر الفستان الأسود مقاس L؟
                        </p>
                        <p className="text-[9px] text-gray-400 mt-1 text-start">9:41</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="max-w-[88%] rounded-2xl rounded-tl-sm px-3 py-2 shadow-sm" style={{ background: "#DCF8C6" }}>
                        <p className="text-[10px] text-teal-700 font-semibold mb-1">ردود AI ✦</p>
                        <p className="text-[12px] text-gray-800 leading-relaxed" dir="auto">
                          أهلاً! 😊 الفستان الأسود مقاس L متوفر بسعر ٨٥ ريال. ودك أرسلك صور الكتالوج؟
                        </p>
                        <p className="text-[9px] text-gray-400 mt-1 text-end">9:41 ✓✓</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-white px-3 py-2 shadow-sm">
                        <p className="text-[12px] text-gray-800 leading-relaxed" dir="auto">آه ارسليلي</p>
                        <p className="text-[9px] text-gray-400 mt-1 text-start">9:42</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm" style={{ background: "#DCF8C6" }}>
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-500 typing-dot"></span>
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-500 typing-dot"></span>
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-500 typing-dot"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div
                className="absolute -bottom-4 -end-4 sm:-end-8 glass-card rounded-2xl px-4 py-3 text-sm shadow-xl"
                style={{ border: "1px solid rgba(37,99,235,0.3)" }}
              >
                <p className="text-text-muted text-xs mb-0.5">وقت الرد</p>
                <p className="text-gradient-brand font-black text-lg">فوري ⚡</p>
              </div>
              <div className="absolute -top-4 -start-4 sm:-start-8 glass-card rounded-2xl px-4 py-3 text-sm shadow-xl">
                <p className="text-text-muted text-xs mb-0.5">متاح</p>
                <p className="text-cyan font-black text-lg" dir="ltr">24 / 7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-20 pt-10 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "24/7", label: "خدمة متواصلة", color: "text-cyan" },
            { value: "فوري", label: "وقت الرد", color: "text-gradient-brand" },
            { value: "60%+", label: "توفير في التكاليف", color: "text-gradient-brand" },
            { value: "7 أيام", label: "للإعداد والتشغيل", color: "text-cyan" },
          ].map((stat) => (
            <div key={stat.label} className="space-y-1">
              <p className={`text-3xl font-black ${stat.color}`} dir="ltr">{stat.value}</p>
              <p className="text-text-muted text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
