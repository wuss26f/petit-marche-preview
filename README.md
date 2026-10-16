# Petite Marché website preview

Static client-review website for Petite Marché in Flagstaff, Arizona.

## Edit the site

- `index.html` contains the page content and all styling.
- `images/` contains the 11 bundled photographs.
- `fonts/patrick-hand.ttf` is the bundled Patrick Hand typeface. Its license is in `fonts/OFL.txt`.
- `.nojekyll` tells GitHub Pages to publish these static files without Jekyll processing.

There is no build command, package installation, server-side application, database, or API key.
All asset paths are relative so the same files work in a GitHub project subdirectory or on a domain root.

## GitHub Pages preview

After uploading these files to the repository's `main` branch:

1. Open repository **Settings → Pages**.
2. Set the source to **Deploy from a branch**.
3. Select **main** and **/(root)**, then **Save**.
4. Wait for the Pages deployment to succeed, then use the URL reported by GitHub.

New commits to the publishing branch update the preview automatically.
This is a public preview. A private repository does not by itself make a GitHub Pages site private.

For local preview, serve the folder with a static HTTP server, for example:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Later production hosting

After client approval, the same static files can be deployed to a compatible web-hosting document root.
Keep `index.html`, `images/`, and `fonts/` together. A domain registration by itself is not web hosting.
No custom domain or DNS is configured by this repository. Confirm hosting details and asset permissions before production launch.

## Source

Prepared from the existing website's saved version 5, source commit `c75e70f2ec636a0003a86cd9ab126a02b7869a9d`.
The original HTML, bundled photographs, and font are unchanged.
The page retains its existing “Website concept for Petite Marché” footer.

No license is granted here for the business's photographs, branding, or other content.

## GitHub documentation

- [Configure the publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [GitHub Pages usage limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)

Use this preview for client review. GitHub Pages is not intended to run an online business or commercial-transaction site.
