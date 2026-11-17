# Phase 1 review — Krisons Marketing website (as of `main`, a59407a)

Audited 17 Nov 2026 on a production build (`next build && next start`) at 375, 768 and 1440 px.
Baseline screenshots are in `docs/screenshots/before-*.jpg`.

## 1. First impression (5-second test, home page)

**What an importer gets:** dark hero, a nice line ("The fabric you never see, engineered to be felt"),
"non-woven fabric manufacturer · India · Est. 1992" in small caps, four numbers.

**What they don't get:**

- **Proof it is a factory.** The hero image is a dim abstract fabric macro at 30% opacity. No plant, no machine, no people. The real factory photos — the single best trust asset the site owns — are buried on `/gallery` and half-way down `/about`.
- **The brand name says "Marketing"** in copper in the header, next to nothing that contradicts the "trading company" reading.
- **What is sold.** The headline never says interlining or non-woven. The product names start one full screen down.
- **What to do.** The primary button is "Explore products". The sample request is the secondary, outlined button.
- The hero paragraph is five sentences of addresses and hedging ("We work with buyers who value a clear account of how the goods are made").
- On mobile the hero paragraph fills the whole first screen; the CTAs are below the fold.

## 2. Trust gaps, page by page

| Page | What a cautious buyer still worries about |
|---|---|
| Home | Is this a manufacturer or a trader? Has anyone outside India bought from them? Who are the people? "Built on three pillars" is filler: the pillars are "In-house laboratory", "Buyers", "Samples and quotes". |
| About | No faces, no story, only a table. The page lists six cards of restated facts. "Proprietorship" is presented as a selling point without explanation. |
| Products | Good, real spec data — but one long page, 13 identical-looking rows, no way to ask for a specific article. Three products are tables of "Specs on request" × 4, which reads as "we don't know". The coating section opens by saying its own text is "not confirmed". |
| Home textiles | Catalogue graphics carry printed claims ("100% waterproof", "anti-allergen", "premium quality") that the data file itself marks unverified. The page then tells the reader not to believe the pictures. |
| Applications | Text-only cards, no link from a use to the product that serves it. Generic wording (flagged `VERIFY` in the data). |
| Quality | The weakest page for trust: it is mostly a list of what it will *not* say ("This page says only that", "No pass/fail limit, certificate, or claim… is stated here", two visible "TODO" cards). A buyer reads this as "there is no quality system". |
| Fusing guide | Useful idea, but every paragraph says the numbers are unconfirmed. |
| Gallery | Nine photos, no structure, no captions that tell a story. One CTA ("Want to visit?"). Not a "placeholder grid" as ARCHITECTURE.md says, but not a factory tour either. |
| Contact | Explicitly says "this site does not state a response time". No WhatsApp. A Gmail address (known; business email is coming). |

Missing everywhere: certifications slot, test data, how ordering works for a foreign buyer, documents, a named person with a face, any low-commitment way to talk (WhatsApp, video call).

## 3. Conversion gaps

- No primary CTA in the header. On mobile the only way to the form is menu → Contact → scroll past four instruction cards.
- The form sits **below** a four-step "how to ask" essay. Buyers who clicked "Request a sample" land on instructions, not a form.
- Product pages have no per-product or per-article "request this" action; nothing is pre-filled.
- The form asks too little of the right things and too much of the wrong: one free-text "Specs you already know" field instead of GSM / width / colour / quantity (so every lead needs a clarifying email), no phone/WhatsApp, no quantity, no file or tech-pack, but it does ask for a free-text "Message" with no guidance on destination.
- Without a Web3Forms key, submit shows "Something went wrong" — the buyer's typed details are wasted.
- Success state promises nothing ("We will follow up by email").
- Company profile PDF is offered twice (home band, about footer link), not on products, quality or contact.
- No WhatsApp, no call-booking, no sticky mobile action, no event tracking.
- Spam protection is a single honeypot.

