import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import Section from "@/components/Section";
import { ClosingCta, ContextCta, SamplesButton } from "@/components/Cta";
import { applicationCategories, getApplication } from "@/lib/data/applications";
import { getProductFamily, microdotDiagrams, microdotShirtDiagram, productFamilies } from "@/lib/data/products";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return applicationCategories.map((a) => ({ slug: a.slug }));
}
export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const a = getApplication((await params).slug);
  if (!a) return {};
  return buildMetadata({ ...a.seo, path: `/applications/${a.slug}` });
}

export default async function ApplicationPage({ params }: Props) {
  const a = getApplication((await params).slug);
  if (!a) notFound();

  const crumbs = [
    { href: "/applications", label: "Applications" },
    { href: `/applications/${a.slug}`, label: a.shortTitle },
  ];
  const products = a.products.map((s) => getProductFamily(s)!);
  const others = applicationCategories.filter((o) => o.slug !== a.slug);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero crumbs={crumbs} eyebrow={a.audience} title={a.title} lead={a.intro}>
        <SamplesButton location="application_hero" params={{ application: a.slug, product: a.products[0] }} />
      </PageHero>

      <Section eyebrow="Typical uses" title="Where the fabric goes">
        <ul className="grid gap-x-10 sm:grid-cols-2">
          {a.useCases.map((u, i) => (
            <li key={u.name} className="flex gap-5 border-t border-ink-900 py-6">
              <span className="num pt-1 text-sm text-copper-700">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-xl font-bold">{u.name}</h3>
                <p className="mt-2 leading-relaxed text-ink-600">{u.description}</p>
              </div>
            </li>
          ))}
        </ul>

        {a.slug === "apparel" && (
          <div className="mt-12">
            <h3 className="eyebrow mb-4 text-ink-600">Placement in the garment</h3>
            <figure className="rounded-(--radius-card) border border-line bg-white p-4 sm:p-8">
              <Image
                src={microdotShirtDiagram.src}
                alt={microdotShirtDiagram.alt}
                width={microdotShirtDiagram.width}
                height={microdotShirtDiagram.height}
                sizes="(min-width: 1280px) 1150px, 100vw"
                className="w-full"
              />
            </figure>
            <ul className="mt-4 grid grid-cols-3 gap-4 lg:grid-cols-6">
              {microdotDiagrams.map((d) => (
                <li key={d.src} className="rounded-(--radius-card) border border-line bg-white p-3">
                  <div className="flex aspect-[3/4] items-center justify-center">
                    <Image
                      src={d.src}
                      alt={d.alt}
                      width={d.width}
                      height={d.height}
                      sizes="(min-width: 1024px) 180px, 33vw"
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>

      <Section tone="paper-2" eyebrow="What to ask for" title={`Products for ${a.shortTitle.toLowerCase()}`}>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <li key={p.slug}>
              <ProductCard product={p} index={productFamilies.indexOf(p)} />
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <ContextCta
            location="application_products_end"
            title={`Sourcing for ${a.shortTitle.toLowerCase()}?`}
            text="Tell us the part and the performance you need. We will suggest articles and send samples."
            params={{ application: a.slug, product: a.products[0] }}
            whatsappMessage={`Hello Krisons, I am sourcing fabric for ${a.title.toLowerCase()}: `}
          />
        </div>
      </Section>

      <Section eyebrow="Other industries" title="Also made here">
        <ul className="grid gap-x-10 lg:grid-cols-3">
          {others.map((o) => (
            <li key={o.slug} className="border-t border-ink-900">
              <Link href={`/applications/${o.slug}`} className="group flex items-center justify-between gap-4 py-5">
                <span className="font-display text-xl font-bold">{o.title}</span>
                <Icon name="arrow" className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <ClosingCta
        location="application_final"
        title="Start with samples."
        lead="Test the fabric on your own line before you decide anything."
        params={{ application: a.slug, product: a.products[0] }}
      />
    </>
  );
}
