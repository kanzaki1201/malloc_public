import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'malloc',
  description: "Documentation for malloc's VRChat avatar shaders and tools.",
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
      { text: 'lilEasyFace', link: '/lilEasyFace/getting-started', activeMatch: '/lilEasyFace/' },
      { text: 'Report a Bug', link: '/bug-report' },
      {
        text: 'About',
        items: [
          { text: 'Contact', link: '/contact' },
          { text: 'Credits', link: '/credits' },
          { text: 'License', link: '/license' }
        ]
      }
    ],

    // Per-product sidebars keyed by path. Add another product by dropping in a
    // new `/<product>/` key plus its content folder — nothing else changes.
    sidebar: {
      '/lilEasyFace/': [
        {
          text: 'lilEasyFace',
          items: [
            {
              text: 'Getting Started',
              collapsed: false,
              items: [
                { text: 'Introduction & Install', link: '/lilEasyFace/getting-started' }
              ]
            },
            {
              text: 'Features',
              collapsed: false,
              items: [
                { text: 'Easy Face Triangle', link: '/lilEasyFace/features/easy-face-triangle' },
                { text: 'Smooth Vertex Normal', link: '/lilEasyFace/features/smooth-vertex-normal' },
                { text: 'Object-Space Normal Map', link: '/lilEasyFace/features/object-space-normal-map' },
                { text: 'Data Baker', link: '/lilEasyFace/features/data-baker' }
              ]
            }
          ]
        }
      ]
    },

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
