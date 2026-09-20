# bubbletranslate.app

The marketing site. The product itself lives in a separate repository,
`pelamx/bubbleTranslate`, and so does everything about how it works.

## Writing the name

The product is **bubbleTranslate** — lowercase `b`, capital `T`, one word.
Never `BubbleTranslate`, never `Bubble Translate`, never `bubbletranslate` as a
word. It is written that way everywhere a person can read it: page copy in all
three languages, `<title>`, meta and Open Graph tags, `alt` text, `aria-label`,
and the strings in `script.js`.

Two things are not the name and stay as they are: the domain and URLs
(`bubbletranslate.app`, all-lowercase because hostnames are), and the GitHub
repository path in download links.

A sentence that begins with the name still begins with a lowercase `b`. That
looks wrong for a moment and is correct: it is a name, not a word.

## How this site is built

Plain HTML, one stylesheet, one script. No build step and no framework — what
is in the repository is what is served.

- `index.html` is English; `tr/` and `es/` are full translations of it, not
  fragments. A change to one is a change to three.
- Every string a reader sees carries a `data-i18n` key, and the same key must
  exist for all three languages in the `I18N` table in `script.js`. The
  language switcher rewrites the page from that table, so a key present in the
  HTML but missing from the table leaves the English text behind when someone
  switches language.
- Download links point at `/releases/latest/download/…`, which GitHub resolves
  to the current release. They carry no version number, so releasing is what
  moves them — never edit a version into them.

Deploy with `npx wrangler deploy`. The site is a Workers Static Assets worker
with `bubbletranslate.app/*` routed to it; deploying anywhere else leaves the
live site untouched. See `wrangler.jsonc`.
