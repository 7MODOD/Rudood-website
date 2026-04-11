"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Does the AI make mistakes in replies?",
    a: "The system is trained specifically on your business data using some of the most accurate models in the world. Errors are very rare, and when it encounters a question outside its training scope, it notifies you rather than making up an answer. We also continuously monitor performance and improve the training.",
  },
  {
    q: "What happens if the bot doesn't know the answer?",
    a: 'The system is programmed on a "honesty first" principle. If it encounters a question it doesn\'t have clear information about, it politely tells the customer and transfers the conversation to your human team — rather than fabricating a wrong answer that could damage your reputation.',
  },
  {
    q: "What do I need to get started with you?",
    a: "You only need: a WhatsApp Business account, and information about your products, services, pricing, and policies. We handle everything else — technical setup, training, and integration. No technical expertise required.",
  },
  {
    q: "Do I need technical skills to manage the system?",
    a: "Not at all. After launch, the system runs automatically without your intervention. If you want to update information (such as new prices or products), just let us know and we'll update the training. Our interface is very simple for those who want to monitor.",
  },
  {
    q: "Is my customers' data safe?",
    a: "Security is our top priority. Conversations are encrypted, we don't share your customers' data with any third party, and we comply with strict privacy policies. Your data is used only to improve your system's performance — nothing else.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-text-primary mb-4">
            Questions on your mind?
          </h2>
          <p className="text-text-muted">
            These are the most common questions business owners ask before getting started.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? "border-primary/40 bg-surface-2" : "border-border bg-surface-2/50 hover:border-primary/20"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base font-semibold transition-colors duration-200 ${isOpen ? "text-cyan" : "text-text-primary"}`}>
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "border-primary/40 bg-primary/10 text-cyan rotate-45"
                        : "border-border text-text-muted"
                    }`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-64 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="px-6 text-text-muted text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl border border-border bg-surface-2/50">
          <p className="text-text-muted mb-4">
            Have a question that's not listed here? We're here to help.
          </p>
          <a
            href="https://wa.me/970597876548?text=Hello%20Rudood%20team%2C%20I%20have%20a%20question%20about%20your%20AI%20service."
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 transition-all font-semibold text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat with our team
          </a>
        </div>
      </div>
    </section>
  );
}
