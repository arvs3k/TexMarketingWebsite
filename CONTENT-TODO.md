# Content to supply

Everything on the site that is waiting for real content from the business.

**How placeholders behave**

- In development (`npm run dev`) and on Vercel **preview** deployments, every item below shows as a magenta, hatched block or tag marked `PLACEHOLDER · not on live site`.
- On the **production** deployment the slot is left out entirely (or replaced by a neutral, true sentence). Nothing below can go live by accident.
- To see or hide placeholders anywhere, set `NEXT_PUBLIC_SHOW_PLACEHOLDERS=1` or `=0`.
- Each item is tagged in the code as `CONTENT-TODO(id)`. The table is generated: after you fill something in, delete its tag and run `npm run content:todo`. `npm run content:check` fails while any tag remains.

## What I need from you, in priority order

1. **Reply-time promise** (`reply-time`). How many working days will you commit to? Shown on the form's success screen.
2. **WhatsApp number** (`whatsapp-number`). Defaults to the Manager's number. Confirm it is on WhatsApp and is the right person for buyers.
3. **Certifications** (`certifications`). Only ones you hold today, with certificate number, validity and PDF.
4. **Lab test values and reports** (`test-values-*`, `test-reports`). Real numbers with the test method. Delete rows you do not test.
5. **QC process** (`qc-process`). The real steps, in order.
6. **Portraits and short bios** (`portrait-*`, `bio-*`) for the Proprietor and Manager.
7. **Photography and video** (`photography`, `photo-*`, `factory-video`). Shot list is in `src/lib/data/media.ts`.
8. **Home-textile artwork** (`verify-home-textile-artwork`). The current graphics print claims such as "100% waterproof" and "anti-allergen". Either send evidence or clean photos.
9. **Business review of wording** (`verify-coatings`, `verify-applications`, `verify-fusing`). Generic industry text that K. Chandrasekaran should confirm.
10. **Spec sheets** (`spec-sheet-*`). One PDF per product family. Until then, buyers get a "Print spec sheet" button on the two products with published specs.
11. **Business email** (`business-email`). One value in `src/lib/config.ts`.

## Generated list (file and line)

