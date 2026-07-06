import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import ContactInfoBlock from "@/components/ContactInfoBlock";
import { addresses, company, contacts } from "@/lib/data/company";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Krisons Marketing — head office in Chennai, branch office in Karur, factory in Erode. Call, email or visit us to discuss non-woven and coated fabric requirements.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to us"
        intro="Specifications, samples, volume supply — reach us directly by phone or email."
      />

      <Section eyebrow="People" title="Who to call">
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
        className="bg-paper-dark"
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
    </>
  );
}
