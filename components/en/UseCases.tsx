"use client";

import { useState } from "react";

type Message = {
  from: "customer" | "ai";
  text: string;
  time: string;
};

type Scenario = {
  label: string;
  emoji: string;
  messages: Message[];
  callouts: { title: string; desc: string; color: string }[];
};

const scenarios: Record<string, Scenario> = {
  clothing: {
    label: "Clothing Store",
    emoji: "👗",
    messages: [
      { from: "customer", text: "Hi, do you have black dresses?", time: "10:32" },
      {
        from: "ai",
        text: "Hello! 😊 Yes, we have a variety of black dresses. What's the occasion? Looking for casual or evening wear?",
        time: "10:32",
      },
      { from: "customer", text: "Evening dress, size M", time: "10:33" },
      {
        from: "ai",
        text: "Great! 🌟 We currently have size M evening dresses:\n\n• Chiffon Midi Dress - $45\n• Embroidered Cut Dress - $68\n• Classic Satin Dress - $79\n\nWould you like me to send photos? Or would you like to see the full catalog?",
        time: "10:33",
      },
      { from: "customer", text: "Send photos of the satin one", time: "10:34" },
      {
        from: "ai",
        text: "On it! 📸 Photos sent. The satin dress comes in: Black, Gold, and Burgundy. Delivery in 2-3 days, pay on delivery. Would you like to reserve one?",
        time: "10:34",
      },
    ],
    callouts: [
      { title: "Replied in a second", desc: "Understood the question and answered instantly, any time", color: "text-teal" },
      { title: "Understood context", desc: "Remembered conversation details and built on them", color: "text-gradient-brand" },
      { title: "Closed the deal", desc: "Automatically suggested the next step", color: "text-teal" },
    ],
  },
  restaurant: {
    label: "Restaurant",
    emoji: "🍕",
    messages: [
      { from: "customer", text: "How long does delivery take?", time: "8:15" },
      {
        from: "ai",
        text: "Hi! 🛵 Our delivery usually takes 30-45 minutes depending on your location. Are you in our service area? Send your location and I'll confirm.",
        time: "8:15",
      },
      { from: "customer", text: "I'm in Downtown", time: "8:16" },
      {
        from: "ai",
        text: "Great! ✅ Downtown is in our area — delivery in 30-35 minutes. Minimum order is $15, and delivery is free for orders over $30. Want to order?",
        time: "8:16",
      },
      { from: "customer", text: "What pizzas do you have?", time: "8:17" },
      {
        from: "ai",
        text: "Pizza time! 🍕 Here's our menu:\n\n🔥 Popular:\n• Margherita - $14\n• Double Pepperoni - $18\n• BBQ Chicken - $19\n\nAll customizable. Want to add something to your order?",
        time: "8:17",
      },
    ],
    callouts: [
      { title: "Auto verification", desc: "Checked delivery zone without human involvement", color: "text-teal" },
      { title: "Remembered details", desc: "Connected the location to the delivery policy automatically", color: "text-gradient-brand" },
      { title: "Showed the menu", desc: "Answered menu questions accurately and quickly", color: "text-teal" },
    ],
  },
};

function ChatBubble({ msg }: { msg: Message }) {
  const isCustomer = msg.from === "customer";
  return (
    <div className={`flex ${isCustomer ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[88%] rounded-2xl px-3 py-2 shadow-sm ${
          isCustomer
            ? "rounded-tl-sm bg-white text-gray-800"
            : "rounded-tr-sm text-gray-800"
        }`}
        style={!isCustomer ? { background: "#DCF8C6" } : {}}
      >
        {!isCustomer && (
          <p className="text-[10px] text-teal-700 font-semibold mb-1">Rudood AI ✦</p>
        )}
        <p className="text-[12px] leading-relaxed whitespace-pre-line">
          {msg.text}
        </p>
        <p className={`text-[9px] text-gray-400 mt-1 ${isCustomer ? "text-left" : "text-right"}`}>
          {msg.time} {!isCustomer && "✓✓"}
        </p>
      </div>
    </div>
  );
}

export default function UseCases() {
  const [active, setActive] = useState<"clothing" | "restaurant">("clothing");
  const scenario = scenarios[active];

  return (
    <section id="cases" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gradient-brand text-sm font-semibold uppercase tracking-widest mb-3">
            Live Examples
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E1B4B] mb-4">
            See Rudood in action
          </h2>
          <p className="text-[#334155] text-lg max-w-2xl mx-auto">
            Real conversations — smart replies that understand context and serve customers like your best employee.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="flex gap-2 p-1.5 bg-[#F1F5F9] rounded-full border border-slate-200">
            {(["clothing", "restaurant"] as const).map((key) => {
              const s = scenarios[key];
              return (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    active === key
                      ? "bg-brand-gradient text-white shadow-brand-sm"
                      : "text-[#334155] hover:text-[#1E1B4B]"
                  }`}
                >
                  <span>{s.emoji}</span>
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main content: phone + callouts */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-12">
          {/* Phone mockup */}
          <div className="shrink-0">
            <div
              className="w-[280px] sm:w-[300px] rounded-[40px] p-3 shadow-2xl"
              style={{
                background: "linear-gradient(145deg, #1C2040 0%, #13162A 100%)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
              }}
            >
              {/* Status bar */}
              <div className="flex justify-between px-3 py-1.5 text-[10px] text-white/40 mb-1">
                <span>9:41</span>
                <span>●●●</span>
              </div>

              {/* Screen */}
              <div className="rounded-[28px] overflow-hidden">
                {/* WhatsApp Header */}
                <div className="flex items-center gap-3 px-4 py-3" style={{ background: "#075E54" }}>
                  <div className="w-9 h-9 rounded-full bg-teal/80 flex items-center justify-center text-white text-sm font-bold shrink-0 animate-pulse-ring">
                    R
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Rudood AI</p>
                    <p className="text-[11px] text-green-300">Online now ●</p>
                  </div>
                </div>

                {/* Messages */}
                <div
                  className="p-3 space-y-2 overflow-y-auto"
                  style={{ background: "#ECE5DD", minHeight: "340px", maxHeight: "380px" }}
                >
                  {scenario.messages.map((msg, i) => (
                    <div
                      key={i}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${i * 0.12}s`, animationFillMode: "both" }}
                    >
                      <ChatBubble msg={msg} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Callout cards */}
          <div className="flex flex-col gap-4 max-w-sm w-full lg:pt-8">
            <p className="text-[#334155] text-sm font-semibold uppercase tracking-widest text-center lg:text-left mb-2">
              What just happened?
            </p>
            {scenario.callouts.map((c, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200 bg-[#F1F5F9] animate-fade-in-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className={`w-10 h-10 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center shrink-0 ${c.color}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className={`font-bold text-sm mb-0.5 ${c.color}`}>{c.title}</p>
                  <p className="text-[#334155] text-sm">{c.desc}</p>
                </div>
              </div>
            ))}

            {/* Bottom note */}
            <div className="mt-4 p-4 rounded-2xl border border-[#2563EB]/20 bg-[#2563EB]/5 text-center">
              <p className="text-gradient-brand text-sm font-semibold mb-1">All of this in seconds</p>
              <p className="text-[#334155] text-xs">
                No staff, no waiting, no errors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
