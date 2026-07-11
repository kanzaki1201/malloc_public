# The panel at a glance

MocapSeitai's workflow lives in one scrollable panel. This page maps the panel top to bottom, plus odds and ends without their own reference page.

<!-- CAPTURE: full annotated screenshot of the main panel, scrolled to show every section header (Status through Diagnostics), with callout labels pointing at each section name; static image -->
*(media pending)*

## Panel sections

- **Status** live readout of the loop, refreshed every 0.25 s. See [Connections](/MocapSeitai/reference/connections).
- **Realign & reset rows** always-visible action buttons (documented below).
- **Input** mocap source and listen port. See [Connections](/MocapSeitai/reference/connections).
- **Output** where the corrected VMC stream goes. See [Connections](/MocapSeitai/reference/connections).
- **Start / Stop row** run control. See [Connections](/MocapSeitai/reference/connections).
- **Load model** load your VRM and save/load per-avatar maps. See [Loading your model](/MocapSeitai/reference/loading-your-model).
- **Mode & display** comparison view and skeleton overlays. See [Mode & display](/MocapSeitai/reference/mode-and-display).
- **Actor body** performer's real-world proportions. See [Actor body](/MocapSeitai/reference/actor-body).
- **Smoothing** transfer mode, bone smoothing, squat correction. See [Smoothing](/MocapSeitai/reference/smoothing).
- **Muscle limits** joint-range clamping, retarget offsets, muscle editor. Collapsed by default. See [Muscle limits](/MocapSeitai/reference/muscle-limits).
- **Hand position alignment** spatial hand placement, IK pinning, hand contact. See [Hand position alignment](/MocapSeitai/reference/hand-position-alignment).
- **Hand anti-penetration** keeps hand targets out of the body. See [Hand anti-penetration](/MocapSeitai/reference/hand-anti-penetration).
- **Arm anti-penetration** keeps upper arms and forearms out of the body. See [Arm anti-penetration](/MocapSeitai/reference/arm-anti-penetration).
- **Colliders** collision shapes and the collider editor. See [Colliders](/MocapSeitai/reference/colliders).
- **Diagnostics** copy a bug-report snippet or open the log folder.

## Header

- **VMC Seitai** panel title.
- **Language** unlabeled dropdown: **English** / **日本語**. Changing it saves settings and rebuilds the panel. (default English)
- **(version)** read-only label showing the installed version.
- **(panel resize handle)** thin strip at the bottom edge. Drag to resize width (300 to 620 px, saved on release, default 360 px).

## Realign & reset rows

Two always-visible button rows between Status and Input.

- **Realign actor rig** rebuilds the actor rig from the incoming skeleton. Press after changing any [Actor body](/MocapSeitai/reference/actor-body) value while the loop is running. Also clears the "Body settings changed" warning.
- **Realign character rig** rebuilds the character pipeline without reloading the VRM.
- **Body settings changed** warning label. Hidden by default. Appears when an Actor body value changed while the loop was running. Clears once you press Realign actor rig or switch input mode.
- **Reset settings** returns every tuning knob to factory defaults. Collider adjustments are kept.

::: warning
Reset settings rebuilds the panel and resets the collider overlay filter. It does not touch collider edits (those live in the per-avatar map, not app settings).
:::

<!-- CAPTURE: change an Actor body value while the loop is running so the "Body settings changed" warning appears, then press Realign actor rig and show the warning clear; ~10s -->
*(media pending)*

## General notes

Settings save automatically about a second after you change them. Correction tuning and collider edits are per-avatar and persist through the map file ([Load model](/MocapSeitai/reference/loading-your-model)).

The collider editor and muscle editor side panels are mutually exclusive; opening one closes the other.

Hovering any control shows a tooltip explaining what it does.

::: info
A few controls are labeled in raw camelCase (e.g. **pinHands**, **boneFilterMinCutoff**). These are advanced knobs with sensible defaults; touch them last.
:::
