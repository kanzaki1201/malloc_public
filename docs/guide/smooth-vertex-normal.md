# Smooth Vertex Normal

Rounds out toon shading by overriding the world vertex normal with a smooth radial normal, so the lighting
terminator sweeps cleanly across the face instead of catching on the nose and other small forms. It runs at the
vertex stage and drives all shading — no normal map required.

Smooth Vertex Normal is **always baked**: it reconstructs the radial from data the [Data Baker](./data-baker)
writes, so it follows the head bone with no runtime script (VRChat-safe).

## Enable

1. Bake the mesh with the [Data Baker](./data-baker) and assign the baked mesh to the renderer.
2. In the material inspector, open **Smooth Vertex Normal** and turn on **Enable**.

## Settings

- **Spherical** — blends from the original normal (0) to the fully spherical normal (1).
- **Flatten Up** — squashes the sphere toward a cylinder (less domed). 0 = pure sphere.
- **Push Forward** — biases the normal toward the object's forward axis (more frontal). 0 = pure sphere.
- **Mask (R)** — optional; the red channel multiplies the Spherical amount per vertex.
