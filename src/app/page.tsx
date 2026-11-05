import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import StatBadge from "@/components/StatBadge";
import CTABand from "@/components/CTABand";
import { company, pillars } from "@/lib/data/company";
import {
  applicationCategories,
  applicationsIntro,
} from "@/lib/data/applications";
import {
  FUSIBLE_WIDTHS_CM,
  THERMAL_BOND_GSM_MAX,
  THERMAL_BOND_GSM_MIN,
  THERMAL_BOND_WIDTH_MAX_CM,
  THERMAL_BOND_WIDTH_MIN_CM,
} from "@/lib/data/products";
import { buildMetadata } from "@/lib/metadata";
import {
  cmToInches,
  formatCmRange,
  formatGsmRange,
  formatWidthChoices,
  gsmToOzPerSqYd,
} from "@/lib/units";

const gsmRange = formatGsmRange(THERMAL_BOND_GSM_MIN, THERMAL_BOND_GSM_MAX);
const widthRange = formatCmRange(
  THERMAL_BOND_WIDTH_MIN_CM,
  THERMAL_BOND_WIDTH_MAX_CM,
);
const fusibleWidths = formatWidthChoices(FUSIBLE_WIDTHS_CM);

export const metadata = buildMetadata({
  title:
    "Krisons Marketing — Non-Woven Interlining & Coated Fabric Manufacturer, India",
  description:
    "Thermal bond non-woven, fusible and woven interlining, coated fabric, and geo-textile from our manufacturing plant in Erode. Established 1992. 2 million meters a month. Selling in India; starting to export, with the United States as the first market.",
  path: "/",
});

const productHighlights = [
  {
    name: "Thermal Bond Non-Woven Fabric",
    description: `Recycled or virgin polyester, ${gsmRange}, ${widthRange}. Water permeable and breathable.`,
    href: "/products#thermal-bond",
    link: "View specifications",
  },
  {
    name: "Fusible Interlining",
    description: `Microdot, polyester and polyamide paste dot, and double dot. Thirteen articles, ${gsmRange}, widths ${fusibleWidths}.`,
    href: "/products#microdot",
    link: "View specifications",
  },
  {
    name: "Woven Interlining",
    description:
      "Woven interlining for apparel, made at our manufacturing plant in Erode. Specifications are supplied on request.",
    href: "/products#woven-interlining",
    link: "View product",
  },
  {
    name: "Coated Fabric",
    description:
      "Coated fabric made at our manufacturing plant in Erode. Specifications are supplied on request.",
    href: "/products#coated-fabric",
    link: "View product",
  },
  {
    name: "Geo-textile",
    description:
      "Geo-textile made at our manufacturing plant in Erode. Specifications are supplied on request.",
    href: "/products#geo-textile",
    link: "View product",
  },
];

const buyerNotes = [
  {
    title: "Volume",
    text: "Up to 2,000,000 meters a month at our manufacturing plant in Erode, commissioned in December 2019.",
  },
  {
    title: "In-house laboratory",
    text: "Fabric can be checked in the in-house laboratory. Named test methods and reports are not published until they are confirmed.",
    href: "/quality",
    link: "Quality page",
  },
  {
    title: "United States",
    text: "We currently sell only in India and are starting to export, with the United States as the first market. Inquiries from US buyers are welcome.",
  },
  {
    title: "Range",
    text: "Thermal bond non-woven, fusible interlining, woven interlining, coated fabric, and geo-textile, for apparel interlining, filtration, automotive, and home textiles.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-900">
        <Image
          src="/images/hero-fabric-rolls.webp"
          alt="White and black thermal bond non-woven fabric rolls"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div
          aria-hidden
          className="dot-grid absolute inset-0 bg-gradient-to-r from-ink-950/80 via-ink-900/50 to-transparent"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-copper-100">
            Non-woven fabric manufacturer · India · Est. {company.established}
          </p>
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            The fabric you never see,
            <br />
            <span className="text-copper-600">engineered to be felt.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Krisons Marketing makes thermal bond non-woven, fusible
            interlining, woven interlining, coated fabric, and geo-textile at
            our manufacturing plant in Erode. The head office is in Chennai and
            the branch is in Karur.             Established in {company.established}, we currently sell only in
            India and are starting to export, with the United States as the
            first market.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="rounded-md bg-copper-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-copper-700"
            >
              Explore products
            </Link>
            <Link
              href="/contact#samples"
              className="rounded-md border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Request a sample or quote
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4">
            <StatBadge dark value="1992" label="Established" />
            <StatBadge dark value="2M" label="Meters per month" />
            <StatBadge
              dark
              value={`${THERMAL_BOND_GSM_MIN}–${THERMAL_BOND_GSM_MAX}`}
              label={`GSM (${gsmToOzPerSqYd(THERMAL_BOND_GSM_MIN).toFixed(2)}–${gsmToOzPerSqYd(THERMAL_BOND_GSM_MAX).toFixed(2)} oz/yd²)`}
            />
            <StatBadge
              dark
              value={`${THERMAL_BOND_WIDTH_MAX_CM} cm`}
              label={`${cmToInches(THERMAL_BOND_WIDTH_MAX_CM).toFixed(2)} in max width`}
            />
          </div>
        </div>
      </section>

      <Section
        eyebrow="Our philosophy"
        title="Built on three pillars"
        intro="What we can say about quality, export, and how to ask for a sample or a quote."
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

      <Section
        eyebrow="What we make"
        title="Product range"
        className="bg-paper-dark"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                {p.link} →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <section className="dot-grid bg-ink-900 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-copper-100">
            For US buyers
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Selling in India, starting to export
          </h2>
          <p className="mt-4 max-w-3xl text-white/70">
            We currently sell only in India. The first export market is the
            United States, and we welcome inquiries from US buyers.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {buyerNotes.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-white/10 bg-white/5 p-6"
              >
                <h3 className="font-display font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {item.text}
                </p>
                {item.href && (
                  <Link
                    href={item.href}
                    className="mt-4 inline-block text-sm font-semibold text-copper-100 hover:text-white"
                  >
                    {item.link} →
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/krisons-company-profile.pdf"
              className="rounded-md bg-copper-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-copper-700"
            >
              Download company profile (PDF, 1.3 MB)
            </a>
            <Link
              href="/contact#samples"
              className="rounded-md border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Request a sample or quote
            </Link>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Where it's used"
        title="One fabric, many industries"
        intro={applicationsIntro}
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
