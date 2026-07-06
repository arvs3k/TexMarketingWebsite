import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {(eyebrow || title || intro) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && (
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-copper-600">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
                {title}
              </h2>
            )}
            {intro && <p className="mt-4 text-lg text-ink-500">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
