# Loading your model

Load your VRM avatar and save/load per-avatar maps that carry collider edits, tuning, and muscle limits.

## Settings

- **Open model...** opens the OS file picker. VRM 0.x and VRM 1.0 are both supported.
- **Save map...** saves the current map (collider edits, correction tuning, muscle limits) as a JSON file. Defaults to `<avatar file>.map.json` next to the avatar.
- **Load map...** loads a map JSON and applies its colliders, tuning, and muscle limits. Does not change **Transfer mode** (that's a global app setting) and leaves calibration untouched.
- **Title / Author** the loaded VRM's metadata.

::: tip
Keep one map per avatar. The map bundles collider edits, correction tuning, and muscle limits for that model's proportions. Loading the wrong avatar's map onto a different model will misapply everything.
:::

The default save location (next to the VRM, named `<avatar>.map.json`) means the map travels with the model. You can save it anywhere or rename it for multiple tuning variants.

## Realign & reset

- **Realign Actor Rig** rebuilds the actor rig from the incoming skeleton.
- **Realign Character Rig** rebuilds the character pipeline without reloading the VRM.
- **Reset settings** returns every tuning knob to factory defaults. Does not touch collider edits (those are per-avatar in the map).

Press both realign buttons after changing [Actor body](/MocapSeitai/reference/actor-body) values or switching tracking source.

<!-- CAPTURE: Load model section — click Open model…, pick a VRM file in the OS picker, show the model loading in the viewport and the Title/Author card populating. ~10s -->
*(media pending)*

<!-- CAPTURE: Save map… then Load map… round trip — save a map after adjusting a collider, then load it back to show colliders reapplying. ~10s -->
*(media pending)*
