# Settings reference

This page lists the controls in the current public-beta UI. Some controls appear only for the selected input, transfer mode, or hand anti-penetration mode.

## Controls outside the tabs

| Control | Purpose |
| --- | --- |
| **Language** | Select English or Japanese for the app UI. |
| **Expand all**, **Collapse all** | Open or close every foldout in the app panel. |
| **Seitai corrections** | Enable or bypass the Seitai correction pipeline. |
| **Realign actor rig** | Rebuild the actor rig from the current incoming skeleton. Use it after actor body settings change. |
| **Realign character rig** | Rebuild the character pipeline without reloading the model. |

The upper-right status area shows the loop state, input status, message rate, seen addresses, and send drops. These values are read-only.

## Setup

### Input

| Control | Purpose |
| --- | --- |
| **Input mode** | Select **VMC**, **mocopi**, or **Rokoko**. |
| **VMC listen port** | Receive VMC motion. In mocopi and Rokoko modes, this port remains available for VMC blendshape forwarding. |
| **mocopi port** | Receive mocopi data. This field is active only in mocopi mode. |
| **Rokoko port** | Receive Rokoko Studio data. This field is active only in Rokoko mode. |
| **Rokoko actor name** | Follow one Rokoko actor. Leave it empty to use the first actor. This field is active only in Rokoko mode. |
| **Forward VMC blendshapes** | Forward blendshapes received on the VMC port while mocopi or Rokoko supplies body motion. Check the receiving app because the preview may not show them. |
| **Register firewall rule (admin)** | Register the Windows firewall rule for the app executable. Windows shows a UAC prompt. |

### Output

| Control | Purpose |
| --- | --- |
| **VMC send address** | Set the receiver IP address. Use `127.0.0.1` for a receiver on the same PC. |
| **VMC send port** | Set the VMC port used by the receiving app. |

### Load model

| Control | Purpose |
| --- | --- |
| **Open model…** | Select and load a VRM avatar. The model card shows its title and author when that metadata is available. |

### Save settings

| Control | Purpose |
| --- | --- |
| **Save settings** | Save tuning and collider values for the loaded avatar. |
| **Load settings** | Select and apply a settings file. No settings file is loaded automatically. |

Use a separate settings file for each avatar.

## Smoothing

### Smoothing

| Control | Purpose |
| --- | --- |
| **Smoothing** | Select **Off**, **Low latency**, **Balanced**, **Smooth**, or **Custom**. Use Off if the receiving app applies its own smoothing. |

### Filter details

These controls edit the One Euro bone filter directly.

| Control | Purpose |
| --- | --- |
| **boneFilterMinCutoff** | Set the minimum cutoff. A lower value is smoother but adds more delay. |
| **boneFilterBeta** | Set how strongly the filter responds to fast motion. A higher value follows fast motion more closely. |
| **boneFilterDCutoff** | Set the cutoff for the speed signal used by the filter. |

## Retarget

### Retarget adjustments

These controls work in Offset and Muscle transfer modes. See [Retarget adjustments](/MocapSeitai/retarget-adjustments) for the tuning workflow.

| Control | Purpose |
| --- | --- |
| **Squat body-scale correction** | Scale hip translation by the actor-to-avatar body proportion. |
| **Forearm twist share** | Move part of wrist twist to the forearm while keeping the hand world rotation. |
| **Upper-arm spread** | Adjust both upper arms in the down-up direction. |
| **Forearm preroll** | Adjust twist on both forearms. |
| **Upper-arm twist** | Adjust twist on both upper arms. |
| **Upper-leg spread** | Adjust both upper legs in the in-out direction. |
| **Shoulder height** | Move both shoulders up or down. |
| **Shoulder shift** | Move both shoulders forward or backward. |

### Muscle limits

This foldout appears only in Muscle mode.

| Control | Purpose |
| --- | --- |
| **Adjust muscles** | Open the muscle-range editor panel. |
| **Enable** | Keep each joint inside its configured muscle range. |
| **Tightness** | Scale all ranges around their centers. `1` uses the configured ranges; `0` holds each range at its center. |
| **fingerDirectCopy** | Copy finger rotations directly without the muscle pipeline. |

The muscle-range editor contains these controls:

| Control | Purpose |
| --- | --- |
| **Tightness** | Edit the same global value as the Muscle limits foldout. |
| **Arms**, **Legs**, **Torso** | Multiply the global tightness for each body group. Fingers use the Arms multiplier. |
| **Arms**, **Legs**, **Torso**, **Fingers** foldouts | Set the minimum and maximum range for each muscle. |

## Spatial Hand

### Hand position alignment

See [Spatial hands](/MocapSeitai/spatial-hands) for the tuning workflow.

