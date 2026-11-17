import Link from "next/link";
import ProfileDownload from "@/components/ProfileDownload";
import TrackedLink from "@/components/TrackedLink";
import Icon from "@/components/Icon";
import { siteConfig } from "@/lib/config";
import { addresses, company, contacts } from "@/lib/data/company";
import { applicationCategories } from "@/lib/data/applications";
import { productFamilies } from "@/lib/data/products";
import { footerNav } from "@/lib/data/site";
import { whatsappUrl } from "@/lib/whatsapp";

const headingClass = "eyebrow mb-4 text-ink-300";
const linkClass = "text-white/90 underline-offset-4 transition-colors hover:text-white hover:underline";

export default function Footer() {
  return (
    <footer className="site-footer on-ink bg-ink-950 pb-24 text-sm text-ink-300 lg:pb-0">
      <div className="container-x grid gap-12 border-t border-white/10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.3fr]">
        <div>
          <p className="font-display text-2xl font-extrabold tracking-[0.08em] text-white">
            KRISONS
          </p>
          <p className="eyebrow mt-2 text-copper-400">{siteConfig.descriptor}</p>
          <p className="mt-5 max-w-xs leading-relaxed">{company.tagline}</p>
          <p className="mt-5 leading-relaxed">
            Established {company.established} · Plant commissioned {company.plantCommissioned} ·{" "}
            {company.capacityPerMonth} a month
          </p>
        </div>

        <nav aria-label="Products">
          <p className={headingClass}>Products</p>
          <ul className="space-y-2.5">
            {productFamilies.map((p) => (
              <li key={p.slug}>
                <Link href={`/products/${p.slug}`} className={linkClass}>
                  {p.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Applications">
          <p className={headingClass}>Applications</p>
          <ul className="space-y-2.5">
            {applicationCategories.map((a) => (
              <li key={a.slug}>
                <Link href={`/applications/${a.slug}`} className={linkClass}>
                  {a.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {footerNav.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <p className={headingClass}>{group.title}</p>
            <ul className="space-y-2.5">
              {group.links.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <p className={headingClass}>Talk to us</p>
          <ul className="space-y-3">
            <li>
              <TrackedLink
                href={`mailto:${company.email}`}
                event="contact_click"
                eventProps={{ method: "email", location: "footer" }}
                className={`${linkClass} inline-flex items-center gap-2 break-all`}
              >
                <Icon name="mail" className="h-4 w-4 shrink-0" />
                {company.email}
              </TrackedLink>
            </li>
            {contacts.map((c) => (
              <li key={c.name}>
                <TrackedLink
                  href={`tel:${c.phone.replace(/\s/g, "")}`}
                  event="contact_click"
                  eventProps={{ method: "phone", location: "footer" }}
                  className={`${linkClass} inline-flex items-center gap-2`}
                >
                  <Icon name="phone" className="h-4 w-4 shrink-0" />
                  <span>
                    {c.phone} <span className="text-ink-300">· {c.role}</span>
                  </span>
                </TrackedLink>
              </li>
            ))}
            {siteConfig.features.whatsapp && (
              <li>
                <TrackedLink
                  href={whatsappUrl()}
                  event="whatsapp_click"
                  eventProps={{ location: "footer" }}
                  className={`${linkClass} inline-flex items-center gap-2`}
                  newTab
                >
                  <Icon name="whatsapp" className="h-4 w-4 shrink-0" />
                  WhatsApp
                </TrackedLink>
              </li>
            )}
          </ul>
          <div className="mt-6">
            <ProfileDownload location="footer" className="btn btn-ghost-light btn-sm" label="Company profile" />
          </div>
        </div>
      </div>

      <div className="container-x grid gap-6 border-t border-white/10 py-8 sm:grid-cols-3">
        {addresses.map((a) => (
          <address key={a.id} className="not-italic leading-relaxed">
            <span className="mb-1 block font-semibold text-white">{a.title}</span>
            {a.lines.slice(1).map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </address>
        ))}
      </div>

      <div className="container-x flex flex-col gap-2 border-t border-white/10 py-6 text-xs sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.legalName}. Proprietorship (MSME), India.
        </p>
        <p>Specifications on this site are nominal. Confirm against samples before ordering.</p>
      </div>
    </footer>
  );
}
