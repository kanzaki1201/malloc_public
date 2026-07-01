# Changelog

## 0.7.0 — 2026-07-01

First release, available on **Booth.pm**.

- **Smooth Vertex Normal** — rounded toon face shading from a baked radial normal, with per-vertex RGB mask
  control (R = Spherical, G = Flatten Up, B = Push Forward) and a Scene-view normal preview.
- **Easy Face Triangle** — symmetric "face triangle" (Rembrandt) cheek light from a single mask, with optional
  head-bone tracking and horizon fades.
- **Object-Space Normal Map** — use a hand-painted object-space normal directly in lilToon's main normal slot.
- **Data Baker** — one-pass bake of the per-vertex data the head-tracking features need.
