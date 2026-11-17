import Image from "next/image";
import { media, type MediaKey, type WantedMedia } from "@/lib/data/media";
import { PlaceholderBlock } from "@/components/Placeholder";

/** A registry photo with an optional mono caption. Swap images in lib/data/media.ts. */
export default function Photo({
  name,
  sizes,
  priority = false,
  caption = false,
  className = "",
  imgClassName = "",
  aspect,
}: {
  name: MediaKey;
  sizes: string;
  /** Above-the-fold image: load eagerly (no preload, so it never competes with fonts and CSS on phones). */
  priority?: boolean;
  caption?: boolean;
  className?: string;
  imgClassName?: string;
  /** CSS aspect-ratio to crop to, e.g. "4/3". Default: the photo's own ratio. */
  aspect?: string;
}) {
  const m = media[name];
  return (
    <figure className={className}>
      <div
        className="overflow-hidden rounded-(--radius-card) bg-ink-800"
        style={{ aspectRatio: aspect ?? `${m.width}/${m.height}` }}
      >
        <Image
          src={m.src}
          alt={m.alt}
          width={m.width}
          height={m.height}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      </div>
      {caption && m.caption && (
        <figcaption className="eyebrow mt-2.5 text-[0.6875rem] opacity-80">{m.caption}</figcaption>
      )}
    </figure>
  );
}

/** Slot for a photo we still need. Dev/preview only. */
export function WantedPhoto({ item, className = "" }: { item: WantedMedia; className?: string }) {
  return (
    <PlaceholderBlock id={item.id} title="Photo needed" aspect={item.aspect} className={className}>
      {item.brief}
    </PlaceholderBlock>
  );
}
