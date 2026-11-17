import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import MaterialTile from "@/components/MaterialTile";
import PageHero from "@/components/PageHero";
import Photo, { WantedPhoto } from "@/components/Photo";
import PrintButton from "@/components/PrintButton";
import Section from "@/components/Section";
import { ClosingCta, ContextCta, SamplesButton } from "@/components/Cta";
import { PlaceholderBlock } from "@/components/Placeholder";
import { TestValues } from "@/components/Proof";
import { applicationCategories } from "@/lib/data/applications";
import { company } from "@/lib/data/company";
import { fabricExplainers, homeTextileProducts, pillowFabricChoice } from "@/lib/data/homeTextiles";
import { wantedMedia } from "@/lib/data/media";
import {
  colorSwatches,
  FUSIBLE_WIDTHS_CM,
  getProductFamily,
  microdotArticles,
  microdotDiagrams,
  microdotLegend,
  microdotShirtDiagram,
  productFamilies,
  thermalBondSpecs,
  type ProductFamily,
} from "@/lib/data/products";
import { breadcrumbJsonLd, homeTextilesJsonLd, productJsonLd } from "@/lib/jsonld";
import { requestHref } from "@/lib/links";
import { buildMetadata, siteUrl } from "@/lib/metadata";
import { showPlaceholders } from "@/lib/placeholders";
import { inches, ozPerSqYd } from "@/lib/units";

export function generateStaticParams() {
  return productFamilies.map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const p = getProductFamily((await params).slug);
  if (!p) return {};
  return buildMetadata({ ...p.seo, path: `/products/${p.slug}` });
}

const wantedBySlug: Partial<Record<ProductFamily["slug"], (typeof wantedMedia)[keyof typeof wantedMedia]>> = {
  "woven-interlining": wantedMedia.wovenMacro,
  "coated-fabric": wantedMedia.coatedMacro,
  "geo-textile": wantedMedia.geoMacro,
};

const specSheetTodo: Record<ProductFamily["slug"], string> = {
  "fusible-interlining": "spec-sheet-fusible",
  "thermal-bond-non-woven": "spec-sheet-thermal-bond",
  "woven-interlining": "spec-sheet-woven",
  "coated-fabric": "spec-sheet-coated",
  "geo-textile": "spec-sheet-geo",
  "home-textiles": "spec-sheet-home-textiles",
};

