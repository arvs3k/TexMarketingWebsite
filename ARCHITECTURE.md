# Krisons Marketing — Site Architecture

Marketing and lead-capture site for Krisons Marketing (interlining and non-woven
manufacturer; plant in Erode, head office Chennai, branch Karur).

Stack: Next.js 16 App Router · TypeScript · Tailwind CSS v4 · Vercel · Git LFS for PDFs.
Every page is a static server component. Client components are limited to the
header, the mobile action bar, the request form, the profile download, tracked
links and the print button.

Facts come from `KM New Company Profile March 26.pdf` via `src/lib/data/*`.
**Edit facts and copy in the data files, not in JSX.**

## Site map

| Route | Purpose |
|---|---|
| `/` | Hero (manufacturer · India · 1992 · 2M m/month), proof of factory, range, layer diagram, applications, ordering steps, quality slots, final CTA |
| `/products` | Six family cards, comparison table, coating types |
| `/products/[slug]` | One page per family: `fusible-interlining`, `thermal-bond-non-woven`, `woven-interlining`, `coated-fabric`, `geo-textile`, `home-textiles`. Specs in metric and imperial, colors, end uses, pre-filled sample request, print-as-spec-sheet |
| `/applications`, `/applications/[slug]` | By buyer industry: `apparel`, `filtration`, `automotive`, `home-textiles`; each links to its products |
| `/factory` | Plant tour, video slot, machinery, laboratory, QC / certification / test-report slots |
| `/how-to-buy` | Samples → spec → trial → production, export statement, documents, FAQ (FAQPage JSON-LD) |
| `/about` | Story, timeline, people, company facts |
| `/fusing-guide` | Technical guide (printable) |
| `/contact` | Four contact routes, people, request form, addresses |
| `/request-samples` | The RFQ form on its own page; accepts `?product=&article=&application=&type=` |

Redirects (`next.config.ts`): `/home-textiles` → `/products/home-textiles`,
`/quality` → `/factory#quality`, `/gallery` → `/factory#tour`.

## Structure

```
src/
├── app/                 routes, layout, globals.css (design tokens), sitemap, robots, OG image
├── components/          shared UI (see below)
└── lib/
    ├── config.ts        contact email, WhatsApp number, reply-time promise, FEATURE FLAGS
    ├── placeholders.ts  when placeholder slots are visible
    ├── analytics.ts     track(event, props) — the single analytics seam
    ├── links.ts         requestHref() — builds pre-filled form links
    ├── whatsapp.ts      wa.me link builder
    ├── jsonld.ts        Organization, WebSite, Product, ItemList, BreadcrumbList, FAQPage
    ├── metadata.ts      buildMetadata() helper
    ├── units.ts         GSM ↔ oz/yd², cm ↔ in
    └── data/            ALL content: company, products, applications, factory, buying,
                         faq, fusing, homeTextiles, media (image registry), rfq, site (nav + home copy)
scripts/content-todo.mjs  regenerates the table in CONTENT-TODO.md
docs/REVIEW.md            Phase 1 audit;  docs/screenshots/  before/after
```

## Components

- `SiteHeader` (client) — sticky header, lock-up "KRISONS · Interlining & non-woven manufacturer", primary CTA, mobile menu
- `MobileCtaBar` (client) — phone-only sticky bar: Request samples · WhatsApp
- `Footer`, `Section`, `PageHero` (breadcrumbs + H1 band), `Faq` (native `<details>`)
- `Cta.tsx` — `SamplesButton`, `WhatsAppButton`, `VideoCallButton`, `ContextCta` (inline end-of-section CTA), `ClosingCta`
- `RfqForm` (client) + `RequestPanel` (server wrapper) — two-step sample / quote / video-call request
- `ProfileDownload` (client) — company profile link, with optional email gate
- `TrackedLink` (client) — link that fires one analytics event
- `Photo` / `WantedPhoto` — registry image / missing-photo slot
- `MaterialTile` — drawn swatch for products with no photo (labelled "Illustration")
- `LayerDiagram` — exploded shell / adhesive dot / non-woven diagram, scroll-animated
- `Proof.tsx` — `Certifications`, `TestReports`, `QcProcess`, `TestValues` (all placeholder-aware)
- `Placeholder.tsx` — `PlaceholderBlock`, `PlaceholderInline`, `PlaceholderOnly`
- `People`, `ProductCard`, `PrintButton`, `Icon`, `JsonLd`

