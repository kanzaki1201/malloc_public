# Hand position alignment

Spatial hand placement on top of the rotation from retargeting. Raw transfer gets joint angles right but not necessarily contact points: hands on a chibi character will miss the face because the arm is shorter.

This section blends in a body-anchored spatial target, pins it with IK, and pulls the two hands to a consistent distance for claps and heart-hands. Runs in both transfer modes. Tuning saves per-avatar in the map.

## Settings

- **Alignment strength** strength of spatial hand placement. 0 = no spatial correction, 1 = full blend. (default 0.55, range 0 to 1)
- **handSpatialScale** distance scale of spatial placement. Raise if spatial hand movements read as too small, lower if they overshoot. (default 1, range 0.5 to 4)
- **spatialXZOnly** restricts spatial placement to the horizontal plane, leaving vertical height untouched. Useful if alignment is fighting height-sensitive motion like waving. (default off)
- **Shoulder vs head** hand-position anchor blend: 0 anchors to shoulders, 1 anchors to head. Push toward 1 for face-touch contacts, toward 0 for torso contacts. (default 0.55, range 0 to 1)
- **pinHands** how strongly hands are pinned by IK. Lower for more give from the underlying rotation. (default 1, range 0 to 1)
- **pinFeet** how strongly feet are pinned by IK. Raise if feet slide on the ground. (default 1, range 0 to 1)
- **Hand contact** (experimental) pulls hands to a fixed contact distance for claps and heart-hands. Turn on if you want claps or heart-hands to snap together. (default off)
- **Hand contact distance** gap between hands when they meet. Tune per model. Negative values allowed for slight overlap. (default 0.05 m, range -0.1 to 0.3 m)

<!-- CAPTURE: side-by-side comparison view (Comparison = Side by side), performer clapping and touching their face, Alignment strength toggled between 0 and 1 to show spatial correction kicking in — roughly 15s -->
*(media pending)*

<!-- CAPTURE: Hand contact distance being dragged from a small positive value to a small negative value while the performer claps, showing the hands meeting further apart vs overlapping — roughly 10s -->
*(media pending)*

If hands still clip through the body with alignment tuned, see [Hand anti-penetration](/MocapSeitai/reference/hand-anti-penetration).
