# Rudood — AI Customer Service Automation

A modern pre-launch landing page for **Rudood**, an AI-powered customer service automation platform that handles WhatsApp, Instagram & Messenger conversations 24/7.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9+

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the Arabic (RTL) version.  
Open [http://localhost:3000/en](http://localhost:3000/en) for the English (LTR) version.

---

## 📁 Project Structure

```
app/
├── page.tsx              # Arabic landing page (RTL)
├── layout.tsx            # Root layout (Cairo font, RTL)
├── globals.css           # Global styles & animations
├── privacy/
│   └── page.tsx          # Arabic privacy policy
└── en/
    ├── layout.tsx        # English layout (Inter font, LTR)
    ├── page.tsx          # English landing page
    └── privacy/
        └── page.tsx      # English privacy policy

public/
└── logo.jpg              # Rudood logo
```

---

## 🔧 Configuration

### n8n Webhook URLs

Replace the placeholder constants at the top of both `app/page.tsx` and `app/en/page.tsx`:

```ts
const N8N_CHAT_WEBHOOK_URL = "https://YOUR-N8N-URL/webhook/chat";
const N8N_FORM_WEBHOOK_URL = "https://YOUR-N8N-URL/webhook/waitlist";
```

**Expected n8n response format for the chat webhook:**

```json
{ "reply": "Your AI-generated response here" }
```

**Expected waitlist form payload:**

```json
{
  "name": "...",
  "company": "...",
  "whatsapp": "...",
  "volume": "...",
  "submittedAt": "ISO 8601 timestamp"
}
```

---

## 🛠️ Tech Stack

| Layer      | Technology              |
| ---------- | ----------------------- |
| Framework  | Next.js 14 (App Router) |
| Styling    | Tailwind CSS v3         |
| Animations | Framer Motion           |
| Toasts     | Sonner                  |
| Icons      | Lucide React            |
| AR Font    | Cairo (Google Fonts)    |
| EN Font    | Inter (Google Fonts)    |

---

## 💡 Improvement Suggestions

### 🔴 High Priority

1. **Replace `<img>` with `<Image />` from `next/image`**  
   The logo uses a plain `<img>` tag, skipping Next.js image optimization (lazy loading, WebP conversion, size negotiation).

   ```tsx
   import Image from "next/image";
   <Image
     src="/logo.jpg"
     alt="Rudood"
     width={40}
     height={40}
     className="rounded-xl object-cover"
   />;
   ```

2. **Move webhook URLs to environment variables**  
   Move `N8N_CHAT_WEBHOOK_URL` / `N8N_FORM_WEBHOOK_URL` to `.env.local` so they are never exposed in source control:

   ```env
   NEXT_PUBLIC_N8N_CHAT_URL=https://...
   NEXT_PUBLIC_N8N_FORM_URL=https://...
   ```

3. **Add rate-limiting / CAPTCHA on the Waitlist form**  
   Without server-side protection the form can be spammed. Add a 30-second cooldown or integrate Cloudflare Turnstile.

4. **Use a Server Action for waitlist submission**  
   Move the waitlist POST to a Next.js `"use server"` action so the n8n URL is never sent to the browser at all.

---

### 🟡 Medium Priority

5. **Replace logo JPEG with transparent PNG or SVG**  
   The current `.jpg` has a white background. A transparent file blends cleanly with the dark UI.

6. **Add `og:image` Open Graph meta tag**  
   Generate a 1200×630 social preview image using `next/og` for better sharing on WhatsApp, Twitter, LinkedIn.

7. **Implement `next-intl` for i18n**  
   Currently AR and EN are duplicate files. A proper i18n library removes duplication, enables `hreflang` SEO tags, and makes adding new languages trivial.

8. **Add a `/thank-you` page after form submit**  
   A dedicated redirect page enables Google Analytics conversion tracking and provides a cleaner UX flow.

9. **Add Google Analytics or Plausible**  
   No analytics are currently set up. Track:
   - CTA click-through rate (Hero → Waitlist)
   - Chat demo engagement
   - Form completion & drop-off rates

10. **Fix privacy page logo to use the actual logo image**  
    The Arabic privacy page (`app/privacy/page.tsx`) still uses a gradient "R" placeholder instead of the real logo.

---

### 🟢 Nice to Have

11. **Animated counter stats in the Hero**  
    Counters like "10,000+ messages handled" that increment on scroll are high-converting social proof for SaaS landing pages.

12. **Testimonials / Customer Logos section**  
    A "Trusted by" section with logos once you have early customers significantly improves conversion.

13. **Live Rudood chat widget on the page**  
    Integrate a real Rudood-powered chat so visitors can experience the product first-hand — a powerful "try before you buy" mechanic.

14. **Accessibility (a11y) audit**  
    Check: color contrast on gradient text, keyboard navigation for FAQ accordion, and screen reader labels for icon-only buttons.

15. **Progressive Web App (PWA) manifest**  
    A `manifest.json` allows the page to be installed as a mobile shortcut — improving brand recall.

16. **Blog / SEO content**  
    Even 3-4 articles targeting "WhatsApp business automation" or "AI customer service Arabic" can drive significant organic traffic.

17. **Dark/Light mode toggle**  
    A system-preference-aware toggle improves accessibility and reaches users who prefer light mode.

---

## 📬 Contact

**Email:** info@rudood.com  
**Website:** [www.rudood.com](https://www.rudood.com)
