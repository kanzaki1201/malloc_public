<script setup>
import { ref } from 'vue'

const comparisonMode = ref('slider')
</script>

# Spatial hands

**Spatial Hand** places the avatar hands from their position relative to the tracked actor's head or shoulders. It then gives that position to hand IK. This can help maintaining context of some poses.

Use this page after you tune [Retarget adjustments](/MocapSeitai/retarget-adjustments). Spatial Hand does not replace experimental hand contact or hand anti-penetration. See [Experimental features](/MocapSeitai/experimental-features) for those controls.


## Before and after

Use **Slider** to drag the divider. The left side shows rotation retargeting only. The right side shows **Spatial Hand**.

<div class="spatial-comparison-switch" role="group" aria-label="Comparison view">
  <button type="button" :aria-pressed="comparisonMode === 'slider'" @click="comparisonMode = 'slider'">Slider</button>
  <button type="button" :aria-pressed="comparisonMode === 'side-by-side'" @click="comparisonMode = 'side-by-side'">Side by side</button>
  <button type="button" :aria-pressed="comparisonMode === 'overlay'" @click="comparisonMode = 'overlay'">Overlay</button>
</div>

![Tracked source pose used for this comparison](assets/spatial_source.png)


<img-comparison-slider v-show="comparisonMode === 'slider'" value="50" aria-label="Compare the avatar pose before and after Spatial Hand" style="width: 100%; --divider-color: var(--vp-c-brand-1); --default-handle-color: var(--vp-c-brand-1);">
  <img slot="first" src="./assets/spatial_before.png" alt="Avatar pose before Spatial Hand" width="100%">
  <img slot="second" src="./assets/spatial_after.png" alt="Avatar pose with Spatial Hand" width="100%">
</img-comparison-slider>

<div v-show="comparisonMode === 'side-by-side'" class="spatial-comparison-grid">
  <figure>
    <img src="./assets/spatial_before.png" alt="Avatar pose before Spatial Hand">
    <figcaption>Before</figcaption>
  </figure>
  <figure>
    <img src="./assets/spatial_after.png" alt="Avatar pose with Spatial Hand">
    <figcaption>Spatial Hand</figcaption>
  </figure>
</div>

<div v-show="comparisonMode === 'overlay'" class="spatial-comparison-overlay" role="img" aria-label="Before and Spatial Hand poses overlaid at equal opacity">
  <img src="./assets/spatial_before.png" alt="">
  <img class="spatial-comparison-overlay-after" src="./assets/spatial_after.png" alt="">
</div>

## Comparison 2

<div class="spatial-comparison-switch" role="group" aria-label="Comparison view">
  <button type="button" :aria-pressed="comparisonMode === 'slider'" @click="comparisonMode = 'slider'">Slider</button>
  <button type="button" :aria-pressed="comparisonMode === 'side-by-side'" @click="comparisonMode = 'side-by-side'">Side by side</button>
  <button type="button" :aria-pressed="comparisonMode === 'overlay'" @click="comparisonMode = 'overlay'">Overlay</button>
</div>

 Source pose:![](assets/spatial2_source.png)



<img-comparison-slider v-show="comparisonMode === 'slider'" value="50" aria-label="Compare the avatar pose before and after Spatial Hand" style="width: 100%; --divider-color: var(--vp-c-brand-1); --default-handle-color: var(--vp-c-brand-1);">
  <img slot="first" src="./assets/spatial2_before.png" alt="Avatar pose before Spatial Hand" width="100%">
  <img slot="second" src="./assets/spatial2_after.png" alt="Avatar pose with Spatial Hand" width="100%">
</img-comparison-slider>

<div v-show="comparisonMode === 'side-by-side'" class="spatial-comparison-grid">
  <figure>
    <img src="./assets/spatial2_before.png" alt="Avatar pose before Spatial Hand">
    <figcaption>Before</figcaption>
  </figure>
  <figure>
    <img src="./assets/spatial2_after.png" alt="Avatar pose with Spatial Hand">
    <figcaption>Spatial Hand</figcaption>
  </figure>
</div>

<div v-show="comparisonMode === 'overlay'" class="spatial-comparison-overlay" role="img" aria-label="Before and Spatial Hand poses overlaid at equal opacity">
  <img src="./assets/spatial2_before.png" alt="">
  <img class="spatial-comparison-overlay-after" src="./assets/spatial2_after.png" alt="">
</div>



## Limits

Spatial hands tune hand placement based on the relative position of hands and head (or shoulders). They do not guarantee that hands meet, avoid the body, or remain correct for every motion.
