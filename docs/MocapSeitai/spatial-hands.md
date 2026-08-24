# Spatial hands

Use **Spatial Hand** to align hand positions when the tracked actor and avatar have different proportions. It uses the hand position relative to the head or shoulders, then places a target for the avatar hand IK. This can help face-touch and other hand-placement gestures.

Tune [Retarget adjustments](/MocapSeitai/retarget-adjustments) first. Turn on **Display** > **Comparison**, then change one control and repeat the gesture that you want to improve.

| Control | Use |
| --- | --- |
| **Alignment strength** | Set the strength of spatial hand placement. At 0, the app uses rotation copy only. |
| **Hand spatial scale** | Scale the distance of spatial hand placement. |
| **Spatial XZ only** | Restrict spatial placement to the horizontal plane. |
| **Shoulder vs head** | Select the anchor blend: 0 is shoulder-based and 1 is head-based. |
| **Hand IK** | Set how strongly hand IK pins the hands to their targets. |
| **Feet IK** | Set how strongly foot IK pins the feet. |

Use head-based placement for gestures near the face. Use shoulder-based placement for gestures that should follow the torso. Save the result for this avatar only.

If hands still enter the body after you tune this page, see [Hand anti-penetration](/MocapSeitai/hand-anti-penetration). That feature is experimental.
