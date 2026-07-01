# Smooth Vertex Normal

Rounds out toon shading by overriding the world vertex normal with a smooth radial normal. 

It is a step similar to transferring normals from a sphere mesh in Blender, Maya, etc. 

Smooth Vertex Normal requires **data bake** using [Data Baker](./data-baker).

## Settings
- **Spherical** — blends from the original normal (0) to the fully spherical normal (1). ![](../../assets/smooth_normal_spherical.webm)
- **Flatten Up** — squashes the sphere toward a cylinder (less domed). ![](../../assets/smooth_normal_flatten_up.webm)
- **Push Forward** — biases the normal toward the object's forward axis (more frontal). ![](../../assets/smooth_normal_push_forward.webm)
- **Mask (RGB)** — optional, per-vertex. **R** scales Spherical, **G** scales Flatten Up, **B** scales Push Forward. Unassigned (white) = every channel at full.
- **Preview Normals (Scene)** — show smoothed normals in Scene view (cyan). Preview is only shown when the mesh game object is selected.
	- **Preview Length** — length of the lines.
	- **Preview Density** — draw every Nth vertex (raise it if a dense mesh gets too busy).
	- **Show Original** — also draws the un-adjusted normals in orange.


