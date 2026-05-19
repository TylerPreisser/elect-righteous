/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const SCOTT_SCHWAB_V2: CandidateFullV2 = {
  "slug": "scott-schwab",
  "name": "Scott Schwab",
  "party": "R",
  "position": "Governor candidate",
  "electionSlug": "kansas-governor-2026",
  "incumbent": false,
  "occupation": "Kansas Secretary of State",
  "religion": "Non-denominational",
  "campaignWebsite": "https://scottschwab.com/",
  "issues": [
    {
      "id": "election-administration-voter-rolls-transparency",
      "title": "Election Administration / Voter Rolls / Public Records",
      "stated": {
        "text": "Schwab's campaign and official office materials center election integrity, voter ID, state control of elections, voter-roll maintenance, voter-registration data protections, and agency modernization. His office described HB 2437 / the SAVE Kansas Act as his primary 2026 election-policy initiative.",
        "sourceIds": [
          "s-campaign-site",
          "s-sos-jan2026-agenda",
          "s-sos-apr2026-hb2437-release",
          "s-sos-apr2026-congress-testimony"
        ]
      },
      "actions": [
        {
          "id": "action-hb2437-save-kansas-act",
          "date": "2026-04-09",
          "body": "HB 2437, described by the Secretary of State's office as Schwab's primary election-policy initiative, became law after a veto override.",
          "sourceIds": [
            "s-sos-apr2026-hb2437-release",
            "s-ksleg-hb2437",
            "s-ksleg-hb2437-brief"
          ]
        },
        {
          "id": "action-2026-legislative-agenda",
          "date": "2026-01-07",
          "body": "Schwab announced a 2026 office legislative agenda covering voter-roll maintenance, secure data checks, registration-data protections, signature verification, election-law cleanup, business services, and regulatory modernization.",
          "sourceIds": [
            "s-sos-jan2026-agenda"
          ]
        },
        {
          "id": "action-congress-testimony-voter-rolls",
          "date": "2026-04-16",
          "body": "Schwab testified before the U.S. House Committee on House Administration regarding Kansas voter-roll maintenance and new data tools.",
          "sourceIds": [
            "s-sos-apr2026-congress-testimony"
          ]
        },
        {
          "id": "record-kora-provisional-ballot-data",
          "date": "2022-07-22",
          "body": "KCUR/Kansas News Service reported that the Kansas Court of Appeals ruled Schwab violated KORA by directing a vendor to disable a provisional-ballot report feature that made records easier to obtain.",
          "sourceIds": [
            "s-kcur-kora-2022",
            "s-findlaw-hammet-v-schwab"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "social-election-footprint",
          "platform": "Public web / X / office channels",
          "observation": "The local social harvest found both @ScottSchwabKS and @KansasSOS profile metadata, but logged-out capture did not expose reliable post-level inventory or engagement.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "election-administration-voter-rolls-transparency"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Facebook",
          "observation": "The campaign website frames the candidacy around state governance, tax costs, business regulation, rural Kansas, election administration, and federal election authority. Its visible social links route to Facebook, X, and Instagram. The site says, \"As Governor, Scott will continue to fight against federal interference in our state.\" (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-site"
          ],
          "mappedToIssueId": "election-administration-voter-rolls-transparency"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Facebook",
          "observation": "1. Campaign site homepage and priorities page, captured 2026-05-11. Key visible issue areas: governor campaign, tax costs, business regulation, rural Kansas, election administration, public safety, and federal election authority. (source) 2. Campaign Facebook page metadata, captured 2026-05-11. Page-level public signal: 1,759 likes and 63 talking about this. (source) 3. Campaign Instagram metadata, captured...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-site"
          ],
          "mappedToIssueId": "election-administration-voter-rolls-transparency"
        }
      ],
      "gap": {
        "summary": "The record combines strong candidate/office emphasis on election integrity and voter-roll maintenance with a documented 2022 open-records loss over provisional-ballot data access. Present these as separate record facts; do not infer motive.",
        "evidenceIds": [
          "action-hb2437-save-kansas-act"
        ]
      }
    },
    {
      "id": "taxes-appraisals-local-government",
      "title": "Taxes / Appraisals / Local Government Accountability",
      "stated": {
        "text": "Schwab's campaign site says he would cut taxes, lower costs, reduce regulations, and bring jobs to rural Kansas. In Hays, he framed the property-tax problem around the appraisal process, opposed a hard static constitutional cap, and favored sending all property-tax increases to voters.",
        "sourceIds": [
          "s-campaign-site",
          "s-hayspost-jeans"
        ]
      },
      "actions": [
        {
          "id": "statement-hays-property-tax-voters",
          "date": "2026-03-22",
          "body": "Hays Post reported Schwab said property taxes were crushing people, identified appraisal process as the problem, said a static cap would not work, and favored all property-tax increases going to voters.",
          "sourceIds": [
            "s-hayspost-jeans"
          ]
        },
        {
          "id": "statement-campaign-tax-regulation",
          "date": "2026-05-19",
          "body": "The campaign site says Schwab would cut taxes and costs for families and cut regulations that burden businesses.",
          "sourceIds": [
            "s-campaign-site"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "X",
          "observation": "Personal/campaign X profile metadata, captured 2026-05-11. (source) 5. Office X profile metadata, captured 2026-05-11. (source) 6. Kansas Secretary of State YouTube channel metadata, captured 2026-05-11. (source) 7. Jan. 8, 2025 campaign launch coverage with Schwab quotes on Kansas, property taxes, rural communities, election administration, and federal/state authority. (source) 8. Mar.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "taxes-appraisals-local-government"
        },
        {
          "id": "ss-crossref-3",
          "platform": "KCUR",
          "observation": "His campaign channel presents the governor race through tax costs, rural Kansas, business regulation, public safety, and state authority over elections. The campaign site says, \"As Governor, Scott will continue to fight against federal interference in our state.\" (source) KCUR’s January 2025 campaign-launch report quoted Schwab saying, \"I believe that to do something great, we have to throw off the chains that...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-site"
          ],
          "mappedToIssueId": "taxes-appraisals-local-government"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "Several issue areas were not visible in the accessible material reviewed. The public set did not include captured items centered on Medicaid expansion, rural hospital closures, child care, K-12 school finance, higher education affordability, foster care, housing costs, water policy, Ogallala aquifer policy, veterans services, road and bridge funding, or broadband buildout. The available record is therefore most...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "taxes-appraisals-local-government"
        }
      ],
      "gap": {
        "summary": "The accessible record gives a property-tax approach, but not a full fiscal model showing state-local revenue tradeoffs, school-finance effects, or replacement revenue.",
        "evidenceIds": [
          "statement-hays-property-tax-voters"
        ]
      }
    },
    {
      "id": "rural-kansas-agriculture-water-energy",
      "title": "Rural Kansas / Agriculture / Water / Energy",
      "stated": {
        "text": "Schwab's campaign labels one priority as J.E.A.N.S: Jobs, Education, Agriculture, Networking and Sustainability. In Hays, he connected the plan to rural manufacturing, community-college training, Highway 83, agriculture, water, energy, rural schools, and rural hospitals.",
        "sourceIds": [
          "s-campaign-site",
          "s-hayspost-jeans"
        ]
      },
      "actions": [
        {
          "id": "statement-jeans-hays",
          "date": "2026-03-22",
          "body": "Schwab promoted the JEANS plan in Hays and discussed rural workforce training, small manufacturing, Highway 83, agriculture, water, energy, rural schools, and rural hospitals.",
          "sourceIds": [
            "s-hayspost-jeans"
          ]
        },
        {
          "id": "statement-water-conservation",
          "date": "2026-03-22",
          "body": "Schwab said he supported a combination of water regulation and voluntary conservation; Hays Post noted he did not address agricultural water use in detail in that interview.",
          "sourceIds": [
            "s-hayspost-jeans"
          ]
        },
        {
          "id": "statement-energy-all-forms",
          "date": "2026-03-22",
          "body": "Schwab said he supported all forms of energy production, including wind and solar, and tied energy availability to affordability and rural opportunity.",
          "sourceIds": [
            "s-hayspost-jeans",
            "s-freestate-debate-transcript"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Campaign site labels one priority \"J.E.A.N.S: Jobs, Education, Agriculture, Networking and Sustainability.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "rural-kansas-agriculture-water-energy"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Hays Post interview: Schwab promoted the JEANS plan in Hays; discussed community-college job training, small manufacturing in rural communities, Highway 83 expansion, water regulation plus voluntary conservation, all forms of energy, rural schools, rural hospitals, and agriculture as a seventh of Kansas's economy.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "rural-kansas-agriculture-water-energy"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Any candidate-controlled statement on Medicaid expansion, foster care, housing, veterans services, or broadband beyond the broad rural/community framing in Hays Post.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "rural-kansas-agriculture-water-energy"
        }
      ],
      "gap": {
        "summary": "The Hays interview gives clear rural priorities but not detailed implementation, funding, or water-use tradeoffs for agriculture.",
        "evidenceIds": [
          "statement-jeans-hays"
        ]
      }
    },
    {
      "id": "education-school-choice",
      "title": "Education / School Choice / Local Control",
      "stated": {
        "text": "The campaign site says Schwab worked in the Kansas House to bring local control to Kansas schools. A secondary debate transcript attributes to him support for eliminating the federal Department of Education, school choice/competition, removing cell phones from public classrooms, and making teachers the highest-paid person in school buildings.",
        "sourceIds": [
          "s-campaign-site",
          "s-freestate-debate-transcript"
        ]
      },
      "actions": [
        {
          "id": "statement-education-debate",
          "date": "2026-01-30",
          "body": "Free State News transcript attributes to Schwab education statements on federal education authority, school choice/competition, classroom cell phones, teacher pay, and public education.",
          "sourceIds": [
            "s-freestate-debate-transcript"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Campaign site says Schwab worked in the Kansas House to bring local control to Kansas schools.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "education-school-choice"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Campaign site priority label: JEANS, \"Jobs, Education, Agriculture, Networking and Sustainability.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "education-school-choice"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Hays Post: community-college training for local jobs; small manufacturers in rural communities; Kansas as agricultural epicenter; U.S. Highway 83 four-laning; water regulation plus voluntary conservation; all forms of energy; rural communities need to keep schools and hospitals; agriculture is a seventh of Kansas's economy.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "education-school-choice"
        }
      ],
      "gap": {
        "summary": "No official debate transcript or detailed education plan was found. Treat the transcript as secondary evidence until an official video or campaign transcript is captured.",
        "evidenceIds": [
          "statement-education-debate"
        ]
      }
    },
    {
      "id": "abortion-judicial-selection",
      "title": "Abortion / Judicial Selection",
      "stated": {
        "text": "At the January 2026 GOP debate, reporting said Schwab joined other Republican candidates in seeking to reduce abortions and support a constitutional amendment to elect Kansas Supreme Court justices. His abortion comments were tied to criticism of the Kansas Supreme Court's abortion-rights precedent and legislative authority.",
        "sourceIds": [
          "s-wichitaeagle-jan2026-gop-debate",
          "s-freestate-debate-transcript"
        ]
      },
      "actions": [
        {
          "id": "statement-abortion-gop-debate",
          "date": "2026-01-30",
          "body": "Wichita Eagle/Kansas Reflector quoted Schwab saying he was frustrated with the court and felt horrible that a young woman could be manipulated to have an abortion with no recourse.",
          "sourceIds": [
            "s-wichitaeagle-jan2026-gop-debate"
          ]
        },
        {
          "id": "statement-elect-justices",
          "date": "2026-01-30",
          "body": "Debate coverage reported Schwab and the other participating GOP candidates backed a proposed amendment to replace Kansas Supreme Court merit selection with statewide elections.",
          "sourceIds": [
            "s-wichitaeagle-jan2026-gop-debate",
            "s-freestate-debate-transcript"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "sos.ks.gov",
          "observation": "Schwab said, \"We use a mix of laws, regulations, and internal reforms to deliver better service, protect election integrity, modernize the agency, and run government more efficiently.\" (source) 10. Jan. 7, 2026 Kansas Secretary of State release on government service.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-sos-jan2026-agenda"
          ],
          "mappedToIssueId": "abortion-judicial-selection"
        }
      ],
      "gap": {
        "summary": "The accessible record confirms broad opposition to abortion and support for changing judicial selection, but not a full governor's implementation plan for abortion policy under existing Kansas constitutional precedent.",
        "evidenceIds": [
          "statement-abortion-gop-debate"
        ]
      }
    },
    {
      "id": "marijuana-drug-policy",
      "title": "Marijuana / Drug Policy",
      "stated": {
        "text": "Debate reporting said Schwab and the other participating Republican candidates rejected medical or recreational marijuana legalization. A secondary transcript attributes to Schwab support for research and FDA-approved dispensing while opposing legalization in current forms.",
        "sourceIds": [
          "s-wichitaeagle-jan2026-gop-debate",
          "s-freestate-debate-transcript"
        ]
      },
      "actions": [
        {
          "id": "statement-marijuana-debate",
          "date": "2026-01-30",
          "body": "Free State News transcript attributes to Schwab concerns about marijuana product strength variability, lack of rapid THC testing, road safety, and the distinction between FDA-approved medicine and broader legalization.",
          "sourceIds": [
            "s-freestate-debate-transcript"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "No candidate-controlled written drug-policy plan was found. The strongest evidence is debate coverage plus a secondary transcript.",
        "evidenceIds": [
          "statement-marijuana-debate"
        ]
      }
    },
    {
      "id": "immigration-public-safety-guns",
      "title": "Immigration / Public Safety / Guns",
      "stated": {
        "text": "The campaign site says Schwab would fully fund public safety, work with the Trump administration on enforcing immigration laws, and protect Second Amendment rights. A debate transcript attributes to Schwab a federal-cooperation frame in which governors should work with the president regardless of party.",
        "sourceIds": [
          "s-campaign-site",
          "s-freestate-debate-transcript"
        ]
      },
      "actions": [
        {
          "id": "statement-campaign-security",
          "date": "2026-05-19",
          "body": "The campaign site says Schwab would ban communist China from buying land near military bases, fully fund public safety, work with the Trump administration on immigration-law enforcement, and protect Second Amendment rights.",
          "sourceIds": [
            "s-campaign-site"
          ]
        },
        {
          "id": "statement-federal-cooperation",
          "date": "2026-01-30",
          "body": "Free State News transcript attributes to Schwab a statement that governors should work with the president regardless of party and references his work with CISA, FBI, and Homeland Security on election security.",
          "sourceIds": [
            "s-freestate-debate-transcript"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "The public record contains campaign statements, but no governor-level action record because Schwab has not held that office.",
        "evidenceIds": [
          "statement-campaign-security"
        ]
      }
    },
    {
      "id": "family-policy-womens-sports-faith-language",
      "title": "Family Policy / Women's Sports / Public Faith Language",
      "stated": {
        "text": "The campaign site says Schwab's Christian faith has guided him at home and in his work as Secretary of State, and says he would protect women's sports and strengthen Kansas families. This is included only as candidate-controlled text, not as a basis for inferring personal belief or church status.",
        "sourceIds": [
          "s-campaign-site"
        ]
      },
      "actions": [
        {
          "id": "statement-campaign-values",
          "date": "2026-05-19",
          "body": "The campaign site includes faith self-description and states support for women's sports and strengthening Kansas families.",
          "sourceIds": [
            "s-campaign-site"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "No detailed policy plan or current church-controlled membership source was found for this issue area.",
        "evidenceIds": [
          "statement-campaign-values"
        ]
      }
    }
  ],
  "whoTheyAre": "text: Scott Schwab is Kansas Secretary of State and a Republican candidate for governor in 2026. Official and campaign biographies identify him as a Great Bend native, Fort Hays State University graduate, former Kansas House member, former Speaker Pro Tempore, and statewide officer first elected in 2018 and re-elected in 2022.; sourceIds: s-sos-bio; s-campaign-site",
  "recordSummary": "Kansas Secretary of State",
  "ownWordsNarrative": "summary: Public social evidence is limited to presence and profile metadata. No current post-level likes, comments, reposts, follows, or audience responses were available in the 2026-05-19 re-check.; sourceIds: s-social-harvest-local; signals: id: social-facebook-page-metadata; platform: Facebook; observedAt: 2026-05-11; observation: Campaign Facebook page metadata listed 1,759 likes and 63 talking about this; post inventory was limited in logged-out capture.; sourceIds: s-social-harvest-local; id: social-instagram-profile-metadata; platform: Instagram; observedAt: 2026-05-11; observation: Campaign Instagram metadata listed 184 followers, 167 following, and 57 posts; post inventory was limited in logged-out capture.; sourceIds: s-social-harvest-local; id: social-x-office-campaign-presence; platform: X; observedAt: 2026-05-11; observation: The local harvest found @ScottSchwabKS and @KansasSOS profile metadata, but no dependable logged-out post-level inventory or repost count.; sourceIds: s-social-harvest-local",
  "whereTheyWorship": "Public sources tie Schwab and his family to LifeMission Church in Olathe. The church website is https://www.lifemission.church/, and the congregation became part of the public record after Caleb Schwab's funeral was held there in 2016.",
  "campaignFinance": {
    "totalRaised": "Schwab's 2025 year-end report showed $1,418,671.56 in contributions and other receipts, $365,533.06 in expenditures, $1,053,138.50 cash on hand, and $1,045,000 in Scott Schwab loans. The campaign therefore entered 2026 with substantial cash and a major self-funding component.",
    "narrative": "Schwab's 2025 year-end report showed $1,418,671.56 in contributions and other receipts, $365,533.06 in expenditures, $1,053,138.50 cash on hand, and $1,045,000 in Scott Schwab loans. The campaign therefore entered 2026 with substantial cash and a major self-funding component.",
    "donors": [
      {
        "name": "Scott Schwab",
        "amount": "$1,045,000 total loans"
      },
      {
        "name": "Jenni Prochnow",
        "amount": "$4,000"
      },
      {
        "name": "Frankie Giudicessi",
        "amount": "$4,000"
      },
      {
        "name": "Evergy PAC",
        "amount": "$2,000"
      },
      {
        "name": "Kansas Automobile Dealers Association PAC",
        "amount": "$2,500"
      },
      {
        "name": "Kansas Contractors Association PAC",
        "amount": "$4,000"
      },
      {
        "name": "Bayer PAC",
        "amount": "$1,000"
      }
    ],
    "reportingPeriod": "2025-01-01 through 2025-12-31",
    "source": "Kansas State Wide Office - 2026 Election Cycle"
  },
  "sources": [
    {
      "id": "s-campaign-site",
      "tier": "primary",
      "url": "https://scottschwab.com/",
      "title": "Scott Schwab for Governor",
      "publisher": "Schwab for Governor",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The campaign site presents Schwab as a governor candidate",
        "The campaign site lists biography, campaign priorities, and social links",
        "The campaign site says Schwab championed voter ID legislation",
        "The campaign site says Schwab would cut taxes and regulations",
        "The campaign site says Schwab would work with the Trump administration on immigration enforcement",
        "The campaign site says Schwab would protect Second Amendment rights",
        "The campaign site says Schwab would protect women's sports and strengthen Kansas families",
        "The campaign site includes candidate-controlled Christian self-description",
        "Observed public online activity mapped to Election Administration / Voter Rolls / Public Records.",
        "Observed public online activity mapped to Taxes / Appraisals / Local Government Accountability."
      ]
    },
    {
      "id": "s-sos-jan2026-agenda",
      "tier": "primary",
      "url": "https://www.sos.ks.gov/media/press-releases/2026/01-07-26-secretary-schwab-outlines-legislative-agenda-centered-on-efficiency-integrity-and-better-service.html",
      "title": "Secretary Schwab Outlines Legislative Agenda Centered on Efficiency, Integrity, and Better Service",
      "publisher": "Kansas Secretary of State",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Schwab announced a 2026 legislative agenda on election administration, business services, regulatory modernization, and cost reduction",
        "The agenda included voter roll maintenance, secure data checks, voter-registration data protections, signature verification, and election-law cleanup",
        "Schwab said good government is about practical improvements that save money and serve Kansans better",
        "Observed public online activity mapped to Abortion / Judicial Selection."
      ]
    },
    {
      "id": "s-sos-apr2026-hb2437-release",
      "tier": "primary",
      "url": "https://www.sos.ks.gov/media/press-releases/2026/04-09-26-secretary-schwabs-voter-roll-maintenance-bill-becomes-law-after-veto-override.html",
      "title": "Secretary Schwab's Voter Roll Maintenance Bill Becomes Law After Veto Override",
      "publisher": "Kansas Secretary of State",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The Secretary of State's office described HB 2437 as Schwab's primary election-policy initiative",
        "The bill became law after the Legislature overrode Governor Kelly's veto",
        "The release lists additional voter-roll tools and privacy protections",
        "Schwab said the bill reflected a commitment to accurate voter rolls and eligible-voter rights"
      ]
    },
    {
      "id": "s-sos-apr2026-congress-testimony",
      "tier": "primary",
      "url": "https://www.sos.ks.gov/media/press-releases/2026/04-16-26-secretary-scott-schwab-testifies-before-congress-regarding-voter-roll-maintenance.html",
      "title": "Secretary Scott Schwab Testifies Before Congress Regarding Voter Roll Maintenance",
      "publisher": "Kansas Secretary of State",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Schwab testified before the U.S. House Committee on House Administration on voter-roll maintenance",
        "Schwab highlighted the SAVE Kansas Act and data sharing to improve voter-roll accuracy"
      ]
    },
    {
      "id": "s-ksleg-hb2437",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/hb2437/",
      "title": "HB 2437",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "HB 2437 establishes the SAVE Kansas Act",
        "HB 2437 authorizes additional resources for verifying voter-registration records",
        "HB 2437 imposes restrictions on websites that can accept and transmit voter-registration applications",
        "HB 2437 provides an open-records request exemption for certain voter-registration maintenance information"
      ]
    },
    {
      "id": "s-ksleg-hb2437-brief",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/documents/view-leg/?apn=b2025_26%2Fds_docs_li%2Fccrb_hb2437_02_03240800.pdf",
      "title": "HB 2437 Conference Committee Report Brief",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The brief says HB 2437 concerns voter-registration record maintenance and online voter-registration website restrictions",
        "The brief says proponent testimony came from a representative of the Office of the Secretary of State"
      ]
    },
    {
      "id": "s-hayspost-jeans",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1eca7cdb-2b48-400f-a610-7af08aff7ee8",
      "title": "Gubernatorial candidate Schwab: Take local property taxes to voters",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Schwab promoted his JEANS plan in Hays in March 2026",
        "Schwab said property taxes are crushing people",
        "Schwab said he thought the appraisal process was the problem",
        "Schwab said a hard constitutional cap on property taxes would not work",
        "Schwab favored all property-tax increases going to voters",
        "Schwab discussed water regulation and voluntary conservation",
        "Schwab discussed community-college job training, rural manufacturing, Highway 83, energy, rural schools, rural hospitals, and agriculture"
      ]
    },
    {
      "id": "s-wichitaeagle-jan2026-gop-debate",
      "tier": "secondary",
      "url": "https://www.kansas.com/news/politics-government/election/article314520177.html",
      "title": "Kansas GOP candidates for governor toss haymakers in debate, find unity on key issues",
      "publisher": "Wichita Eagle / Kansas Reflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Six Republican governor candidates participated in the January 2026 debate",
        "Schwab said experience understanding the terrain was a plus",
        "The candidates found common ground on reducing abortions, rejecting marijuana legalization, and supporting elected Supreme Court justices",
        "Schwab made abortion and court-selection comments at the debate"
      ]
    },
    {
      "id": "s-freestate-debate-transcript",
      "tier": "secondary",
      "url": "https://freestatenews.net/local-issues/gop-governors-debate-transcript-part-2/",
      "title": "GOP Governors Debate Transcript Part 2",
      "publisher": "Free State News",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The transcript attributes education, marijuana, immigration, energy, judicial-selection, and property-tax statements to Schwab",
        "The transcript is not an official campaign or party transcript"
      ]
    },
    {
      "id": "s-kcur-kora-2022",
      "tier": "secondary",
      "url": "https://www.kcur.org/news/2022-07-22/kansas-court-says-the-secretary-of-state-violated-open-records-law-and-made-it-hard-to-get-documents",
      "title": "Kansas court says the secretary of state violated open records law and made it hard to get documents",
      "publisher": "KCUR / Kansas News Service",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "KCUR reported the Kansas Court of Appeals ruled Schwab violated KORA",
        "The case concerned disabling a software report feature for provisional-ballot data",
        "KCUR quoted the court saying the action violated KORA"
      ]
    },
    {
      "id": "s-findlaw-hammet-v-schwab",
      "tier": "primary",
      "url": "https://caselaw.findlaw.com/court/ks-court-of-appeals/2180584.html",
      "title": "Hammet v. Schwab",
      "publisher": "Kansas Court of Appeals opinion mirror at FindLaw",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The court case provides a primary-law anchor for the KORA/provisional-ballot-record dispute"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "social",
      "url": "https://x.com/ScottSchwabKS",
      "title": "X / X",
      "publisher": "X",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Taxes / Appraisals / Local Government Accountability.",
        "Personal/campaign X profile metadata, captured 2026-05-11. (source) 5. Office X profile metadata, captured 2026-05-11. (source) 6. Kansas Secretary of State YouTube channel metadat"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(SCOTT_SCHWAB_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[scott-schwab.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
