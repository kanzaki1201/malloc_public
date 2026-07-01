# Data Baker

The **Data Baker** bakes the per-vertex data that the head-tracking features need into a copy of your face
mesh, so those features work with no runtime scripts — safe on VRChat. It writes two things in one pass:

- the **Easy Face Triangle** mirror axis (used by *Follow head bone*), and
- the **Smooth Vertex Normal** radial (used whenever Smooth Vertex Normal is on).

It always bakes both, and it is **non-destructive** — it saves a new mesh asset and never touches your original.

## Open it

Material inspector → **Data Baker** section → **Data Baker** button, or the menu
**Window → lilEasyFace → lilEasyFace Data Baker**.

## Bake

1. **Face Renderer** — the `SkinnedMeshRenderer` of the face mesh.
2. **Head Bone** — the head bone the features should track. It must be in the renderer's bone list.
3. **Center Offset (head-bone space)** — nudges the center used for the Smooth radial; offset it up (e.g. +Y)
   to the head's visual center.
4. Click **Bake to New Mesh**, choose where to save it, and assign the result to the renderer (the baker offers
   to do this for you).

Re-bake if you swap the mesh or regenerate its tangents.

## Then

- Turn on **Follow head bone** in [Easy Face Triangle](./easy-face-triangle), and/or
- Turn on [Smooth Vertex Normal](./smooth-vertex-normal).
