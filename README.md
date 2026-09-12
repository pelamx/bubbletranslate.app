# bubbletranslate.app

The website for **BubbleTranslate**, a desktop app for macOS, Windows and Linux that
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

The download buttons point at the app repo's `main` branch
(`github.com/pelamx/bubbleTranslate/raw/main/...`), not at anything in this
repo. A new release is therefore published by committing the built binary
there — nothing here needs to change, and nothing here can make an old binary
current.

## Deploying

The apex domain `bubbletranslate.app` sits behind Cloudflare. Confirm in the
Cloudflare dashboard which Pages project (or Worker) that hostname is bound to
before publishing, because more than one origin has served this site:

- **Cloudflare Pages** — `npx wrangler pages deploy . --project-name <project>`
- **GitHub Pages** — pushing to the `github-pages` remote
  (`pelamx/pelamx.github.io`) publishes at https://pelamx.github.io/

`git remote -v` lists both. `origin` is this repo.
