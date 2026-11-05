import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import SpecTable from "@/components/SpecTable";
import CTABand from "@/components/CTABand";
import {
  companyFacts,
  pillars,
  timeline,
  whyPartners,
} from "@/lib/data/company";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About Us — Non-Woven Fabric Manufacturer Since 1992",
  description:
    "Krisons Marketing, established 1992. Head office in Chennai, branch in Karur, goods made at our manufacturing plant in Erode. 2 million meters a month. Selling in India and starting to export, with the United States as the first market.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Three decades of textile work"
        intro="Krisons Marketing is a proprietorship established in 1992. The head office is in Chennai and the branch is in Karur. Goods are made at our manufacturing plant in Erode. We sell in India and are starting to export, with the United States as the first market."
      />

      <Section eyebrow="Our journey" title="From hardware to textiles">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Timeline items={timeline} />
          <div className="grid gap-4">
            <Image
              src="/images/factory-building.webp"
              alt="Exterior of our manufacturing plant in Erode, commissioned 2019"
              width={1200}
              height={541}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="rounded-lg border border-ink-900/10 shadow-sm"
            />
            <Image
              src="/images/factory-floor.webp"
              alt="Non-woven fabric production line at our manufacturing plant in Erode"
              width={1200}
              height={567}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="rounded-lg border border-ink-900/10 shadow-sm"
            />
            <Image
              src="/images/testing-lab.webp"
              alt="In-house testing laboratory at our manufacturing plant in Erode"
              width={1200}
              height={567}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="rounded-lg border border-ink-900/10 shadow-sm"
            />
            <p className="text-sm text-ink-500">
              Our manufacturing plant in Erode, the production line, and the
              in-house testing laboratory —{" "}
              <Link
                href="/gallery"
                className="font-semibold text-copper-600 hover:text-copper-700"
              >
                see more in the gallery →
              </Link>
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="The business today"
        title="What we make and where"
        className="bg-paper-dark"
      >
        <p className="max-w-3xl text-lg leading-relaxed text-ink-700">
          The range is thermal bond non-woven, fusible interlining, woven
          interlining, coated fabric, and geo-textile. Uses include apparel
          interlining, filtration, automotive, and home textiles. Goods are
          made at our manufacturing plant in Erode.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[...pillars, ...whyPartners].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-ink-900/10 bg-white p-6 shadow-sm"
            >
              <h3 className="font-display text-lg font-bold text-ink-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="At a glance"
        title="Company profile"
        intro="Key facts about the firm, our manufacturing plant in Erode, and published capabilities."
      >
        <SpecTable
          caption="Krisons Marketing company facts"
          headers={["Detail", "Value"]}
          rows={companyFacts.map((f) => [f.label, f.value])}
        />
        <p className="mt-6">
          <a
            href="/krisons-company-profile.pdf"
            className="font-semibold text-copper-600 hover:text-copper-700"
          >
            Download the full company profile (PDF, 1.3 MB) →
          </a>
        </p>
      </Section>

      <CTABand />
    </>
  );
}
