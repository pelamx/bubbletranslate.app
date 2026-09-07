# BubbleTranslate website

Marketing site for **BubbleTranslate**, a desktop app that reads any text on your
screen and shows the translation in a floating bubble.

Hosted with **GitHub Pages** at https://pelamx.github.io/

## Structure

| File | Purpose |
|------|---------|
| `index.html` | Landing page |
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

This repo is named `pelamx.github.io`, so pushing to the default branch publishes
automatically to https://pelamx.github.io/ via GitHub Pages.
