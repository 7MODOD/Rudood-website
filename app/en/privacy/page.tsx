import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Privacy Policy | Rudood",
  description:
    "Privacy policy and data protection for Rudood platform — AI-powered customer service automation via WhatsApp, Instagram & Messenger.",
};

const sections = [
  {
    title: "1. About the Service",
    content: `Rudood is a customer service automation platform powered by advanced AI models from OpenAI (such as GPT-4o mini). The platform operates through a Meta Business application integrated with Meta Business APIs, enabling it to receive and automatically respond to messages across:

• WhatsApp Business (WhatsApp Business Platform)
• Instagram (Instagram Messaging API)
• Facebook Messenger (Messenger Platform)

When you connect your account to Rudood, you grant us access to your customers' conversations on these platforms for the purpose of responding automatically on your behalf.`,
  },
  {
    title: "2. Data We Collect",
    content: `a) Business owner data (client):
• Full name, email address, phone number
• Business name and information
• Product details, pricing, and policies you provide for AI training
• Account and subscription data

b) Your customers' data (end users):
• Messages sent by your customers via WhatsApp, Instagram, or Messenger
• Conversation identifiers (User IDs) linked to Meta platforms
• Message timestamps
• We do not collect personal data of end users beyond what they voluntarily share in conversation

c) Usage data:
• Message statistics and response times
• Technical information (IP, browser, device type) for security purposes`,
  },
  {
    title: "3. How We Use Data",
    content: `We use collected data for specific purposes only:

• Operating the AI-powered auto-reply service on your behalf
• Training and fine-tuning the AI model on your business specifics (products, tone, policies)
• Processing incoming messages via Meta APIs and sending responses
• Improving response quality and platform performance
• Sending technical notifications and service updates
• Providing technical support when needed

We do not use your customers' conversations for any marketing or commercial purpose outside the agreed service scope.`,
  },
  {
    title: "4. Meta Business API & Meta Policy Compliance",
    content: `Rudood is integrated with the Meta Business Platform and operates in accordance with Meta's terms of use and policies, including:

• Meta Platform Terms (Meta Developer Data Policy)
• WhatsApp Business Policy
• Messenger Platform Terms of Service
• Instagram Messaging API requirements

We comply with the following restrictions imposed by Meta:
• We do not use user data for targeted advertising purposes
• We do not sell or share user data with any third party for commercial purposes
• We restrict access to conversation data to our staff and technical systems only
• We retain data only for the duration necessary to operate the service

Data processing via Meta is also subject to Meta's Privacy Policy available at: https://www.facebook.com/policy`,
  },
  {
    title: "5. Data Sharing",
    content: `We do not sell or rent your data. We share data only in these cases:

• Technical service providers: OpenAI (for language processing and AI), and our certified hosting and cloud process automation providers — all committed to not using your data for purposes outside the service scope
• Meta Platforms: We exchange messages with Meta platforms (WhatsApp / Instagram / Messenger) within the authorized technical integration framework
• Legal authorities: When legally required by court order or official government request
• With your explicit prior consent in any other case`,
  },
  {
    title: "6. Data Security",
    content: `We implement multi-layered security measures:

• Full data encryption in transit (TLS 1.3) and at rest (AES-256)
• Access control based on the principle of least privilege
• Isolation of each client's data from others in independent environments
• Regular security reviews and penetration testing
• Encrypted and regular backups
• Audit logs for all data access operations
• Data is processed and hosted on private, independent self-managed cloud servers (VPS) to ensure the highest levels of control and isolation of customer data`,
  },
  {
    title: "7. Data Retention & Deletion",
    content: `• Account data: retained as long as your account is active
• Conversation logs: stored for 12 months by default, extendable or reducible by request
• Training data: deleted or cleaned upon subscription cancellation

Upon account closure:
• Conversation data is deleted within 30 business days
• Training data is deleted within 60 business days
• We retain what is legally required (e.g., invoices) per regulatory requirements

You may request immediate deletion of your data at any time via email.

In accordance with Meta's policies, users may request complete erasure of their data by contacting us via email, and the request will be fulfilled within a maximum of 30 days.`,
  },
  {
    title: "8. Your Rights",
    content: `You have the right to:

• Access: Obtain a copy of the personal data we hold about you
• Rectification: Correct any inaccurate information
• Erasure: Request deletion of your data ("right to be forgotten"), subject to legal requirements
• Restriction: Object to the use of your data for certain purposes
• Portability: Receive your data in a machine-readable format
• Withdrawal of consent: Revoke Meta account access permissions at any time

To exercise any of these rights, contact us at: privacy@rudood.app`,
  },
  {
    title: "9. Children's Privacy",
    content: `Our services are directed exclusively to businesses and adults (18 years of age and older). We do not knowingly collect data from minors. If we discover that a minor's data was accidentally collected, we will delete it immediately and notify the guardian if possible.`,
  },
  {
    title: "10. Changes to This Policy",
    content: `We may update this policy to reflect legal or technical changes. Upon update:

• We will notify you via your registered email at least 30 days before material changes take effect
• We will display a clear notice in the dashboard
• We will archive previous versions of the policy

Your continued use of the service after an update constitutes acceptance of the revised policy.`,
  },
  {
    title: "11. Governing Law",
    content: `This policy is governed by and interpreted in accordance with the laws and legislation in force in the State of Palestine. In the event of any dispute, jurisdiction shall lie with the Palestinian courts.`,
  },
  {
    title: "12. Contact & Complaints",
    content: `For any questions, inquiries, or complaints related to your privacy:

📧 Email: privacy@rudood.app
💬 WhatsApp: Contact us through the website
🌐 Website: rudood.app

We are committed to responding to all privacy-related inquiries within 72 business hours.`,
  },
];

