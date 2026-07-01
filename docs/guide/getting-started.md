# Introduction

**lilEasyFace** is a custom [lilToon](https://lilxyzw.github.io/lilToon/) shader add-on that layers
anime-style face shading on top of stock lilToon, without modifying it. It adds four opt-in features:

- **[Easy Face Triangle](./easy-face-triangle)** — symmetric toon face shading.
- **[Smooth Vertex Normal](./smooth-vertex-normal)** — a baked radial normal that rounds out toon shading.
- **[Object-Space Normal Map](./object-space-normal-map)** — reinterpret the main normal-map slot as object-space.
- **[Data Baker](./data-baker)** — bakes the per-vertex data the head-tracking features need, with no runtime scripts (VRChat-safe).

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

- [Easy Face Triangle](./easy-face-triangle)
- [Smooth Vertex Normal](./smooth-vertex-normal)
- [Object-Space Normal Map](./object-space-normal-map)
- [Data Baker](./data-baker)
