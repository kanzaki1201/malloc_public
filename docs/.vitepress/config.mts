import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'malloc',
  description: "Documentation for malloc's VTuber tools and lilToon shaders.",
  base: '/malloc_public/',
  cleanUrls: true,
  lastUpdated: true,
  // Frappé (dark) is the site default skin; toggle switches to Latte.
  appearance: 'dark',

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
      {
        text: 'Products',
        activeMatch: '^/(MocapSeitai|lilEasyFace|EasyMC2Helper)/',
        items: [
          { text: 'MocapSeitai', link: '/MocapSeitai/quickstart' },
          { text: 'lilEasyFace', link: '/lilEasyFace/getting-started' },
          { text: 'Easy MC2 Helper', link: '/EasyMC2Helper/quickstart' }
        ]
      },
      { text: 'Report a Bug', link: '/bug-report' },
      {
        text: 'About',
        items: [
          { text: 'Contact', link: '/contact' },
          { text: 'Credits', link: '/credits' },
          { text: 'MocapSeitai License', link: '/MocapSeitai/license' },
          { text: 'lilEasyFace License', link: '/lilEasyFace/license' },
          { text: 'Easy MC2 Helper License', link: '/EasyMC2Helper/license' }
        ]
      }
    ],

    // Per-product sidebars keyed by path. Add another product by dropping in a
    // new `/<product>/` key plus its content folder — nothing else changes.
    sidebar: {
      '/MocapSeitai/': [
        {
          text: 'MocapSeitai',
          items: [
            {
              text: 'Getting Started',
              collapsed: false,
              items: [
                { text: 'Quickstart', link: '/MocapSeitai/quickstart' },
                { text: 'Common Adjustments', link: '/MocapSeitai/common-adjustments' }
              ]
            },
            {
              // Reference pages mirror the app panel top-to-bottom, on purpose.
              text: 'UI Reference',
              collapsed: false,
              // Labels use the app's own sentence-case section names on purpose.
              items: [
                { text: 'The panel at a glance', link: '/MocapSeitai/reference/' },
                { text: 'Connections', link: '/MocapSeitai/reference/connections' },
                { text: 'Loading your model', link: '/MocapSeitai/reference/loading-your-model' },
                { text: 'Mode & display', link: '/MocapSeitai/reference/mode-and-display' },
                { text: 'Actor body', link: '/MocapSeitai/reference/actor-body' },
                { text: 'Smoothing', link: '/MocapSeitai/reference/smoothing' },
                { text: 'Muscle limits', link: '/MocapSeitai/reference/muscle-limits' },
                { text: 'Hand position alignment', link: '/MocapSeitai/reference/hand-position-alignment' },
                { text: 'Hand anti-penetration', link: '/MocapSeitai/reference/hand-anti-penetration' },
                { text: 'Arm anti-penetration', link: '/MocapSeitai/reference/arm-anti-penetration' },
                { text: 'Colliders', link: '/MocapSeitai/reference/colliders' }
              ]
            },
            { text: 'Troubleshooting & Diagnostics', link: '/MocapSeitai/troubleshooting' },
            { text: 'Changelog', link: '/MocapSeitai/changelog' },
            { text: 'License', link: '/MocapSeitai/license' }
          ]
        }
      ],
      '/EasyMC2Helper/': [
        {
          text: 'Easy MC2 Helper',
          items: [
            { text: 'Quickstart', link: '/EasyMC2Helper/quickstart' },
            { text: 'UI Reference', link: '/EasyMC2Helper/ui-reference' },
            { text: 'Troubleshooting', link: '/EasyMC2Helper/troubleshooting' },
            { text: 'Changelog', link: '/EasyMC2Helper/changelog' },
            { text: 'License', link: '/EasyMC2Helper/license' }
          ]
        }
      ],
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
                { text: 'Forced Perspective', link: '/lilEasyFace/features/forced-perspective' },
                { text: 'Object-Space Normal Map', link: '/lilEasyFace/features/object-space-normal-map' },
                { text: 'Data Baker', link: '/lilEasyFace/features/data-baker' }
              ]
            },
            { text: 'Changelog', link: '/lilEasyFace/changelog' },
            { text: 'License', link: '/lilEasyFace/license' }
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
