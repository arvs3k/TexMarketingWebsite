"use client";

import Icon from "@/components/Icon";
import { track } from "@/lib/analytics";

/** Prints the current page; product pages have a print stylesheet that makes them spec sheets. */
export default function PrintButton({ product, className = "btn btn-ghost-light" }: { product: string; className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        track("spec_sheet_print", { product });
        window.print();
      }}
    >
      <Icon name="print" />
      Print spec sheet
    </button>
  );
}
