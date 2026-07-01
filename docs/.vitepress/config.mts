import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'lilEasyFace',
  description: 'User guide for lilEasyFace — anime-style face shading for lilToon.',
  base: '/malloc_public/',
  cleanUrls: true,
  lastUpdated: true,

  // English is the root locale. To add Japanese later, add a `ja` entry here and
  // put its pages under docs/ja/ — no other restructuring needed.
  locales: {
    root: { label: 'English', lang: 'en-US' }
  },

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Report an issue', link: 'https://github.com/kanzaki1201/malloc_public/issues/new/choose' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [{ text: 'Introduction & Install', link: '/guide/getting-started' }]
      },
      {
        text: 'Features',
        items: [
          { text: 'Easy Face Triangle', link: '/guide/easy-face-triangle' },
          { text: 'Smooth Vertex Normal', link: '/guide/smooth-vertex-normal' },
          { text: 'Object-Space Normal Map', link: '/guide/object-space-normal-map' },
          { text: 'Data Baker', link: '/guide/data-baker' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kanzaki1201/malloc_public' }
    ],

    search: { provider: 'local' },

    editLink: {
      pattern: 'https://github.com/kanzaki1201/malloc_public/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
