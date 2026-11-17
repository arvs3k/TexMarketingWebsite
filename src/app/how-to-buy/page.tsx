import Faq from "@/components/Faq";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { ClosingCta, ContextCta, SamplesButton, VideoCallButton, WhatsAppButton } from "@/components/Cta";
import { buyingIntro, buyingSteps, documentation, exportStatement, videoCallOffer } from "@/lib/data/buying";
import { faqGroups, faqItems } from "@/lib/data/faq";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";

const crumbs = [{ href: "/how-to-buy", label: "How to buy" }];

export const metadata = buildMetadata({
  title: "How to Buy — Samples, Trial Orders & Export Enquiries",
  description:
    "How international buyers order interlining and non-woven fabric from Krisons in India: samples first, specification confirmed in writing, a trial order, then production. Documents and FAQ.",
  path: "/how-to-buy",
});

export default function HowToBuyPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd} />
      <PageHero
        crumbs={crumbs}
        eyebrow="How to buy · Export buyers"
        title="Start with a sample. Commit when you are sure."
        lead={buyingIntro}
      >
        <SamplesButton location="buy_hero" />
        <WhatsAppButton location="buy_hero" />
      </PageHero>

      <Section eyebrow="The path" title="Five steps, each one checked before the next">
        <ol>
          {buyingSteps.map((s) => (
            <li key={s.step} className="reveal grid gap-3 border-t border-ink-900 py-7 last:border-b sm:grid-cols-12 sm:gap-6">
              <span className="num text-4xl font-medium tracking-tight text-copper-700 sm:col-span-2">{s.step}</span>
              <div className="sm:col-span-7">
                <h3 className="font-display text-2xl font-bold">{s.title}</h3>
                <p className="mt-2 text-lg leading-relaxed text-ink-600">{s.text}</p>
              </div>
              <p className="flex items-start gap-2 text-sm font-semibold sm:col-span-3 sm:justify-end sm:text-right">
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-copper-700" />
                {s.youGet}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <ContextCta
            location="buy_steps_end"
            title="Step one takes two minutes."
            text="Product, weight, width, quantity, destination."
          />
        </div>
      </Section>

      <Section tone="ink" eyebrow="Plain speaking" title={exportStatement.heading}>
        <div className="grid gap-10 grid-cols-1 lg:grid-cols-12">
          <div className="space-y-5 text-lg leading-relaxed text-ink-200 lg:col-span-7">
            {exportStatement.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="rounded-(--radius-card) border border-white/15 bg-ink-800 p-6 lg:col-span-5">
            <p className="font-display text-xl font-bold">{videoCallOffer.heading}</p>
            <p className="mt-2 leading-relaxed text-ink-300">{videoCallOffer.text}</p>
            <div className="mt-5">
              <VideoCallButton location="buy_export" className="btn btn-primary" />
            </div>
          </div>
        </div>
      </Section>

      <Section id="documents" tone="paper-2" eyebrow="Paperwork" title={documentation.heading} lead={documentation.intro}>
        <ul className="grid gap-x-10 sm:grid-cols-2">
          {documentation.items.map((d) => (
            <li key={d.title} className="border-t border-ink-900 py-6">
              <h3 className="font-display text-xl font-bold">{d.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-600">{d.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="faq" eyebrow="FAQ" title="Questions buyers ask">
        <div className="space-y-12">
          {faqGroups.map((g) => (
            <div key={g.id} className="grid gap-4 grid-cols-1 lg:grid-cols-12">
              <h3 className="eyebrow pt-1 text-ink-600 lg:col-span-3">{g.title}</h3>
              <div className="lg:col-span-9">
                <Faq items={faqItems.filter((f) => f.group === g.id)} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <ClosingCta
        location="buy_final"
        title="Ready for step one?"
        lead="Tell us the product, weight and width. We will send samples."
      />
    </>
  );
}
