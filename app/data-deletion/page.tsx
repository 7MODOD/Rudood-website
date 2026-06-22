"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trash2, Mail, CheckCircle, Clock, AlertCircle } from "lucide-react";

export default function DataDeletionPage() {
  const lastUpdated = "مارس ٢٠٢٦";

  const steps = [
    {
      number: "١",
      title: "أرسل طلب الحذف",
      description: 'أرسل بريداً إلكترونياً إلى info@rudood.com بعنوان "طلب حذف البيانات" مع ذكر بريدك الإلكتروني المرتبط بالحساب.',
    },
    {
      number: "٢",
      title: "التحقق من الهوية",
      description: "سنتحقق من هويتك خلال ٤٨ ساعة عمل للتأكد من أنك صاحب الحساب، وذلك حمايةً لبياناتك.",
    },
    {
      number: "٣",
      title: "تأكيد الطلب",
      description: "بعد التحقق، ستصلك رسالة تأكيد تُفيد ببدء تنفيذ طلب الحذف وتُحدد الإطار الزمني المتوقع.",
    },
    {
      number: "٤",
      title: "تنفيذ الحذف",
      description: "تُحذف جميع بياناتك خلال ٣٠ يوماً من تأكيد الطلب، مع مراعاة أي التزامات قانونية تستوجب الاحتفاظ ببعض السجلات.",
    },
  ];

  const dataTypes = [
    { label: "بيانات الحساب الشخصية", detail: "الاسم، البريد الإلكتروني، رقم الهاتف، بيانات الشركة" },
    { label: "سجلات المحادثات", detail: "جميع رسائل الذكاء الاصطناعي مع عملائك عبر واتساب، إنستغرام، ماسنجر" },
    { label: "بيانات الاستخدام", detail: "إحصاءات النشاط، تقارير الأداء، سجلات الجلسات" },
    { label: "بيانات الدفع", detail: "تُحذف من أنظمتنا مع الاحتفاظ بما يُوجبه القانون الضريبي" },
    { label: "ملفات التكوين", detail: "إعدادات روبوت الذكاء الاصطناعي، قوالب الردود، التكاملات المرتبطة" },
  ];

  const sections = [
    {
      title: "حذف البيانات عبر منصات Meta",
      content: `إذا كنت تستخدم خدمة ردود عبر واتساب أو إنستغرام أو ماسنجر، يحق لك طلب حذف بياناتك المرتبطة بهذه المنصات بشكل مستقل.

لحذف بيانات ردود المرتبطة بتطبيق Facebook/Instagram أو Meta:
• افتح تطبيق Facebook أو Instagram.
• اذهب إلى: الإعدادات ← الأمان ← التطبيقات والمواقع ← ردود.
• اضغط "إزالة" ثم "حذف النشاط".

سيُرسَل إشعار تلقائي إلينا لبدء حذف بياناتك المرتبطة بحسابك على هذه المنصات.`,
    },
    {
      title: "البيانات المستثناة من الحذف الفوري",
      content: `وفقاً لمتطلبات قانونية قد نحتفظ مؤقتاً ببعض البيانات:

• **السجلات المالية:** فواتير المدفوعات والمعاملات المالية كما تستوجبها الأنظمة الضريبية (لمدة تصل إلى ٧ سنوات).
• **سجلات الامتثال القانوني:** في حال صدور أمر قانوني أو اتخاذ إجراءات قانونية.
• **البيانات المُجمَّعة وغير المُعرِّفة:** إحصاءات لا تتيح التعرف على هويتك.

جميع البيانات الأخرى تُحذف بالكامل خلال ٣٠ يوماً.`,
    },
    {
      title: "حقوقك بموجب لوائح حماية البيانات",
      content: `وفقاً للوائح حماية البيانات المعمول بها، يحق لك:

• **الوصول:** طلب نسخة كاملة من بياناتك قبل حذفها.
• **التصحيح:** تعديل أي بيانات غير دقيقة.
• **الحذف:** طلب الحذف الكامل لبياناتك الشخصية.
• **نقل البيانات:** استلام بياناتك بصيغة قابلة للقراءة الآلية.
• **الاعتراض:** رفض معالجة بياناتك لأغراض معينة.

لممارسة هذه الحقوق، تواصل معنا على info@rudood.com`,
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #060b1a 0%, #0a0f2e 100%)" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{ background: "rgba(6,11,26,0.9)", backdropFilter: "blur(20px)", borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image src="/logo.png" alt="ردود" width={36} height={36} className="rounded-xl object-contain bg-white p-0.5 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-white font-extrabold text-xl">ردود</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-slate-300 font-semibold text-sm border border-white/10 hover:bg-white/5 hover:text-white hover:border-white/20 transition-all duration-200"
          >
            <ArrowRight size={16} />
            العودة للرئيسية
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        {/* Hero */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
            style={{ background: "linear-gradient(135deg, #dc2626 0%, #7c3aed 50%, #06b6d4 100%)" }}
          >
            <Trash2 size={28} className="text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">حذف البيانات</h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            نحترم حقك الكامل في حذف بياناتك الشخصية من منصة ردود
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-400 text-sm">
            <span>آخر تحديث: {lastUpdated}</span>
          </div>
        </div>

        {/* Quick action card */}
        <div
          className="p-6 rounded-2xl border mb-10 flex flex-col sm:flex-row items-center gap-5"
          style={{ background: "rgba(220,38,38,0.08)", borderColor: "rgba(220,38,38,0.25)" }}
        >
          <div className="flex-shrink-0">
            <AlertCircle size={36} className="text-red-400" />
          </div>
          <div className="text-center sm:text-right flex-1">
            <p className="text-white font-bold text-lg mb-1">هل تريد حذف بياناتك الآن؟</p>
            <p className="text-slate-400 text-sm">أرسل طلبك مباشرةً وسنتولى الأمر خلال ٣٠ يوماً</p>
          </div>
          <a
            href="mailto:info@rudood.com?subject=طلب حذف البيانات"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold transition-all duration-300 hover:scale-105 whitespace-nowrap"
            style={{ background: "linear-gradient(135deg, #dc2626, #7c3aed)" }}
          >
            <Mail size={18} />
            أرسل الطلب الآن
          </a>
        </div>

        {/* Steps */}
        <h2 className="text-2xl font-black text-white mb-6">خطوات طلب حذف البيانات</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {steps.map((step, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/5"
              style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-base flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #1d4ed8, #7c3aed)" }}
                >
                  {step.number}
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline note */}
        <div
          className="p-5 rounded-xl border mb-10 flex items-center gap-4"
          style={{ background: "rgba(6,182,212,0.07)", borderColor: "rgba(6,182,212,0.2)" }}
        >
          <Clock size={24} className="text-[#0891B2]-400 flex-shrink-0" />
          <p className="text-slate-300 text-sm">
            <strong className="text-white">الإطار الزمني:</strong> يُعالَج طلب التحقق خلال <strong className="text-[#0891B2]-400">٤٨ ساعة عمل</strong>، ويكتمل الحذف الكامل خلال <strong className="text-[#0891B2]-400">٣٠ يوماً</strong> من تأكيد الطلب.
          </p>
        </div>

        {/* Data types */}
        <h2 className="text-2xl font-black text-white mb-6">البيانات التي تُحذف</h2>
        <div className="space-y-3 mb-12">
          {dataTypes.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-xl border flex items-start gap-4"
              style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-semibold text-sm">{item.label}</p>
                <p className="text-slate-500 text-xs mt-0.5">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional sections */}
        <div className="space-y-6 mb-10">
          {sections.map((section, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/5"
              style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              <h2 className="text-lg sm:text-xl font-black text-white mb-4">{section.title}</h2>
              <div className="space-y-3">
                {section.content.split("\n\n").map((paragraph, j) => (
                  <p
                    key={j}
                    className="text-slate-300 leading-relaxed whitespace-pre-line"
                    dangerouslySetInnerHTML={{
                      __html: paragraph
                        .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white">$1</strong>')
                        .replace(/•/g, '<span style="color:#7c3aed">•</span>'),
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact card */}
        <div
          className="mt-10 p-8 rounded-3xl border text-center"
          style={{
            background: "linear-gradient(135deg, rgba(220,38,38,0.08), rgba(124,58,237,0.1), rgba(6,182,212,0.08))",
            borderColor: "rgba(124,58,237,0.3)",
          }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
            style={{ background: "linear-gradient(135deg, #dc2626, #7c3aed)" }}
          >
            <Mail size={24} className="text-white" />
          </div>
          <h3 className="text-xl font-black text-white mb-2">تحتاج مساعدة؟</h3>
          <p className="text-slate-400 mb-5">فريقنا جاهز لمساعدتك في أي استفسار بشأن بياناتك</p>
          <a
            href="mailto:info@rudood.com?subject=طلب حذف البيانات"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold transition-all duration-300 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #dc2626, #7c3aed)" }}
          >
            <Mail size={18} />
            info@rudood.com
          </a>
        </div>

        {/* Footer links */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
          <Link href="/privacy" className="hover:text-slate-300 transition-colors">سياسة الخصوصية</Link>
          <span>•</span>
          <Link href="/terms" className="hover:text-slate-300 transition-colors">شروط الخدمة</Link>
          <span>•</span>
          <Link href="/" className="hover:text-slate-300 transition-colors">الرئيسية</Link>
        </div>

        <p className="text-center text-slate-600 text-sm mt-6">
          © {new Date().getFullYear()} ردود. جميع الحقوق محفوظة.
        </p>
      </main>
    </div>
  );
}
