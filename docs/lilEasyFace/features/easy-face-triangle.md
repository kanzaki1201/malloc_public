# Easy Face Triangle

Creates fake Rembrandt light (triangle face light) by mirroring
the surface normal across the character's left/right axis and takes whichever side is more lit.

## Settings

- **Mask (R)** — the red channel controls per-pixel strength. Black = no effect, white = full. 
- **Strength** — how strongly the symmetric flip is applied. The slider caps at 1 but you can type a higher value to over-drive it. ![](../../assets/easyft_strength.webm)
- **Fade when Light Below** — fades the effect as the light drops below the horizon. ![](../../assets/easyft_fade_below.webm)
- **Fade when Light Above** — fades the effect as the light rises above the horizon. ![](../../assets/easyft_fade_above.webm)
- **Follow head bone** — see below.

## Follow head bone

By default the mirror axis is tied to the model root, so if the head is turned by a bone (mocap, non-root
animation) the effect stops matching the face. Turn on **Follow head bone** to mirror around a per-vertex axis
that tracks the head instead.

This requires baking — run the [Data Baker](./data-baker) and assign the baked mesh to the renderer first.

**No follow head**: ![](../../assets/easyft_no_follow.webm)
**Follow head enabled:**
![](../../assets/easyft_yes_follow.webm)

## Combine both faders
Combine both faders to confine the effect to near-horizon light. 
![](../../assets/easyft_combined.webm)
