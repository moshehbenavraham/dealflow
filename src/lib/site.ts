/**
 * Site-wide constants for canonical URLs, sharing metadata, and structured data.
 *
 * NOTE: The production hostname is inferred (dealflow.app). If the canonical
 * domain differs, change SITE_URL here and the SEO component + sitemap will
 * pick up the new value automatically.
 */
export const SITE_URL = "https://dealflow.app";
export const SITE_NAME = "Dealflow";
export const SITE_DESCRIPTION =
  "Dealflow is a pipeline CRM for modern sales teams. Track deals, forecast revenue, and run high-touch sales without the busywork.";
export const SITE_LOCALE = "en_US";
export const SITE_TWITTER = "@dealflow";

/** Default social card. Use absolute URLs for og:/twitter: images so previews work cross-platform. */
export const DEFAULT_SOCIAL_IMAGE = `${SITE_URL}/social-card.svg`;

/** Build an absolute URL from a path (defaults to "/"). */
export function absoluteUrl(path: string = "/"): string {
  if (!path.startsWith("/")) path = `/${path}`;
  return `${SITE_URL}${path}`;
}
