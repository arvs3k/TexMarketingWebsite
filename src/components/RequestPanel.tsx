import { Suspense } from "react";
import RfqForm from "@/components/RfqForm";
import { showPlaceholders } from "@/lib/placeholders";
import { whatsappNumber } from "@/lib/whatsapp";

/** The RFQ form with its server-side inputs resolved. Use this, not RfqForm directly. */
export default function RequestPanel() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[32rem] rounded-(--radius-card) border border-ink-900 bg-card p-8 text-ink-600">
          Loading the request form…
        </div>
      }
    >
      <RfqForm whatsappNumber={whatsappNumber()} showPlaceholders={showPlaceholders} />
    </Suspense>
  );
}
