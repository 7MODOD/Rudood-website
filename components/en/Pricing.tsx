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
    name: "Starter",
    subtitle: "For growing stores",
    price: "199",
    period: "/ month",
    messages: "Unlimited conversations",
    setup: "Setup fee: ₪300 one-time",
    features: [
      "Auto-replies to FAQs & business info",
      "Basic order logging",
      "Connect 1 platform (WhatsApp, Facebook, or Instagram)",
      "Video & PDF training materials",
      "Standard technical support",
    ],
    cta: "Start with Starter",
  },
  {
    name: "Advanced",
    subtitle: "For active stores",
    price: "499",
    period: "/ month",
    messages: "Unlimited conversations",
    setup: "Setup fee: ₪300 one-time",
    features: [
      "Everything in Starter",
      "Advanced order logging via Google Sheets",
      "Order tracking by product code or order number",
      "Connect all 3 platforms (WhatsApp + Messenger + Instagram)",
      "Live agent handoff",
      "Free monthly data updates",
      "1-hour live online training",
      "24/7 dedicated support",
    ],
    cta: "Start with Advanced",
    isPopular: true,
    priceColor: "text-gradient-brand",
  },
  {
    name: "Pro",
    subtitle: "For high performance",
    price: "990",
    period: "/ month",
    messages: "Unlimited conversations",
    setup: "Setup fee: Free",
    features: [
      "Everything in Advanced",
      "Voice interaction (receive, analyze & reply with voice)",
      "Image & payment receipt recognition (Vision AI)",
      "Multi-language replies (Arabic / English / Hebrew)",
      "Free weekly catalog updates",
      "2 training sessions with personal follow-up",
      "24/7 dedicated support",
    ],
    cta: "Start with Pro",
  },
];

const enterpriseFeatures: string[] = [
  "Smart conversation routing (sales / complaints / support)",
  "Custom API integration with your internal systems",
  "Complex workflow automation",
  "Persona engineering matching your company culture",
  "SLA with 24/7 dedicated support",
  "Comprehensive training for your customer service team",
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
            Pricing Plans
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary mb-4">
            An investment that pays for itself
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Choose the plan that fits your business. All plans include unlimited conversations and real AI replies.
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
                    Custom B2B Solution
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl lg:text-4xl font-black text-text-primary mb-2">
                    Enterprise
                  </h3>
                  <p className="text-text-muted text-base leading-relaxed">
                    Built for companies with complex operations and specialized internal systems.
                    Deep integration, advanced automation, and enterprise-grade support.
                  </p>
                </div>

                {/* Price */}
                <div>
                  <p className="text-text-faint text-xs uppercase tracking-widest mb-2">
                    Subscription starts from
                  </p>
                  <div className="flex items-end gap-1">
                    <span className="text-text-muted text-xl font-medium">₪</span>
                    <span className="text-6xl font-black leading-none text-amber-400">
                      2990
                    </span>
                    <span className="text-text-muted text-base mb-2">/ month</span>
                  </div>
                  <p className="text-text-faint text-sm mt-2">
                    Setup fee:{" "}
                    <span className="text-text-muted font-bold">
                      ₪2,000 – ₪3,000
                    </span>
                  </p>
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/970597876548"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-base bg-amber-500 text-night hover:bg-amber-400 transition-colors duration-200"
                >
                  Contact Us
                </a>
              </div>

              {/* Right: Features — 3 cols */}
              <div className="lg:col-span-3">
                <p className="text-text-faint text-xs uppercase tracking-widest mb-5">
                  Exclusive enterprise features
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
          All prices in ILS · Monthly billing · Cancel anytime
        </p>
      </div>
    </section>
  );
}