<!-- content-todo:start -->
| # | ID | What to supply | Where it goes |
|---|---|---|---|
| 1 | `business-email` | replace the Gmail address with the business address on the company domain once it exists. | `src/lib/config.ts:19` |
| 2 | `whatsapp-number` | confirm which number answers WhatsApp for buyers, and that WhatsApp is active on it. | `src/lib/config.ts:26` |
| 3 | `reply-time` | set the number of working days you will commit to (for example 2). | `src/lib/config.ts:32` |
| 4 | `verify-applications` | confirm each use case below is one Krisons fabric is actually sold into, and delete any that are not. | `src/lib/data/applications.ts:23` |
| 5 | `portrait-proprietor` | add a portrait (square, min 600 px) to /public/images/people/ and set the path here. | `src/lib/data/company.ts:150` |
| 6 | `bio-proprietor` | one or two sentences about K. Chandrasekaran, in his own words if possible. | `src/lib/data/company.ts:152` |
| 7 | `portrait-manager` | add a portrait (square, min 600 px) to /public/images/people/ and set the path here. | `src/lib/data/company.ts:159` |
| 8 | `bio-manager` | one or two sentences about R. Sridharan and what buyers can ask him. | `src/lib/data/company.ts:161` |
| 9 | `factory-video` | add a 60–90 s factory walkthrough. Set `src` to an MP4 under /public/video/ (keep under 8 MB) or a YouTube/Vimeo embed URL, and `poster` to a still frame. | `src/lib/data/factory.ts:62` |
| 10 | `qc-process` | describe the real QC steps in order (what is checked, when, by whom). 4–6 steps. Until then this block shows only as a placeholder. | `src/lib/data/factory.ts:93` |
| 11 | `certifications` | add each certificate you hold: name, issuing body, certificate number, valid-until date, logo/badge image under /public/images/certifications/, and the PDF under /public/certificates/. Do not list anything applied-for or expired. | `src/lib/data/factory.ts:102` |
| 12 | `test-reports` | add report PDFs under /public/test-reports/ and list them here (title, article, lab, date, file). | `src/lib/data/factory.ts:122` |
| 13 | `verify-fusing` | confirm the fusing temperature, pressure and time ranges and the handling notes below for Krisons articles. | `src/lib/data/fusing.ts:3` |
| 14 | `verify-home-textile-artwork` | the product graphics print claims ("100% waterproof", "anti-allergen", "machine washable", "premium quality"…) that are not confirmed. Confirm each with evidence, or supply clean product photos without printed claims (preferred). | `src/lib/data/homeTextiles.ts:18` |
| 15 | `photography` | replace brochure extracts with professional photos (plant, machines, lab, product close-ups, team). Keys stay the same. | `src/lib/data/media.ts:7` |
| 16 | `photo-coating-line` | photo of the coating machine running (landscape). Add to media above and reference from factory.ts tour stop "coating". | `src/lib/data/media.ts:118` |
| 17 | `photo-lab-in-use` | photo of a technician running a test in the lab. | `src/lib/data/media.ts:120` |
| 18 | `photo-team` | group photo of the team at the plant. | `src/lib/data/media.ts:122` |
| 19 | `photo-dispatch` | photo of packed rolls ready for dispatch (shows packing quality to importers). | `src/lib/data/media.ts:124` |
| 20 | `photo-woven-interlining` | macro photo of woven interlining. | `src/lib/data/media.ts:126` |
| 21 | `photo-coated-fabric` | macro photo of coated fabric. | `src/lib/data/media.ts:128` |
| 22 | `photo-geo-textile` | photo of geo-textile roll or surface. | `src/lib/data/media.ts:130` |
| 23 | `verify-coatings` | business review of the four coating-type descriptions (generic industry wording, not approved Krisons specifications). | `src/lib/data/products.ts:169` |
| 24 | `test-values-fusible` | enter real lab values + test method for fusible interlining (per article if they differ), or delete rows you do not test. | `src/lib/data/products.ts:234` |
| 25 | `test-values-thermal-bond` | enter real lab values + test method for thermal bond non-woven, or delete rows you do not test. | `src/lib/data/products.ts:241` |
| 26 | `spec-sheet-fusible` | add a PDF spec sheet to /public/spec-sheets/ and set the path here. | `src/lib/data/products.ts:306` |
| 27 | `spec-sheet-thermal-bond` | add a PDF spec sheet to /public/spec-sheets/ and set the path here. | `src/lib/data/products.ts:337` |
| 28 | `spec-sheet-woven` | add a PDF spec sheet to /public/spec-sheets/ and set the path here (optional). | `src/lib/data/products.ts:361` |
| 29 | `spec-sheet-coated` | add a PDF spec sheet to /public/spec-sheets/ and set the path here (optional). | `src/lib/data/products.ts:385` |
| 30 | `spec-sheet-geo` | add a PDF spec sheet to /public/spec-sheets/ and set the path here (optional). | `src/lib/data/products.ts:408` |
| 31 | `spec-sheet-home-textiles` | add a PDF catalogue to /public/spec-sheets/ and set the path here (optional). | `src/lib/data/products.ts:431` |
<!-- content-todo:end -->

## Not placeholders, but also yours to set

| Setting | Where | Default |
|---|---|---|
| Feature flags: WhatsApp, video call, sticky mobile bar, contextual CTAs, profile email gate, RFQ file upload | `src/lib/config.ts` → `features` | all on, except email gate and file upload |
| Web3Forms key | Vercel env `NEXT_PUBLIC_WEB3FORMS_KEY` | none (form hands off to email / WhatsApp) |
| Canonical URL | Vercel env `NEXT_PUBLIC_SITE_URL` | `https://krisonsmarketing.com` |
