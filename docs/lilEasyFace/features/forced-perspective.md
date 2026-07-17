# Forced Perspective

<!-- CAPTURE: FP off/on toggle, close wide-angle camera on a face — the money shot -->

Anime characters are drawn with telephoto proportions. A close virtual camera at a wide FOV (Warudo-style framing, the ガチ恋距離 shot) stretches the face and nose outward — the "GoPro face" look. **Forced Perspective** compresses the character's depth toward an anchor at render time, so the close wide-angle camera reads like a telephoto lens: flat, drawn-correct proportions.

It is the shader-side answer to flattening a face with a mesh deformer (lattice), with none of the deformer artifacts:

- **Per-camera.** Computed against whichever camera renders each frame — multiple cameras, mirrors, and both VR eyes each get their own correction *simultaneously*. A mesh deformer has one world-space truth; every other camera sees the squashed sliver.
- **Outlines compress with the geometry.** The outline hull is flattened together with the face. Lattice-squashed meshes keep the full outline width along the squash axis — the classic fat-outline artifact.
- **Shadows stay true.** Shadow casters keep the real geometry, so lighting on the rest of the scene doesn't change.
- Orthographic cameras are unaffected.

## Setup

1. Bake an **Anchor** with the [Data Baker](./data-baker)'s avatar-scope Anchor pass (one click — auto-detects the Hips bone).
2. Turn on **Forced Perspective** in the material editor.
3. Set **Strength**.

## Settings

- **Strength** — 0 = off, 1 = strong compression. The slider caps at 1; type a larger value for the full 2D-flatten look. <!-- CAPTURE: strength sweep 0 → 1 → 3 -->
- **Anchor** — read-only display of the baked anchor. The inspector warns if the material hasn't been baked yet.

## Perspective Controller (one panel for the whole character)

Add **lilEasyFace → Perspective Controller** to the avatar root: one enable toggle + one Strength value drive every lilEasyFace material under it, in the editor and at runtime. It applies per-renderer overrides (MaterialPropertyBlock), so your material assets are never modified — disable the component and rendering returns to the material values.

## Notes

- The anchor sits at the **Hips** (body center). An off-center anchor makes the body slide as the camera orbits — that's why the baker doesn't offer a head anchor.
- Works on every lilEasyFace shader variant, including the transparent modes and FakeShadow (the projected fake shadow follows the compressed silhouette).
- No new shader keywords, no re-bake of existing uv6/uv7 meshes. Plain float uniforms — trivially animatable.
