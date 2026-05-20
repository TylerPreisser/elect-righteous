# Rendered Source Health — 2026-05-20

This checks unique public URLs referenced by rendered v2 candidate source trails.

## Counts

- Rendered source entries: 13335
- Unique URLs checked: 2643
- Live: 2250
- Blocked/forbidden: 97
- HTTP errors: 243
- Timeouts: 32
- Network errors: 21

## Non-Live / Blocked Sample

| Status | HTTP | URL | Candidates | Error |
|--------|------|-----|------------|-------|
| http-error | 999 | https://www.linkedin.com/in/aaron-cunningham-653b3094 | aaron-cunningham |  |
| http-error | 404 | https://mann.house.gov/about` | aaron-cunningham, kris-kobach, ty-masterson |  |
| timeout |  | https://www.rd.usda.gov/newsroom/news-release/usda-announces-rural-development-state-director-kansas | aaron-cunningham, alaina-cunningham, anne-parelkar, bobbi-dreiling, chase-laporte, christy-cauble-davis, david-vilaysing, erik-murray, jason-hart, jeff-colyer, mason-ruder, michael-soetaert, nathan-leiker, neal-younger, patrick-schmidt, rebecca-herzog, roger-marshall, sandy-jacobs, sandy-spidel-neumann, scott-braun, shaun-musil, toby-dougherty, vernon-ruder-jr | This operation was aborted |
| http-error | 404 | https://about.me/aaron.cunningham` | aaron-cunningham |  |
| http-error | 404 | https://www.nex-tech.com/business/shaun/ | aaron-cunningham, alaina-cunningham, anne-parelkar, barb-wasinger, bobbi-dreiling, chase-laporte, christy-cauble-davis, david-vilaysing, erik-murray, jason-hart, mason-ruder, michael-soetaert, nathan-leiker, neal-younger, patrick-schmidt, rebecca-herzog, roger-marshall, sandy-jacobs, sandy-spidel-neumann, scott-braun, shaun-musil, toby-dougherty, vernon-ruder-jr |  |
| network-error |  | https://replacejerrymoran.org/ | aaron-cunningham, alaina-cunningham, anne-parelkar, bobbi-dreiling, chase-laporte, christy-cauble-davis, david-vilaysing, erik-murray, jason-hart, mason-ruder, michael-soetaert, nathan-leiker, neal-younger, patrick-schmidt, rebecca-herzog, roger-marshall, sandy-jacobs, sandy-spidel-neumann, scott-braun, shaun-musil, toby-dougherty, vernon-ruder-jr | fetch failed |
| network-error |  | https://www.laporte4ksgov.com/ | aaron-cunningham, alaina-cunningham, anne-parelkar, bobbi-dreiling, chase-laporte, christy-cauble-davis, david-vilaysing, erik-murray, jason-hart, mason-ruder, michael-soetaert, nathan-leiker, neal-younger, patrick-schmidt, rebecca-herzog, roger-marshall, sandy-jacobs, sandy-spidel-neumann, scott-braun, shaun-musil, toby-dougherty, vernon-ruder-jr | fetch failed |
| blocked | 403 | https://www.avvo.com/attorneys/67601-ks-aaron-cunningham-5075775.html | aaron-cunningham, alaina-cunningham, anne-parelkar, bobbi-dreiling, chase-laporte, christy-cauble-davis, david-vilaysing, erik-murray, jason-hart, mason-ruder, michael-soetaert, nathan-leiker, neal-younger, patrick-schmidt, rebecca-herzog, roger-marshall, ruth-ruder, sandy-jacobs, sandy-spidel-neumann, scott-braun, shaun-musil, toby-dougherty, vernon-ruder-jr |  |
| http-error | 404 | https://hayspost.com/posts/5de6670c-0b28-4836-820e-a80866aa4e94 | aaron-cunningham, alaina-cunningham, anne-parelkar, barb-wasinger, bobbi-dreiling, chase-laporte, cindy-holscher, colin-mcroberts, david-vilaysing, ethan-corson, jeff-colyer, kris-kobach, lauren-reinhold, marty-tuley, mason-ruder, michael-soetaert, neal-younger, rebecca-herzog, roger-marshall, sandy-jacobs, scott-braun, scott-schwab, shaun-musil, toby-dougherty, tracey-mann, ty-masterson, vernon-ruder-jr, vicki-schmidt |  |
| http-error | 300 | https://www.fhsu.edu/news/2021/03/fhsu-announces-inaugural-advisory-board-for-civic-learning-and-community-engagement | aaron-cunningham |  |
| http-error | 999 | https://www.linkedin.com/in/aaron-cunningham-653b3094/ | aaron-cunningham, alaina-cunningham, bobbi-dreiling, mason-ruder, nathan-leiker, neal-younger, rebecca-herzog, ruth-ruder, scott-braun, vernon-ruder-jr |  |
| http-error | 404 | https://voterly.com/politicians/DmRJRnnSKN/neal-younger | aaron-cunningham, alaina-cunningham, anne-parelkar, bobbi-dreiling, chase-laporte, christy-cauble-davis, david-vilaysing, erik-murray, jason-hart, mason-ruder, michael-soetaert, nathan-leiker, neal-younger, patrick-schmidt, rebecca-herzog, roger-marshall, ruth-ruder, sandy-jacobs, sandy-spidel-neumann, scott-braun, shaun-musil, toby-dougherty, vernon-ruder-jr |  |
| blocked | 403 | https://www.zoominfo.com/p/Vernon-Ruder/2569532965 | aaron-cunningham, alaina-cunningham, bobbi-dreiling, mason-ruder, michael-berges, nathan-leiker, neal-younger, rebecca-herzog, ruth-ruder, scott-braun, vernon-ruder-jr |  |
| blocked | 403 | https://fox4kc.com/news/at-funeral-for-his-son-caleb-schwabs-dad-tells-stories-that-show-calebs-love-and-humor/ | aaron-cunningham, alaina-cunningham, allen-park, barb-wasinger, bobbi-dreiling, cindy-holscher, craig-pallister, curt-vajnar, david-vilaysing, derek-yarmer, ethan-corson, jayme-goetz, jeff-colyer, joy-eakins, ken-brooks, kris-kobach, mason-ruder, nathan-leiker, neal-younger, philip-sarnecki, rebecca-herzog, roger-marshall, ron-wilson, ruth-ruder, sandy-jacobs, scott-braun, scott-schwab, shaun-musil, toby-dougherty, tracey-mann, ty-masterson, vernon-ruder-jr, vicki-schmidt |  |
| blocked | 403 | https://www.ksn.com/news/state-regional/kansas-us-senate-candidates-under-scrutiny-over-missing-financial-disclosures/ | aaron-cunningham, alaina-cunningham, anne-parelkar, bobbi-dreiling, chase-laporte, christy-cauble-davis, daniel-hawkins, david-vilaysing, dinah-sykes, erik-murray, jason-hart, mason-ruder, michael-berges, michael-soetaert, nathan-leiker, neal-younger, patrick-schmidt, rebecca-herzog, roger-marshall, sandy-jacobs, sandy-spidel-neumann, scott-braun, shaun-musil, toby-dougherty, tracey-mann, vernon-ruder-jr, vicki-schmidt |  |
| blocked | 403 | https://openpayrolls.com/rank/highest-paid-employees/hays-ks | aaron-cunningham, alaina-cunningham, anne-parelkar, bobbi-dreiling, chase-laporte, christy-cauble-davis, david-vilaysing, erik-murray, jason-hart, mason-ruder, michael-soetaert, nathan-leiker, neal-younger, patrick-schmidt, rebecca-herzog, roger-marshall, sandy-jacobs, sandy-spidel-neumann, scott-braun, shaun-musil, toby-dougherty, vernon-ruder-jr |  |
| network-error |  | https://mike4kansas.org/ | aaron-cunningham, alaina-cunningham, anne-parelkar, bobbi-dreiling, chase-laporte, christy-cauble-davis, david-vilaysing, erik-murray, jason-hart, mason-ruder, michael-soetaert, nathan-leiker, neal-younger, patrick-schmidt, rebecca-herzog, roger-marshall, sandy-jacobs, sandy-spidel-neumann, scott-braun, shaun-musil, toby-dougherty, vernon-ruder-jr | fetch failed |
| network-error |  | https://mikeforkansas.net/ | aaron-cunningham, alaina-cunningham, anne-parelkar, bobbi-dreiling, chase-laporte, christy-cauble-davis, david-vilaysing, erik-murray, jason-hart, mason-ruder, michael-soetaert, nathan-leiker, neal-younger, patrick-schmidt, rebecca-herzog, roger-marshall, sandy-jacobs, sandy-spidel-neumann, scott-braun, shaun-musil, toby-dougherty, vernon-ruder-jr | fetch failed |
| http-error | 999 | https://www.linkedin.com/in/nathan-leiker-1236bb276 | aaron-cunningham, alaina-cunningham, anne-parelkar, bobbi-dreiling, chase-laporte, christy-cauble-davis, david-vilaysing, erik-murray, jason-hart, mason-ruder, michael-berges, michael-soetaert, nathan-leiker, neal-younger, patrick-schmidt, rebecca-herzog, roger-marshall, ruth-ruder, sandy-jacobs, sandy-spidel-neumann, scott-braun, shaun-musil, toby-dougherty, vernon-ruder-jr |  |
| http-error | 999 | https://www.linkedin.com/in/alaina-cunningham-4436ba1/ | aaron-cunningham, alaina-cunningham, anne-parelkar, barb-wasinger, bobbi-dreiling, chase-laporte, christy-cauble-davis, david-vilaysing, erik-murray, jason-hart, mason-ruder, michael-berges, michael-soetaert, nathan-leiker, neal-younger, patrick-schmidt, rebecca-herzog, roger-marshall, sandy-jacobs, sandy-spidel-neumann, scott-braun, shaun-musil, toby-dougherty, vernon-ruder-jr |  |
| blocked | 403 | https://www.ksn.com/news/your-local-election-hq/election-guide-barbara-k-wasinger-r-kansas-house-district-111/ | aaron-cunningham, alaina-cunningham, allen-park, barb-wasinger, bobbi-dreiling, cindy-holscher, craig-pallister, curt-vajnar, david-vilaysing, derek-yarmer, ethan-corson, jayme-goetz, jeff-colyer, ken-brooks, kris-kobach, mason-ruder, nathan-leiker, neal-younger, rebecca-herzog, roger-marshall, ron-wilson, ruth-ruder, sandy-jacobs, scott-braun, scott-schwab, shaun-musil, toby-dougherty, tracey-mann, ty-masterson, vernon-ruder-jr, vicki-schmidt |  |
| blocked | 403 | https://legiscan.com/KS/people/patrick-schmidt/id/26167 | aaron-cunningham, alaina-cunningham, anne-parelkar, bobbi-dreiling, chase-laporte, christy-cauble-davis, david-vilaysing, erik-murray, jason-hart, mason-ruder, michael-soetaert, nathan-leiker, neal-younger, patrick-schmidt, rebecca-herzog, roger-marshall, sandy-jacobs, sandy-spidel-neumann, scott-braun, shaun-musil, toby-dougherty, vernon-ruder-jr |  |
| http-error | 404 | https://www.haysmed.com/provider/derek-m-yarmer-md/ | aaron-cunningham, alaina-cunningham, allen-park, barb-wasinger, bobbi-dreiling, cindy-holscher, craig-pallister, curt-vajnar, david-vilaysing, derek-yarmer, ethan-corson, jayme-goetz, jeff-colyer, ken-brooks, kris-kobach, mason-ruder, nathan-leiker, neal-younger, rebecca-herzog, roger-marshall, ron-wilson, ruth-ruder, sandy-jacobs, scott-braun, scott-schwab, shaun-musil, toby-dougherty, tracey-mann, ty-masterson, vernon-ruder-jr, vicki-schmidt |  |
| timeout |  | https://ksopen.org/marshall | aaron-cunningham, alaina-cunningham, allen-park, barb-wasinger, bobbi-dreiling, cindy-holscher, craig-pallister, curt-vajnar, david-vilaysing, derek-yarmer, ethan-corson, jayme-goetz, jeff-colyer, ken-brooks, kris-kobach, mason-ruder, nathan-leiker, neal-younger, rebecca-herzog, roger-marshall, ron-wilson, ruth-ruder, sandy-jacobs, scott-braun, scott-schwab, shaun-musil, toby-dougherty, tracey-mann, ty-masterson, vernon-ruder-jr, vicki-schmidt | This operation was aborted |
| blocked | 403 | https://www.avvo.com/attorneys/67202-ks-jason-hart-1922169.html | aaron-cunningham, alaina-cunningham, anne-parelkar, bobbi-dreiling, chase-laporte, christy-cauble-davis, david-vilaysing, erik-murray, jason-hart, mason-ruder, michael-soetaert, nathan-leiker, neal-younger, patrick-schmidt, rebecca-herzog, roger-marshall, sandy-jacobs, sandy-spidel-neumann, scott-braun, shaun-musil, toby-dougherty, vernon-ruder-jr |  |
| http-error | 404 | https://en.wikipedia.org/wiki/Patrick_Schmidt_(politician | aaron-cunningham, alaina-cunningham, anne-parelkar, bobbi-dreiling, chase-laporte, christy-cauble-davis, david-vilaysing, erik-murray, jason-hart, mason-ruder, michael-soetaert, nathan-leiker, neal-younger, patrick-schmidt, rebecca-herzog, roger-marshall, sandy-jacobs, sandy-spidel-neumann, scott-braun, shaun-musil, toby-dougherty, vernon-ruder-jr |  |
| blocked | 403 | https://www.genglobal.org/user/erik | aaron-cunningham, alaina-cunningham, anne-parelkar, bobbi-dreiling, chase-laporte, christy-cauble-davis, david-vilaysing, erik-murray, jason-hart, mason-ruder, michael-soetaert, nathan-leiker, neal-younger, patrick-schmidt, rebecca-herzog, roger-marshall, sandy-jacobs, sandy-spidel-neumann, scott-braun, shaun-musil, toby-dougherty, vernon-ruder-jr |  |
| http-error | 999 | https://www.linkedin.com/in/scott-braun-cpm-62833366/ | aaron-cunningham, alaina-cunningham, bobbi-dreiling, mason-ruder, michael-berges, nathan-leiker, neal-younger, rebecca-herzog, ruth-ruder, scott-braun, vernon-ruder-jr |  |
| http-error | 999 | https://www.linkedin.com/in/christy-davis-19286b224/ | aaron-cunningham, alaina-cunningham, anne-parelkar, bobbi-dreiling, chase-laporte, christy-cauble-davis, david-vilaysing, erik-murray, jason-hart, mason-ruder, michael-soetaert, nathan-leiker, neal-younger, patrick-schmidt, rebecca-herzog, roger-marshall, sandy-jacobs, sandy-spidel-neumann, scott-braun, shaun-musil, toby-dougherty, vernon-ruder-jr |  |
| http-error | 429 | https://www.linkedin.com/in/erikmurraysior | aaron-cunningham, alaina-cunningham, anne-parelkar, bobbi-dreiling, chase-laporte, christy-cauble-davis, david-vilaysing, erik-murray, jason-hart, mason-ruder, michael-soetaert, nathan-leiker, neal-younger, patrick-schmidt, rebecca-herzog, roger-marshall, sandy-jacobs, sandy-spidel-neumann, scott-braun, shaun-musil, toby-dougherty, vernon-ruder-jr |  |
| http-error | 999 | https://www.linkedin.com/in/anne-lea-parelkar-83095659/ | aaron-cunningham, alaina-cunningham, anne-parelkar, bobbi-dreiling, chase-laporte, christy-cauble-davis, david-vilaysing, erik-murray, jason-hart, mason-ruder, michael-soetaert, nathan-leiker, neal-younger, patrick-schmidt, rebecca-herzog, roger-marshall, sandy-jacobs, sandy-spidel-neumann, scott-braun, shaun-musil, toby-dougherty, vernon-ruder-jr |  |
| http-error | 999 | https://www.linkedin.com/in/shaun-musil-26539490/ | aaron-cunningham, alaina-cunningham, anne-parelkar, barb-wasinger, bobbi-dreiling, chase-laporte, christy-cauble-davis, david-vilaysing, erik-murray, jason-hart, mason-ruder, michael-soetaert, nathan-leiker, neal-younger, patrick-schmidt, rebecca-herzog, roger-marshall, sandy-jacobs, sandy-spidel-neumann, scott-braun, shaun-musil, toby-dougherty, vernon-ruder-jr |  |
| http-error | 404 | https://www.hdnews.net/2022/12/01/tmp-marian-alumnus-named-advancement-director-for-hays-catholic-schools/ | alaina-cunningham, barb-wasinger, david-vilaysing, ethan-corson, mason-ruder, sandy-jacobs, shaun-musil, toby-dougherty, ty-masterson |  |
| blocked | 403 | https://www.zoominfo.com/p/Toby-Dougherty/381299961 | alaina-cunningham, barb-wasinger, david-vilaysing, mason-ruder, sandy-jacobs, shaun-musil, toby-dougherty |  |
| http-error | 999 | https://www.linkedin.com/in/mason-ruder-cpm-1aa36455 | alaina-cunningham, barb-wasinger, david-vilaysing, mason-ruder, sandy-jacobs, shaun-musil, toby-dougherty |  |
| blocked | 403 | https://go.boarddocs.com/ks/usd489/Board.nsf/vpublic | allen-park, cathy-hopkins, craig-pallister, curt-vajnar, derek-yarmer, jayme-goetz, ken-brooks, mason-ruder, ron-wilson, ruth-ruder, vernon-ruder-jr |  |
| network-error |  | https://www.ksde.gov/Board/Kansas-State-Board-of-Education/District-5 | allen-park, anne-parelkar, barb-wasinger, cathy-hopkins, chris-mann, cindy-holscher, colin-mcroberts, craig-pallister, curt-vajnar, derek-yarmer, dinah-sykes, ethan-corson, jason-hart, jayme-goetz, jeff-colyer, jennifer-day, ken-brooks, ken-rahjes, kris-kobach, lauren-reinhold, mason-ruder, pat-proctor, roger-marshall, ron-wilson, ruth-ruder, sam-lane, scott-schwab, stacy-rogers, tracey-mann, ty-masterson, vernon-ruder-jr, vicki-schmidt | fetch failed |
| http-error | 300 | https://www.fhsu.edu/news/2023/01/kansas-board-of-regents-approves-the-affiliation-of-three-rural-higher-education-institutions | allen-park, craig-pallister, curt-vajnar, derek-yarmer, jayme-goetz, ken-brooks, ruth-ruder |  |
| http-error | 404 | https://www.hdnews.net/2022/05/02/superintendents-email-sparks-controversy-as-election-day-approaches-for-school-bond/ | allen-park, craig-pallister, curt-vajnar, derek-yarmer, jayme-goetz, ken-brooks, mason-ruder, ron-wilson, ruth-ruder, vernon-ruder-jr |  |
| timeout |  | https://ffrf.org/news/news-releases/item/41401-ffrf-prompts-kan-school-board-to-repeal-discriminatory-dress-code | allen-park, craig-pallister, curt-vajnar, derek-yarmer, jayme-goetz, ken-brooks, mason-ruder, ron-wilson, ruth-ruder, vernon-ruder-jr | This operation was aborted |
| network-error |  | https://www.ksde.gov/Portals/0/Directories/2025-26%20Kansas%20Educational%20Directory.pdf?ver=2025-11-07-175254-390 | allen-park, curt-vajnar, derek-yarmer, jayme-goetz, ken-brooks, ron-wilson, ruth-ruder | fetch failed |
| blocked | 403 | https://openpayrolls.com/rank/highest-paid-employees/kansas-hays | allen-park, craig-pallister, curt-vajnar, derek-yarmer, jayme-goetz, ken-brooks, mason-ruder, ron-wilson, ruth-ruder, vernon-ruder-jr |  |
| http-error | 300 | https://www.fhsu.edu/news/2020/05/pizza-kits-and-book-giveaways-set-for-monday-in-downtown-hays | allen-park, craig-pallister |  |
| http-error | 999 | https://www.linkedin.com/in/ron-wilson-96762118a/ | allen-park, craig-pallister, curt-vajnar, derek-yarmer, jayme-goetz, ken-brooks, mason-ruder, ron-wilson, ruth-ruder, vernon-ruder-jr |  |
| blocked | 403 | https://sos.ks.gov/elections/elections_upcoming_candidate.aspx | anne-parelkar, chase-laporte, christy-cauble-davis, craig-musser, dinah-sykes, erik-murray, jason-hart, jeff-colyer, jennifer-day, ken-rahjes, michael-soetaert, patrick-schmidt, philip-sarnecki, roger-marshall, sam-lane, sandy-spidel-neumann, vicki-schmidt |  |
| timeout |  | https://www.kansascity.com/news/politics-government/article312162551.html | anne-parelkar | This operation was aborted |
| timeout |  | https://www.npr.org/2025/04/01/nx-s1-5345862/wisconsin-supreme-court-crawford-schimel-election-results | anne-parelkar, barb-wasinger, chris-mann, cindy-holscher, colin-mcroberts, dinah-sykes, ethan-corson, jason-hart, jeff-colyer, jennifer-day, ken-rahjes, kris-kobach, lauren-reinhold, pat-proctor, roger-marshall, sam-lane, scott-schwab, stacy-rogers, tracey-mann, ty-masterson, vicki-schmidt | This operation was aborted |
| timeout |  | https://www.npr.org/2018/06/19/621304260/judge-tosses-kansas-proof-of-citizenship-voter-law-and-rebukes-sec-of-state-koba | anne-parelkar, barb-wasinger, chris-mann, cindy-holscher, colin-mcroberts, dinah-sykes, ethan-corson, jason-hart, jeff-colyer, jennifer-day, ken-rahjes, kris-kobach, lauren-reinhold, pat-proctor, roger-marshall, sam-lane, scott-schwab, stacy-rogers, tracey-mann, ty-masterson, vicki-schmidt | This operation was aborted |
| http-error | 404 | https://www.anneforkansas.com/` | anne-parelkar |  |
| http-error | 404 | https://www.kslegislature.gov/li/b2025_26/measures/documents/summary_scr_1611_2025 | anne-parelkar, barb-wasinger, chris-mann, cindy-holscher, colin-mcroberts, dinah-sykes, ethan-corson, jason-hart, jeff-colyer, jennifer-day, ken-rahjes, kris-kobach, lauren-reinhold, pat-proctor, roger-marshall, sam-lane, scott-schwab, stacy-rogers, tracey-mann, ty-masterson, vicki-schmidt |  |
| blocked | 403 | https://www.avvo.com/attorneys/64148-mo-anne-parelkar-4304170.html | anne-parelkar |  |
| blocked | 403 | https://www.realclearpolling.com/latest-polls/senate | anne-parelkar, chase-laporte, christy-cauble-davis, erik-murray, jason-hart, michael-soetaert, patrick-schmidt, roger-marshall, sandy-spidel-neumann |  |
| http-error | 404 | https://kansasdems.org/candidateforum | anne-parelkar |  |
| network-error |  | https://www.kansas.gov/ethics/CFAScanned/House/2026ElecCycle/HLinks2026EC.htm | barb-wasinger | fetch failed |
| http-error | 404 | https://kslegislature.gov/li/b2025_26/measures/vote_view/je_20260210111405_891879/ | barb-wasinger |  |
| http-error | 404 | https://www.kslegislature.gov/li/b2025_26/measures/vote_view/je_20260318155214_530485/ | barb-wasinger |  |
| http-error | 404 | https://www.kslegislature.gov/li/b2025_26/measures/vote_view/je_20260218120124_975402/ | barb-wasinger |  |
| blocked | 403 | https://justfacts.votesmart.org/candidate/biography/145676/barb-wasinger | barb-wasinger |  |
| blocked | 403 | https://kssos.org/elections/cfr_viewer/cfr_examiner_entry.aspx | barb-wasinger, chris-mann, jeff-colyer, kris-kobach, roger-marshall |  |
| blocked | 403 | https://legiscan.com/KS/people/barbara-wasinger/id/21086 | barb-wasinger |  |
| http-error | 404 | https://www.aclukansas.org/sites/default/files/field_documents/all_democracy_is_still_local_2023_final_.pdf | bobbi-dreiling |  |
| network-error |  | https://www.ksde.gov/state-board | cathy-hopkins | fetch failed |
| blocked | 403 | https://www.sos.ks.gov/elections/elections_upcoming_candidate.aspx | cathy-hopkins, chris-mann, cindy-holscher, marty-tuley, pat-proctor, stacy-rogers |  |
| network-error |  | https://www.ksde.gov/Home/Quick-Links/News-Room/Weekly-News/Feature-Story/ArtMID/6201/ArticleID/4005/Kansas-State-Board-of-Education-receives-update-on-structured-literacy-licensure-requirements | cathy-hopkins | fetch failed |
| network-error |  | https://www.ksde.gov/Home/Quick-Links/News-Room/Weekly-News/Feature-Story/ArtMID/6201/ArticleID/4847/Spotlight-on-literacy-highlights-ongoing-work-investment-needed160to-improve-Kansas-childrens-reading-success | cathy-hopkins | fetch failed |
| network-error |  | https://www.ksde.gov/Home/Quick-Links/News-Room/Weekly-News/Standards-and-Instruction/ArtMID/6191/ArticleID/4594/State-Board-begins-process-of-searching-for-a-new-education-commissioner | cathy-hopkins | fetch failed |
| network-error |  | https://www.ksde.gov/news-center/news-releases/2026/04/14/kansas-state-board-of-education-names-finalists-for-commissioner-of-education | cathy-hopkins | fetch failed |
| http-error | 404 | https://kslegislature.gov/li/b2025_26/committees/ctte_s_ed_1/misc_documents/download_testimony/ctte_s_ed_1_20260225_23_testimony.html | cathy-hopkins |  |
| blocked | 403 | https://lawrencekstimes.com/2026/01/16/kr-ksleg-cellphone-ban-debate/ | cathy-hopkins |  |
| http-error | 404 | https://kslegislature.gov/li_2024/b2023_24/committees/ctte_s_fed_st_1/documents/minutes/20240124.pdf | charlotte-ohara |  |
| blocked | 403 | https://www.ksn.com/news/your-local-election-hq/republican-woman-wants-to-be-next-kansas-governor/ | charlotte-ohara, chris-mann, cindy-holscher, ethan-corson, jeff-colyer, joy-eakins, kris-kobach, marty-tuley, philip-sarnecki, scott-schwab, stacy-rogers, ty-masterson |  |
| http-error | 404 | https://www.jocoelection.org/candidates-elected-officials/charlotte-o-hara | charlotte-ohara |  |
| http-error | 404 | https://en.wikipedia.org/wiki/Charlotte_O | charlotte-ohara, chris-mann, cindy-holscher, ethan-corson, jeff-colyer, joy-eakins, kris-kobach, marty-tuley, philip-sarnecki, scott-schwab, stacy-rogers, ty-masterson |  |
| blocked | 403 | https://www.ksn.com/news/your-local-election-hq/joy-eakins-announces-bid-for-kansas-governor/ | charlotte-ohara, chris-mann, cindy-holscher, ethan-corson, jeff-colyer, joy-eakins, kris-kobach, marty-tuley, philip-sarnecki, scott-schwab, stacy-rogers, ty-masterson |  |
| network-error |  | https://openpowerlifting.org/u/martytuley | charlotte-ohara, chris-mann, cindy-holscher, ethan-corson, jeff-colyer, joy-eakins, kris-kobach, marty-tuley, philip-sarnecki, scott-schwab, stacy-rogers, ty-masterson | fetch failed |
| network-error |  | https://www.laporte4ksgov.com/` | chase-laporte | fetch failed |
| http-error | 999 | https://www.linkedin.com/in/chase-laporte-06285b281 | chase-laporte, roger-marshall |  |
| http-error | 404 | https://liberalfirst.com/index.php/en/news/3094-chris-mann-announces-candidacy-for-kansas-attorney-general | chris-mann |  |
| blocked | 403 | https://www.ag.ks.gov/divisions | chris-mann |  |
| blocked | 403 | https://www.ag.ks.gov/about-us | chris-mann |  |
| blocked | 403 | https://www.ag.ks.gov/about-us/attorney-general-kris-w-kobach | chris-mann, jeff-colyer, kris-kobach, roger-marshall |  |
| blocked | 403 | https://www.ag.ks.gov/ | chris-mann, jeff-colyer, kris-kobach, roger-marshall |  |
| http-error | 404 | https://kansasreflector.com/2026/03/23/former-prosecutor-enters-kansas-senate-race/ | chris-mann |  |
| timeout |  | https://www.npr.org/2018/01/03/575524512/trump-dissolves-controversial-election-commission | chris-mann, jeff-colyer, kris-kobach, roger-marshall | This operation was aborted |
| http-error | 404 | https://www.kansasreflector.com/2026/03/23/former-prosecutor-enters-kansas-senate-race/ | chris-mann |  |
| http-error | 404 | https://www.kslegislature.gov/li_2022/b2021_22/members/rep_mann_chris_1/ | chris-mann |  |
| blocked | 403 | https://www.ag.ks.gov/media-center/news-releases | chris-mann, jeff-colyer, kris-kobach, roger-marshall |  |
| blocked | 403 | https://www.ag.ks.gov/Home/Components/News/News/280/1292 | chris-mann, jeff-colyer, kris-kobach, roger-marshall |  |
| blocked | 403 | https://www.ag.ks.gov/Home/Components/News/News/139/1292 | chris-mann, jeff-colyer, kris-kobach, roger-marshall |  |
| blocked | 403 | https://lawrencekstimes.com/2022/10/17/weiss-letter-6m-man/ | chris-mann, jeff-colyer, kris-kobach, roger-marshall |  |
| blocked | 403 | https://lawrencekstimes.com/ | chris-mann, jeff-colyer, kris-kobach, roger-marshall |  |
| blocked | 403 | https://lawrencekstimes.com/2025/07/30/mann-running-2026/ | chris-mann, kris-kobach |  |
| blocked | 403 | https://www.avvo.com/attorneys/66215-ks-christopher-mann-4359732.html | chris-mann, kris-kobach |  |
| http-error | 404 | https://www.ksbar.org/members/?id=23380384 | chris-mann, kris-kobach |  |
| http-error | 999 | https://www.linkedin.com/in/ethancorson/ | chris-mann, cindy-holscher, ethan-corson, jeff-colyer, joy-eakins, kris-kobach, marty-tuley, philip-sarnecki, scott-schwab, stacy-rogers, ty-masterson |  |
| http-error | 404 | https://www.linkedin.com/in/christopher-mann-2089676/ | chris-mann, kris-kobach |  |
| timeout |  | https://www.npr.org/2018/08/14/638703832/trump-ally-kris-kobach-wins-primary-for-kansas-governor-as-gop-incumbent-concede | chris-mann, jeff-colyer, joy-eakins, kris-kobach, philip-sarnecki, roger-marshall, scott-schwab, stacy-rogers, ty-masterson, vicki-schmidt | This operation was aborted |
| blocked | 403 | https://glaad.org/gap/kris-kobach/ | chris-mann, jeff-colyer, kris-kobach, roger-marshall |  |
| http-error | 404 | https://kansasdems.org/archives/23098 | chris-mann, kris-kobach |  |
| http-error | 999 | https://www.linkedin.com/in/stacy-rogers-for-kansas/ | chris-mann, cindy-holscher, ethan-corson, jeff-colyer, joy-eakins, kris-kobach, marty-tuley, philip-sarnecki, scott-schwab, stacy-rogers, ty-masterson |  |
| http-error | 404 | https://www.linkedin.com/in/joyeakins/ | chris-mann, cindy-holscher, ethan-corson, jeff-colyer, joy-eakins, kris-kobach, marty-tuley, philip-sarnecki, scott-schwab, stacy-rogers, ty-masterson |  |
| http-error | 999 | https://www.linkedin.com/in/philipsarnecki/ | chris-mann, cindy-holscher, ethan-corson, jeff-colyer, joy-eakins, kris-kobach, marty-tuley, philip-sarnecki, scott-schwab, stacy-rogers, ty-masterson |  |
| blocked | 403 | https://twstalker.com/CodyLArmstrong | chris-mann |  |
| blocked | 403 | https://mobile.twstalker.com/ashleyafterall | chris-mann |  |
| timeout |  | https://www.fec.gov/data/committee/C00915934/?cycle=2026 | christy-cauble-davis | This operation was aborted |
| timeout |  | https://www.rd.usda.gov/newsroom/news-release/usda-announces-new-presidential-appointee-serve-rural-kansas | christy-cauble-davis | This operation was aborted |
| timeout |  | https://www.rd.usda.gov/about-rd/leadership/state-directors | christy-cauble-davis | This operation was aborted |
| blocked | 403 | https://www.kansas.gov/ethics/ | christy-cauble-davis, neal-younger, patrick-schmidt |  |
| timeout |  | https://www.rd.usda.gov/newsroom/news-release/usda-announces-new-presidential-appointee-serve-rural-kansas` | christy-cauble-davis | This operation was aborted |
| blocked | 403 | https://docquery.fec.gov/pdf/057/202508139789468057/202508139789468057.pdf` | christy-cauble-davis |  |
| http-error | 500 | https://www.fec.gov/data/candidate/S6KS00247/?cycle=2026` | christy-cauble-davis |  |
| http-error | 500 | https://www.fec.gov/data/committee/C00915934/?cycle=2026` | christy-cauble-davis |  |
| timeout |  | https://www.rd.usda.gov/about-rd/leadership/state-directors` | christy-cauble-davis | This operation was aborted |
| http-error | 400 | https://www.christydavisforkansas.com/` | christy-cauble-davis |  |
| http-error | 404 | https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates` | christy-cauble-davis |  |
| http-error | 404 | https://www.christydavisforkansas.com/post/christy-davis-launches-campaign-for-u-s-senate-it-s-time-for-kansas-to-have-a-senator-who-shows-u` | christy-cauble-davis |  |
| http-error | 404 | https://www.newsfromthestates.com/article/kansas-democrats-us-senate-campaign-focus-defeating-gop-incumbent` | christy-cauble-davis |  |
| http-error | 404 | https://hayspost.com/posts/886b8285-39fd-4828-ac95-b3d6d19331b9` | christy-cauble-davis |  |
| http-error | 400 | https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=cdavis4kansas.bsky.social` | christy-cauble-davis |  |
| http-error | 404 | https://kansasreflector.com/briefs/kansas-governor-candidate-cindy-holscher-objects-to-alleged-pressure-campaign-by-kellys-staff/ | cindy-holscher |  |
| http-error | 404 | https://cindyforkansas.com/` | cindy-holscher |  |
| http-error | 404 | https://www.tuley4gov2026.com/about-marty | cindy-holscher, marty-tuley |  |
| timeout |  | https://www.fec.gov/data/committee/C00919860/ | colin-mcroberts, craig-musser, lauren-reinhold, roger-marshall, scott-schwab, tracey-mann | This operation was aborted |
| http-error | 429 | https://aeon.co/users/colin-mcroberts | colin-mcroberts, craig-musser, lauren-reinhold, roger-marshall, scott-schwab, tracey-mann |  |
| http-error | 404 | https://unitedkansas.com/about | colin-mcroberts, craig-musser, lauren-reinhold, roger-marshall, scott-schwab, tracey-mann |  |
| http-error | 404 | https://unitedkansas.com/candidates | colin-mcroberts, craig-musser, lauren-reinhold, roger-marshall, scott-schwab, tracey-mann |  |
| http-error | 404 | https://colinforkansas.com/` | colin-mcroberts |  |
| http-error | 999 | https://www.linkedin.com/in/colin-mcroberts-5781291/ | colin-mcroberts, craig-musser, lauren-reinhold, roger-marshall, scott-schwab, tracey-mann |  |
| http-error | 999 | https://www.linkedin.com/in/laurenreinhold/ | colin-mcroberts, craig-musser, lauren-reinhold, roger-marshall, scott-schwab, tracey-mann |  |
| http-error | 999 | https://www.linkedin.com/in/colin-mcroberts | colin-mcroberts |  |
| blocked | 403 | https://www.zoominfo.com/p/Craig-Musser/9122088966 | colin-mcroberts, craig-musser, lauren-reinhold, roger-marshall, scott-schwab, tracey-mann |  |
| http-error | 404 | https://musserforuscongress.com/` | craig-musser |  |
| http-error | 404 | https://www.kslegislature.gov/li/b2025_26/members/documents/rep_hawkins_daniel_1_vote_record_2025.pdf | daniel-hawkins |  |
| http-error | 404 | https://www.kslegislature.gov/li/b2025_26/measures/vote_view/je_20260128172436_774228/ | daniel-hawkins |  |
| http-error | 404 | https://kslegislature.gov/li/b2025_26/members/documents/sen_sykes_dinah_1_vote_record_2025.html | dinah-sykes |  |
| blocked | 403 | https://www.governor.ks.gov/Home/Components/News/News/537/56 | dinah-sykes |  |
| blocked | 403 | https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/ | dinah-sykes |  |
| blocked | 403 | https://twstalker.com/RepSydneyCarlin | dinah-sykes |  |
| http-error | 404 | https://www.dinahsykes.com/` | dinah-sykes |  |
| http-error | 999 | https://www.linkedin.com/in/dinah-sykes-715364288 | dinah-sykes |  |
| http-error | 404 | https://www.facebook.com/Sykes4KS/` | dinah-sykes |  |
| http-error | 999 | https://www.linkedin.com/in/dinah-sykes-715364288` | dinah-sykes |  |
| timeout |  | https://www.kansascity.com/news/politics-government/article311905084.html | doug-billings | This operation was aborted |
| http-error | 404 | https://www.erikforkansas.com/` | erik-murray |  |
| http-error | 404 | https://join.erikforkansas.com/` | erik-murray |  |
| http-error | 404 | https://www.kcur.org/politics-elections-and-government/2025-12-30/democrat-erik-murray-announces-bid-for-senate-seat-held-by-roger-marshall | erik-murray |  |
| http-error | 404 | https://www.kshb.com/news/local-news/abandoned-indian-springs-mall-to-see-new-life-as-home-of-global-soccer-alliance | erik-murray |  |
| http-error | 404 | https://www.kslegislature.gov/li/b2025_26/members/documents/sen_corson_ethan_1_vote_record_2025.html | ethan-corson |  |
| http-error | 404 | https://kslegislature.gov/li/b2025_26/measures/vote_view/je_20250312153109_776028/ | ethan-corson |  |
| http-error | 404 | https://www.kslegislature.gov/li/b2025_26/measures/vote_view/je_20250410143859_534870/ | ethan-corson |  |
| http-error | 404 | https://kslegislature.gov/li/b2025_26/measures/vote_view/je_20260319131142_107485/ | ethan-corson |  |
| http-error | 404 | https://www.kslegislature.gov/li/b2025_26/measures/vote_view/je_20260409170632_675107/ | ethan-corson |  |
| http-error | 404 | https://www.kslegislature.gov/li/b2025_26/measures/vote_view/je_20260217132754_470460/print/ | ethan-corson, ty-masterson |  |
| http-error | 404 | https://kslegislature.gov/li/b2025_26/measures/vote_view/je_20260327220310_770542/ | ethan-corson |  |
| http-error | 404 | https://kslegislature.gov/li/b2025_26/measures/vote_view/je_20260326202956_013688/ | ethan-corson |  |
| timeout |  | https://www.kansascity.com/news/politics-government/article315103864.html | ethan-corson | This operation was aborted |
| http-error | 404 | https://ethanforkansas.com/` | ethan-corson |  |
| http-error | 404 | https://hartforsenate.com/` | jason-hart |  |
| http-error | 404 | https://secure.actblue.com/donate/jason-hart | jason-hart |  |
| http-error | 999 | https://www.linkedin.com/in/kansanshavehart/ | jason-hart |  |
| http-error | 999 | https://www.linkedin.com/in/jayme-goetz | jayme-goetz |  |
| blocked | 403 | https://insurance.kansas.gov/about-us/ | jeff-colyer, joy-eakins, philip-sarnecki, scott-schwab, stacy-rogers, ty-masterson, vicki-schmidt |  |
| blocked | 403 | https://mobile.twstalker.com/DrJeffColyer | jeff-colyer |  |
| http-error | 404 | https://en.wikipedia.org/wiki/2022_Kansas_Insurance_Commissioner_election | jeff-colyer, joy-eakins, philip-sarnecki, scott-schwab, stacy-rogers, ty-masterson, vicki-schmidt |  |
| blocked | 403 | https://thehill.com/homenews/campaign/570029-colyer-ends-campaign-for-kansas-governor-following-prostate-cancer/ | jeff-colyer, joy-eakins, kris-kobach, philip-sarnecki, roger-marshall, scott-schwab, stacy-rogers, ty-masterson, vicki-schmidt |  |
| blocked | 403 | https://justfacts.votesmart.org/candidate/biography/34449/jeff-colyer | jeff-colyer, joy-eakins, kris-kobach, philip-sarnecki, roger-marshall, scott-schwab, stacy-rogers, ty-masterson, vicki-schmidt |  |
| blocked | 403 | https://www.ksnt.com/capitol-bureau/this-is-unacceptable-top-kansas-election-official-demands-answers-from-usps-after-mail-errors-in-primary-election/ | jeff-colyer, joy-eakins, kris-kobach, philip-sarnecki, scott-schwab, ty-masterson, vicki-schmidt |  |
| timeout |  | https://www.npr.org/2019/02/25/697647804/judge-dismisses-murder-charges-over-boys-death-on-kansas-waterslide | jeff-colyer, joy-eakins, kris-kobach, philip-sarnecki, scott-schwab, ty-masterson, vicki-schmidt | This operation was aborted |
| blocked | 403 | https://legiscan.com/KS/rollcall/SB95/id/475027 | jeff-colyer, joy-eakins, philip-sarnecki, scott-schwab, stacy-rogers, ty-masterson, vicki-schmidt |  |
| blocked | 403 | https://www.ksnt.com/capitol-bureau/dr-jeff-colyer-announces-bid-for-kansas-governor/ | jeff-colyer, joy-eakins, kris-kobach, philip-sarnecki, roger-marshall, scott-schwab, stacy-rogers, ty-masterson, vicki-schmidt |  |
| timeout |  | https://www.npr.org/2018/01/25/580577126/kansas-lt-gov-will-takeover-as-brownback-leaves-for-ambassadorship | jeff-colyer, joy-eakins, kris-kobach, philip-sarnecki, roger-marshall, scott-schwab, stacy-rogers, ty-masterson, vicki-schmidt | This operation was aborted |
| blocked | 403 | https://www.md.com/doctor/michael-j-schmidt-md | jeff-colyer, joy-eakins, philip-sarnecki, scott-schwab, stacy-rogers, ty-masterson, vicki-schmidt |  |
| blocked | 403 | https://fox4kc.com/news/scott-schwab-speaks-as-criminal-cases-loom-dad-talks-of-journey-forward-after-tragedy-on-verruckt/ | jeff-colyer, joy-eakins, kris-kobach, philip-sarnecki, scott-schwab, ty-masterson, vicki-schmidt |  |
| blocked | 403 | https://www.ksnt.com/capitol-bureau/i-will-make-a-full-recovery-scott-schwab-announces-cancer-diagnosis/ | jeff-colyer, joy-eakins, kris-kobach, philip-sarnecki, scott-schwab, ty-masterson, vicki-schmidt |  |
| http-error | 999 | https://www.linkedin.com/in/vicki-schmidt-50b11810/ | jeff-colyer, joy-eakins, philip-sarnecki, scott-schwab, stacy-rogers, ty-masterson, vicki-schmidt |  |
| network-error |  | https://www.wichitalibrary.org/Research/informedvoter/Pages/kansas.aspx | jennifer-day | fetch failed |
| http-error | 429 | https://archive.ph/2025.12.15-205057/https%3A/www.cjonline.com/story/news/politics/state/2025/12/13/jennifer-day-files-candidacy-for-kansas-secretary-of-state/87734035007/ | jennifer-day |  |
| http-error | 404 | https://www.electjenday.com/` | jennifer-day |  |
| http-error | 404 | https://www.youtube.com/@ElectJenDay` | jennifer-day |  |
| network-error |  | https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW01JK_AT.pdf | joy-eakins | fetch failed |
| http-error | 404 | https://www.kslegislature.gov/li/b2021_22/measures/minutes/agenda_item_2022012646029990241 | joy-eakins |  |
| http-error | 404 | https://www.kslegislature.gov/li/b2023_24/committees/ctte_h_ed_1/documents/testimony/20240118_05.pdf | joy-eakins |  |
| http-error | 404 | https://www.kslegislature.gov/li/b2021_22/measures/minutes/agenda_item_2022012646029990241` | joy-eakins |  |
| timeout |  | https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm` | joy-eakins, philip-sarnecki | This operation was aborted |
| timeout |  | https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW01JK_AT.pdf` | joy-eakins | This operation was aborted |
| http-error | 404 | https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01JE_202601.pdf` | joy-eakins |  |
| http-error | 404 | https://www.kansascomeback.com/education` | joy-eakins |  |
| http-error | 404 | https://hayspost.com/posts/2c52043f-2180-461b-9a64-4fd75c91236f` | joy-eakins |  |
| http-error | 404 | https://www.kansascomeback.com/about` | joy-eakins |  |
| http-error | 500 | https://www.kansascomeback.com/news/joy-eakins-discusses-her-run-for-the-governors-office` | joy-eakins |  |
| http-error | 404 | https://www2.ljworld.com/news/2015/feb/11/bill-move-local-elections-november-draws-crowded-h/` | joy-eakins |  |
| http-error | 404 | https://sentinelksmo.org/transparency-becomes-focus-of-wichita-school-board-campaigns/` | joy-eakins |  |
| http-error | 404 | https://www.rivercc.org/` | joy-eakins |  |
| http-error | 404 | https://www.kansascomeback.com/propertytaxreform` | joy-eakins |  |
| http-error | 404 | https://freestatenews.net/local-issues/gop-governors-debate-transcript-part-2/` | joy-eakins, philip-sarnecki |  |
| http-error | 404 | https://www.kcur.org/politics-elections-and-government/2025-07-24/kansas-governor-race-2026-election-candidates` | joy-eakins |  |
| http-error | 404 | https://www.kansascomeback.com/` | joy-eakins |  |
| http-error | 404 | https://freestatenews.net/local-issues/transcript-of-the-gop-governors-debate-january-30-2026-part-1/` | joy-eakins, philip-sarnecki |  |
| http-error | 404 | https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/` | joy-eakins, philip-sarnecki |  |
| blocked | 403 | https://secure.winred.com/joy-eakins-for-governor/donate-today | joy-eakins |  |

## Caveat

A blocked/forbidden result means the URL did not allow this automated checker; it does not automatically mean the source is bad. Human browser verification may still be needed for blocked government, social, or anti-bot-protected pages.

