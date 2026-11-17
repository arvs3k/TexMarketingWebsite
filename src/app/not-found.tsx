import Link from "next/link";
import { SamplesButton } from "@/components/Cta";
import { primaryNav } from "@/lib/data/site";

export default function NotFound() {
  return (
    <section className="on-ink bg-ink-950 text-white">
      <div className="container-x py-24 sm:py-32">
        <p className="eyebrow mb-4 text-copper-400">404 · Page not found</p>
        <h1 className="text-h1 font-bold leading-tight tracking-tight">This page has been cut from the roll.</h1>
        <p className="mt-5 max-w-xl text-lg text-ink-300">The address may have changed in our redesign. Try one of these:</p>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
          {primaryNav.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="link">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <SamplesButton location="not_found" />
        </div>
      </div>
    </section>
  );
}
