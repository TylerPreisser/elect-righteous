export const SITE_BASE_PATH =
  process.env.NEXT_PUBLIC_SITE_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_SITE_BASE_PATH
    : process.env.NODE_ENV === "production"
      ? "/elect-righteous"
      : "";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://tylerpreisser.github.io";

export function withSiteBasePath(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_BASE_PATH}${normalizedPath}`;
}
