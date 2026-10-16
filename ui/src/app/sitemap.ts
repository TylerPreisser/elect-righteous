import type { MetadataRoute } from "next";
import { ELECTIONS } from "@/data/elections";
import { V2_CANDIDATES } from "@/data/v2";
import { SITE_URL, withSiteBasePath } from "@/lib/site-env";

// Required for `output: "export"` (ui/next.config.ts) — this route has no
// dynamic params, so it is rendered once at build time like every other page.
export const dynamic = "force-static";

// Build-date lastmod: this is a static-export site with no per-page CMS
// timestamp, so every entry shares the date of the build that produced it.
const BUILD_DATE = new Date();

function absoluteUrl(path: string): string {
  return `${SITE_URL}${withSiteBasePath(path)}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: BUILD_DATE, changeFrequency: "weekly", priority: 1.0 },
    { url: absoluteUrl("/about/"), lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/candidates/"), lastModified: BUILD_DATE, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/elections/"), lastModified: BUILD_DATE, changeFrequency: "weekly", priority: 0.9 },
  ];

  const electionEntries: MetadataRoute.Sitemap = ELECTIONS.map((election) => ({
    url: absoluteUrl(`/elections/${election.slug}/`),
    lastModified: BUILD_DATE,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const candidateEntries: MetadataRoute.Sitemap = V2_CANDIDATES.flatMap((candidate) => [
    {
      url: absoluteUrl(`/candidates/${candidate.slug}/`),
      lastModified: BUILD_DATE,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: absoluteUrl(`/candidates/${candidate.slug}/sources/`),
      lastModified: BUILD_DATE,
      changeFrequency: "weekly" as const,
      priority: 0.5,
    },
  ]);

  return [...staticEntries, ...electionEntries, ...candidateEntries];
}
