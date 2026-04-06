import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | ردود",
  description: "سياسة الخصوصية وحماية البيانات لمنصة ردود.",
};

const sections = [
  {
    title: "1. المعلومات التي نجمعها",
    content: `نجمع المعلومات التي تقدمها مباشرةً عند التسجيل أو استخدام خدماتنا، وتشمل:

• الاسم الكامل ومعلومات التواصل (البريد الإلكتروني، رقم الهاتف)
• معلومات النشاط التجاري
• بيانات المحادثات التي يُجريها نظام الذكاء الاصطناعي مع عملاءك
• معلومات الاستخدام والأداء (إحصائيات الرسائل، أوقات الاستجابة)`,
  },
  {
    title: "2. كيف نستخدم معلوماتك",
    content: `نستخدم المعلومات المجموعة للأغراض التالية:

• تقديم وتشغيل وتحسين خدمات ردود
• تدريب نموذج الذكاء الاصطناعي على بيانات بزنسك لتقديم ردود دقيقة
• إرسال إشعارات تقنية وتحديثات تتعلق بالخدمة
• الرد على استفساراتك ودعمك الفني
• تحليل أنماط الاستخدام لتحسين المنصة`,
  },
  {
    title: "3. مشاركة المعلومات",
    content: `نحن لا نبيع أو نؤجر أو نتاجر بمعلوماتك الشخصية. قد نشارك البيانات في الحالات التالية:

• مع مزودي الخدمات الموثوقين الذين يساعدوننا في تشغيل المنصة (مثل خدمات الاستضافة والذكاء الاصطناعي)
• عند الاقتضاء القانوني أو بأمر من جهات قانونية مختصة
• بموافقتك الصريحة

جميع الأطراف الثالثة المتعاقدة معنا ملزمة بالحفاظ على سرية بياناتك.`,
  },
  {
    title: "4. أمان البيانات",
    content: `نطبق معايير أمان صناعية عالية لحماية بياناتك:

• تشفير البيانات أثناء النقل (TLS/SSL) وأثناء التخزين
• التحكم في الوصول بناءً على الصلاحيات
• مراجعات أمنية دورية
• نسخ احتياطية منتظمة للبيانات
• عزل بيانات كل عميل عن الآخرين`,
  },
  {
    title: "5. الاحتفاظ بالبيانات",
    content: `نحتفظ ببياناتك طالما حسابك نشط أو حسب ما تقتضيه الخدمة. يمكنك في أي وقت:

• طلب حذف بيانات حسابك
• تصدير بياناتك
• تعديل معلوماتك الشخصية

عند إغلاق الحساب، نحذف بياناتك خلال 30 يوم عمل مع الاحتفاظ بما يلزم قانونياً.`,
  },
  {
    title: "6. ملفات تعريف الارتباط (Cookies)",
    content: `نستخدم ملفات تعريف ارتباط محدودة لأغراض تشغيلية فقط:

• ملفات ضرورية للجلسة وتسجيل الدخول
• تحليلات استخدام مجهولة الهوية لتحسين الخدمة

لا نستخدم ملفات تعريف الارتباط لأغراض تسويقية تتبعية.`,
  },
  {
    title: "7. حقوقك",
    content: `لديك الحق في:

• الوصول إلى بياناتك الشخصية التي نحتفظ بها
• تصحيح أي معلومات غير دقيقة
• طلب حذف بياناتك ("الحق في النسيان")
• الاعتراض على معالجة بياناتك
• تقييد معالجة بياناتك في ظروف معينة
• نقل بياناتك إلى خدمة أخرى

للممارسة أي من هذه الحقوق، تواصل معنا على info@rudood.com`,
  },
  {
    title: "8. خصوصية الأطفال",
    content: `خدماتنا موجهة للشركات والبالغين. لا نجمع بيانات الأشخاص دون 18 عاماً عن قصد. إن علمنا بذلك، سنحذف المعلومات فوراً.`,
  },
  {
    title: "9. التغييرات على هذه السياسة",
    content: `قد نحدّث هذه السياسة بشكل دوري. سنخطرك بأي تغييرات جوهرية عبر البريد الإلكتروني أو إشعار في المنصة قبل 30 يوم من سريانها. استمرار استخدامك للخدمة بعد التحديث يُعد قبولاً للسياسة المعدّلة.`,
  },
  {
    title: "10. التواصل معنا",
    content: `لأي أسئلة أو استفسارات حول سياسة الخصوصية أو بياناتك:

📧 البريد الإلكتروني: info@rudood.com
💬 واتساب: تواصل معنا عبر الموقع
🌐 الموقع: rudood.app`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-night text-text-primary">
      {/* Simple nav */}
      <header className="border-b border-border bg-surface/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Logo size={32} showText={true} lang="ar" textClass="text-lg text-text-primary" />
          </Link>
          <Link
            href="/"
            className="text-sm text-text-muted hover:text-text-primary transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            العودة للرئيسية
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan/30 bg-cyan/5 text-cyan text-xs font-semibold mb-4">
            آخر تحديث: يناير 2026
          </div>
          <h1 className="text-4xl font-black text-text-primary mb-4">سياسة الخصوصية</h1>
          <p className="text-text-muted text-lg leading-relaxed">
            في ردود، نُقدّر خصوصيتك ونلتزم بحماية بياناتك الشخصية. تشرح هذه السياسة كيف نجمع
            معلوماتك ونستخدمها ونحميها عند استخدام منصتنا.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className="p-6 rounded-2xl border border-border bg-surface"
            >
              <h2 className="text-lg font-black text-text-primary mb-3">{section.title}</h2>
              <div className="text-text-muted text-sm leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 p-6 rounded-2xl border border-primary/20 bg-primary/5 text-center">
          <p className="text-text-muted text-sm">
            هذه السياسة سارية اعتباراً من يناير 2026. لأي استفسار:{" "}
            <a href="mailto:info@rudood.com" className="text-cyan hover:underline">
              info@rudood.com
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
