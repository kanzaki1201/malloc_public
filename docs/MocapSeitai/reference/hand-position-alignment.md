# Hand position alignment

This section controls where the hands actually end up in space, on top of whatever rotation the retargeting pipeline already computed. Raw muscle or offset transfer alone gets joint angles right but not necessarily contact points — hands on a chibi character will miss the face or miss each other because the arm is shorter. Spatial hand alignment fixes that by blending in a body-anchored spatial target, and the IK pin and contact settings here keep that target locked in place and, for claps and heart-hands, pull the two hands to a consistent distance apart. You'll come back to this section whenever hand contacts (face touches, claps, praying hands) look off on a particular avatar — see [Common adjustments](/MocapSeitai/common-adjustments) for the clap-tuning recipe. This foldout is expanded by default and its tuning saves per-avatar in the map, same as [Muscle limits](/MocapSeitai/reference/muscle-limits).

::: info
Corrections in this section run in both Muscle and Offset transfer mode — unlike Muscle limits, this section isn't greyed out when you switch to Offset.
:::

## Settings

- **Alignment strength** — strength of spatial hand placement. At 0 the hands just copy the tracked rotation with no spatial correction; raise it to blend in the body-anchored spatial target. (default 1, range 0–1)
- **handSpatialScale** — distance scale of the spatial placement. Raise it if spatial hand movements read as too small for the character's proportions, lower it if they overshoot. (default 1, range 0.5–4)
- **spatialXZOnly** — restricts spatial placement to the horizontal plane (XZ), leaving vertical hand height untouched by the spatial correction. Useful if spatial alignment is fighting height-sensitive motion like waving. (default off)
- **Shoulder vs head** — hand-position anchor blend: 0 anchors to the shoulders, 1 anchors to the head. Push this toward 1 for face-touch contacts to land accurately, toward 0 for contacts that should track the torso instead. (default 1, range 0–1)
- **pinHands** — how strongly hands are pinned by IK. Lower it if hands feel too locked to their spatial target and you want more give from the underlying rotation. (default 1, range 0–1)
- **pinFeet** — how strongly feet are pinned by IK. Raise it if feet are sliding on the ground. (default 0.918, range 0–1)
- **Hand contact** — pulls the hands to a fixed contact distance as they come together for claps and heart-hands. Turn it off if it's fighting a gesture that shouldn't have the hands snap together. (default on)
- **Hand contact distance** — distance between the hands when they meet. Tune per model until claps look right; a negative value is allowed, letting the hands overlap slightly instead of stopping at a gap. (default 0.05 m, range -0.1 to 0.3 m)

<!-- CAPTURE: side-by-side comparison view (Comparison = Side by side), performer clapping and touching their face, Alignment strength toggled between 0 and 1 to show spatial correction kicking in — roughly 15s -->
*(media pending)*

<!-- CAPTURE: Hand contact distance being dragged from a small positive value to a small negative value while the performer claps, showing the hands meeting further apart vs overlapping — roughly 10s -->
*(media pending)*

If hands are still clipping through the torso or the opposite arm even with alignment tuned well, that's a separate stage — see [Hand anti-penetration](/MocapSeitai/reference/hand-anti-penetration).
