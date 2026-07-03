# Introduction

![](../assets/getting_started.webm)

**lilEasyFace** is a custom [lilToon](https://lilxyzw.github.io/lilToon/) shader add-on. It takes a few stylized face-shading techniques that normally send you into Blender or a texture-baking pipeline and turns each one into a toggle in the Unity material editor. The name is the point: **easy**.

- Get **smooth, rounded toon shading** without transferring normals from a proxy sphere in Blender or DCC software — just enable [Smooth Vertex Normal](/lilEasyFace/features/smooth-vertex-normal).
- Get **"face triangle" light (Rembrandt light)** without hand-editing face normals *or* drawing and baking a multi-angle SDF face-shadow map — [Easy Face Triangle](/lilEasyFace/features/easy-face-triangle) needs a single mask.
- And if you *do* want full manual control, [Object-Space Normal Map](/lilEasyFace/features/object-space-normal-map) lets you drop a hand-painted object-space normal directly into lilToon's main normal map slot.

All features work well together with each other.

It layers on top of stock lilToon without modifying it, and every feature is **opt-in** (off by default). 

The head-tracking features rely on a one-click [Data Baker](/lilEasyFace/features/data-baker) in Unity editor and no runtime scripts.

## Requirements

- Unity 2022.3 or later
- [lilToon](https://lilxyzw.github.io/lilToon/) 2.3.2 or later, imported first
- 
## Compatibility
- Built-in Render Pipeline: YES
- Universal Render Pipeline: YES
- High Definition Render Pipeline: Not tested, should work in theory
- Warudo: YES
- VRChat: NO


## Install

::: tip Download
Booth: https://malloc5566.booth.pm/items/8566350
Gumroad: https://malloc.gumroad.com/l/lileasyface
:::

1. Import **lilToon** into your project first.
2. Import the **lilEasyFace** package.
3. Select a material and set its shader to **lilEasyFace** (shader picker → `lilEasyFace`).

## Next steps

- [Easy Face Triangle](/lilEasyFace/features/easy-face-triangle)
- [Smooth Vertex Normal](/lilEasyFace/features/smooth-vertex-normal)
- [Object-Space Normal Map](/lilEasyFace/features/object-space-normal-map)
- [Data Baker](/lilEasyFace/features/data-baker)
