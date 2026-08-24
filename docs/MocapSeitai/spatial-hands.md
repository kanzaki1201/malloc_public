# Spatial hands

**Spatial Hand** places the avatar hands from their position relative to the tracked actor's head or shoulders. It then gives that position to hand IK. This can help gestures that need a hand to land at a place on the avatar, such as a face touch.

Use this page after you tune [Retarget adjustments](/MocapSeitai/retarget-adjustments). Spatial Hand does not replace experimental hand contact or hand anti-penetration. See [Experimental features](/MocapSeitai/experimental-features) for those controls.

## Workflow

1. Load the avatar and start motion input.
2. Tune the basic pose in **Retarget** first.
3. In **Display**, select **Ghost** or **Side by side** comparison.
4. Open **Spatial Hand** and reproduce the gesture that you want to improve.
5. Change one control, then repeat the same gesture.
6. Save the result only for this avatar.

## Controls

| Control | Purpose |
| --- | --- |
| **Hand spatial alignment** | Set the strength of spatial hand placement. At 0, the app uses rotation copy only. |
| **Hand spatial scale** | Scale the distance of spatial hand placement. Increase it if the spatial movement is too small; decrease it if it overshoots. |
| **Spatial XZ only** | Restrict spatial placement to the horizontal plane. Use it when vertical hand motion should stay unchanged. |
| **Shoulder vs head** | Select the position anchor. At 0, placement is shoulder-based. At 1, placement is head-based. |
| **Hand IK** | Set how strongly hand IK pins the hands to their spatial targets. |
| **Feet IK** | Set how strongly foot IK pins the feet. |

## Choose an anchor

Use a head-based anchor for face-touch gestures. Use a shoulder-based anchor for gestures that should follow the torso. Start near the shipped value, then test with the gesture at normal speed.

## Limits

Spatial hands tune hand placement for one avatar. They do not guarantee that hands meet, avoid the body, or remain correct for every motion. Use the experimental controls only when the base result needs them.