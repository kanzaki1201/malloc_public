# Troubleshooting & Diagnostics

Most problems with MocapSeitai come down to one of a handful of causes: the firewall didn't get allowed, a port is already taken by another app, the ZIP was never extracted, or the receiver is loading a different VRM than MocapSeitai is. This page walks through the common symptoms first, then covers the built-in Diagnostics tools for when you need to file a bug report.

## Common problems

### Messages/s stays at 0

The [Status](/MocapSeitai/reference/connections) line shows `Messages/s: 0` even after you press **Start** and your tracking app is running.

- **Windows Firewall didn't get allowed on first launch.** Windows normally prompts to allow MocapSeitai through the firewall the first time it opens a network port. If you dismissed that prompt or it didn't appear, open Windows Defender Firewall → **Allow an app through firewall**, find MocapSeitai, and make sure **Private** networks are checked.
- **The sender is pointed at the wrong IP or port.** Check that your tracking app's target IP is this PC and that its target port matches MocapSeitai's **Listen port** / **mocopi port** / **Rokoko port** (whichever matches your [Input mode](/MocapSeitai/reference/connections)).
- **Another app already grabbed the port.** MocapSeitai shows a port-unavailable warning under Input when the listen port failed to bind. Close whatever else is using that port (another mocap receiver, a leftover MocapSeitai instance) and restart MocapSeitai.

### Settings aren't saving

Any change you make — including your VRM, colliders, and tuning — resets the next time you launch.

::: warning ZIP preview
This happens when MocapSeitai is run straight out of the ZIP's preview/temp-extraction view instead of a real folder. Extract the whole ZIP to a normal folder first, then run the `.exe` from there.
:::

### "Windows protected your PC" (SmartScreen) on first run

MocapSeitai is an unsigned build, so SmartScreen flags it on first launch. Click **More info**, then **Run anyway**. This only appears once per downloaded build.

### Motion looks wrong in the receiver

MocapSeitai retargets using the proportions of the VRM you loaded into it. If the app receiving the corrected VMC stream (VSeeFace, VNyan, Warudo, etc.) has a *different* VRM loaded, the corrections were computed for the wrong body and the pose will look off. Load the **same** VRM file in the receiver as the one loaded in MocapSeitai's [Load model](/MocapSeitai/reference/loading-your-model) section.

### Hands/arms clip the body, or claps don't meet

This is what the correction pipeline is for. See [Common adjustments](/MocapSeitai/common-adjustments) for tuning recipes — hand contact distance, alignment strength, and the anti-penetration gaps all affect this.

### Model sinks or floats into the ground when squatting

Check **Squat body-scale correction** in the [Smoothing](/MocapSeitai/reference/smoothing) section. It scales hip translation by body proportion so squat depth matches between actor and character; if it's off, or the actor's [Actor body](/MocapSeitai/reference/actor-body) measurements are inaccurate, squats can under- or over-shoot the floor.

### "Body settings changed — realign actor rig" warning

You changed an Actor body value (Height, Arm span, or a Detailed measurement) while the loop was running. Press **Realign actor rig** — see the [reference overview](/MocapSeitai/reference/) for where the realign buttons live. This rebuilds the actor rig from the incoming skeleton so the new proportions take effect; the warning clears automatically once you do.

## Diagnostics

The **Diagnostics** section sits at the bottom of the main panel and exists specifically to support bug reports.

- **Copy diagnostics** — copies a diagnostics report to the clipboard. Paste it directly into a bug report; a **copied ✓** confirmation shows briefly after you click it.
- **Open log folder** — opens the folder containing MocapSeitai's log file, in case a bug report needs the raw log attached.

::: tip Filing a bug
If something's still broken after working through the symptoms above, see [Report a Bug](/bug-report) for how to file it — run **Copy diagnostics** first and paste the report in.
:::
