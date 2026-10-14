## Build and Deploy the Static Website

### 1. Build the website

Run the following command to build the Vite website and generate the static route pages:

```powershell
npm run build
```

The build configuration in `package.json` runs `scripts/generate-routes.js` after Vite successfully builds the site.

The `vite.config.ts` file configures Vite to output the production website to the `docs/` directory.

### 2. Commit and push changes to GitHub

After the build completes successfully, run:

```powershell
git add .
git commit -m "Update"
git branch -M main
git push -u origin main
```

### How it works

- **`package.json`** — Defines the build command that runs Vite and then `scripts/generate-routes.js`.
- **`vite.config.ts`** — Configures Vite's build output directory as `docs/`.
- **`scripts/generate-routes.js`** — Generates static route pages such as `/about/`, `/faq/`, `/community/`, `/changelog/`, `/privacy/`, and `/editor/`.
- **Git commands** — Stage, commit, and push the generated website and source changes to the `main` branch.

### Important

Always run `npm run build` before committing and pushing. Confirm that the build succeeds and that the generated files are correct before deploying through GitHub Pages.