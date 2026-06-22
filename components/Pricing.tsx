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
    name: "الباقة الأساسية",
    subtitle: "للموظف أو الفرع الواحد",
    price: "290",
    period: "شهرياً",
    messages: "محادثات غير محدودة · بدون عدّاد",
    setup: "رسوم تأسيس: 400 ₪ لمرة واحدة",
    features: [
      "رد ذكي على الأسئلة الشائعة ومعلومات البزنس",
      "ربط 3 منصات (واتساب + إنستغرام + ماسنجر)",
      "تسجيل أساسي للطلبات والاستفسارات",
      "ردود متعددة اللغات (عربي/إنجليزي/عبري)",
      "تحويل ذكي لموظف بشري عند الحاجة",
      "مستخدم بشري واحد للاستلام والمتابعة",
      "تدريب عبر فيديو وملف PDF (قوالب جاهزة)",
      "دعم فني قياسي",
    ],
    cta: "ابدأ بالأساسية",
  },
  {
    name: "الباقة المتقدمة",
    subtitle: "للمتاجر بطلبات ودفعات",
    price: "790",
    period: "شهرياً",
    messages: "محادثات غير محدودة · بدون عدّاد",
    setup: "رسوم تأسيس: 700 ₪ لمرة واحدة",
    features: [
      "كل مزايا «الأساسية»",
      "ربط 4 قنوات (واتساب + ماسنجر + إنستغرام + موقع إلكتروني)",
      "تسجيل متقدم للطلبات عبر Google Sheets",
      "تتبع الطلبات بكود المنتج أو رقم الطلب",
      "قراءة الصور وإيصالات الدفع (Vision AI)",
      "التفاعل الصوتي (استقبال وتحليل ورد صوتي)",
      "تحويل مباشر لموظف بشري (Live Handoff)",
      "حتى 3 مستخدمين بشريين (مقعد إضافي 50 ₪/شهر)",
      "جلستان تدريب مع متابعة شخصية",
      "دعم متواصل 24/7",
    ],
    cta: "ابدأ بالمتقدمة",
    isPopular: true,
    priceColor: "text-gradient-brand",
  },
];

const enterpriseFeatures: string[] = [
  "كل مزايا «المتقدمة»",
  "توجيه ذكي للمحادثات (مبيعات/شكاوى/دعم)",
  "مستخدمون بشريون غير محدودين",
  "ربط API مخصص مع أنظمتك الداخلية",
  "أتمتة مسارات العمل المعقدة",
  "هندسة شخصية تحاكي ثقافة شركتك",
  "اتفاقية مستوى خدمة (SLA) مع دعم 24/7",
  "تدريب شامل لطاقم خدمة العملاء",
];

function CheckIcon({ color = "text-[#0891B2]" }: { color?: string }) {
  return (
    <svg className={`w-4 h-4 ${color} shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#F3E8FF]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#7C3AED] text-sm font-semibold uppercase tracking-widest mb-3">
            خطط الأسعار
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E1B4B] mb-4">
            استثمار يُعيد عليك أضعافه
          </h2>
          <p className="text-[#334155] text-lg max-w-2xl mx-auto">
            اختر الباقة المناسبة لبزنسك. جميع الباقات تشمل محادثات غير محدودة وردوداً ذكية حقيقية.
          </p>
        </div>

        {/* Pricing Cards — 2 self-serve tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start max-w-4xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-3xl p-7 flex flex-col gap-6 transition-all duration-300 ${
                tier.isPopular
                  ? "bg-white border-2 border-[#7C3AED]/50 md:scale-[1.03] shadow-brand"
                  : "bg-white border border-slate-200 hover:border-[#7C3AED]/30 shadow-sm hover:shadow-md"
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
                <h3 className="text-xl font-black text-[#1E1B4B] mb-1">{tier.name}</h3>
                <p className="text-[#334155] text-sm">{tier.subtitle}</p>
              </div>

              {/* Price */}
              <div>
                <div className="flex items-end gap-1">
                  <span className="text-[#334155] text-lg font-medium" dir="ltr">₪</span>
                  <span
                    className={`text-5xl font-black leading-none ${tier.priceColor || "text-[#1E1B4B]"}`}
                    dir="ltr"
                  >
                    {tier.price}
                  </span>
                </div>
                <p className="text-[#334155] text-sm mt-1">
                  {tier.period} · {tier.messages}
                </p>
                <p className="text-[#94A3B8] text-xs mt-2">{tier.setup}</p>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center px-6 py-3.5 rounded-full font-bold text-base transition-all duration-200 ${
                  tier.isPopular
                    ? "bg-rudood-gradient text-white hover:opacity-90 shadow-brand-sm"
                    : "border-2 border-[#1E3A8A]/40 bg-white text-[#1E3A8A] hover:border-[#1E3A8A]/70 hover:bg-slate-50"
                }`}
              >
                {tier.cta}
              </a>

              {/* Features */}
              <div className="space-y-3 pt-2 border-t border-slate-200">
                {tier.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckIcon color="text-[#0891B2]" />
                    <span className="text-[#334155] text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise — Premium tier */}
        <div className="mt-16">
          <div className="relative rounded-3xl border border-amber-300/60 bg-amber-50/60 p-8 lg:p-12 overflow-hidden shadow-sm">
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
                  <h3 className="text-3xl lg:text-4xl font-black text-[#1E1B4B] mb-2">
                    باقة الشركات
                  </h3>
                  <p className="text-[#334155] text-base leading-relaxed">
                    مصممة للشركات ذات العمليات المعقدة والأنظمة الداخلية المتخصصة.
                    تكامل عميق، أتمتة متقدمة، ودعم على مستوى المؤسسات.
                  </p>
                </div>

                {/* Price */}
                <div>
                  <p className="text-[#94A3B8] text-xs uppercase tracking-widest mb-2">
                    تسعير مخصص
                  </p>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl lg:text-5xl font-black leading-none text-amber-400">
                      حسب المشروع
                    </span>
                  </div>
                  <p className="text-[#94A3B8] text-sm mt-3">
                    العرض يُحدَّد بناءً على عدد الفروع والموظفين والأنظمة الداخلية.
                  </p>
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/970597876548"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-base bg-amber-500 text-white hover:bg-amber-400 transition-colors duration-200"
                >
                  تواصل معنا
                </a>
              </div>

              {/* Right: Features — 3 cols */}
              <div className="lg:col-span-3">
                <p className="text-[#94A3B8] text-xs uppercase tracking-widest mb-5">
                  مزايا حصرية للشركات
                </p>
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                  {enterpriseFeatures.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <CheckIcon color="text-amber-400" />
                      <span className="text-[#334155] text-sm leading-relaxed">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12 space-y-2">
          <p className="text-[#94A3B8] text-sm">
            جميع الأسعار بالشيكل · الدفع شهري مسبق · إلغاء الاشتراك في أي وقت
          </p>
          <p className="text-[#94A3B8] text-xs">
            تكلفة رسائل واتساب (رسوم Meta) على حساب الزبون مباشرةً — ردود لا تأخذ عمولة عليها.
          </p>
        </div>
      </div>
    </section>
  );
}
