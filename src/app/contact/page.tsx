import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import ContactInfoBlock from "@/components/ContactInfoBlock";
import EnquiryForm from "@/components/EnquiryForm";
import { addresses, company, contacts } from "@/lib/data/company";
import { faqItems } from "@/lib/data/faq";
import { buildMetadata } from "@/lib/metadata";
import { faqJsonLd, jsonLdString } from "@/lib/jsonld";

export const metadata = buildMetadata({
  title: "Contact — Enquiries & Export Orders",
  description:
    "Send an enquiry to Krisons Marketing — non-woven interlining and coated fabric manufacturer in Tamil Nadu, India. International and domestic orders welcome.",
  path: "/contact",
});

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
        intro="Specifications, samples, volume supply — send an enquiry or reach us directly. We work with domestic and international buyers."
      />

      <Section
        id="enquiry"
        eyebrow="Enquiry"
        title="Send us your requirements"
        intro="Tell us the product, GSM, width and quantity you need — we typically respond within one business day."
      >
        <EnquiryForm />
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
        title="Chennai · Karur · Erode"
        intro="Head office in the state capital, branch office and factory in the centre of South India's textile hub."
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
