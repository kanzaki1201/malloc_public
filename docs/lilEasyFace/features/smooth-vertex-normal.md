# Smooth Vertex Normal

Rounds out toon shading by overriding the world vertex normal with a smooth radial normal. 

It is a step similar to transferring normals from a sphere mesh in Blender, Maya, etc. 

Smooth Vertex Normal requires **data bake** using [Data Baker](./data-baker) in order to correctly follow head movements.

## Settings

- **Spherical** — blends from the original normal (0) to the fully spherical normal (1).
- **Flatten Up** — squashes the sphere toward a cylinder (less domed). 0 = pure sphere. 1 = all normals points towards 
- **Push Forward** — biases the normal toward the object's forward axis (more frontal). 0 = pure sphere.
- **Mask (RGB)** — optional, per-vertex. **R** scales Spherical, **G** scales Flatten Up, **B** scales Push Forward. Unassigned (white) = every channel at full.

## Preview normals in the Scene view

To see exactly what the smooth normal does, turn on **Preview Normals (Scene)** in the Smooth Vertex Normal
section and select the face object. The adjusted normals are drawn as lines in the Scene view (cyan), so you
can watch them fan out into a sphere as you raise Spherical, or flatten as you raise Flatten Up.

- **Preview Length** — length of the lines.
- **Preview Density** — draw every Nth vertex (raise it if a dense mesh gets too busy).
- **Show Original** — also draws the un-adjusted normals in orange, for a before/after comparison.

