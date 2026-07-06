interface PageHeaderProps {
  eyebrow: string;
  title: string;
  intro?: string;
}

export default function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <header className="dot-grid bg-ink-900 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-copper-100">
          {eyebrow}
        </p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/70">
            {intro}
          </p>
        )}
      </div>
    </header>
  );
}
