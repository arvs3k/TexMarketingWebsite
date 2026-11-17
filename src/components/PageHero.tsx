import Link from "next/link";
import type { ReactNode } from "react";

export interface Crumb {
  href: string;
  label: string;
}

/** Dark page header for inner pages: breadcrumbs, eyebrow, H1, lead, actions. */
export default function PageHero({
  crumbs = [],
  eyebrow,
  title,
  lead,
  children,
  aside,
  compact = false,
}: {
  crumbs?: Crumb[];
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  /** Buttons under the lead. */
  children?: ReactNode;
  /** Visual on the right (image, tile). */
  aside?: ReactNode;
  /** Shorter band, for pages where the content below matters more (the form). */
  compact?: boolean;
}) {
  return (
    <section className="on-ink print-plain relative overflow-hidden bg-ink-950 text-white">
      <div aria-hidden className="microdot microdot-fade absolute inset-0 no-print" />
      <div className={`container-x relative grid gap-10 grid-cols-1 lg:grid-cols-12 lg:items-end ${compact ? "py-10 sm:py-12" : "py-14 sm:py-20"}`}>
        <div className={aside ? "lg:col-span-7" : "lg:col-span-9"}>
          {crumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="no-print mb-8">
              <ol className="eyebrow flex flex-wrap gap-x-2 gap-y-1 text-ink-300">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                {crumbs.map((c, i) => (
                  <li key={c.href} className="flex gap-2">
                    <span aria-hidden>/</span>
                    {i === crumbs.length - 1 ? (
                      <span aria-current="page" className="text-white">
                        {c.label}
                      </span>
                    ) : (
                      <Link href={c.href} className="hover:text-white">
                        {c.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <p className="eyebrow mb-4 text-copper-400">{eyebrow}</p>
          <h1 className="hero-rise text-h1 font-bold leading-[1.04] tracking-tight">{title}</h1>
          {lead && <p className="hero-rise-2 mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">{lead}</p>}
          {children && <div className="no-print mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{children}</div>}
        </div>
        {aside && <div className="no-print lg:col-span-5">{aside}</div>}
      </div>
    </section>
  );
}
