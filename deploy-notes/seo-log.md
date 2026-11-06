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

### Addendum: second run, 6 November 2026
Same results on build, live checks, audit and the six searches; GSC again blocked at sign-in. New this run:
- Self-hosted Cabinet Grotesk font plus poster-first hero and deferred motion were committed in e2e4fb8 ("Speed: ...") during this run, not yet deployed. Technical fix: deploy that speed commit once Wil approves (removes a render-blocking third-party stylesheet).
- Bureau profiles that own the name query (ICMI, Australian Speaker, All American Speakers) still show old numbers (30,000 young people, 1,000 schools). Ask each to update to 65,000+ / 1,500+ and link wilmassara.com.
- Extra press found, not yet on /media: Albany Advertiser (inaugural Albany Changemakers Summit) and Ballarat Times (FUEL summit, March 2026). Candidates for the proof item alongside NZ Herald and The Educator.
- /about/ H1 is "A kid from a coal town." with no name or role, which supports recommendation 2.

### Addendum: numbers read with Wil signed in, 6 November 2026
Search Console (data through 3 November, Google lags about two days):
- Last 28 days (23 Oct to 3 Nov): 21 clicks, 574 impressions, CTR 3.7%, average position 6.1, 40 queries, 33 pages, 36 countries.
- Last 7 days (28 Oct to 3 Nov): 15 clicks, 365 impressions, CTR 4.1%, average position 6.0.
- Top page by far: /blog/why-banning-ai-in-schools-fails-students/ with 13 clicks and 393 impressions. Then home 2/28, old www /about 2/23, /about/ 0/37, /speaking/schools/ 0/19.
- Brand: "wil massara" 2 clicks, 9 impressions, position 1.9. "ylaa" 6 impressions at 4.5.
- Commercial queries with impressions but no clicks: school leadership keynote speaker (9, pos 10), gen z in the workplace keynote speaker (5, pos 3.6), find a keynote speaker on gen z for an hr conference (2, pos 1), book gen z workplace speaker (1, pos 3), gen z employee retention speakers (1, pos 4), keynote speaker brisbane (2, pos 21.5), keynote speaker perth (2, pos 25).
- Countries: Australia 14 clicks / 380 impressions, South Korea 3/9, United States 2/65, Philippines 2/26, then India, NZ, Hong Kong, Canada, UK, Indonesia with impressions only.
- Generative AI features report (beta): 170 impressions in 28 days, 131 of them on the AI-ban blog post, 6 on /about/, rest spread over blog posts, home and the Perth page. So the site is already appearing inside Google AI Overviews / AI Mode for the AI-in-schools topic.
Cloudflare Web Analytics (bots excluded):
- Last 7 days: 48 visits, 53 page views. Referrers: direct 33, google.com 15. Countries: Australia 24, US 14, China 3, South Korea 2, Philippines 2. Top paths: / 26, AI-ban post 13, /speaking/gen-z-workplace-speaker/ 2. Desktop 38, mobile 10.
- Last 30 days: about 100 visits, 110 page views (30-day view is sampled so numbers are rounded).
- Core Web Vitals from real visitors (24h): LCP P75 1.2s, INP and CLS all good.
Redirects for the old Squarespace paths (/gen-z-speaker, /booking, /contact, /faqs, old 7-reasons blog slug) were added to astro.config.mjs and deployed today.
