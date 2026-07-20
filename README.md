# Linework

An original Linear-inspired web page project. It mirrors the product-site rhythm,
light interface language, dense product preview, and polished motion style without
shipping Linear trademarks, copy, or external assets.

## Run

```bash
pnpm install
pnpm run dev:web
```

Then open `http://127.0.0.1:5173/`.

## Deploy

This project is configured for GitHub Pages through GitHub Actions.

1. Push this branch to GitHub.
2. In the repository, open Settings -> Pages.
3. Under Build and deployment, set Source to GitHub Actions.
4. Open the Actions tab and wait for "Deploy GitHub Pages" to finish.
5. Share the Pages URL: `https://yuki27-cr.github.io/test/`.

The workflow runs on pushes to `main` and `feature/linear-page`, and can also be
started manually from the Actions tab.

## Files

- `index.html` - Vite browser entry shell
- `vite.config.js` - local web dev server configuration
- `.github/workflows/deploy-pages.yml` - GitHub Pages deployment workflow
- `src/main.js` - application bootstrap
- `src/components/` - page sections and UI modules
- `src/data/siteContent.js` - navigation, copy, releases, metrics, and workflow content
- `src/lib/interactions.js` - mobile navigation, command menu, workflow preview
- `src/styles/main.css` - design tokens, layout, responsive behavior
- `scripts/generate-hero.py` - deterministic raster hero asset generator
- `public/assets/hero-dashboard.png` - generated product interface visual
