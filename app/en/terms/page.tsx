"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, FileText, Mail } from "lucide-react";

export default function EnTermsPage() {
  const lastUpdated = "March 2026";

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing or using the Rudood platform, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please discontinue use of the Service.

These Terms apply to all visitors, users, and customers who access or use the Service.`,
    },
    {
      title: "2. Description of Service",
      content: `**Rudood** is a cloud-based AI-powered customer service automation platform that enables businesses and merchants to manage customer conversations across:

• **WhatsApp Business API**
• **Instagram Graph API**
• **Messenger Platform**

The Service includes automated AI response generation, conversation management, data analytics, and business system integration tools.`,
    },
    {
      title: "3. Account & Subscription Terms",
      content: `• You must be at least 18 years of age or represent a legal company or entity to use the Service.
• You are responsible for maintaining the confidentiality of your account credentials and for all activities carried out through your account.
• You must notify us immediately of any suspected unauthorized use of your account.
• We reserve the right to cancel or suspend accounts that violate these Terms.`,
    },
    {
      title: "4. Acceptable Use",
      content: `You agree not to use the Service for:

• **Spam:** Sending unsolicited promotional messages to individuals who have not consented to receive them.
• **Violations of Meta Policies:** Any activity that violates WhatsApp Business, Instagram, or Messenger terms of service.
• **Harmful Content:** Publishing offensive, discriminatory, misleading, or unlawful content.
• **Impersonation:** Falsely claiming to represent persons or companies you do not represent.
• **System Abuse:** Attempting to breach or disrupt platform security systems.`,
    },
    {
      title: "5. Subscriptions & Payments",
      content: `• Subscription fees are charged based on the plan you selected.
• Subscriptions renew automatically unless cancelled before the renewal date.
• All payments are final and non-refundable, except where required by law or as stated in our published refund policy.
• We reserve the right to modify subscription prices with at least 30 days' prior notice.
• In the event of late payment, we may suspend or terminate the Service.`,
    },
    {
      title: "6. Intellectual Property",
      content: `• All intellectual property rights related to the platform, including design, code, and trademarks, are owned by Rudood.
• Your subscription does not include any right to copy, modify, distribute, or resell the platform.
• Your business data and your customers' data remain your property at all times.
• You grant us a limited license to process your data solely for the purpose of operating the Service.`,
    },
    {
      title: "7. Disclaimers & Warranties",
      content: `The Service is provided "as is" without any express or implied warranties.

• **Service Availability:** We strive for 99.9% uptime but do not guarantee uninterrupted service.
• **AI Accuracy:** AI responses are automated and may not always be accurate; reviewing sensitive replies is your responsibility.
• **Third-Party Integrations:** We are not liable for disruptions or changes to Meta services or third-party providers.`,
    },
    {
      title: "8. Limitation of Liability",
      content: `To the extent permitted by applicable law:

• Our total aggregate liability to you shall not exceed the subscription fees you have paid in the preceding three months.
• We are not liable for any indirect, incidental, or consequential damages arising from your use of the Service.`,
    },
    {
      title: "9. Termination",
      content: `• You may cancel your subscription at any time by contacting us.
• We may terminate or suspend your Service for violations of these Terms, with prior notice where possible.
• Upon termination, your data will be deleted in accordance with our Privacy Policy and Data Deletion procedures.`,
    },
    {
      title: "10. Changes to Terms",
      content: `We reserve the right to update these Terms at any time. Users will be notified of material changes via:
• The email address associated with the account.
• A prominent notice within the dashboard.

Your continued use of the Service after changes are published constitutes acceptance of the updated Terms.`,
    },
    {
      title: "11. Governing Law & Disputes",
      content: `These Terms are governed by and construed in accordance with applicable laws and regulations. In the event of any dispute, parties will first seek an amicable resolution through direct contact at info@rudood.com.`,
    },
    {
      title: "12. Contact Us",
      content: `For questions about these Terms or to report a violation, please reach out:

Email: info@rudood.com
Website: www.rudood.com

We aim to respond to all inquiries within 48 business hours.`,
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
          <Link href="/en" className="flex items-center gap-3 group">
            <Image src="/logo.png" alt="Rudood" width={36} height={36} className="rounded-xl object-contain bg-white p-0.5 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-white font-extrabold text-xl">Rudood</span>
          </Link>
          <Link
            href="/en"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-slate-300 font-semibold text-sm border border-white/10 hover:bg-white/5 hover:text-white hover:border-white/20 transition-all duration-200"
          >
            <ArrowLeft size={16} />
            Back to Home
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
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">Terms of Service</h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Please read these Terms carefully before using the Rudood platform
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-400 text-sm">
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>

        {/* Intro card */}
        <div
          className="p-6 rounded-2xl border mb-8"
          style={{ background: "rgba(29,78,216,0.08)", borderColor: "rgba(29,78,216,0.25)" }}
        >
          <p className="text-slate-300 leading-relaxed text-base">
            <strong className="text-white">Important Notice: </strong>
            These Terms define your rights and obligations when using the{" "}
            <strong className="text-blue-400">Rudood</strong> platform. By using our Service, you acknowledge that you have read, understood, and agreed to be bound by these Terms.
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
          <h3 className="text-xl font-black text-white mb-2">Have a Question?</h3>
          <p className="text-slate-400 mb-5">Our team is ready to answer any questions about these Terms</p>
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
          <Link href="/en/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
          <span>•</span>
          <Link href="/en/data-deletion" className="hover:text-slate-300 transition-colors">Data Deletion</Link>
          <span>•</span>
          <Link href="/en" className="hover:text-slate-300 transition-colors">Home</Link>
        </div>

        <p className="text-center text-slate-600 text-sm mt-6">
          © {new Date().getFullYear()} Rudood. All rights reserved.
        </p>
      </main>
    </div>
  );
}
