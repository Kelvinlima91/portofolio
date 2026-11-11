# kelvinlima.dev

Personal portfolio of Kelvin Lima — a bilingual (PT/EN), single-page site with a GitHub-style UI, built with Astro.

## Screenshot

`TODO(kelvin): add screenshot at docs/screenshot.png`

## Tech stack

- [Astro](https://astro.build) `^5.18.2` — static site framework (`output: 'static'`)
- [Alpine.js](https://alpinejs.dev) `^3.15.12` (via `@astrojs/alpinejs` `^1.0.0`) — interactivity (dark mode, language toggle, animations)
- [Tailwind CSS](https://tailwindcss.com) `^4.3.2` (via `@tailwindcss/vite` `^4.3.2`) — styling
- [@tabler/icons](https://tabler.io/icons) `^3.44.0` — icon set
- TypeScript — `astro/tsconfigs/strict`

## Getting started

Requires Node.js `>=22.12.0` (see `engines` in [package.json](package.json)).

```bash
npm install
```

```bash
npm run dev
```

Dev server runs at `http://localhost:4321` (Astro's default port).

```bash
npm run build
```

Outputs the static site to `dist/`.

```bash
npm run preview
```

Serves the `dist/` build locally for a final check before deploying.

## Project structure

```
src/
  assets/        # images used on the site
  data/
    portfolio.js # personal info, projects, education, tech stack, GitHub-style contribution data
    i18n.ts      # PT/EN translation strings
  layouts/
    Layout.astro # base HTML layout, dark/light theme handling
  pages/
    index.astro  # the entire single-page site
  styles/
    global.css   # Tailwind v4 theme tokens and global styles
public/          # static assets served as-is (favicon, etc.)
astro.config.mjs # Astro + Alpine.js + Tailwind integration config
```

## Editing content

All editable content lives in two files — changes there are picked up automatically by `src/pages/index.astro`:

- **[src/data/portfolio.js](src/data/portfolio.js)** — exports `PERSONAL_INFO`, `PROJECTS`, `EDUCATION`, `STACK`, and `TECH_DETAILS`. Add, remove, or edit entries in these arrays/objects to change what's shown for projects, the education timeline, and the tech stack grid.
- **[src/data/i18n.ts](src/data/i18n.ts)** — exports `translations`, an object keyed by `pt` and `en`, each holding the same set of string keys used throughout `index.astro`. To add new UI text, add the key to both language blocks; to change existing copy, edit the string under the relevant language.

The language toggle switches between the `pt` and `en` blocks of `translations` at runtime via Alpine.js; there's no build step required after editing either file beyond restarting `npm run dev` (or rebuilding).

## Deployment

`TODO(kelvin): no deployment config or CI workflow found in this repo — document the actual deploy target/process here.`

## License

`TODO(kelvin): choose a license`

## Contact

[github.com/Kelvinlima91](https://github.com/Kelvinlima91)
