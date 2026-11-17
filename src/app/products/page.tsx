import Link from "next/link";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import ProfileDownload from "@/components/ProfileDownload";
import Section from "@/components/Section";
import { ClosingCta, ContextCta, SamplesButton } from "@/components/Cta";
import { coatingTypes, productFamilies } from "@/lib/data/products";
import { breadcrumbJsonLd, productListJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { requestHref } from "@/lib/links";

const crumbs = [{ href: "/products", label: "Products" }];

export const metadata = buildMetadata({
  title: "Products — Interlining, Non-Woven & Coated Fabric Manufacturer, India",
  description:
    "Six product families from one plant in Erode, India: fusible interlining, thermal bond non-woven, woven interlining, coated fabric, geo-textile and home textiles. Specs in metric and imperial.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={productListJsonLd} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Products"
        title="Interlining, non-woven and coated fabric, from our own lines."
        lead="Six product families made in one plant. Published specifications are given in metric and imperial; made-to-order fabrics are specified with you and sampled before anything else."
      >
        <SamplesButton location="products_hero" />
        <ProfileDownload location="products_hero" className="btn btn-ghost-light" />
      </PageHero>

      <Section>
        <ul className="reveal-row grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productFamilies.map((p, i) => (
            <li key={p.slug}>
              <ProductCard product={p} index={i} headingLevel={2} />
            </li>
          ))}
        </ul>
      </Section>

      <Section
        tone="paper-2"
        eyebrow="At a glance"
        title="Compare the range"
        lead="Fixed-specification products list their numbers here. The rest are made to your specification."
      >
        <div className="relative overflow-x-auto rounded-(--radius-card) border border-line bg-card">
          <table className="spec-table min-w-[44rem]">
            <caption className="sr-only">Comparison of Krisons product families</caption>
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Weight</th>
                <th scope="col">Width</th>
                <th scope="col">Colors</th>
                <th scope="col">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {productFamilies.map((p) => {
                const spec = (label: string) => p.keySpecs.find((s) => s.label === label)?.value;
                const fixed = p.keySpecs.length > 0;
                return (
                  <tr key={p.slug}>
                    <th scope="row" className="font-semibold">
                      <Link href={`/products/${p.slug}`} className="underline-offset-4 hover:underline">
                        {p.name}
                      </Link>
                    </th>
                    {fixed ? (
                      <>
                        <td className="num">{spec("Weight")}</td>
                        <td className="num">{spec("Width")}</td>
                        <td>{spec("Colors")}</td>
                      </>
                    ) : (
                      <td colSpan={3} className="text-ink-600">
                        {p.slug === "home-textiles" ? "Finished goods — see sizes on the product page" : "Made to your specification"}
                      </td>
                    )}
                    <td className="r whitespace-nowrap">
                      <Link href={requestHref({ product: p.slug })} className="link inline-flex items-center gap-1 text-sm">
                        Request sample
                        <Icon name="arrow" className="h-4 w-4" />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        id="coatings"
        eyebrow="Coating types"
        title="Four ways to apply the adhesive"
        lead="Which coating suits your fabric depends on its weight, handle and how the garment will be cared for. Tell us the shell fabric and we will suggest where to start."
      >
        <ul className="grid gap-x-10 sm:grid-cols-2">
          {coatingTypes.map((c, i) => (
            <li key={c.name} className="flex gap-5 border-t border-ink-900 py-6">
              <span className="num pt-1 text-sm text-copper-700">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-xl font-bold">{c.name}</h3>
                <p className="mt-2 leading-relaxed text-ink-600">{c.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-ink-600">
          Fusing fabric for the first time?{" "}
          <Link href="/fusing-guide" className="link">
            Read the fusing guide
          </Link>
          .
        </p>
        <div className="mt-12">
          <ContextCta
            location="products_index_end"
            title="Not sure which product fits?"
            text="Send us the end use and the fabric you are working with. We will suggest articles and sample them."
            params={{ product: "not-sure" }}
          />
        </div>
      </Section>

      <ClosingCta
        location="products_final"
        title="Feel it before you order it."
        lead="Tell us the product, weight and width. We will send samples."
      />
    </>
  );
}
