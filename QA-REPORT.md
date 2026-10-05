# Static preview quality report

Reference captured: October 5, 2026, from the live public PrizedPoultry.com site and its same-day public catalog/image export. Shopify and the permanent backup repository were not changed.

## Recreated

17 routes: homepage; all three product pages; two collection routes; Contact, Shipping Policy and Your Privacy Choices; News and The Flock Report; both published articles; four policy routes. The About content appears in the original footer; no separate published About page existed in the exported page inventory.

The original logo, colors, Playfair Display and Oswald fonts, theme CSS, hero backgrounds, ingredient graphics, reviews, header and footer are retained. Product images, descriptions, all 11 published variant prices and size labels are retained. Galleries and product selectors work locally. All purchasing controls are disabled **Sold Out** buttons; cart, account, checkout and Shopify scripts have been removed.

## Differences and unavailable content

- Live `/collections/all` and `/collections/frontpage` returned Not Found. New collection grids use the existing branding and catalog. Home page collection retains its original one-product membership; All Products shows all three products.
- Live `/policies/shipping-policy` returned Not Found. The static route displays the available `/pages/shipping-policy` content.
- Live refund and terms policy URLs returned Not Found. These static routes honestly explain that the original policy was unavailable and link to Contact. No replacement legal terms were invented.
- Two Echinacea article photos (echinacea-field.jpg and echinacea-dried-roots.jpg) returned HTTP 404 from their original staged upload URLs. Labeled unavailable-image notices replace them. All other captured images are local.
- The original Contact page had no body content. The contact email `prizedpoultryusa@gmail.com` was taken from the public privacy policy and added there.
- Newsletter, subscription, privacy request and other Shopify submission behavior is unavailable. Contact guidance replaces submission forms. No messages or requests are silently accepted.
- A clear sold-out banner is added. Stale August 2026 restock promises are removed, and the bundle is marked unavailable. Original historical shipping/guarantee/promotional copy is otherwise retained for visual fidelity.
- Mobile navigation wraps visibly, and product layouts avoid horizontal overflow. The hero has manual previous/next and dot controls instead of automatic rotation.
- Image thumbnails use full local originals, so cropping/loading can differ slightly from Shopify's resized image service. No exact pixel identity is claimed.

## Checks

- Static validation of every route: all internal links, fragment targets, stylesheet/script references, image paths and gallery references resolve.
- All 17 pages checked at 390px mobile width: no horizontal document overflow; no failed completed image loads; every rendered Sold Out button disabled.
- Deployed GitHub Pages preview verified: all 73 HTML, CSS, JavaScript, JSON, image and font files returned HTTP 200 and matched the local files. One transient CDN 503 cleared on recheck.
- Deployed desktop pages checked at 1440px; mobile navigation from homepage to collection to product checked at 390px. Price selection and gallery navigation tested. No browser JavaScript errors were observed during these checks.
- No forms, iframes, inline event handlers, cart links, checkout links or account links remain.
- Font files are local with their original SIL Open Font Licenses. All image and script/style runtime references are local.
- Remaining external hyperlinks are public legal references (Shopify privacy documentation and the European Data Protection Board), not runtime services. No remaining Shopify runtime dependencies.

## Manual inspection before any domain change

Review desktop/mobile branding, all three product descriptions and prices, galleries, navigation, blog formatting and Contact. Review historical claims, promotions, guarantee and shipping text because this site no longer accepts orders. Supply the unavailable refund/terms policies and two article images if you want them restored. Review the preserved privacy policy, which describes the former Shopify store, before treating it as the policy for a new static site.

No DNS change, Shopify deactivation or domain cutover has been performed.
