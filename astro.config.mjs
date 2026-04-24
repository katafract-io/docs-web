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
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/katafract-io' },
      ],
      customCss: ['./src/styles/katastyle.css'],
      head: [
        // Privacy-friendly analytics by Plausible (self-hosted at pulse.katafract.io).
        // Script path carries the site ID; no data-domain attribute needed in the CE v2 tracker.
        {
          tag: 'script',
          attrs: {
            async: true,
            src: 'https://pulse.katafract.io/js/pa-N65RPgou4djMK6sLPQnRu.js',
          },
        },
        {
          tag: 'script',
          content: "window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()",
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/katafract-io/docs-web/edit/main/',
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
          label: 'Trust',
          items: [
            { label: 'Overview', slug: 'trust' },
            { label: 'Infrastructure', slug: 'trust/infrastructure' },
            { label: 'Logs policy', slug: 'trust/logs' },
            { label: 'Retention', slug: 'trust/retention' },
            { label: 'Incidents', slug: 'trust/incidents' },
            { label: 'Bug bounty', slug: 'trust/bug-bounty' },
          ],
        },
        {
          label: 'Apps',
          items: [
            { label: 'All apps', slug: 'apps' },
            { label: 'Wraith VPN', slug: 'apps/wraith/getting-started' },
            { label: 'Vaultyx', slug: 'apps/vaultyx/getting-started' },
            { label: 'Haven DNS', slug: 'apps/haven/getting-started' },
            { label: 'SafeOpen', slug: 'apps/safeopen/getting-started' },
            { label: 'DocArmor', slug: 'apps/docarmor/getting-started' },
            { label: 'ExifArmor', slug: 'apps/exifarmor/getting-started' },
            { label: 'ParkArmor', slug: 'apps/parkarmor/getting-started' },
            { label: 'MeritMosaic', slug: 'apps/meritmosaic/getting-started' },
            { label: 'AeroMosaic', slug: 'apps/aeromosaic/getting-started' },
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
        {
          label: 'Changelog',
          items: [
            { label: 'All changes', slug: 'changelog' },
          ],
        },
      ],
    }),
  ],
});
