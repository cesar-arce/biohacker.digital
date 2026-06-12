# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**biohacker.digital** — Multilingual website for "The Biohacker's Guide" book collection. Promotes books via Amazon affiliate links, hosts a Q&A community forum, and publishes AI-assisted blog content.

**Domain:** https://biohacker.digital
**Languages:** English (`en`, default) · French Quebec (`fr-CA`) · Spanish (`es`)
**Auto-detection:** Browser `Accept-Language` → matched to supported locales → fallback to `en`.

---

## Development Commands

```bash
npm run dev        # Dev server on http://localhost:3000 (Turbopack)
npm run build      # Production build (Turbopack)
npm run start      # Run production build locally
npx tsc --noEmit   # Type check
```

---

## Architecture

### i18n Flow
All routes live under `src/app/[locale]/`. `middleware.ts` uses `next-intl/middleware` to:
1. Check for `NEXT_LOCALE` cookie (manual language switch by user).
2. Parse `Accept-Language` header.
3. Match against `['en', 'fr-CA', 'es']`, default to `'en'` for any unmatched locale.

Key i18n files:
- `src/lib/i18n/routing.ts` — locale list and detection settings (`defineRouting`)
- `src/lib/i18n/request.ts` — loads `messages/{locale}.json` per request (`getRequestConfig`)
- `next.config.ts` — wrapped with `createNextIntlPlugin`

All user-facing strings live in `src/messages/{locale}.json`. No hardcoded UI strings in components.

### Data Layer (Supabase)
- **`src/lib/supabase/client.ts`** — `createBrowserClient` for Client Components
- **`src/lib/supabase/server.ts`** — `createServerClient` for Server Components and Route Handlers
- RLS enabled on all tables. Public = SELECT only. Writes require `auth.uid()` except `newsletter_subscribers`.
- Schema migrations in `supabase/migrations/`.

### Key Conventions
- Amazon links always append `?tag=AFFILIATE_TAG` — use `buildAmazonUrl()` from `src/lib/utils.ts`, never inline.
- Blog content is stored in Supabase (not MDX files) to support multilingual content and AI generation.
- Language switcher must preserve the current path: `/en/books/slug` → `/fr-CA/books/slug`.
- `src/components/ui/` is reserved for shadcn/ui base components — do not modify them.
- Forum auth: Supabase Auth with email magic link + Google OAuth only.

### Design System
- **Dark mode forced** via `<html class="dark">` in the locale layout. Background `#09090b`, accent neon green `#00ff87` (`text-green-400` / `bg-green-400`).
- **Fonts:** Geist Sans + Geist Mono via `next/font/google`, CSS vars `--font-geist-sans` / `--font-geist-mono`.
- **Animations:** Framer Motion for page transitions and scroll-triggered reveals.
- OG images for blog posts generated via `@vercel/og`; should match Canva brand visuals.

---

## Environment Variables

All values go in `.env.local` (gitignored). Required vars:

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
RESEND_API_KEY
NEXT_PUBLIC_GA_ID
NEXT_PUBLIC_META_PIXEL_ID
CANVA_API_KEY
NEXT_PUBLIC_AMAZON_AFFILIATE_TAG
```
