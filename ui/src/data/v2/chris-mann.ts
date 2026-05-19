/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const CHRIS_MANN_V2: CandidateFullV2 = {
  "slug": "chris-mann",
  "name": "Chris Mann",
  "party": "D",
  "position": "Attorney General candidate",
  "electionSlug": "kansas-ag-2026",
  "incumbent": false,
  "occupation": "Attorney, Owner of Mann Law Firm, P.A. (est. 2016/2017)",
  "family": "Ashley Mann -- Cardiothoracic surgeon practicing in Topeka (some reports say Olathe). Supported Chris in opening his law firm in 2016.; Details",
  "campaignWebsite": "https://chrismannforkansas.com/",
  "issues": [
    {
      "id": "i-official-status-campaign-finance-1",
      "title": "Official Status / Campaign Finance",
      "stated": {
        "text": "Mann is being treated in this v2 pass as a Democratic candidate for Kansas Attorney General in 2026. The strongest accessible official chain is the Kansas SOS candidate-information page showing Attorney General as a 2026 statewide office, the KPDC statewide index listing Mann under Attorney General candidates, and Mann's KPDC amended treasurer form naming Attorney General as the office sought. The live SOS candidate-list endpoint was blocked, so final filed-candidate status still needs manual verification.",
        "sourceIds": [
          "s-sos-candidate-info-2026",
          "s-kpdc-statewide-2026",
          "s-kpdc-mann-treasurer",
          "s-sos-candidate-list-blocked"
        ]
      },
      "actions": [
        {
          "id": "ae-status-1",
          "date": "2025-07-24",
          "body": "The KPDC amended appointment-of-treasurer form lists Chris D. Mann as candidate, Attorney General as office sought, and Jill Docking as treasurer.",
          "sourceIds": [
            "s-kpdc-mann-treasurer"
          ]
        },
        {
          "id": "ae-status-2",
          "date": "2026-01-08",
          "body": "The KPDC report for 2025 shows $536,639.57 in contributions and other receipts, $280,041.49 in expenditures, $257,257.08 cash on hand, $7,655.77 in in-kind contributions, and $0.00 in other transactions.",
          "sourceIds": [
            "s-kpdc-mann-202601"
          ]
        },
        {
          "id": "ae-status-3",
          "date": "2026-05-18",
          "body": "A Miami County unofficial primary 2026 candidate list shows Chris Mann, Democratic, Lawrence KS, under Kansas Attorney General. This is supplemental because it is county-published and labeled unofficial.",
          "sourceIds": [
            "s-miami-county-candidate-list"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-status-1",
          "platform": "Campaign website",
          "observation": "Campaign homepage links donation, volunteer, Facebook, X, Instagram, and an embedded YouTube campaign video; footer identifies Jill S. Docking as treasurer.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-home"
          ],
          "mappedToIssueId": "i-official-status-campaign-finance-1"
        },
        {
          "id": "ss-crossref-2",
          "platform": "X",
          "observation": "Latest indexed campaign-social item found in the 2026 cycle: fundraising / official-filing X post indexed as roughly March 2026 in TwStalker search previews.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-sos-candidate-info-2026"
          ],
          "mappedToIssueId": "i-official-status-campaign-finance-1"
        },
        {
          "id": "ss-crossref-4",
          "platform": "chrismannforkansas.com",
          "observation": "News post, January 9, 2026 -- Mann more than doubles fundraising from '22 attorney general's race",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-official-status-campaign-finance-1"
        }
      ],
      "gap": {
        "summary": "Direct SOS candidate-list status was blocked by CloudFront. The donor schedule is public but was not reproduced because the KPDC index warns against copying contributor names for commercial use; review only for specific issue-conflict checks.",
        "evidenceIds": [
          "ae-status-1"
        ]
      }
    },
    {
      "id": "i-public-safety-law-enforcement-2",
      "title": "Public Safety / Law Enforcement",
      "stated": {
        "text": "Mann's current campaign message centers on public safety and the attorney general's law-enforcement role. His campaign biography presents him as a former police officer, prosecutor, and victims' advocate; launch coverage and campaign materials say he would refocus the office on law-enforcement basics, rule of law, rights, family safety, and support for law enforcement statewide.",
        "sourceIds": [
          "s-campaign-home",
          "s-campaign-bio",
          "s-wibw-launch-2025",
          "s-liberal-first-2025"
        ]
      },
      "actions": [
        {
          "id": "ae-public-safety-1",
          "date": "2002",
          "body": "Campaign biography says Mann was serving as a police officer during a traffic stop in 2002 when he was struck by a drunk driver, ending his career in uniform and becoming part of his later legal and advocacy work.",
          "sourceIds": [
            "s-campaign-bio"
          ]
        },
        {
          "id": "ae-public-safety-2",
          "date": "2010s",
          "body": "Campaign biography says Mann prosecuted a broad range of cases in the Wyandotte County District Attorney's Office, from DUI to murder.",
          "sourceIds": [
            "s-campaign-bio"
          ]
        },
        {
          "id": "ae-public-safety-3",
          "date": "2025-08-26",
          "body": "In Liberal First coverage, Mann discussed rural law-enforcement and prosecution support, crime victims, domestic-violence victims, shelters, and safe environments as areas where the AG office could help.",
          "sourceIds": [
            "s-liberal-first-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-public-safety-1",
          "platform": "Public web/social metadata",
          "observation": "Existing local harvest found Mann's campaign-linked Facebook, X, and Instagram bios all repeat former-police-officer/former-prosecutor framing and public-safety language.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-public-safety-law-enforcement-2"
        },
        {
          "id": "ss-crossref-2",
          "platform": "chrismannforkansas.com",
          "observation": "Website biography: Meet Chris -- active. Metadata modified May 5, 2026. The page foregrounds police, prosecutor, victims' advocate, DUI crash survivor, MADD service, and private law practice.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-bio"
          ],
          "mappedToIssueId": "i-public-safety-law-enforcement-2"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Facebook",
          "observation": "Facebook: Chris Mann -- campaign-linked and active. Logged-out metadata captured 2,730 likes and 1,083 talking about this, with the bio: \"Former police officer and prosecutor running for Kansas Attorney General to protect Kansans and keep our communities safe.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-public-safety-law-enforcement-2"
        }
      ],
      "gap": {
        "summary": "Mann has no current legislative or AG-office record to compare against the campaign statement. Evidence is professional biography, campaign statements, and advocacy record rather than roll-call or office actions.",
        "evidenceIds": [
          "ae-public-safety-1"
        ]
      }
    },
    {
      "id": "i-dui-victims-advocacy-3",
      "title": "DUI / Victim Advocacy",
      "stated": {
        "text": "Mann's campaign biography connects his own 2002 drunk-driving injury, MADD service, ignition-interlock advocacy, and private legal work for drunk-driving victims into a sustained DUI/victim-advocacy record.",
        "sourceIds": [
          "s-campaign-bio",
          "s-ksleg-sb123-testimony-2017",
          "s-frst-midwest"
        ]
      },
      "actions": [
        {
          "id": "ae-dui-1",
          "date": "2011",
          "body": "Campaign biography says Mann served as the MADD Kansas Advisory Board Chair in 2011 during his broader drunk-driving advocacy work.",
          "sourceIds": [
            "s-campaign-bio"
          ]
        },
        {
          "id": "ae-dui-2",
          "date": "2014-2020",
          "body": "Campaign biography says Mann joined MADD's National Board in 2014 and served as Board Chair until 2020.",
          "sourceIds": [
            "s-campaign-bio"
          ]
        },
        {
          "id": "ae-dui-3",
          "date": "2017-02-14",
          "body": "Legislative testimony submitted by Christopher Mann and LeAnn Briggs, identified as MADD volunteers and drunk-driving victims, opposed SB123 and defended Kansas's ignition-interlock law.",
          "sourceIds": [
            "s-ksleg-sb123-testimony-2017"
          ]
        },
        {
          "id": "ae-dui-4",
          "date": "2019",
          "body": "Campaign biography says Mann expanded his law practice in 2019 and returned his primary focus to representing drunk-driving victims and families in lawsuits against drunk drivers.",
          "sourceIds": [
            "s-campaign-bio"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-dui-1",
          "platform": "Campaign website",
          "observation": "The campaign biography foregrounds DUI, MADD, and victim advocacy more than the homepage and short social bios do.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-bio"
          ],
          "mappedToIssueId": "i-dui-victims-advocacy-3"
        },
        {
          "id": "ss-crossref-2",
          "platform": "chrismannforkansas.com",
          "observation": "The captured issue mix is narrow and disciplined. In the coded harvest, public safety, law enforcement, and violent crime appear in 12 of 17 usable candidate-controlled or candidate-attributed items, or 71 percent (harvest). Rule of law, constitutional rights, and rights language appear in 7 items, and Kobach contrast appears in 6 items. DUI, MADD, and victims' advocacy appear in 3 items, mostly in biography...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-dui-victims-advocacy-3"
        }
      ],
      "gap": {
        "summary": "No current platform-exported social thread on DUI was captured; most evidence comes from campaign biography, legislative testimony, and community-organization biography.",
        "evidenceIds": [
          "ae-dui-1"
        ]
      }
    },
    {
      "id": "i-consumer-protection-white-collar-4",
      "title": "Consumer Protection / White-Collar Crime",
      "stated": {
        "text": "Mann connects consumer protection to his Kansas Securities Commission work and to the AG office's consumer-fraud responsibilities. His campaign biography says he protected consumers and seniors by prosecuting white-collar criminals, and his 2026 DAGA statement says he would protect consumers from fraud and hold bad actors accountable.",
        "sourceIds": [
          "s-campaign-bio",
          "s-daga-endorsement-2026",
          "s-ag-divisions"
        ]
      },
      "actions": [
        {
          "id": "ae-consumer-1",
          "date": "unknown",
          "body": "Campaign biography says Mann worked as a prosecutor for the Kansas Securities Commission, where he helped protect consumers and seniors by holding white-collar criminals accountable.",
          "sourceIds": [
            "s-campaign-bio"
          ]
        },
        {
          "id": "ae-consumer-2",
          "date": "2026-05-06",
          "body": "DAGA's endorsement page includes a candidate statement saying Mann would protect consumers from fraud and hold bad actors accountable.",
          "sourceIds": [
            "s-daga-endorsement-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-consumer-1",
          "platform": "Public web/social metadata",
          "observation": "Existing social harvest found consumer protection as a smaller signal than public safety, mostly appearing in biography and DAGA/campaign-attributed statements rather than short social snippets.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-consumer-protection-white-collar-4"
        },
        {
          "id": "ss-crossref-2",
          "platform": "X",
          "observation": "X / Twitter: @ChrisMannKS -- campaign-linked and active. Public profile previews identify 2K followers and 126-129 following, with the bio: \"A former police officer and prosecutor, Chris Mann is running for Attorney General to serve our state, reduce violent crime, and protect our families.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-consumer-protection-white-collar-4"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Instagram",
          "observation": "Instagram: @chrismannks -- campaign-linked and active. Logged-out metadata captured 739 followers, 21 following, 99 posts. Bio: \"A former police officer and prosecutor, Chris Mann is running for Attorney General to serve our state, reduce violent crime, and protect our families.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-4"
          ],
          "mappedToIssueId": "i-consumer-protection-white-collar-4"
        }
      ],
      "gap": {
        "summary": "No case list from Mann's Kansas Securities Commission work was independently extracted in this pass. The AG divisions page establishes office-scope relevance but is not Mann-specific.",
        "evidenceIds": [
          "ae-consumer-1"
        ]
      }
    },
    {
      "id": "i-rule-of-law-constitutional-rights-5",
      "title": "Rule of Law / Constitutional Rights",
      "stated": {
        "text": "Mann's campaign repeatedly pairs public safety with rule-of-law and constitutional-rights language. The homepage says he will defend the Constitution and protect the rule of law; launch coverage and the DAGA candidate statement add rights, fair and consistent application of law, and resources for law enforcement and prosecutors.",
        "sourceIds": [
          "s-campaign-home",
          "s-wibw-launch-2025",
          "s-daga-endorsement-2026"
        ]
      },
      "actions": [
        {
          "id": "ae-rule-law-1",
          "date": "2025-07-30",
          "body": "WIBW reported Mann's launch statement saying he would refocus the AG office on law-enforcement basics, rule of law, rights, families, and safety.",
          "sourceIds": [
            "s-wibw-launch-2025"
          ]
        },
        {
          "id": "ae-rule-law-2",
          "date": "2026-05-06",
          "body": "DAGA published a candidate statement saying Mann would prioritize public safety, defend constitutional rights, and ensure law is applied fairly and consistently.",
          "sourceIds": [
            "s-daga-endorsement-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-rule-law-1",
          "platform": "Campaign website / indexed social",
          "observation": "Existing harvest coded rule-of-law, Constitution, and rights language in 7 of 17 candidate-controlled or candidate-attributed visible items.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-rule-of-law-constitutional-rights-5"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "Text: \"I'm running for Kansas Attorney General. It's time for a law enforcement leader who puts people before politics. I'll protect your rights, keep families safe, and hold the powerful accountable. Watch my announcement video and chip in today >> bit.ly/414ydDW\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-rule-of-law-constitutional-rights-5"
        },
        {
          "id": "ss-crossref-4",
          "platform": "KWCH",
          "observation": "KWCH, July 30, 2025: Mann announced his 2026 candidacy and said, \"In times like these, Kansas families need a law enforcement officer defending our communities and our rights, not a politician focused on their own personal ambition.\" Topic: campaign launch / law enforcement / Kobach contrast.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-kwch-launch-2025"
          ],
          "mappedToIssueId": "i-rule-of-law-constitutional-rights-5"
        }
      ],
      "gap": {
        "summary": "The current campaign's rights language is broad. It should not be expanded into specific positions on guns, religious liberty, abortion, LGBTQ policy, or judicial selection without candidate-controlled issue evidence.",
        "evidenceIds": [
          "ae-rule-law-1"
        ]
      }
    },
    {
      "id": "i-rural-communities-victim-services-fentanyl-6",
      "title": "Rural Communities / Victim Services / Fentanyl",
      "stated": {
        "text": "The clearest detailed 2026 source on rural and victim-services issues is Liberal First's August 2025 interview. Mann described support for rural law enforcement and prosecution, help for crime and domestic-violence victims, safe shelters, and more direct AG-office attention to fentanyl deaths and overdose-response resources.",
        "sourceIds": [
          "s-liberal-first-2025",
          "s-ag-about-office",
          "s-ag-divisions"
        ]
      },
      "actions": [
        {
          "id": "ae-rural-1",
          "date": "2025-08-26",
          "body": "Liberal First coverage reports Mann saying rural communities need help with law-enforcement and prosecutorial support for large investigations and cases.",
          "sourceIds": [
            "s-liberal-first-2025"
          ]
        },
        {
          "id": "ae-rural-2",
          "date": "2025-08-26",
          "body": "Liberal First coverage reports Mann discussing victims of crime and domestic violence, including safe environments and shelter resources.",
          "sourceIds": [
            "s-liberal-first-2025"
          ]
        },
        {
          "id": "ae-rural-3",
          "date": "2025-08-26",
          "body": "Liberal First coverage reports Mann discussing fentanyl fatalities, life-saving medication, assistance, and grant spending.",
          "sourceIds": [
            "s-liberal-first-2025"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-rural-1",
          "platform": "Campaign RSS / public interview",
          "observation": "The campaign RSS republishes the Liberal First interview excerpt, making the rural-law-enforcement framing part of the campaign site's visible news feed.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-rss",
            "s-liberal-first-2025"
          ],
          "mappedToIssueId": "i-rural-communities-victim-services-fentanyl-6"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "Excerpted quote: \"I ran for Kansas Attorney General back in 2022 for the first time because I really saw a need to bring that office back to its priorities such as upholding the rule of law, supporting law enforcement throughout the state (especially in rural communities) and protecting Kansas families.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-rural-communities-victim-services-fentanyl-6"
        },
        {
          "id": "ss-crossref-4",
          "platform": "scgrassrootsdems.com",
          "observation": "Sedgwick County Grassroots Democrats repost of campaign press release, July 30, 2025: Press release says Mann would \"refocus the office on the basics of law enforcement, defend the rule of law, protect our rights, protect our families and make Kansas a safer place to live.\" Topic: campaign launch / law enforcement basics.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-5"
          ],
          "mappedToIssueId": "i-rural-communities-victim-services-fentanyl-6"
        }
      ],
      "gap": {
        "summary": "No independent current state data check was completed for Mann's numerical claims on fentanyl deaths, AG budget levels, or grant allocation. Treat those as candidate claims unless separately verified.",
        "evidenceIds": [
          "ae-rural-1"
        ]
      }
    },
    {
      "id": "i-abortion-constitutional-rights-7",
      "title": "Abortion / Constitutional Rights",
      "stated": {
        "text": "No current 2026 candidate-controlled abortion issue page was found. The clearest candidate-attributed statement in the reviewed record is from 2022 debate coverage, where Mann said he would defend laws but would not use office resources to attack women's constitutional rights. Present this as a 2022 statement unless the 2026 campaign repeats it.",
        "sourceIds": [
          "s-ksreflector-2022-debate"
        ]
      },
      "actions": [
        {
          "id": "ae-abortion-1",
          "date": "2022-09-23",
          "body": "Kansas Reflector debate coverage reports Mann saying he would defend laws but would not use AG office resources to attack women's constitutional rights.",
          "sourceIds": [
            "s-ksreflector-2022-debate"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-abortion-1",
          "platform": "Public web/social capture",
          "observation": "Existing logged-out harvest found no sustained current candidate-controlled social thread on abortion.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-abortion-constitutional-rights-7"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "No sustained candidate-controlled social thread was found in this capture on abortion, LGBTQ policy, guns, immigration, school choice, marijuana, Medicaid expansion, taxes, or judicial selection. These may exist behind platform login walls, but they were not visible in public/logged-out capture.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-abortion-constitutional-rights-7"
        }
      ],
      "gap": {
        "summary": "No current candidate-controlled 2026 abortion page, policy plank, or repeated social thread was found. Do not infer a position from party label or DAGA endorsement.",
        "evidenceIds": [
          "ae-abortion-1"
        ]
      }
    },
    {
      "id": "i-immigration-criminal-justice-trust-8",
      "title": "Immigration / Criminal-Justice Trust",
      "stated": {
        "text": "No current 2026 candidate-controlled immigration page was found. The reviewed record contains a 2022 debate statement reported by Kansas Reflector: Mann said the federal government had not done enough on immigration and argued that crime-related cooperation is affected when undocumented people are afraid to speak with police.",
        "sourceIds": [
          "s-ksreflector-2022-debate"
        ]
      },
      "actions": [
        {
          "id": "ae-immigration-1",
          "date": "2022-09-23",
          "body": "Kansas Reflector reported Mann saying crime reduction depends in part on bringing undocumented people into cooperation with the criminal-justice system rather than leaving them afraid to speak with police.",
          "sourceIds": [
            "s-ksreflector-2022-debate"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-immigration-1",
          "platform": "Public web/social capture",
          "observation": "Existing logged-out harvest found no sustained current candidate-controlled social thread on immigration.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-immigration-criminal-justice-trust-8"
        }
      ],
      "gap": {
        "summary": "Treat the immigration evidence as older debate coverage, not a current 2026 campaign plank. No current candidate-controlled immigration policy page was found.",
        "evidenceIds": [
          "ae-immigration-1"
        ]
      }
    },
    {
      "id": "i-election-record-vote-counting-9",
      "title": "Election Record / Vote Counting",
      "stated": {
        "text": "Mann was the 2022 Democratic nominee for Kansas Attorney General and lost to Kris Kobach by 15,892 votes in official SOS results. Existing social research captured his 2022 post-election statement that mailed ballots should be counted as law allows.",
        "sourceIds": [
          "s-sos-2022-results"
        ]
      },
      "actions": [
        {
          "id": "ae-election-1",
          "date": "2022-11-08",
          "body": "Kansas SOS official results list Kobach at 506,817 votes and Mann at 490,925 votes in the 2022 Attorney General race.",
          "sourceIds": [
            "s-sos-2022-results"
          ]
        },
        {
          "id": "ae-election-2",
          "date": "2022-11-09",
          "body": "Existing social harvest captured Mann's post-election statement that mailed ballots submitted before Election Day should be counted as law allows.",
          "sourceIds": [
            "s-sos-2022-results"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-election-1",
          "platform": "X / embedded news",
          "observation": "Existing harvest found the 2022 too-close-to-call post through embedded news and search-indexed capture, not through a full direct X export.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-election-record-vote-counting-9"
        }
      ],
      "gap": {
        "summary": "No current 2026 election-administration platform or policy page was found beyond general rule-of-law framing.",
        "evidenceIds": [
          "ae-election-1"
        ]
      }
    },
    {
      "id": "i-visible-absences-social-limits-10",
      "title": "Visible Absences / Social Limits",
      "stated": {
        "text": "Across the current campaign website, RSS, and logged-out public social capture, Mann's visible 2026 campaign is narrow: public safety, law enforcement, rule of law, rights, consumer protection, victims, and rural support. No sustained candidate-controlled current thread was found on LGBTQ policy, guns, school choice, marijuana, Medicaid expansion, taxes, judicial selection, water, rural hospitals, broadband, foster care, or adoption.",
        "sourceIds": [
          "s-campaign-home",
          "s-campaign-rss"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-absence-1",
          "platform": "Public/logged-out platform sweep",
          "observation": "Existing harvest found campaign-linked Facebook, X, Instagram, and YouTube, but not Bluesky, TikTok, Truth Social, Gab, Gettr, Substack, or Reddit candidate-controlled accounts.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-visible-absences-social-limits-10"
        },
        {
          "id": "ss-absence-2",
          "platform": "Public web",
          "observation": "Liberal First quotes Mann saying people can follow the campaign on 'all the platforms,' but public research only confirmed Facebook, X, Instagram, and YouTube presence. Treat the quote as colloquial, not proof of every platform.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-liberal-first-2025",
            "s-campaign-home"
          ],
          "mappedToIssueId": "i-visible-absences-social-limits-10"
        }
      ],
      "gap": {
        "summary": "Facebook, X, Instagram, and YouTube did not expose complete post inventories in logged-out capture. Absence of public evidence is not evidence that Mann has no private view or unpublished position.",
        "evidenceIds": [
          "ss-absence-1"
        ]
      }
    }
  ],
  "whereTheyWorship": "Public sources do not identify a current church affiliation. Mann's campaign uses faith language in places, but the source material does not name a congregation or church website.",
  "sources": [
    {
      "id": "s-sos-candidate-info-2026",
      "tier": "primary",
      "url": "https://www.sos.ks.gov/elections/candidate-information.html",
      "title": "Kansas Secretary of State - Candidate Information",
      "publisher": "Kansas Secretary of State",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Attorney General is listed among offices to be elected or retained in 2026",
        "Primary filing deadline is 12:00 p.m. Monday, June 1, 2026",
        "Statewide candidates file with the Secretary of State"
      ]
    },
    {
      "id": "s-sos-candidate-list-blocked",
      "tier": "primary",
      "url": "https://www.sos.ks.gov/elections/elections_upcoming_candidate.aspx",
      "title": "Candidate List",
      "publisher": "Kansas Secretary of State",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The official candidate-list endpoint returned a CloudFront 403 block in this environment",
        "Final official filed-candidate status could not be confirmed from the live SOS list during this pass"
      ]
    },
    {
      "id": "s-kpdc-statewide-2026",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
      "title": "Kansas State Wide Office - 2026 Election Cycle",
      "publisher": "Kansas Public Disclosure Commission / Kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Mann, Chris is listed under Attorney General Candidates",
        "KPDC links Mann's amended appointment of treasurer and 2026 report",
        "The page includes a statutory warning against copying contributor names for commercial use"
      ]
    },
    {
      "id": "s-kpdc-mann-202601",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW02CM_202601.pdf",
      "title": "Chris D. Mann Campaign Finance Receipts and Expenditures Report - January 2026",
      "publisher": "Kansas Public Disclosure Commission / Kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Report covers 2025-01-01 through 2025-12-31",
        "Total contributions and other receipts were $536,639.57",
        "Total expenditures and other disbursements were $280,041.49",
        "Cash on hand at close of period was $257,257.08",
        "In-kind contributions were $7,655.77",
        "Other transactions were $0.00"
      ]
    },
    {
      "id": "s-kpdc-mann-treasurer",
      "tier": "primary",
      "url": "https://kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW02CM_amendAT.pdf",
      "title": "Chris D. Mann Amended Appointment of Treasurer",
      "publisher": "Kansas Public Disclosure Commission / Kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate name Chris D. Mann",
        "Office sought Attorney General",
        "Treasurer Jill Docking",
        "Statement executed by Chris Mann on 2025-07-24"
      ]
    },
    {
      "id": "s-miami-county-candidate-list",
      "tier": "primary",
      "url": "https://www.copsfortots.com/DocumentCenter/View/14387/26PR-Unofficial-Candidate-List-4-24?bidId=",
      "title": "Miami County, Kansas Unofficial Candidate List for Primary 2026",
      "publisher": "Miami County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "County unofficial list shows Kansas Attorney General: Chris Mann, Democratic, Lawrence KS",
        "List is explicitly unofficial and supplemental"
      ]
    },
    {
      "id": "s-campaign-home",
      "tier": "primary",
      "url": "https://chrismannforkansas.com/",
      "title": "Chris Mann for Kansas",
      "publisher": "Chris Mann for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign homepage presents Mann as a former police officer and prosecutor",
        "Homepage frames campaign around Constitution, rule of law, and family safety",
        "Homepage links Facebook, X, Instagram, ActBlue, and campaign video",
        "Footer says paid for by Chris Mann for Kansas, Jill S. Docking Treasurer"
      ]
    },
    {
      "id": "s-campaign-bio",
      "tier": "primary",
      "url": "https://chrismannforkansas.com/meet-chris/",
      "title": "Meet Chris",
      "publisher": "Chris Mann for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Biography says Mann served as a police officer, prosecutor, and victims' advocate",
        "Biography says Mann was struck by a drunk driver during a 2002 traffic stop",
        "Biography says Mann prosecuted cases in Wyandotte County from DUI to murder",
        "Biography says Mann served on MADD Kansas and national boards, including Board Chair until 2020",
        "Biography says Mann worked at the Kansas Securities Commission on consumer and senior protection",
        "Biography says Mann opened Mann Law Firm in 2016 and represented drunk-driving victims",
        "Observed public online activity mapped to Public Safety / Law Enforcement."
      ]
    },
    {
      "id": "s-campaign-rss",
      "tier": "primary",
      "url": "https://chrismannforkansas.com/feed/",
      "title": "Chris Mann for Kansas RSS Feed",
      "publisher": "Chris Mann for Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "RSS contains July 30, 2025 launch excerpt",
        "RSS contains August 26, 2025 Liberal First excerpt with rule of law, rural law enforcement, and family safety language",
        "RSS contains January 9, 2026 fundraising excerpt"
      ]
    },
    {
      "id": "s-wibw-launch-2025",
      "tier": "secondary",
      "url": "https://www.wibw.com/2025/07/30/democrat-chris-mann-announces-second-bid-kansas-ag/",
      "title": "Democrat Chris Mann announces second bid for Kansas AG",
      "publisher": "WIBW",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Mann announced a 2026 run for Kansas Attorney General",
        "Coverage says the campaign would focus on public safety and law enforcement",
        "Coverage quotes Mann on law enforcement, rule of law, rights, families, and safety",
        "Coverage says Jill Docking would be campaign treasurer"
      ]
    },
    {
      "id": "s-kwch-launch-2025",
      "tier": "secondary",
      "url": "https://www.kwch.com/2025/07/30/former-prosecutor-chris-mann-announces-candidacy-attorney-general/",
      "title": "Former prosecutor Chris Mann announces candidacy for attorney general",
      "publisher": "KWCH",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Mann announced his candidacy for attorney general on July 30, 2025",
        "Coverage summarizes his police injury, MADD service, and private practice",
        "Coverage includes candidate and opponent statements from launch context",
        "Observed public online activity mapped to Rule of Law / Constitutional Rights."
      ]
    },
    {
      "id": "s-liberal-first-2025",
      "tier": "secondary",
      "url": "https://liberalfirst.com/index.php/en/news/3094-chris-mann-announces-candidacy-for-kansas-attorney-general",
      "title": "Chris Mann announces candidacy for Kansas Attorney General",
      "publisher": "Liberal First / Leader & Times",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Mann discussed rule of law, statewide law-enforcement support, rural communities, and family safety",
        "Mann discussed rural prosecution support, crime victims, domestic-violence victims, shelters, and safe environments",
        "Mann discussed fentanyl deaths, life-saving medication, and grant spending",
        "Mann said he planned visits to Dodge City, Hays, Colby, and Liberal"
      ]
    },
    {
      "id": "s-daga-endorsement-2026",
      "tier": "secondary",
      "url": "https://dems.ag/daga-endorses-chris-mann-for-kansas-attorney-general/",
      "title": "DAGA Endorses Chris Mann for Kansas Attorney General",
      "publisher": "Democratic Attorneys General Association",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "DAGA endorsed Chris Mann for Kansas Attorney General",
        "DAGA summarizes Mann's law enforcement, prosecutor, Kansas Securities Commission, and drunk-driving victim advocacy record",
        "Candidate statement names public safety, constitutional rights, consumer fraud, accountability, and resources for law enforcement and prosecutors"
      ]
    },
    {
      "id": "s-sos-2022-results",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/22elec/2022-General-Official-Vote-Totals.pdf",
      "title": "2022 General Election Official Vote Totals",
      "publisher": "Kansas Secretary of State",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "2022 Attorney General result: Kris Kobach 506,817 votes, 50.80%",
        "2022 Attorney General result: Chris Mann 490,925 votes, 49.20%"
      ]
    },
    {
      "id": "s-ksleg-sb123-testimony-2017",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2018/b2017_18/committees/ctte_s_jud_1/documents/testimony/20170214_03.pdf",
      "title": "Testimony in Opposition of SB123",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Testimony submitted by Christopher Mann and LeAnn Briggs",
        "Submitters identified as MADD volunteers and drunk-driving victims",
        "Testimony opposed SB123 and defended Kansas ignition-interlock law",
        "Signature block identifies Christopher Mann as Board of Directors - MADD"
      ]
    },
    {
      "id": "s-ag-divisions",
      "tier": "primary",
      "url": "https://www.ag.ks.gov/divisions",
      "title": "Divisions",
      "publisher": "Kansas Attorney General",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The AG office provides legal services, promotes open government, issues AG opinions, protects consumers from fraud, assists crime victims, and defends the state",
        "Consumer Protection attorneys educate consumers and businesses and sue over deceptive and unconscionable practices"
      ]
    },
    {
      "id": "s-ag-about-office",
      "tier": "primary",
      "url": "https://www.ag.ks.gov/about-us",
      "title": "About the Office",
      "publisher": "Kansas Attorney General",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "The Attorney General is the state's chief legal officer and top law enforcement official",
        "The office includes the Kansas Bureau of Investigation and victim-related boards"
      ]
    },
    {
      "id": "s-frst-midwest",
      "tier": "secondary",
      "url": "https://frstmidwest.org/board-advisory-committee",
      "title": "Board Advisory Committee",
      "publisher": "FRST Midwest",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "FRST Midwest lists Chris Mann in a legal advisory role",
        "Biography repeats police injury, private practice, ignition-interlock advocacy, and MADD board-chair service"
      ]
    },
    {
      "id": "s-ksreflector-2022-debate",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2022/09/23/kansas-attorney-general-candidates-split-on-voter-fraud-abortion-rights-immigration/",
      "title": "Kansas attorney general candidates split on voter fraud, abortion rights, immigration",
      "publisher": "Kansas Reflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "2022 debate coverage reports Mann statements on immigration and criminal-justice trust",
        "2022 debate coverage reports Mann statement on defending laws but not using office resources to attack women's constitutional rights",
        "Coverage describes AG office functions"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://chrismannforkansas.com/mann-more-than-doubles-fundraising-from-22-attorney-generals-race/",
      "title": "chrismannforkansas.com / Chrismannforkansas",
      "publisher": "Chrismannforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Official Status / Campaign Finance.",
        "News post, January 9, 2026 -- Mann more than doubles fundraising from '22 attorney general's race",
        "Observed public online activity mapped to DUI / Victim Advocacy."
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "social",
      "url": "https://www.facebook.com/ChrisMannKS/",
      "title": "Facebook / Facebook",
      "publisher": "Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Public Safety / Law Enforcement.",
        "Facebook: Chris Mann -- campaign-linked and active. Logged-out metadata captured 2,730 likes and 1,083 talking about this, with the bio: \"Former police officer and prosecutor runni"
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "social",
      "url": "https://x.com/ChrisMannKS",
      "title": "X / X",
      "publisher": "X",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Consumer Protection / White-Collar Crime.",
        "X / Twitter: @ChrisMannKS -- campaign-linked and active. Public profile previews identify 2K followers and 126-129 following, with the bio: \"A former police officer and prosecutor,"
      ]
    },
    {
      "id": "s-social-crossref-4",
      "tier": "social",
      "url": "https://www.instagram.com/chrismannks/",
      "title": "Instagram / Instagram",
      "publisher": "Instagram",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Consumer Protection / White-Collar Crime.",
        "Instagram: @chrismannks -- campaign-linked and active. Logged-out metadata captured 739 followers, 21 following, 99 posts. Bio: \"A former police officer and prosecutor, Chris Mann "
      ]
    },
    {
      "id": "s-social-crossref-5",
      "tier": "secondary",
      "url": "https://scgrassrootsdems.com/2025/08/01/2260/",
      "title": "scgrassrootsdems.com / Scgrassrootsdems",
      "publisher": "Scgrassrootsdems",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Rural Communities / Victim Services / Fentanyl.",
        "Sedgwick County Grassroots Democrats repost of campaign press release, July 30, 2025: Press release says Mann would \"refocus the office on the basics of law enforcement, defend the"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(CHRIS_MANN_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[chris-mann.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
