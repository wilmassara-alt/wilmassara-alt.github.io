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

1. Deployed: https://wilmassara-alt.github.io/ is live from the `gh-pages` branch.

2. Point the domain. In Squarespace Domains > wilmassara.com > DNS, add these records and remove the Squarespace website records (keep every MX, TXT and email record as they are):

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | wilmassara-alt.github.io |

3. Then tell GitHub the domain and redeploy:

```bash
mv CNAME.when-dns-is-ready public/CNAME && git add -A && git commit -m "Custom domain" && git push && npm run deploy && gh api -X PUT repos/wilmassara-alt/wilmassara-alt.github.io/pages -f cname=wilmassara.com
```

In the repo Settings > Pages, tick "Enforce HTTPS" once the certificate appears (up to an hour after DNS propagates).

4. Activate the form. Submit the booking form once on the live site. FormSubmit emails hello@wilmassara.com an activation link; click it. Every later submission lands in that inbox.

5. Search. Add the site in Google Search Console (domain property, DNS TXT verification) and submit `https://wilmassara.com/sitemap-index.xml`. Add the same in Bing Webmaster Tools.

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
