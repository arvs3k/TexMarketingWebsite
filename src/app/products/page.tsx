import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import SpecTable from "@/components/SpecTable";
import CTABand from "@/components/CTABand";
import {
  coatingTypes,
  microdotArticles,
  microdotDiagrams,
  microdotLegend,
  microdotShirtDiagram,
  SPECS_ON_REQUEST,
  specOnRequestProducts,
  thermalBondSpecs,
} from "@/lib/data/products";
import { buildMetadata } from "@/lib/metadata";
import { jsonLdString, productsJsonLd } from "@/lib/jsonld";
import { formatGsmValue } from "@/lib/units";

export const metadata = buildMetadata({
  title: "Products — Non-Woven Interlining Manufacturer, India",
  description:
    "Thermal bond non-woven and fusible interlining with published GSM and widths, plus woven interlining, coated fabric, and geo-textile with specs on request. Made at our manufacturing plant in Erode.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(productsJsonLd) }}
      />
      <PageHeader
        eyebrow="Products"
        title="Non-woven, interlining, and coated fabrics"
        intro="Goods are made at our manufacturing plant in Erode. Published metric specs are shown with US customary equivalents. Woven interlining, coated fabric, and geo-textile are listed with specs on request."
      />

      <Section
        id="thermal-bond"
        eyebrow="Core product"
        title="Thermal Bond Non-Woven Fabric"
        intro="Recycled or virgin polyester. Water permeable and breathable. Inches and oz/yd² are conversions of the centimeter and GSM figures, rounded half up to two decimal places."
      >
        <div className="grid items-start gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SpecTable
              caption="Thermal bond non-woven fabric specifications"
              headers={["Specification", "Detail"]}
              rows={thermalBondSpecs.map((s) => [s.label, s.value])}
            />
          </div>
          <div className="grid gap-4 lg:col-span-2">
            <Image
              src="/images/rolls-white.webp"
              alt="White thermal bond non-woven fabric rolls"
              width={1600}
              height={1067}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="rounded-lg border border-ink-900/10 shadow-sm"
            />
            <Image
              src="/images/roll-dark-closeup.webp"
              alt="Close-up of a charcoal non-woven fabric roll edge"
              width={1600}
              height={1067}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="rounded-lg border border-ink-900/10 shadow-sm"
            />
          </div>
        </div>
      </Section>

      <Section
        id="microdot"
        eyebrow="Fusible range"
        title="Microdot Fusible Interlining"
        intro="Thirteen articles. Used across ladies' and children's garments, blazers, pocket mouths, belt bands, belt loops, and quilt batting support."
        className="bg-paper-dark"
      >
        <SpecTable
          caption="Microdot fusible interlining article table"
          headers={[
            "Article",
            "Weight",
            "Width",
            "Color",
            "Coating quality",
            "Coating",
          ]}
          rows={microdotArticles.map((a) => [
            a.article,
            formatGsmValue(a.gsm),
            a.widths,
            a.colors,
            a.coatingQuality,
            a.coating,
          ])}
          footnote={microdotLegend}
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Image
            src="/images/microdot-blue.webp"
            alt="Microdot fusible interlining fused to blue garment fabric"
            width={1200}
            height={800}
            sizes="(min-width: 640px) 50vw, 100vw"
            className="rounded-lg border border-ink-900/10 shadow-sm"
          />
          <Image
            src="/images/microdot-texture-dark.webp"
            alt="Dot-coating pattern on dark microdot interlining"
            width={1600}
            height={1067}
            sizes="(min-width: 640px) 50vw, 100vw"
            className="rounded-lg border border-ink-900/10 object-cover shadow-sm"
          />
        </div>
        <h3 className="mt-12 font-display text-xl font-bold text-ink-900">
          Where it goes in a garment
        </h3>
        <figure className="mt-4 rounded-lg border border-ink-900/10 bg-white p-4 shadow-sm sm:p-6">
          <Image
            src={microdotShirtDiagram.src}
            alt={microdotShirtDiagram.alt}
            width={microdotShirtDiagram.width}
            height={microdotShirtDiagram.height}
            sizes="(min-width: 1152px) 1104px, 100vw"
            className="w-full"
          />
          <figcaption className="mt-2 text-sm text-ink-500">
            Shirt construction — placket, collar stand interlining, cuff, main
            interlining, and seam, armhole, and joint parts.
          </figcaption>
        </figure>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {microdotDiagrams.map((d) => (
            <figure
              key={d.src}
              className="rounded-lg border border-ink-900/10 bg-white p-3 shadow-sm"
            >
              <div className="flex aspect-[3/4] items-center justify-center">
                <Image
                  src={d.src}
                  alt={d.alt}
                  width={d.width}
                  height={d.height}
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                  className="max-h-full w-auto object-contain"
                />
              </div>
              <figcaption className="mt-2 text-center text-sm font-medium text-ink-700">
                {d.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section
        id="also-manufactured"
        eyebrow="Also manufactured"
        title="Woven interlining, coated fabric, and geo-textile"
        intro="Descriptions only. No weight, width, or construction number is published for these three. Each spec field says Specs on request."
      >
        <div className="space-y-12">
          {specOnRequestProducts.map((product) => (
            <article key={product.id} id={product.id} className="scroll-mt-24">
              <h3 className="font-display text-2xl font-bold text-ink-900">
                {product.name}
              </h3>
              <p className="mt-3 max-w-3xl leading-relaxed text-ink-700">
                {product.description}
              </p>
              <div className="mt-6">
                <SpecTable
                  caption={`${product.name} specifications`}
                  headers={["Specification", "Detail"]}
                  rows={product.specFields.map((field) => [
                    field,
                    SPECS_ON_REQUEST,
                  ])}
                />
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="coatings"
        eyebrow="Coating names"
        title="Coating types"
        intro="Published names are microdot, paste dot, double dot, and scatter coating. Paste dot and double dot are listed in polyester and polyamide on the thermal bond spec. The sentences under each name are general descriptions, not confirmed Krisons specifications."
        className="bg-paper-dark"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {coatingTypes.map((c) => (
            <div
              key={c.name}
              className="rounded-lg border border-ink-900/10 bg-white p-6 shadow-sm"
            >
              <h3 className="font-display text-lg font-bold text-ink-900">
                {c.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CTABand
        heading="Need a sample or a quote?"
        subtext="Share the product and any GSM, width, color, or coating you already know."
      />
    </>
  );
}
