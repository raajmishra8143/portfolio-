
# Raajj — Premium Portfolio

A single-page, scroll-driven portfolio with editorial dark aesthetic, gold accents, and three signature interactions: Lenis smooth scroll, a cursor image trail, and a horizontal-scrolling projects section.

## Visual direction

- **Palette (Noir & Gold)**: `#0d0d0d` background, `#1a1a1a` surfaces, `#c9a84c` primary gold, `#f0d78c` highlight gold, off-white text.
- **Typography**: Sora across the board (weights 200/300/400/600/800). Massive display headings (clamp up to ~14rem) with tight tracking, lowercase, mixed weights for editorial rhythm.
- **Texture**: subtle film grain overlay, soft gold radial glows behind hero, hairline gold dividers, generous whitespace.

## Sections (top to bottom)

1. **Hero** — Oversized name "raajj", rotating role words (developer / designer / btech '28), animated marquee tagline, scroll cue.
2. **About** — Short bio (B.Tech 2nd year student, what he builds), split layout with a portrait placeholder image and stat chips (year, focus, location).
3. **Skills** — Auto-scrolling horizontal marquee rows of tech (React, TS, Node, Python, C++, etc.) with gold hover lift.
4. **Projects (horizontal scroll)** — Pinned section: vertical scroll translates a horizontal track of 4–5 project cards (image, title, stack, year). This is the signature moment.
5. **Contact** — Big "let's talk" headline, email link with hover underline reveal, social links (GitHub, LinkedIn, X, Instagram), footer.

## Signature interactions

- **Lenis smooth scroll** — wraps the whole app, RAF-driven, gentle easing; works with native scroll APIs.
- **Cursor image trail** — on `mousemove`, spawn a small image from a pool of project thumbnails that fades + scales out (~600ms). Disabled on touch devices.
- **Horizontal scroll** — Framer Motion `useScroll` + `useTransform` on a pinned wrapper translating an inner track on the X axis.
- **Premium micro-animations** — text reveals (word-by-word fade/translate on enter), magnetic CTA, marquee, image parallax, animated counters.

## Technical details

- **Stack**: TanStack Start route `src/routes/index.tsx` as the single landing page; new components under `src/components/portfolio/`.
- **Dependencies to add**: `lenis`, `framer-motion`, `@fontsource-variable/sora`.
- **Smooth scroll**: `src/components/portfolio/SmoothScroll.tsx` initializes Lenis in a `useEffect`, hooks RAF, exposes nothing — just wraps children.
- **Cursor trail**: `CursorTrail.tsx`, listens to `pointermove`, maintains a small array of `{id, x, y, src}`, renders absolutely-positioned `<img>`s animated with Framer Motion `AnimatePresence`. Uses 5–6 generated project thumbnails as the trail pool.
- **Horizontal projects**: `HorizontalProjects.tsx`, outer section has height `~400vh`, inner sticky wrapper full viewport, motion div translates `x` from `0` to `-(trackWidth - vw)` based on scroll progress.
- **Design tokens**: extend `src/styles.css` with `--gold`, `--gold-soft`, `--ink`, `--paper`, gradient + shadow tokens; map under `@theme inline`. Set `--font-display` to Sora and apply globally via `body`.
- **Images**: generate 5–6 abstract gold/noir project mockup images into `src/assets/` via `imagegen` and a portrait placeholder for the about section.
- **SEO**: update route `head()` with title "Raajj — B.Tech Developer & Designer", description, og:title/description, og:image (hero image).
- **Accessibility & perf**: respect `prefers-reduced-motion` (disable Lenis + cursor trail + heavy transforms), `pointer: coarse` disables cursor trail, lazy-load non-hero images.

## Out of scope

No backend, no CMS, no contact form submission (mailto link only), no blog. Content is hardcoded sample data Raajj can edit later.