## 4. Copy problems

- **"our manufacturing plant in Erode" — 56 lines across 18 source files** (7 on About alone, 6 on Home, 6 on Gallery, 7 in `homeTextiles.ts`). It reads like a legal incantation.
- **Defensive voice.** "not published until they are confirmed", "not published on this site", "This page says only that", "Words printed on the pictures are not specifications", "Descriptions only. No weight, width, or construction number is published". The honesty is right; the framing tells buyers what is missing instead of what is true. Fix: say what exists, offer the rest on request, and keep internal caveats in code comments and `CONTENT-TODO.md`.
- **"US and international buyers are welcome to request samples"** appears on almost every page, verbatim.
- **"Manufacturing since 1992"** — see conflict below.
- Headings are labels, not claims ("Product range", "Request samples", "Who to call").
- American spelling ("meters", "color") from the earlier US-first pass, mixed with "enquiry". Kept American for now; see the decisions list in the PR.

### Conflicts between the brief, the copy and the data files

1. **"Manufacturing since 1992" vs the data.** `company.ts` says established 1992 *with hardware (buckles, D-rings)*, textiles from the 2000s, own plant commissioned December 2019. Existing copy says "has manufactured since 1992". The redesign says "Established 1992 · own plant in Erode since 2019", which is what the data supports.
2. **Stock-looking images.** `cutting-table.webp` (garment workers at a cutting table) and `fusing-press.webp` look like brochure stock, not the Erode plant. They are unused today; the redesign keeps them out. Please confirm which of the fabric macro shots are your own goods.
3. **ARCHITECTURE.md says Gallery is a placeholder grid**; it already holds nine real photos. Docs updated.
4. **Brief says "13 articles (microdot, paste dot, double dot)"**; the data has 13 article numbers, each available in paste dot or double dot, PES or PA. "Scatter coating" is named as a coating type but has no article. Kept as in the data.
5. **"Request free samples"** (brief) — nothing in the data says who pays the courier. Used as instructed; flagged in the decisions list.
6. The source PDF (`KM New Company Profile March 26.pdf`) is a Git LFS pointer in this checkout, so I worked from `src/lib/data/*` and the compressed public PDF only.

## 5. Visual and UX

- **Hierarchy:** every section is eyebrow + bold title + grid of identical white cards. Nothing is bigger or more important than anything else. No imagery on the home page below the hero.
- **Typography:** Archivo + Inter is fine but used at two sizes. Spec tables are plain; metric and imperial are jammed into one cell ("23 GSM (0.68 oz/yd²)") which is hard to scan down a column.
- **Mobile:** the 13-article table causes **203 px of horizontal page overflow** on `/products` at 375 px. Nav is eight equal links, no CTA. Hero stats wrap awkwardly.
- **Navigation:** eight top-level items of equal weight (Fusing Guide and Gallery rank with Products).
- **Consistency:** the dark "Buyers" band on Home repeats the content of the pillars above it.
- **Imagery:** 25 images exist; Home uses one. Home-textile graphics are marketplace-style promo tiles that clash with the rest.
- **Focus states:** browser default only; low visibility on the dark header.
- **Motion:** none (fine), but also no hover/active feedback on most cards.

## 6. Technical

Lighthouse 12, mobile emulation, simulated slow 4G, production build:

