import Link from "next/link";

interface CTABandProps {
  heading?: string;
  subtext?: string;
}

export default function CTABand({
  heading = "Let's discuss your fabric requirements",
  subtext = "Talk to us about specifications, samples and volume supply.",
}: CTABandProps) {
  return (
    <section className="dot-grid bg-ink-900 py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-2 text-white/70">{subtext}</p>
        </div>
        <Link
          href="/contact#enquiry"
          className="inline-block shrink-0 rounded-md bg-copper-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-copper-700"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}
