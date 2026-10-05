# Prized Poultry static website

Public, display-only recreation of PrizedPoultry.com, captured October 5, 2026. The independent Shopify restoration backup is **not part of this repository** and was not modified.

Preview: https://petomm.github.io/prizedpoultry-static/

## Contents

- Homepage, original branding, theme styling, ingredients, reviews, FAQ, bundle and About footer content.
- All three published products, product descriptions, photos, visible prices and size options.
- All Products and Home page collections; the latter preserves the original collection's single product membership.
- Contact, Shipping Policy, Your Privacy Choices, privacy policy, both blogs and both published articles.
- 45 local image files, four locally hosted font files and their SIL Open Font Licenses.
- `page-manifest.json` lists all 17 routes. See [QA-REPORT.md](QA-REPORT.md) for limitations.

## Static behavior

Every purchasing button is disabled and says **Sold Out**. There is no cart, checkout, customer login, inventory request, subscription form, Shopify JavaScript, analytics or Liquid rendering. `js/site.js` implements only presentation: hero navigation, product tabs, displayed size prices and product photo galleries. All runtime assets are local. The preserved privacy policy contains an ordinary external link to Shopify's public privacy documentation; this is not a runtime dependency.

The preview is marked `noindex,nofollow` to avoid competing with the current live site. No custom domain or DNS changes were made. No `CNAME` file is present.

## Hosting and editing

GitHub Pages serves the root of the `main` branch. There is no build step, dependency installation or backend required. Update HTML/CSS/JS directly and push to `main`. Relative internal links work under the preview repository prefix and at a domain root. Each route uses an `index.html` directory.

To preview locally, run any static HTTP server against this directory. Use HTTP rather than opening files directly.

Before a future domain cutover, review the QA report, confirm contact details and policy text, decide whether to remove the preview robots instruction, and separately authorize DNS changes. Do not restore selling features without a separately implemented commerce service.

No credentials, customer records, orders or private store exports are included. Text and imagery remain the store owner's content; bundled fonts retain their included licenses.
