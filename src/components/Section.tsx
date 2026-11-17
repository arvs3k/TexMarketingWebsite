import type { ReactNode } from "react";

type Tone = "paper" | "paper-2" | "ink";

const tones: Record<Tone, string> = {
  paper: "bg-paper",
  "paper-2": "bg-paper-2",
  ink: "on-ink bg-ink-900 text-white",
};

export default function Section({
  id,
  tone = "paper",
  eyebrow,
  title,
  lead,
  children,
  className = "",
  headingLevel = 2,
  aside,
}: {
  id?: string;
  tone?: Tone;
  eyebrow?: string;
  title?: ReactNode;
  lead?: ReactNode;
  children: ReactNode;
  className?: string;
  headingLevel?: 2 | 3;
  /** Rendered to the right of the heading on wide screens (e.g. a link). */
  aside?: ReactNode;
}) {
  const H = headingLevel === 2 ? "h2" : "h3";
  const ink = tone === "ink";
  return (
    <section id={id} className={`${tones[tone]} py-16 sm:py-24 ${className}`}>
      <div className="container-x">
        {(eyebrow || title) && (
          <div className="mb-10 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              {eyebrow && (
                <p className={`eyebrow mb-4 ${ink ? "text-copper-400" : "text-copper-700"}`}>{eyebrow}</p>
              )}
              {title && <H className="text-h2 font-bold leading-[1.08] tracking-tight">{title}</H>}
              {lead && (
                <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${ink ? "text-ink-300" : "text-ink-600"}`}>
                  {lead}
                </p>
              )}
            </div>
            {aside && <div className="shrink-0">{aside}</div>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
