interface ContactInfoBlockProps {
  title: string;
  lines: string[];
}

export default function ContactInfoBlock({ title, lines }: ContactInfoBlockProps) {
  return (
    <div className="rounded-lg border border-ink-900/10 bg-white p-6 shadow-sm">
      <h3 className="mb-3 font-display text-lg font-bold text-ink-900">{title}</h3>
      <address className="text-sm not-italic leading-relaxed text-ink-700">
        {lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </address>
    </div>
  );
}
