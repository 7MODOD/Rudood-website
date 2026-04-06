"use client";

import { useState } from "react";

const messageOptions = [
  { value: "", label: "اختر عدد الرسائل المتوقع شهرياً" },
  { value: "less-500", label: "أقل من 500 رسالة" },
  { value: "500-2000", label: "500 – 2,000 رسالة" },
  { value: "2000-5000", label: "2,000 – 5,000 رسالة" },
  { value: "more-5000", label: "أكثر من 5,000 رسالة" },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — replace with real API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-surface relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(37,99,235,0.06) 0%, rgba(124,58,237,0.04) 40%, transparent 70%)",
        }}
      />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">
            ابدأ الآن
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-text-primary mb-4">
            جهّز متجرك للردود الذكية
          </h2>
          <p className="text-text-muted">
            أرسل طلبك وسيتواصل معك فريقنا خلال 24 ساعة لبدء الإعداد.
          </p>
        </div>

        {submitted ? (
          /* Success State */
          <div className="text-center py-16 space-y-4">
            <div className="w-20 h-20 rounded-full bg-brand-gradient mx-auto flex items-center justify-center shadow-brand">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-text-primary">تم الإرسال بنجاح! 🎉</h3>
            <p className="text-text-muted max-w-sm mx-auto">
              سيتواصل معك فريق ردود خلال 24 ساعة لبدء إعداد نظامك. تحقق من بريدك الإلكتروني.
            </p>
          </div>
        ) : (
          /* Form */
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-surface-2 rounded-3xl p-8 border border-border"
          >
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-1.5">
                الاسم الكامل <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="محمد أحمد"
                className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder-text-faint focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-1.5">
                رقم الهاتف <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="+966 5X XXX XXXX"
                dir="ltr"
                className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder-text-faint focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm text-end"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-1.5">
                البريد الإلكتروني <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="name@business.com"
                dir="ltr"
                className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder-text-faint focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm text-end"
              />
            </div>

            {/* Business Name */}
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-1.5">
                اسم النشاط التجاري <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="متجر الأناقة"
                className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder-text-faint focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm"
              />
            </div>

            {/* Monthly Messages */}
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-1.5">
                عدد الرسائل المتوقع شهرياً <span className="text-red-400">*</span>
              </label>
              <select
                required
                className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm appearance-none cursor-pointer"
              >
                {messageOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full bg-brand-gradient text-white font-black text-lg hover:opacity-90 transition-all duration-200 shadow-brand disabled:opacity-70 disabled:cursor-not-allowed mt-2"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  جارٍ الإرسال...
                </span>
              ) : (
                "انضم إلى قائمة الانتظار"
              )}
            </button>

            <p className="text-center text-text-faint text-xs">
              بالإرسال، أنت توافق على{" "}
              <a href="/privacy" className="text-cyan hover:underline">
                سياسة الخصوصية
              </a>{" "}
              الخاصة بنا.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
