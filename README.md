# Kevin Tu — personal academic website

A static personal website centered on accessible, affordable precision medicine and decarbonizing healthcare and science. Designed to follow the layout and interactions of ayushnoori.com, with Kevin's own CV content, portrait, life photos, and publication figures.

## View locally

Open `index.html` in a modern browser. There are no build steps or external JavaScript dependencies. All fonts and images are local.

## GitHub Pages

This site uses the existing repository `kevinjtu/kevinjtu.github.io` and its `master` branch. There is no build step; `.nojekyll` serves these static files directly.

In repository **Settings → Pages**, the publishing source should be **Deploy from a branch → master → /(root)**. The intended URL is `https://kevinjtu.github.io/`.

The previous `CNAME` file is removed so the custom domain can be connected later. No DNS records are changed. If GitHub still shows the old custom domain in Pages settings after deployment, clear that field and save. Configure the domain there when ready.

The previous site and its assets remain available in Git history. Existing unrelated assets are retained to preserve older public links.

## Update content

- `index.html`: biography and research descriptions.
- `data.js`: education, experience, publications, awards, grants, talks, media, and photos.
- `styles.css`: colors, typography, spacing, responsive layouts.
- `app.js`: filtering, publication galaxy, themes, menus, news carousel, and dialogs.
- `assets/`: portrait, photos, publication thumbnails, news images, and Inter font.
- `SOURCES.md`: source and image credits.

Paper topics use `precision`, `access`, `sustainability`, and `education`. `status` is `published`, `accepted`, or `under review`. Set `first` and `featured` to control filters.

The supplied CV's private street address and phone number are not included. The academic email and existing public social links are included.

## Validation

JavaScript syntax and DOM interaction checks passed for publication counts and filters, related-paper links, galaxy details and zoom/reset, keyboard photo navigation, persistent theme, menu state, talk categories, awards, abstracts, and internal asset/anchor references. Browser visual verification remains pending. Deployment can be monitored in the repository’s Actions tab and Pages settings.