function Swatches({ names }: { names: string[] }) {
  const list = colorSwatches.filter((c) => names.includes(c.name));
  return (
    <div>
      <ul className="flex flex-wrap gap-x-6 gap-y-4">
        {list.map((c) => (
          <li key={c.name} className="flex items-center gap-3">
            <span
              aria-hidden
              className="h-10 w-10 rounded-full border border-ink-500 shadow-inner"
              style={{ background: c.hex }}
            />
            <span className="font-medium">{c.name}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm text-ink-600">Screen colors are indicative. Judge shade from a sample.</p>
    </div>
  );
}

function ArticleTable() {
  return (
    <>
      <div className="relative overflow-x-auto rounded-(--radius-card) border border-line bg-card print:overflow-visible print:border-0">
        <table className="spec-table min-w-[46rem] print:min-w-0">
          <caption className="sr-only">
            Fusible interlining articles with weight in GSM and ounces per square yard
          </caption>
          <thead>
            <tr>
              <th scope="col">Article</th>
              <th scope="col" className="r">
                GSM
              </th>
              <th scope="col" className="r">
                oz/yd²
              </th>
              <th scope="col">Width · cm</th>
              <th scope="col">Width · in</th>
              <th scope="col">Color</th>
              <th scope="col">Adhesive</th>
              <th scope="col">Coating</th>
              <th scope="col" className="no-print">
                <span className="sr-only">Request</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {microdotArticles.map((a) => (
              <tr key={a.article} id={`art-${a.article}`}>
                <th scope="row" className="num font-semibold">
                  {a.article}
                </th>
                <td className="num r font-medium">{a.gsm}</td>
                <td className="num r text-ink-600">{ozPerSqYd(a.gsm)}</td>
                <td className="num">{FUSIBLE_WIDTHS_CM.join(" / ")}</td>
                <td className="num text-ink-600">{FUSIBLE_WIDTHS_CM.map((w) => inches(w)).join(" / ")}</td>
                <td>{a.colors}</td>
                <td>{a.coatingQuality}</td>
                <td>{a.coating}</td>
                <td className="no-print r whitespace-nowrap">
                  <Link
                    href={requestHref({ product: "fusible-interlining", article: a.article })}
                    className="link inline-flex items-center gap-1 text-sm"
                    aria-label={`Request sample: article ${a.article}, ${a.gsm} GSM`}
                  >
                    Request sample
                    <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-ink-600">{microdotLegend}</p>
    </>
  );
}

function HomeTextiles() {
  return (
    <>
      <Section eyebrow="The range" title="Seven finished pieces" lead={pillowFabricChoice}>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeTextileProducts.map((product) => (
            <li
              key={product.id}
              id={product.id}
              className="flex scroll-mt-24 flex-col overflow-hidden rounded-(--radius-card) border border-line bg-card"
            >
              <div className="aspect-[3/2] overflow-hidden bg-white">
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={product.width}
                  height={product.height}
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl font-bold">{product.name}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-ink-600">{product.summary}</p>
                <dl className="num mt-4 space-y-1.5 border-t border-line pt-4 text-sm">
                  <div className="flex gap-3">
                    <dt className="w-14 shrink-0 text-ink-600">Size</dt>
                    <dd>{product.size}</dd>
                  </div>
                  {product.weight && (
                    <div className="flex gap-3">
                      <dt className="w-14 shrink-0 text-ink-600">Weight</dt>
                      <dd>{product.weight}</dd>
                    </div>
                  )}
                </dl>
                {product.notes.filter((n) => n !== pillowFabricChoice).map((note) => (
                  <p key={note} className="mt-3 text-sm text-ink-600">
                    {note}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-600">
          Photos are catalogue artwork. Confirm fabric, fill and care details for your order with us; we will put them
          in writing with your samples.
        </p>
        <PlaceholderBlock id="verify-home-textile-artwork" title="Replace catalogue artwork" className="mt-6 max-w-3xl">
          These graphics print claims (“100% waterproof”, “anti-allergen”, “machine washable”…) that are not yet
          confirmed. Supply clean product photos, or evidence for each claim.
        </PlaceholderBlock>
      </Section>

      <Section tone="paper-2" eyebrow="Materials" title="Fabrics used in this range">
        <ul className="grid gap-x-10 sm:grid-cols-2">
          {fabricExplainers.map((f) => (
            <li key={f.id} id={f.id} className="scroll-mt-24 border-t border-ink-900 py-6">
              <h3 className="font-display text-xl font-bold">{f.name}</h3>
              <p className="mt-2 leading-relaxed text-ink-600">{f.text}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

export default async function ProductPage({ params }: Props) {
  const p = getProductFamily((await params).slug);
  if (!p) notFound();

  const crumbs = [
    { href: "/products", label: "Products" },
    { href: `/products/${p.slug}`, label: p.name },
  ];
  const apps = applicationCategories.filter((a) => p.applications.includes(a.slug));
  const isFusible = p.slug === "fusible-interlining";
  const isThermal = p.slug === "thermal-bond-non-woven";
  const isHome = p.slug === "home-textiles";
  const wanted = wantedBySlug[p.slug];
  const others = productFamilies.filter((o) => o.slug !== p.slug).slice(0, 3);
  const hasLab = showPlaceholders ? p.testValues.length > 0 : p.testValues.some((t) => t.value !== null);

  return (
    <>
      <JsonLd data={productJsonLd(p)} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      {isHome && <JsonLd data={homeTextilesJsonLd} />}

      <PageHero
        crumbs={crumbs}
        eyebrow={p.kicker}
        title={p.name}
        lead={p.lead}
        aside={
          p.image ? (
            <Photo name={p.image} priority aspect="16/11" sizes="(min-width: 1024px) 520px, 100vw" />
          ) : (
            <MaterialTile pattern={p.tile} className="aspect-[16/11]" label="Illustration" />
          )
        }
      >
        <SamplesButton location="product_hero" params={{ product: p.slug }} label="Request this sample" />
        {p.specSheet ? (
          <a href={p.specSheet} className="btn btn-ghost-light" download>
            <Icon name="download" />
            Spec sheet (PDF)
          </a>
        ) : (
          p.keySpecs.length > 0 && <PrintButton product={p.slug} />
        )}
      </PageHero>

      {/* Print-only letterhead so a printed page stands alone as a spec sheet. */}
      <div className="print-only container-x pt-2 text-sm">
        <p>
          <strong>{company.name}</strong> · Erode, Tamil Nadu, India · {company.email} · {siteUrl}/products/{p.slug}
        </p>
      </div>

      {p.keySpecs.length > 0 && (
        <section className="print-plain border-b border-line bg-card">
          <dl className="container-x grid sm:grid-cols-2 lg:grid-cols-4">
            {p.keySpecs.map((s, i) => (
              <div
                key={s.label}
                className={`border-line py-6 ${i > 0 ? "border-t sm:border-t-0" : ""} ${i > 1 ? "sm:border-t lg:border-t-0" : ""} ${i % 2 ? "sm:border-l sm:pl-6" : ""} ${i > 0 ? "lg:border-l lg:pl-6" : ""} pr-4`}
              >
                <dt className="eyebrow text-[0.6875rem] text-ink-600">{s.label}</dt>
                <dd className="num mt-2 text-[0.9375rem] font-medium leading-snug">{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {isFusible && (
        <>
          <Section
            id="articles"
            eyebrow="Article table"
            title="Thirteen articles, 23 to 80 GSM"
            lead="Every article is available in all three widths, in white, black or charcoal, with polyester or polyamide adhesive as paste dot or double dot."
            className="print-plain"
          >
            <ArticleTable />
            <div className="mt-10">
              <ContextCta
                location="product_articles_end"
                title="Not sure which weight you need?"
                text="Send us your shell fabric and the garment part. We will suggest two or three articles to trial."
                params={{ product: p.slug }}
                whatsappMessage="Hello Krisons, I need help choosing a fusible interlining article for "
              />
            </div>
          </Section>

          <Section tone="paper-2" eyebrow="Colors" title="Three colors" className="print-plain">
            <Swatches names={["White", "Black", "Charcoal"]} />
          </Section>

          <Section
            id="placement"
            eyebrow="Where it goes"
            title="Inside the garment"
            lead="Placement diagrams from our company profile, for shirts, tailoring, ladies’ and children’s wear."
            className="no-print"
          >
            <figure className="rounded-(--radius-card) border border-line bg-white p-4 sm:p-8">
              <Image
                src={microdotShirtDiagram.src}
                alt={microdotShirtDiagram.alt}
                width={microdotShirtDiagram.width}
                height={microdotShirtDiagram.height}
                sizes="(min-width: 1280px) 1150px, 100vw"
                className="w-full"
              />
              <figcaption className="eyebrow mt-4 text-[0.6875rem] text-ink-600">
                Shirt: placket · collar stand · cuff · main interlining · seams and armholes
              </figcaption>
            </figure>
            <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {microdotDiagrams.map((d) => (
                <li key={d.src}>
                  <figure className="flex h-full flex-col rounded-(--radius-card) border border-line bg-white p-3">
                    <div className="flex aspect-[3/4] items-center justify-center">
                      <Image
                        src={d.src}
                        alt={d.alt}
                        width={d.width}
                        height={d.height}
                        sizes="(min-width: 1024px) 180px, (min-width: 640px) 33vw, 50vw"
                        className="max-h-full w-auto object-contain"
                      />
                    </div>
                    <figcaption className="eyebrow mt-2 text-center text-[0.625rem] text-ink-600">{d.caption}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-ink-600">
              Setting up a press?{" "}
              <Link href="/fusing-guide" className="link">
                Read the fusing guide
              </Link>{" "}
              for starting temperatures, pressures and times.
            </p>
          </Section>
        </>
      )}

      {isThermal && (
        <>
          <Section id="specifications" eyebrow="Specification" title="What we can make" className="print-plain">
            <div className="grid gap-10 grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="relative overflow-x-auto rounded-(--radius-card) border border-line bg-card print:border-0">
                  <table className="spec-table">
                    <caption className="sr-only">Thermal bond non-woven specification</caption>
                    <tbody>
                      {thermalBondSpecs.map((s) => (
                        <tr key={s.label}>
                          <th scope="row" className="w-40 align-top font-semibold">
                            {s.label}
                          </th>
                          <td className={/\d/.test(s.value) ? "num" : ""}>{s.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-sm text-ink-600">
                  oz/yd² and inches are conversions of the GSM and centimeter figures, rounded to two decimals.
                </p>
              </div>
              <div className="no-print grid grid-cols-2 gap-3 lg:col-span-5">
                <Photo name="rollDark" caption aspect="1/1" sizes="(min-width: 1024px) 260px, 50vw" />
                <Photo name="rollDetail" caption aspect="1/1" sizes="(min-width: 1024px) 260px, 50vw" />
              </div>
            </div>
          </Section>
          <Section tone="paper-2" eyebrow="Colors" title="Five colors" className="print-plain">
            <Swatches names={colorSwatches.map((c) => c.name)} />
          </Section>
        </>
      )}

      {p.specFields && (
        <Section
          eyebrow="Made to specification"
          title="Tell us these, and we will confirm what we can make"
          lead="This product has no fixed article list. Send what you know; we answer in writing and sample before any order."
        >
          <div className="grid gap-10 grid-cols-1 lg:grid-cols-12">
            <ol className="lg:col-span-7">
              {p.specFields.map((f, i) => (
                <li key={f} className="flex items-baseline gap-5 border-t border-ink-900 py-5 last:border-b">
                  <span className="num text-sm text-copper-700">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-xl font-bold">{f}</span>
                </li>
              ))}
            </ol>
            <div className="lg:col-span-5">{wanted && <WantedPhoto item={wanted} />}</div>
          </div>
          <div className="mt-10">
            <ContextCta
              location="product_spec_end"
              title={`Send your ${p.shortName.toLowerCase()} specification`}
              text="A tech pack, a competitor's data sheet or a physical reference sample all work."
              params={{ product: p.slug }}
            />
          </div>
        </Section>
      )}

      {isHome && <HomeTextiles />}

      {hasLab && (
        <Section id="lab-data" eyebrow="Laboratory data" title="Test values" className="print-plain">
          <div className="max-w-3xl rounded-(--radius-card) border border-line bg-card">
            <TestValues id={isFusible ? "test-values-fusible" : "test-values-thermal-bond"} values={p.testValues} />
          </div>
        </Section>
      )}

      {!p.specSheet && showPlaceholders && (
        <div className="container-x no-print pb-10">
          <PlaceholderBlock id={specSheetTodo[p.slug]} title="Downloadable spec sheet (PDF)" className="max-w-3xl">
            Set <code>specSheet</code> for this product in src/lib/data/products.ts.
            {p.keySpecs.length > 0 && " Until then buyers get a “Print spec sheet” button instead."}
          </PlaceholderBlock>
        </div>
      )}

      {apps.length > 0 && (
        <Section tone="paper-2" eyebrow="End uses" title="Where buyers use it" className="no-print">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {apps.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/applications/${a.slug}`}
                  className="group flex h-full flex-col rounded-(--radius-card) border border-line bg-card p-5 transition-colors hover:border-ink-900"
                >
                  <h3 className="font-display text-xl font-bold">{a.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
                    {a.useCases.map((u) => u.name).join(" · ")}
                  </p>
                  <Icon name="arrow" className="mt-4 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section eyebrow="More from the plant" title="Other products" className="no-print">
        <ul className="grid gap-x-10 lg:grid-cols-3">
          {others.map((o) => (
            <li key={o.slug} className="border-t border-ink-900">
              <Link href={`/products/${o.slug}`} className="group flex items-center justify-between gap-4 py-5">
                <span>
                  <span className="block font-display text-xl font-bold">{o.name}</span>
                  <span className="eyebrow mt-1 block text-[0.6875rem] text-ink-600">{o.kicker}</span>
                </span>
                <Icon name="arrow" className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <ClosingCta
        location="product_final"
        title={`Request ${p.shortName.toLowerCase()} samples.`}
        lead="The form is pre-filled with this product. Add the weight, width and color you need."
        params={{ product: p.slug }}
      />
    </>
  );
}
