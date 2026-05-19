/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const CRAIG_MUSSER_V2: CandidateFullV2 = {
  "slug": "craig-musser",
  "name": "Craig Musser",
  "party": "I",
  "position": "U.S. House candidate, Kansas 1st Congressional District",
  "electionSlug": "ks-01-house-2026",
  "incumbent": false,
  "occupation": "Environment, health, and safety / manufacturing professional; current employer from local profile not independently re-confirmed in this pass",
  "campaignWebsite": "https://musserforuscongress.com/",
  "issues": [
    {
      "id": "i-official-status",
      "title": "Official Status / Ballot Qualification",
      "stated": {
        "text": "FEC records confirm Musser as a 2026 House candidate for Kansas District 01, party OTHER, with a February 14, 2026 Statement of Candidacy and principal committee Craig Musser for Congress. Kansas ballot qualification was not independently confirmed because the Kansas SOS live candidate list was blocked in this environment.",
        "sourceIds": [
          "s-fec-candidate",
          "s-fec-form2",
          "s-ks-sos-candidate-info",
          "s-ks-sos-dates"
        ]
      },
      "actions": [
        {
          "id": "ae-fec-form2",
          "date": "2026-02-14",
          "body": "Filed FEC Form 2 for House, Kansas District 01, party OTHER, designating Craig Musser for Congress as principal campaign committee.",
          "sourceIds": [
            "s-fec-form2"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "The available issue record is candidate-controlled and website-centered. The most developed areas are healthcare, privacy and bodily autonomy, child welfare, Social Security, education, budget/taxes, and agriculture. No prior elected-office record, voting record, current donor ledger, public endorsements, or broad social-media feed was confirmed. The Kansas Secretary of State live candidate-list endpoint was...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-facebook-page"
          ],
          "mappedToIssueId": "i-official-status"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "The 2024 recognition release said United Kansas candidates did not participate in that year's primary and were nominated for the general election by convention or caucus. This is useful party-mechanism context, but it does not independently confirm Musser's 2026 ballot placement.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-facebook-page"
          ],
          "mappedToIssueId": "i-official-status"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "No verified court, criminal, bankruptcy, lien, or public lawsuit record was included in this pass.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-facebook-page"
          ],
          "mappedToIssueId": "i-official-status"
        }
      ],
      "gap": {
        "summary": "Federal candidacy is confirmed; final Kansas ballot placement still needs confirmation from the live SOS candidate list or later certified ballot source.",
        "evidenceIds": [
          "ae-fec-form2"
        ]
      }
    },
    {
      "id": "i-government-reform-representation",
      "title": "Government Reform / Representation",
      "stated": {
        "text": "Musser's clearest campaign theme is representation outside the usual party structure. His website says he is not a career politician, criticizes representatives who serve personal beliefs and party agendas, and says Kansans deserve service rather than personal, party, or special interests.",
        "sourceIds": [
          "s-campaign-home",
          "s-campaign-bio",
          "s-hayspost-announcement"
        ]
      },
      "actions": [
        {
          "id": "ae-campaign-site-poll",
          "date": "2026-05-19",
          "body": "Maintained a campaign website with contact, issue, donation, and poll links, and invited constituents to submit concerns.",
          "sourceIds": [
            "s-campaign-home",
            "s-campaign-bio"
          ]
        }
      ],
      "socialSignals": [
        {
          "id": "ss-facebook-theme",
          "platform": "Facebook",
          "observation": "Logged-out Facebook page metadata described the page as Craig Musser for Congress, Great Bend, and included the line Serving Kansans Not an Agenda.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-facebook-page"
          ],
          "mappedToIssueId": "i-government-reform-representation"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "Undated; captured 2026-05-11 — \"The government should not condescend to women by dictating to them what's best for their lives and their bodies. Every woman is uniquely qualified and wholly capable of defining and following her own path to personal fulfillment and well-being.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-facebook-page"
          ],
          "mappedToIssueId": "i-government-reform-representation"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Public web",
          "observation": "Undated; captured 2026-05-11 — \"Stabilizing markets is paramount: Mother Nature provides farmers with plenty of variables. Once the hard work of plying their minds and trade to overcome those variables is done, we should be doing our part to reduce variability in the markets on which they rely. Whether it’s ideas like passing legislation that prevents the government from making changes that will upset markets...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-facebook-page"
          ],
          "mappedToIssueId": "i-government-reform-representation"
        }
      ],
      "gap": {
        "summary": "No prior elected-office record, public votes, public-office service, or detailed congressional-process reform plan was confirmed.",
        "evidenceIds": [
          "ae-campaign-site-poll"
        ]
      }
    },
    {
      "id": "i-healthcare",
      "title": "Healthcare",
      "stated": {
        "text": "Musser's issues page supports universal preventative care, lower medical costs through nonprofit-medicine and billing/reimbursement changes, broader telehealth and technology use, mental healthcare treated with urgency and compassion, and public action to improve access to healthy food and physical fitness.",
        "sourceIds": [
          "s-campaign-issues"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-healthcare-topic-share",
          "platform": "Campaign website",
          "observation": "Existing local social harvest counted healthcare as 5 of 24 candidate-controlled website statements, or 21 percent of the reviewed website issue/body statements.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-healthcare"
        },
        {
          "id": "ss-crossref-2",
          "platform": "Public web",
          "observation": "Topic distribution among the 24 candidate-controlled website statements: healthcare — 5 statements (21%); representation / biography / campaign theme — 7 statements (29%); personal freedoms and child welfare — 4 statements (17%); education — 3 statements (13%); budget and taxes — 2 statements (8%); agriculture — 2 statements (8%); Social Security — 1 statement (4%).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-facebook-page"
          ],
          "mappedToIssueId": "i-healthcare"
        },
        {
          "id": "ss-crossref-4",
          "platform": "Public web",
          "observation": "Across the captured social-platform record the feed contains no accessible original posts about wheat prices, water rights or the Ogallala Aquifer, rural hospital closures by name, Fort Riley, Fort Hays State University, immigration, gun policy, foreign affairs, Ukraine, Israel, tariffs, specific federal bills, or named congressional leaders.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-facebook-page"
          ],
          "mappedToIssueId": "i-healthcare"
        }
      ],
      "gap": {
        "summary": "No action record was found on Medicare, Medicaid, ACA subsidies, rural hospitals, prescription-drug legislation, VA care, or federal health votes.",
        "evidenceIds": [
          "ss-healthcare-topic-share"
        ]
      }
    },
    {
      "id": "i-personal-freedoms-women-child-welfare",
      "title": "Personal Freedoms / Women / Child Welfare",
      "stated": {
        "text": "Musser's issues page supports privacy and bodily autonomy, equal support regardless of race, religion, sexual orientation, or gender, and says government should not dictate to women what is best for their lives and bodies. The same page says being pro-child does not mean forcing women to give birth or encouraging them to relinquish children, and emphasizes child welfare and former foster youth/adult adoptee input.",
        "sourceIds": [
          "s-campaign-issues"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Across the captured campaign website, the issues page contains statements about healthcare, privacy and bodily autonomy, women, children, Social Security, education, budget and taxes, and agriculture. It does not include issue pages or posts specifically addressing Fort Riley, Fort Hays State University, the Ogallala Aquifer, rural hospital closures, veterans' services, or immigration.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-facebook-page"
          ],
          "mappedToIssueId": "i-personal-freedoms-women-child-welfare"
        },
        {
          "id": "ss-crossref-3",
          "platform": "musserforuscongress.com",
          "observation": "Across the captured period the feed contains no posts about wheat prices, water rights, the Ogallala Aquifer, rural hospital closures by name, Fort Riley, Fort Hays State University, veterans' services, county-level economic development, or immigration. The campaign website does include broad issue statements on healthcare, education, agriculture, Social Security, budget and taxes, privacy, women, and children....",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-issues"
          ],
          "mappedToIssueId": "i-personal-freedoms-women-child-welfare"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "Website biography says Musser is not a career politician and presents the campaign as service-oriented, independent of personal, party, or special interests.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-facebook-page"
          ],
          "mappedToIssueId": "i-personal-freedoms-women-child-welfare"
        }
      ]
    },
    {
      "id": "i-religious-liberty-education",
      "title": "Religious Liberty / Church and State in Education",
      "stated": {
        "text": "Musser's biography says he attended Church of the Brethren while growing up. His education section says state-funded education should be free to teach about all religions of the world but promote none.",
        "sourceIds": [
          "s-campaign-bio",
          "s-campaign-issues"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "musserforuscongress.com",
          "observation": "For KS-01 district issues, Musser's local material centers on agriculture, healthcare, education, and a manufacturing-and-safety biography. Agriculture accounts for 2 of 24 candidate-controlled website statements, or 8 percent. His issues page says, \"Stabilizing markets is paramount: Mother Nature provides farmers with plenty of variables.\" (source).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-campaign-issues"
          ],
          "mappedToIssueId": "i-religious-liberty-education"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Website biography says he grew up in Pennsylvania, attended Church of the Brethren, earned degrees in physics, chemical engineering, business administration, and safety, and became a Certified Safety Professional.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-facebook-page"
          ],
          "mappedToIssueId": "i-religious-liberty-education"
        }
      ]
    },
    {
      "id": "i-social-security",
      "title": "Social Security",
      "stated": {
        "text": "Musser's issues page says Social Security must be maintained so everyone who paid in receives the income and benefits their money provided others. It calls for a substantial and well-trained workforce, keeping the federal budget in line to honor Treasury notes, and raising the FICA cap.",
        "sourceIds": [
          "s-campaign-issues"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-education",
      "title": "Education",
      "stated": {
        "text": "Musser supports more public funding to attract, educate, and continuously train teachers; says state and federal requirements should come with resources; supports some discretionary school resources free from political strings and agendas; and calls for student-loan reform to reduce reliance on high-interest education loans.",
        "sourceIds": [
          "s-campaign-issues"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-education-topic-share",
          "platform": "Campaign website",
          "observation": "Existing local social harvest counted education as 3 of 24 candidate-controlled website statements, or 13 percent of the reviewed website issue/body statements.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-education"
        }
      ],
      "gap": {
        "summary": "No current position was confirmed on school choice, parental-rights bills, Title IX, IDEA funding, federal Department of Education structure, or a specific student-loan bill.",
        "evidenceIds": [
          "ss-education-topic-share"
        ]
      }
    },
    {
      "id": "i-budget-taxes-irs",
      "title": "Budget / Taxes / IRS",
      "stated": {
        "text": "Musser's issues page supports infrastructure investment, simplification of the tax code and fund direction, an IRS that functions primarily as a service, easier correction of small filing/documentation errors, and enforcement focused on complex returns and large unpaid tax obligations.",
        "sourceIds": [
          "s-campaign-issues"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-facebook-economics",
          "platform": "Facebook",
          "observation": "Existing logged-out Facebook metadata included the line Applying Kitchen Table Economics for Pragmatic Budget Solutions.",
          "observedAt": "2026-05-11",
          "sourceIds": [
            "s-facebook-page"
          ],
          "mappedToIssueId": "i-budget-taxes-irs"
        }
      ],
      "gap": {
        "summary": "No detailed tax-rate proposal, deficit target, spending-offset plan, IRS staffing bill position, or appropriations voting record was confirmed.",
        "evidenceIds": [
          "ss-facebook-economics"
        ]
      }
    },
    {
      "id": "i-agriculture",
      "title": "Agriculture",
      "stated": {
        "text": "Musser's issues page says market stabilization is important for farmers, suggests limiting government changes that upset markets during crucial farming timeframes, supports expanding into new markets, and asks farmers and ranchers for input on equipment, raw materials, markets, processing, monopolies, and government.",
        "sourceIds": [
          "s-campaign-issues"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-agriculture-topic-share",
          "platform": "Campaign website",
          "observation": "Existing local social harvest counted agriculture as 2 of 24 candidate-controlled website statements, or 8 percent of the reviewed website issue/body statements.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-agriculture"
        }
      ],
      "gap": {
        "summary": "No specific Farm Bill, crop insurance, ethanol, water-rights, Ogallala Aquifer, tariff, export-market, livestock, or right-to-repair proposal was confirmed.",
        "evidenceIds": [
          "ss-agriculture-topic-share"
        ]
      }
    },
    {
      "id": "i-campaign-finance",
      "title": "Campaign Finance / Funding",
      "stated": {
        "text": "FEC Form 2 identifies Craig Musser for Congress as the principal campaign committee. The FEC candidate overview does not show a processed 2025-2026 financial summary, and no donor ledger or receipts total was confirmed.",
        "sourceIds": [
          "s-fec-candidate",
          "s-fec-form2"
        ]
      },
      "actions": [
        {
          "id": "ae-principal-committee",
          "date": "2026-02-14",
          "body": "Designated Craig Musser for Congress as principal campaign committee on FEC Form 2.",
          "sourceIds": [
            "s-fec-form2"
          ]
        }
      ],
      "socialSignals": [],
      "gap": {
        "summary": "Could not confirm itemized donors, PAC support, cash on hand, debts, loans, or independent expenditures.",
        "evidenceIds": [
          "ae-principal-committee"
        ]
      }
    },
    {
      "id": "i-unconfirmed-issue-areas",
      "title": "Unconfirmed Public Positions",
      "stated": {
        "text": "No current candidate-controlled statements were found on guns, immigration, marijuana/drug policy, Ukraine, Israel, China, NATO, defense spending, veterans' services, rural hospital closures by name, Fort Riley, Fort Hays State University, or the Ogallala Aquifer.",
        "sourceIds": [
          "s-campaign-issues"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-platform-absence",
          "platform": "Public web",
          "observation": "Existing social harvest found no candidate-controlled X, Instagram, YouTube, Truth Social, Gab, Gettr, Substack, Reddit, or TikTok accounts and no accessible original social posts with body text.",
          "observedAt": "2026-05-11",
          "sourceIds": [],
          "mappedToIssueId": "i-unconfirmed-issue-areas"
        }
      ],
      "gap": {
        "summary": "These gaps should remain explicit. Do not infer positions from party label, Facebook metadata, or silence.",
        "evidenceIds": [
          "ss-platform-absence"
        ]
      }
    }
  ],
  "whereTheyWorship": "Public sources do not identify a current church affiliation.",
  "sources": [
    {
      "id": "s-fec-candidate",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/H6KS01211/",
      "title": "MUSSER, CRAIG A - Candidate overview H6KS01211",
      "publisher": "Federal Election Commission",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Musser is listed as a House candidate for Kansas District 01",
        "Party is listed as OTHER",
        "Candidate ID is H6KS01211",
        "FEC overview does not show a 2025-2026 financial summary"
      ]
    },
    {
      "id": "s-fec-form2",
      "tier": "primary",
      "url": "https://docquery.fec.gov/pdf/966/202602149834322966/202602149834322966.pdf",
      "title": "FEC Form 2 - Musser, Craig A",
      "publisher": "Federal Election Commission",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Musser filed a Statement of Candidacy on February 14, 2026",
        "Office sought is House, Kansas District 01",
        "Party affiliation is OTHER",
        "Principal campaign committee is Craig Musser for Congress",
        "Candidate address city/state is Ellinwood, Kansas"
      ]
    },
    {
      "id": "s-ks-sos-candidate-info",
      "tier": "primary",
      "url": "https://www.sos.ks.gov/elections/candidate-information.html",
      "title": "Candidate Information",
      "publisher": "Kansas Secretary of State",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "National-office candidates file with the Kansas Secretary of State",
        "A candidate is not considered filed until petition or declaration and fee are received"
      ]
    },
    {
      "id": "s-ks-sos-dates",
      "tier": "primary",
      "url": "https://www.sos.ks.gov/elections/important-election-dates.html",
      "title": "Important Election Dates",
      "publisher": "Kansas Secretary of State",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "2026 candidate filing deadline is June 1, 2026 at 12:00 p.m.",
        "2026 primary election date is August 4, 2026",
        "2026 general election date is November 3, 2026"
      ]
    },
    {
      "id": "s-campaign-home",
      "tier": "primary",
      "url": "https://musserforuscongress.com/",
      "title": "Craig Musser for US Congress",
      "publisher": "Craig Musser for Congress",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Campaign home page identifies United Kansas Party",
        "Home page says Uniting Kansans For Our Common Good",
        "Home page says Republican Sensibility with Libertarian Ideals",
        "Home page links to donation and poll"
      ]
    },
    {
      "id": "s-campaign-bio",
      "tier": "primary",
      "url": "https://musserforuscongress.com/meetcraig",
      "title": "Meet Craig",
      "publisher": "Craig Musser for Congress",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Musser says he is not a career politician",
        "Musser says current representatives serve personal beliefs and party agenda rather than Kansans",
        "Musser describes education in physics, chemical engineering, business administration, and safety",
        "Musser describes work in engineering, human resources, maintenance, and safety",
        "Musser says he attended Church of the Brethren while growing up",
        "Musser says he wants to hear constituent concerns through the site"
      ]
    },
    {
      "id": "s-campaign-issues",
      "tier": "primary",
      "url": "https://musserforuscongress.com/untitled",
      "title": "Issues",
      "publisher": "Craig Musser for Congress",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Issues page supports universal preventative care",
        "Issues page supports standardized billing and reimbursement practices",
        "Issues page supports telehealth and technology in health care",
        "Issues page supports mental health care parity in urgency and compassion",
        "Issues page supports privacy, bodily autonomy, and equal support regardless of race, religion, sexual orientation, or gender",
        "Issues page says government should not dictate to women what is best for their lives and bodies",
        "Issues page emphasizes child welfare and says being pro-child does not mean forcing women to give birth",
        "Issues page calls for maintaining Social Security and raising the FICA cap",
        "Issues page supports more public funding for teachers and school resources",
        "Issues page says state-funded education should teach about religions but promote none",
        "Issues page supports student-loan reform",
        "Issues page supports infrastructure investment and IRS service reform",
        "Issues page discusses market stabilization and farmer/rancher concerns",
        "Observed public online activity mapped to Personal Freedoms / Women / Child Welfare.",
        "Observed public online activity mapped to Religious Liberty / Church and State in Education."
      ]
    },
    {
      "id": "s-hayspost-announcement",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/2ac5a87c-4b19-4a42-8db8-1deab18eb3f7",
      "title": "Kansas First Congressional District has a new candidate",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Hays Post reported Musser announced for Kansas First Congressional District",
        "Hays Post described Musser as a United Kansas Party candidate",
        "Article quoted campaign language about serving Kansans rather than donors, party bosses, or Washington insiders"
      ]
    },
    {
      "id": "s-facebook-page",
      "tier": "social",
      "url": "https://www.facebook.com/people/Craig-Musser-for-Congress/61584981264795/",
      "title": "Craig Musser for Congress",
      "publisher": "Facebook",
      "accessed": "2026-05-11",
      "claimsAnchored": [
        "Logged-out public page metadata listed Craig Musser for Congress, Great Bend",
        "Existing local capture recorded 2 page likes",
        "Metadata included Serving Kansans Not an Agenda",
        "Post-level reactions, comments, and shares were not visible in logged-out capture"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(CRAIG_MUSSER_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[craig-musser.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
