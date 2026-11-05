import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import CTABand from "@/components/CTABand";
import {
  fabricExplainers,
  homeTextileProducts,
  pillowFabricChoice,
  type HomeTextileProduct,
} from "@/lib/data/homeTextiles";
import { company } from "@/lib/data/company";
import { buildMetadata, siteUrl } from "@/lib/metadata";
import { jsonLdString } from "@/lib/jsonld";

export const metadata = buildMetadata({
  title: "Home Textiles — Pillows, Runners, and Mattress Pieces",
  description:
    "Finished home textiles from our manufacturing plant in Erode: hard and soft pillows, a cushion, brown and navy bed runners, a quilted mattress protector, and a micro polyester mattress topper. Sizes in inches and centimeters.",
  path: "/home-textiles",
});

const homeTextilesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: homeTextileProducts.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Product",
      name: product.name,
      description: [product.summary, `Size: ${product.size}.`, product.weight ? `Weight: ${product.weight}.` : "Weight is not published.", ...product.notes].join(" "),
      image: `${siteUrl}${product.image}`,
      brand: { "@type": "Brand", name: company.name },
      url: `${siteUrl}/home-textiles#${product.id}`,
    },
  })),
};

function ProductCard({ product }: { product: HomeTextileProduct }) {
  return (
    <article
      id={product.id}
      className="scroll-mt-24 overflow-hidden rounded-lg border border-ink-900/10 bg-white shadow-sm"
    >
      <Image
        src={product.image}
        alt={product.alt}
        width={product.width}
        height={product.height}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="h-auto w-full"
      />
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-ink-900">
          {product.name}
        </h3>
        <p className="mt-2 leading-relaxed text-ink-700">{product.summary}</p>
        <dl className="mt-4 space-y-2 text-sm">
          <div className="grid grid-cols-[5.5rem_1fr] gap-3">
            <dt className="font-semibold text-ink-900">Size</dt>
            <dd className="text-ink-700">{product.size}</dd>
          </div>
          <div className="grid grid-cols-[5.5rem_1fr] gap-3">
            <dt className="font-semibold text-ink-900">Weight</dt>
            <dd className="text-ink-700">
              {product.weight ?? "Not published"}
            </dd>
          </div>
        </dl>
        {product.notes.length > 0 && (
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-700">
            {product.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export default function HomeTextilesPage() {
  const pillows = homeTextileProducts.filter((product) =>
    ["hard-pillow", "soft-microfiber-pillow", "cushion"].includes(product.id),
  );
  const runners = homeTextileProducts.filter((product) =>
    product.id.startsWith("bed-runner"),
  );
  const mattress = homeTextileProducts.filter((product) =>
    product.id.startsWith("mattress"),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(homeTextilesJsonLd) }}
      />
      <PageHeader
        eyebrow="Home textiles"
        title="Finished home textiles"
        intro="Krisons Marketing makes these finished goods at our manufacturing plant in Erode. Sizes are in inches and centimeters. A published weight is in grams, ounces, and pounds. Words printed on the pictures are not specifications unless this page repeats them. Prices, minimum orders, and lead times are not listed."
      />

      <Section
        eyebrow="Pillows"
        title="Pillows and cushion"
        intro={pillowFabricChoice}
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {pillows.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-500">
          The cushion does not have a published fabric choice. Cotton is a
          pillow fabric. No separate cotton photograph is published.
        </p>
      </Section>

      <Section
        eyebrow="Bed"
        title="Bed runners"
        className="bg-paper-dark"
        intro="Each runner is 20 × 90 in and is shown with two matching square mats. Mat size and weight are not published."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {runners.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Mattress" title="Mattress protector and topper">
        <div className="grid gap-6 lg:grid-cols-2">
          {mattress.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Materials"
        title="Fabrics in this range"
        className="bg-paper-dark"
        intro="These reference graphics name materials used for the home textiles above. Only the sentences under each graphic are specifications."
      >
        <div className="grid gap-8 lg:grid-cols-2">
          {fabricExplainers.map((fabric) => (
            <article key={fabric.id} id={fabric.id} className="scroll-mt-24">
              <h3 className="font-display text-xl font-bold text-ink-900">
                {fabric.name}
              </h3>
              <p className="mt-2 leading-relaxed text-ink-700">{fabric.text}</p>
              <Image
                src={fabric.image}
                alt={fabric.alt}
                width={fabric.width}
                height={fabric.height}
                sizes={fabric.small ? "384px" : "(min-width: 1024px) 40vw, 100vw"}
                className={`mt-4 h-auto w-full rounded-lg border border-ink-900/10 bg-white shadow-sm ${
                  fabric.small ? "max-w-sm" : ""
                }`}
              />
            </article>
          ))}
        </div>
      </Section>

      <CTABand
        heading="Ask for a home-textile sample or quote"
        subtext="Name the piece and the size. This page does not list a price, a minimum, or a lead time."
      />
    </>
  );
}
