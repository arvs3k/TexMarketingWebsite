interface StatBadgeProps {
  value: string;
  label: string;
  dark?: boolean;
}

export default function StatBadge({ value, label, dark = false }: StatBadgeProps) {
  return (
    <div>
      <p
        className={`font-display text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-ink-900"
        }`}
      >
        {value}
      </p>
      <p
        className={`mt-1 text-sm uppercase tracking-wider ${
          dark ? "text-white/60" : "text-ink-500"
        }`}
      >
        {label}
      </p>
    </div>
  );
}
