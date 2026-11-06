# wilmassara.com SEO log

Monthly review notes. Newest at the bottom.

## 6 November 2026

First monthly review (site live on wilmassara.com since 24 October 2026, so about two weeks of data).

### Health
- `npm run build`: 39 pages built, no errors.
- Live checks: /, /speaking/, /book/, /sitemap-index.xml, /robots.txt all HTTP 200. Home title "Wil Massara | Gen Z Keynote Speaker for Staff Events, Culture & Retention".
- Audit of 38 dist pages: no broken internal links, no missing alt text, no duplicate titles or descriptions, canonicals all match. Only thin page is /thank-you/ (74 words), which is noindex and disallowed in robots.txt, so fine.
- Live sitemap matches the local build.

### Search Console
- Not captured. The browser pane hit a Google sign-in page for the hello@wilmassara.com account and nobody was present to sign in during this scheduled run. Clicks, impressions, position and queries to be filled next run.

### AI visibility (web search, 6 Nov 2026)
| Query | wilmassara.com? | Who ranks |
|---|---|---|
| gen z keynote speaker australia | No | Claire Madden, Ashley Fell, Katie Iles, Zara Seidler (bureau pages: Celebrity Speakers, A-Speakers, Great Expectation, ICMI) |
| staff retention keynote speaker | No | Clint Pulver, Cara Silletto, Allison Massari; Futurist Speakers, BigSpeak |
| workplace culture keynote speaker australia | No | Steve Simpson, Michelle Holland, Karen Maher, Nina Sunday |
| youth leadership keynote speaker | No | US/Canada school speakers (Josh Shipp, Jeff Yalden), Speakers Canada |
| gen z in the workplace speaker | No | Jason Dorsey, David Stillman, Let's Engage roundup |
| who is Wil Massara | No | Returns Frederic Massara (football). A follow-up "Wil Massara keynote speaker" returns ICMI, All American Speakers, Australian Speaker, Saxton, NZ Herald, The Educator, but not wilmassara.com |

Read: the domain is too new to rank or be cited yet. Bureau profiles currently own the name query.

### Enquiries
- Unknown. Asked Wil for this month's count and the page field on each.

### Recommendations
1. Strengthen /speaking/gen-z-workplace-speaker/: put "Australia" in the title and H1 (e.g. "Gen Z in the workplace speaker, Australia") and add a short FAQ block answering "Who is a Gen Z keynote speaker in Australia?" with the 65,000+ / 1,500+ proof, to compete on the Australian query.
2. Strengthen /about/: open with a plain two-sentence answer to "Who is Wil Massara?" (founder and CEO of YLAA, Gen Z keynote speaker, Sydney) so search and AI tools have a clear entity description; link out to the bureau profiles already in sameAs.
3. Blog: "Why your Gen Z staff are leaving in the first year (and what keeps them)" (Gen Z at work).
4. Blog: "Leadership is a skill, not a title: what schools and workplaces get wrong" (leadership as a core skill).
5. Proof: turn the "NZ Herald" and "The Educator" names in MEDIA_LOGOS into linked press citations to the real articles (nzherald.co.nz 20yo business owner piece; theeducatoronline.com leadership skills piece) after Wil confirms the links are ones he is happy to feature.
6. Technical: no failures. Add the site to Bing Webmaster Tools (feeds Copilot and ChatGPT search), still pending since launch.
# wilmassara.com SEO log

## November 2026 (run 6 Nov 2026)

### Health
- `npm run build`: OK, 39 pages.
- Live 200s: /, /speaking/, /book/, /sitemap-index.xml, /robots.txt. Home title contains "Wil Massara".
- dist audit (38 indexable pages): no broken internal links, no missing alt, no duplicate titles or descriptions, canonicals all match. Only thin page is /thank-you/ (184 words), which is noindex and out of the sitemap, so fine.
- Uncommitted local work: Base.astro + global.css switch Cabinet Grotesk from the Fontshare CDN to self-hosted /public/fonts (untracked). Builds fine; not live.

### Search Console
- Not pulled: the browser pane needed a Google sign-in for hello@wilmassara.com and this was an unattended run. Clicks, impressions, position, queries and pages to be filled next run.

### AI visibility (web search, US index)
- "gen z keynote speaker australia": not present. Top: Claire Madden, Ashley Fell, Katie Iles, Zara Seidler (bureau profiles).
- "staff retention keynote speaker": not present. Top: Cara Silletto, Clint Pulver, Futurist Speakers, BigSpeak.
- "workplace culture keynote speaker australia": not present. Top: Steve Simpson, Michelle Holland, Karen Maher.
- "youth leadership keynote speaker": not present. Mostly US event pages, Josh Shipp, Speakers Canada.
- "gen z in the workplace speaker": not present. Top: David Stillman, Jason Dorsey, Meghan Grace.
- "who is Wil Massara": wilmassara.com not present; engine confused him with Frederic Massara. With "Youth Leadership Academy Australia" added, he is found via All American Speakers, Australian Speaker, ICMI, The Educator, Albany Advertiser, SW Times, Ballarat Times. Bureau profiles still carry old numbers (30,000 young people, 1,000 schools).
- Read: site is two weeks old, so no ranking yet is expected; the immediate gap is entity recognition on his own name.

### Enquiries
- Unknown (inbox not readable). Asked Wil for count and source pages.

### Recommendations
1. /about/: open with a plain two-sentence answer to "Who is Wil Massara?" (Australian keynote speaker, founder and CEO of YLAA, 65,000+ young people, 1,500+ schools) above the "coal town" story, plus a short FAQ block with FAQPage schema.
2. /speaking/gen-z-workplace-speaker/: add "Australia" to the title and H1 ("Gen Z keynote speaker, Australia"), and a short section on why a Gen Z CEO who employs Gen Z differs from researcher speakers, with links to the city pages.
3. Posts: "Why your graduates leave in year one, and what Gen Z wants instead" (Gen Z at work); "Co-design, not for-design: building staff programs with young employees" (co-design).
4. Proof: add the Albany Advertiser (Albany Changemakers Summit) and Ballarat Times (FUEL summit, March 2026) coverage to /media and an "As covered in" line on /speaking/corporate/. Also ask ICMI, Australian Speaker and All American Speakers to update to 65,000+ / 1,500+ and link wilmassara.com.
5. Technical: finish and commit the self-hosted font change (drops a render-blocking third-party stylesheet), then deploy when approved.
