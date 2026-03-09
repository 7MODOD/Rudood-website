"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Shield, Mail } from "lucide-react";

export default function EnPrivacyPage() {
  const lastUpdated = "March 2026";

  const sections = [
    {
      title: "1. Introduction & Acceptance",
      content: `Welcome to Rudood ("the Company," "we," "our," "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the Rudood platform for customer service automation across WhatsApp, Instagram, and Messenger.

By using our Service, you agree to the terms of this Policy. If you do not agree, please discontinue use of the Service.`,
    },
    {
      title: "2. Information We Collect",
      content: `We collect several types of information to operate and improve our Service:

**Account Information:** Name, email address, phone number, and company or store name provided during registration.

**Conversation Data:** Content of messages exchanged between your customers and the AI assistant via WhatsApp, Instagram, and Messenger. This data is used exclusively to operate the Service and improve response quality.

**Usage Data:** Information about how you interact with the platform, including the number of messages processed, response times, and features used.

**Technical Data:** IP address, browser type, log data, and information required to maintain security and diagnose issues.`,
    },
    {
      title: "3. How We Use Your Information",
      content: `We use the information we collect for the following purposes:

• **Operating the Service:** Processing incoming messages and generating appropriate AI responses on your behalf.
• **Improving AI Models:** Training and refining language models to enhance response quality and accuracy — only after removing any personally identifiable information.
• **Communicating With You:** Sending service notifications, updates, and promotional communications you have opted into.
• **Technical Support:** Diagnosing and resolving technical issues.
• **Legal Compliance:** Fulfilling our legal and regulatory obligations.`,
    },
    {
      title: "4. AI Conversation Processing",
      content: `Rudood's service relies on AI processing of text conversations. Please be aware of the following:

• Incoming messages from your customers are sent to AI models to generate appropriate replies.
• Conversation data may be used — after anonymization — to improve the quality of language models.
• You have the right to opt out of having your conversation data used for training purposes by contacting us directly.
• We minimize the data processed to what is strictly necessary to deliver the Service.`,
    },
    {
      title: "5. Data Sharing With Third Parties",
      content: `We integrate with Meta platforms (WhatsApp, Instagram, Messenger) and comply with their policies. We share data with third parties only in the following cases:

**Service Providers:** Trusted operational partners who help deliver our Service (server providers, data analytics) and are bound by strict data processing agreements.

**Meta Platforms:** As required by WhatsApp Business API, Instagram Graph API, and Messenger Platform terms of service.

**Legal Authorities:** When legally required or ordered by a competent court.

**We never sell your personal data to any third party under any circumstances.**`,
    },
    {
      title: "6. Security & Data Protection",
      content: `We implement strict security measures to protect your data:

• **Encryption:** All data is encrypted in transit using TLS 1.3, and at rest using AES-256 standards.
• **Access Controls:** Least-privilege access with multi-factor authentication enforced.
• **Monitoring:** Continuous security monitoring to detect unauthorized activity.
• **Backups:** Regular backups to ensure service continuity.

That said, no method of transmission over the Internet is 100% secure. We encourage you to take appropriate precautions on your end as well.`,
    },
    {
      title: "7. Your Rights",
      content: `You have the right to:

• **Access:** Request a copy of the personal data we hold about you.
• **Rectification:** Request correction of any inaccurate data.
• **Erasure:** Request deletion of your personal data, subject to legal requirements.
• **Objection:** Object to processing of your data for certain purposes.
• **Portability:** Request your data in a machine-readable format.
• **Opt-Out:** Unsubscribe from marketing communications at any time.

To exercise these rights, contact us at: info@rudood.com`,
    },
    {
      title: "8. Data Retention",
      content: `We retain your personal data for the duration of your subscription. After account cancellation:

• Active conversation data is deleted within 30 days.
• Account records required for legal compliance are retained as mandated by applicable regulations.
• You may request immediate deletion of your data by contacting us directly.`,
    },
    {
      title: "9. Cookies & Similar Technologies",
      content: `We use cookies and similar technologies to improve your experience:

• **Essential:** Required for the website and Service to function properly.
• **Performance:** Help us understand how the site is used so we can improve it.
• **Preferences:** Remember your settings and customizations.

You can control cookies through your browser settings. Note that disabling certain cookies may affect some website functionality.`,
    },
    {
      title: "10. Children's Privacy",
      content: `Rudood is designed for businesses and merchants and we do not intentionally collect personal data from individuals under the age of 18. If we discover that we have collected data from a minor, we will take immediate steps to delete it.`,
    },
    {
      title: "11. Changes to This Policy",
      content: `We reserve the right to update this Policy at any time. If we make material changes, we will notify you via:
• The email address associated with your account.
• A prominent notice within the dashboard.

Your continued use of the Service after any changes constitutes acceptance of the updated Policy.`,
    },
    {
      title: "12. Contact Us",
      content: `If you have any questions or concerns about this Policy or our privacy practices, please reach out:

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
          {/* Logo */}
          <Link href="/en" className="flex items-center gap-3 group">
            <Image src="/logo.png" alt="Rudood" width={36} height={36} className="rounded-xl object-contain bg-white p-0.5 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-white font-extrabold text-xl">Rudood</span>
          </Link>

          {/* Back button */}
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
            <Shield size={28} className="text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            We are committed to protecting your privacy and your customers&apos; data to the highest security standards.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-400 text-sm">
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>

        {/* Intro card */}
        <div
          className="p-6 rounded-2xl border mb-8"
          style={{ background: "rgba(124,58,237,0.08)", borderColor: "rgba(124,58,237,0.25)" }}
        >
          <p className="text-slate-300 leading-relaxed text-base">
            <strong className="text-white">Important Notice: </strong>
            This Policy describes how <strong className="text-purple-400">Rudood</strong> collects, uses, and protects your data. We believe transparency is the foundation of trust and strive to comply with the best data protection and user privacy practices at all times.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
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
          <h3 className="text-xl font-black text-white mb-2">Have a Question?</h3>
          <p className="text-slate-400 mb-5">Our team is ready to answer any question about your privacy</p>
          <a
            href="mailto:info@rudood.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold transition-all duration-300 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #1d4ed8, #7c3aed)" }}
          >
            <Mail size={18} />
            info@rudood.com
          </a>
        </div>

        {/* Footer nav */}
        <div className="mt-10 text-center">
          <Link
            href="/en"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-slate-400 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-200 font-semibold"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>

        <p className="text-center text-slate-600 text-sm mt-8">
          © {new Date().getFullYear()} Rudood. All rights reserved.
        </p>
      </main>
    </div>
  );
}
