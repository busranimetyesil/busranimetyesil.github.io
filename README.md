# Creative Engineering Portfolio + Undergraduate Archive

A GitHub Pages-ready static website. No frameworks or build step required.

## Pages
- `index.html` — engineering portfolio and archive introduction at the bottom
- `thesis.html` — dedicated anthropology thesis page, abstract, methods, reflection
- `readings.html` — curated reading shelf with working category filters
- `archive.html` — four-year undergraduate timeline and reflection
- `styles.css` — shared editorial design
- `script.js` — footer year and reading filters
- `assets/` — your own images, resume and thesis PDF

## Customize before publishing
1. Replace `Your Name`, `YOUR NAME`, and `YN` throughout the HTML.
2. Replace every `[placeholder]` with verified details; the site does not invent your thesis title, assigned readings, or biographical facts.
3. Edit thesis abstract and reflective sections in `thesis.html`. Put the PDF at `assets/anthropology-thesis.pdf` and replace the PDF note with `<a href="assets/anthropology-thesis.pdf">Read thesis (PDF)</a>`.
4. Add readings by duplicating `<article class="reading-entry">` in `readings.html`; set `data-category` to `anthropology`, `history`, or `design` and replace the placeholder link. Link to publisher pages, DOI pages, library catalogues, or legally shared versions; do not redistribute assigned copyrighted PDFs without permission.
5. Edit each year of the timeline in `archive.html`.
6. Add `assets/resume.pdf` or remove the resume link. Update email, GitHub and LinkedIn links in `index.html`.
7. Optionally replace abstract project artwork with your own photos and CAD renders.

## Publish
Create a public repository named `YOURUSERNAME.github.io` on GitHub. Upload the **contents** of this folder (not the enclosing folder) to the repository root. In Settings > Pages, choose Deploy from a branch > `main` > `/ (root)`. Visit `https://YOURUSERNAME.github.io` after deployment.

The archive is deliberately placed below professional work on the homepage, with separate pages for deeper reading.
