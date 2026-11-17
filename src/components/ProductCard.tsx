import Link from "next/link";
import Icon from "@/components/Icon";
import MaterialTile from "@/components/MaterialTile";
import Photo from "@/components/Photo";
import type { ProductFamily } from "@/lib/data/products";

export default function ProductCard({
  product,
  index,
  headingLevel = 3,
}: {
  product: ProductFamily;
  index: number;
  headingLevel?: 2 | 3;
}) {
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex h-full flex-col rounded-(--radius-card) border border-line bg-card transition-[border-color,box-shadow] duration-300 hover:border-ink-900 hover:shadow-[6px_6px_0_var(--color-ink-900)]"
    >
      <div className="relative p-2 pb-0">
        {product.image ? (
          <Photo
            name={product.image}
            aspect="16/10"
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
            imgClassName="transition-transform duration-700 ease-(--ease-out-quint) group-hover:scale-[1.04]"
          />
        ) : (
          <MaterialTile pattern={product.tile} className="aspect-[16/10]" label="Illustration" />
        )}
        <span className="num absolute left-4 top-4 bg-ink-950/85 px-2 py-1 text-xs text-white">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="eyebrow text-[0.6875rem] text-copper-700">{product.kicker}</p>
        <H className="mt-2 font-display text-2xl font-bold leading-tight">{product.name}</H>
        <p className="mt-3 flex-1 leading-relaxed text-ink-600">{product.summary}</p>
        <span className="mt-5 inline-flex items-center gap-2 font-semibold text-ink-900">
          {product.keySpecs.length > 0 ? "Specifications" : "Details"}
          <Icon name="arrow" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
