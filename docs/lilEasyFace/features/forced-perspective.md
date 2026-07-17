# Forced Perspective

<!-- CAPTURE: FP off/on toggle, close wide-angle camera on a face -->

Compresses the character's depth toward an anchor at render time, so a close wide-angle camera renders telephoto-like proportions instead of a stretched face.

The correction is computed per camera in the shader: multiple cameras, mirrors, and both VR eyes each get their own correction at the same time. Outlines compress together with the geometry, shadow casters keep the true shape, and orthographic cameras are unaffected.

## Setup

1. Bake an **Anchor** with the [Data Baker](./data-baker)'s Anchor pass (one click — auto-detects the Hips bone).
2. Turn on **Forced Perspective** in the material editor.
3. Set **Strength**.

## Settings

- **Strength** — 0 = off, 1 = strong compression. The slider caps at 1 but you can type a higher value for a full 2D-flatten look. <!-- CAPTURE: strength sweep 0 → 1 → 3 -->
- **Anchor** — the baked anchor, read-only. The inspector warns if the material hasn't been baked yet.

## Notes

- The anchor sits at the **Hips** (body center). An off-center anchor makes the body slide as the camera orbits — that's why the baker doesn't offer a head anchor.
- Works on every lilEasyFace shader variant, including the transparent modes and FakeShadow (the projected fake shadow follows the compressed silhouette).
- No new shader keywords and no re-bake of existing uv6/uv7 meshes. The values are plain floats, so they can be animated.
