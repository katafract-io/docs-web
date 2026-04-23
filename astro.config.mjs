import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.katafract.io',
  integrations: [
    starlight({
      title: 'Katafract Enclave',
      description:
        'Developer documentation for the Katafract privacy platform — Sigil identity, WraithVPN, Haven DNS, Vaultyx storage, and the SDKs that bind them.',
      logo: {
        src: './src/assets/katafract-mark.svg',
        replacesTitle: false,
        alt: 'Katafract',
      },
      favicon: '/favicon.svg',
      social: {
        github: 'https://github.com/katafract-io',
      },
      customCss: ['./src/styles/katastyle.css'],
      head: [
        {
          tag: 'script',
          attrs: {
            defer: true,
            'data-domain': 'docs.katafract.io',
            src: 'https://analytics.katafract.io/js/script.js',
          },
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/katafract-io/docs-site/edit/main/',
      },
      lastUpdated: true,
      sidebar: [
        {
          label: 'Platform',
          items: [
            { label: 'Getting started', slug: 'getting-started' },
            { label: 'Architecture', slug: 'architecture/overview' },
            { label: 'Threat model', slug: 'architecture/threat-model' },
          ],
        },
        {
          label: 'Modules',
          items: [
            { label: 'Sigil — identity', slug: 'modules/sigil' },
            { label: 'Haven — DNS', slug: 'modules/haven' },
            { label: 'WraithVPN', slug: 'modules/wraithvpn' },
            { label: 'Vaultyx — storage', slug: 'modules/vaultyx' },
            { label: 'Shards — S3 cluster', slug: 'modules/shards' },
          ],
        },
        {
          label: 'Roadmap',
          items: [
            { label: 'Keyring — passwords', slug: 'roadmap/keyring' },
            { label: 'Authenticator — TOTP', slug: 'roadmap/authenticator' },
            { label: 'RouteArmor — per-app routing', slug: 'roadmap/routearmor' },
            { label: 'Virtual cards', slug: 'roadmap/virtual-cards' },
            { label: 'Disposable numbers', slug: 'roadmap/disposable-numbers' },
          ],
        },
      ],
    }),
  ],
});
