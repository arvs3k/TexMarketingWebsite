import type { UseCase } from "@/lib/data/applications";

interface ApplicationCardProps {
  title: string;
  intro: string;
  useCases: UseCase[];
  index?: number;
}

export default function ApplicationCard({
  title,
  intro,
  useCases,
  index,
}: ApplicationCardProps) {
  return (
    <article className="rounded-lg border border-ink-900/10 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-1 flex items-baseline gap-3">
        {index !== undefined && (
          <span className="font-display text-sm font-bold text-copper-600">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        <h3 className="font-display text-xl font-bold text-ink-900">{title}</h3>
      </div>
      <p className="mb-6 text-ink-500">{intro}</p>
      <dl className="grid gap-4 sm:grid-cols-2">
        {useCases.map((uc) => (
          <div
            key={uc.name}
            className="rounded-md border-l-2 border-copper-600 bg-paper px-4 py-3"
          >
            <dt className="font-semibold text-ink-900">{uc.name}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-ink-700">
              {uc.description}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
