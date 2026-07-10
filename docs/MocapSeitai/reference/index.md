# The panel at a glance

MocapSeitai's whole workflow lives in one scrollable panel: connect your tracking app, load your VRM, and tune how the correction pipeline retargets motion onto it. This page is a map of that panel, top to bottom, plus the odds and ends that don't have a reference page of their own.

<!-- CAPTURE: full annotated screenshot of the main panel, scrolled to show every section header (Status through Diagnostics), with callout labels pointing at each section name; static image -->
*(media pending)*

## Walking down the panel

- **Status** — live readout of the receive-correct-send loop, refreshed every 0.25 s. Covered on [Connections](/MocapSeitai/reference/connections).
- **Realign & reset rows** — always-visible action buttons; documented below.
- **Input** — pick your mocap source (VMC, mocopi, Rokoko) and its listen port. See [Connections](/MocapSeitai/reference/connections).
- **Output** — where the corrected VMC stream is sent. See [Connections](/MocapSeitai/reference/connections).
- **Start / Stop row** — run control for the loop. See [Connections](/MocapSeitai/reference/connections).
- **Load model** — load your VRM and save/load its per-avatar map. See [Loading your model](/MocapSeitai/reference/loading-your-model).
- **Mode & display** — comparison ghost/twin view and skeleton overlays. See [Mode & display](/MocapSeitai/reference/mode-and-display).
- **Actor body** — the performer's real-world proportions. See [Actor body](/MocapSeitai/reference/actor-body).
- **Smoothing** — transfer mode, bone smoothing presets, and squat body-scale correction. See [Smoothing](/MocapSeitai/reference/smoothing).
- **Muscle limits** — joint-range clamping, retarget offsets, and the muscle editor. Collapsed by default. See [Muscle limits](/MocapSeitai/reference/muscle-limits).
- **Hand position alignment** — spatial hand placement, IK pinning, hand contact. See [Hand position alignment](/MocapSeitai/reference/hand-position-alignment).
- **Hand anti-penetration** — keeps hand targets out of the body. See [Hand anti-penetration](/MocapSeitai/reference/hand-anti-penetration).
- **Arm anti-penetration** — keeps upper arms and forearms out of the body. See [Arm anti-penetration](/MocapSeitai/reference/arm-anti-penetration).
- **Colliders** — the collision shapes everything above tests against, plus the collider editor. See [Colliders](/MocapSeitai/reference/colliders).
- **Diagnostics** — copy a bug-report snippet or open the log folder. Bottom of the panel.

## Header

- **VMC Seitai** — the panel title. Note: MocapSeitai was formerly named VMC Seitai; a 0.9.x beta panel may still show the old title.
- **Language** — unlabeled dropdown, choices **English** / **日本語**. Changing it saves your settings and fully rebuilds the panel — every label and tooltip in the UI localizes through this. (default English)
- **(version)** — read-only label showing the installed app version.
- **(panel resize handle)** — a thin strip at the bottom edge of the panel column. Drag it to resize the panel's width, clamped between 300 and 620 px; the new width is saved when you release. (default 360 px)

## Realign & reset rows

Two always-visible button rows sitting between Status and Input.

- **Realign actor rig** — rebuilds the actor rig from the incoming skeleton. Press this after changing any [Actor body](/MocapSeitai/reference/actor-body) value while the loop is running — it also clears the "Body settings changed" warning.
- **Realign character rig** — rebuilds the character pipeline without reloading the VRM.
- **Body settings changed — realign actor rig** — a warning label, hidden by default. It appears only when an Actor body value changed while the loop was running, and clears once you press Realign actor rig or switch input mode.
- **Reset settings** — returns every tuning knob to factory defaults. Collider adjustments are kept.

::: warning
Reset settings rebuilds the panel and also resets the collider overlay filter. It does not touch your collider edits — those live in the per-avatar map, not app settings.
:::

<!-- CAPTURE: change an Actor body value while the loop is running so the "Body settings changed" warning appears, then press Realign actor rig and show the warning clear; ~10s -->
*(media pending)*

::: info
A handful of controls scattered through the panel are labeled in raw code-style camelCase — **pinHands**, **boneFilterMinCutoff**, and a few others. These are deliberately-raw advanced knobs; their defaults are sensible, so touch them last, once the friendlier controls above them aren't getting you the rest of the way.
:::

## A few things that apply everywhere

Settings save automatically, about a second after you change them — there's no separate save button for the app-wide settings. Correction tuning and collider edits are different: they persist per-avatar through a map file, loaded and saved from the [Load model](/MocapSeitai/reference/loading-your-model) section.

The two side panels — the collider editor and the muscle editor — are mutually exclusive; opening one closes the other.

Hovering any control for a moment shows a tooltip explaining what it does, if the label alone isn't enough.
