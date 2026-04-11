"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Trash2, Mail, CheckCircle, Clock, AlertCircle } from "lucide-react";

export default function EnDataDeletionPage() {
  const lastUpdated = "March 2026";

  const steps = [
    {
      number: "1",
      title: "Send a Deletion Request",
      description: 'Email info@rudood.com with the subject "Data Deletion Request", including the email address associated with your Rudood account.',
    },
    {
      number: "2",
      title: "Identity Verification",
      description: "We will verify your identity within 48 business hours to confirm you are the account owner, protecting your data from unauthorized deletion.",
    },
    {
      number: "3",
      title: "Confirmation",
      description: "After verification, you will receive a confirmation email indicating that your deletion request has been initiated and specifying the expected timeframe.",
    },
    {
      number: "4",
      title: "Deletion Completed",
      description: "All your data is deleted within 30 days of confirming the request, subject to any legal obligations requiring retention of certain records.",
    },
  ];

  const dataTypes = [
    { label: "Personal Account Data", detail: "Name, email address, phone number, and company information" },
    { label: "Conversation Records", detail: "All AI messages with your customers across WhatsApp, Instagram, and Messenger" },
    { label: "Usage Data", detail: "Activity statistics, performance reports, and session logs" },
    { label: "Payment Data", detail: "Removed from our systems, subject to mandatory tax retention requirements" },
    { label: "Configuration Files", detail: "AI bot settings, response templates, and linked integrations" },
  ];

  const sections = [
    {
      title: "Deleting Data via Meta Platforms",
      content: `If you use Rudood via WhatsApp, Instagram, or Messenger, you may also request deletion of your data linked to those platforms independently.

To remove Rudood data linked to your Facebook/Instagram/Meta account:
• Open the Facebook or Instagram app.
• Navigate to: Settings → Security → Apps and Websites → Rudood.
• Tap "Remove" then "Delete Activity".

An automatic notification will be sent to us to initiate deletion of your data associated with that Meta account.`,
    },
    {
      title: "Data Exempt from Immediate Deletion",
      content: `Due to legal requirements, we may temporarily retain certain data:

• **Financial Records:** Payment invoices and transaction records as required by tax regulations (up to 7 years).
• **Legal Compliance Logs:** Where required by court order or ongoing legal proceedings.
• **Aggregated & Anonymized Data:** Aggregate statistics that cannot be used to identify you personally.

All other data is permanently deleted within 30 days.`,
    },
    {
      title: "Your Rights Under Data Protection Regulations",
      content: `Under applicable data protection laws, you have the right to:

• **Access:** Request a full copy of your data before deletion.
• **Rectification:** Correct any inaccurate data.
• **Erasure:** Request complete deletion of your personal data.
• **Portability:** Receive your data in a machine-readable format.
• **Objection:** Object to processing of your data for specific purposes.

To exercise these rights, contact us at info@rudood.com`,
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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        {/* Hero */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
            style={{ background: "linear-gradient(135deg, #dc2626 0%, #7c3aed 50%, #06b6d4 100%)" }}
          >
            <Trash2 size={28} className="text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">Data Deletion</h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            We fully respect your right to delete your personal data from the Rudood platform
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-400 text-sm">
            <span>Last updated: {lastUpdated}</span>
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
          <div className="text-center sm:text-left flex-1">
            <p className="text-white font-bold text-lg mb-1">Want to delete your data now?</p>
            <p className="text-slate-400 text-sm">Send your request directly and we&apos;ll handle it within 30 days</p>
          </div>
          <a
            href="mailto:info@rudood.com?subject=Data Deletion Request"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold transition-all duration-300 hover:scale-105 whitespace-nowrap"
            style={{ background: "linear-gradient(135deg, #dc2626, #7c3aed)" }}
          >
            <Mail size={18} />
            Send Request Now
          </a>
        </div>

        {/* Steps */}
        <h2 className="text-2xl font-black text-white mb-6">How to Request Data Deletion</h2>
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
          <Clock size={24} className="text-cyan-400 flex-shrink-0" />
          <p className="text-slate-300 text-sm">
            <strong className="text-white">Timeline:</strong> Verification requests are processed within <strong className="text-cyan-400">48 business hours</strong>, and full deletion is completed within <strong className="text-cyan-400">30 days</strong> of request confirmation.
          </p>
        </div>

        {/* Data types */}
        <h2 className="text-2xl font-black text-white mb-6">Data That Gets Deleted</h2>
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
          <h3 className="text-xl font-black text-white mb-2">Need Help?</h3>
          <p className="text-slate-400 mb-5">Our team is ready to assist you with any data-related inquiries</p>
          <a
            href="mailto:info@rudood.com?subject=Data Deletion Request"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold transition-all duration-300 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #dc2626, #7c3aed)" }}
          >
            <Mail size={18} />
            info@rudood.com
          </a>
        </div>

        {/* Footer links */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
          <Link href="/en/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
          <span>•</span>
          <Link href="/en/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
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
