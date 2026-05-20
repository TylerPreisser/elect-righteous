import type { CandidateFullV2 } from "@/data/types-v2";

type CandidateLike = Pick<
  CandidateFullV2,
  "slug" | "electionSlug" | "incumbent" | "position"
>;

export interface ProfileStatus {
  label: string;
  headlineSuffix: string;
  metadataNoun: string;
  collectionHeading: string;
  collectionDescription: string;
  recordLabel: string;
  actionLabel: string;
  note?: string;
}

const APPOINTED_ADMINISTRATORS = new Set(["toby-dougherty", "ron-wilson"]);
const CURRENT_LOCAL_GROUPS = new Set([
  "hays-city-current",
  "usd-489-current",
  "ellis-county-incumbents-off-cycle",
]);
const FUTURE_LOCAL_GROUPS = new Set(["hays-city-current", "usd-489-current"]);
const CURRENT_OFFICEHOLDER_ONLY = new Set(["cathy-hopkins"]);
const FILING_CONFLICT = new Set(["chase-laporte"]);

export function getProfileStatus(candidate: CandidateLike): ProfileStatus {
  if (APPOINTED_ADMINISTRATORS.has(candidate.slug)) {
    return {
      label: "Appointed administrator",
      headlineSuffix: "appointed administrator",
      metadataNoun: "public official profile",
      collectionHeading: "Current Officials and Administrators",
      collectionDescription:
        "These profiles cover people currently running local institutions. They are not all candidates, and appointed administrators are labeled separately from elected officials.",
      recordLabel: "Official / Reported Actions",
      actionLabel: "reported or official action",
      note:
        "This is an accountability profile for an appointed administrator, not a candidate profile. It should be read as public-record context about the officeholder's role and actions.",
    };
  }

  if (CURRENT_OFFICEHOLDER_ONLY.has(candidate.slug)) {
    return {
      label: "Current officeholder profile",
      headlineSuffix: "current officeholder",
      metadataNoun: "public official profile",
      collectionHeading: "Current Officials",
      collectionDescription:
        "These profiles cover current officeholders or civic leaders whose public records matter to Hays-area voters.",
      recordLabel: "Official / Reported Actions",
      actionLabel: "reported or official action",
      note:
        "This profile is retained for current-officeholder context. It should not be read as confirmation that this person is filed for the listed 2026 race unless the roster page says so.",
    };
  }

  if (FILING_CONFLICT.has(candidate.slug)) {
    return {
      label: "Filing conflict / recheck needed",
      headlineSuffix: "filing-conflict profile",
      metadataNoun: "filing-conflict profile",
      collectionHeading: "Candidates Requiring Roster Recheck",
      collectionDescription:
        "These profiles have conflicting public filing signals and require final official-list review before being treated as ordinary candidate profiles.",
      recordLabel: "Public Record",
      actionLabel: "public-record entry",
      note:
        "This profile has conflicting filing evidence. Treat the office label as provisional until the final official candidate list is reconciled.",
    };
  }

  if (CURRENT_LOCAL_GROUPS.has(candidate.electionSlug)) {
    const futureText = FUTURE_LOCAL_GROUPS.has(candidate.electionSlug)
      ? " The next expected election cycle for this local body is 2027, based on current local-cycle research."
      : "";

    return {
      label: "Current official, not on 2026 ballot",
      headlineSuffix: "current local official",
      metadataNoun: "current official profile",
      collectionHeading: "Current Officials",
      collectionDescription:
        "These are current local-office profiles, not 2026 candidate listings. They are included because their decisions affect Hays voters now.",
      recordLabel: "Official / Reported Actions",
      actionLabel: "reported or official action",
      note:
        `This is a current-official accountability profile, not a 2026 ballot-candidate profile.${futureText}`,
    };
  }

  if (candidate.electionSlug === "ellis-county-2026-ballot") {
    return {
      label: "On current 2026 filing list",
      headlineSuffix: candidate.incumbent ? "incumbent candidate" : "candidate",
      metadataNoun: "candidate profile",
      collectionHeading: "The 2026 Candidate",
      collectionDescription:
        "This person appears on the current official Ellis County 2026 candidate filing list for this race.",
      recordLabel: "Public Record",
      actionLabel: "documented action",
    };
  }

  return {
    label: candidate.incumbent ? "Incumbent / current candidate" : "Candidate / challenger",
    headlineSuffix: candidate.incumbent ? "incumbent candidate" : "candidate",
    metadataNoun: "candidate profile",
    collectionHeading: "The Candidates",
    collectionDescription: "Click any name to read the full sourced profile.",
    recordLabel: "Public Record",
    actionLabel: "documented action",
  };
}

