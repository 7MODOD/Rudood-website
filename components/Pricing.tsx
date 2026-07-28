type PricingTier = {
  name: string;
  agent: string;
  subtitle: string;
  price?: string;
  period?: string;
  customPrice?: string;
  setup: string;
  features: string[];
  cta: string;
  isPopular?: boolean;
  isEnterprise?: boolean;
};

const tiers: PricingTier[] = [
  {
    name: "الباقة الأساسية",
    agent: "الوكيل الاستعلامي",
    subtitle: "للمشاريع التي تبحث عن ردود ذكية وفورية على أسئلة واستفسارات العملاء.",
    price: "290 ₪",
    period: "/ شهرياً",
    setup: "رسوم التأسيس: 400 ₪ (لمرة واحدة)",
    features: [
      "محادثات غير محدودة (بدون أي سقف للرسائل).",
      "جميع قنوات التواصل مفعلة (واتساب، إنستغرام، ماسنجر، الموقع الإلكتروني).",
      "رد ذكي وتلقائي على الأسئلة الشائعة وتفاصيل الخدمات/المنتجات من بيانات البزنس الخاص بك.",
      "ردود متعددة اللغات (عربي / إنجليزي / عبري).",
      "تحويل ذكي وسلس لموظف بشري عند الحاجة.",
      "مستخدم بشري واحد (مقعد واحد) للاستلام والمتابعة.",
      "دعم فني قياسي.",
    ],
    cta: "ابدأ بالأساسية",
  },
  {
    name: "الباقة المتقدمة",
    agent: "الوكيل الإجرائي",
    subtitle: "للمتاجر التي تحتاج إلى أتمتة الإجراءات، جمع البيانات، واستقبال الطلبات.",
    price: "790 ₪",
    period: "/ شهرياً",
    setup: "رسوم التأسيس: 700 ₪ (لمرة واحدة)",
    features: [
      "كل مميزات الباقة الأساسية، بالإضافة إلى:",
      "تسجيل متقدم لبيانات العملاء والطلبات بربط مباشر مع (Google Sheets).",
      "تمكين العميل من تتبع حالة طلبه بكود المنتج أو رقم الطلب.",
      "قراءة الصور وتحليلها (Vision AI).",
      "التفاعل الصوتي (استقبال وتحليل الرسائل الصوتية).",
      "حتى 3 مستخدمين بشريين (ويمكن إضافة مقعد إضافي بـ 50 ₪/شهر).",
      "دعم فني متواصل 24/7 مع جلستي تدريب لفريقك.",
    ],
    cta: "ابدأ بالمتقدمة",
    isPopular: true,
  },
  {
    name: "باقة الشركات",
    agent: "الوكيل التكاملي / B2B",
    subtitle: "للشركات ذات العمليات المعقدة التي تحتاج ربطاً برمجياً كاملاً مع أنظمتها الداخلية.",
    customPrice: "تسعير مخصص حسب متطلبات المشروع.",
    setup: "رسوم التأسيس: تسعير مخصص حسب متطلبات المشروع.",
    features: [
      "كل مميزات الباقة المتقدمة، بالإضافة إلى:",
      "ربط برمجي مخصص (API & Webhooks) مع أنظمتك الداخلية (مثل أنظمة المخازن، التوصيل، أو الـ CRM).",
      "أتمتة مسارات العمل المعقدة (Custom Workflows) لتنفيذ مهام حية.",
      "توجيه ذكي للمحادثات لأقسام مختلفة (مبيعات / شكاوى / دعم).",
      "هندسة شخصية للبوت تحاكي ثقافة شركتك بدقة عالية.",
      "مستخدمون بشريون غير محدودين.",
      "اتفاقية مستوى خدمة (SLA) ومدير حساب مخصص لمشروعك.",
    ],
    cta: "تواصل معنا",
    isEnterprise: true,
  },
];

