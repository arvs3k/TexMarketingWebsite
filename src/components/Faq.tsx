import type { FaqItem } from "@/lib/data/faq";

/** Native <details> accordion: keyboard-accessible, no JavaScript. */
export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="border-t border-ink-900">
      {items.map((item) => (
        <details key={item.question} className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 font-display text-lg font-semibold leading-snug [&::-webkit-details-marker]:hidden">
            {item.question}
            <span
              aria-hidden
              className="num mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink-900 text-base transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="max-w-3xl pb-6 leading-relaxed text-ink-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
