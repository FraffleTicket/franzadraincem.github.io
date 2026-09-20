This site loads its two typefaces — Sora (headings) and Inter (body text) —
from Google Fonts via a CDN link in the <head> of index.html:

  <link href="https://fonts.googleapis.com/css2?family=Sora:...&family=Inter:..." rel="stylesheet">

This means:
- The site needs an internet connection the first time a visitor's browser
  fetches these fonts (they're cached after that).
- No font files need to live in this folder for the site to work online,
  including once it's deployed to GitHub Pages, Netlify, etc.
- If Google Fonts is unreachable, the site falls back to each browser's
  default system sans-serif font (see the font-family fallback stack in
  css/style.css) — the layout still works, just with a different typeface.

WANT FULLY OFFLINE FONTS INSTEAD?
If you want the site to work with zero internet dependency at all (e.g. to
open index.html on a computer with no network access and see the exact
custom fonts), you can self-host them:

1. Download the Sora and Inter font files (.woff2) for the weights used
   (Sora: 400/500/600/700/800, Inter: 400/500/600/700) from
   https://fonts.google.com/specimen/Sora and
   https://fonts.google.com/specimen/Inter (use the "Download family"
   button, or a tool like google-webfonts-helper).
2. Place the .woff2 files in this /fonts/ folder.
3. In css/style.css, replace the Google Fonts import with @font-face rules,
   e.g.:

   @font-face {
     font-family: 'Sora';
     src: url('../fonts/sora-v14-latin-700.woff2') format('woff2');
     font-weight: 700;
     font-display: swap;
   }

   (repeat per weight/family), and remove the Google Fonts <link> tags from
   index.html.

This step is optional — the site works normally on any real web host
without it.
