/**
 * Site origin for metadata, Open Graph, and JSON-LD absolute URLs.
 * On Vercel, set NEXT_PUBLIC_SITE_URL to your primary URL (e.g. https://studiosystemdesign.vercel.app).
 * If unset, VERCEL_URL is used so previews still resolve OG assets correctly.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (explicit) return explicit.replace(/\/$/, "")
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`.replace(/\/$/, "")
  return "https://www.studiosystem.io"
}
