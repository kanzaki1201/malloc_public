# Connections

This is where you tell MocapSeitai where your motion comes from and where the corrected result goes. You'll touch it once when you first wire up your tracking app and renderer, and again any time you switch trackers, move to a different PC, or need to confirm the pipeline is actually flowing.

## Status

Sits at the top of the panel and refreshes every 0.25 s, so keep an eye on it while you set up Input and Output below.

- **(status line)** — reads `<LoopState> / <Status>`, telling you whether the receive-correct-send loop is running and what state it's in.
- **(counters line)** — reads `Messages/s: N   Addresses: N   Send drops: N`, a live count of incoming VMC/mocopi/Rokoko traffic, distinct addresses seen, and outgoing packets dropped.

::: tip
If **Messages/s** stays at 0 after you press Start, the loop isn't receiving anything — usually a firewall blocking the listen port, or your tracking app's sender target pointed at the wrong IP or port. See [Troubleshooting](/MocapSeitai/troubleshooting).
:::

## Input

A foldout, expanded by default. Choose which mocap source feeds MocapSeitai and the port it listens on. Only the fields that apply to the current **Input mode** are shown — the rest are hidden.

- **Input mode** — selects the input mode. Choices are **VMC**, **mocopi**, and **Rokoko**. mocopi and Rokoko receive their app streams directly; set the sender target to this PC and the port shown below. Changing this clears the stale-calibration notice. (default VMC)
- **Listen port** — UDP port to receive VMC on; point your tracker app here. Visible only in VMC mode. Values of 0 or below are ignored. (default 39539)
- **mocopi port** — match this to the Sony mocopi app's target port. Visible only in mocopi mode. (default 12351)
- **Rokoko port** — match this to Rokoko Studio's target port. Visible only in Rokoko mode. (default 14043)
- **Actor name** — the Rokoko Studio actor to follow; leave empty to follow the first actor. Visible only in Rokoko mode. (default empty)
- **Forward VMC blendshapes** — visible only in mocopi or Rokoko mode. In those modes your body motion comes straight from the SDK stream, not VMC, but face blendshapes can still arrive over VMC on the listen port — turn this on to forward them alongside the body stream. (default on)
- **(port-unavailable hint)** — a warning shown only when the listen port failed to bind. In VMC mode it reads "The listen port is unavailable. Close the other app and restart."; in mocopi/Rokoko mode it reads "Face-forwarding port unavailable — blendshapes are not forwarded. Close the other app using it." Either way, something else on this PC (often a second MocapSeitai instance, or another mocap tool) already has the port open.

<!-- CAPTURE: switch Input mode from VMC to mocopi to Rokoko in turn, showing the port/Actor name/Forward VMC blendshapes fields appear and disappear each time; ~15s -->
*(media pending)*

## Output

A foldout, expanded by default. This is where the corrected VMC stream goes.

- **Send address** — the IP address the corrected VMC stream is sent to; use `127.0.0.1` when the receiving app runs on the same PC. Empty or whitespace values are ignored on settings load. (default 127.0.0.1)
- **Send port** — must match the receiving app's listen port. (default 39540)

::: info
The receiver app (VSeeFace, VNyan, Warudo, etc.) must be listening on this same address and port, or nothing will show up on its end even though MocapSeitai is sending correctly.
:::

::: tip
Load the same VRM in the receiver as you loaded in MocapSeitai (see [Loading your model](/MocapSeitai/reference/loading-your-model)). A mismatched avatar will visibly fight the correction — hand and foot placement is tuned to the model MocapSeitai has loaded.
:::

## Start / Stop row

An always-visible button row between Output and Load model. This is the run control for the whole receive-correct-send loop.

- **Start** — starts receiving and correcting.
- **Stop** — stops the loop and holds the last pose (your character freezes in place rather than snapping to a default pose).

<!-- CAPTURE: press Start with a tracker feeding input, showing the Status counters line ticking up Messages/s and Addresses; then press Stop and show the character holding its last pose; ~20s -->
*(media pending)*

If Status never leaves `Messages/s: 0` after Start, work through [Troubleshooting](/MocapSeitai/troubleshooting) — the usual causes are a blocked firewall port or a sender target that doesn't match your Send/Listen address and port here.