## Design tokens

Defined in `src/app/globals.css` with Tailwind v4 `@theme`.

| Token | Value | Use |
|---|---|---|
| `ink-950 / 900 / 800 / 700` | `#0b111a` `#111a27` `#1a2636` `#2a394e` | dark surfaces, headings |
| `ink-600 / 500` | `#43546b` `#5b6b80` | secondary text on paper, input borders |
| `ink-300 / 200` | `#a9b4c2` `#cfd6df` | text on ink |
| `paper / paper-2 / card` | `#f7f4ee` `#efeae0` `#fffdf9` | page, alternate band, cards |
| `line` | `#ddd6c8` | hairlines |
| `copper-700 / 600` | `#8f3f10` `#b4551f` | accent text on paper / primary button |
| `copper-400 / 100` | `#e08a52` `#f6e6d8` | accent on ink / row hover |
| `whatsapp` | `#0f7a40` | WhatsApp buttons (darkened for AA contrast) |
| `flag` | `#c2006e` | placeholders only |
| `font-display`, `font-body` | Archivo (variable) | everything |
| `font-serif` | Instrument Serif italic | hero accent line, the "about the name" note |
| `font-mono` | system monospace stack | eyebrows, numerals, spec data (no webfont, by design: see PR notes) |
| `text-display / h1 / h2 / h3` | fluid `clamp()` sizes | headings |

Component classes (`.btn*`, `.link`, `.spec-table`, `.ph*`, `.microdot*`) sit in the
`components` cascade layer so utilities can override them. Motion is CSS only
(scroll-driven `animation-timeline: view()`), transform-only, and disabled under
`prefers-reduced-motion`. Product pages and the fusing guide have a print stylesheet.

## Lead capture

- **RFQ form** posts to Web3Forms (`NEXT_PUBLIC_WEB3FORMS_KEY`). Without a key, or if the
  request fails, it shows the buyer's details with "Send by email" and "Send on WhatsApp"
  buttons, pre-filled. Spam: honeypot + minimum-time trap. File upload is behind
  `features.rfqFileUpload` (needs Web3Forms Pro); default is a "link to tech pack" field.
- **Feature flags** in `src/lib/config.ts`: `whatsapp`, `videoCall`, `stickyMobileCta`,
  `contextualCtas`, `profileEmailGate` (off), `rfqFileUpload` (off).
- **Analytics events** (no vendor installed): `sample_cta_click`, `rfq_start`, `rfq_step`,
  `rfq_submit`, `rfq_handoff`, `profile_download`, `whatsapp_click`, `video_call_cta_click`,
  `spec_sheet_print`, `contact_click`. Each is pushed to `window.dataLayer` and dispatched
  as a `km:analytics` DOM event.

## Placeholders

Content the business has not supplied is never faked. Slots are tagged
`CONTENT-TODO(id)` in the data files, render as loud magenta blocks in development and
on Vercel preview deployments, and are omitted from production. See `CONTENT-TODO.md`.

## SEO

Per-page title / description / canonical / OG via `buildMetadata()`. JSON-LD:
Organization + WebSite (layout), Product (each product page), ItemList (products index,
home textiles), BreadcrumbList (inner pages), FAQPage (`/how-to-buy`). `sitemap.ts`
lists all 21 URLs. Canonical domain: krisonsmarketing.com (`NEXT_PUBLIC_SITE_URL`).

## Scripts

`npm run dev` · `build` · `start` · `lint` (ESLint 9 + eslint-config-next) · `typecheck` ·
`content:todo` · `content:check`

## Imagery

`public/images/*.webp` are extracts from the company profile PDF, referenced only through
`src/lib/data/media.ts`. `cutting-table.webp` and `fusing-press.webp` look like stock
and are deliberately unused. The source PDF and the public profile PDF are in Git LFS
handling as before (`.gitattributes`).
