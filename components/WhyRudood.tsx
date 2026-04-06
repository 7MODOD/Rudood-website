const painPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "رسائل تضيع في الفوضى",
    description:
      "مئات الرسائل يومياً ومستحيل تتابعها كلها. عميل سأل عن منتج قبل ساعتين ولا أحد رد عليه — وذهب للمنافس.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "الردود تأخذ ساعات",
    description:
      "العميل يسأل في الساعة 11 مساءً ولا أحد متاح. بحلول الصباح، فقدت الصفقة. العملاء اليوم لا يصبرون.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "تكاليف موظفين لا تتوقف",
    description:
      "راتب موظف خدمة عملاء شهرياً يكلفك أضعاف ما تدفعه لردود. وما زلت تحصل على خطأ بشري وإجازات وتأخير.",
  },
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "ردود ذكية تفهم السياق",
    description:
      'مش قوالب جامدة. ردود يفهم سياق محادثة كاملة ويرد بطبيعية تماماً — كأنه موظفك الأذكى.',
    highlight: "GPT-4o",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "متاح 24/7 على كل المنصات",
    description:
      "يعمل على واتساب وإنستغرام وماسنجر طوال الليل والنهار، في الأعياد والعطل، دون توقف.",
    highlight: "دائماً",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "وفّر +60% من تكاليف الدعم",
    description:
      "بدلاً من دفع آلاف شهرياً لموظفين، ردود يتولى الأسئلة المتكررة تلقائياً ويحوّل فقط الحالات المعقدة لفريقك.",
    highlight: "60%+",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "بياناتك آمنة ومحمية",
    description:
      "بياناتك وبيانات عملاءك محمية بأعلى معايير الأمان. لا نشارك المعلومات مع أي طرف ثالث.",
    highlight: "آمن",
  },
];

export default function WhyRudood() {
  return (
    <section id="why" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">
            لماذا ردود؟
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary mb-4">
            المشكلة التي يعانيها كل صاحب متجر
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            أنت لا تحتاج المزيد من الموظفين. أنت تحتاج نظاماً لا ينام ولا يخطئ.
          </p>
        </div>

        {/* Pain Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="relative p-6 rounded-2xl border border-red-900/30 bg-red-950/10 hover:border-red-800/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-red-950/40 border border-red-900/40 flex items-center justify-center text-red-400 mb-4 group-hover:scale-110 transition-transform">
                {point.icon}
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">{point.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Divider with CTA text */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40"></div>
            <p className="text-cyan font-bold text-lg">الحل مع ردود</p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative p-6 rounded-2xl border border-border bg-surface-2 hover:border-primary/40 transition-all duration-300 group cursor-default"
            >
              {/* Highlight badge */}
              <div className="absolute top-4 end-4 text-xs font-bold text-cyan bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                {feature.highlight}
              </div>

              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-cyan mb-4 group-hover:bg-primary/15 group-hover:scale-110 transition-all">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold text-text-primary mb-2">{feature.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
