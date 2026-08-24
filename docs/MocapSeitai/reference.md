# Settings reference

This page lists the public-beta controls by tab.

## Setup

| Foldout | Control | Purpose |
| --- | --- | --- |
| **Input** | **Input mode** | Select VMC, mocopi, Rokoko, or VMC SlimeVR. |
| **Input** | **VMC listen port**, **mocopi port**, **Rokoko port** | Set the receiving port for the selected input. |
| **Input** | **Actor name** | Select a Rokoko Studio actor. Leave it empty to use the first actor. |
| **Input** | **Forward VMC blendshapes** | Forward VMC blendshapes. Check the receiving app because the preview may not show them. |
| **Input** | **Register firewall rule (admin)** | Register the Windows firewall rule for the app. |
| **Output** | **VMC send address**, **VMC send port** | Set the receiver address and port. Use `127.0.0.1` for a receiver on the same PC. |
| **Model** | **Open model…** | Load the VRM avatar. |
| **Save settings** | **Save settings**, **Load settings** | Save or load tuning and collider settings for the loaded avatar. |

The upper-right buttons rebuild a rig: **Realign actor rig** rebuilds from the incoming skeleton; **Realign character rig** rebuilds the character pipeline without reloading the model.

## Other tabs

| Tab | Main controls |
| --- | --- |
| **Smoothing** | Smoothing preset and optional filter details. |
| **Retarget** | Retarget adjustments. In Muscle mode, it also shows Muscle limits and **Adjust muscles**. |
| **Spatial Hand** | Hand position alignment, hand spatial scale, anchor selection, and hand and foot IK. |
| **Display** | Comparison, source skeleton, and shadow rig. |
| **Experimental** | Transfer mode, colliders, hand contact, and hand anti-penetration. See [Experimental features](/MocapSeitai/experimental-features). |
| **Info** | Copy diagnostics and open the log folder. |