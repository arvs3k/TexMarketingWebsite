import Link from "next/link";
import { company } from "@/lib/data/company";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { href: "/fusing-guide", label: "Fusing Guide" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 py-12 text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold text-white">
            KRISONS<span className="text-copper-600"> MARKETING</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
            {company.tagline}
          </p>
          <p className="mt-3 text-sm">{company.locations}</p>
        </div>

        <nav aria-label="Footer" className="text-sm">
          <p className="mb-3 font-semibold uppercase tracking-wider text-white">
            Explore
          </p>
          <ul className="space-y-2">
            {footerLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="transition-colors hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm">
          <p className="mb-3 font-semibold uppercase tracking-wider text-white">
            Get in touch
          </p>
          <p>
            <a
              href={`mailto:${company.email}`}
              className="transition-colors hover:text-white"
            >
              {company.email}
            </a>
          </p>
          <p className="mt-2">Established {company.established} · MSME</p>
          <p className="mt-2">Capacity: {company.capacityPerMonth} / month</p>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-4 pt-6 text-xs sm:px-6">
        © {new Date().getFullYear()} Krisons Marketing. All rights reserved.
      </div>
    </footer>
  );
}
