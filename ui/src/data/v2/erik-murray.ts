/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const ERIK_MURRAY_V2: CandidateFullV2 = {
  "slug": "erik-murray",
  "name": "Erik Murray",
  "party": "D",
  "position": "U.S. Senate, Kansas",
  "electionSlug": "us-senate-2026",
  "incumbent": false,
  "occupation": "Attorney / Public Servant",
  "born": "Kansas City, Kansas",
  "hometown": "Kansas City, Kansas (Wyandotte County)",
  "family": "Married to Nicole. Lives in Wyandotte County.",
  "campaignWebsite": "https://www.erikforkansas.com/",
  "issues": [
    {
      "id": "i-healthcare",
      "title": "Healthcare",
      "stated": {
        "text": "Murray's campaign supports universal healthcare, restoring ACA cuts, protecting and expanding Medicaid, and building toward universal coverage. The campaign frames healthcare access as both a moral commitment and a fiscally responsible investment.",
        "sourceIds": [
          "s-campaign-issues",
          "s-campaign-home"
        ]
      },
      "actions": [
        {
          "id": "ae-healthcare-2",
          "date": "2026-02-11",
          "body": "The Iola Register reported Murray said his campaign hinges on healthcare, education, and affordability.",
          "sourceIds": [
            "s-iola-register"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-ae-healthcare-1",
          "platform": "YouTube",
          "observation": "A candidate-controlled YouTube post titled \"HEALTHCARE is a RIGHT\" discussed healthcare access; the local harvest recorded it as the second-highest rating-count YouTube item in the captured set.",
          "observedAt": "2026-02-27",
          "sourceIds": [
            "s-youtube-rss"
          ],
          "mappedToIssueId": "i-healthcare"
        },
        {
          "id": "ss-healthcare-1",
          "platform": "YouTube",
          "observation": "Local harvest captured YouTube descriptions stating healthcare is a fundamental need/right.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-healthcare"
        },
        {
          "id": "ss-crossref-3",
          "platform": "youtube",
          "observation": "Description: \"Erik is running for U.S. Senate because he knows it’s time that we stop electing the same old politicians who let our communities falter, the economy decline, and health care become less accessible and more expensive. Kansans deserve someone in the Senate who can deliver real, purposeful change for our working families and who believes hard work should be rewarded and families from every zip code...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-healthcare"
        }
      ],
      "gap": {
        "summary": "No healthcare votes or administrative record were found.",
        "evidenceIds": [
          "ae-healthcare-2"
        ]
      }
    },
    {
      "id": "i-education",
      "title": "Education",
      "stated": {
        "text": "Murray's campaign supports fully funding public education, special education, trades training, and college pathways.",
        "sourceIds": [
          "s-campaign-issues"
        ]
      },
      "actions": [
        {
          "id": "ae-education-2",
          "date": "2026-02-11",
          "body": "The Iola Register reported Murray said he would focus on fully funding public education.",
          "sourceIds": [
            "s-iola-register"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-ae-education-1",
          "platform": "YouTube",
          "observation": "A candidate-controlled YouTube post described three generations of Murray's family attending Sumner Academy and thanked Kansas for facilitating education for families.",
          "observedAt": "2026-04-19",
          "sourceIds": [
            "s-youtube-rss"
          ],
          "mappedToIssueId": "i-education"
        },
        {
          "id": "ss-education-1",
          "platform": "YouTube",
          "observation": "The captured YouTube feed includes a Sumner Academy/public-education post.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-education"
        },
        {
          "id": "ss-crossref-3",
          "platform": "youtube",
          "observation": "\"The result is familiar: hollowed out main streets, underfunded schools, and communities that are told to be patient while their resources are steadily drained. Kansas knows this pattern well.\" (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-education"
        }
      ],
      "gap": {
        "summary": "No education-policy voting record or school-board record was found.",
        "evidenceIds": [
          "ae-education-2"
        ]
      }
    },
    {
      "id": "i-housing-community-development",
      "title": "Housing & Community Development",
      "stated": {
        "text": "Murray's campaign supports building more housing, cutting excessive red tape, incentivizing new construction, and investing in infrastructure that makes neighborhoods possible.",
        "sourceIds": [
          "s-campaign-issues"
        ]
      },
      "actions": [
        {
          "id": "ae-housing-1",
          "date": "2026",
          "body": "KSHB reported Murray's Eastside Innovation proposed Midtown Station at the former Indian Springs Mall site, including multifamily housing, single-family homes, townhomes, affordable housing, childcare, retail, a hotel, and a grocery store.",
          "sourceIds": [
            "s-kshb-indian-springs"
          ]
        },
        {
          "id": "ae-housing-2",
          "date": "2026",
          "body": "KSHB reported Eastside Innovation and the Unified Government remained apart on land price, financing/capital-stack questions, tax-credit timing, outside-counsel fee structure, and transparency.",
          "sourceIds": [
            "s-kshb-indian-springs"
          ]
        },
        {
          "id": "ae-housing-3",
          "date": "2026-03-12",
          "body": "Campaign release on the Chiefs stadium negotiations called for the Wyandotte community to have a seat at the table and not be left behind.",
          "sourceIds": [
            "s-campaign-chiefs"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-housing-1",
          "platform": "Campaign RSS",
          "observation": "Campaign RSS includes issue articles on mortgage stress, housing affordability, and the Chiefs/Wyandotte development debate.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-join-feed"
          ],
          "mappedToIssueId": "i-housing-community-development"
        },
        {
          "id": "ss-crossref-2",
          "platform": "youtube",
          "observation": "\"That’s what makes places like this matter. It’s not just coffee. It’s art, mentorship, memory, small business, and community all in one space.\" (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-housing-community-development"
        },
        {
          "id": "ss-crossref-4",
          "platform": "erikforkansas.com",
          "observation": "\"For decades, Wyandotte County has been treated as a corridor to drive through, not a community to invest in, with highways like 635 carving through neighborhoods such as Quindaro while Wall Street and Topeka looked the other way.\" (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-4"
          ],
          "mappedToIssueId": "i-housing-community-development"
        }
      ],
      "gap": {
        "summary": "Indian Springs is a public/private development-negotiation record, not a completed legislative record; downstream prose should include both Murray's claims and Unified Government concerns.",
        "evidenceIds": [
          "ae-housing-1"
        ]
      }
    },
    {
      "id": "i-immigration-border",
      "title": "Immigration / Border",
      "stated": {
        "text": "Murray's campaign says immigration is an economic engine and supports secure, orderly borders; a humane, efficient system; clear pathways; real enforcement; and immigration administration built for the 21st-century economy.",
        "sourceIds": [
          "s-campaign-issues"
        ]
      },
      "actions": [
        {
          "id": "ae-immigration-1",
          "date": "2026-03-16",
          "body": "Kansas Reflector reported Murray discussed a functioning immigration system and criticized current constitutional/humanity concerns.",
          "sourceIds": [
            "s-kansas-reflector-profile"
          ]
        },
        {
          "id": "ae-immigration-2",
          "date": "2026-03-08",
          "body": "Kansas Reflector reported Murray remarks on immigration at a Democratic candidate forum.",
          "sourceIds": [
            "s-kansas-reflector-forum"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "YouTube",
          "observation": "Across the captured YouTube and campaign-update period, the feed contains no posts about abortion, immigration, guns, religious liberty, Fort Riley, Fort Hays State University, the Ogallala Aquifer, or water policy. The captured feed includes two items that mention farms or rural hospitals and does not include a farm-policy plan.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-youtube-rss"
          ],
          "mappedToIssueId": "i-immigration-border"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Across the captured period the feed contains no posts about abortion, immigration, guns, religious liberty, Fort Riley, Fort Hays State University, the Ogallala Aquifer, or water policy (harvest). The captured feed includes two items that mention farms or rural hospitals, but it does not include a farm-policy plan (harvest).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-youtube-rss"
          ],
          "mappedToIssueId": "i-immigration-border"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Kansas Reflector",
          "observation": "The new campaign issue page says immigration is an economic engine and supports secure, orderly borders; a humane, efficient system; clear pathways; real enforcement; and a system built for the 21st-century economy. Kansas Reflector profile and forum coverage include Murray remarks criticizing current immigration conditions and calling for a functioning system.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-youtube-rss"
          ],
          "mappedToIssueId": "i-immigration-border"
        }
      ],
      "gap": {
        "summary": "No detailed staffing, asylum, visa-category, or enforcement-budget proposal was found beyond broad campaign language.",
        "evidenceIds": [
          "ae-immigration-1"
        ]
      }
    },
    {
      "id": "i-taxes-wages-tariffs-affordability",
      "title": "Taxes, Wages, Tariffs & Affordability",
      "stated": {
        "text": "Murray's campaign supports working-family tax cuts, exploring exemption of the first $75,000 to $100,000 of income from federal taxes, requiring corporations and the ultra-wealthy to pay a fair share, raising the federal minimum wage to at least $15 per hour, and eliminating broad across-the-board tariffs.",
        "sourceIds": [
          "s-campaign-issues"
        ]
      },
      "actions": [
        {
          "id": "ae-affordability-1",
          "date": "2026-02-11",
          "body": "The Iola Register reported Murray said he would undo tariff policy and raise the minimum wage.",
          "sourceIds": [
            "s-iola-register"
          ]
        },
        {
          "id": "ae-affordability-2",
          "date": "2026-03-16",
          "body": "Kansas Reflector reported Murray supports raising the minimum wage and said tariffs are a tax.",
          "sourceIds": [
            "s-kansas-reflector-profile"
          ]
        },
        {
          "id": "ae-affordability-3",
          "date": "2026-03-08",
          "body": "Kansas Reflector forum coverage reported Murray connected tariffs and tax policy with community economic harm.",
          "sourceIds": [
            "s-kansas-reflector-forum"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-affordability-1",
          "platform": "YouTube",
          "observation": "Local harvest captured YouTube posts connecting tariffs to farmers, rural hospitals, and small businesses.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-taxes-wages-tariffs-affordability"
        },
        {
          "id": "ss-crossref-2",
          "platform": "youtube",
          "observation": "\"An extractive economy is one that takes more from a place than it puts back. You see it when wealth is generated locally but quickly transferred elsewhere through corporate structures, outside ownership, or policy decisions that prioritize short-term gain over long-term stability.\" (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-taxes-wages-tariffs-affordability"
        },
        {
          "id": "ss-crossref-4",
          "platform": "youtube",
          "observation": "\"Farms are closing. Rural hospitals are closing. And folks in Washington keep acting like this is just the cost of doing business. It’s not. We need leadership that fights for the people and is accountable to the people\" (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-5"
          ],
          "mappedToIssueId": "i-taxes-wages-tariffs-affordability"
        }
      ],
      "gap": {
        "summary": "No budget score, statutory text, or detailed tax-rate schedule was found.",
        "evidenceIds": [
          "ae-affordability-1"
        ]
      }
    },
    {
      "id": "i-monopoly-antitrust-small-business",
      "title": "Monopoly / Antitrust / Small Business",
      "stated": {
        "text": "Murray's campaign supports antitrust enforcement and protecting workers, small businesses, and consumers from large companies that fix prices or crush competition.",
        "sourceIds": [
          "s-campaign-issues"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-ae-antitrust-1",
          "platform": "YouTube",
          "observation": "A YouTube post described extractive economies, underinvestment, and keeping value circulating locally.",
          "observedAt": "2026-04-20",
          "sourceIds": [
            "s-youtube-rss"
          ],
          "mappedToIssueId": "i-monopoly-antitrust-small-business"
        },
        {
          "id": "ss-ae-antitrust-2",
          "platform": "YouTube",
          "observation": "A YouTube post discussed Trox as an example of local business, arts, mentorship, and community.",
          "observedAt": "2026-05-10",
          "sourceIds": [
            "s-youtube-rss"
          ],
          "mappedToIssueId": "i-monopoly-antitrust-small-business"
        },
        {
          "id": "ss-antitrust-1",
          "platform": "YouTube",
          "observation": "Local harvest topic-share analysis found local/community investment, housing, small business, affordability, and economic development were the largest cluster in the captured candidate-controlled set.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-monopoly-antitrust-small-business"
        }
      ],
      "gap": {
        "summary": "No specific federal antitrust bill endorsements or sector-by-sector competition plan were found.",
        "evidenceIds": [
          "ss-ae-antitrust-1"
        ]
      }
    },
    {
      "id": "i-democracy-civil-rights-reproductive-privacy",
      "title": "Democracy, Civil Rights, Reproductive Freedom & Privacy",
      "stated": {
        "text": "Murray's campaign supports transparency, voting-rights protection, easier voting access, women's rights, privacy rights, restoring reproductive freedom, and equal protection regardless of gender, race, age, orientation, or zip code.",
        "sourceIds": [
          "s-campaign-issues"
        ]
      },
      "actions": [
        {
          "id": "ae-civil-rights-1",
          "date": "2026-02-11",
          "body": "The Iola Register reported Murray criticized recent attempts to redraw Kansas congressional districts and said he wants congressional term limits.",
          "sourceIds": [
            "s-iola-register"
          ]
        },
        {
          "id": "ae-civil-rights-2",
          "date": "2026-05-19",
          "body": "Current campaign issue page supplies candidate-controlled language on reproductive freedom, privacy, voting rights, and equal protection; this updates older local gaps.",
          "sourceIds": [
            "s-campaign-issues"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Guns / Second Amendment: no candidate-controlled gun-policy plank found in the reviewed materials.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-youtube-rss"
          ],
          "mappedToIssueId": "i-democracy-civil-rights-reproductive-privacy"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Murray has no legislative voting record in the reviewed sources. His action evidence is campaign filing activity, campaign platform/public statements, campaign travel/events, and his professional/development record, especially the Indian Springs/Midtown Station redevelopment negotiations in Kansas City, Kansas.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-youtube-rss"
          ],
          "mappedToIssueId": "i-democracy-civil-rights-reproductive-privacy"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "No legislative votes or public administrative decisions on healthcare were found. The platform is candidate-stated.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-youtube-rss"
          ],
          "mappedToIssueId": "i-democracy-civil-rights-reproductive-privacy"
        }
      ],
      "gap": {
        "summary": "No specific abortion-limit, federal voting-rights bill, marriage-policy plank, or court-reform plan was found.",
        "evidenceIds": [
          "ae-civil-rights-1"
        ]
      }
    },
    {
      "id": "i-government-reform-ethics",
      "title": "Government Reform & Ethics",
      "stated": {
        "text": "Murray's campaign supports ending Citizens United, banning congressional stock trading, passing and enforcing a real code of ethics across all three branches, reforming lobbying and the revolving door, and restoring trust and accountability.",
        "sourceIds": [
          "s-campaign-issues"
        ]
      },
      "actions": [
        {
          "id": "ae-govreform-1",
          "date": "2026-02-11",
          "body": "The Iola Register reported Murray said he wants congressional term limits and would work to ban congressional stock trading.",
          "sourceIds": [
            "s-iola-register"
          ]
        },
        {
          "id": "ae-govreform-2",
          "date": "2026-02-22",
          "body": "Local harvest recorded a YouTube post titled \"There SHOULD be TERM LIMITS\" as the highest-engagement YouTube item in the captured set.",
          "sourceIds": [
            "s-campaign-issues"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-govreform-1",
          "platform": "YouTube",
          "observation": "Term-limits video led the captured YouTube set by view/rating count as of the May 11 harvest.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-government-reform-ethics"
        }
      ],
      "gap": {
        "summary": "No officeholder ethics record exists. NRSC disclosure complaint was not confirmed as adjudicated misconduct.",
        "evidenceIds": [
          "ae-govreform-1"
        ]
      }
    },
    {
      "id": "i-agriculture-rural-communities",
      "title": "Agriculture & Rural Communities",
      "stated": {
        "text": "Murray's campaign tariff plank says broad tariffs hurt Kansas farmers, ranchers, manufacturers, and consumers, and calls for open global markets under fair rules. Campaign materials and social posts also discuss rural hospitals and farm closures.",
        "sourceIds": [
          "s-campaign-issues"
        ]
      },
      "actions": [
        {
          "id": "ae-agriculture-1",
          "date": "2026-02-13",
          "body": "Campaign RSS lists an issue article on farm bankruptcies and mental-health crisis in Kansas.",
          "sourceIds": [
            "s-join-feed"
          ]
        },
        {
          "id": "ae-agriculture-2",
          "date": "2026-03-08",
          "body": "Local harvest captured YouTube posts on farm closures, rural hospitals, tariffs, and Washington accountability.",
          "sourceIds": [
            "s-campaign-issues"
          ]
        },
        {
          "id": "ae-agriculture-3",
          "date": "2026-03-16",
          "body": "Kansas Reflector reported Murray discussed rural hospital risk and agriculture effects in connection with federal policy.",
          "sourceIds": [
            "s-kansas-reflector-profile"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-agriculture-1",
          "platform": "YouTube",
          "observation": "Local harvest captured two items mentioning farms or rural hospitals, but no full farm-policy plan.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-agriculture-rural-communities"
        }
      ],
      "gap": {
        "summary": "No farm-bill title-by-title platform, crop insurance plank, water-policy plank, or Ogallala Aquifer statement was found.",
        "evidenceIds": [
          "ae-agriculture-1"
        ]
      }
    },
    {
      "id": "i-veterans-public-service",
      "title": "Veterans & Public Service",
      "stated": {
        "text": "Murray's campaign supports a fully funded VA, scholarships, childcare, job training, and reduced barriers for veterans, teachers, first responders, and healthcare workers.",
        "sourceIds": [
          "s-campaign-issues"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-ae-veterans-1",
          "platform": "YouTube",
          "observation": "Local harvest captured a YouTube post titled \"We Have MONEY for WAR but NOT VETERANS.\"",
          "observedAt": "2026-03-11",
          "sourceIds": [
            "s-youtube-rss"
          ],
          "mappedToIssueId": "i-veterans-public-service"
        },
        {
          "id": "ss-veterans-1",
          "platform": "YouTube",
          "observation": "Veterans/war-spending post appears in the captured YouTube feed.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-veterans-public-service"
        }
      ],
      "gap": {
        "summary": "No detailed VA policy, veterans benefits proposal, or Fort Riley-specific statement was found.",
        "evidenceIds": [
          "ss-ae-veterans-1"
        ]
      }
    },
    {
      "id": "i-energy-technology",
      "title": "Energy & Technology",
      "stated": {
        "text": "No detailed energy or technology plank was found on the main campaign issue page. Social posts discuss wind/alternative energy and AI, and the Indian Springs reporting describes a proposed solar microgrid tied to investment tax credits.",
        "sourceIds": [
          "s-campaign-issues",
          "s-youtube-rss",
          "s-kshb-indian-springs"
        ]
      },
      "actions": [
        {
          "id": "ae-energy-2",
          "date": "2026",
          "body": "KSHB reported the Indian Springs project included a proposed solar array/microgrid and time-sensitive investment tax credits.",
          "sourceIds": [
            "s-kshb-indian-springs"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-ae-energy-1",
          "platform": "YouTube",
          "observation": "YouTube RSS includes a post titled \"We NEED Alternatives Types of ENERGY (Windfarms?).\"",
          "observedAt": "2026-05-10",
          "sourceIds": [
            "s-youtube-rss"
          ],
          "mappedToIssueId": "i-energy-technology"
        },
        {
          "id": "ss-ae-technology-1",
          "platform": "YouTube",
          "observation": "YouTube RSS includes a post titled \"What we NEED to Think ABOUT AI.\"",
          "observedAt": "2026-05-10",
          "sourceIds": [
            "s-youtube-rss"
          ],
          "mappedToIssueId": "i-energy-technology"
        },
        {
          "id": "ss-energy-1",
          "platform": "YouTube",
          "observation": "Current RSS and local harvest show energy and AI posts, but they are not yet matched by detailed platform pages.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-youtube-rss"
          ],
          "mappedToIssueId": "i-energy-technology"
        }
      ],
      "gap": {
        "summary": "No detailed grid, permitting, AI regulation, or technology-workforce proposal was found.",
        "evidenceIds": [
          "ae-energy-2"
        ]
      }
    },
    {
      "id": "i-religious-liberty",
      "title": "Religious Liberty",
      "stated": {
        "text": "No candidate-controlled religious-liberty policy statement was found. Campaign biography says Murray attended Fellowship Christian Church with his grandmother and St. Patrick's Catholic School while growing up; that is biographical and should not be used to infer a policy position or current church membership.",
        "sourceIds": [
          "s-campaign-bio",
          "s-campaign-issues"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-guns-second-amendment",
      "title": "Guns / Second Amendment",
      "stated": {
        "text": "No candidate-controlled gun-policy statement was found in the reviewed campaign site, issue page, local social harvest, or current RSS checks.",
        "sourceIds": [
          "s-campaign-issues"
        ]
      },
      "actions": [],
      "socialSignals": []
    }
  ],
  "whereTheyWorship": "Public sources do not identify a current church affiliation. His public background includes childhood ties to Fellowship Christian Church and schooling at St. Patrick's Catholic School, but the available record does not identify a present-day congregation.",
  "campaignFinance": {
    "totalRaised": "$179,817.62",
    "narrative": "FEC aggregate data shows all receipts as individual contributions through March 31, 2026; party committee, other committee, candidate, transfer, and loan receipts were $0.00. Iola Register reported Murray said the campaign was funded by individuals and not PACs or corporations.",
    "donors": [],
    "undisclosed": "Itemized donor names/top donors were not extracted because OpenFEC DEMO_KEY was over rate limit and FEC transaction rows did not render server-side.",
    "reportingPeriod": "2025-11-23 to 2026-03-31",
    "source": "MURRAY, ERIK - Candidate overview"
  },
  "sources": [
    {
      "id": "s-campaign-home",
      "tier": "primary",
      "url": "https://www.erikforkansas.com/",
      "title": "Erik Murray for U.S. Senate",
      "publisher": "Erik Murray for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Homepage identifies Murray as running for U.S. Senate in Kansas",
        "Homepage says Kansans deserve change for working families and every zip code",
        "Homepage links Facebook, Instagram, YouTube, and X campaign accounts",
        "Homepage lists campaign contact emails and mailing address"
      ]
    },
    {
      "id": "s-campaign-bio",
      "tier": "primary",
      "url": "https://www.erikforkansas.com/meet-erik",
      "title": "Meet Erik",
      "publisher": "Erik Murray for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Biography says Murray was born at KU Med and raised in Kansas City, Kansas",
        "Biography says he attended Fellowship Christian Church with his grandmother, St. Patrick's Catholic School, and Sumner Academy",
        "Biography says he lives in Wyandotte County with his wife Nicole and has four children",
        "Biography links his public record to the former Indian Springs Mall redevelopment",
        "Biography summarizes thirteen campaign commitments"
      ]
    },
    {
      "id": "s-campaign-issues",
      "tier": "primary",
      "url": "https://www.erikforkansas.com/issues",
      "title": "Issues - 13 Areas of Focus",
      "publisher": "Erik Murray for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign supports universal healthcare, restoring ACA cuts, protecting and expanding Medicaid",
        "Campaign supports fully funding public education, special education, trades training, and college pathways",
        "Campaign supports building more housing, reducing excessive red tape, incentivizing construction, and investing in infrastructure",
        "Campaign supports secure/orderly borders, humane and efficient immigration administration, clear pathways, and real enforcement",
        "Campaign supports working-family tax cuts, exploring exemption of the first $75,000 to $100,000 of income, and higher taxes on corporations and ultra-wealthy people",
        "Campaign supports raising the federal minimum wage to at least $15 per hour",
        "Campaign supports antitrust enforcement and protecting workers, small businesses, and consumers from large firms that fix prices or crush competition",
        "Campaign supports a fully funded VA and support for veterans, teachers, first responders, and healthcare workers",
        "Campaign says broad tariffs are a tax and calls for eliminating broad across-the-board tariffs",
        "Campaign supports transparency, voting rights, privacy rights, restoring reproductive freedom, and equal protection regardless of gender, race, age, orientation, or zip code",
        "Campaign supports ending Citizens United, banning congressional stock trading, cross-branch ethics code, and lobbying/revolving-door reform"
      ]
    },
    {
      "id": "s-campaign-chiefs",
      "tier": "primary",
      "url": "https://www.erikforkansas.com/news/chiefs",
      "title": "The Chiefs & The Dotte",
      "publisher": "Erik Murray for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign release dated 2026-03-12 says Murray had reservations about the Chiefs stadium deal because of Wyandotte community effects",
        "Release quotes Murray saying he was not opposed to the deal but opposed leaving Wyandotte behind",
        "Release says he called for everyone involved to come back to the table"
      ]
    },
    {
      "id": "s-join-feed",
      "tier": "primary",
      "url": "https://join.erikforkansas.com/feed.xml",
      "title": "Erik Murray for Kansas - Issues & Positions RSS",
      "publisher": "Erik Murray for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "RSS feed lastBuildDate was 2026-05-19",
        "Feed lists issue articles on estate tax/agriculture, Chiefs stadium/equitable development, mortgage crisis, farm bankruptcies, and housing affordability"
      ]
    },
    {
      "id": "s-youtube-rss",
      "tier": "social",
      "url": "https://www.youtube.com/feeds/videos.xml?channel_id=UC8B-vmJtB0AKoiOF8tKJPNg",
      "title": "Erik Murray for Kansas YouTube RSS",
      "publisher": "YouTube",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "YouTube channel title is Erik Murray for Kansas",
        "Recent videos include energy/windfarms, free speech, community investment, AI, extractive economies, Sumner Academy, veterans/war, Chiefs, farmers, affordability, healthcare, education, term limits, and housing",
        "May 19 RSS readback shows public views and rating counts for recent videos"
      ]
    },
    {
      "id": "s-iola-register",
      "tier": "secondary",
      "url": "https://www.iolaregister.com/news/local-news/senate-hopeful-pays-visit-to-iola-3",
      "title": "Senate hopeful pays visit to Iola",
      "publisher": "The Iola Register",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Iola Register reports Murray visited Allen and Neosho counties in February 2026",
        "Article says this is Murray's first attempt at running for office",
        "Article reports Murray said his campaign money all came from individuals and not PACs or corporations",
        "Article reports his campaign hinges on healthcare, education, and affordability",
        "Article reports Murray supports fully funding public education, congressional term limits, banning congressional stock trading, undoing tariff policy, and raising the minimum wage"
      ]
    },
    {
      "id": "s-kansas-reflector-profile",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/16/kansas-city-entrepreneur-prioritizes-passion-decency-in-campaign-for-u-s-senate/",
      "title": "Kansas City entrepreneur prioritizes passion, decency in campaign for U.S. Senate",
      "publisher": "Kansas Reflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Kansas Reflector reports Murray is a land developer from Wyandotte County",
        "Article links his candidacy to the Indian Springs redevelopment experience",
        "Article reports healthcare, education, and economy are major focuses",
        "Article reports Murray intended to visit all 105 Kansas counties",
        "Article reports Murray discussed rural hospital risk, tariffs, minimum wage, housing, and immigration"
      ]
    },
    {
      "id": "s-kansas-reflector-forum",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/08/kansas-democrats-in-u-s-senate-campaign-focus-on-defeating-gop-incumbent/",
      "title": "Kansas Democrats in U.S. Senate campaign focus on defeating GOP incumbent",
      "publisher": "Kansas Reflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Kansas Reflector reports Murray participated in a March 8, 2026 Democratic candidate forum",
        "Article reports Murray remarks on immigration, tariffs, tax policy, schools, and rural hospitals"
      ]
    },
    {
      "id": "s-kshb-indian-springs",
      "tier": "secondary",
      "url": "https://www.kshb.com/news/local-news/kansas/wyandotte-county/indian-springs-mall-site-redevelopment-in-limbo-as-kck-developer-unified-government-cant-agree-on-plan",
      "title": "Indian Springs Mall site redevelopment in limbo as KCK developer, Unified Government can't agree on plan",
      "publisher": "KSHB 41",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "KSHB identifies Murray as managing partner of Eastside Innovation",
        "Article reports the proposed Midtown Station plan includes housing, affordable housing, childcare, retail, hotel, and grocery store",
        "Article reports disputes over land price, capital stack, tax-credit timing, outside-counsel fees, and negotiating transparency",
        "Article quotes both Murray and Unified Government officials"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "social",
      "url": "https://www.youtube.com/@Erik4KS",
      "title": "youtube / Youtube",
      "publisher": "Youtube",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Healthcare.",
        "Description: \"Erik is running for U.S. Senate because he knows it’s time that we stop electing the same old politicians who let our communities falter, the economy decline, and hea"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "social",
      "url": "https://www.youtube.com/shorts/7otJxN9_jS8",
      "title": "youtube / Youtube",
      "publisher": "Youtube",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Education.",
        "\"The result is familiar: hollowed out main streets, underfunded schools, and communities that are told to be patient while their resources are steadily drained. Kansas knows this p",
        "Observed public online activity mapped to Taxes, Wages, Tariffs & Affordability."
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "social",
      "url": "https://www.youtube.com/shorts/H7J_Nnc7uyo",
      "title": "youtube / Youtube",
      "publisher": "Youtube",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Housing & Community Development.",
        "\"That’s what makes places like this matter. It’s not just coffee. It’s art, mentorship, memory, small business, and community all in one space.\" (source)"
      ]
    },
    {
      "id": "s-social-crossref-4",
      "tier": "secondary",
      "url": "https://erikforkansas.com/news/chiefs",
      "title": "erikforkansas.com / Erikforkansas",
      "publisher": "Erikforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Housing & Community Development.",
        "\"For decades, Wyandotte County has been treated as a corridor to drive through, not a community to invest in, with highways like 635 carving through neighborhoods such as Quindaro "
      ]
    },
    {
      "id": "s-social-crossref-5",
      "tier": "social",
      "url": "https://www.youtube.com/shorts/rvz2rpE2LRw",
      "title": "youtube / Youtube",
      "publisher": "Youtube",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Taxes, Wages, Tariffs & Affordability.",
        "\"Farms are closing. Rural hospitals are closing. And folks in Washington keep acting like this is just the cost of doing business. It’s not. We need leadership that fights for the "
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(ERIK_MURRAY_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[erik-murray.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
