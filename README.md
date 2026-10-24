# wilmassara.com

Astro site for Wil Massara, Gen Z keynote speaker. Copy and data live in `src/data/site.ts`; blog posts are markdown in `src/content/blog`; photos in `src/assets/photos`; the showreel and hero loop in `public/media`.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

The site is published from the `gh-pages` branch of `wilmassara-alt/wilmassara-alt.github.io`. After any change:

```bash
git add -A && git commit -m "Describe the change" && git push && npm run deploy
```

`npm run deploy` builds the site and force-pushes `dist` to `gh-pages`. GitHub Pages serves it within a minute at https://wilmassara-alt.github.io/ and, once DNS is set, at https://wilmassara.com/. (A GitHub Actions version of the deploy is kept in `deploy-notes/` for later; it needs a token with the `workflow` scope, which the Claude Code token on this Mac does not have.)

## Launch checklist

1. Deployed from the `gh-pages` branch. Done 2026-10-24.
2. DNS in Squarespace Domains points at GitHub Pages (four A records at @, CNAME www to wilmassara-alt.github.io). Google Workspace MX and DKIM records untouched. Done 2026-10-24.
3. Custom domain attached on GitHub (`public/CNAME` = wilmassara.com). Done 2026-10-24. In the repo Settings > Pages, tick "Enforce HTTPS" once the certificate is issued (up to an hour after DNS propagates), or run:

```bash
gh api -X PUT repos/wilmassara-alt/wilmassara-alt.github.io/pages -F https_enforced=true
```

4. Form activated 2026-10-24 (FormSubmit activation link clicked; a labelled test submission returned success). Every submission lands in hello@wilmassara.com.
5. Google Search Console: domain property `sc-domain:wilmassara.com` verified via DNS TXT on 2026-10-24 (record `google-site-verification=...` at @, keep it), sitemap-index.xml submitted and read with status Success. Signed in as hello@wilmassara.com. Still optional: Bing Webmaster Tools (it can import the Search Console property in one click).
6. Optional email hygiene noticed during the DNS work: there is no SPF TXT record at @ for Google Workspace. Adding `v=spf1 include:_spf.google.com ~all` improves deliverability of hello@ mail. Not changed, because it is outside the website brief.

## Measurement

- Cloudflare Web Analytics beacon is in `src/layouts/Base.astro` (account hello@wilmassara.com, hostname wilmassara.com). Dashboard: https://dash.cloudflare.com/ > Analytics > Web analytics.
- Google Search Console: domain property under hello@wilmassara.com.
- A monthly SEO review runs as a Claude Code scheduled task ("Monthly SEO review: wilmassara.com") on the 21st at 9am local time. It checks site health, Search Console, AI visibility, asks for the month's enquiry count, proposes next actions and appends to `deploy-notes/seo-log.md`.
- Inbound links from Wil's own sites were staged (not published) on 2026-10-24: YLAA speaker profile and team profile (ylaaus.com), and the YLAA entry on The Youth Impact Foundation's Our Brands page. Publish those Webflow sites to make the links live.

## Content rules

- Canonical numbers: 65,000+ young people, 1,500+ schools. Founded YLAA at 15 in 2018.
- No current age anywhere. No em dashes. Australian spelling.
- Fees on request only; no bureau names on the site.
- Never invent clients, quotes, press or statistics.

## Design checks

The design follows the tasteskill direction in `.taste-skill/direction.json`. After design changes run:

```bash
node ~/.claude/skills/design-taste-frontend/scripts/inspect.mjs http://localhost:4321/
```
