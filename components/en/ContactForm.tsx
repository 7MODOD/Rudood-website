"use client";

import { useState } from "react";

const messageOptions = [
  { value: "", label: "Select expected monthly messages" },
  { value: "less-1500", label: "Less than 1,500 messages" },
  { value: "1500-5000", label: "1,500 – 5,000 messages" },
  { value: "5000-10000", label: "5,000 – 10,000 messages" },
  { value: "more-10000", label: "More than 10,000 messages" },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const N8N_FORM_WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_FORM_URL ?? "https://n8n.rudood.app/webhook/0a642cd4-ed02-487b-ab79-ef1899151276";
      const response = await fetch(N8N_FORM_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Error submitting to n8n, status:", response.status);
        alert("Sorry, an error occurred while submitting your request. Please try again later.");
      }
    } catch (error) {
      console.error("Failed to connect to n8n server:", error);
      alert("Could not connect to the server. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-surface relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(37,99,235,0.06) 0%, rgba(124,58,237,0.04) 40%, transparent 70%)",
        }}
      />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">
            Get Started
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-text-primary mb-4">
            Set up your business for smart replies
          </h2>
          <p className="text-text-muted">
            Submit your request and our team will reach out within 24 hours to begin setup.
          </p>
        </div>

        {submitted ? (
          /* Success State */
          <div className="text-center py-16 space-y-4">
            <div className="w-20 h-20 rounded-full bg-brand-gradient mx-auto flex items-center justify-center shadow-brand">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-text-primary">Successfully submitted! 🎉</h3>
            <p className="text-text-muted max-w-sm mx-auto">
              The Rudood team will contact you within 24 hours to begin setting up your system. Check your email.
            </p>
          </div>
        ) : (
          /* Form */
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-surface-2 rounded-3xl p-8 border border-border"
          >
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-1.5">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="John Smith"
                className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder-text-faint focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-1.5">
                Phone Number <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder-text-faint focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-1.5">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="name@business.com"
                className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder-text-faint focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm"
              />
            </div>

            {/* Business Name */}
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-1.5">
                Business Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="businessName"
                required
                placeholder="My Awesome Store"
                className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder-text-faint focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm"
              />
            </div>

            {/* Monthly Messages */}
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-1.5">
                Expected Monthly Messages <span className="text-red-400">*</span>
              </label>
              <select
                name="expectedMessages"
                required
                defaultValue=""
                className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm appearance-none cursor-pointer"
              >
                {messageOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} disabled={opt.value === ""} selected={opt.value === ""}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full bg-brand-gradient text-white font-black text-lg hover:opacity-90 transition-all duration-200 shadow-brand disabled:opacity-70 disabled:cursor-not-allowed mt-2"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Join the Waitlist"
              )}
            </button>

            <p className="text-center text-text-faint text-xs">
              By submitting, you agree to our{" "}
              <a href="/en/privacy" className="text-cyan hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
