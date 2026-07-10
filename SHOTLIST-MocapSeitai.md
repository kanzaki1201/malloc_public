# MocapSeitai docs — recording shot list

One recording session covers all of these. Drop the captured files into `docs/MocapSeitai/assets/`, then replace the placeholders in each doc page with the real asset.

## Quickstart

- [ ] hero-before-after-clap.webm — hero before/after clip — Comparison set to "Side by side", performer does a face-touch and a clap on a small-proportioned avatar; uncorrected twin misses the face and the clap, corrected model lands both. ~10 s loop.
- [ ] first-run-panel.png — screenshot of the main panel after a successful first run — Input (VMC mode, Listen port 39539), Output (127.0.0.1 / 39540), Load model showing a loaded VRM's title/author card, Status line showing Running with Messages/s counting.
- [ ] comparison-mode-cycle.webm — short clip — Comparison dropdown switched Off → Ghost → Side by side while motion is running; ghost overlay visibly diverges from the corrected model on a face-touch. ~8 s.

## Common Adjustments

- [ ] clap-before-after.webm — before/after clap comparison — Comparison: Ghost enabled, performer claps twice; first shot with Hand contact off (hands miss/overlap), second with Hand contact on and Hand contact distance tuned (clean clap). ~10 s total.
- [ ] arm-clipping-before-after.webm — before/after arm clipping — avatar with a wide torso, performer holds arms at sides then gestures across the chest; first shot with Arm anti-penetration Enable off (upper arm sinks into torso), second with Enable on, Torso ticked for upper arms, Upper-arm test: Full segment. ~12 s.
- [ ] feet-squat-before-after.webm — feet + squat — chibi avatar; performer side-steps then squats; first shot with pinFeet at 0 and Squat body-scale correction off (feet slide, hips sink through floor), second with pinFeet at 1 and the correction on. ~12 s.

## Reference — The Panel at a Glance

- [ ] panel-overview-annotated.png — full annotated screenshot of the main panel, scrolled to show every section header (Status through Diagnostics), with callout labels pointing at each section name; static image.
- [ ] body-settings-changed-warning.webm — change an Actor body value while the loop is running so the "Body settings changed" warning appears, then press Realign actor rig and show the warning clear; ~10s.

## Reference — Connections

- [ ] input-mode-switch.webm — switch Input mode from VMC to mocopi to Rokoko in turn, showing the port/Actor name/Forward VMC blendshapes fields appear and disappear each time; ~15s.
- [ ] start-stop-status.webm — press Start with a tracker feeding input, showing the Status counters line ticking up Messages/s and Addresses; then press Stop and show the character holding its last pose; ~20s.

## Reference — Loading Your Model

- [ ] load-model-open.webm — Load model section — click Open model…, pick a VRM file in the OS picker, show the model loading in the viewport and the Title/Author card populating. ~10s.
- [ ] save-load-map-roundtrip.webm — Save map… then Load map… round trip — save a map after adjusting a collider, then load it back to show colliders reapplying. ~10s.

## Reference — Mode & Display

- [ ] comparison-cycle-clap-reach.webm — Comparison dropdown cycled Off → Ghost → Side by side while the actor claps and reaches toward the face; ~10s per mode, character visibly diverging from the raw ghost/twin during hand contact and spatial hand alignment corrections.
- [ ] source-shadow-rig-squat.webm — Show source skeleton and Show shadow rig toggled on together during a squat, showing the raw stick figure vs the corrected character vs the shadow IK rig at differing hip heights.

## Reference — Actor Body

- [ ] proportions-realign.webm — switch Proportions from Tracker skeleton to My body while the loop is running, enter Height ~1.7 and watch Arm span follow, open Detailed, then click Realign actor rig to clear the stale-calibration notice — about 20s.

## Reference — Smoothing

- [ ] transfer-mode-muscle-offset.webm — Transfer mode dropdown switched from Muscle to Offset, showing the Muscle limits section and muscle editor panel grey out in real time. ~8s.
- [ ] smoothing-preset-cycle.webm — Smoothing preset dropdown cycled through Off / Low latency / Balanced / Smooth on a moving actor, showing the visible difference in follow lag/jitter at each step. ~15s.
- [ ] filter-details-custom-cutoff.webm — Filter details expanded, dragging boneFilterMinCutoff by hand while Smoothing preset flips from Balanced to Custom. ~8s.

## Reference — Muscle Limits

- [ ] muscle-limits-enable-toggle.webm — Muscle limits section expanded, toggling Enable off and on with an arm pushed past its natural range — show the joint popping out of clamp when Enable is off vs held in range when on. ~10s.
- [ ] retarget-offsets-sliders.webm — Retarget offsets sub-foldout expanded, dragging Arm spread and Shoulder height sliders with a character on screen — show the visible posture shift. ~10s.
- [ ] muscle-editor-min-max-drag.webm — Muscle editor side panel open with a character loaded — expand the Arms group, drag a Min/Max pair on one muscle row, show the joint's range visibly tightening in the viewport. ~15s.

## Reference — Hand Position Alignment

- [ ] alignment-strength-toggle.webm — side-by-side comparison view (Comparison = Side by side), performer clapping and touching their face, Alignment strength toggled between 0 and 1 to show spatial correction kicking in — roughly 15s.
- [ ] hand-contact-distance-drag.webm — Hand contact distance being dragged from a small positive value to a small negative value while the performer claps, showing the hands meeting further apart vs overlapping — roughly 10s.

## Reference — Hand Anti-Penetration

- [ ] hand-enable-off-on-ghost.webm — side-by-side comparison with Comparison=Ghost, hand reaching across the chest toward the opposite shoulder — show Enable off (hand sinks into torso) vs Enable on (hand stops at the Gap-adjusted surface), a few seconds each.
- [ ] hand-slew-slap-compare.webm — a fast slap/clap gesture that punches a hand deep through the torso collider, recorded once with Slew (deg/s) at a low value (e.g. 60) and once at the default 450, to show the front/back jump difference.

## Reference — Arm Anti-Penetration

- [ ] arm-enable-off-on.webm — Arm anti-penetration section with Enable toggled off vs on, same clip-prone pose (e.g. arm crossed tight against the torso) shown both ways to demonstrate the correction. ~10s.
- [ ] upper-arm-test-mode-compare.webm — Upper-arm test set to Elbow point vs Full segment on the same clipping pose, showing the difference in how cleanly the upper arm clears the torso. ~10s.

## Reference — Colliders

- [ ] collider-overlay-toggles.webm — main panel with Overlay switched on, then each of the nine per-part toggles clicked off one at a time to show the wireframe segments disappearing from the 3D view, roughly 15s.
- [ ] collider-drag-resize.webm — collider editor panel open, selecting a forearm collider by clicking it in the 3D view, then dragging Start radius and Half length to visibly resize it, roughly 15s.

## Facts to confirm

- [ ] `quickstart.md` — Booth item URL for "Get MocapSeitai on Booth."
- [ ] `reference/hand-anti-penetration.md` — is any barrier-mask-matrix row/column combination other than the default (each hand avoiding Head + Torso) officially supported or recommended, or is Head+Torso the only one that's been tuned/tested?
