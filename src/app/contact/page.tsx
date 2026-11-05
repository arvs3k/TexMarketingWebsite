import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import ContactInfoBlock from "@/components/ContactInfoBlock";
import EnquiryForm from "@/components/EnquiryForm";
import { addresses, company, contacts } from "@/lib/data/company";
import { faqItems } from "@/lib/data/faq";
import { buildMetadata } from "@/lib/metadata";
import { faqJsonLd, jsonLdString } from "@/lib/jsonld";

export const metadata = buildMetadata({
  title: "Contact — Samples & Inquiries",
  description:
    "Request a sample or a quote from Krisons Marketing. We currently sell only in India and are starting to export, with the United States as the first market. No prices or delivery terms are published.",
  path: "/contact",
});

const sampleSteps = [
  {
    title: "Name the product and the end use",
    text: "Tell us which product you need: thermal bond non-woven, fusible interlining (microdot, polyester or polyamide paste dot, or double dot), woven interlining, coated fabric, or geo-textile. If you know the end use, say whether it is apparel interlining, filtration, automotive, or home textiles.",
  },
  {
    title: "Send the specs you already have",
    text: "Include GSM and ounces per square yard, width in centimeters and inches, color, and coating when you have them. Where a product is marked Specs on request, say which details you need confirmed.",
  },
  {
    title: "Say sample, quote, or both",
    text: "Say which of those you want. If you want a quote, put the quantity you have in mind in the message. Prices, discounts, delivery dates, lead times, minimum orders, and payment terms are not published here, and this site does not state a response time.",
  },
  {
    title: "Use the form or email",
    text: `Use the form on this page, or email ${company.email}. Include your name, company, email, and country, and the destination country if it is different.`,
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(faqJsonLd) }}
      />
      <PageHeader
        eyebrow="Contact"
        title="Talk to us"
        intro="We currently sell only in India and are starting to export, with the United States as the first market. Use Samples & inquiries to request a sample or a quote."
      />

      <Section
        id="samples"
        eyebrow="How to ask"
        title="Samples & inquiries"
        intro="Request a sample, a quote, or both. We follow up by email. This page does not list prices, discounts, delivery dates, lead times, minimum orders, or payment terms."
      >
        <ol className="mb-10 space-y-4">
          {sampleSteps.map((step, i) => (
            <li
              key={step.title}
              className="flex gap-5 rounded-lg border border-ink-900/10 bg-white p-6 shadow-sm"
            >
              <span className="font-display text-2xl font-bold text-copper-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-1 leading-relaxed text-ink-700">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div id="enquiry" className="scroll-mt-24">
          <EnquiryForm />
        </div>
      </Section>

      <Section eyebrow="People" title="Who to call" className="bg-paper-dark">
        <div className="grid gap-6 sm:grid-cols-2">
          {contacts.map((person) => (
            <div
              key={person.name}
              className="rounded-lg border border-ink-900/10 bg-white p-6 shadow-sm"
            >
              <h3 className="font-display text-lg font-bold text-ink-900">
                {person.name}
              </h3>
              <p className="text-sm uppercase tracking-wider text-ink-500">
                {person.role}
              </p>
              <a
                href={`tel:${person.phone.replace(/\s/g, "")}`}
                className="mt-3 inline-block font-semibold text-copper-600 hover:text-copper-700"
              >
                {person.phone}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-lg">
          Email:{" "}
          <a
            href={`mailto:${company.email}`}
            className="font-semibold text-copper-600 hover:text-copper-700"
          >
            {company.email}
          </a>
        </p>
      </Section>

      <Section
        eyebrow="Locations"
        title="Where we operate"
        intro="Head office in Chennai, branch office in Karur, and our manufacturing plant in Erode."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {addresses.map((addr) => (
            <ContactInfoBlock
              key={addr.title}
              title={addr.title}
              lines={[...addr.lines]}
            />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="FAQ"
        title="Common questions from buyers"
        className="bg-paper-dark"
      >
        <div className="max-w-3xl space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-lg border border-ink-900/10 bg-white p-5 shadow-sm"
            >
              <summary className="cursor-pointer list-none font-display font-bold text-ink-900 marker:hidden">
                <span className="mr-2 text-copper-600 transition-transform group-open:inline-block group-open:rotate-90">
                  ›
                </span>
                {item.question}
              </summary>
              <p className="mt-3 leading-relaxed text-ink-700">{item.answer}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
