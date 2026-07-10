# Loading your model

This is where you point MocapSeitai at your VRM avatar, and where you save or load the per-avatar map that carries your collider edits, tuning, and muscle limits. You'll open this section once per avatar to load the model, and again any time you want to save your tuning work or bring it back.

The **Load model** foldout sits between the Start/Stop row and Mode & display, and is expanded by default.

## Settings

- **Open model…** — opens the OS file picker to pick and load a VRM file. Both VRM 0.x and VRM 1.0 are supported.
- **Save map…** — saves the current map, including collider edits, as a JSON file. The save dialog defaults to `<avatar file>.map.json` next to the avatar. The map bundles collider edits, current correction tuning, and muscle limits together.
- **Load map…** — loads a map JSON and applies its colliders. It also applies any bundled tuning and muscle limits when present. Loading a map never changes **Transfer mode** (that's a global app setting, not per-avatar) and leaves calibration untouched.
- **Title / Author** — a read-only info card showing the loaded VRM's metadata. Only visible when the loaded avatar actually has metadata.

::: tip
Keep one map per avatar. Since the map bundles your collider edits (see [Colliders](/MocapSeitai/reference/colliders)) together with your correction tuning and muscle limits (see [Muscle limits](/MocapSeitai/reference/muscle-limits)), a single map file captures everything you've tuned for that specific model's proportions. Loading the wrong avatar's map onto a different model will misapply collider shapes and joint ranges built for a different body.
:::

::: info
The default save location — right next to the VRM file, named `<avatar>.map.json` — means the map travels with the model if you keep the files together. You can still save it anywhere or rename it if you want to keep multiple tuning variants for the same avatar.
:::

<!-- CAPTURE: Load model section — click Open model…, pick a VRM file in the OS picker, show the model loading in the viewport and the Title/Author card populating. ~10s -->
*(media pending)*

<!-- CAPTURE: Save map… then Load map… round trip — save a map after adjusting a collider, then load it back to show colliders reapplying. ~10s -->
*(media pending)*
