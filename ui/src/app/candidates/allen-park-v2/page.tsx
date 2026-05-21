import type { Metadata } from "next";
import CandidateV2Profile from "@/components/v2/CandidateV2Profile";
import { ALLEN_PARK_V2 } from "@/data/v2/allen-park";

export const metadata: Metadata = {
  title: "Allen Park | Elect Righteous",
  description:
    "Sourced Elect Righteous profile for Allen Park, USD 489 school board member.",
};

export default function AllenParkV2Page() {
  return <CandidateV2Profile candidate={ALLEN_PARK_V2} />;
}