| Page | Perf | A11y | Best pr. | SEO | LCP | CLS | TBT | Weight |
|---|---|---|---|---|---|---|---|---|
| `/` | 96 | 96 | 100 | 100 | 2.8 s | 0 | 40 ms | 309 KB |
| `/about` | 95 | 96 | 100 | 100 | 2.9 s | 0 | 30 ms | 320 KB |
| `/products` | 95 | 96 | 100 | 100 | 3.0 s | 0 | 60 ms | 366 KB |
| `/home-textiles` | 95 | 96 | 100 | 100 | 3.0 s | 0 | 40 ms | 402 KB |
| `/applications` | 96 | 94 | 100 | 100 | 2.8 s | 0 | 40 ms | 301 KB |
| `/quality` | 97 | 96 | 100 | 100 | 2.7 s | 0 | 40 ms | 288 KB |
| `/fusing-guide` | 97 | 96 | 100 | 100 | 2.6 s | 0 | 40 ms | 286 KB |
| `/gallery` | 93 | 96 | 100 | 100 | 3.2 s | 0 | 40 ms | 458 KB |
| `/contact` | 96 | 96 | 100 | 100 | 2.6 s | 0 | 90 ms | 266 KB |

- **LCP is over the 2.5 s target on every page** (2.6–3.2 s). Cause: two render-blocking Google font families and, on Home, a full-bleed hero image as the LCP element.
- **Accessibility:** `color-contrast` fails on every page (copper `#b4551f` text on navy; `white/60` on navy); `heading-order` fails on `/applications`. No skip link. Mobile menu button has no `aria-controls`.
- **Images:** sources are reasonable (1.6 MB total, WebP), served through `next/image`. `microdot-texture-dark.webp` (328 KB) and `hero-fabric-rolls.webp` (267 KB) are the heavy ones.
- **Metadata:** titles and descriptions exist per page. `og:locale` is hard-coded `en_US`. Descriptions repeat the same sentence. No per-page OG image.
- **JSON-LD:** Organization (no `@id`, no logo, no `sameAs`), one Product `ItemList` whose items point to `#anchors` rather than pages, FAQPage on Contact. Missing: WebSite, BreadcrumbList, per-product Product pages.
- **Sitemap/robots:** present and correct. Only 9 URLs because products and applications are single pages — little surface for "fusible interlining manufacturer India"-type queries.
- **Broken links:** none found. `/contact#enquiry` and `/contact#samples` both resolve.
- **Tooling:** no ESLint, no lint script. TypeScript build passes.
- **Forms:** Web3Forms free plan does **not** include file attachments (Pro feature, about $12–15/month). See decisions.

## 7. Benchmarks — what to borrow

From my working knowledge of these sites (not re-crawled for this review):

1. **Freudenberg Performance Materials — Apparel** (interlinings, Germany). Product finder organised by garment and application; every product family has a data sheet. *Borrow:* application → product routing, one data sheet per family.
2. **Wendler Interlining** (shirt interlinings, Germany). Sells one narrow thing with total confidence; technical vocabulary used without apology. *Borrow:* the tone — specialist, calm, specific.
3. **Protolabs** (contract manufacturing, US). The quote request is the product: always one click away, asks structured questions, tells you exactly what happens next and when. *Borrow:* persistent primary CTA, structured RFQ, explicit "what happens next".
4. **McMaster-Carr** (industrial supply, US). Spec tables that are a pleasure to scan: aligned numerals, units in headers, no decoration. *Borrow:* table design, metric/imperial in separate columns.
5. **Welspun / Trident-style Indian exporters' "infrastructure" pages.** Plant photos, machine lists and capacity numbers up front. *Borrow:* lead with the plant, name the machines, show the lab.

## 8. What the redesign does about it

- Hero states manufacturer + product + place + year + capacity in one screen, with the real production line in the frame and "Request free samples" as the one primary action.
- Header lock-up reads **KRISONS · Interlining & non-woven manufacturer**; the legal name stays in the footer and About.
- One page per product family and per buyer industry; every one ends in a pre-filled sample request.
- Quality, gallery and factory merge into a **Factory & quality** tour with real, clearly-marked slots for certificates, test data, QC steps, new photos and video.
- A structured two-step RFQ that still works with no form key (hands off to email or WhatsApp with the details filled in).
- All unconfirmed content is a tracked placeholder: loud in development and on preview deployments, absent from production, listed in `CONTENT-TODO.md`.
