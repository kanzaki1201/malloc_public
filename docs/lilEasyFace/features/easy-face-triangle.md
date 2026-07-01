# Easy Face Triangle

Keeps both sides of the face lit under side lighting, the way hand-drawn anime faces stay readable. It mirrors
the surface normal across the character's left/right axis and takes whichever side is more lit, so a light from
one side no longer leaves the far cheek in shadow.

## Enable

In the material inspector, open **Easy Face Triangle** and turn on **Enable**.

## Settings

- **Mask (R)** — the red channel controls per-pixel strength. Black = no effect, white = full. Paint this to
  confine the effect to the face.
- **Strength** — how strongly the symmetric flip is applied. The slider caps at 1; type a higher value to
  over-drive it.
- **Fade when Light Below** — fades the effect as the light drops below the horizon (0 = no fade, 1 = fully
  gone when the light is straight down).
- **Fade when Light Above** — fades the effect as the light rises above the horizon. Combine both faders to
  confine the effect to near-horizon light.
- **Follow head bone** — see below.

## Follow head bone

By default the mirror axis is tied to the model root, so if the head is turned by a bone (mocap, non-root
animation) the effect stops matching the face. Turn on **Follow head bone** to mirror around a per-vertex axis
that tracks the head instead.

This requires baking — run the [Data Baker](./data-baker) and assign the baked mesh to the renderer first.
