/**
 * Placeholder visibility.
 *
 * Placeholders (certificates, test values, portraits, video, reply time…) are
 * shown — loudly — in development and on Vercel *preview* deployments, and are
 * left out of the production site entirely, so unfinished content cannot go
 * live by accident. Force them on anywhere with NEXT_PUBLIC_SHOW_PLACEHOLDERS=1.
 *
 * Every placeholder is tagged with a `CONTENT-TODO(id)` comment in the source.
 * `npm run content:todo` rebuilds the list in CONTENT-TODO.md from those tags.
 */
export const showPlaceholders =
  process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS === "1" ||
  (process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS !== "0" &&
    (process.env.NODE_ENV !== "production" ||
      process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"));
