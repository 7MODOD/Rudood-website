const steps = [
  {
    number: "01",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "We understand your business",
    description:
      "A session with our team where we learn about your products, services, pricing, and policies — everything your customer needs.",
  },
  {
    number: "02",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "We train the AI",
    description:
      "We build and train the model on your brand information and products so it replies exactly in your style and with your information.",
  },
  {
    number: "03",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    title: "Technical integration",
    description:
      "We connect the system to your WhatsApp Business account and platforms. We handle all the technical side — you do nothing.",
  },
  {
    number: "04",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Launch & monitor",
    description:
      "After testing, the system goes live. We monitor performance and continuously improve based on real conversations.",
  },
];

export default function HowWeWork() {
  return (
    <section id="how" className="py-24 bg-night">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary mb-4">
            How do we work together?
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            A simple and clear process — no complex tech, no code, no hassle.
          </p>
        </div>

        {/* Steps — Desktop: horizontal, Mobile: vertical */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] inset-x-[10%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col items-center text-center group">
                {/* Vertical connector for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute top-full start-1/2 -translate-x-1/2 sm:start-auto sm:translate-x-0 sm:end-0 w-px h-8 bg-gradient-to-b from-gold/30 to-transparent mt-0 hidden sm:block" />
                )}

                {/* Step circle */}
                <div className="relative z-10 w-[104px] h-[104px] rounded-full bg-surface-2 border-2 border-border group-hover:border-primary/60 transition-all duration-300 flex flex-col items-center justify-center mb-6 group-hover:shadow-brand-sm">
                  <span className="text-cyan text-xs font-black tracking-widest mb-1">
                    {step.number}
                  </span>
                  <div className="text-cyan/80 group-hover:text-cyan transition-colors">
                    {step.icon}
                  </div>
                </div>

                {/* Step content */}
                <div className="space-y-2 px-2">
                  <h3 className="text-lg font-bold text-text-primary">{step.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Banner */}
        <div className="mt-16 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
          <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-cyan shrink-0 text-2xl">
            ⏱
          </div>
          <div>
            <h3 className="text-xl font-black text-text-primary mb-1">
              Full setup in just{" "}
              <span className="text-cyan">3 - 7</span> business days
            </h3>
            <p className="text-text-muted text-sm">
              From the first day you reach out to us until the system starts replying to your customers — one week.
            </p>
          </div>
          <a
            href="#pricing"
            className="shrink-0 px-6 py-3 rounded-full bg-brand-gradient text-white font-bold hover:opacity-90 transition-all duration-200 whitespace-nowrap"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
