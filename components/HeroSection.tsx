export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Dot Grid Background */}
      <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 80% 50%, rgba(212,168,67,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text Column (right in RTL) */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal/30 bg-teal/5 text-teal text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse"></span>
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
              ردود يرد على عملاءك على واتساب بذكاء اصطناعي حقيقي يفهم سياق بزنسك —
              24/7 — بدون موظف إضافي وبدون تأخير.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#pricing"
                className="px-8 py-4 rounded-full bg-gold text-night font-bold text-lg hover:bg-gold-light transition-all duration-200 shadow-gold hover:shadow-gold hover:scale-[1.02] active:scale-[0.98]"
              >
                ابدأ الآن
              </a>
              <a
                href="#cases"
                className="flex items-center gap-3 px-8 py-4 rounded-full border border-border text-text-muted hover:text-text-primary hover:border-gold/40 transition-all duration-200 font-medium text-lg group"
              >
                <span className="w-9 h-9 rounded-full bg-surface-2 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <svg className="w-4 h-4 rtl:rotate-180" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                شاهد العرض
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-text-muted text-sm pt-2">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                إعداد في <span dir="ltr">3-7</span> أيام
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                بدون خبرة تقنية
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                متاح <span dir="ltr">24/7</span>
              </span>
            </div>
          </div>

          {/* Visual Column (left in RTL) */}
          <div className="flex justify-center lg:justify-start relative">
            {/* Glow behind phone */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(212,168,67,0.12) 0%, rgba(20,184,166,0.06) 50%, transparent 70%)",
              }}
            />

            {/* Phone Mockup */}
            <div className="relative animate-float">
              {/* Phone shell */}
              <div className="relative w-[280px] sm:w-[300px] rounded-[40px] p-3 shadow-2xl"
                style={{
                  background: "linear-gradient(145deg, #1C2040 0%, #13162A 100%)",
                  boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06), inset 0 0 0 1px rgba(255,255,255,0.04)",
                }}
              >
                {/* Status bar */}
                <div className="flex justify-between items-center px-3 py-1.5 text-[10px] text-white/40 mb-1">
                  <span dir="ltr">9:41</span>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0119 12.55M5 12.55a10.94 10.94 0 015.17-2.39M10.71 5.05A16 16 0 0122.56 9M1.42 9a15.91 15.91 0 014.7-2.88M8.53 16.11a6 6 0 016.95 0M12 20h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="11" rx="2" ry="2"/><path d="M22 11V9"/></svg>
                  </div>
                </div>

                {/* Screen */}
                <div className="rounded-[28px] overflow-hidden" style={{ background: "#ECE5DD" }}>
                  {/* WhatsApp Header */}
                  <div className="flex items-center gap-3 px-4 py-3" style={{ background: "#075E54" }}>
                    <div className="w-9 h-9 rounded-full bg-teal/80 flex items-center justify-center text-white text-xs font-bold animate-pulse-ring shrink-0">
                      ر
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white leading-tight">ردود AI</p>
                      <p className="text-[11px] text-green-300">متصل الآن ●</p>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="p-3 space-y-2 min-h-[220px]" dir="rtl">
                    {/* Customer message */}
                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-white px-3 py-2 shadow-sm">
                        <p className="text-[12px] text-gray-800 leading-relaxed" dir="auto">
                          كم سعر الفستان الأسود مقاس L؟
                        </p>
                        <p className="text-[9px] text-gray-400 mt-1 text-start">9:41</p>
                      </div>
                    </div>

                    {/* AI reply */}
                    <div className="flex justify-end">
                      <div className="max-w-[88%] rounded-2xl rounded-tl-sm px-3 py-2 shadow-sm" style={{ background: "#DCF8C6" }}>
                        <p className="text-[10px] text-teal-700 font-semibold mb-1">ردود AI ✦</p>
                        <p className="text-[12px] text-gray-800 leading-relaxed" dir="auto">
                          أهلاً! 😊 الفستان الأسود بمقاس L متوفر بسعر ٨٥ ريال. عندنا كمان نفس الموديل بألوان الكحلي والبيج — ودك أرسلك صور؟
                        </p>
                        <p className="text-[9px] text-gray-400 mt-1 text-end">9:41 ✓✓</p>
                      </div>
                    </div>

                    {/* Customer follow-up */}
                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-white px-3 py-2 shadow-sm">
                        <p className="text-[12px] text-gray-800 leading-relaxed" dir="auto">
                          آه ارسليلي الكحلي
                        </p>
                        <p className="text-[9px] text-gray-400 mt-1 text-start">9:42</p>
                      </div>
                    </div>

                    {/* Typing indicator */}
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

              {/* Floating badge: Response time */}
              <div
                className="absolute -bottom-4 -end-4 sm:-end-8 glass-card rounded-2xl px-4 py-3 text-sm shadow-xl"
                style={{ border: "1px solid rgba(212,168,67,0.3)" }}
              >
                <p className="text-text-muted text-xs mb-0.5">وقت الرد</p>
                <p className="text-gold font-black text-lg" dir="ltr">&lt; 1 ثانية</p>
              </div>

              {/* Floating badge: Uptime */}
              <div
                className="absolute -top-4 -start-4 sm:-start-8 glass-card rounded-2xl px-4 py-3 text-sm shadow-xl"
              >
                <p className="text-text-muted text-xs mb-0.5">متاح</p>
                <p className="text-teal font-black text-lg" dir="ltr">24 / 7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-20 pt-10 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "24/7", label: "خدمة متواصلة", color: "text-teal" },
            { value: "< 1s", label: "متوسط وقت الرد", color: "text-gold" },
            { value: "60%+", label: "توفير في التكاليف", color: "text-gold" },
            { value: "7 أيام", label: "للإعداد والتشغيل", color: "text-teal" },
          ].map((stat) => (
            <div key={stat.label} className="space-y-1">
              <p className={`text-3xl font-black ${stat.color}`} dir="ltr">
                {stat.value}
              </p>
              <p className="text-text-muted text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
