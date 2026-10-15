import { defineConfig } from 'vitepress'

const repository = process.env.GITHUB_REPOSITORY

export default defineConfig({
  title: 'NOPTIS – Open Docs PoC',
  description: 'Experimentell dokumentationsyta – ej officiell standard',
  lang: 'sv-SE',
  // Sätt VITEPRESS_BASE till /repo-namn/ för ett GitHub Pages-projektrepo.
  base: process.env.VITEPRESS_BASE || '/',
  themeConfig: {
    nav: [{ text: 'Start', link: '/' }, { text: 'RII (test)', link: '/interfaces/rii/' }],
    sidebar: [
      {
        text: 'Testdokumentation',
        items: [
          { text: 'Översikt', link: '/' },
          { text: 'RII', link: '/interfaces/rii/' },
          { text: 'RII 2.0', link: '/interfaces/rii/2.0/' }
        ]
      }
    ],
    search: { provider: 'local' },
    editLink: repository
      ? {
          pattern: `https://github.com/${repository}/edit/main/docs/:path`,
          text: 'Föreslå ändring på GitHub'
        }
      : undefined,
    footer: { message: 'Proof of concept – ingen officiell NOPTIS-publicering' }
  }
})
