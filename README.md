# BubbleTranslate website

Marketing / download site for **BubbleTranslate**, a desktop app for macOS and
Linux that shows the translation of any text you select in a small bubble at
your cursor.

Hosted with **GitHub Pages** at https://pelamx.github.io/

## Downloads

The download buttons link to the released builds in the app repo:

- macOS: downloads/bubbleTranslate-macos.dmg (served by this site)
- Linux: downloads/bubbleTranslate-linux-x86_64 (served by this site)

App source and full docs: https://github.com/pelamx/bubbleTranslate

## Structure

| File | Purpose |
|------|---------|
| `index.html` | Landing / download page |
| `styles.css` | All styling |
| `script.js` | Mobile nav + footer year |
| `favicon.svg` | Site icon / logo |
| `404.html` | Custom not-found page |
| `.nojekyll` | Serve files as-is (skip Jekyll) |

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy

This repo is named `pelamx.github.io`, so pushing to `main` publishes
automatically to https://pelamx.github.io/ via GitHub Pages.
