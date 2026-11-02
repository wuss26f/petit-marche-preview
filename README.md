# Petit Marché website

Static HTML/CSS website for Petit Marché in Flagstaff. No framework, build step, or external font download is required. A small JavaScript file provides the gallery lightbox.

## Local preview

From this repository folder run:

```sh
py -m http.server 8000
```

Alternatively use python -m http.server 8000. Open http://localhost:8000. Ctrl+C stops the server.

## Active files

- index.html: page content, inline decorative SVG symbols, navigation, and contact links.
- js/main.js: native dialog lightbox for the six new gallery JPGs, with close, Escape, and focus handling.
- css/styles.css: responsive styles, system Courier typography, and reduced-motion-aware accents.
- assets/brand/: official orange logo and favicon.
- assets/images/: nine corrected *-final.png photos, IMG_9471.jpg storefront, original latte-and-pumpkins.jpg seasonal photo, produce-counter-updated.png, and the Instagram icon.
- assets/fonts/: font notes; the site uses Courier New, Courier, monospace.
- .nojekyll: static hosting marker.

The seasonal screenshot borders are hidden only through CSS; the photo file is unchanged. No menu was supplied, so no menu or prices are published.

The original fonts/ and images/ directories are retained as legacy assets and are not referenced by the current page. Source archives and design references remain outside this clone, in the original working folder. ZIPs and reference/ are ignored. No deployment configuration was changed.

The gallery includes six unedited JPG copies: focaccia-on-display.jpg, strawberry-tarts.jpg, assorted-pastry-tray.jpg, bagel-sandwiches-outside.jpg, iced-drinks-on-table.jpg, and pantry-shelves-and-provisions.jpg. Every gallery photo uses an equal 4:3 cover frame with an individual focal position; the lightbox shows the complete uncropped JPG. The gallery has three desktop columns, two tablet columns, and one column on phones up to 480px.