export default function EnPrivacyPage() {
  return (
    <div className="min-h-screen bg-night text-text-primary">
      {/* Simple nav */}
      <header className="border-b border-border bg-surface/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/en">
            <Logo size={32} showText={true} lang="en" textClass="text-lg text-text-primary" />
          </Link>
          <Link
            href="/en"
            className="text-sm text-text-muted hover:text-text-primary transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan/30 bg-cyan/5 text-cyan text-xs font-semibold mb-4">
            Last updated: April 2026
          </div>
          <h1 className="text-4xl font-black text-text-primary mb-4">Privacy Policy</h1>
          <p className="text-text-muted text-lg leading-relaxed">
            At Rudood, we value your privacy and are committed to protecting your personal data and your
            customers&apos; data. This policy explains how we collect, use, and protect information when you
            use our platform integrated with WhatsApp, Instagram, and Messenger.
          </p>
        </div>

        {/* Meta integration notice */}
        <div className="mb-10 p-5 rounded-2xl border border-primary/30 bg-primary/5 flex items-start gap-4">
          <svg className="w-5 h-5 text-cyan shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-text-primary font-semibold text-sm mb-1">Meta Platform Integration</p>
            <p className="text-text-muted text-sm leading-relaxed">
              Rudood is an approved Meta Business application operating in accordance with official Meta
              policies. We handle WhatsApp, Instagram, and Messenger messages solely for the purpose of
              authorized automated replies on your behalf.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section) => (
            <div
              key={section.title}
              className="p-6 rounded-2xl border border-border bg-surface"
            >
              <h2 className="text-base font-black text-text-primary mb-3">{section.title}</h2>
              <div className="text-text-muted text-sm leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 p-6 rounded-2xl border border-primary/20 bg-primary/5 text-center">
          <p className="text-text-muted text-sm">
            This policy is effective as of April 2026. For any inquiries:{" "}
            <a href="mailto:privacy@rudood.app" className="text-cyan hover:underline">
              privacy@rudood.app
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
