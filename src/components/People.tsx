import Image from "next/image";
import Icon from "@/components/Icon";
import TrackedLink from "@/components/TrackedLink";
import { PlaceholderInline } from "@/components/Placeholder";
import { contacts } from "@/lib/data/company";
import { showPlaceholders } from "@/lib/placeholders";

function initials(name: string) {
  return name
    .split(/[\s.]+/)
    .filter(Boolean)
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

/** The two named contacts. Portrait and bio slots fall back to a monogram until supplied. */
export default function People({ location }: { location: string }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2">
      {contacts.map((p) => (
        <li key={p.name} className="flex gap-5 rounded-(--radius-card) border border-line bg-card p-5 sm:p-6">
          {p.photo ? (
            <Image
              src={p.photo}
              alt={`${p.name}, ${p.role}`}
              width={112}
              height={112}
              className="h-24 w-24 shrink-0 rounded-(--radius-card) object-cover sm:h-28 sm:w-28"
            />
          ) : (
            <div
              className={`flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-(--radius-card) sm:h-28 sm:w-28 ${
                showPlaceholders ? "ph" : "bg-ink-900 text-white"
              }`}
            >
              <span aria-hidden className="font-display text-3xl font-bold">
                {initials(p.name)}
              </span>
              {showPlaceholders && <span className="ph-tag mt-1 !text-[0.5625rem]">Portrait</span>}
            </div>
          )}
          <div className="min-w-0">
            <p className="eyebrow text-[0.6875rem] text-copper-700">{p.role}</p>
            <p className="mt-1 font-display text-xl font-bold">{p.name}</p>
            {p.bio ? (
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{p.bio}</p>
            ) : (
              <p className="mt-2 text-sm">
                <PlaceholderInline id={`bio-${p.role.toLowerCase()}`}>Short bio — placeholder</PlaceholderInline>
              </p>
            )}
            <TrackedLink
              href={`tel:${p.phone.replace(/\s/g, "")}`}
              event="contact_click"
              eventProps={{ method: "phone", location }}
              className="num mt-3 inline-flex items-center gap-2 font-medium text-ink-900 underline-offset-4 hover:underline"
            >
              <Icon name="phone" className="h-4 w-4" />
              {p.phone}
            </TrackedLink>
          </div>
        </li>
      ))}
    </ul>
  );
}
