"use client";

import { useState } from "react";

const faqs = [
  {
    q: "هل يخطئ الذكاء الاصطناعي في الردود؟",
    a: "النظام مدرّب خصيصاً على بيانات بزنسك ، من أكثر النماذج دقةً في العالم. الأخطاء نادرة جداً، وعندما يواجه سؤالاً خارج نطاق تدريبه، يُبلّغك ولا يختلق إجابة. نحن أيضاً نراقب الأداء باستمرار ونحسّن التدريب.",
  },
  {
    q: "ماذا يحدث إذا لم يعرف الروبوت الإجابة؟",
    a: 'النظام مُبرمج على مبدأ "الصدق أولاً". إذا واجه سؤالاً لا يملك عنه معلومة واضحة، يُخبر العميل بذلك بأدب ويحوّل المحادثة لفريقك البشري — بدلاً من اختلاق إجابة خاطئة قد تضر بسمعتك.',
  },
  {
    q: "ماذا أحتاج لبدء العمل معكم؟",
    a: "تحتاج فقط: حساب واتساب Business، ومعلومات عن منتجاتك وخدماتك وأسعارك وسياساتك. نحن نتولى كل شيء آخر — الإعداد التقني، والتدريب، والربط. لا تحتاج أي خبرة تقنية.",
  },
  {
    q: "هل أحتاج خبرة تقنية لإدارة النظام؟",
    a: "لا على الإطلاق. بعد الإطلاق، النظام يعمل تلقائياً بدون تدخلك. إذا أردت تحديث معلومات (مثل أسعار جديدة أو منتجات)، تُخبرنا وبُنحدّث التدريب. واجهتنا بسيطة جداً لمن يريد المتابعة.",
  },
  {
    q: "هل بيانات عملائي آمنة؟",
    a: "الأمان أولويتنا القصوى. المحادثات مشفّرة، لا نشارك بيانات عملاءك مع أي طرف ثالث، ونلتزم بسياسات الخصوصية الصارمة. بياناتك تُستخدم فقط لتحسين أداء نظامك — لا غير.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-[#0891B2] text-sm font-semibold uppercase tracking-widest mb-3">
            الأسئلة الشائعة
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1E1B4B] mb-4">
            أسئلة تدور في ذهنك؟
          </h2>
          <p className="text-[#334155]">
            هذي أكثر الأسئلة التي يسألها أصحاب المتاجر قبل البدء.
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
                  isOpen ? "border-[#2563EB]/40 bg-[#F1F5F9]" : "border-slate-200 bg-[#F1F5F9]/50 hover:border-[#2563EB]/20"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-start"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base font-semibold transition-colors duration-200 ${isOpen ? "text-[#0891B2]" : "text-[#1E1B4B]"}`}>
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "border-[#2563EB]/40 bg-[#2563EB]/10 text-[#0891B2] rotate-45"
                        : "border-slate-200 text-[#334155]"
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
                  <p className="px-6 text-[#334155] text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl border border-slate-200 bg-[#F1F5F9]/50">
          <p className="text-[#334155] mb-4">
            عندك سؤال مو موجود هنا؟ نحن هنا للمساعدة.
          </p>
          <a
            href="https://wa.me/970597876548?text=مرحباً%20فريق%20ردود،%20لدي%20سؤال%20حول%20الردود%20الذكية."
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 transition-all font-semibold text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            تحدث مع فريقنا
          </a>
        </div>
      </div>
    </section>
  );
}