function CheckIcon({ enterprise = false }: { enterprise?: boolean }) {
  return (
    <svg
      className={`mt-0.5 h-4 w-4 shrink-0 ${enterprise ? "text-amber-500" : "text-[#0891B2]"}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#F3E8FF]/30 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#7C3AED]">
            خطط الأسعار
          </p>
          <h2 className="mb-4 text-3xl font-black text-[#1E1B4B] sm:text-4xl lg:text-5xl">
            اختر مستوى الأتمتة المناسب لبزنسك
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#334155]">
            جميع الباقات تشمل محادثات غير محدودة وكل قنوات التواصل. الفرق بينها هو مستوى ذكاء الوكيل والمهام التي ينفذها.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`relative flex h-full flex-col rounded-3xl p-7 transition-all duration-300 ${
                tier.isPopular
                  ? "border-2 border-[#7C3AED]/50 bg-white shadow-brand lg:-translate-y-2"
                  : tier.isEnterprise
                    ? "border border-amber-300/70 bg-amber-50/70 shadow-sm hover:shadow-md"
                    : "border border-slate-200 bg-white shadow-sm hover:border-[#7C3AED]/30 hover:shadow-md"
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <span
                    className="animate-shimmer rounded-full px-4 py-1.5 text-xs font-black tracking-wide text-white"
                    style={{
                      background: "linear-gradient(90deg, #2563EB, #7C3AED, #06B6D4, #2563EB)",
                      backgroundSize: "200% auto",
                    }}
                  >
                    ⭐ الأكثر طلباً
                  </span>
                </div>
              )}

              <div className="mb-6">
                <span
                  className={`mb-3 inline-flex rounded-full border px-3 py-1 text-xs font-bold ${
                    tier.isEnterprise
                      ? "border-amber-300/70 bg-amber-100/80 text-amber-700"
                      : "border-[#0891B2]/20 bg-[#0891B2]/5 text-[#0891B2]"
                  }`}
                >
                  {tier.agent}
                </span>
                <h3 className="mb-2 text-2xl font-black text-[#1E1B4B]">{tier.name}</h3>
                <p className="min-h-[72px] text-sm leading-relaxed text-[#334155]">{tier.subtitle}</p>
              </div>

              <div className="mb-6 border-y border-slate-200 py-5">
                {tier.customPrice ? (
                  <p className="text-2xl font-black leading-snug text-amber-600">{tier.customPrice}</p>
                ) : (
                  <div className="flex flex-wrap items-end gap-2">
                    <span className="text-4xl font-black leading-none text-[#1E1B4B]" dir="ltr">
                      {tier.price}
                    </span>
                    <span className="text-sm font-medium text-[#334155]">{tier.period}</span>
                  </div>
                )}
                <p className="mt-3 text-xs leading-relaxed text-[#64748B]">{tier.setup}</p>
              </div>

              <div className="mb-7 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckIcon enterprise={tier.isEnterprise} />
                    <span className="text-sm leading-relaxed text-[#334155]">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={tier.isEnterprise ? "https://wa.me/970597876548" : "#contact"}
                className={`block rounded-full px-6 py-3.5 text-center text-base font-bold transition-all duration-200 ${
                  tier.isPopular
                    ? "bg-rudood-gradient text-white shadow-brand-sm hover:opacity-90"
                    : tier.isEnterprise
                      ? "bg-amber-500 text-white hover:bg-amber-400"
                      : "border-2 border-[#1E3A8A]/40 bg-white text-[#1E3A8A] hover:border-[#1E3A8A]/70 hover:bg-slate-50"
                }`}
              >
                {tier.cta}
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 space-y-2 text-center">
          <p className="text-sm text-[#64748B]">
            جميع الأسعار بالشيكل · الدفع شهري مسبق · إلغاء الاشتراك في أي وقت
          </p>
          <p className="text-xs text-[#94A3B8]">
            تكلفة رسائل واتساب (رسوم Meta) على حساب الزبون مباشرةً — ردود لا تأخذ عمولة عليها.
          </p>
        </div>
      </div>
    </section>
  );
}
