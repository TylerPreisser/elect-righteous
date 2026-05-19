/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const KRIS_KOBACH_V2: CandidateFullV2 = {
  "slug": "kris-kobach",
  "name": "Kris Kobach",
  "party": "R",
  "position": "Kansas Attorney General",
  "electionSlug": "kansas-ag-2026",
  "incumbent": true,
  "occupation": "Attorney General / Former Secretary of State",
  "religion": "Evangelical / Non-denominational (affiliated with Morning Star International, Nashville)",
  "campaignWebsite": "https://kriskobach.com/",
  "issues": [
    {
      "id": "i-public-safety-law-enforcement",
      "title": "Public Safety / Law Enforcement / Fentanyl",
      "stated": {
        "text": "Kobach's re-election campaign presents law enforcement, fentanyl enforcement, KBI responsiveness, organized retail crime, and crime-rate reductions as central parts of his attorney-general record. His May 2026 campaign release announced 51 sheriff endorsements, including Ellis County Sheriff Scott Braun.",
        "sourceIds": [
          "s-kobach-sheriffs-2026",
          "s-kobach-filing-release-2026"
        ]
      },
      "actions": [
        {
          "id": "ae-public-safety-1",
          "date": "2026-05-14",
          "body": "Campaign announced 51 sheriff endorsements for Kobach's AG re-election and tied them to law-enforcement collaboration, KBI work, fentanyl, organized retail crime, and crime-rate claims.",
          "sourceIds": [
            "s-kobach-sheriffs-2026"
          ]
        },
        {
          "id": "ae-public-safety-2",
          "date": "2026-05-11",
          "body": "Official AG release index and social harvest show recent office activity around child safety, victim services, elder abuse prosecution, naloxone, and public-safety communications.",
          "sourceIds": [
            "s-kobach-sheriffs-2026",
            "s-kobach-filing-release-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-public-safety-1",
          "platform": "X / public mirror",
          "observation": "May 2026 logged-out harvest found recent Kobach and AG-office public mirror items about fentanyl, naloxone boxes, and K-9 grants. Engagement figures are mirror-limited and not treated as a complete X archive.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-public-safety-law-enforcement"
        },
        {
          "id": "ss-crossref-2",
          "platform": "X",
          "observation": "The strongest public social signal is X. The indexed profile for @KrisKobach1787 listed 26K followers and a bio separating campaign updates from official state business. Recent indexed posts concentrate on immigration, noncitizen voting, in-state tuition, SNAP data, judicial selection, fentanyl/naloxone, federal overreach, private property, tariffs, and staff/judicial appointments. The official @KSAGOffice feed...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-public-safety-law-enforcement"
        },
        {
          "id": "ss-crossref-4",
          "platform": "LinkedIn",
          "observation": "LinkedIn exposes a different office-administration signal. The Kansas Attorney General LinkedIn page listed 894 followers in logged-out capture and showed recent updates on a Nexstar/Tegna lawsuit, naloxone access, law enforcement memorial events, senior-resource outreach, alcohol prevention for parents, roofing-contractor registration, crime-victim awards, medication disposal, and VINE notifications. Engagement...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-public-safety-law-enforcement"
        }
      ],
      "gap": {
        "summary": "The campaign's 'lowest crime rate in 56 years' claim was not independently verified against KBI statistics in this pass.",
        "evidenceIds": [
          "ae-public-safety-1"
        ]
      }
    },
    {
      "id": "i-immigration-election-integrity",
      "title": "Immigration / Election Integrity / Noncitizen Voting",
      "stated": {
        "text": "Kobach has made immigration enforcement, citizenship verification, and noncitizen-voting prevention a core part of his public record. As attorney general, he has led or joined litigation and amicus efforts involving DACA health-benefit eligibility, proof-of-citizenship election laws, voter-list verification, and noncitizen voting.",
        "sourceIds": [
          "s-ag-bio",
          "s-ag-daca-obamacare",
          "s-ag-noncitizen-amicus-2026",
          "s-ag-election-eo-2026"
        ]
      },
      "actions": [
        {
          "id": "ae-immigration-1",
          "date": "2024-08-08",
          "body": "Filed a federal lawsuit challenging a Biden-Harris administration rule making DACA recipients eligible for taxpayer-subsidized ACA exchange plans; AG page says 4,350 Kansas DACA recipients were implicated by the rule.",
          "sourceIds": [
            "s-ag-daca-obamacare"
          ]
        },
        {
          "id": "ae-immigration-2",
          "date": "2026-03-30",
          "body": "Led 25 states in U.S. Supreme Court amicus briefs involving Arizona proof-of-citizenship election laws and noncitizen-voting safeguards.",
          "sourceIds": [
            "s-ag-noncitizen-amicus-2026"
          ]
        },
        {
          "id": "ae-immigration-3",
          "date": "2026-04-22",
          "body": "Kansas joined a multistate motion to defend a presidential executive order concerning citizenship verification and voter-list checks.",
          "sourceIds": [
            "s-ag-election-eo-2026"
          ]
        },
        {
          "id": "ae-immigration-4",
          "date": "2018-06-18",
          "body": "During Kobach's secretary-of-state tenure, federal courts struck down Kansas's documentary proof-of-citizenship voter-registration requirement.",
          "sourceIds": [
            "s-fish-district-court",
            "s-fish-tenth-circuit"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-immigration-1",
          "platform": "X / public mirror",
          "observation": "The May 2026 social harvest found immigration and noncitizen-voting items as the largest topic bucket in the accessible indexed sample, including posts on in-state tuition, SNAP data, Census apportionment, Obamacare eligibility, and noncitizen voting.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-immigration-election-integrity"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Facebook",
          "observation": "Kobach's public footprint is unusually split between campaign branding and the official attorney general apparatus. The campaign site is still live under the AG campaign brand, with a January 8, 2026 release saying he filed for re-election and reported $502,626 cash on hand (source). The same site links older campaign videos, Facebook, X, and YouTube, and keeps a volunteer/email/update funnel open.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-immigration-election-integrity"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Facebook",
          "observation": "Facebook, Instagram, and YouTube are confirmed as platform presence but did not expose reliable current post inventories. The campaign videos page embeds six videos, including \"Kris Kobach Testifies Before Congress,\" \"TV Ad: Can't Trust Chris Mann,\" \"TV Ad: Our Family's Safety,\" \"TV Ad: Law Enforcement Agrees,\" \"TV Ad: Kris Kobach is Ready,\" and a Fox clip about Anthony Fauci and border COVID testing (source)....",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-4"
          ],
          "mappedToIssueId": "i-immigration-election-integrity"
        }
      ],
      "gap": {
        "summary": "There is a documented record contrast between Kobach's current citizenship-verification litigation posture and the federal court record striking down his earlier Kansas proof-of-citizenship registration law. Present this as record context, not as motive.",
        "evidenceIds": [
          "ae-immigration-1"
        ]
      }
    },
    {
      "id": "i-federal-state-litigation",
      "title": "Federal-State Litigation / Special Litigation Unit",
      "stated": {
        "text": "Kobach's official biography and AG Special Litigation Unit page frame his office around constitutional litigation, challenges to federal regulations, defense of Kansas laws, and cases involving Title IX, DACA/Obamacare, and ATF rules.",
        "sourceIds": [
          "s-ag-bio",
          "s-ag-special-litigation"
        ]
      },
      "actions": [
        {
          "id": "ae-litigation-1",
          "date": "2023-2026",
          "body": "Created the AG Special Litigation Unit to handle constitutional and policy-priority litigation.",
          "sourceIds": [
            "s-ag-special-litigation"
          ]
        },
        {
          "id": "ae-litigation-2",
          "date": "2024-05-14",
          "body": "Kansas sued the U.S. Department of Education over a Title IX rule involving gender identity, facilities, due process, and First Amendment/religious-belief concerns.",
          "sourceIds": [
            "s-ag-title-ix"
          ]
        },
        {
          "id": "ae-litigation-3",
          "date": "2024-05-06",
          "body": "Kobach led a multistate challenge to an ATF rule that the AG page says violated the Second Amendment.",
          "sourceIds": [
            "s-ag-atf"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-litigation-1",
          "platform": "Campaign and official web",
          "observation": "Campaign biography and official AG pages repeatedly foreground litigation credentials and federal-government challenges rather than only routine office administration.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ag-bio",
            "s-campaign-bio",
            "s-ag-special-litigation"
          ],
          "mappedToIssueId": "i-federal-state-litigation"
        },
        {
          "id": "ss-crossref-2",
          "platform": "twstalker.com",
          "observation": "Topic: judicial selection / campaign event. (source) 5. 3 weeks ago -- Naloxone distribution box at Fort Hays Tech Northwest in Goodland. Engagement: 6 replies, 3 reposts, 12 likes, 624 views, 0 quotes. Topic: fentanyl / overdose prevention. (source) 6. 3 weeks ago -- Statement attacking Gov. Laura Kelly over turning SNAP data over to federal authorities and tying the dispute to noncitizens and deportation....",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-federal-state-litigation"
        },
        {
          "id": "ss-crossref-4",
          "platform": "twstalker.com",
          "observation": "Kelly. (source) 7. 3 weeks ago -- Lesser prairie chicken post describing delisting litigation as a win for ranchers, energy production, private property, and rural economy. Engagement on Kobach item: 9 replies, 10 reposts, 75 likes, 4K views, 2 quotes. Topic: federal regulation / rural economy / energy / property rights. (source) 8. 4 weeks ago -- State of the Union post saying Kansas had charged multiple...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-federal-state-litigation"
        }
      ]
    },
    {
      "id": "i-consumer-protection-technology",
      "title": "Consumer Protection / Antitrust / Technology",
      "stated": {
        "text": "Kobach's current AG record includes consumer-protection and technology-focused enforcement: antitrust litigation against Live Nation/Ticketmaster, warnings about AI chatbot risks, a demand letter to Apple over CSAM safeguards, scam alerts, and contractor-fraud judgments.",
        "sourceIds": [
          "s-ag-live-nation-2026",
          "s-ag-ai-psa-2026",
          "s-ag-apple-csam-2026",
          "s-ag-scam-alert-2026",
          "s-ag-contractor-judgments-2026"
        ]
      },
      "actions": [
        {
          "id": "ae-consumer-1",
          "date": "2026-04-15",
          "body": "Won a Live Nation/Ticketmaster monopolization jury verdict with a coalition of 33 other attorneys general after rejecting a DOJ/eight-state settlement.",
          "sourceIds": [
            "s-ag-live-nation-2026"
          ]
        },
        {
          "id": "ae-consumer-2",
          "date": "2026-04-14",
          "body": "Featured in a PSA warning Kansas families about AI chatbot risks to children and teenagers.",
          "sourceIds": [
            "s-ag-ai-psa-2026"
          ]
        },
        {
          "id": "ae-consumer-3",
          "date": "2026-03-20",
          "body": "Demanded Apple implement safeguards against CSAM distribution on iCloud and respond by April 17, 2026.",
          "sourceIds": [
            "s-ag-apple-csam-2026"
          ]
        },
        {
          "id": "ae-consumer-4",
          "date": "2026-05-12",
          "body": "AG office secured judgments and permanent bans against out-of-state contractors, framed as protection for seniors and Kansas consumers.",
          "sourceIds": [
            "s-ag-contractor-judgments-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-consumer-1",
          "platform": "Official AG web / LinkedIn / X mirror",
          "observation": "The social harvest found office-controlled posts on AI chatbots, fake court scams, consumer settlements, roofing registration, medication disposal, and VINE notifications; engagement was low on LinkedIn and stronger on selected X mirror items.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-consumer-protection-technology"
        },
        {
          "id": "ss-crossref-2",
          "platform": "twstalker.com",
          "observation": "Topic: children / AI / consumer protection / legislation. (source) 17. 2 months ago -- Post urging lawmakers to require Gov. Kelly to provide SNAP data to USDA. Topic: SNAP / federal-state dispute / public benefits. (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-consumer-protection-technology"
        },
        {
          "id": "ss-crossref-4",
          "platform": "X",
          "observation": "Topic: prosecution training / gangs. (source) 4. Official X mirror item: AG opinion on in-state tuition for undocumented immigrants. Engagement: 23 replies, 57 reposts, 282 likes, 10K views, 2 quotes. Topic: immigration / higher education / AG opinion. (source) 5. Official X mirror item: fake U.S. District Court email scam warning. Engagement: 8 replies, 41 reposts, 82 likes, 3K views, 0 quotes. Topic: consumer...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-5"
          ],
          "mappedToIssueId": "i-consumer-protection-technology"
        }
      ]
    },
    {
      "id": "i-gender-family-title-ix",
      "title": "Marriage & Family / Gender-Marker Policy / Title IX",
      "stated": {
        "text": "Kobach has used the attorney-general office to enforce Kansas's sex-at-birth interpretation for driver's licenses and to challenge a federal Title IX rule replacing sex with gender identity. The record is legal-action based; no additional personal belief is inferred.",
        "sourceIds": [
          "s-ag-driver-license-sex-marker",
          "s-ag-title-ix"
        ]
      },
      "actions": [
        {
          "id": "ae-gender-1",
          "date": "2024-03-11",
          "body": "AG release says Kobach prevailed in a temporary-injunction phase of State ex rel. Kobach v. Harper over driver's-license sex markers, with Kobach serving as lead counsel.",
          "sourceIds": [
            "s-ag-driver-license-sex-marker"
          ]
        },
        {
          "id": "ae-gender-2",
          "date": "2024-05-14",
          "body": "Kansas sued the Department of Education over a Title IX rule involving gender identity, facilities, due process, and First Amendment/religious-belief concerns.",
          "sourceIds": [
            "s-ag-title-ix"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-gender-1",
          "platform": "Official AG web",
          "observation": "Gender-policy evidence in this pass came from official litigation pages and releases, not from current social engagement.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ag-driver-license-sex-marker",
            "s-ag-title-ix"
          ],
          "mappedToIssueId": "i-gender-family-title-ix"
        }
      ]
    },
    {
      "id": "i-religious-liberty",
      "title": "Religious Liberty",
      "stated": {
        "text": "Kobach's campaign biography says he represented Air Force and Air National Guard members denied religious exemptions to the Biden vaccine mandate. The AG Title IX page also frames that case partly around First Amendment rights of teachers and school employees with sincerely held religious beliefs.",
        "sourceIds": [
          "s-campaign-bio",
          "s-ag-title-ix"
        ]
      },
      "actions": [
        {
          "id": "ae-religious-liberty-1",
          "date": "2022",
          "body": "Campaign biography says Kobach filed suit to stop the Air Force from expelling pilots at McConnell Air Force Base for exercising religious beliefs.",
          "sourceIds": [
            "s-campaign-bio"
          ]
        },
        {
          "id": "ae-religious-liberty-2",
          "date": "2024-05-14",
          "body": "Title IX page says the challenged rule violated First Amendment rights of teachers and school employees with sincerely held religious beliefs.",
          "sourceIds": [
            "s-ag-title-ix"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-religious-liberty-1",
          "platform": "Campaign / official web",
          "observation": "Religious-liberty signals are present through litigation references. The current social harvest did not find a repeated religious-liberty posting theme.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-bio",
            "s-ag-title-ix"
          ],
          "mappedToIssueId": "i-religious-liberty"
        },
        {
          "id": "ss-crossref-2",
          "platform": "ag.ks.gov",
          "observation": "Key visible signals: naloxone access, Census lawsuit, AG facts, consumer protection, open government, AG opinions, and official social links. 6. AG official biography, captured 2026-05-11. Key visible signals: Trump election-integrity commission, Title IX litigation, Obamacare eligibility litigation, RAGA chairmanship, family, and office service. 7. AG special litigation page, captured 2026-05-11.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ag-bio"
          ],
          "mappedToIssueId": "i-religious-liberty"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Facebook",
          "observation": "Key visible signals: suing federal government over regulations, defending Kansas laws, Title IX, DACA/Obamacare, and ATF/Second Amendment litigation. 8. BallotReady profile, captured 2026-05-11. Key visible signals: verified campaign website, Facebook, Twitter/X, Instagram; official AG website, contact page, Facebook, and Twitter/X. 9. The Federalist coverage of Pfizer lawsuit, published 2024-06-18.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-6"
          ],
          "mappedToIssueId": "i-religious-liberty"
        }
      ]
    },
    {
      "id": "i-second-amendment",
      "title": "Guns / Second Amendment",
      "stated": {
        "text": "Kobach's strongest current gun-policy evidence is attorney-general litigation. The AG special-litigation page says he led a coalition challenging an ATF rule that his office says violated the Second Amendment.",
        "sourceIds": [
          "s-ag-atf",
          "s-ag-special-litigation"
        ]
      },
      "actions": [
        {
          "id": "ae-guns-1",
          "date": "2024-05-06",
          "body": "Led a coalition challenging a Biden-Harris administration ATF rule involving individual firearms sellers.",
          "sourceIds": [
            "s-ag-atf"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-guns-1",
          "platform": "Official AG web",
          "observation": "The social harvest found Second Amendment evidence mainly through the official ATF litigation page, not as a frequent current posting theme.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-ag-atf"
          ],
          "mappedToIssueId": "i-second-amendment"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "Abortion is prominent in the broader candidate profile and older campaign record, but it was not a meaningful topic in the accessible current social sample captured for this harvest. Guns/Second Amendment appeared through the official special litigation page and ATF litigation, not as a frequent current-posting theme. Religious liberty appeared in the campaign biography through Air Force vaccine-mandate...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-second-amendment"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Public web",
          "observation": "Several areas were absent or thin in the accessible reviewed set. The current public material did not show sustained discussion of Medicaid expansion, rural hospital finance, prescription drug affordability, child care costs, housing affordability, transportation, broadband, water policy, the Ogallala Aquifer, foster care, adoption, or veterans services. Abortion is prominent in the broader candidate profile and...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-second-amendment"
        }
      ]
    },
    {
      "id": "i-abortion-prolife-speech",
      "title": "Abortion / Pro-Life Student Speech",
      "stated": {
        "text": "The clearest current official source found in this pass is a March 2026 AG news-index item saying Kobach led fourteen states in support of a student's First Amendment claim after flyers for a pro-life student group were forbidden.",
        "sourceIds": [
          "s-ag-prolife-student-release-index"
        ]
      },
      "actions": [
        {
          "id": "ae-abortion-1",
          "date": "2026-03-09",
          "body": "Official AG release index says Kobach led a 14-state coalition in a Supreme Court student-speech matter involving a pro-life student group.",
          "sourceIds": [
            "s-ag-prolife-student-release-index"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-abortion-1",
          "platform": "Public web / local social harvest",
          "observation": "Existing social harvest found abortion prominent in broader older profile material, but not a repeated topic in the accessible current May 2026 social sample.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-abortion-prolife-speech"
        }
      ],
      "gap": {
        "summary": "The direct URL for the March 2026 pro-life student release was not isolated in this pass; the official release index is usable but should be replaced by the direct release URL if a browser worker can fetch it.",
        "evidenceIds": [
          "ae-abortion-1"
        ]
      }
    },
    {
      "id": "i-judicial-selection",
      "title": "Judicial Selection / Kansas Supreme Court Amendment",
      "stated": {
        "text": "Kobach is a documented supporter of changing Kansas Supreme Court selection toward direct elections. Kansas Legislature testimony and existing local ballot-measure research identify him as a public advocate for the 2026 judicial-selection amendment.",
        "sourceIds": [
          "s-ksleg-judicial-selection-testimony"
        ]
      },
      "actions": [
        {
          "id": "ae-judicial-selection-1",
          "date": "2025-02-25",
          "body": "Submitted testimony to the Kansas Legislature on Kansas Supreme Court selection.",
          "sourceIds": [
            "s-ksleg-judicial-selection-testimony"
          ]
        },
        {
          "id": "ae-judicial-selection-2",
          "date": "2026-05-11",
          "body": "Existing social harvest found a current indexed X item from Colby/NWKS Radio about judicial selection reform and voters choosing Kansas Supreme Court justices.",
          "sourceIds": [
            "s-ksleg-judicial-selection-testimony"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-judicial-selection-1",
          "platform": "X / public mirror",
          "observation": "Indexed X mirror showed a judicial-selection reform post after a Colby/NWKS Radio stop, with 18 replies, 16 reposts, 67 likes, and 2K views as displayed by the public mirror on capture.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-judicial-selection"
        }
      ],
      "gap": {
        "summary": "Existing local ballot-measure raw dump contains advocacy language. Later profile writing should present Kobach's statements and legislative/testimony record without adopting either side's campaign framing.",
        "evidenceIds": [
          "ae-judicial-selection-1"
        ]
      }
    },
    {
      "id": "i-campaign-finance-record",
      "title": "Campaign Finance / Compliance Record",
      "stated": {
        "text": "Kobach's January 2026 KPDC filing reported $337,330.24 in 2025 contributions and $502,626.00 cash on hand. His campaign said the cash balance was raised without personal contributions or loans. A separate FEC matter from his 2020 U.S. Senate campaign ended in pre-probable-cause conciliation over a below-market We Build the Wall email-list rental.",
        "sourceIds": [
          "s-kpdc-jan2026-report",
          "s-kobach-filing-release-2026",
          "s-fec-mur-7636"
        ]
      },
      "actions": [
        {
          "id": "ae-finance-1",
          "date": "2026-01-09",
          "body": "KPDC report listed $337,330.24 in contributions/receipts, $52,558.52 in expenditures, and $502,626.00 cash on hand for 2025.",
          "sourceIds": [
            "s-kpdc-jan2026-report"
          ]
        },
        {
          "id": "ae-finance-2",
          "date": "2022-12-01",
          "body": "FEC MUR #7636 disposition involved pre-probable-cause conciliation with Kobach, Kobach for Senate, and We Build the Wall over corporate contribution/in-kind reporting issues tied to a below-market email-list rental.",
          "sourceIds": [
            "s-fec-mur-7636"
          ]
        }
      ],
      "socialSignals": []
    }
  ],
  "whoTheyAre": "Accessible official and candidate-controlled sources support treating Kobach as the incumbent Republican running for Kansas attorney general re-election in 2026. The live SOS filed-candidates list was blocked in this environment; KPDC lists him under Attorney General Candidates and his campaign says he filed January 8, 2026.",
  "whereTheyWorship": "Public reporting ties Kobach to Morning Star Church in Lawrence. The church website is https://msclawrence.com/, and local reporting has referred to it as his church.",
  "sources": [
    {
      "id": "s-kobach-filing-release-2026",
      "tier": "primary",
      "url": "https://kriskobach.com/kobach-campaign-announces-record-breaking-cash-on-hand-and-official-re-election-filing/",
      "title": "Kobach Campaign Announces Record-Breaking Cash on Hand and Official Re-Election Filing",
      "publisher": "Kris Kobach for Attorney General",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign says Kobach officially filed for re-election",
        "Campaign reports $502,626 cash on hand",
        "Campaign says no personal contribution or self-loan was used to reach that cash total"
      ]
    },
    {
      "id": "s-kobach-sheriffs-2026",
      "tier": "primary",
      "url": "https://kriskobach.com/51-kansas-sheriffs-endorse-kobach-for-attorney-general/",
      "title": "51 Kansas Sheriffs endorse Kobach for Attorney General",
      "publisher": "Kris Kobach for Attorney General",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign says 51 Kansas sheriffs endorsed Kobach's attorney-general re-election",
        "Campaign release lists Ellis County Sheriff Scott Braun among endorsers",
        "Release frames Kobach's record around law enforcement, KBI, fentanyl, organized retail crime, and crime-rate claims"
      ]
    },
    {
      "id": "s-ag-bio",
      "tier": "primary",
      "url": "https://www.ag.ks.gov/about-us/attorney-general-kris-w-kobach",
      "title": "Attorney General Kris W. Kobach",
      "publisher": "Kansas Attorney General",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Kobach was elected Kansas's 45th Attorney General in November 2022",
        "Kobach served as Kansas Secretary of State from 2011 to 2019",
        "Official bio identifies Title IX, Obamacare/DACA, election-integrity commission, and RAGA chairmanship",
        "Observed public online activity mapped to Religious Liberty."
      ]
    },
    {
      "id": "s-campaign-bio",
      "tier": "primary",
      "url": "https://kriskobach.com/meet-kris/",
      "title": "Meet Kris",
      "publisher": "Kris Kobach for Attorney General",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign biography lists education, Justice Department service, DACA litigation, OSHA vaccine-mandate litigation, DHS/ICE litigation, and Air Force religious-exemption litigation",
        "Campaign biography says Kobach's first four-year term as attorney general began in 2023"
      ]
    },
    {
      "id": "s-kpdc-jan2026-report",
      "tier": "primary",
      "url": "https://kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW02KK_202601.pdf",
      "title": "Kris W. Kobach Campaign Finance Receipts and Expenditures Report - January 2026",
      "publisher": "Kansas Public Disclosure Commission / Kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Report covers 2025-01-01 through 2025-12-31",
        "Total contributions and other receipts were $337,330.24",
        "Total expenditures were $52,558.52",
        "Cash on hand at close of period was $502,626.00",
        "In-kind contributions and other transactions were reported as $0.00"
      ]
    },
    {
      "id": "s-fec-mur-7636",
      "tier": "primary",
      "url": "https://www.fec.gov/data/legal/matter-under-review/7636/",
      "title": "MUR #7636 - We Build The Wall",
      "publisher": "Federal Election Commission",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "FEC lists respondents including We Build the Wall, Kobach, and Kobach for Senate",
        "FEC summary says the Commission found reason to believe a below-market email-list rental created a corporate contribution and in-kind reporting issue",
        "Disposition was pre-probable-cause conciliation"
      ]
    },
    {
      "id": "s-ag-special-litigation",
      "tier": "primary",
      "url": "https://www.ag.ks.gov/divisions/special-litigation-unit",
      "title": "Special Litigation Unit",
      "publisher": "Kansas Attorney General",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Kobach created the Special Litigation Unit",
        "The unit handles constitutional issues and policy-priority litigation",
        "Highlighted cases include Title IX, DACA/Obamacare, and ATF/Second Amendment"
      ]
    },
    {
      "id": "s-ag-title-ix",
      "tier": "primary",
      "url": "https://www.ag.ks.gov/divisions/special-litigation-unit/title-ix",
      "title": "State of Kansas vs. U.S. Department of Education - Title IX",
      "publisher": "Kansas Attorney General",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Kansas sued over a Title IX rule replacing sex with gender identity",
        "Page says Kobach argued the Department of Education lacked authority",
        "Page links the case to girls' facilities, due process, and First Amendment/religious-belief concerns"
      ]
    },
    {
      "id": "s-ag-daca-obamacare",
      "tier": "primary",
      "url": "https://www.ag.ks.gov/divisions/special-litigation-unit/daca-obamacare",
      "title": "Kansas v. United States of America and the Centers for Medicare & Medicaid Services",
      "publisher": "Kansas Attorney General",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Kobach filed a federal lawsuit challenging Obamacare eligibility for DACA recipients",
        "Page says the rule would affect 4,350 DACA recipients in Kansas"
      ]
    },
    {
      "id": "s-ag-atf",
      "tier": "primary",
      "url": "https://www.ag.ks.gov/divisions/special-litigation-unit/atf",
      "title": "State of Kansas v. Merrick Garland",
      "publisher": "Kansas Attorney General",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Kobach led a coalition challenging an ATF rule alleged to violate the Second Amendment",
        "The page says the coalition objected to how the rule treated individual firearms sellers"
      ]
    },
    {
      "id": "s-ag-live-nation-2026",
      "tier": "primary",
      "url": "https://www.ag.ks.gov/Home/Components/News/News/306/1292",
      "title": "Kobach Secures Landmark Win in Live Nation/Ticketmaster Monopolization Case",
      "publisher": "Kansas Attorney General",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Kobach and 33 other attorneys general won a Live Nation/Ticketmaster monopolization jury verdict",
        "Release says Kobach rejected a DOJ/eight-state settlement and continued litigation"
      ]
    },
    {
      "id": "s-ag-ai-psa-2026",
      "tier": "primary",
      "url": "https://www.ag.ks.gov/Home/Components/News/News/304/",
      "title": "Kobach warns Kansans of AI chatbot risks in PSA",
      "publisher": "Kansas Attorney General",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "AG office announced a PSA featuring Kobach about AI chatbot risks to children and teenagers",
        "Kobach said he is committed to holding AI companies legally responsible"
      ]
    },
    {
      "id": "s-ag-apple-csam-2026",
      "tier": "primary",
      "url": "https://www.ag.ks.gov/Home/Components/News/News/294/",
      "title": "Kobach Confronts Apple: Commit to Protecting Kids",
      "publisher": "Kansas Attorney General",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Kobach demanded Apple implement safeguards against CSAM distribution on iCloud",
        "Release says Apple was asked to respond by April 17, 2026"
      ]
    },
    {
      "id": "s-ag-noncitizen-amicus-2026",
      "tier": "primary",
      "url": "https://www.ag.ks.gov/Home/Components/News/News/298/",
      "title": "Kobach leads 25-state coalition in amicus brief against noncitizen voting",
      "publisher": "Kansas Attorney General",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Kobach led 25 states in a U.S. Supreme Court amicus brief involving Arizona proof-of-citizenship election laws",
        "Release says Kobach's office is prosecuting multiple noncitizens who voted in Kansas elections"
      ]
    },
    {
      "id": "s-ag-election-eo-2026",
      "tier": "primary",
      "url": "https://www.ag.ks.gov/Home/Components/News/News/310/",
      "title": "Kobach joins coalition to defend executive order on election integrity",
      "publisher": "Kansas Attorney General",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Kansas joined 10 states to defend a presidential executive order concerning citizenship verification and voter-list checks"
      ]
    },
    {
      "id": "s-ag-driver-license-sex-marker",
      "tier": "primary",
      "url": "https://www.ag.ks.gov/Home/Components/News/News/35/1292?arch=1&npage=3",
      "title": "AG Kobach prevails in driver's license sex-change case",
      "publisher": "Kansas Attorney General",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "AG release says Shawnee County District Court issued a temporary injunction in State ex rel. Kobach v. Harper",
        "Release says Kobach served as lead counsel",
        "Release says the court required Kansas driver's licenses to list sex at birth during that phase"
      ]
    },
    {
      "id": "s-ag-prolife-student-release-index",
      "tier": "primary",
      "url": "https://www.ag.ks.gov/media-center/news-releases",
      "title": "Kobach leads 14-state coalition in support of students' First Amendment rights",
      "publisher": "Kansas Attorney General",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Official news-release index says Kobach led fourteen states urging the Supreme Court to vindicate a high-school student's rights after flyers for a pro-life student group were forbidden"
      ]
    },
    {
      "id": "s-ag-scam-alert-2026",
      "tier": "primary",
      "url": "https://www.ag.ks.gov/Home/Components/News/News/296/",
      "title": "Kobach warns consumers to be wary of fake traffic violation scam",
      "publisher": "Kansas Attorney General",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Kobach warned consumers about fake traffic-violation notices sent by text and email"
      ]
    },
    {
      "id": "s-ag-contractor-judgments-2026",
      "tier": "primary",
      "url": "https://www.ag.ks.gov/Home/Components/News/News/316/1292",
      "title": "Kobach secures restitution, permanent ban against out-of-state contractors",
      "publisher": "Kansas Attorney General",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "AG office secured judgments and permanent bans against out-of-state contractors",
        "Release frames the case as protection for seniors and Kansas consumers"
      ]
    },
    {
      "id": "s-fish-district-court",
      "tier": "primary",
      "url": "https://ecf.ksd.uscourts.gov/cgi-bin/show_public_doc?2016cv2105-542",
      "title": "Fish v. Kobach - District Court Opinion",
      "publisher": "U.S. District Court for the District of Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Federal district court struck down Kansas's documentary proof-of-citizenship voter-registration requirement"
      ]
    },
    {
      "id": "s-fish-tenth-circuit",
      "tier": "primary",
      "url": "https://www.ca10.uscourts.gov/sites/ca10/files/opinions/010110366503.pdf",
      "title": "Fish v. Schwab - Tenth Circuit Opinion",
      "publisher": "U.S. Court of Appeals for the Tenth Circuit",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Tenth Circuit reviewed the proof-of-citizenship voter-registration litigation"
      ]
    },
    {
      "id": "s-ksleg-judicial-selection-testimony",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/committees/ctte_s_fed_st_1/documents/testimony/20250225_03.pdf",
      "title": "Testimony of Kansas Attorney General Kris Kobach",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Kobach submitted testimony on Kansas Supreme Court selection"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://twstalker.com/KrisKobach1787",
      "title": "X / Twstalker",
      "publisher": "Twstalker",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Public Safety / Law Enforcement / Fentanyl.",
        "The strongest public social signal is X. The indexed profile for @KrisKobach1787 listed 26K followers and a bio separating campaign updates from official state business. Recent ind",
        "Observed public online activity mapped to Federal-State Litigation / Special Litigation Unit.",
        "Observed public online activity mapped to Consumer Protection / Antitrust / Technology."
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "social",
      "url": "https://www.linkedin.com/company/kansasag",
      "title": "LinkedIn / Linkedin",
      "publisher": "Linkedin",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Public Safety / Law Enforcement / Fentanyl.",
        "LinkedIn exposes a different office-administration signal. The Kansas Attorney General LinkedIn page listed 894 followers in logged-out capture and showed recent updates on a Nexst"
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "secondary",
      "url": "https://www.kriskobach.com/",
      "title": "Facebook / Kriskobach",
      "publisher": "Kriskobach",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Immigration / Election Integrity / Noncitizen Voting.",
        "Kobach's public footprint is unusually split between campaign branding and the official attorney general apparatus. The campaign site is still live under the AG campaign brand, wit"
      ]
    },
    {
      "id": "s-social-crossref-4",
      "tier": "secondary",
      "url": "https://www.kriskobach.com/videos/",
      "title": "Facebook / Kriskobach",
      "publisher": "Kriskobach",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Immigration / Election Integrity / Noncitizen Voting.",
        "Facebook, Instagram, and YouTube are confirmed as platform presence but did not expose reliable current post inventories. The campaign videos page embeds six videos, including \"Kri"
      ]
    },
    {
      "id": "s-social-crossref-5",
      "tier": "secondary",
      "url": "https://mobile.twstalker.com/KSAGOffice",
      "title": "X / Mobile.Twstalker",
      "publisher": "Mobile.Twstalker",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Consumer Protection / Antitrust / Technology.",
        "Topic: prosecution training / gangs. (source) 4. Official X mirror item: AG opinion on in-state tuition for undocumented immigrants. Engagement: 23 replies, 57 reposts, 282 likes, "
      ]
    },
    {
      "id": "s-social-crossref-6",
      "tier": "secondary",
      "url": "https://www.ballotready.org/people/kris-kobach",
      "title": "Facebook / Ballotready",
      "publisher": "Ballotready",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Religious Liberty.",
        "Key visible signals: suing federal government over regulations, defending Kansas laws, Title IX, DACA/Obamacare, and ATF/Second Amendment litigation. 8. BallotReady profile, captur"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(KRIS_KOBACH_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[kris-kobach.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
