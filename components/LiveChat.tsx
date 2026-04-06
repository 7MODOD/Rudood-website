"use client";

import { useState } from "react";

export default function LiveChat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 start-6 z-50 flex flex-col items-start gap-3">
      {/* Chat popup */}
      {open && (
        <div
          className="w-72 rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up"
          style={{
            background: "#141E38",
            border: "1px solid rgba(37,99,235,0.3)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(37,99,235,0.15)",
          }}
        >
          {/* Header */}
          <div className="bg-brand-gradient p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-black text-sm">
              ر
            </div>
            <div>
              <p className="text-white font-bold text-sm">فريق ردود</p>
              <p className="text-white/70 text-xs">نرد عادةً خلال دقائق</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="ms-auto text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-4">
            <div className="flex gap-3">
              <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0 mt-0.5">
                ر
              </div>
              <div className="bg-surface rounded-2xl rounded-tl-sm px-3 py-2 text-sm text-text-muted leading-relaxed">
                أهلاً! 👋 كيف يمكننا مساعدتك اليوم؟
              </div>
            </div>

            {/* Quick replies */}
            <div className="space-y-2">
              {[
                "أريد معرفة المزيد عن ردود",
                "كم تكلفة الخدمة؟",
                "أريد تجربة مجانية",
              ].map((q) => (
                <a
                  key={q}
                  href={`https://wa.me/your-number?text=${encodeURIComponent(q)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-start px-3 py-2 rounded-xl border border-border text-sm text-text-muted hover:text-text-primary hover:border-primary/40 transition-all"
                >
                  {q}
                </a>
              ))}
            </div>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-bold text-white transition-all hover:opacity-90"
              style={{ background: "#25D366" }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              تحدث معنا على واتساب
            </a>
          </div>
        </div>
      )}

      {/* FAB Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-brand-gradient shadow-brand flex items-center justify-center text-white hover:opacity-90 hover:scale-105 transition-all duration-200"
        aria-label="فتح المحادثة"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </div>
  );
}
