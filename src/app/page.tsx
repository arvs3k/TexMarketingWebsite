import Link from "next/link";
import Section from "@/components/Section";
import StatBadge from "@/components/StatBadge";
import CTABand from "@/components/CTABand";
import { company, pillars } from "@/lib/data/company";
import { applicationCategories } from "@/lib/data/applications";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Krisons Marketing — Thermal Bond Non-Woven & Coated Fabrics",
  description:
    "Manufacturer of thermal bond non-woven interlining, microdot fusible interlining and coated fabrics. Established 1992 · Chennai, Karur, Erode · 2 million metres per month.",
  path: "/",
});

const productHighlights = [
  {
    name: "Thermal Bond Non-Woven Fabric",
    description:
      "Recycled or virgin polyester, 23–80 GSM, up to 200 cm wide. Water permeable and breathable.",
    href: "/products",
  },
  {
    name: "Microdot Fusible Interlining",
    description:
      "13 articles from 23 to 80 GSM with polyester or polyamide paste dot and double dot coating.",
    href: "/products#microdot",
  },
  {
    name: "Coated & Geo-Textile Fabrics",
    description:
      "Microdot, paste dot, double dot and scatter coating, plus geo-textile fabric for industrial use.",
    href: "/products#coatings",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="dot-grid bg-ink-900">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-copper-100">
            {company.locations} · Established {company.established}
          </p>
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            The fabric you never see,
            <br />
            <span className="text-copper-600">engineered to be felt.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Krisons Marketing manufactures thermal bond non-woven interlining
            and coated fabrics for apparel, industrial, automotive and
            home-textile applications — three decades of textile expertise from
            South India&apos;s textile heartland.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="rounded-md bg-copper-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-copper-700"
            >
              Explore products
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contact us
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4">
            <StatBadge dark value="1992" label="Established" />
            <StatBadge dark value="2M m" label="Per month capacity" />
            <StatBadge dark value="23–80" label="GSM range" />
            <StatBadge dark value="200 cm" label="Max width" />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <Section
        eyebrow="Our philosophy"
        title="Built on three pillars"
        intro="A trusted partner for businesses requiring high-performance non-woven and industrial fabrics."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-lg border border-ink-900/10 bg-white p-6 shadow-sm"
            >
              <h3 className="font-display text-lg font-bold text-ink-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Products */}
      <Section
        eyebrow="What we make"
        title="Product range"
        className="bg-paper-dark"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {productHighlights.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              className="group rounded-lg border border-ink-900/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="font-display text-lg font-bold text-ink-900 group-hover:text-copper-600">
                {p.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {p.description}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-copper-600">
                View specifications →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Applications teaser */}
      <Section
        eyebrow="Where it's used"
        title="One fabric, many industries"
        intro="Thermal bond non-woven interlining is a silent component — you rarely see it, but you feel its effect in the structure of everyday items."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {applicationCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/applications#${cat.slug}`}
              className="group rounded-lg bg-ink-900 p-6 transition-colors hover:bg-ink-800"
            >
              <h3 className="font-display font-bold text-white">{cat.title}</h3>
              <p className="mt-2 text-sm text-white/60">{cat.intro}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-copper-100 group-hover:text-white">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
