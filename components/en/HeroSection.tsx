const platforms = [
  {
    name: "WhatsApp",
    color: "#25D366",
    bg: "rgba(37,211,102,0.10)",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    stat: "+1,500 msg/day",
  },
  {
    name: "Instagram",
    color: "#E1306C",
    bg: "rgba(225,48,108,0.10)",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    stat: "Instant DM replies",
  },
  {
    name: "Messenger",
    color: "#0084FF",
    bg: "rgba(0,132,255,0.10)",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.1l3.13 3.26L19.752 8.1l-6.561 6.863z" />
      </svg>
    ),
    stat: "Facebook connected",
  },
];

const stats = [
  { value: "24/7", label: "Always On", color: "text-cyan" },
  { value: "Instant", label: "Response Time", color: "text-gradient-brand" },
  { value: "60%+", label: "Cost Savings", color: "text-gradient-brand" },
  { value: "3-7", label: "Days to Launch", color: "text-cyan" },
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
            "radial-gradient(ellipse 70% 60% at 70% 40%, rgba(37,99,235,0.12) 0%, rgba(124,58,237,0.08) 50%, transparent 75%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Text Column ── */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan/30 bg-cyan/5 text-cyan text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              Powered by Artificial Intelligence
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-text-primary">
              Never lose{" "}
              <span className="text-gradient">a customer</span>
              <br />
              to slow replies
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-text-muted leading-relaxed max-w-xl">
              Rudood replies to your customers with real AI that understands your business context — across{" "}
              <span className="text-text-primary font-semibold">
                WhatsApp, Instagram & Messenger...
              </span>{" "}
              — 24/7, no extra staff needed.
            </p>

            {/* Platform pills */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-text-faint text-sm">Works on:</span>
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

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#contact"
                className="px-8 py-4 rounded-full bg-brand-gradient text-white font-bold text-lg hover:opacity-90 transition-all duration-200 shadow-brand hover:scale-[1.02] active:scale-[0.98]"
              >
                Get Started
              </a>
              <a
                href="#cases"
                className="flex items-center gap-3 px-8 py-4 rounded-full border border-border text-text-muted hover:text-text-primary hover:border-border-light transition-all duration-200 font-medium text-lg group"
              >
                <span className="w-9 h-9 rounded-full bg-surface-2 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Try It Free
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-text-muted text-sm pt-2">
              {["Setup in 3-7 days", "No technical skills needed", "24/7 instant replies"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── Visual Column — Platform Hub ── */}
          <div className="flex justify-center lg:justify-end relative">
            {/* Glow backdrop */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(37,99,235,0.10) 0%, rgba(124,58,237,0.06) 40%, transparent 70%)",
              }}
            />

            <div className="relative w-full max-w-sm flex flex-col items-center justify-center gap-6 py-8">
              {/* Center AI badge */}
              <div
                className="relative z-10 w-24 h-24 rounded-3xl flex flex-col items-center justify-center shadow-brand animate-float"
                style={{
                  background: "linear-gradient(135deg, #1E3A8A 0%, #7C3AED 60%, #0891B2 100%)",
                  boxShadow: "0 0 40px rgba(37,99,235,0.35), 0 0 80px rgba(124,58,237,0.15)",
                }}
              >
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15m-9.3-6.545l-3.488 2.152M4.5 14.5l-2.25 2.25M19.8 15l2.25 2.25M15 3.186a24.33 24.33 0 01.75.082m0 0V9a2.25 2.25 0 00.659 1.591L19.8 15m-4.8-11.814c-.251.023-.501.05-.75.082" />
                </svg>
                <span className="text-white text-xs font-black mt-1">AI</span>
              </div>

              {/* Connecting lines + platform cards */}
              <div className="grid grid-cols-3 gap-4 w-full">
                {platforms.map((p, i) => (
                  <div
                    key={p.name}
                    className="flex flex-col items-center gap-3 animate-fade-in-up"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    {/* Connector line */}
                    <div
                      className="w-px h-8 rounded-full"
                      style={{
                        background: `linear-gradient(to bottom, rgba(37,99,235,0.3), ${p.color}40)`,
                      }}
                    />
                    {/* Platform card */}
                    <div
                      className="w-full rounded-2xl p-4 flex flex-col items-center gap-2 border transition-all hover:scale-105"
                      style={{
                        background: p.bg,
                        borderColor: `${p.color}30`,
                      }}
                    >
                      <div style={{ color: p.color }}>{p.icon}</div>
                      <span className="text-text-primary text-xs font-bold text-center">{p.name}</span>
                      <span className="text-text-faint text-[10px] text-center leading-tight">{p.stat}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Live indicator */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan/20 bg-cyan/5">
                <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                <span className="text-cyan text-xs font-semibold">System is responding now — instantly</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-20 pt-10 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label} className="space-y-1">
              <p className={`text-3xl font-black ${s.color}`}>{s.value}</p>
              <p className="text-text-muted text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
