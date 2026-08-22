# DESIGN.md — Weltrade Summit Funnel Design System

Reference inspiration: a premium SaaS landing page aesthetic (floating pill navbar,
gradient headline highlights, chip badges, negatives-vs-positives card columns,
clamp()-based fluid typography, generous whitespace, rounded cards, soft shadows).
We mirror the FEEL, never the weight. Every heavy element from the reference
(videos, HLS streaming, backdrop blurs, custom CDN fonts, image proxies) is BANNED.

---

## 1. Brand Colors (Weltrade)

Use these exact tokens. Never introduce purple, orange, or off-brand colors.

| Token | Value | Usage |
|---|---|---|
| `--wt-blue` | `#2B4EF0` | Primary brand blue. Buttons, chips, key UI |
| `--wt-blue-bright` | `#1E9BFA` | Bright accent blue. Gradient stop, links, highlights |
| `--wt-blue-deep` | `#0A1445` | Deep navy. Headlines, body text on light bg |
| `--wt-blue-soft` | `#EAF0FF` | Soft blue tint. Chip backgrounds, section tints |
| `--wt-gold` | `#F5B301` | Gold accent. Giveaway highlights, sparing use ONLY |
| `--wt-white` | `#FFFFFF` | Cards, navbar |
| `--wt-off-white` | `#F7F9FF` | Page background |
| `--wt-gray-text` | `#5A6285` | Secondary/muted text |
| `--wt-red-soft` | `#FBEAEA` | Negative card icon tint (cross column) |
| `--wt-green-soft` | `#E7F7EE` | Positive card icon tint (check column) |

### Gradients
- **Gradient Brand (buttons, borders):** `linear-gradient(90deg, #2B4EF0, #1E9BFA)`
- **Gradient Headline (text highlights):** `linear-gradient(90deg, #1E9BFA, #2B4EF0 60%, #0A1445)`
  applied with `background-clip: text; -webkit-text-fill-color: transparent;`
- Gold is NEVER in gradients. Gold appears only as solid accent on giveaway mentions and small decorative dots.

## 2. Typography

- **One font family only:** system stack — `font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;`
- NO Google Fonts. NO custom @font-face. NO external font requests of any kind. Zero font bytes = instant text paint.
- Headings: `font-weight: 700`. Body: `font-weight: 400`. Chips/buttons: `font-weight: 600`.
- Fluid sizes via clamp():
  - H1 hero: `clamp(34px, 7vw, 60px)`, `line-height: 1.1`, `letter-spacing: -0.02em`
  - H2 sections: `clamp(28px, 5vw, 44px)`, `line-height: 1.15`
  - Body: `clamp(15px, 1.2vw, 18px)`, `line-height: 1.6`
  - Chips/eyebrows: `clamp(13px, 1vw, 15px)`, uppercase, `letter-spacing: 0.06em`

## 3. Component Patterns

### Navbar (mirror the reference pill navbar, lightweight version)
- Fixed, floating, centered pill: white bg, `rounded-2xl`, `shadow-lg`, `top-4`
- Contains: Weltrade wordmark text (left, bold, `--wt-blue-deep`, thumb-up logo optional as inline SVG), one CTA button (right): "Reserve Free Seat"
- Shrinks slightly on scroll (`max-w` transition, CSS only). NO nav links — this is a funnel, the only journey is downward. No exits.

### Buttons
- Primary CTA: Gradient Brand background, white text, `rounded-xl`, `px-8 py-4`,
  `font-weight: 600`, `text-lg`, full-width on mobile, subtle `scale(1.02)` on hover, `shadow-md`
- All CTAs on the landing page scroll/route to `/qualify`
- Button text varies per section (see COPY.md) — never generic "Submit"

### Chips (section eyebrows)
- `--wt-blue-soft` background, `--wt-blue` text, `rounded-full`, `px-4 py-2`, inline dot or lucide icon 14px
- One chip above each section H2

