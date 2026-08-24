# Settings reference

This page lists the public-beta controls by workflow. The public beta uses Offset mode.

## Connection

| Control | Purpose |
| --- | --- |
| **Input mode** | Select VMC, mocopi, Rokoko, or VMC SlimeVR. |
| **Listen port** | Receive motion from the selected source. |
| **Output address and port** | Send corrected VMC data to the receiver. |
| **Messages/s** | Check that input is active. |

For a one-PC receiver, use `127.0.0.1` as the output address.

## Avatar and saved values

| Control | Purpose |
| --- | --- |
| **Open model** | Load the VRM avatar used for retargeting. |
| **Load settings** | Load saved tuning and collider settings for this avatar. |
| **Save settings** | Save tuning and collider settings for this avatar. |
| **Realign actor rig** | Re-read the incoming skeleton after you recalibrate the sender or switch its tracked model. |
| **Realign character rig** | Rebuild the character pipeline without reloading the VRM. |
| **Actor measurements** | Describe the tracked person for retargeting. |

**Realign actor rig** is the source-rig control. Select it after sender recalibration or a sender model change. Keep motion input active while MocapSeitai reads the skeleton again.

Opening a VRM already rebuilds the character pipeline. Select **Realign character rig** only if the avatar pose is still incorrect. **Load settings** does not normally require either realignment button.

## Retargeting and comparison

| Control | Purpose |
| --- | --- |
| **Upper-arm spread** | Move the upper arms farther from or nearer to the torso. |
| **Forearm preroll** | Adjust forearm rotation. |
| **Upper-arm twist** | Adjust upper-arm twist. |
| **Upper-leg spread** | Move the upper legs farther apart or nearer together. |
| **Shoulder height** | Adjust shoulder height. |
| **Shoulder shift** | Move the shoulders sideways. |
| **Comparison: Off** | Show only corrected motion. |
| **Comparison: Ghost** | Show an overlay for comparison. |
| **Comparison: Side by side** | Show corrected and source motion together. |

## Hand anti-penetration

| Control | Purpose |
| --- | --- |
| **Off** | Disable hand anti-penetration. This is the shipped default. |
| **SdfSearch** | Use SDF search. |
| **Ragdoll** | Use the ragdoll oracle. |
| **Hybrid** | Combine SDF search and the ragdoll oracle. Recommended when you opt in. |
| **Collider overlay** | Check collider placement before you edit values. |

Hand anti-penetration is experimental. See [Hand anti-penetration](/MocapSeitai/hand-anti-penetration) for limits and a safe workflow.

## Diagnostics

| Control | Purpose |
| --- | --- |
| **Copy diagnostics** | Copy a report for a bug report. |
| **Open log folder** | Open the application log folder. |
