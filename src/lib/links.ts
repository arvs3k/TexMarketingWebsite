/** Builds the pre-filled request-form URL used by every "request samples" button. */
export function requestHref(
  params: {
    product?: string;
    article?: string;
    application?: string;
    type?: "samples" | "quote" | "video-call";
  } = {},
): string {
  const q = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) if (v) q.set(k, v);
  const s = q.toString();
  return s ? `/request-samples?${s}` : "/request-samples";
}
