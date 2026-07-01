import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'malloc',
  description: "Documentation for malloc's lilToon shaders and tools.",
  base: '/malloc_public/',
  cleanUrls: true,
  lastUpdated: true,

  // Render Markdown image embeds that point at a video file — ![](clip.webm) — as a <video> player,
  // so videos are authored with the same ![]() syntax as images (and preview in Obsidian). Relative
  // paths still resolve/bundle through Vite's asset handling, which covers <video> as well as <img>.
  markdown: {
    config: (md) => {
      const isVideo = /\.(webm|mp4|ogv|mov|m4v)(\?.*)?$/i
      const fallback =
        md.renderer.rules.image ||
        ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options))
      md.renderer.rules.image = (tokens, idx, options, env, self) => {
        const src = tokens[idx].attrGet('src') || ''
        if (!isVideo.test(src)) return fallback(tokens, idx, options, env, self)
        return `<video src="${md.utils.escapeHtml(src)}" autoplay loop muted playsinline style="max-width:100%"></video>`
      }
    }
  },

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
            },
            { text: 'Changelog', link: '/lilEasyFace/changelog' }
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