| Control | Purpose |
| --- | --- |
| **Alignment strength** | Set the strength of spatial hand placement. `0` uses rotation copy only. |
| **handSpatialScale** | Scale the distance of spatial hand movement. |
| **spatialXZOnly** | Restrict spatial placement to the horizontal XZ plane. |
| **Shoulder vs head** | Select the hand-position anchor. `0` is shoulder-based and `1` is head-based. |
| **Hand IK** | Set how strongly IK pins the hands to their spatial targets. |
| **Feet IK** | Set how strongly IK pins the feet. |

## Display

### Mode & display

| Control | Purpose |
| --- | --- |
| **Comparison** | Select **Off**, **Ghost**, or **Side by side**. Ghost and Side by side show uncorrected motion for comparison; VMC output remains corrected. |
| **Show source skeleton** | Draw the incoming skeleton before correction. |
| **Show shadow rig** | Draw the avatar-proportioned reference rig used for hand and foot IK targets. |

## Experimental

See [Experimental features](/MocapSeitai/experimental-features) before you enable these controls.

### Transfer mode

| Control | Purpose |
| --- | --- |
| **Mode: Offset** | Copy bone rotations through the T-pose offset. This is the public-beta default. |
| **Mode: Muscle** | Convert the pose through Unity muscles. Muscle limits become available in the Retarget tab. |

### Colliders

| Control | Purpose |
| --- | --- |
| **Overlay** | Show or hide the body-collider wireframe. |
| **Head**, **Torso**, **Legs**, and limb group toggles | Filter which collider groups the overlay draws. These toggles do not enable or disable collision. |
| **Adjust colliders** | Open the collider editor. Select a collider in the list or click it in the viewport. |

The collider editor contains these controls:

| Control | Purpose |
| --- | --- |
| **Group** | Filter the collider list by body group. |
| **Shape** | Show the selected collider shape. The shape is read-only. |
| **Start radius**, **Uniform Radius**, **End radius**, **Half Length** | Edit a capsule. Uniform Radius keeps both radii equal. |
| **Half extent X**, **Half extent Y**, **Corner radius** | Edit a rounded box. These controls replace the capsule controls for that shape. |
| **Center X**, **Center Y**, **Center Z** | Move the selected collider in local space. |
| **Rotation X**, **Rotation Y**, **Rotation Z** | Rotate the selected collider in local space. |
| **Enabled** | Enable or disable the selected collider. |
| **Mirror** | Copy the selected collider values to its opposite-side partner. |
| **Refit** | Fit all colliders from the avatar mesh again. This discards manual collider edits. |

### Hand alignment

| Control | Purpose |
| --- | --- |
| **Hand contact (experimental)** | Pull the hands toward the configured separation when they approach each other. |
| **Hand contact distance** | Set the separation kept while hand contact is active. |

### Hand anti-penetration

| Control | Purpose |
| --- | --- |
| **Mode** | Select **Off**, **SdfSearch**, **Ragdoll**, or **Hybrid**. Off is the shipped default. Hybrid is the recommended experimental opt-in. |

The selected mode controls which settings appear:

| Control | Shown in | Purpose |
| --- | --- | --- |
| **Finger correction** | SdfSearch, Ragdoll, Hybrid | Bend fingers away from selected body colliders. |
| **Palm alignment** | SdfSearch, Hybrid | Turn a contacting palm toward the surface when its orientation is already close. |
| **Slab includes thumb** | SdfSearch, Hybrid | Include the thumb in the hand slab used for position correction. |
| **Mesh depth correction** | SdfSearch, Hybrid | Use the avatar mesh to refine the signed-distance correction. |
| **Refine clamp (m)**, **Refine gap (m)** | SdfSearch, Hybrid | Limit mesh refinement and set its resting gap. These fields are active when Mesh depth correction is on. |
| **Gap** | SdfSearch, Ragdoll, Hybrid | Set the base clearance from collider surfaces. |
| **Max release speed (m/s)** | SdfSearch, Ragdoll, Hybrid | Limit how fast a corrected hand catches up after release. `0` releases immediately. |
| **Slew (deg/s)** | SdfSearch, Ragdoll, Hybrid | Limit how fast a hand target rotates around a collider. |
| **Ragdoll spring**, **Ragdoll damper** | Ragdoll, Hybrid | Tune the ragdoll guide response. |
| **Ragdoll hand size**, **Ragdoll arm size** | Ragdoll, Hybrid | Scale the guide colliders used by the ragdoll solver. |
| Hand collision matrix | SdfSearch, Ragdoll, Hybrid | Select which collider groups each hand target, palm, and finger correction tests. |

## Info

### Diagnostics

| Control | Purpose |
| --- | --- |
| **Copy diagnostics** | Copy a diagnostics report for a bug report. |
| **Open log folder** | Open the app log folder. |

### Reset

| Control | Purpose |
| --- | --- |
| **Reset settings** | Restore tuning controls to their defaults. Collider edits are kept. |
