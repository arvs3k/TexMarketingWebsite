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
    "How to fuse thermal bond non-woven interlining: preparation checklist, industry-standard temperature, pressure and dwell-time parameters, and a step-by-step procedure.",
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
        heading="Questions about fusing our interlinings?"
        subtext="Our team can advise on parameters for your specific fabric and equipment."
      />
    </>
  );
}