### Cards
- White bg, `rounded-3xl` (24px), `padding: clamp(18px, 3vw, 28px)`
- Shadow: `0 2px 8px rgba(10,20,69,0.06), 0 12px 32px rgba(10,20,69,0.08)`
- NO backdrop-filter. NO blur. Ever.

### Negatives vs Positives section ("Trading alone vs Trading connected")
- Two columns on desktop (stack on mobile: negatives first, then positives)
- Negative rows: white card, cross icon in `--wt-red-soft` circle, text `--wt-gray-text`
- Positive rows: white card, check icon in `--wt-green-soft` circle, text `--wt-blue-deep`, slightly stronger shadow
- Icons: lucide `X` and `Check`, 16px, inline — no external SVG files

### Speaker cards
- 2x2 grid mobile, 4-across desktop
- Each: photo (see image rules), name bold `--wt-blue-deep`, role/academy in `--wt-gray-text`
- Photos provided by user later — build with a styled placeholder (initials on `--wt-blue-soft` circle) that accepts an image path

### Photo gallery (past events)
- Horizontal scroll-snap strip on mobile (`scroll-snap-type: x mandatory`), 3-column grid desktop
- Every image: `loading="lazy"`, `decoding="async"`, explicit `width`/`height` (no layout shift), WebP, max 120KB each, served from `/public/gallery/`
- Placeholder solid `--wt-blue-soft` blocks until images added
- Caption chips under strip: "Benin", "Port Harcourt", "Jos", "Ibadan", "Ghana"

### Qualification gate (one question per screen)
- Centered single card, max-width 480px
- Progress bar top: 4 segments, filled = Gradient Brand, empty = `--wt-blue-soft`
- "Question X of 4" label in `--wt-gray-text`
- Answer options: full-width tappable cards, `rounded-2xl`, border `2px solid #E5EAFB`,
  selected state = border `--wt-blue` + bg `--wt-blue-soft`. Min tap height 56px.
- Auto-advance 250ms after selection (no "Next" button needed). Back arrow top-left.
- NO page reload between questions — client-side state only.

### Hero
- NO video. NO background image. Background: `--wt-off-white` with a subtle CSS-only
  radial glow (`radial-gradient` of `--wt-blue-soft`) top-center, plus 2-3 small gold dot accents (pure CSS)
- Content: chip → H1 with gradient span → subhead → date/time/venue strip → CTA button → "FREE ENTRY" microcopy
- Date/time/venue strip: white card row with lucide Calendar / Clock / MapPin icons 16px

## 4. PERFORMANCE LAW (violating any rule = failed build)

1. **NO videos.** Not hero, not decorative, not anywhere.
2. **NO external fonts.** System stack only.
3. **NO backdrop-filter / blur.**
4. **NO CSS or JS animation libraries.** Transitions = CSS `transition` on transform/opacity only.
5. **NO external images at runtime.** Everything from `/public/`, WebP, compressed.
6. **Icons:** lucide-react named imports only (`import { Check, X, Calendar } from 'lucide-react'`). Never `import *`.
7. **Meta Pixel:** injected async after `window.load`. Never blocks paint.
8. **Bundle budget:** total JS+CSS under 150KB gzipped. Run `npm run build` and check.
9. **Images:** every `<img>` has width, height, `loading="lazy"` (except any above-fold speaker/hero image — there should be none at launch).
10. **Lighthouse mobile target:** Performance 95+, LCP under 2.0s on simulated 4G.

## 5. Layout Rhythm
- Max content width: `max-w-5xl` centered, `px-4` mobile
- Section vertical padding: `clamp(56px, 9vw, 110px)`
- Section order (landing): Hero → Who This Is For → What Happens Inside (negatives/positives) → Speakers → Gallery → Final Push → mini-footer
- Mini-footer: Weltrade wordmark, event address, "© 2026 Weltrade" — one line, nothing else. No link farm.

## 6. Tone of visual voice
Confident, premium, moving-money energy — but clean and trustworthy (this is a broker,
not a crypto meme page). Blue dominates. White space breathes. Gold winks only at giveaways.
Every screen has exactly ONE job: move the visitor to the next step.
