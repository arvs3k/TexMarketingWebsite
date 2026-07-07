# Krisons Marketing — Site Architecture

Marketing website for Krisons Marketing (industrial textiles, Erode/Chennai/Karur).
Stack: Next.js App Router (16.x) · TypeScript · Tailwind CSS v4. All pages are
server components; `NavBar` is the only client component (mobile menu).

Content source of truth: `KM New Company Profile March 26.pdf`.

## Site map

| Route | Page | PDF section |
|---|---|---|
| `/` | Home — hero, stats, pillars, product highlights, application teasers, CTA | About us, key figures |
| `/about` | Timeline, innovation, pillars + partner reasons, company facts table | About us, history panel, Company Profile table |
| `/products` | Thermal bond specs, microdot article table (13 articles), coating types | Products pages |
| `/applications` | 4 category cards: apparel, industrial, automotive, home textiles | Applications pages |
| `/fusing-guide` | Prep checklist, parameters table, 4-step procedure | Fusing Procedure |
| `/contact` | People, email, 3 address blocks | Contact us |
| `/gallery` | Placeholder grid (awaiting real photography) | Gallery (images not extracted) |

## Structure

```
src/
├── app/            # routes (server components), layout, globals.css, sitemap.ts
├── components/     # shared UI
└── lib/
    ├── data/       # typed content derived from the PDF — edit specs HERE, not in JSX
    └── metadata.ts # buildMetadata() helper + siteUrl
```

## Components

- `NavBar` (client) — sticky nav, active-link highlight, mobile hamburger
- `Footer` — brand blurb, links, contact summary
- `PageHeader` — dark hero band on every inner page (eyebrow/title/intro)
- `Section` — standard section wrapper: spacing, optional eyebrow/title/intro
- `SpecTable` — generic responsive table (used for articles, fusing params, company facts)
- `ApplicationCard` — application category with use-case grid
- `ContactInfoBlock` — address card
- `StatBadge`, `Timeline`, `CTABand` — self-explanatory

## Design system

Defined in `globals.css` via Tailwind v4 `@theme`:

- Colors: `ink-*` (navy/charcoal), `paper`/`paper-dark` (warm off-white), `copper-*` (accent)
- Fonts: Archivo (`font-display`, headings) + Inter (`font-body`), loaded via `next/font`
- `.dot-grid` / `.dot-grid-dark` — microdot background motif used on dark bands and placeholders

## SEO

- Per-page `title`/`description`/OG via `buildMetadata()` in `src/lib/metadata.ts`
- `metadataBase` + title template + twitter card in `app/layout.tsx`
- `app/sitemap.ts` + `app/robots.ts`
- JSON-LD: Organization (layout) and Product ItemList (products page) in `src/lib/jsonld.ts`
- Brand assets generated at build time: `app/icon.tsx` (favicon), `app/opengraph-image.tsx` (1200×630 OG image)
- Canonical domain: krisonsmarketing.com (override with `NEXT_PUBLIC_SITE_URL`)
- Positioning: copy targets export/international apparel buyers ("delivery across
  borders", "manufacturer, India" titles)

## Enquiry form

`src/components/EnquiryForm.tsx` (client) on `/contact#enquiry` posts to Web3Forms
(no backend, no npm dep). Requires `NEXT_PUBLIC_WEB3FORMS_KEY` (see `.env.example`);
without it the form shows an email-us fallback on submit. Honeypot field for spam.

## Export positioning

- Home: "Built for import/export orders" band (capacity, QA, logistics, sourcing — all PDF-backed)
- `/contact`: buyer FAQ (`src/lib/data/faq.ts`) with FAQPage JSON-LD
- `public/krisons-company-profile.pdf` — ghostscript-compressed (13.7 MB → 1.3 MB) supplier
  profile, linked from Home and About. Source PDF is in Git LFS (`.gitattributes` tracks `*.pdf`),
  so this download also goes through LFS — Vercel must have Git LFS enabled (it evidently is).

## Imagery

`public/images/*.webp` — 14 photos extracted from the company profile PDF
(ghostscript/pdfimages, re-encoded to WebP, ~1.6 MB total). Used via `next/image`
(lazy-loaded except the home hero, which is `priority`). Skipped: QR code,
clip-art, logo tile, off-brand stock shots. Source-of-truth PDF lives in Git LFS.

## TODOs / notes

- Get Web3Forms key (free, web3forms.com) and set env vars in Vercel
- Coating-type descriptions in `lib/data/products.ts` are generic industry
  explanations (the PDF only names the four types) — have the business verify wording
- No ESLint config yet; add if desired
