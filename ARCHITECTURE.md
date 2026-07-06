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
- `metadataBase` + title template in `app/layout.tsx`
- `app/sitemap.ts` generates sitemap.xml
- TODO: set real production domain in `siteUrl` (or `NEXT_PUBLIC_SITE_URL`); add OG image

## TODOs / notes

- Gallery uses placeholders — replace with real factory/product photos
- Coating-type descriptions in `lib/data/products.ts` are generic industry
  explanations (the PDF only names the four types) — have the business verify wording
- No ESLint config yet; add if desired
