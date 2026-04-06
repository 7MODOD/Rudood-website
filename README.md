# ردود (Rudood) — Landing Page

منصة ردود لأتمتة خدمة العملاء على واتساب بالذكاء الاصطناعي.

## Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Google Fonts — Cairo** (Arabic + Latin)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

```bash
npm run build   # production build + type check
npm run lint    # ESLint
```

---

## Changes Made

### Foundation

| File | Change |
|------|--------|
| `app/globals.css` | Full replacement with Tailwind v4 `@theme inline` color tokens, keyframe animations, and utility classes |
| `app/layout.tsx` | Replaced Geist font with **Cairo** (Arabic subset), set `lang="ar" dir="rtl"` on `<html>`, updated metadata |
| `app/page.tsx` | Replaced default template with a clean orchestrator that imports all section components |

### New Components (`/components`)

| Component | Section | Description |
|-----------|---------|-------------|
| `Navbar.tsx` | Navigation | Sticky frosted-glass nav with logo, anchor links, CTA button, and mobile hamburger menu |
| `HeroSection.tsx` | Hero | Two-column RTL layout with headline, sub-headline, dual CTAs, trust badges, floating WhatsApp phone mockup, and stats row |
| `WhyRudood.tsx` | Why Rudood? | Pain points grid (red-tinted cards) + feature cards grid (gold-accent) |
| `HowWeWork.tsx` | How We Work | 4-step timeline with connecting line, numbered circles, and 3–7 day timeline banner |
| `UseCases.tsx` | Live Examples | Tab switcher (clothing / restaurant), CSS phone frame, WhatsApp-styled chat bubbles, callout cards |
| `Pricing.tsx` | Pricing | 3-tier pricing cards with setup fee banner, popular badge shimmer animation, feature lists |
| `FAQ.tsx` | FAQ | Accordion (5 questions, React state only), WhatsApp CTA at bottom |
| `Footer.tsx` | Footer | CTA banner, 3-column layout (logo/social, quick links, contact), copyright bar |

### Design System

**Color Palette:**

| Token | Hex | Usage |
|-------|-----|-------|
| `night` | `#0D0F1A` | Page background |
| `surface` | `#13162A` | Card backgrounds |
| `surface-2` | `#1C2040` | Elevated cards |
| `border` | `#252A4A` | Subtle borders |
| `gold` | `#D4A843` | Primary accent, CTAs |
| `gold-light` | `#F0C96A` | Hover on gold |
| `teal` | `#14B8A6` | Secondary accent, success |
| `text-primary` | `#F0F2FF` | Main text |
| `text-muted` | `#8B92B8` | Secondary text |

**Animations:** `fadeInUp`, `float`, `pulseRing`, `shimmer`, `typingDot`, `slideIn`

**RTL Implementation:**
- `dir="rtl"` + `lang="ar"` on `<html>`
- Tailwind logical properties: `ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`
- `rtl:` variant for directional icons
- `dir="ltr"` inline on prices and numbers

---

## Content

### Sections & Copy

1. **Hero** — "لا تخسر عميلاً واحداً بسبب الانتظار" with phone mockup showing a real WhatsApp conversation
2. **Why Rudood?** — Pain points (lost messages, slow responses, staff costs) + 4 feature cards
3. **How We Work** — 4 steps: understand business → train AI → technical integration → launch (3–7 days)
4. **Live Examples** — Interactive tab switcher: clothing store & restaurant WhatsApp conversations
5. **Pricing** — 3 tiers: Basic $49/mo · Business $89/mo · VIP from $150/mo + $100 one-time setup
6. **FAQ** — 5 questions covering AI errors, unknown answers, requirements, technical expertise, data security
7. **Footer** — CTA banner, social links, contact info

---

## Suggestions for Future Improvement

### High Priority

- **Analytics** — Add Plausible or PostHog to track CTA clicks, section scroll depth, and tab switching in UseCases
- **WhatsApp number** — Replace all `https://wa.me/your-number` placeholders with the real number
- **Contact form** — Add a real contact/onboarding form instead of just WhatsApp links (better lead capture)
- **Video demo** — The "شاهد العرض" CTA currently scrolls to use cases. Consider linking to a real Loom/YouTube video

### Performance

- **Image optimization** — If product images or team photos are added later, use Next.js `<Image>` component
- **Lazy loading** — `UseCases` and `Pricing` components can be dynamically imported (`next/dynamic`) to reduce initial bundle
- **Font subsetting** — Cairo loads Arabic + Latin; consider subsetting further if only specific weights are used

### UX Improvements

- **Scroll animations** — Add IntersectionObserver or use the CSS `animation-timeline: view()` for scroll-triggered reveals on WhyRudood and HowWeWork cards
- **Toast notifications** — Add feedback when a form is submitted or a WhatsApp link is clicked
- **Sticky pricing** — Consider a sticky mini-pricing bar that appears after user scrolls past the hero

### Business Features

- **A/B test headlines** — Test alternate headlines in HeroSection to optimize conversion
- **Testimonials section** — Add a social proof section between Pricing and FAQ once you have real customer quotes
- **Live chat widget** — Embed a real Chatwoot widget so visitors can chat directly from the landing page
- **Multi-language** — Add English version (`/en`) for non-Arabic-speaking business owners using Next.js i18n routing
- **Blog/SEO** — Add a blog section with Arabic SEO-optimized content about WhatsApp automation

### Technical

- **Environment variables** — Move WhatsApp number and email to `.env.local`
- **Error boundary** — Wrap client components (UseCases, FAQ, Navbar) in error boundaries
- **Sitemap + robots.txt** — Add `app/sitemap.ts` and `app/robots.ts` for SEO
