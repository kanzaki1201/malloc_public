# Introduction

**lilEasyFace** is a custom [lilToon](https://lilxyzw.github.io/lilToon/) shader add-on. It takes a few
stylized face-shading techniques that normally send you into Blender or a texture-baking pipeline and turns
each one into a toggle in the Unity material editor. The name is the point: **easy**.

- Get **smooth, rounded toon shading** without transferring normals from a proxy sphere in Blender — just
  enable [Smooth Vertex Normal](/lilEasyFace/features/smooth-vertex-normal) and bake once, in Unity.
- Get the symmetric **"face triangle" light (Rembrandt light)** without hand-editing face normals *or* drawing and baking
  a multi-angle SDF face-shadow map — [Easy Face Triangle](/lilEasyFace/features/easy-face-triangle) needs a
  single mask.
- And if you *do* want full manual control, [Object-Space Normal Map](/lilEasyFace/features/object-space-normal-map)
  lets you drop a hand-painted object-space normal straight into lilToon's main normal map slot.

It layers on top of stock lilToon without modifying it, and every feature is **opt-in** (off by default). The
head-tracking features rely on a one-click [Data Baker](/lilEasyFace/features/data-baker) and no runtime
scripts, so they work on VRChat.

## Requirements

- Unity 2022.3 or later
- [lilToon](https://lilxyzw.github.io/lilToon/) 2.3.2 or later, imported first

## Install

::: tip Download
The release download link will go here once it is published.
:::

1. Import **lilToon** into your project first.
2. Import the **lilEasyFace** package.
3. Select a material and set its shader to **lilEasyFace** (shader picker → `lilEasyFace`).

All features are **off by default** — enable the ones you want in the material inspector. Each feature has
its own foldout section.

## Next steps

- [Easy Face Triangle](/lilEasyFace/features/easy-face-triangle)
- [Smooth Vertex Normal](/lilEasyFace/features/smooth-vertex-normal)
- [Object-Space Normal Map](/lilEasyFace/features/object-space-normal-map)
- [Data Baker](/lilEasyFace/features/data-baker)
