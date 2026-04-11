type PricingTier = {
  name: string;
  subtitle: string;
  price: string;
  period: string;
  messages: string;
  features: string[];
  cta: string;
  isPopular?: boolean;
  priceColor?: string;
};

const tiers: PricingTier[] = [
  {
    name: "Basic",
    subtitle: "For growing businesses",
    price: "200",
    period: "/ month",
    messages: "Up to 1,500 messages",
    features: [
      "Smart replies on WhatsApp, Instagram & Messenger",
      "Trained on your store data",
      "Email technical support",
      "Up to 1,500 messages/month",
    ],
    cta: "Start with Basic",
  },
  {
    name: "Business",
    subtitle: "For active stores",
    price: "300",
    period: "/ month",
    messages: "Up to 5,000 messages",
    features: [
      "Everything in Basic",
      "Up to 5,000 messages/month",
      "Priority technical support",
      "Monthly training updates",
      "Custom reply style",
    ],
    cta: "Start with Business",
    isPopular: true,
    priceColor: "text-gradient-brand",
  },
  {
    name: "VIP Custom",
    subtitle: "For enterprises & high volume",
    price: "+450",
    period: "/ month",
    messages: "Unlimited messages",
    features: [
      "Everything in Business",
      "Unlimited messages",
      "Dedicated account manager",
      "Custom system integrations",
      "Guaranteed SLA",
      "Continuous training & improvement",
    ],
    cta: "Contact Us",
    priceColor: "text-cyan",
  },
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
        <div className="text-center mb-6">
          <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">
            Pricing Plans
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary mb-4">
            An investment that pays for itself
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Choose the plan that fits your business. All plans include full setup and real AI replies.
          </p>
        </div>

        {/* Setup Fee Banner */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-primary/30 bg-primary/5 text-sm">
            <span className="text-cyan text-base">⚡</span>
            <span className="text-text-muted">
              One-time setup fee:{" "}
              <span className="text-cyan font-bold">₪300</span>
              {" "}— includes full training & technical integration
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-3xl p-7 flex flex-col gap-6 transition-all duration-300 ${
                tier.isPopular
                  ? "bg-surface-2 border-2 border-primary/50 scale-[1.03] shadow-brand"
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
                    ⭐ Most Popular
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
                  <span className="text-text-muted text-lg font-medium">₪</span>
                  <span
                    className={`text-5xl font-black leading-none ${tier.priceColor || "text-text-primary"}`}
                  >
                    {tier.price}
                  </span>
                </div>
                <p className="text-text-muted text-sm mt-1">
                  {tier.period} · {tier.messages}
                </p>
              </div>

              {/* CTA */}
              <a
                href={tier.name === "VIP Custom" ? "https://wa.me/970597876548" : "#contact"}
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

        {/* Bottom note */}
        <p className="text-center text-text-faint text-sm mt-10">
          All prices in ILS · Monthly billing · Cancel anytime
        </p>
      </div>
    </section>
  );
}
