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
    name: "Basic Plan",
    agent: "Informational Agent",
    subtitle: "For businesses that need smart, instant answers to customer questions and inquiries.",
    price: "₪290",
    period: "/ month",
    setup: "Setup fee: ₪400 (one time)",
    features: [
      "Unlimited conversations with no message cap.",
      "Every communication channel enabled: WhatsApp, Instagram, Messenger, and your website.",
      "Smart, automatic answers to FAQs and service or product questions using your business data.",
      "Multilingual replies in Arabic, English, and Hebrew.",
      "Smart, seamless handoff to a human employee when needed.",
      "One human user seat for handoff and follow-up.",
      "Standard technical support.",
    ],
    cta: "Start with Basic",
  },
  {
    name: "Advanced Plan",
    agent: "Procedural Agent",
    subtitle: "For stores that need workflow automation, data collection, and order intake.",
    price: "₪790",
    period: "/ month",
    setup: "Setup fee: ₪700 (one time)",
    features: [
      "Everything in the Basic plan, plus:",
      "Advanced customer and order logging through a direct Google Sheets connection.",
      "Customer order tracking by product code or order number.",
      "Image reading and analysis with Vision AI.",
      "Voice interaction, including receiving and analyzing voice messages.",
      "Up to 3 human users, with additional seats available for ₪50/month.",
      "Continuous 24/7 technical support with two training sessions for your team.",
    ],
    cta: "Start with Advanced",
    isPopular: true,
  },
  {
    name: "Enterprise Plan",
    agent: "Integrational Agent / B2B",
    subtitle: "For companies with complex operations that need complete software integration with internal systems.",
    customPrice: "Custom pricing based on project requirements.",
    setup: "Setup fee: custom pricing based on project requirements.",
    features: [
      "Everything in the Advanced plan, plus:",
      "Custom API and Webhooks integration with internal systems such as inventory, delivery, or CRM platforms.",
      "Complex Custom Workflows that execute live operational tasks.",
      "Smart conversation routing across sales, complaints, and support teams.",
      "Bot persona engineering that closely reflects your company culture.",
      "Unlimited human users.",
      "A service-level agreement (SLA) and a dedicated account manager for your project.",
    ],
    cta: "Contact Us",
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
    <section id="pricing" className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#0891B2]">
            Pricing Plans
          </p>
          <h2 className="mb-4 text-3xl font-black text-[#1E1B4B] sm:text-4xl lg:text-5xl">
            Choose the right level of automation
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#334155]">
            Every plan includes unlimited conversations and every communication channel. The difference is the
            agent&apos;s intelligence level and the tasks it performs.
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
                    ⭐ Most Popular
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
                    <span className="text-4xl font-black leading-none text-[#1E1B4B]">{tier.price}</span>
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
                    ? "bg-brand-gradient text-white shadow-brand-sm hover:opacity-90"
                    : tier.isEnterprise
                      ? "bg-amber-500 text-white hover:bg-amber-400"
                      : "border border-slate-200 text-[#334155] hover:border-[#2563EB]/40 hover:text-[#1E1B4B]"
                }`}
              >
                {tier.cta}
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 space-y-2 text-center">
          <p className="text-sm text-[#64748B]">
            All prices in ILS · Monthly prepaid billing · Cancel anytime
          </p>
          <p className="text-xs text-[#94A3B8]">
            WhatsApp message fees (Meta charges) are billed directly to the customer — Rudood takes no commission.
          </p>
        </div>
      </div>
    </section>
  );
}
