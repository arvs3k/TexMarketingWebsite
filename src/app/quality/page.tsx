import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import CTABand from "@/components/CTABand";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Quality — In-house Laboratory",
  description:
    "In-house laboratory checks at our manufacturing plant in Erode. Named test methods and reports are not published until they are confirmed.",
  path: "/quality",
});

export default function QualityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Quality"
        title="In-house laboratory"
        intro="Krisons Marketing has an in-house testing laboratory at our manufacturing plant in Erode. This page says only that. It does not name a certification, a test method, a sampling plan, or a result."
      />

      <Section eyebrow="What is published" title="Laboratory checks, in general">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-ink-700">
            <p>
              The company profile lists quality control as an in-house testing
              laboratory. Fabric made at our manufacturing plant in Erode can
              be checked there. The photographs show the laboratory and
              equipment. They are not a test report.
            </p>
            <p>
              No pass/fail limit, certificate, or claim about how often fabric
              is checked is stated here.
            </p>
          </div>
          <div className="grid gap-4">
            <Image
              src="/images/testing-lab.webp"
              alt="In-house testing laboratory at our manufacturing plant in Erode"
              width={1200}
              height={567}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="rounded-lg border border-ink-900/10 shadow-sm"
            />
            <Image
              src="/images/testing-equipment.webp"
              alt="Equipment in the in-house testing laboratory"
              width={1200}
              height={567}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="rounded-lg border border-ink-900/10 shadow-sm"
            />
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Not yet published"
        title="Methods and reports"
        className="bg-paper-dark"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {/*
            TODO: For verification by K. Chandrasekaran — named test methods.
            Placeholder only. Do not insert a method name, standard number,
            equipment model, or pass/fail limit until it is confirmed.
          */}
          <div className="rounded-lg border border-dashed border-copper-600/60 bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-copper-700">
              TODO
            </p>
            <h3 className="mt-2 font-display text-lg font-bold text-ink-900">
              Named test methods
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              None confirmed for publication. This block stays empty until a
              method name and what it measures are confirmed. No standard
              number or pass/fail limit is listed.
            </p>
          </div>
          {/*
            TODO: For verification by K. Chandrasekaran — test reports.
            Placeholder only. Do not link or describe a report until one is
            approved for publication.
          */}
          <div className="rounded-lg border border-dashed border-copper-600/60 bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-copper-700">
              TODO
            </p>
            <h3 className="mt-2 font-display text-lg font-bold text-ink-900">
              Test reports
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              None confirmed for publication. This block stays empty until a
              report is approved to show. No sample result is described here.
            </p>
          </div>
        </div>
      </Section>

      <CTABand
        heading="Questions about a check on a specific article?"
        subtext="Ask through Samples & inquiries. We will only describe a method or a report after it is confirmed."
      />
    </>
  );
}
