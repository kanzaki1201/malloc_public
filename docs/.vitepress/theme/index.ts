import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import HeroVideo from './HeroVideo.vue'
import '@fontsource-variable/outfit'
import 'img-comparison-slider'
import 'img-comparison-slider/dist/styles.css'
import './custom.css'

// Render a looping video in the home hero's image slot.
export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-image': () => h(HeroVideo)
    })
  }
}
