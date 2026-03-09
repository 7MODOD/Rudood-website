"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Mail } from "lucide-react";

export default function PrivacyPage() {
  const lastUpdated = "مارس ٢٠٢٦";

  const sections = [
    {
      title: "١. مقدمة وقبول الشروط",
      content: `مرحباً بك في ردود ("الشركة"، "نحن"، "خدمتنا"). تُبيّن سياسة الخصوصية هذه كيفية جمعنا للمعلومات واستخدامها والإفصاح عنها وحمايتها عند استخدامك لمنصة ردود لأتمتة خدمة العملاء عبر واتساب وإنستغرام وماسنجر.

باستخدامك لخدمتنا، فإنك توافق على الشروط الواردة في هذه السياسة. إن كنت لا توافق على هذه الشروط، يُرجى عدم استخدام الخدمة.`,
    },
    {
      title: "٢. المعلومات التي نجمعها",
      content: `نجمع أنواعاً مختلفة من المعلومات لتشغيل خدمتنا وتحسينها:

**معلومات الحساب:** الاسم، عنوان البريد الإلكتروني، رقم الهاتف، واسم الشركة أو المتجر التي تُقدمها عند التسجيل.

**بيانات المحادثات:** محتوى الرسائل المتبادلة بين عملائك وروبوت الذكاء الاصطناعي عبر واتساب وإنستغرام وماسنجر. تُستخدم هذه البيانات حصراً لتشغيل الخدمة وتحسين جودة الردود.

**بيانات الاستخدام:** معلومات حول كيفية تفاعلك مع المنصة، بما في ذلك عدد الرسائل المعالَجة، وأوقات الاستجابة، والمميزات المستخدمة.

**البيانات التقنية:** عنوان IP، ونوع المتصفح، وبيانات السجلات، والبيانات اللازمة لتوفير الأمان وتشخيص الأعطال.`,
    },
    {
      title: "٣. كيفية استخدامنا للمعلومات",
      content: `نستخدم المعلومات التي نجمعها للأغراض التالية:

• **تشغيل الخدمة:** معالجة الرسائل الواردة وتوليد ردود ذكاء اصطناعي مناسبة بالنيابة عنك.
• **تحسين النماذج:** تدريب وتحسين نماذج الذكاء الاصطناعي لرفع جودة الردود ودقتها — بعد إزالة أي بيانات تعريفية شخصية.
• **التواصل معك:** إرسال الإشعارات المتعلقة بالخدمة، والتحديثات، والمعلومات الدعائية التي وافقت على استلامها.
• **الدعم الفني:** تشخيص المشكلات التقنية وحلها.
• **الامتثال القانوني:** الوفاء بالتزاماتنا القانونية والتنظيمية.`,
    },
    {
      title: "٤. معالجة المحادثات بالذكاء الاصطناعي",
      content: `تعتمد خدمة ردود على معالجة المحادثات النصية بالذكاء الاصطناعي. يُرجى العلم بما يلي:

• تُرسَل الرسائل الواردة من عملائك إلى نماذج الذكاء الاصطناعي لتوليد الردود المناسبة.
• قد تُستخدم بيانات المحادثات —بعد إخفاء الهوية— لتحسين جودة النماذج اللغوية.
• لديك الحق في تعطيل استخدام بيانات محادثاتك لأغراض التدريب بالتواصل معنا مباشرةً.
• نحرص على تقليل البيانات المعالَجة إلى الحد الضروري لتقديم الخدمة.`,
    },
    {
      title: "٥. مشاركة البيانات مع جهات خارجية",
      content: `نتكامل مع منصات Meta (واتساب، إنستغرام، ماسنجر) ونلتزم بسياساتها. نشارك البيانات مع أطراف ثالثة في الحالات التالية فقط:

**مزودو الخدمات:** شركاء تشغيليون موثوقون يساعدون في تقديم خدمتنا (مزودو الخادم، تحليلات البيانات) ويلتزمون بعقود معالجة بيانات صارمة.

**منصات Meta:** وفقاً لشروط خدمة واتساب Business API وإنستغرام Graph API وماسنجر Platform.

**الجهات القانونية:** عند الضرورة القانونية أو بأمر من المحاكم المختصة.

**لا نبيع بياناتك الشخصية لأي طرف ثالث بأي حال من الأحوال.**`,
    },
    {
      title: "٦. الأمان وحماية البيانات",
      content: `نتخذ تدابير أمنية صارمة لحماية بياناتك:

• **التشفير:** جميع البيانات مشفَّرة أثناء النقل باستخدام بروتوكول TLS 1.3، وأثناء التخزين بمعايير AES-256.
• **التحكم بالوصول:** وصول مُقيَّد بمبدأ الحد الأدنى من الامتيازات مع مصادقة متعددة العوامل.
• **المراقبة:** مراقبة أمنية مستمرة للكشف عن أي نشاط غير مصرح به.
• **النسخ الاحتياطي:** نسخ احتياطية منتظمة لضمان استمرارية الخدمة.

مع ذلك، لا يمكن ضمان الأمان المطلق على الإنترنت. ننصحك باتخاذ الاحتياطات اللازمة من جانبك.`,
    },
    {
      title: "٧. حقوقك كمستخدم",
      content: `لك الحق في:

• **الوصول:** طلب نسخة من بياناتك الشخصية التي نحتفظ بها.
• **التصحيح:** طلب تصحيح أي بيانات غير دقيقة.
• **الحذف:** طلب حذف بياناتك الشخصية، مع مراعاة المتطلبات القانونية.
• **الاعتراض:** الاعتراض على معالجة بياناتك لأغراض معينة.
• **النقل:** طلب نقل بياناتك بصيغة قابلة للقراءة الآلية.
• **إلغاء الاشتراك:** إلغاء الاشتراك في الاتصالات التسويقية في أي وقت.

لممارسة هذه الحقوق، تواصل معنا عبر: info@rudood.com`,
    },
    {
      title: "٨. الاحتفاظ بالبيانات",
      content: `نحتفظ ببياناتك الشخصية طوال مدة اشتراكك في الخدمة. بعد إلغاء الحساب:

• تُحذف بيانات المحادثات النشطة خلال ٣٠ يوماً.
• تُحتفظ بسجلات الحساب الضرورية للامتثال القانوني وفقاً للأنظمة المعمول بها.
• يمكنك طلب الحذف الفوري لبياناتك بالتواصل معنا مباشرةً.`,
    },
    {
      title: "٩. ملفات تعريف الارتباط (Cookies)",
      content: `نستخدم ملفات تعريف الارتباط وتقنيات مشابهة لتحسين تجربتك:

• **الضرورية:** لازمة لتشغيل الموقع والخدمة بشكل صحيح.
• **الأداء:** تساعدنا في فهم كيفية استخدام الموقع لتحسينه.
• **التفضيلات:** تتذكر إعداداتك المفضلة.

يمكنك التحكم في ملفات تعريف الارتباط عبر إعدادات متصفحك، مع العلم بأن تعطيلها قد يؤثر على بعض وظائف الموقع.`,
    },
    {
      title: "١٠. خصوصية القاصرين",
      content: `خدمة ردود موجّهة للشركات والمتاجر، ولا نجمع بيانات شخصية بصورة مقصودة من أشخاص دون سن ١٨ عاماً. إن اكتشفنا أننا جمعنا بيانات من قاصر، نتخذ الإجراءات اللازمة لحذفها فوراً.`,
    },
    {
      title: "١١. التعديلات على السياسة",
      content: `نحتفظ بحق تعديل هذه السياسة في أي وقت. في حال إجراء تعديلات جوهرية، نُخطرك عبر:
• البريد الإلكتروني المرتبط بحسابك.
• إشعار مميز داخل لوحة التحكم.

استمرارك في استخدام الخدمة بعد أي تعديلات يُعدّ قبولاً منك للنسخة المحدَّثة من السياسة.`,
    },
    {
      title: "١٢. التواصل معنا",
      content: `إن كان لديك أي استفسار أو شكوى بشأن هذه السياسة أو ممارساتنا المتعلقة بالخصوصية، تواصل معنا:

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
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
              <Image src="/logo.png" alt="ردود" width={36} height={36} className="rounded-xl object-contain bg-white p-0.5 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-white font-extrabold text-xl">ردود</span>
          </Link>

          {/* Back button */}
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
        {/* Page hero */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
            style={{ background: "linear-gradient(135deg, #1d4ed8 0%, #7c3aed 50%, #06b6d4 100%)" }}
          >
            <Shield size={28} className="text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">
            سياسة الخصوصية
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            نلتزم بحماية خصوصيتك وبيانات عملائك بأعلى المعايير الأمنية
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-400 text-sm">
            <span>آخر تحديث: {lastUpdated}</span>
          </div>
        </div>

        {/* Intro card */}
        <div
          className="p-6 rounded-2xl border mb-8"
          style={{
            background: "rgba(124,58,237,0.08)",
            borderColor: "rgba(124,58,237,0.25)",
          }}
        >
          <p className="text-slate-300 leading-relaxed text-base">
            <strong className="text-white">مقدمة مهمة: </strong>
            تصف هذه السياسة كيف تجمع منصة <strong className="text-purple-400">ردود</strong> البيانات وتستخدمها وتحميها. نحن نؤمن بأن الشفافية أساس الثقة، ونسعى دائماً للامتثال لأفضل ممارسات حماية البيانات وخصوصية المستخدم.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/5"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <h2 className="text-lg sm:text-xl font-black text-white mb-4">
                {section.title}
              </h2>
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
            background: "linear-gradient(135deg, rgba(29,78,216,0.1), rgba(124,58,237,0.1), rgba(6,182,212,0.1))",
            borderColor: "rgba(124,58,237,0.3)",
          }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
            style={{ background: "linear-gradient(135deg, #1d4ed8, #7c3aed)" }}
          >
            <Mail size={24} className="text-white" />
          </div>
          <h3 className="text-xl font-black text-white mb-2">هل لديك سؤال؟</h3>
          <p className="text-slate-400 mb-5">
            فريقنا جاهز للإجابة على أي استفسار بشأن خصوصيتك
          </p>
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
          <Link href="/terms" className="hover:text-slate-300 transition-colors">شروط الخدمة</Link>
          <span>•</span>
          <Link href="/data-deletion" className="hover:text-slate-300 transition-colors">حذف البيانات</Link>
          <span>•</span>
          <Link href="/" className="hover:text-slate-300 transition-colors">الرئيسية</Link>
        </div>

        {/* Footer copyright */}
        <p className="text-center text-slate-600 text-sm mt-8">
          © {new Date().getFullYear()} ردود. جميع الحقوق محفوظة.
        </p>
      </main>
    </div>
  );
}
