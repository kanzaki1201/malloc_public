# Hand anti-penetration

::: warning Experimental feature
Hand anti-penetration is a best-effort correction. It can reduce some hand-to-body intersections, but it can change the hand pose. It cannot solve every avatar shape, input quality level, or fast motion.
:::

The shipped default is **Off**. Enable it only after you tune the base retargeting.

## Choose a mode

| Mode | Use it when |
| --- | --- |
| **Off** | You do not need correction, or you want the unchanged retargeted result. |
| **SdfSearch** | You want the SDF search result without the ragdoll oracle. |
| **Ragdoll** | You want the ragdoll oracle result for comparison. |
| **Hybrid** | Start here when you need hand anti-penetration. It combines SDF search with the ragdoll oracle. |

**Hybrid** is the recommended opt-in mode for this public beta. It is still experimental.

## Basic workflow

1. Tune actor measurements and Retarget adjustments first.
2. Set **Comparison** to **Side by side**.
3. Reproduce the hand-to-body pose that you want to improve.
4. Select **Hybrid**.
5. Check the result at normal and fast motion speed.
6. Keep the mode only if the new pose is better for your use case.

## Check colliders

The feature uses avatar colliders. Turn on the collider overlay before you change collider values. A collider that does not match the model can give a worse result.

Save collider edits in the avatar sidecar map. Test that map only with the avatar that it was made for.

## Known limits

- Fast hand motion can still produce a bad result.
- A correction can trade clipping for a different hand pose.
- Clothing, accessories, and unusual avatar shapes can need manual collider work.
- The feature does not guarantee no clipping.

If the result is worse, set the mode back to **Off** and report the pose with diagnostics.
