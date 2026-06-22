const painPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Messages getting lost in the chaos",
    description:
      "Hundreds of messages a day and impossible to follow them all. A customer asked about a product 2 hours ago and no one replied — they went to a competitor.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Replies taking hours",
    description:
      "A customer asks at 11pm and no one is available. By morning, you've lost the deal. Customers today don't wait.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Never-ending staff costs",
    description:
      "A customer service agent's monthly salary costs you far more than Rudood. And you still get human errors, sick days, and delays.",
  },
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Smart replies that understand context",
    description:
      "Not rigid templates. Replies that understand the full conversation context and respond naturally — like your smartest employee.",
    highlight: "AI",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Available 24/7 on all platforms",
    description:
      "Works on WhatsApp, Instagram, and Messenger all night and day, on holidays and weekends, without stopping.",
    highlight: "Always",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Save 60%+ on support costs",
    description:
      "Instead of paying thousands monthly for staff, Rudood handles repetitive questions automatically and only escalates complex cases to your team.",
    highlight: "60%+",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Your data is safe & protected",
    description:
      "Your data and your customers' data are protected by the highest security standards. We never share information with any third party.",
    highlight: "Secure",
  },
];

export default function WhyRudood() {
  return (
    <section id="why" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#0891B2] text-sm font-semibold uppercase tracking-widest mb-3">
            Why Rudood?
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E1B4B] mb-4">
            The problem every business owner faces
          </h2>
          <p className="text-[#334155] text-lg max-w-2xl mx-auto">
            You don't need more staff. You need a system that never sleeps and never makes mistakes.
          </p>
        </div>

        {/* Pain Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="relative p-6 rounded-2xl border border-red-200 bg-red-50 hover:border-red-300 transition-all duration-300 group shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-red-100 border border-red-200 flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform">
                {point.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1E1B4B] mb-2">{point.title}</h3>
              <p className="text-[#334155] text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Divider with CTA text */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40"></div>
            <p className="text-[#0891B2] font-bold text-lg">The solution with Rudood</p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative p-6 rounded-2xl border border-slate-200 bg-[#F1F5F9] hover:border-[#2563EB]/40 transition-all duration-300 group cursor-default"
            >
              {/* Highlight badge */}
              <div className="absolute top-4 right-4 text-xs font-bold text-[#0891B2] bg-[#2563EB]/10 px-2 py-0.5 rounded-full border border-[#2563EB]/20">
                {feature.highlight}
              </div>

              <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#0891B2] mb-4 group-hover:bg-[#2563EB]/15 group-hover:scale-110 transition-all">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold text-[#1E1B4B] mb-2">{feature.title}</h3>
              <p className="text-[#334155] text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
