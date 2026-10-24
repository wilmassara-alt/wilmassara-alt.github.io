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

4. Activate the form. Submit the booking form once on the live site. FormSubmit emails hello@wilmassara.com an activation link; click it. Every later submission lands in that inbox.
5. Search. Add the site in Google Search Console (domain property, DNS TXT verification) and submit `https://wilmassara.com/sitemap-index.xml`. Add the same in Bing Webmaster Tools.
6. Optional email hygiene noticed during the DNS work: there is no SPF TXT record at @ for Google Workspace. Adding `v=spf1 include:_spf.google.com ~all` improves deliverability of hello@ mail. Not changed, because it is outside the website brief.

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
