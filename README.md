# HealthWallet website

A self-contained, static Astro marketing site for the HealthWallet mobile app. It has no backend, client account code, analytics script, or required environment variables. The app is the source of truth for functionality; this folder can be moved into its own repository.

## Requirements

- Node.js 22.12+ and npm 9.6.5+
- npm

## Local development

```bash
cd website
npm install
npm run dev
```

Open the local URL printed by Astro. For validation and a production preview:

```bash
npm run lint
npm run check
npm run build
npm run preview
```

`npm run build` produces static output in `dist/`. The site contains direct static routes for `/`, `/privacy`, `/support`, and `/account-deletion`.

## Deploy

Deploy the `website/` folder as the project root. Use `npm install` (or `npm ci` after the lockfile is present), `npm run build`, and publish `dist/`. Astro exports clean routes as `privacy.html`, `support.html`, and `account-deletion.html`; configure clean URL handling on your host so `/privacy` resolves directly. Verify that public URL after deployment.

- **Vercel / Netlify / Cloudflare Pages:** use the Astro/static preset or the build command and output directory above.
- **GitHub Pages:** set the site to a custom domain or adjust Astro's `base` setting and root-relative asset links for a project subpath. A root-domain Pages site works without a base change.

Use HTTPS and set `websiteUrl` in `src/config/app.ts` to the exact production origin to enable canonical and absolute Open Graph image URLs. Do not use the mobile app's default `healthwallet.app`: the repository notes that it belongs to another owner. Keep any app deep-link domain configuration aligned with a domain you control.

## Public configuration

Edit `src/config/app.ts` before publishing:

| Value | Action |
| --- | --- |
| `developerName` | Replace `[LEGAL DEVELOPER NAME]` with the legal publisher. |
| `websiteUrl` | Set your owned production `https://` origin. |
| `supportEmail` | Add a monitored public support inbox. |
| `supportPhone` | Confirm the support number copied from the app's Settings screen. |
| `privacyEmail` | Add a monitored privacy/deletion inbox. |
| `postalAddress`, `country` | Add the legal operator's details after review. |
| `privacyEffectiveDate` | Add the approved effective date. |
| `appStoreUrl`, `googlePlayUrl` | Add the verified live listing URLs. Until then, store buttons clearly say “Link coming soon” and cannot be clicked. |
| `socialUrls` | Optional; currently no social links are shown. |

There is no `.env.example` because the site needs no environment variables or secrets. Never copy Supabase keys, FIB credentials, SMS credentials, signing material, or backend URLs into this site.

## Images and screenshots

- `public/icons/app-icon.png` and `public/icons/favicon.png` are resized copies of `../assets/icon/app_icon.png` from the mobile repository.
- `public/images/feature-graphic.png` is a copy of the existing promotional graphic from `../dist/feature-graphic-1024x500.png`.
- `public/screenshots/` contains instructions for `profile.png`, `map.png`, and `fitness.png`. No screen captures were found in the repository. The rendered frames say “Actual app screenshot to be added” until real files are present.

All site asset references stay inside `website/public/`; the `../` paths above are provenance only. Do not copy real patient data into screenshots.

## Privacy and store publication checklist

The policy is based on the current Flutter and Supabase source, but a source review cannot verify live deployment, contracts, retention schedules, or the final release binary. Before submitting the URLs to Apple or Google:

1. Fill all bracketed legal, contact, age, retention, and transfer details on `/privacy` and in `src/config/app.ts` after legal review.
2. Confirm the production Supabase region and actual processors, including OTPIQ, FIB, OpenStreetMap/OSRM, ML Kit, and font networking.
3. Deploy and test the `delete-account` Edge Function with a populated test account; confirm file cleanup, database cascades, remaining payment or safety records, and backup retention.
4. Make the support and privacy email addresses operational. Test a deletion request from someone who cannot sign in.
5. Confirm store disclosures against the final Android and iOS builds. The Android FIB purchase path and iOS free path are different.
6. Add genuine, de-identified screenshots and the final store listing URLs.

The website itself is static and has no form, cookies, analytics, or app backend integration. Your chosen host may keep access logs; describe those practices in the policy before publication.

## Moving to another repository

Copy the entire `website/` directory, including `package-lock.json` and `public/`, into the new repository root. Then run `npm ci` and `npm run build`. The generated `dist/` and `node_modules/` directories are intentionally ignored and can be recreated. No source file imports from the mobile project.
