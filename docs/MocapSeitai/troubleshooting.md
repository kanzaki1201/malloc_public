# Troubleshooting

## Common problems

### Messages/s stays at 0

The [Status](/MocapSeitai/reference/connections) line shows `Messages/s: 0` after pressing **Start**.

- **Firewall not allowed.** Open Windows Defender Firewall, find MocapSeitai under **Allow an app through firewall**, and check **Private** networks.
- **Wrong IP or port.** Check that your tracking app's target IP is this PC and the port matches MocapSeitai's **Listen port** / **mocopi port** / **Rokoko port** (whichever matches your [Input mode](/MocapSeitai/reference/connections)).
- **Port already in use.** MocapSeitai shows a port-unavailable warning when the listen port failed to bind. Close whatever else is using that port and restart MocapSeitai.

### Settings aren't saving

Changes reset every launch.

::: warning
This happens when MocapSeitai is run from inside the ZIP's preview/temp-extraction view. Extract the whole ZIP to a normal folder first.
:::

### "Windows protected your PC" (SmartScreen)

The build is unsigned, so SmartScreen flags it on first launch. Click **More info**, then **Run anyway**. This only appears once per downloaded build.

### Motion looks wrong in the receiver

Load the **same** VRM file in the receiver as in MocapSeitai. MocapSeitai retargets using the proportions of the VRM you loaded into it. A different VRM in the receiver means the corrections were computed for the wrong body.

### Hands/arms clip the body, or claps don't meet

See [Common adjustments](/MocapSeitai/common-adjustments) for tuning recipes.

### Model sinks or floats when squatting

Check **Squat body-scale correction** in [Smoothing](/MocapSeitai/reference/smoothing). It scales hip translation by body proportion so squat depth matches. If it's off, or the [Actor body](/MocapSeitai/reference/actor-body) measurements are inaccurate, squats can under- or over-shoot the floor.

### "Body settings changed" warning

You changed an Actor body value while the loop was running. Press **Realign actor rig** (see [Actor body](/MocapSeitai/reference/actor-body)). The warning clears once you do.

## Diagnostics

The **Diagnostics** section sits at the bottom of the main panel.

- **Copy diagnostics** copies a diagnostics report to the clipboard. Paste it into a bug report.
- **Open log folder** opens the folder containing MocapSeitai's log file.

::: tip Filing a bug
See [Report a Bug](/bug-report). Run **Copy diagnostics** first and paste the report in.
:::
