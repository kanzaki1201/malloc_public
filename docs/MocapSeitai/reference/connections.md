# Connections

Where motion comes from and where the corrected result goes. Set this once when you wire up your tracking app and renderer.

## Status

Top of the panel, refreshes every 0.25 s.

- **(status line)** reads `<LoopState> / <Status>`, whether the loop is running and what state it's in.
- **(counters line)** reads `Messages/s: N   Addresses: N   Send drops: N`, live count of incoming traffic, distinct addresses, and outgoing drops.

::: tip
If **Messages/s** stays at 0 after pressing Start, the loop isn't receiving anything. Usually a firewall issue or wrong IP/port. See [Troubleshooting](/MocapSeitai/troubleshooting).
:::

## Input

Foldout, expanded by default. Only fields for the current **Input mode** are shown.

- **Input mode** selects the input source: **VMC**, **mocopi**, or **Rokoko**. (default VMC)
- **Listen port** UDP port for VMC input. (default 39539, VMC mode only)
- **mocopi port** match to the mocopi app's target port. (default 12351, mocopi mode only)
- **Rokoko port** match to Rokoko Studio's target port. (default 14043, Rokoko mode only)
- **Actor name** Rokoko Studio actor to follow. Leave empty for the first actor. (Rokoko mode only)
- **Forward VMC blendshapes** forwards face blendshapes arriving over VMC on the listen port, alongside the SDK body stream. (default on, mocopi/Rokoko mode only)
- **(port-unavailable hint)** warning shown when the listen port failed to bind. Close whatever else is using the port and restart MocapSeitai.

<!-- CAPTURE: switch Input mode from VMC to mocopi to Rokoko in turn, showing the port/Actor name/Forward VMC blendshapes fields appear and disappear each time; ~15s -->
*(media pending)*

## Output

Foldout, expanded by default.

- **Send address** IP address for the corrected VMC stream. Use `127.0.0.1` for same-PC setups. (default 127.0.0.1)
- **Send port** must match the receiving app's listen port. (default 39540)

::: tip
Load the same VRM in the receiver as in MocapSeitai. A mismatched avatar will fight the corrections. See [Loading your model](/MocapSeitai/reference/loading-your-model).
:::

## Start / Stop row

Always-visible button row between Output and Load model.

- **Start** starts receiving and correcting.
- **Stop** stops the loop and holds the last pose (character freezes in place rather than snapping to a default pose).

<!-- CAPTURE: press Start with a tracker feeding input, showing the Status counters line ticking up Messages/s and Addresses; then press Stop and show the character holding its last pose; ~20s -->
*(media pending)*

If Status stays at `Messages/s: 0` after Start, see [Troubleshooting](/MocapSeitai/troubleshooting).
