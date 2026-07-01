# Object-Space Normal Map

Reinterprets lilToon's main (1st) normal-map slot as an **object-space** normal instead of a tangent-space one,
blended with the vertex normal by the texture's alpha. Useful for baked face normals authored in object space.

## Enable

1. Assign your object-space normal map to the material's main **Normal Map** slot.
2. Open **Override Normal Map 1st as Object Space** and turn it on.

## Settings

- **Override Normal Map 1st as Object Space** — on = interpret the main normal map as object-space (alpha 0 =
  vertex normal, alpha 1 = texture normal); off = standard tangent-space normal map (lilToon default).
- **Axis Alignment Matrix** — rotates the texture's RGB axes into mesh object-space. Each row (Left / Up /
  Forward) holds the (R, G, B) coefficients that build that component. The default matches the Blender
  object-space bake preset; set the three rows to identity `(1,0,0)`, `(0,1,0)`, `(0,0,1)` for a Unity-axis bake.
