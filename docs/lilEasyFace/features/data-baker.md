# Data Baker

The **Data Baker** bakes the per-vertex data that the head-tracking features need into a copy of your face mesh, so those features work with no runtime C# scripts. 

It writes two things in one pass:

- the **Easy Face Triangle** mirror axis (used by *Follow head bone*) into UV6, and
- the **Smooth Vertex Normal** radial (used whenever Smooth Vertex Normal is on) into UV7.

It always bakes both, and it saves a new mesh asset and never touches your original.

It also has a separate **avatar-scope Anchor pass** for [Forced Perspective](./forced-perspective) — materials only, no mesh involved.

## Open it

Material inspector → **Data Baker** section → **Data Baker** button, or the menu
**Window → lilEasyFace → lilEasyFace Data Baker**.

## Bake

1. **Face Renderer** — the `SkinnedMeshRenderer` of the face mesh.
2. **Head Bone** — the head bone the features should track. It must be in the renderer's bone list.
3. **Center Offset (head-bone space)** — nudges the center used for the Smooth radial; offset it up (e.g. +Y) to the head's visual center.
4. Click **Bake to New Mesh**, choose where to save it, and assign the result to the renderer (the baker offers to do this for you).

Re-bake if you swap the mesh or regenerate its tangents.

## Forced Perspective Anchor

The Anchor pass writes the [Forced Perspective](./forced-perspective) anchor to **every lilEasyFace material** under an avatar root. No mesh copies — it only sets material values.

1. **Avatar Root** — the character root (needs an `Animator`).
2. **Anchor Bone** — auto-detected **Hips**. Override only if you know why (an off-center anchor makes the body slide as the camera orbits).
3. **Offset (bone space)** — optional nudge.
4. Click **Apply** — the anchor is written to all lilEasyFace materials under the root.

If one material is shared by renderers that need different anchors, the baker warns — split the material instead of shipping a mismatch.

## Then

- Turn on **Follow head bone** in [Easy Face Triangle](./easy-face-triangle), and/or
- Turn on [Smooth Vertex Normal](./smooth-vertex-normal), and/or
- Turn on [Forced Perspective](./forced-perspective).
