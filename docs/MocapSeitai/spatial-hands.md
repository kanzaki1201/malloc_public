# Spatial hands

**Spatial Hand** places the avatar hands from their position relative to the tracked actor's head or shoulders. It then gives that position to hand IK. This can help maintaining context of some poses.

Use this page after you tune [Retarget adjustments](/MocapSeitai/retarget-adjustments). Spatial Hand does not replace experimental hand contact or hand anti-penetration. See [Experimental features](/MocapSeitai/experimental-features) for those controls.

## Before and after

<img-comparison-slider value="50" aria-label="Compare the avatar pose before and after Spatial Hand" style="width: 100%; --divider-color: var(--vp-c-brand-1); --default-handle-color: var(--vp-c-brand-1);">
  <img slot="first" src="./assets/spatial_before.png" alt="Avatar pose before Spatial Hand" width="100%">
  <img slot="second" src="./assets/spatial_after.png" alt="Avatar pose with Spatial Hand" width="100%">
</img-comparison-slider>

Drag the divider. The left side shows rotation retargeting only. The right side shows **Spatial Hand**.

### Source pose

![Tracked source pose used for this comparison](assets/spatial_source.png)

![](assets/spatial_promo_1.webp)

![](assets/spatial_promo_2.webp)

## Limits

Spatial hands tune hand placement for one avatar. They do not guarantee that hands meet, avoid the body, or remain correct for every motion.
