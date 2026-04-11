"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileText, Mail } from "lucide-react";

export default function TermsPage() {
  const lastUpdated = "مارس ٢٠٢٦";

  const sections = [
    {
      title: "١. قبول الشروط",
      content: `بالوصول إلى منصة ردود أو استخدامها، فإنك توافق على الالتزام بهذه الشروط والأحكام. إن كنت لا توافق على أي جزء منها، يُرجى التوقف عن استخدام الخدمة.

تُطبَّق هذه الشروط على جميع الزوار والمستخدمين والعملاء الذين يصلون إلى الخدمة أو يستخدمونها.`,
    },
    {
      title: "٢. وصف الخدمة",
      content: `**ردود** هي منصة سحابية لأتمتة خدمة العملاء تعتمد على الذكاء الاصطناعي، وتُتيح للشركات والمتاجر إدارة محادثات العملاء عبر:

• **واتساب بيزنس API**
• **إنستغرام Graph API**
• **ماسنجر Platform**

تشمل الخدمة توليد ردود آلية ذكية، وإدارة المحادثات، وتحليل البيانات، وأدوات تكامل مع أنظمة الأعمال.`,
    },
    {
      title: "٣. شروط الاشتراك والحساب",
      content: `• يجب أن تكون شخصاً بالغاً يتجاوز عمره ١٨ عاماً أو تمثّل شركة أو مؤسسة قانونية لاستخدام الخدمة.
• أنت مسؤول عن الحفاظ على سرية بيانات الدخول لحسابك وعن جميع الأنشطة التي تُجرى من خلاله.
• يجب إخطارنا فوراً عند الاشتباه بأي استخدام غير مصرح به لحسابك.
• نحتفظ بالحق في إلغاء أو تعليق الحسابات التي تنتهك هذه الشروط.`,
    },
    {
      title: "٤. الاستخدام المقبول",
      content: `توافق على عدم استخدام الخدمة في:

• **إرسال رسائل غير مرغوب فيها (Spam):** إرسال رسائل ترويجية غير مصرح بها لأشخاص لم يوافقوا على استلامها.
• **انتهاك سياسات Meta:** أي نشاط يخالف شروط خدمة واتساب Business أو إنستغرام أو ماسنجر.
• **المحتوى الضار:** نشر محتوى مسيء أو تمييزي أو مضلل أو غير قانوني.
• **انتحال الصفة:** ادعاء تمثيل أشخاص أو شركات لا تمثّلها.
• **كسر الحماية:** محاولة اختراق أنظمة المنصة أو إعاقة عملها.`,
    },
    {
      title: "٥. الاشتراكات والمدفوعات",
      content: `• تُفرض رسوم الاشتراك وفقاً للخطة التي اخترتها.
• تُجدَّد الاشتراكات تلقائياً ما لم تُلغِها قبل موعد التجديد.
• جميع المدفوعات نهائية غير قابلة للاسترداد، إلا في الحالات التي يُلزم بها القانون أو وفقاً لسياسة الاسترداد المعلنة.
• نحتفظ بالحق في تعديل أسعار الاشتراك مع إشعار مسبق لا يقل عن ٣٠ يوماً.
• في حال التأخر في السداد، يحق لنا تعليق الخدمة أو إيقافها.`,
    },
    {
      title: "٦. الملكية الفكرية",
      content: `• جميع حقوق الملكية الفكرية المتعلقة بالمنصة، بما في ذلك التصميم والكود والعلامات التجارية، مملوكة لشركة ردود.
• لا يشمل اشتراكك أي حق في نسخ المنصة أو تعديلها أو توزيعها أو إعادة بيعها.
• تظل بيانات أعمالك وبيانات عملائك ملكاً لك في جميع الأوقات.
• تمنحنا إذناً محدوداً لمعالجة بياناتك لأغراض تشغيل الخدمة فحسب.`,
    },
    {
      title: "٧. إخلاء المسؤولية والضمانات",
      content: `تُقدَّم الخدمة "كما هي" دون أي ضمانات صريحة أو ضمنية.

• **توافر الخدمة:** نسعى لتحقيق نسبة تشغيل ٩٩.٩٪ لكننا لا نضمن استمرارية الخدمة دون انقطاع.
• **دقة الذكاء الاصطناعي:** ردود الذكاء الاصطناعي آلية وقد لا تكون دقيقة دائماً؛ مراجعة الردود الحساسة تقع على عاتقك.
• **التكاملات الخارجية:** لا نتحمل مسؤولية أي انقطاع أو تغيير في خدمات Meta أو أطراف ثالثة.`,
    },
    {
      title: "٨. حدود المسؤولية",
      content: `في حدود ما يُجيزه القانون المعمول به:

• لا تتجاوز مسؤوليتنا الإجمالية اتجاهك في أي حال ما دفعته من رسوم اشتراك خلال الأشهر الثلاثة الأخيرة.
• لا نتحمل أي مسؤولية عن الأضرار غير المباشرة أو العرضية أو التبعية الناجمة عن استخدام الخدمة.`,
    },
    {
      title: "٩. إنهاء الخدمة",
      content: `• يحق لك إنهاء اشتراكك في أي وقت عبر التواصل معنا.
• يحق لنا إنهاء خدمتك أو تعليقها في حال انتهاكك لهذه الشروط، مع إشعار مسبق كلما أمكن.
• عند الإنهاء، تُحذف بياناتك وفقاً لسياسة الخصوصية وإجراءات حذف البيانات المعتمدة لدينا.`,
    },
    {
      title: "١٠. تعديلات الشروط",
      content: `نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيُبلَّغ المستخدمون بأي تغييرات جوهرية عبر:
• البريد الإلكتروني المرتبط بالحساب.
• إشعار بارز داخل لوحة التحكم.

استمرارك في استخدام الخدمة بعد نشر التعديلات يُعدّ قبولاً للشروط المحدَّثة.`,
    },
    {
      title: "١١. القانون المطبق والنزاعات",
      content: `تخضع هذه الشروط وتُفسَّر وفقاً للأنظمة والقوانين المعمول بها. في حال نشوء أي نزاع، يُسعى أولاً للتسوية الودية عبر التواصل المباشر على info@rudood.com.`,
    },
    {
      title: "١٢. التواصل معنا",
      content: `للاستفسار عن هذه الشروط أو للإبلاغ عن أي انتهاك، تواصل معنا:

البريد الإلكتروني: info@rudood.com
الموقع الإلكتروني: www.rudood.com

سنسعى للرد على استفساراتك خلال ٤٨ ساعة عمل.`,
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #060b1a 0%, #0a0f2e 100%)" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          background: "rgba(6,11,26,0.9)",
          backdropFilter: "blur(20px)",
          borderColor: "rgba(255,255,255,0.08)",
        }}
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

      {/* Page content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        {/* Hero */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
            style={{ background: "linear-gradient(135deg, #1d4ed8 0%, #7c3aed 50%, #06b6d4 100%)" }}
          >
            <FileText size={28} className="text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">شروط الخدمة</h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            يُرجى قراءة هذه الشروط بعناية قبل استخدام منصة ردود
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-400 text-sm">
            <span>آخر تحديث: {lastUpdated}</span>
          </div>
        </div>

        {/* Intro card */}
        <div
          className="p-6 rounded-2xl border mb-8"
          style={{ background: "rgba(29,78,216,0.08)", borderColor: "rgba(29,78,216,0.25)" }}
        >
          <p className="text-slate-300 leading-relaxed text-base">
            <strong className="text-white">ملاحظة مهمة: </strong>
            تُحدِّد هذه الشروط حقوقك والتزاماتك عند استخدام منصة{" "}
            <strong className="text-blue-400">ردود</strong>. باستخدامك للخدمة فإنك تقرّ بأنك قرأت هذه الشروط وفهمتها ووافقت على الالتزام بها.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/5"
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
                        .replace(/•/g, '<span style="color:#1d4ed8">•</span>'),
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
            background: "linear-gradient(135deg, rgba(29,78,216,0.1), rgba(124,58,237,0.1), rgba(6,182,212,0.1))",
            borderColor: "rgba(29,78,216,0.3)",
          }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
            style={{ background: "linear-gradient(135deg, #1d4ed8, #7c3aed)" }}
          >
            <Mail size={24} className="text-white" />
          </div>
          <h3 className="text-xl font-black text-white mb-2">هل لديك سؤال؟</h3>
          <p className="text-slate-400 mb-5">فريقنا جاهز للإجابة على أي استفسار بشأن شروط الخدمة</p>
          <a
            href="mailto:info@rudood.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold transition-all duration-300 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #1d4ed8, #7c3aed)" }}
          >
            <Mail size={18} />
            info@rudood.com
          </a>
        </div>

        {/* Footer links */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
          <Link href="/privacy" className="hover:text-slate-300 transition-colors">سياسة الخصوصية</Link>
          <span>•</span>
          <Link href="/data-deletion" className="hover:text-slate-300 transition-colors">حذف البيانات</Link>
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
