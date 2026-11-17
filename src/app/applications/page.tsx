import Link from "next/link";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { ClosingCta, SamplesButton } from "@/components/Cta";
import { applicationCategories, applicationsIntro } from "@/lib/data/applications";
import { getProductFamily } from "@/lib/data/products";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";

const crumbs = [{ href: "/applications", label: "Applications" }];

export const metadata = buildMetadata({
  title: "Applications — Apparel, Filtration, Automotive & Home Textiles",
  description:
    "Where Krisons interlining and non-woven fabrics are used: apparel interlining, filtration and technical textiles, automotive interiors and home textiles. Find the right product for your industry.",
  path: "/applications",
});

export default function ApplicationsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero crumbs={crumbs} eyebrow="Applications" title="Find your industry." lead={applicationsIntro}>
        <SamplesButton location="applications_hero" />
      </PageHero>

      <Section>
        <ul className="grid gap-5 md:grid-cols-2">
          {applicationCategories.map((a, i) => (
            <li key={a.slug}>
              <article className="flex h-full flex-col rounded-(--radius-card) border border-line bg-card p-6 sm:p-8">
                <span className="num text-sm text-copper-700">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight">
                  <Link href={`/applications/${a.slug}`} className="underline-offset-4 hover:underline">
                    {a.title}
                  </Link>
                </h2>
                <p className="eyebrow mt-3 text-[0.6875rem] text-ink-600">{a.audience}</p>
                <p className="mt-4 leading-relaxed text-ink-600">{a.intro}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {a.useCases.map((u) => (
                    <li key={u.name} className="rounded-full border border-line bg-paper px-3 py-1 text-sm">
                      {u.name}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex-1 border-t border-line pt-5">
                  <p className="eyebrow mb-2 text-[0.6875rem] text-ink-600">Products</p>
                  <ul className="space-y-1.5">
                    {a.products.map((slug) => {
                      const p = getProductFamily(slug)!;
                      return (
                        <li key={slug}>
                          <Link href={`/products/${slug}`} className="link">
                            {p.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <Link
                  href={`/applications/${a.slug}`}
                  className="mt-6 inline-flex items-center gap-2 font-semibold"
                  aria-label={`${a.title}: uses and products`}
                >
                  Uses and products
                  <Icon name="arrow" />
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </Section>

      <ClosingCta
        location="applications_final"
        title="Your use isn't listed?"
        lead="Tell us what the fabric has to do. If we can make it, we will sample it; if we cannot, we will say so."
      />
    </>
  );
}
