# Changelog

## 0.8.1 — 2026-07-16

- **Perspective Controller** component (`lilEasyFace → Perspective Controller`, avatar root): sets Forced Perspective enable/strength on every lilEasyFace material under it via MaterialPropertyBlock — material assets not modified; disabling restores the material values.

## 0.8.0 — 2026-07-16

- **Forced Perspective** — per-camera depth compression for drawn-correct proportions on close wide-angle cameras. Multicam coherent; outlines compress with the geometry; shadow casters keep true shape. See [Forced Perspective](/lilEasyFace/features/forced-perspective).
- **Data Baker: avatar-scope Anchor pass** — one click writes the Forced Perspective anchor (auto-detected Hips) to every lilEasyFace material under the avatar root.
- **Full transparent shader family** — OnePass / TwoPass Transparent (+Outline), Overlay, Overlay OnePass, FakeShadow. All features on every variant; stock lilToon's Rendering Mode / Transparent Mode dropdowns drive switching.
- FakeShadow follows Forced Perspective.
- Outline width no longer inflated by non-unit skinned normals (runtime deformers, bone scale, blendshape deltas).
- Fixed: fresh transparent-variant materials initialize with correct transparent state; FakeShadow materials get stock defaults; motion-vector (URP/HDRP) velocities correct under compression.

## 0.7.1 — 2026-07-03
- Preview Normals (Scene) is much faster on dense meshes — no more Scene-view stutter while it's on.
- The preview now warns when the mask texture isn't readable, instead of silently ignoring the mask.

## 0.7.0 — 2026-07-01
- First release, available on **Booth.pm**.
- Smooth vertex normal
- Object space normal map
- Easy face triangle
- Data baker