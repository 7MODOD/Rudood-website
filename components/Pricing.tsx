import { Building2 } from "lucide-react";

type PricingTier = {
  name: string;
  subtitle: string;
  price: string;
  period: string;
  messages: string;
  setup: string;
  features: string[];
  cta: string;
  isPopular?: boolean;
  priceColor?: string;
};

const tiers: PricingTier[] = [
  {
    name: "البداية",
    subtitle: "للمتاجر الناشئة",
    price: "199",
    period: "شهرياً",
    messages: "محادثات غير محدودة",
    setup: "رسوم تأسيس: 300 ₪ لمرة واحدة",
    features: [
      "رد آلي على الأسئلة الشائعة ومعلومات البزنس",
      "تسجيل أساسي للطلبات",
      "ربط منصة واحدة (واتساب أو فيسبوك أو إنستغرام)",
      "تدريب عبر فيديوهات وملف PDF",
      "دعم فني قياسي",
    ],
    cta: "ابدأ بالبداية",
  },
  {
    name: "المتقدمة",
    subtitle: "للمتاجر النشطة",
    price: "499",
    period: "شهرياً",
    messages: "محادثات غير محدودة",
    setup: "رسوم تأسيس: 300 ₪ لمرة واحدة",
    features: [
      "كل مزايا البداية",
      "تسجيل متقدم للطلبات عبر Google Sheets",
      "تتبع الطلبات بكود المنتج أو رقم الطلب",
      "ربط 3 منصات معاً (واتساب + ماسنجر + إنستغرام)",
      "تحويل مباشر لموظف بشري (Live Handoff)",
      "تحديث بيانات مجاني شهرياً",
      "جلسة تدريب أونلاين (ساعة)",
      "دعم متواصل 24/7",
    ],
    cta: "ابدأ بالمتقدمة",
    isPopular: true,
    priceColor: "text-gradient-brand",
  },
  {
    name: "الاحترافية",
    subtitle: "للأداء العالي",
    price: "990",
    period: "شهرياً",
    messages: "محادثات غير محدودة",
    setup: "رسوم تأسيس: مجاناً",
    features: [
      "كل مزايا المتقدمة",
      "التفاعل الصوتي (استقبال وتحليل والرد بالصوت)",
      "قراءة الصور وإيصالات الدفع (Vision AI)",
      "ردود متعددة اللغات (عربي/إنجليزي/عبري)",
      "تحديث الكتالوجات أسبوعياً مجاناً",
      "جلستان تدريب مع متابعة شخصية",
      "دعم متواصل 24/7",
    ],
    cta: "ابدأ بالاحترافية",
  },
];

const enterpriseFeatures: string[] = [
  "توجيه ذكي للمحادثات (مبيعات/شكاوى/دعم)",
  "ربط API مخصص مع أنظمتك الداخلية",
  "أتمتة مسارات العمل المعقدة",
  "هندسة شخصية تحاكي ثقافة شركتك",
  "اتفاقية مستوى خدمة SLA مع دعم 24/7",
  "تدريب شامل لطاقم خدمة العملاء",
];

