# wilmassara.com Growth dashboard: refresh

Dashboard: https://claude.ai/artifact/Akb65j4WUfJTnJK49uGioU (Dashboard type, data in its store as attached JSON files).
Growth is measured as the change in the daily rate (clicks or impressions per day) between consecutive periods in periods.json, so partial weeks and months compare fairly.

Sources (Wil signs in inside the Claude browser pane; Claude never types passwords):
- Search Console, domain property sc-domain:wilmassara.com, Google account hello@wilmassara.com.
  Performance: https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain%3Awilmassara.com&num_of_days=28
  Breakdowns via URL: &breakdown=date | query | page | country. Date range via &start_date=YYYYMMDD&end_date=YYYYMMDD.
  AI features report: https://search.google.com/search-console/performance/search-analytics/ai?resource_id=sc-domain%3Awilmassara.com&num_of_days=28 (impressions only; &breakdown=page or date).
- Cloudflare Web Analytics, hello@wilmassara.com account: https://dash.cloudflare.com/fe277e1585fcd74846dba329398bb122/web-analytics/overview/visits?excludeBots=Yes&time-window=10080 (7 days; 43200 = 30 days, sampled, do not use for rates).

Monthly steps (run with the 21st review, data lags 2 to 3 days):
1. periods.json: add one row per completed period since the last row (use calendar months once a full month exists; the first two rows are launch week 23 to 27 Oct and week 2, 28 Oct to 3 Nov 2026). Fields: period, start, end, days, clicks, impressions, position, partial. Never delete old rows: Search Console only keeps 16 months.
2. totals.json: replace with the latest 28-day totals (clicks, impressions, ctr, position, ai_impressions, queries, pages, countries counts) and the window dates.
3. queries.json (top 35 by impressions, add a theme: Brand, AI in schools, Corporate, Schools, City, Government, Other), pages.json (top 10), countries.json (top 10), ai_pages.json (top 10 from the AI report), traffic.json (last 7 days: visits, pageviews, from_google, direct, australia, united_states, desktop, mobile).
4. speed.json only changes after a performance pass (fixed dataset).
5. Upload each changed file with the Artifact tool (asset: true, url above, one JSON file per call), then ArtifactData update on datasets/<id>: new source.url, source.name, updated {at, by}, and edit {via: "claude", at}. Pass if_version from the last read.
6. Keep a copy of every file in this folder; it is the long-term history.

## Page notes (2026-11-08)
- The dashboard page (files/index.html in the artifact store; a copy is dashboard-index.html here) wears the wilmassara.com look: Cabinet Grotesk embedded as base64 data URIs (the dashboard CSP blocks Fontshare), Studio grey ground #a8a8aa, surface #b4b4b6, ink #0e0e0e, accent #1f5c49, black field #1b1b1c for the header and recommendations bands. No hairlines, shadows, pills or gradients. All scripts in one block (each block is its own scope).
- "What to do in <month>" is static text in the page (one-writer rule). Rewrite the list at each monthly review from the new numbers: read files/index.html with ArtifactData, replace the <ol> inside .wm-recs and the heading month, write it back with if_version.
