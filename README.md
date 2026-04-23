# Katafract Enclave — developer documentation

Public developer docs for the Katafract privacy platform. Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build). Deployed at `https://docs.katafract.io`.

## Stack

- Astro 5.x
- Starlight theme
- MDX content collections
- Custom CSS overlay for the Katafract brand palette
- Self-hosted Plausible analytics (`data-domain="docs.katafract.io"`)

## Local development

Requires Node 20+ (Node 18 is too old for Astro 5).

```bash
npm install
npm run dev        # http://localhost:4321
```

## Deployment

Target: Cloudflare Pages.

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 20
- Domain: `docs.katafract.io` (katafract.io zone, grey-cloud → CF Pages edge)

DNS setup lives in the Cloudflare `katafract.io` zone (zone id `2b86ea88c70f848bc57ea192a81de50e`). Add a CNAME from `docs.katafract.io` to the CF Pages project's `pages.dev` URL.

## Structure

```
src/
├── assets/           # SVGs + static brand assets
├── content/
│   ├── config.ts     # content-collections schema
│   └── docs/         # MDX pages
│       ├── index.mdx
│       ├── getting-started.mdx
│       ├── architecture/
│       │   ├── overview.mdx
│       │   └── threat-model.mdx
│       ├── modules/
│       │   ├── sigil.mdx
│       │   ├── haven.mdx
│       │   ├── wraithvpn.mdx
│       │   ├── vaultyx.mdx
│       │   └── shards.mdx
│       └── roadmap/
│           ├── keyring.mdx
│           ├── authenticator.mdx
│           ├── routearmor.mdx
│           ├── virtual-cards.mdx
│           └── disposable-numbers.mdx
└── styles/
    └── katastyle.css # brand-palette overrides on top of Starlight defaults
```

## Writing style

Cold. Serious. Operator-grade. No cheerleading. See `/roadmap/platform_growth_playbook.md` in the private `katafract-io/docs` repo for the full tone contract.

Every page ends with a `## Related` section cross-linking sibling material.
Every roadmap page starts with a `:::caution[Roadmap]` admonition so readers don't mistake planned features for shipped features.

## Editing from GitHub

Each page's sidebar includes an "Edit this page" link that opens the MDX source in the GitHub web editor. Quick typo fixes skip the local build.

## License

© 2026 Katafract LLC. Code in this repo is MIT-licensed; prose is all-rights-reserved unless otherwise noted.
