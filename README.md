# Rudood — ردود

> AI-powered customer service automation for WhatsApp, Instagram & Messenger.

Rudood is a B2B SaaS landing + demo platform that lets businesses deploy a custom-trained AI agent to automatically reply to customer messages across all major social messaging channels — 24/7, with no extra staff.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Repository Structure](#3-repository-structure)
4. [Environment Variables](#4-environment-variables)
5. [Local Development](#5-local-development)
6. [Production Deployment with Docker](#6-production-deployment-with-docker)
7. [Nginx Reverse Proxy & SSL](#7-nginx-reverse-proxy--ssl)
8. [External Services Setup](#8-external-services-setup)
9. [Architecture Notes](#9-architecture-notes)
10. [Troubleshooting](#10-troubleshooting)

---

## 1. Project Overview

| | |
|---|---|
| **Live URL** | https://rudood.app |
| **Arabic version** | `/` |
| **English version** | `/en` |
| **Privacy (AR)** | `/privacy` |
| **Privacy (EN)** | `/en/privacy` |
| **GitHub** | https://github.com/7MODOD/Rudood-website |

### What it does

- Marketing landing page in **Arabic (RTL)** and **English (LTR)**
- **TryNow** section: live chat demo powered by the Chatwoot Public API — visitors send real messages and get real AI replies
- **Contact Form**: submits lead data to an n8n automation webhook → CRM/email pipeline
- **Pricing**: 3-tier subscription model — Basic ₪200 / Business ₪300 / VIP ₪450+
- **Privacy Policy**: 12-section policy, Meta-compliant, Arabic + English

### Page sections (in order)

| Section | ID | Description |
|---|---|---|
| Navbar | — | Sticky, frosted-glass, mobile hamburger, language toggle |
| Hero | — | Headline, platform pills, CTA buttons, Platform Hub visual, stats row |
| Platforms | `#platforms` | WhatsApp / Instagram / Messenger feature cards |
| Why Rudood | `#why` | Pain points (red cards) + solution features (blue cards) |
| How It Works | `#how` | 4-step process with connector line + timeline banner |
| Try Now | `#try` | Live Chatwoot chat inside a phone mockup |
| Pricing | `#pricing` | 3 tiers + one-time setup fee banner |
| Contact | `#contact` | Lead capture form → n8n webhook |
| FAQ | `#faq` | 5-question accordion + WhatsApp CTA |
| Footer | — | CTA banner + 3-column footer |

---

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (`@theme inline` design tokens) |
| Font | Cairo (Google Fonts) — Arabic + Latin, weights 400–800 |
| Live Chat Demo | Chatwoot Public API (self-hosted at `chat.rudood.app`) |
| Form Automation | n8n webhook (self-hosted at `n8n.rudood.app`) |
| Containerization | Docker + Docker Compose |
| Reverse Proxy | Nginx + Let's Encrypt (Certbot) |

---

## 3. Repository Structure

```
rudood/
├── app/
│   ├── layout.tsx              # Root layout — lang="ar" dir="rtl", Cairo font
│   ├── page.tsx                # Arabic landing page (imports AR components)
│   ├── globals.css             # Tailwind v4 @theme tokens + animations
│   ├── privacy/page.tsx        # Arabic privacy policy (12 sections)
│   ├── en/
│   │   ├── layout.tsx          # EN wrapper — <div dir="ltr" lang="en">
│   │   ├── page.tsx            # English landing page (imports EN components)
│   │   └── privacy/page.tsx    # English privacy policy (12 sections)
│   └── api/
│       ├── chat/start/         # POST — creates Chatwoot contact + conversation
│       ├── chat/message/       # POST — sends visitor message
│       ├── chat/messages/      # GET  — polls pending agent replies
│       └── chatwoot/webhook/   # POST — receives Chatwoot webhook events
│
├── components/
│   ├── Navbar.tsx              # AR sticky navbar
│   ├── HeroSection.tsx         # AR hero with platform hub + stats row
│   ├── PlatformsSection.tsx    # AR platform cards (WA / IG / Messenger)
│   ├── WhyRudood.tsx           # AR pain points + feature grid
│   ├── HowWeWork.tsx           # AR 4-step process + timeline banner
│   ├── TryNow.tsx              # AR live chat demo (Chatwoot Public API)
│   ├── Pricing.tsx             # AR 3-tier pricing cards
│   ├── ContactForm.tsx         # AR lead form → n8n webhook
│   ├── FAQ.tsx                 # AR accordion FAQ (5 questions)
│   ├── Footer.tsx              # AR footer with CTA banner
│   ├── Logo.tsx                # Brand logo (supports lang prop)
│   └── en/                     # English equivalents — same JSX structure
│       ├── Navbar.tsx
│       ├── HeroSection.tsx
│       ├── PlatformsSection.tsx
│       ├── WhyRudood.tsx
│       ├── HowWeWork.tsx
│       ├── TryNow.tsx
│       ├── Pricing.tsx
│       ├── ContactForm.tsx
│       ├── FAQ.tsx
│       └── Footer.tsx
│
├── lib/
│   └── chatwoot-store.ts       # In-memory agent message queue
│
├── public/
│   └── logo.png                # Brand logo
│
├── Dockerfile                  # 3-stage optimised production build
├── docker-compose.yml          # Single-service Compose config
├── .env.example                # Template for all required env vars
├── .dockerignore               # Files excluded from Docker build context
├── next.config.ts              # Next.js config (output: standalone)
└── tailwind.config.ts          # Tailwind config
```

---

## 4. Environment Variables

Copy `.env.example` to `.env.production` on your server and fill in real values.

```bash
cp .env.example .env.production
nano .env.production
```

| Variable | Type | Description |
|---|---|---|
| `NEXT_PUBLIC_N8N_FORM_URL` | Build-time | n8n webhook URL for the contact form |
| `NEXT_PUBLIC_CHATWOOT_BASE_URL` | Build-time | Your Chatwoot instance base URL |
| `NEXT_PUBLIC_CHATWOOT_INBOX_ID` | Build-time | Chatwoot **public** inbox identifier (alphanumeric string) |
| `CHATWOOT_BASE_URL` | Runtime | Same Chatwoot URL (used server-side in API routes) |
| `CHATWOOT_API_TOKEN` | Runtime | Chatwoot agent access token (Profile → Access Token) |
| `CHATWOOT_ACCOUNT_ID` | Runtime | Numeric Chatwoot account ID (from the URL) |
| `CHATWOOT_INBOX_ID` | Runtime | Numeric Chatwoot inbox ID |

> **Build-time vs Runtime:** `NEXT_PUBLIC_*` variables are **inlined into the JS bundle at build time** by Next.js — they must be passed as Docker `--build-arg` values (already wired in `docker-compose.yml`). Server-side secrets in `.env.production` are loaded at **runtime only** and never shipped to the browser.

---

## 5. Local Development

### Prerequisites
- Node.js 20+
- npm

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/7MODOD/Rudood-website.git
cd Rudood-website

# 2. Install dependencies
npm install

# 3. Create local env file
cp .env.example .env.local
# Edit .env.local with your values

# 4. Start dev server
npm run dev
```

- Arabic site: http://localhost:3000
- English site: http://localhost:3000/en

> **Note on TryNow:** The live chat demo uses the Chatwoot Public API which is CORS-restricted to `rudood.app`. Requests will fail in local dev — this is expected and only works in production.

---

## 6. Production Deployment with Docker

### Prerequisites on the VPS

```bash
# Install Docker
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
newgrp docker

# Verify
docker --version
docker compose version
```

### Deploy

```bash
# 1. SSH into your VPS
ssh user@your-server-ip

# 2. Clone the repository
git clone https://github.com/7MODOD/Rudood-website.git
cd Rudood-website

# 3. Create the production env file from the template
cp .env.example .env.production
nano .env.production
# → Fill in ALL values before continuing

# 4. Build image and start container (runs on port 3001)
docker compose up -d --build

# 5. Confirm healthy
docker compose ps
docker compose logs -f rudood-web
```

The container exposes port **3001** on the host. Configure Nginx to proxy `443 → 3001`.

### Update after a code change

```bash
cd Rudood-website
git pull origin master
docker compose up -d --build
# Docker waits for the new container to pass the health check
# before removing the old one — near zero downtime
```

### Common Docker commands

```bash
docker compose logs -f rudood-web        # Stream logs
docker compose restart rudood-web        # Restart container
docker compose down                      # Stop and remove container
docker compose down --rmi all            # Also remove the built image
docker exec -it rudood-web sh            # Shell into the running container
```

---

## 7. Nginx Reverse Proxy & SSL

```bash
sudo apt update
sudo apt install nginx certbot python3-certbot-nginx -y
```

Create `/etc/nginx/sites-available/rudood.app`:

```nginx
server {
    listen 80;
    server_name rudood.app www.rudood.app;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name rudood.app www.rudood.app;

    ssl_certificate     /etc/letsencrypt/live/rudood.app/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/rudood.app/privkey.pem;
    include             /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam         /etc/letsencrypt/ssl-dhparams.pem;

    add_header X-Frame-Options      "SAMEORIGIN"                   always;
    add_header X-Content-Type-Options "nosniff"                    always;
    add_header Referrer-Policy      "strict-origin-when-cross-origin" always;

    # Proxy all requests to the Next.js container
    location / {
        proxy_pass          http://127.0.0.1:3001;
        proxy_http_version  1.1;
        proxy_set_header    Upgrade           $http_upgrade;
        proxy_set_header    Connection        "upgrade";
        proxy_set_header    Host              $host;
        proxy_set_header    X-Real-IP         $remote_addr;
        proxy_set_header    X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header    X-Forwarded-Proto $scheme;
        proxy_cache_bypass  $http_upgrade;
    }

    # Long-cache Next.js immutable static assets
    location /_next/static/ {
        proxy_pass      http://127.0.0.1:3001;
        expires         1y;
        add_header      Cache-Control "public, immutable";
    }
}
```

Enable and get SSL certificate:

```bash
sudo ln -s /etc/nginx/sites-available/rudood.app /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

sudo certbot --nginx -d rudood.app -d www.rudood.app
# Certbot auto-patches your nginx config and sets up auto-renewal

# Test auto-renewal
sudo certbot renew --dry-run
```

---

## 8. External Services Setup

### Chatwoot (Live Chat Demo)

Used in the **TryNow** section to power the real-time AI chat demo.

1. Deploy Chatwoot on a subdomain (e.g. `chat.rudood.app`) — see [Chatwoot docs](https://www.chatwoot.com/docs/self-hosted)
2. Create an **API Channel** inbox: Settings → Inboxes → New Inbox → API
3. Collect both IDs:
   - **Public Inbox Identifier** (alphanumeric, shown in inbox settings) → `NEXT_PUBLIC_CHATWOOT_INBOX_ID`
   - **Numeric Inbox ID** (from Settings → Inboxes URL) → `CHATWOOT_INBOX_ID`
4. Generate an **Agent Access Token**: Profile → Access Token → `CHATWOOT_API_TOKEN`
5. Make sure `rudood.app` is allowed in Chatwoot's CORS/domain settings

### n8n (Form Automation)

Used in the **Contact Form** to receive and route lead submissions.

1. Deploy n8n on a subdomain (e.g. `n8n.rudood.app`) — see [n8n docs](https://docs.n8n.io/hosting/)
2. Create a workflow with a **Webhook** trigger node
3. Copy the webhook URL into `NEXT_PUBLIC_N8N_FORM_URL`
4. The form POSTs JSON with these fields:

```json
{
  "fullName": "string",
  "phone": "string",
  "email": "string",
  "businessName": "string",
  "expectedMessages": "less-1500 | 1500-5000 | 5000-10000 | more-10000"
}
```

5. Add downstream nodes in n8n: email notification, Google Sheets, CRM, Slack, etc.

### WhatsApp Business (for the actual AI bot)

The website sells access to an AI bot — the infrastructure for the bot itself requires:

1. A verified **Meta Business Account**
2. **WhatsApp Business Platform** with an approved phone number
3. Connect the WhatsApp number to Chatwoot as a WhatsApp inbox
4. Train the AI agent inside Chatwoot with your business knowledge base

---

## 9. Architecture Notes

### RTL / LTR Strategy

- Root `<html>` is `lang="ar" dir="rtl"` — whole site defaults to Arabic RTL
- The English version uses `<div dir="ltr" lang="en">` wrapper in `app/en/layout.tsx` instead of changing the `<html>` tag (which would cause a Next.js hydration mismatch)
- Tailwind logical properties (`ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`) are used instead of `ml-/mr-` for direction-agnostic spacing
- Numbers, prices, and phone numbers use inline `dir="ltr"` to prevent symbol flipping

### TryNow Chat Flow

```
User types message
  → POST /public/api/v1/inboxes/{INBOX_ID}/contacts        (create anonymous contact)
  → source_id returned
  → POST /contacts/{source_id}/conversations                (create conversation)
  → POST /conversations/{id}/messages                       (send message)
  → setInterval every 2.5s: GET /conversations/{id}/messages
      → filter message_type === 1 (agent replies)
      → display new replies in the UI
      → stop polling after first reply or after 60s timeout
```

- Visitor ID is stored in `sessionStorage` so the same conversation resumes on page refresh
- AR uses key `rw_vid_ar`, EN uses `rw_vid_en` — independent sessions per language

### Docker Build Strategy

The Dockerfile uses a **3-stage build**:

1. **deps** — installs only `node_modules` (cached layer, rarely invalidated)
2. **builder** — copies code + runs `next build` with `NEXT_PUBLIC_*` ARGs baked in
3. **runner** — copies only the standalone output (~50 MB vs ~500 MB full install)

`next.config.ts` must have `output: "standalone"` for this to work.

### Component Architecture

- `components/*.tsx` — Arabic sections
- `components/en/*.tsx` — English sections (same structure, translated content)
- `app/page.tsx` and `app/en/page.tsx` are thin orchestrators: just imports + JSX render order

This makes it easy to update one language without touching the other.

---

## 10. Troubleshooting

| Symptom | Likely Cause | Fix |
|---|---|---|
| `docker compose up --build` fails at `COPY .next/standalone` | `output: 'standalone'` not set | Verify `next.config.ts` has `output: "standalone"` |
| TryNow chat shows CORS error | Not running on `rudood.app` domain | Expected in local dev — only works in production |
| Contact form says "error submitting" | Wrong n8n webhook URL | Check `NEXT_PUBLIC_N8N_FORM_URL` in `.env.production` |
| English page shows Arabic layout | Hydration mismatch | Ensure `app/en/layout.tsx` uses `<div dir="ltr">` not `<html lang="en">` |
| Container exits immediately after start | Missing or malformed `.env.production` | Create it from `.env.example` and verify all values |
| Nginx returns 502 Bad Gateway | Container not healthy on port 3001 | Run `docker compose ps` — check health status |
| SSL cert expired | Certbot cron not running | Run `sudo certbot renew --dry-run` and check `/etc/cron.d/certbot` |
| `NEXT_PUBLIC_*` vars are empty in production | Not passed as `--build-arg` | They must be in `.env.production` AND listed under `build.args` in `docker-compose.yml` |

---

## License

Private — All rights reserved © 2026 Rudood.
