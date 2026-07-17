# UI Reference

One window, five tabs. This page walks it top to bottom. Every control also shows these descriptions as hover tooltips in the editor.

## Header

Always visible above the tabs.

| Control | What it does |
| --- | --- |
| **Humanoid Character** | Character root to operate on. Collider generation, humanoid bone assignment, and symmetry copy need an Animator rigged as Humanoid — a warning shows if it's missing. |
| **Binding Map** | The asset that stores a captured cloth setup for this character: MagicaCloth components, colliders, references, reduction settings, and prebuild state. |
| **New** | Creates a binding map asset for the assigned character and captures the current setup into it. The asset is created next to the character's prefab/model file. |
| **Scan** | Re-scans the character for MagicaCloth components, colliders, and renderers. Runs automatically when you assign a character. |
| **Capture Map** | Saves the character's current MagicaCloth setup into the binding map, replacing its previous content. |
| **Restore Map** | Applies the binding map to the character. Missing objects and components are re-created; references are repaired by relative path, falling back to unique object names. |
| **Select All Colliders** | Selects every MagicaCloth collider under the character in the Hierarchy. |

## Overview tab

Read-only summary: character and Animator names, counts of MagicaCloth components / colliders / renderers found by the scan, plus the binding map's captured counts when one is assigned. **Select Cloth Components** / **Select Colliders** grab them all in the Hierarchy.

## Bindings tab

Inspects the assigned binding map entry by entry. Each cloth binding folds out to its captured references (renderers, root bones, colliders, collision bones); each row shows a resolve status against the current character:

| Status | Meaning |
| --- | --- |
| **Exact** | Found at the captured path. |
| **Fallback** | Captured path is gone; matched a unique object with the same name instead. |
| **Ambiguous** | Several objects match the captured name. Resolve manually, then re-capture. |
| **Missing** | No object matches the captured path or name. **Restore Map** can re-create it. |

**Select** jumps to the resolved object.

<!-- CAPTURE: screenshot — Bindings tab with one cloth binding expanded, showing mixed Exact/Fallback statuses. -->
*(media pending)*

## Colliders tab

### Humanoid Auto Creation

Generates MagicaCloth colliders across the humanoid skeleton: capsules between bone pairs (e.g. upper arm to lower arm), spheres on end bones (head, hands, feet). Generated objects are children of their bone, named `MC2H_<part>`.

| Control | What it does |
| --- | --- |
| **Include Fingers** | Also generates colliders for finger bones, two per finger. Useful when cloth should collide with hands. |
| **Overwrite Existing** | Regenerates `MC2H_` colliders from scratch, resetting size and placement. Disable to only add missing colliders and keep your manual tweaks. |
| **Capsule Radius** | Capsule radius as a fraction of the bone segment length. |
| **Sphere Radius** | Sphere radius as a fraction of the distance to the neighboring bone. |
| **Length** | Multiplier on the bone segment length used for capsule length. |
| **Minimum Radius** | Lower bound for any generated radius, in meters. Prevents degenerate colliders on very short bones. |
| **Body Part Shapes** | Sphere or capsule per body part: torso, head, upper/lower arm, hand, upper/lower leg, foot, finger. |
| **Create / Update Humanoid Colliders** | Runs the generator with the settings above and selects the resulting colliders. |

### Collider list

Every MagicaCloth collider under the character, editable in place — no Inspector hopping.

| Control | What it does |
| --- | --- |
| **Select** | Highlights the collider in the Hierarchy. |
| **Copy To Symmetry** | Copies this collider's values to the mirrored collider on the other side of the body, creating it there if missing. Mirroring uses humanoid bones first, then Left/Right name patterns (`_L_`/`_R_`, `.L`/`.R`, …). |
| **Active** | Toggles the collider's GameObject. |
| **Local Position / Rotation / Scale** | Collider transform relative to its parent bone. |
| **Symmetry / Symmetry Target** | MagicaCloth 2's own symmetry mode — while set, MagicaCloth mirrors edits onto the target. |
| **Direction** *(capsule)* | Local axis the capsule extends along. |
| **Separate Radii / Start Radius / End Radius** *(capsule)* | Independent cap radii for limbs that taper. |
| **Radius / Length** | Shape size in meters. Slider ranges grow automatically for larger values. |
| **Reverse** *(capsule)* | Flips which end is the start cap. |
| **Aligned Center** *(capsule)* | Centers the capsule on the transform instead of extending from it. |

## Cloth tab

One block per MagicaCloth component under the character. **Type** and **Prebuild** are editable; reference counts are shown below them. The three button rows bulk-assign references (each **replaces** the current list):

| Row | Buttons |
| --- | --- |
| Renderers | **All Renderers** (everything under the character) / **Selected Renderers** (under the Hierarchy selection) / **Clear Renderers** |
| Root bones | **Humanoid Bones** (hips, spine, chest, upper legs, upper arms) / **Selected Bones** / **Clear Bones** |
| Colliders | **All Colliders** / **Selected Colliders** / **Clear Colliders** |

## Prebuild tab

MagicaCloth prebuild data skips runtime cloth building for faster startup.

| Control | What it does |
| --- | --- |
| **Create Prebuild Data For Enabled Components** | Builds prebuild data for every cloth component with prebuild enabled. |
| *(checkbox)* | Enables prebuild for that component. |
| **Create** | Builds prebuild data for that component now. Creates the prebuild asset next to the binding map when none is assigned yet. |
| **Build ID / Asset / Unique Data** | Read-only view of the component's current prebuild state. |

Recreate prebuild data after changing cloth settings — stale data means the old behavior keeps playing.
