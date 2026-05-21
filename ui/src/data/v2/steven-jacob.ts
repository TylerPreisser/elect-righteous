/* Auto-generated from memory/candidates/steven-jacob/v2-issues.yaml.
 * Edit the YAML source, then run:
 *   node scripts/compile-v2-yaml.mjs steven-jacob
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const STEVEN_JACOB_V2: CandidateFullV2 = {
  "slug": "steven-jacob",
  "name": "Steven Robert Jacob",
  "party": "I",
  "position": "U.S. House candidate, Kansas 1st District",
  "electionSlug": "ks-01-house-2026",
  "incumbent": false,
  "occupation": "U.S. House candidate",
  "issues": [
    {
      "id": "i-abortion-life",
      "title": "Abortion / life",
      "stated": {
        "text": "No sourced position or public action found for Abortion / life.",
        "sourceIds": []
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-lgbt-gender-parental-rights",
      "title": "LGBT / gender / parental rights",
      "stated": {
        "text": "No sourced position or public action found for LGBT / gender / parental rights.",
        "sourceIds": []
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-education-curriculum-schools",
      "title": "Education / curriculum / schools",
      "stated": {
        "text": "No sourced position or public action found for Education / curriculum / schools.",
        "sourceIds": []
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-religious-liberty-church-civic-morality",
      "title": "Religious liberty / church / civic morality",
      "stated": {
        "text": "No sourced position or public action found for Religious liberty / church / civic morality.",
        "sourceIds": []
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-taxes-spending-debt",
      "title": "Taxes / spending / debt",
      "stated": {
        "text": "No sourced position or public action found for Taxes / spending / debt.",
        "sourceIds": []
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-economy-jobs-labor",
      "title": "Economy / jobs / labor",
      "stated": {
        "text": "No sourced position or public action found for Economy / jobs / labor.",
        "sourceIds": []
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-guns-second-amendment",
      "title": "Guns / Second Amendment",
      "stated": {
        "text": "No sourced position or public action found for Guns / Second Amendment.",
        "sourceIds": []
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-immigration-border",
      "title": "Immigration / border",
      "stated": {
        "text": "No sourced position or public action found for Immigration / border.",
        "sourceIds": []
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-health-care-insurance-medicaid",
      "title": "Health care / insurance / Medicaid",
      "stated": {
        "text": "No sourced position or public action found for Health care / insurance / Medicaid.",
        "sourceIds": []
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-election-integrity-voting-courts",
      "title": "Election integrity / voting / courts",
      "stated": {
        "text": "No sourced position or public action found for Election integrity / voting / courts.",
        "sourceIds": []
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-public-safety-law-enforcement-criminal-justice",
      "title": "Public safety / law enforcement / criminal justice",
      "stated": {
        "text": "No sourced position or public action found for Public safety / law enforcement / criminal justice.",
        "sourceIds": []
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-agriculture-rural-economy-water",
      "title": "Agriculture / rural economy / water",
      "stated": {
        "text": "No sourced position or public action found for Agriculture / rural economy / water.",
        "sourceIds": []
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-local-governance-transparency-ethics",
      "title": "Local governance / transparency / ethics",
      "stated": {
        "text": "No sourced position or public action found for Local governance / transparency / ethics.",
        "sourceIds": []
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-environment-energy-land-use",
      "title": "Environment / energy / land use",
      "stated": {
        "text": "No sourced position or public action found for Environment / energy / land use.",
        "sourceIds": []
      },
      "actions": [],
      "socialSignals": []
    }
  ],
  "whoTheyAre": "Steven Robert Jacob is profiled here for U.S. House candidate, Kansas 1st District as an Independent. The available public biography record is thin, so the profile avoids filling gaps with assumptions.",
  "recordSummary": "The verified record captured in the reviewed public record is the federal filing and committee record. No candidate-controlled issue platform was captured.",
  "whereTheyWorship": "No public worship affiliation was confirmed in the reviewed public record. No policy position is inferred from the absence or presence of faith-related public records.",
  "campaignFinance": {
    "totalRaised": "Not itemized in the reviewed public records in the reviewed public record",
    "narrative": "No donor-by-donor public finance interpretation is made from the available records in the reviewed public record.",
    "donors": [],
    "reportingPeriod": "Most recent public record reviewed",
    "source": "JACOB, STEVEN ROBERT - Candidate overview"
  },
  "socialResearchNote": "Public social-media follows, likes, comments, and reposts were not treated as beliefs. the reviewed public record records only issue-relevant public observations found in the candidate-controlled or official source set.",
  "sources": [
    {
      "id": "s-fec-candidate",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/H6KS01229/",
      "title": "JACOB, STEVEN ROBERT - Candidate overview",
      "publisher": "Federal Election Commission",
      "accessed": "2026-05-20",
      "claimsAnchored": [
        "FEC candidate master data identifies Steven Robert Jacob as a Libertarian candidate for Kansas House District 1 in 2026",
        "FEC identifies Steven Jacob for Kansas 1 as the committee"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(STEVEN_JACOB_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[steven-jacob.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
