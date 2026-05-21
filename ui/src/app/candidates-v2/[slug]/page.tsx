import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllCandidateV2Slugs,
  getFullCandidateV2BySlug,
} from "@/data/v2";
import CandidateV2Profile from "@/components/v2/CandidateV2Profile";
import { getProfileStatus } from "@/lib/profile-status";
import { withSiteBasePath } from "@/lib/site-env";

export function generateStaticParams() {
  return getAllCandidateV2Slugs().map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

const PARTY_LABEL: Record<string, string> = {
  R: "Republican",
  D: "Democrat",
  I: "Independent",
  NP: "Nonpartisan",
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const candidate = getFullCandidateV2BySlug(slug);
  if (!candidate) return {};

  const party = PARTY_LABEL[candidate.party] ?? candidate.party;
  const profileStatus = getProfileStatus(candidate);
  const candidatePath = withSiteBasePath(`/candidates/${candidate.slug}/`);
  const previewImage = withSiteBasePath("/og-image-v3.png");

  return {
    title: `${candidate.name} — ${party} ${candidate.position}`,
    description: `Source-cited issue profile for ${candidate.name}, ${party} ${profileStatus.headlineSuffix} for ${candidate.position}.`,
    alternates: {
      canonical: candidatePath,
    },
    openGraph: {
      title: `${candidate.name} | Elect Righteous`,
      description: `${party} ${profileStatus.metadataNoun} for ${candidate.position}. Source-cited issue profile with ${candidate.sources.length}+ public sources.`,
      url: candidatePath,
      images: [
        {
          url: previewImage,
          width: 1200,
          height: 630,
          alt: `${candidate.name} profile on Elect Righteous`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${candidate.name} | Elect Righteous`,
      description: `${party} ${profileStatus.metadataNoun} for ${candidate.position}. Source-cited issue profile with ${candidate.sources.length}+ public sources.`,
      images: [previewImage],
    },
  };
}

export default async function CandidateV2Page({ params }: PageProps) {
  const { slug } = await params;
  const candidate = getFullCandidateV2BySlug(slug);

  if (!candidate) {
    notFound();
  }

  return <CandidateV2Profile candidate={candidate} />;
}
