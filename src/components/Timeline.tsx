import type { TimelineItem } from "@/lib/data/company";

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative space-y-10 border-l-2 border-copper-600/30 pl-8">
      {items.map((item) => (
        <li key={item.year} className="relative">
          <span
            aria-hidden
            className="absolute -left-[2.45rem] top-1.5 h-3 w-3 rounded-full border-2 border-copper-600 bg-paper"
          />
          <p className="font-display text-sm font-bold uppercase tracking-widest text-copper-600">
            {item.year}
          </p>
          <h3 className="mt-1 font-display text-xl font-bold text-ink-900">
            {item.title}
          </h3>
          <p className="mt-2 max-w-2xl leading-relaxed text-ink-700">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
