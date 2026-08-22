# Weltrade Lagos Synthetic Trading Summit '26 — Event Funnel

## What this project is
A 3-step event registration funnel for the Lagos Synthetic Trading Summit '26,
hosted by Weltrade (forex/synthetic indices broker) on Saturday, July 25, 2026,
9:00 AM at The Lagos Travel Inn, 39/41 Toyin Street, Ikeja, Lagos.

Funnel flow:
1. Landing page (opt-in) → 2. Qualification gate (4 questions, one per screen)
→ 3a. Confirmation page (qualified) OR 3b. Soft-exit page (not qualified, see COPY.md)

## Source-of-truth files — READ BOTH BEFORE WRITING ANY CODE
- `DESIGN.md` — design system, colors, typography, components, performance budget. Non-negotiable rules live here.
- `COPY.md` — every word of approved copy, the 4 qualification questions, scoring/routing logic, webhook payload shape. Do NOT rewrite, paraphrase, or "improve" any copy. Use it verbatim.

## Stack
- Vite + React + TypeScript + Tailwind CSS
- react-router-dom for the 3 routes (`/`, `/qualify`, `/confirmed`, `/not-for-you`)
- lucide-react for icons (tree-shaken imports only)
- NO other UI libraries. NO animation libraries. NO video libraries. NO Supabase.

## The Prime Directive: SPEED
This page receives Meta ad traffic on Nigerian mobile networks (MTN/Airtel 3G/4G,
mid-range Android devices). Every performance rule in DESIGN.md is law:
- Initial JS+CSS bundle target: under 150KB gzipped
- Zero render-blocking external requests
- No videos anywhere. No backdrop-filter. No heavy hero images.
If a design choice conflicts with speed, speed wins. Always.

## The Second Directive: NO EMOJIS
Zero emojis anywhere in this project — copy, UI, buttons, form placeholders,
toasts, meta descriptions, comments, commit messages. Visual markers come from
lucide-react icons only (per DESIGN.md). This is a professional broker brand.

## Data flow
- Registration + qualification answers POST to an n8n webhook (URL via `VITE_N8N_WEBHOOK_URL` env var)
- Meta Pixel loaded async (ID via `VITE_META_PIXEL_ID` env var) — fire `Lead` on qualified confirmation only
- No backend in this repo. No database. The webhook is the only data exit.

## Deployment target
Railway (static build) — same pattern as Business Growth Machine funnel.
Build must pass `npm run build` cleanly with zero TypeScript errors.

## Working style
- Mobile-first. Design at 375px, enhance upward.
- Test the full funnel flow (all 4 routes) before declaring done.
- Keep components small and flat: `src/components/`, `src/pages/`, `src/lib/`.
