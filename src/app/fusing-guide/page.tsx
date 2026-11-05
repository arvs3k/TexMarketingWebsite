import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import SpecTable from "@/components/SpecTable";
import CTABand from "@/components/CTABand";
import {
  fusingIntro,
  fusingParameters,
  fusingSteps,
  preFusingChecklist,
} from "@/lib/data/fusing";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Fusing Guide",
  description:
    "Fusing notes for thermal bond non-woven interlining: preparation, temperature, pressure, and dwell. These settings are not confirmed Krisons figures. Goods are made at our manufacturing plant in Erode.",
  path: "/fusing-guide",
});

export default function FusingGuidePage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Fusing procedure guide"
        intro={fusingIntro}
      />

      <Section
        eyebrow="Before you start"
        title="Pre-fusing preparation"
      >
        <Image
          src="/images/fusing-press.webp"
          alt="Flat bed fusing press bonding interlining to patterned fabric"
          width={1200}
          height={800}
          sizes="(min-width: 768px) 66vw, 100vw"
          className="mb-10 w-full max-w-3xl rounded-lg border border-ink-900/10 shadow-sm"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {preFusingChecklist.map((item) => (
            <div
              key={item.name}
              className="rounded-lg border border-ink-900/10 bg-white p-6 shadow-sm"
            >
              <h3 className="font-display text-lg font-bold text-ink-900">
                {item.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Parameters"
        title="Standard fusing parameters"
        className="bg-paper-dark"
      >
        <SpecTable
          caption="Standard fusing parameters by press type"
          headers={fusingParameters.headers}
          rows={fusingParameters.rows}
          footnote={fusingParameters.footnote}
        />
      </Section>

      <Section eyebrow="Procedure" title="Step-by-step">
        <ol className="space-y-6">
          {fusingSteps.map((step, i) => (
            <li
              key={step.name}
              className="flex gap-5 rounded-lg border border-ink-900/10 bg-white p-6 shadow-sm"
            >
              <span className="font-display text-2xl font-bold text-copper-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-ink-900">
                  {step.name}
                </h3>
                <p className="mt-1 leading-relaxed text-ink-700">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <CTABand
        heading="Need settings for a specific article?"
        subtext="The ranges on this page are not confirmed Krisons settings. Ask us to confirm them for your fabric."
      />
    </>
  );
}