function CheckIcon({ color = "text-cyan" }: { color?: string }) {
  return (
    <svg className={`w-4 h-4 ${color} shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-night">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">
            خطط الأسعار
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary mb-4">
            استثمار يُعيد عليك أضعافه
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            اختر الباقة المناسبة لبزنسك. جميع الباقات تشمل محادثات غير محدودة وردوداً ذكية حقيقية.
          </p>
        </div>

        {/* Pricing Cards — 3 self-serve tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-3xl p-7 flex flex-col gap-6 transition-all duration-300 ${
                tier.isPopular
                  ? "bg-surface-2 border-2 border-primary/50 md:scale-[1.03] shadow-brand"
                  : "bg-surface border border-border hover:border-primary/30"
              }`}
            >
              {/* Popular badge */}
              {tier.isPopular && (
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <div
                    className="px-4 py-1.5 rounded-full text-white text-xs font-black tracking-wide animate-shimmer"
                    style={{
                      background: "linear-gradient(90deg, #2563EB, #7C3AED, #06B6D4, #2563EB)",
                      backgroundSize: "200% auto",
                    }}
                  >
                    ⭐ الأكثر طلباً
                  </div>
                </div>
              )}

              {/* Tier header */}
              <div>
                <h3 className="text-xl font-black text-text-primary mb-1">{tier.name}</h3>
                <p className="text-text-muted text-sm">{tier.subtitle}</p>
              </div>

              {/* Price */}
              <div>
                <div className="flex items-end gap-1">
                  <span className="text-text-muted text-lg font-medium" dir="ltr">₪</span>
                  <span
                    className={`text-5xl font-black leading-none ${tier.priceColor || "text-text-primary"}`}
                    dir="ltr"
                  >
                    {tier.price}
                  </span>
                </div>
                <p className="text-text-muted text-sm mt-1">
                  {tier.period} · {tier.messages}
                </p>
                <p className="text-text-faint text-xs mt-2">{tier.setup}</p>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center px-6 py-3.5 rounded-full font-bold text-base transition-all duration-200 ${
                  tier.isPopular
                    ? "bg-brand-gradient text-white hover:opacity-90 shadow-brand-sm"
                    : "border border-border text-text-muted hover:text-text-primary hover:border-primary/40"
                }`}
              >
                {tier.cta}
              </a>

              {/* Features */}
              <div className="space-y-3 pt-2 border-t border-border">
                {tier.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckIcon color="text-cyan" />
                    <span className="text-text-muted text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise — Premium tier */}
        <div className="mt-16">
          <div className="relative rounded-3xl border border-amber-500/30 bg-surface-2 p-8 lg:p-12 overflow-hidden">
            {/* Subtle amber glow accent */}
            <div
              className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, #F59E0B, transparent 70%)" }}
            />

            <div className="relative grid lg:grid-cols-5 gap-10 items-center">
              {/* Left: Info & Pricing — 2 cols */}
              <div className="lg:col-span-2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <Building2 className="w-4 h-4 text-amber-400" />
                  <span className="text-amber-400 text-xs font-bold tracking-wide">
                    حل مخصص B2B
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl lg:text-4xl font-black text-text-primary mb-2">
                    باقة الشركات
                  </h3>
                  <p className="text-text-muted text-base leading-relaxed">
                    مصممة للشركات ذات العمليات المعقدة والأنظمة الداخلية المتخصصة.
                    تكامل عميق، أتمتة متقدمة، ودعم على مستوى المؤسسات.
                  </p>
                </div>

                {/* Price */}
                <div>
                  <p className="text-text-faint text-xs uppercase tracking-widest mb-2">
                    الاشتراك يبدأ من
                  </p>
                  <div className="flex items-end gap-1">
                    <span className="text-text-muted text-xl font-medium" dir="ltr">₪</span>
                    <span className="text-6xl font-black leading-none text-amber-400" dir="ltr">
                      2990
                    </span>
                    <span className="text-text-muted text-base mb-2">/ شهرياً</span>
                  </div>
                  <p className="text-text-faint text-sm mt-2">
                    رسوم تأسيس:{" "}
                    <span className="text-text-muted font-bold" dir="ltr">
                      ₪2,000 – ₪3,000
                    </span>
                  </p>
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/970597876548"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-base bg-amber-500 text-night hover:bg-amber-400 transition-colors duration-200"
                >
                  تواصل معنا
                </a>
              </div>

              {/* Right: Features — 3 cols */}
              <div className="lg:col-span-3">
                <p className="text-text-faint text-xs uppercase tracking-widest mb-5">
                  مزايا حصرية للشركات
                </p>
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                  {enterpriseFeatures.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <CheckIcon color="text-amber-400" />
                      <span className="text-text-muted text-sm leading-relaxed">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-center text-text-faint text-sm mt-12">
          جميع الأسعار بالشيكل · الدفع شهري · إلغاء الاشتراك في أي وقت
        </p>
      </div>
    </section>
  );
}
