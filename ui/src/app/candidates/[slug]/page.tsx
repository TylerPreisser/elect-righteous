import { notFound } from "next/navigation";
import { getAllCandidateSlugs, getFullCandidateBySlug } from "@/data/candidates";
import CandidateDetailClient from "./client";

export function generateStaticParams() {
  return getAllCandidateSlugs().map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CandidateDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const candidate = getFullCandidateBySlug(slug);

  if (!candidate) {
    notFound();
  }

  return <CandidateDetailClient candidate={candidate} />;
}
