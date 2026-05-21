import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCandidateSlugs, getFullCandidateBySlug } from "@/data/candidates";
import { getAllCandidateV2Slugs, getFullCandidateV2BySlug } from "@/data/v2";
import { getCandidateResearchSources } from "@/lib/candidate-sources";
import { getProfileStatus } from "@/lib/profile-status";
import { withSiteBasePath } from "@/lib/site-env";
import CandidateV2Profile from "@/components/v2/CandidateV2Profile";
import CandidateDetailClient from "./client";

export function generateStaticParams() {
  return Array.from(new Set([...getAllCandidateSlugs(), ...getAllCandidateV2Slugs()]))
    .map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const candidateV2 = getFullCandidateV2BySlug(slug);
  const candidateV1 = getFullCandidateBySlug(slug);
  const candidate = candidateV2 ?? candidateV1;
  if (!candidate) return {};

  const party =
    candidate.party === "R"
      ? "Republican"
      : candidate.party === "D"
      ? "Democrat"
      : candidate.party === "NP"
      ? "Nonpartisan"
      : "Independent";
  const sourceCount = candidateV2
    ? candidateV2.sources.length
    : candidateV1
    ? getCandidateResearchSources(candidateV1).length
    : 0;
  const profileStatus = candidateV2
    ? getProfileStatus(candidateV2)
    : {
        headlineSuffix: candidate.incumbent ? "incumbent candidate" : "candidate",
        metadataNoun: "candidate profile",
      };
  const candidatePath = withSiteBasePath(`/candidates/${candidate.slug}/`);
  const previewImage = withSiteBasePath("/og-image-v3.png");

  return {
    title: `${candidate.name} — ${party} ${candidate.position}`,
    description: `Complete research profile for ${candidate.name} (${party}), ${profileStatus.headlineSuffix} for ${candidate.position}. Includes issue positions, public actions, campaign finance, faith/community notes where public, and ${sourceCount}+ public sources.`,
    alternates: {
      canonical: candidatePath,
    },
    openGraph: {
      title: `${candidate.name} | Elect Righteous`,
      description: `${party} ${profileStatus.metadataNoun} for ${candidate.position}. Full profile with ${sourceCount}+ sourced citations.`,
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
      description: `${party} ${profileStatus.metadataNoun} for ${candidate.position}. Full profile with ${sourceCount}+ sourced citations.`,
      images: [previewImage],
    },
  };
}

export default async function CandidateDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const candidateV2 = getFullCandidateV2BySlug(slug);
  if (candidateV2) {
    return <CandidateV2Profile candidate={candidateV2} />;
  }

  const candidate = getFullCandidateBySlug(slug);
  if (!candidate) {
    notFound();
  }

  return <CandidateDetailClient candidate={candidate} />;
}
