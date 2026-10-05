# Domain configuration

Owner-authorized cutover: October 5, 2026.

- DNS provider: Namecheap BasicDNS; nameservers unchanged.
- GitHub Pages custom domain: `prizedpoultry.com`.
- Apex (`@`) A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
- `www` CNAME: `petomm.github.io`.
- Private Email configuration, MX and SPF were preserved.

The former website records were `@ A 23.227.38.65` and `www CNAME shops.myshopify.com`. These values are recorded for rollback only; do not restore them without owner authorization. Shopify remains active. The private Shopify backup is not changed by this project.

GitHub automatically provisions the domain certificate. HTTPS enforcement should remain enabled once the certificate is available. Domain registration and renewal remain with Namecheap.
