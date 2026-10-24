# wilmassara.com

Astro site for Wil Massara, Gen Z keynote speaker. Copy and data live in `src/data/site.ts`; blog posts are markdown in `src/content/blog`; photos in `src/assets/photos`; the showreel and hero loop in `public/media`.

## Run locally

```bash
npm install
npm run dev
```

## Launch checklist

1. Create the GitHub repo and push (the repo name makes the site live at the root of wilmassara-alt.github.io):

```bash
gh repo create wilmassara-alt.github.io --public --source=. --remote=origin --push
```

2. Turn on GitHub Pages with the Actions workflow (one command, or Settings > Pages > Source: GitHub Actions):

```bash
gh api -X POST repos/wilmassara-alt/wilmassara-alt.github.io/pages -f build_type=workflow
```

The site then builds at https://wilmassara-alt.github.io/ on every push to `main`.

3. Point the domain. In Squarespace Domains > wilmassara.com > DNS, add these records and remove the Squarespace site records (keep every MX, TXT and email record as they are):

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | wilmassara-alt.github.io |

4. Then move the domain file into place, commit and push:

```bash
mv CNAME.when-dns-is-ready public/CNAME && git add -A && git commit -m "Custom domain" && git push
```

In the repo Settings > Pages, tick "Enforce HTTPS" once the certificate appears (up to an hour).

5. Activate the form. Submit the booking form once on the live site. FormSubmit emails hello@wilmassara.com an activation link; click it. Every later submission lands in that inbox.

6. Search. Add the site in Google Search Console (domain property, DNS TXT verification) and submit `https://wilmassara.com/sitemap-index.xml`. Add the same in Bing Webmaster Tools.

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
