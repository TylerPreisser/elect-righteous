/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const RON_WILSON_V2: CandidateFullV2 = {
  "slug": "ron-wilson",
  "name": "Ron Wilson",
  "party": "NP",
  "position": "Hays USD 489 Superintendent",
  "electionSlug": "usd-489-current",
  "incumbent": true,
  "occupation": "Superintendent, Hays USD 489",
  "district": "Hays USD 489, Ellis County, Kansas",
  "issues": [
    {
      "id": "i-administrative-role-board-governance",
      "title": "Administrative role, board governance, and accountability",
      "stated": {
        "text": "Wilson's own and district-controlled public record presents him as superintendent: an appointed administrator who recommends, reports, manages, and communicates through an elected board. The district's official goal language emphasizes student achievement, effective staff, positive communications, and effective resource management.",
        "sourceIds": [
          "s-usd489-staff",
          "s-usd489-highbond-members",
          "s-highbond-jan19-2026-minutes"
        ]
      },
      "actions": [
        {
          "id": "a-hired-superintendent-2019",
          "date": "2019-02-11",
          "body": "USD 489 board approval made Wilson the incoming superintendent effective July 1, 2019, after a search process.",
          "sourceIds": [
            "s-guidon-hiring-2019",
            "s-hayspost-2019-profile"
          ]
        },
        {
          "id": "a-current-superintendent-listed-2026",
          "date": "2026-05-19",
          "body": "Official USD 489 staff and meeting-roster sources list Wilson as Superintendent, confirming his current administrative role.",
          "sourceIds": [
            "s-usd489-staff",
            "s-usd489-highbond-members"
          ]
        },
        {
          "id": "a-personnel-nepotism-debate-2023",
          "date": "2023-04-24",
          "body": "The board debated hiring Wilson's wife as a teacher; Hays Post reported the nepotism policy required disclosure and did not specifically prohibit administrators' relatives from district employment.",
          "sourceIds": [
            "s-highbond-apr24-2023-agenda",
            "s-hayspost-nepotism-2023"
          ]
        },
        {
          "id": "a-admin-contracts-defended-2026",
          "date": "2026-03-10",
          "body": "During administrator-contract discussion, Wilson defended the administrative team and opposed voting on each administrator individually; the board extended administrator contracts in a contested vote.",
          "sourceIds": [
            "s-tiger-admin-contracts-2026",
            "s-citizenjournal-march-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-official-live-feed-not-campaign",
          "platform": "USD 489 official live feed",
          "observation": "District live-feed posts attributed to Wilson show official operational communications, not campaign activity or personal social engagement.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-usd489-live-feed-2020"
          ],
          "mappedToIssueId": "i-administrative-role-board-governance"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "Ron Wilson is an appointed/admin superintendent, not a candidate for elected office in this capture set. This harvest therefore treats his public material as administrator-attributed district messaging, official testimony, board-meeting statements, and public professional/profile traces. It does not treat him as having campaign content or electoral platform content.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-linkedin-preview"
          ],
          "mappedToIssueId": "i-administrative-role-board-governance"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Hays Post",
          "observation": "The earliest located superintendent-candidate profile, published by Hays Post archive on February 7, 2019, framed Wilson's pitch around what is best for students, consensus-building, teacher relationships, interest-based bargaining, and positive school culture. He described a bond role as bringing people toward a plan that fits school needs and community desires. Source: https://archive.hayspost.com/2019/02/page/67/",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-2019-profile"
          ],
          "mappedToIssueId": "i-administrative-role-board-governance"
        }
      ],
      "gap": {
        "summary": "The profile must avoid a candidate-campaign frame: Wilson's public status is appointed superintendent, and board members are the elected actors.",
        "evidenceIds": [
          "a-current-superintendent-listed-2026"
        ]
      }
    },
    {
      "id": "i-bond-facilities-capital-projects",
      "title": "Bond facilities and capital projects",
      "stated": {
        "text": "Wilson has consistently framed facility investment as a student/community investment and has described modern buildings, capacity, maintenance, career/technical spaces, auditorium space, and long-range capital needs as central district priorities.",
        "sourceIds": [
          "s-usd489-bond-survey-2021",
          "s-usd489-bond-to-voters-2022",
          "s-hayspost-opinion-2025"
        ]
      },
      "actions": [
        {
          "id": "a-bond-survey-2021",
          "date": "2021-04-12",
          "body": "Wilson publicly discussed survey results as an early step toward a renewed bond conversation and tied facilities to student pride and community investment.",
          "sourceIds": [
            "s-usd489-bond-survey-2021"
          ]
        },
        {
          "id": "a-bond-to-voters-2022",
          "date": "2022-02-07",
          "body": "Wilson presented the $143.5 million bond proposal around district capacity, career/technical education, auditorium needs, and maintenance backlogs as the board sent it to voters.",
          "sourceIds": [
            "s-usd489-bond-to-voters-2022"
          ]
        },
        {
          "id": "a-project-manager-motion-failed-2025",
          "date": "2025-03-24",
          "body": "A motion to explore hiring a separate bond project manager failed 3-4; Wilson defended the existing Nabholz/administration/third-party-inspection oversight structure in related coverage.",
          "sourceIds": [
            "s-highbond-mar24-2025-minutes",
            "s-hayspost-project-manager-2025"
          ]
        },
        {
          "id": "a-wilson-opinion-bond-defense-2025",
          "date": "2025-03-28",
          "body": "Wilson published an attributed opinion defending the bond projects and arguing that the district should keep building the facilities students, staff, and community deserve.",
          "sourceIds": [
            "s-hayspost-opinion-2025"
          ]
        },
        {
          "id": "a-new-high-ribbon-2025",
          "date": "2025-08-31",
          "body": "At the new Hays High ribbon cutting, Wilson served as a public face for the project and thanked the community for investing in students.",
          "sourceIds": [
            "s-hayspost-ribbon-2025"
          ]
        },
        {
          "id": "a-summer-projects-2026",
          "date": "2026-03-23",
          "body": "Wilson outlined 2026 summer construction and capital projects beyond the bond work, including Felten, O'Loughlin, ADA access, parking, HVAC, playground equipment, and technology rotation.",
          "sourceIds": [
            "s-hayspost-summer-projects-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "usd489.com",
          "observation": "Official USD 489 news pages show his facilities case developing before the 2022 bond. In April 2021, Wilson said a facilities survey could not predict a bond outcome but could show whether people were ready to look at the issue. He argued that low interest rates, local rebound, and community first impressions made the timing favorable. Source: https://www.usd489.com/article/437110",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-usd489-bond-survey-2021"
          ],
          "mappedToIssueId": "i-bond-facilities-capital-projects"
        },
        {
          "id": "ss-crossref-3",
          "platform": "usd489.com",
          "observation": "Wilson's official live-feed posts during March-April 2020 centered on COVID school closure, continuous learning, meal access, and public-health precautions. These are the only located profile-attributed official feed posts rather than media coverage, and they are district communications rather than personal social commentary. Source: https://www.usd489.com/live-feed?page_no=32",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-usd489-live-feed-2020"
          ],
          "mappedToIssueId": "i-bond-facilities-capital-projects"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "The 2022 bond-voting email controversy is part of the public record and is administrator-attributed. Hays Post reported that Wilson sent a staff-wide email offering lunch and possibly dessert to buildings with 100 percent staff turnout in the bond election, and that Wilson did not comment during the investigation. Ellis County Attorney Robert Anderson later declined to pursue charges. Sources:...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-email-investigation-2022"
          ],
          "mappedToIssueId": "i-bond-facilities-capital-projects"
        }
      ],
      "gap": {
        "summary": "Facilities oversight is contested: Wilson defended the existing project-management model while Park, Yarmer, and Vajnar voted to explore an additional project manager.",
        "evidenceIds": [
          "a-project-manager-motion-failed-2025"
        ]
      }
    },
    {
      "id": "i-student-supports-state-funding-fees",
      "title": "Student supports, state funding, and fees",
      "stated": {
        "text": "Wilson's public record emphasizes school-based mental-health services, public-school and special-education funding, student meals, curriculum/materials capacity, and caution about state proposals that he says would shift money away from public schools.",
        "sourceIds": [
          "s-ksleg-mhit-testimony-2021",
          "s-hayspost-public-education-legislation-2023",
          "s-citizenjournal-march-2026"
        ]
      },
      "actions": [
        {
          "id": "a-mhit-testimony-2021",
          "date": "2021-10-28",
          "body": "Wilson testified to the Kansas Legislature that 155 Hays Middle/High students used MHIT services in 2020-21 and advocated referral, summer-service, telemedicine, pediatric-integration, and workforce improvements.",
          "sourceIds": [
            "s-ksleg-mhit-testimony-2021"
          ]
        },
        {
          "id": "a-state-policy-warning-2023",
          "date": "2023-02-20",
          "body": "Wilson gave a board report criticizing state proposals on school days, private-school funding, curriculum posting, and public education while discussing special-education underfunding.",
          "sourceIds": [
            "s-hayspost-public-education-legislation-2023"
          ]
        },
        {
          "id": "a-fees-2025",
          "date": "2025-04-07",
          "body": "Wilson opposed a further school-fee reduction because past reductions had decreased funds available for textbooks and classroom materials during a planned English-curriculum adoption.",
          "sourceIds": [
            "s-hayspost-fees-2025"
          ]
        },
        {
          "id": "a-legislative-update-2026",
          "date": "2026-03-10",
          "body": "Wilson warned the board about possible mental-health funding cuts, special-education funding shortfalls, and private-school tax-credit legislation.",
          "sourceIds": [
            "s-citizenjournal-march-2026"
          ]
        },
        {
          "id": "a-fees-2026",
          "date": "2026-05-12",
          "body": "Wilson said food cost increases made a lunch-price increase necessary while breakfast remained free for all students.",
          "sourceIds": [
            "s-hayspost-fees-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "hayspost.com",
          "observation": "In 2024-2026 coverage, Wilson's message stays focused on getting the bond and capital projects finished. He defended using the existing construction manager and district administration team instead of adding another project manager, said the district already had oversight through Nabholz and third-party inspections, and said the high school change orders were well below contingency. Source:...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-project-manager-2025"
          ],
          "mappedToIssueId": "i-student-supports-state-funding-fees"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Wilson's March 2025 signed Hays Post opinion response explicitly defended the bond program and said the district should stop settling for old facilities. He framed his responsibility as giving students, staff, and the community the facilities they deserve. Source: https://hayspost.com/posts/18d3a237-b1c0-45a5-886e-980bb0c81483",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-opinion-2025"
          ],
          "mappedToIssueId": "i-student-supports-state-funding-fees"
        },
        {
          "id": "ss-crossref-5",
          "platform": "hayspost.com",
          "observation": "His later construction and capital-outlay remarks are pragmatic and schedule-driven. In 2025-2026 he argued for capital purchases because students and staff were moving into new buildings, said Hays Middle School furniture needed prompt purchase, called Felten asbestos timing an emergency, and described the 2026 summer project schedule as extremely busy. Sources:...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-student-supports-state-funding-fees"
        }
      ]
    },
    {
      "id": "i-safety-discipline-bathrooms-vandalism",
      "title": "Student safety, bathrooms, discipline, and vandalism",
      "stated": {
        "text": "Wilson and district administrators have described the new Hays High bathroom design and later vandalism response through a safety/privacy/discipline lens: cameras monitor entrances, staff clean and respond to issues, and privileges can be limited when spaces are misused.",
        "sourceIds": [
          "s-hayspost-private-bathrooms-2023",
          "s-hayspost-bathroom-vandalism-2026",
          "s-tiger-bathroom-vandalism-2026"
        ]
      },
      "actions": [
        {
          "id": "a-private-bathroom-controversy-2023",
          "date": "2023-09-26",
          "body": "The new Hays High private-bathroom design drew community support and opposition over privacy, bullying, safety, monitoring, and design choices.",
          "sourceIds": [
            "s-hayspost-private-bathrooms-2023"
          ]
        },
        {
          "id": "a-bathroom-vandalism-response-2026",
          "date": "2026-04-21",
          "body": "Wilson said the district takes vandalism seriously, all-day bathroom monitoring is not realistic, cameras are used outside bathrooms, cleaning increased, and discipline occurs when responsible students are identified.",
          "sourceIds": [
            "s-hayspost-bathroom-vandalism-2026",
            "s-tiger-bathroom-vandalism-2026"
          ]
        },
        {
          "id": "a-bathroom-data-request-2026",
          "date": "2026-04-21",
          "body": "Board members asked for data/documentation on bathroom vandalism; coverage reports Wilson said maintenance-ticket review would likely be needed to compile figures.",
          "sourceIds": [
            "s-hayspost-bathroom-vandalism-2026",
            "s-tiger-bathroom-vandalism-2026"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-facebook-bathroom-discussion-reported",
          "platform": "Facebook community discussion reported by local media",
          "observation": "Hays Post and Tiger Media Network reported Facebook discussion around bathroom conditions; this pass did not verify Wilson posting, liking, following, or commenting on those posts.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-bathroom-vandalism-2026",
            "s-tiger-bathroom-vandalism-2026"
          ],
          "mappedToIssueId": "i-safety-discipline-bathrooms-vandalism"
        },
        {
          "id": "ss-crossref-2",
          "platform": "hayspost.com",
          "observation": "On school fees, Wilson opposed another fee reduction in April 2025 because prior reductions had lowered available textbook and classroom-material funds, especially with a new English curriculum adoption planned. Source: https://hayspost.com/posts/b76e200e-de44-4b35-a99c-791e79ca07be",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-fees-2025"
          ],
          "mappedToIssueId": "i-safety-discipline-bathrooms-vandalism"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Hays Post",
          "observation": "On bathrooms and vandalism, Wilson's public posture is administrative enforcement plus skepticism toward social-media claims. Hays Post and Tiger Media Network quoted him saying schools struggle with vandalism, that students lose privileges if they misuse spaces, that bathroom monitoring all day is nearly impossible, and that Facebook discussion exaggerated the scope. Sources:...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-hayspost-bathroom-vandalism-2026"
          ],
          "mappedToIssueId": "i-safety-discipline-bathrooms-vandalism"
        }
      ],
      "gap": {
        "summary": "The public record shows requests for incident documentation, but no complete public bathroom/vandalism count was found in this pass.",
        "evidenceIds": [
          "a-bathroom-data-request-2026"
        ]
      }
    },
    {
      "id": "i-election-conduct-bond-turnout",
      "title": "Election conduct and bond-turnout email",
      "stated": {
        "text": "The key record is not a campaign platform but a 2022 staff email during the bond election. Reporting says Wilson offered lunch/dessert for buildings reaching 100 percent staff voter turnout, did not require a pro-bond vote, and later faced an investigation that ended with the county attorney taking no action.",
        "sourceIds": [
          "s-hayspost-email-investigation-2022",
          "s-hayspost-email-no-action-2022"
        ]
      },
      "actions": [
        {
          "id": "a-bond-email-investigation-2022",
          "date": "2022-04-28",
          "body": "Hays Post reported Wilson was investigated after sending a staff-wide email offering lunch/dessert tied to building voter turnout; the article said the email did not require voting for the bond.",
          "sourceIds": [
            "s-hayspost-email-investigation-2022"
          ]
        },
        {
          "id": "a-county-attorney-no-action-2022",
          "date": "2022-05-25",
          "body": "Ellis County Attorney Robert Anderson declined to pursue election-bribery charges and said he would take no action at that time.",
          "sourceIds": [
            "s-hayspost-email-no-action-2022"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "1. USD 489 staff directory listing Ron Wilson as Superintendent and Administrator. Source: https://www.usd489.com/staff?org=usd-489&page_no=2 2. USD 489 Diligent public portal listing Ron Wilson as Superintendent. Source: https://usd489.community.highbond.com/portal/members.aspx?id=18 3. Hays Post archive superintendent-candidate profile, February 7, 2019. Source: https://archive.hayspost.com/2019/02/page/67/ 4....",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-usd489-staff"
          ],
          "mappedToIssueId": "i-election-conduct-bond-turnout"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "USD 489 official live feed, April 2020 meal suspension post attributed to Ron Wilson. Source: https://www.usd489.com/live-feed?page_no=31 6. USD 489 / Hays Post article on facilities survey and possible bond discussion, April 12, 2021. Source: https://www.usd489.com/article/437110 7. USD 489 / Hays Post article on Westside and mental-health/behavior supports, April 28, 2021. Source:...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-election-conduct-bond-turnout"
        }
      ],
      "gap": {
        "summary": "The no-action decision should be described narrowly. It means no prosecution/no action in that record, not a judicial ruling that the email was lawful.",
        "evidenceIds": [
          "a-bond-email-investigation-2022",
          "a-county-attorney-no-action-2022"
        ]
      }
    }
  ],
  "whoTheyAre": "Ron Wilson is the superintendent of Hays USD 489. He was approved by the USD 489 Board of Education in February 2019, effective July 1, 2019, after prior service as Herington superintendent, Abilene Middle School principal, and a K-8 principal in North Ottawa County. His public record is administrative and board-facing, centered on facilities, student services, district operations, state education policy, and communications with the board/community.",
  "recordSummary": "Wilson's record is concentrated in USD 489 administration: bond/facility planning and oversight, mental-health intervention advocacy, state school-funding warnings, fee/nutrition recommendations, personnel and administrator-contract recommendations, and student safety/discipline responses. The record includes a 2022 bond-turnout email that prompted an investigation; the Ellis County Attorney later declined to pursue charges and took no action.",
  "ownWordsNarrative": "Wilson's most substantive first-person public statements in this pass were his 2021 Kansas Legislature testimony supporting school-based mental-health services, his 2025 Hays Post opinion defending USD 489 bond projects, official district live-feed communications during the 2020 COVID closure, and quoted board-meeting remarks in local coverage. These should be presented as attributed public statements, not campaign messaging.",
  "whereTheyWorship": "No public church, parish, denomination, or worship-community affiliation was verified in this pass. Leave this descriptive field blank/unknown unless a direct public source is later found.\n",
  "campaignFinance": {
    "totalRaised": "Not applicable - appointed superintendent, not a ballot candidate",
    "narrative": "No campaign committee, campaign finance report, candidate donor ledger, or campaign fundraising apparatus was found for Wilson in this pass. That fits the official record: he is the appointed USD 489 superintendent, not an elected candidate. Public salary/compensation material, if later used, should be treated as employment/public-pay context rather than campaign funding.",
    "donors": [],
    "undisclosed": "No campaign finance disclosure was expected or found for this non-candidate administrative profile.",
    "reportingPeriod": "Reviewed through 2026-05-19",
    "source": "USD 489 Staff Directory"
  },
  "socialResearchNote": "No verified current Wilson campaign site or Wilson-controlled public campaign/personal social account was confirmed. USD 489 live-feed posts attributed to Wilson are official district communications. A LinkedIn public preview was located but access/content were limited; it should not be used to infer issue positions.\n",
  "sources": [
    {
      "id": "s-usd489-staff",
      "tier": "primary",
      "url": "https://www.usd489.com/staff?org=usd-489&page_no=2",
      "title": "USD 489 Staff Directory",
      "publisher": "Hays USD 489",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Ron Wilson is listed as Superintendent",
        "Wilson is listed as an Administrator with a district phone extension",
        "Observed public online activity mapped to Election conduct and bond-turnout email."
      ]
    },
    {
      "id": "s-usd489-highbond-members",
      "tier": "primary",
      "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
      "title": "Hays USD 489 HighBond/Diligent Public Meeting Roster",
      "publisher": "Hays USD 489",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Ron Wilson is listed as Superintendent in the public meeting roster",
        "The roster distinguishes Wilson from elected board members"
      ]
    },
    {
      "id": "s-usd489-live-feed-2020",
      "tier": "primary",
      "url": "https://www.usd489.com/live-feed?page_no=32",
      "title": "USD 489 Live Feed, Page 32",
      "publisher": "Hays USD 489",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "March 2020 district live-feed posts attributed to Wilson address COVID closure planning",
        "Wilson-attributed posts discuss continuous learning and free student meals",
        "These posts are official district communications rather than campaign social activity",
        "Observed public online activity mapped to Bond facilities and capital projects."
      ]
    },
    {
      "id": "s-usd489-bond-survey-2021",
      "tier": "primary",
      "url": "https://www.usd489.com/article/437110",
      "title": "Wilson: USD 489 survey may indicate residents ready to discuss bond again",
      "publisher": "Hays USD 489",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "USD 489 official site republished coverage of Wilson discussing bond-survey results",
        "Wilson framed facilities as tied to student/community investment and board decision-making",
        "Observed public online activity mapped to Bond facilities and capital projects."
      ]
    },
    {
      "id": "s-usd489-bond-to-voters-2022",
      "tier": "primary",
      "url": "https://www.usd489.com/article/651221",
      "title": "School Board Sends 143.5M Bond to Voters",
      "publisher": "Hays USD 489",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "USD 489 board unanimously sent a $143.5 million bond issue to voters in February 2022",
        "Wilson tied the proposal to capacity, career/technical education, auditorium space, and maintenance"
      ]
    },
    {
      "id": "s-ksleg-mhit-testimony-2021",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2021_22/committees/ctte_spc_2021_ks_mental_health_modern_1/documents/testimony/20211028_14.pdf",
      "title": "Ron Wilson Testimony on Mental Health Intervention Team Program",
      "publisher": "Kansas Legislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Wilson identified himself as Hays USD 489 superintendent",
        "Wilson reported 155 HHS/HMS students used MHIT services in the 2020-21 school year",
        "Wilson advocated for referral expansion, summer services, telemedicine access, pediatric integration, and workforce solutions"
      ]
    },
    {
      "id": "s-highbond-mar24-2025-minutes",
      "tier": "primary",
      "url": "https://usd489.community.highbond.com/document/58b62a8d-8fc5-4292-9392-8a873dcee103",
      "title": "USD 489 March 24, 2025 Regular Meeting Minutes",
      "publisher": "Hays USD 489 HighBond/Diligent",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Motion to look into hiring a project manager for the remainder of the bond failed 3-4",
        "Yarmer, Park, and Vajnar voted yes; Brooks, Zampieri-Lillpopp, Goetz, and Ruder voted no"
      ]
    },
    {
      "id": "s-highbond-jan19-2026-minutes",
      "tier": "primary",
      "url": "https://usd489.community.highbond.com/document/92cb04a6-52e1-4e26-a3a5-f9d6ebaa6e4e",
      "title": "USD 489 January 19, 2026 Regular Meeting Minutes",
      "publisher": "Hays USD 489 HighBond/Diligent",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "District goals include high student achievement, effective staff, positive communication, and effective management of resources",
        "Meeting included legislative update and student support specialist action"
      ]
    },
    {
      "id": "s-highbond-apr24-2023-agenda",
      "tier": "primary",
      "url": "https://usd489.community.highbond.com/document/5247/File.html?handle=60377C16A47E41CD9EC1D888C53D7FBA",
      "title": "USD 489 April 24, 2023 Meeting Material",
      "publisher": "Hays USD 489 HighBond/Diligent",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "April 2023 meeting material included personnel transactions later covered in nepotism-policy reporting"
      ]
    },
    {
      "id": "s-hayspost-2019-profile",
      "tier": "secondary",
      "url": "https://archive.hayspost.com/2019/02/page/67/",
      "title": "Hays superintendent candidate Wilson: Focus on what's best for students",
      "publisher": "Hays Post Archive",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Wilson's pre-hire profile described prior roles in Herington, Abilene, and North Ottawa County",
        "Wilson described himself as focused on students, teacher relationships, facilities consensus-building, and positive culture",
        "Observed public online activity mapped to Administrative role, board governance, and accountability."
      ]
    },
    {
      "id": "s-guidon-hiring-2019",
      "tier": "secondary",
      "url": "https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/",
      "title": "School board votes, approves Ron Wilson as new superintendent",
      "publisher": "The Guidon Online",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "USD 489 board approved Wilson after a February 11, 2019 board meeting",
        "Wilson was to replace John Thissen effective July 1, 2019"
      ]
    },
    {
      "id": "s-hayspost-email-investigation-2022",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/806cd3a8-3850-49a6-9c3b-5931d344a290",
      "title": "Allegations made of bond election interference after lunch offered for voting",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Wilson was investigated after sending a staff email offering lunch/dessert tied to building voter turnout",
        "The story reported the email did not tell staff they had to vote for the bond",
        "Wilson declined comment during the investigation",
        "Observed public online activity mapped to Bond facilities and capital projects."
      ]
    },
    {
      "id": "s-hayspost-email-no-action-2022",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/d0e804e2-319a-4fb7-ae57-a22990fcee2d",
      "title": "Ellis Co. Attorney: No action taken on Wilson email to USD 489 staff",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Ellis County Attorney Robert Anderson declined to pursue election-bribery charges",
        "Anderson said he would take no action at that time"
      ]
    },
    {
      "id": "s-hayspost-public-education-legislation-2023",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/6b50b3cc-d002-47b0-a86b-5ab4d7f64904",
      "title": "Hays USD 489 Super: Legislators mounting attacks on public schools",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Wilson criticized proposed state legislation affecting school days, private-school funding, curriculum posting, and school-board pay",
        "Wilson discussed special-education underfunding and public-school funding concerns"
      ]
    },
    {
      "id": "s-hayspost-nepotism-2023",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/9fb91da0-f9e5-4d80-a065-c5c2727c6fb8",
      "title": "Hays USD 489 BOE debates nepotism again at Monday meeting",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Board debated hiring Superintendent Wilson's wife as a teacher",
        "Hays Post reported the policy required disclosure but did not specifically prohibit administrators' relatives from working in the district",
        "Personnel transactions were approved with Vajnar and Park opposed"
      ]
    },
    {
      "id": "s-hayspost-private-bathrooms-2023",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/677ac412-2adb-48bd-85f8-bbd5f05bb92f",
      "title": "Hays USD 489 board hears concerns about private bathrooms at new high school",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "New Hays High private bathroom design drew community support and opposition",
        "Coverage described privacy, bullying, safety, monitoring, and design arguments"
      ]
    },
    {
      "id": "s-hayspost-project-manager-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/e4ec7011-734d-4c18-ab28-c5b38d236126",
      "title": "Hays USD 489 board votes not to add another manager for bond work",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Wilson defended Nabholz and administration as project/owner representatives",
        "Park and Yarmer raised concerns about bond oversight and management",
        "Project-manager motion failed 3-4",
        "Observed public online activity mapped to Student supports, state funding, and fees."
      ]
    },
    {
      "id": "s-hayspost-opinion-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/18d3a237-b1c0-45a5-886e-980bb0c81483",
      "title": "Opinion: Hays USD 489 Superintendent: Everything they deserve",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Wilson published an attributed opinion defending the district's bond projects",
        "Wilson argued the district should keep building facilities students, staff, and community deserve",
        "Observed public online activity mapped to Student supports, state funding, and fees."
      ]
    },
    {
      "id": "s-hayspost-fees-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/b76e200e-de44-4b35-a99c-791e79ca07be",
      "title": "Hays USD 489 approves school fees for 25-26 school year",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Free breakfast continued for all students",
        "Wilson did not support a further fee reduction because of textbook/classroom-material and English-curriculum needs",
        "Observed public online activity mapped to Student safety, bathrooms, discipline, and vandalism."
      ]
    },
    {
      "id": "s-hayspost-ribbon-2025",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/b20dc400-848a-4e10-bda4-36f5dad6d626",
      "title": "Hays USD 489 cuts ribbon on new $115M high school",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Wilson welcomed the community at the new Hays High ribbon cutting",
        "Coverage describes the high school as funded through the $143.5 million bond issue"
      ]
    },
    {
      "id": "s-tiger-admin-contracts-2026",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=95549",
      "title": "Board of Education extends administrator, director contracts",
      "publisher": "Tiger Media Network",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Wilson opposed voting on each administrator contract individually",
        "Board approved administrator contract extensions through 2027-2028 in a 5-2 vote",
        "Board approved director contract extensions 7-0"
      ]
    },
    {
      "id": "s-citizenjournal-march-2026",
      "tier": "secondary",
      "url": "https://www.citizenjournal.us/takeaways-from-hays-usd-489-education-board-meeting/",
      "title": "Takeaways from Hays USD 489 Education Board Meeting",
      "publisher": "Citizen Journal",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Wilson defended his administrative team during administrator-contract discussion",
        "Wilson warned about possible mental-health funding cuts, special-education funding shortfalls, and private-school tax-credit legislation"
      ]
    },
    {
      "id": "s-hayspost-summer-projects-2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/4da256ef-e1b7-4f2a-8ce3-7c24614c2c05",
      "title": "Hays USD 489 board hears report on summer construction projects",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Wilson outlined 2026 summer construction/capital projects",
        "Projects included Felten, O'Loughlin, ADA access, parking, HVAC, playground equipment, and technology rotation"
      ]
    },
    {
      "id": "s-hayspost-bathroom-vandalism-2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7b63aeb8-e2d2-40a4-af96-5e92884d3ede",
      "title": "USD 489 board members express concerns about bathrooms, vandalism",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Wilson said students lose privileges if spaces are not used appropriately",
        "Wilson said Facebook claims about bathrooms may be exaggerated",
        "Coverage notes requests for vandalism documentation and use of maintenance tickets",
        "Observed public online activity mapped to Student safety, bathrooms, discipline, and vandalism."
      ]
    },
    {
      "id": "s-tiger-bathroom-vandalism-2026",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=96863",
      "title": "Bathroom talk swirls at BOE meeting",
      "publisher": "Tiger Media Network",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Wilson said all-day bathroom monitoring is nearly impossible",
        "Wilson said the district takes vandalism and cleanliness seriously",
        "Coverage describes Facebook posts as part of the public discussion"
      ]
    },
    {
      "id": "s-hayspost-fees-2026",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a546e68d-ac57-4107-9bd9-2bbeb0a4362c",
      "title": "Hays USD 489 school board approves fees for 2026-27 school year",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Breakfast remained free for all students",
        "Lunch prices increased by five cents",
        "Wilson cited food cost increases and said a larger increase would have been preferable"
      ]
    },
    {
      "id": "s-linkedin-preview",
      "tier": "social",
      "url": "https://www.linkedin.com/in/ron-wilson-96762118a",
      "title": "Ron Wilson LinkedIn public preview",
      "publisher": "LinkedIn",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "A public LinkedIn preview for Ron Wilson was located",
        "Access/content were limited and no issue inference is made from the preview"
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/4c6383bb-a3d5-40fe-9d6e-f35e54674e93",
      "title": "hayspost.com / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Student supports, state funding, and fees.",
        "His later construction and capital-outlay remarks are pragmatic and schedule-driven. In 2025-2026 he argued for capital purchases because students and staff were moving into new bu"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "primary",
      "url": "https://www.usd489.com/live-feed?page_no=31",
      "title": "Hays Post / Usd489",
      "publisher": "Usd489",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Election conduct and bond-turnout email.",
        "USD 489 official live feed, April 2020 meal suspension post attributed to Ron Wilson. Source: https://www.usd489.com/live-feed?page_no=31 6. USD 489 / Hays Post article on faciliti"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(RON_WILSON_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[ron-wilson.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
