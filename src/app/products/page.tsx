import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import SpecTable from "@/components/SpecTable";
import CTABand from "@/components/CTABand";
import {
  coatingTypes,
  microdotArticles,
  microdotLegend,
  microdotUses,
  thermalBondSpecs,
} from "@/lib/data/products";
import { buildMetadata } from "@/lib/metadata";
import { jsonLdString, productsJsonLd } from "@/lib/jsonld";

export const metadata = buildMetadata({
  title: "Products — Non-Woven Interlining Manufacturer, India",
  description:
    "Thermal bond non-woven fabric (23–80 GSM, up to 200 cm) and microdot fusible interlining in 13 articles with polyester/polyamide paste dot and double dot coatings. Manufactured in India.",
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
        title="Non-woven & coated fabrics"
        intro="Manufactured on modern machinery in South India's textile heartland, with in-house testing — from lightweight interlinings to industrial geo-textiles."
      />

      <Section
        id="thermal-bond"
        eyebrow="Core product"
        title="Thermal Bond Non-Woven Fabric"
        intro="A breathable, water-permeable polyester web available in a wide range of weights, widths and colours."
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
        intro="Thirteen articles spanning 23–80 GSM. Used across ladies' and children's garments, blazers, pocket mouths, belt bands, belt loops and quilt wadding support."
        className="bg-paper-dark"
      >
        <SpecTable
          caption="Microdot fusible interlining article table"
          headers={[
            "Article",
            "GSM",
            "Width (cm)",
            "Colour",
            "Coating Quality",
            "Coating",
          ]}
          rows={microdotArticles.map((a) => [
            a.article,
            a.gsm,
            a.widths,
            a.colours,
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
        <ul className="mt-8 flex flex-wrap gap-2">
          {microdotUses.map((use) => (
            <li
              key={use}
              className="rounded-full border border-ink-900/15 bg-white px-4 py-1.5 text-sm text-ink-700"
            >
              {use}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="coatings"
        eyebrow="Coating technologies"
        title="Four coating systems"
        intro="Our coating line supports microdot, paste dot, double dot and scatter coating in polyester and polyamide."
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
        <p className="mt-8 max-w-3xl text-ink-700">
          The factory also produces <strong>geo-textile fabric</strong> and
          non-wovens for multiple industrial applications. If you need a
          specification not listed here, contact us — insight-driven product
          development is how we work.
        </p>
      </Section>

      <CTABand
        heading="Need a specific article or weight?"
        subtext="Share your GSM, width and coating requirements and we'll respond with specifications and samples."
      />
    </>
  );
}
