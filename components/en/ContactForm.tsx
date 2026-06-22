"use client";

import { useState } from "react";

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
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
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
          <p className="text-[#0891B2] text-sm font-semibold uppercase tracking-widest mb-3">
            Get Started
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1E1B4B] mb-4">
            Set up your business for smart replies
          </h2>
          <p className="text-[#334155]">
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
            <h3 className="text-2xl font-black text-[#1E1B4B]">Successfully submitted! 🎉</h3>
            <p className="text-[#334155] max-w-sm mx-auto">
              The Rudood team will contact you within 24 hours to begin setting up your system. Check your email.
            </p>
          </div>
        ) : (
          /* Form */
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-[#F1F5F9] rounded-3xl p-8 border border-slate-200"
          >
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-[#1E1B4B] mb-1.5">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="John Smith"
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-[#1E1B4B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/30 transition-all text-sm"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-[#1E1B4B] mb-1.5">
                Phone Number <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-[#1E1B4B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/30 transition-all text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-[#1E1B4B] mb-1.5">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="name@business.com"
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-[#1E1B4B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/30 transition-all text-sm"
              />
            </div>

            {/* Business Name */}
            <div>
              <label className="block text-sm font-semibold text-[#1E1B4B] mb-1.5">
                Business Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="businessName"
                required
                placeholder="My Awesome Store"
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-[#1E1B4B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/30 transition-all text-sm"
              />
            </div>

            {/* Business Description */}
            <div>
              <label className="block text-sm font-semibold text-[#1E1B4B] mb-1.5">
                Describe your business <span className="text-red-400">*</span>
              </label>
              <textarea
                name="businessDescription"
                required
                rows={4}
                placeholder="Tell us about your store or business: what do you sell, who are your customers, and which platforms do you receive messages on?"
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-[#1E1B4B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/30 transition-all text-sm resize-y"
              />
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

            <p className="text-center text-[#94A3B8] text-xs">
              By submitting, you agree to our{" "}
              <a href="/en/privacy" className="text-[#0891B2] hover:underline">
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
