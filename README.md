# bubbletranslate.app

The website for **bubbleTranslate**, a desktop app for macOS, Windows and Linux that
shows the translation of text you select in a small bubble at your cursor.

Hold **Shift** while selecting and the bubble appears; select without it and
nothing happens, so copying and pasting is never interrupted. The key is
configurable — Shift, Ctrl, Alt or Super — and can be turned off to go back to
translating every selection. The copy on this site has to keep saying so: the
gesture is the first thing a visitor needs to know, and it is what separates
this from a translator that pops up at every stray highlight.

App source and full docs: https://github.com/pelamx/bubbleTranslate

## Structure

| File | Purpose |
|------|---------|
| `index.html` | Landing / download page |
| `privacy.html` | Privacy Policy, served at `/privacy` |
| `terms.html` | Terms of Service, served at `/terms` |
| `refunds.html` | Refund & Cancellation Policy, served at `/refunds` |
| `styles.css` | All styling |
| `script.js` | Language switcher (EN/TR/ES), mobile nav, footer year. Every visible string lives here as well as in `index.html`; a copy change means editing all three languages, or the other two silently keep the old wording. |
| `favicon.svg` | Site icon / logo |
| `404.html` | Custom not-found page |
| `.nojekyll` | Serve files as-is (skip Jekyll) |
| `robots.txt` | Allows all, points at the sitemap |
| `sitemap.xml` | All indexable URLs, with `hreflang` alternates for the localized pages |
| `_headers` | Security headers (HSTS, nosniff, Referrer-Policy, X-Frame-Options, `frame-ancestors`, Permissions-Policy), served by the Worker from the assets dir |
| `tr/`, `es/` | **Generated** Turkish and Spanish copies of `index.html` and `pricing.html` — do not edit by hand (see below) |
| `scripts/build-i18n.py` | Regenerates `tr/` and `es/` from the English pages + `script.js` |

### Localized pages (`/tr/`, `/es/`)

The English `index.html` and `pricing.html` plus the `I18N` tables in
`script.js` are the single source of truth. The `/tr/` and `/es/` pages are
generated from them so crawlers (and no-JS visitors) get real, indexable
Turkish and Spanish URLs with `hreflang` alternates and a localized
`<title>`/description. The language switcher navigates between `/`, `/tr/` and
`/es/` rather than swapping text in place, so the URL, `<link rel=canonical>`
and rendered content always agree.

After any copy change to `index.html`, `pricing.html` or the `I18N` tables,
regenerate the localized pages (needs `node` on the PATH):

```bash
python3 scripts/build-i18n.py
```

The three legal pages are a payment-provider requirement: Paddle verifies that
a live site links to terms, a privacy policy and a refund policy before it will
approve an account.

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Clean URLs (`/privacy` rather than `/privacy.html`) are a host feature, so the
local server needs the `.html`. Both GitHub Pages and Cloudflare Pages serve
the extensionless form.

## Downloads

The download buttons and the `DOWNLOADS` map in `script.js` point at a
**versioned GitHub Release** on the app repo
(`github.com/pelamx/bubbleTranslate/releases/download/v0.2.2/...`), not at
anything in this repo. Each release ships the three binaries — Windows as
`bubbleTranslate-windows-x64.zip`, because a browser discards a bare unsigned
`.exe` as an uncommon download — plus a `SHA256SUMS.txt` so a download can be
verified. Because the URL is pinned to a tag, publishing a new version means
creating the new release **and** bumping these URLs here (and the matching
`url` fields in the app repo's `latest.json`) to the new tag.

The binaries are no longer committed to the app repo, so the `raw/main` URLs
these buttons used before now 404. Anything still pointing at one — an old
bookmark, a post, a cached page — has to be repointed at the release asset;
there is nothing left at the old address to fall back to.

## Deploying

`bubbletranslate.app` and `www.bubbletranslate.app` are routes on the
**`bubbletranslate-site`** Worker (Workers Static Assets), configured in
`wrangler.jsonc`. Deploy with:

```sh
npx wrangler deploy
```

It uploads the working tree, so commit or stash unfinished edits first. The
`bubbletranslate` Pages project and GitHub Pages are old origins: deploying
there leaves the live site unchanged.
