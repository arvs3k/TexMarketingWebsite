import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { ClosingCta, ContextCta } from "@/components/Cta";
import PrintButton from "@/components/PrintButton";
import { fusingAdvice, fusingIntro, fusingParameters, fusingSteps, preFusingChecklist } from "@/lib/data/fusing";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";

const crumbs = [
  { href: "/products", label: "Products" },
  { href: "/fusing-guide", label: "Fusing guide" },
];

export const metadata = buildMetadata({
  title: "Fusing Guide — How to Fuse Non-Woven Interlining",
  description:
    "How to fuse non-woven fusible interlining: preparation checklist, starting temperature, pressure and time for flat-bed and continuous presses, and a four-step procedure.",
  path: "/fusing-guide",
});

export default function FusingGuidePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero crumbs={crumbs} eyebrow="Technical guide" title="How to fuse interlining" lead={fusingIntro}>
        <PrintButton product="fusing-guide" />
      </PageHero>

      <Section eyebrow="Before you start" title="Three checks" className="print-plain">
        <ol className="grid gap-x-10 lg:grid-cols-3">
          {preFusingChecklist.map((item, i) => (
            <li key={item.name} className="border-t border-ink-900 py-6">
              <span className="num text-sm text-copper-700">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-display text-xl font-bold">{item.name}</h3>
              <p className="mt-2 leading-relaxed text-ink-600">{item.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="paper-2" eyebrow="Starting parameters" title="Temperature, pressure, time" className="print-plain">
        <div className="relative overflow-x-auto rounded-(--radius-card) border border-line bg-card">
          <table className="spec-table min-w-[34rem]">
            <caption className="sr-only">Starting fusing parameters by press type</caption>
            <thead>
              <tr>
                {fusingParameters.headers.map((h) => (
                  <th key={h} scope="col">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fusingParameters.rows.map(([name, ...cells]) => (
                <tr key={name}>
                  <th scope="row" className="font-semibold">
                    {name}
                  </th>
                  {cells.map((c) => (
                    <td key={c} className="num">
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-ink-600">{fusingParameters.footnote}</p>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-700">{fusingAdvice}</p>
      </Section>

      <Section eyebrow="Procedure" title="Four steps" className="print-plain">
        <ol>
          {fusingSteps.map((s, i) => (
            <li key={s.name} className="grid gap-3 border-t border-ink-900 py-7 last:border-b sm:grid-cols-12 sm:gap-6">
              <span className="num text-4xl font-medium tracking-tight text-copper-700 sm:col-span-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="sm:col-span-10">
                <h3 className="font-display text-2xl font-bold">{s.name}</h3>
                <p className="mt-2 max-w-3xl text-lg leading-relaxed text-ink-600">{s.description}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <ContextCta
            location="fusing_end"
            title="Want settings for a specific article?"
            text="Tell us your shell fabric and press type."
            params={{ product: "fusible-interlining" }}
            whatsappMessage="Hello Krisons, I would like fusing settings for "
          />
        </div>
      </Section>

      <ClosingCta
        location="fusing_final"
        title="Test it on your own press."
        lead="Request fusible interlining samples in the weights you are considering."
        params={{ product: "fusible-interlining" }}
      />
    </>
  );
}
