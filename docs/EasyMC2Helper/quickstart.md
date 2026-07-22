# Quickstart

Easy MC2 Helper is a Unity editor tool that saves and loads your entire [MagicaCloth 2](https://assetstore.unity.com/packages/tools/physics/magica-cloth-2-242307) setup: snapshot components, simulation parameters, colliders, references, and prebuild data into a **binding map** asset, and restore everything in one click after a broken prefab or re-import. The same window manages prebuild data, bulk-wires renderers/bones/colliders into cloth components, and — as a bonus — generates and batch-edits humanoid body colliders.

<!-- CAPTURE: hero clip — broken prefab (missing references) next to helper window; click "Restore Map" and the full cloth setup comes back. ~8 s loop. -->
*(media pending)*

## Requirements

- Unity **2021.3 or newer**.
- **MagicaCloth 2** imported in your project at `Assets/MagicaCloth2` (paid asset — not included).
- A character with a **Humanoid** Animator for collider generation and symmetry features. Everything else works on any rig.

## Install

::: tip Download
Get Easy MC2 Helper free (donations welcome) on Booth. <!-- VERIFY: Booth item URL -->
:::

**From Booth:** import `EasyMC2Helper-x.y.z.unitypackage` into your project (`Assets > Import Package > Custom Package…`). It lands in `Assets/EasyMC2Helper`.

**Via Unity Package Manager:** `Window > Package Manager > + > Install package from git URL…`

```text
https://github.com/kanzaki1201/EasyMC2Helper.git
```

Import MagicaCloth 2 **before** the helper, or you'll see assembly reference errors until it's in (see [Troubleshooting](/EasyMC2Helper/troubleshooting)).

## First run

1. Open **Tools > Easy MC2 Helper**.
2. Drag your character's root into **Humanoid Character**.
3. Go to the **Colliders** tab and click **Create / Update Humanoid Colliders**. Capsules and spheres appear on the skeleton, named with the `MC2H_` prefix.
4. Tweak radii with the sliders, or edit individual colliders in the list below the generator. **Copy To Symmetry** mirrors a hand-tuned collider to the other side.
5. On the **Cloth** tab, assign colliders to your cloth components with **All Colliders** (or select some in the Hierarchy and use **Selected Colliders**).
6. Back in the header, click **New** to create a **binding map**, then **Capture Map**. Your whole setup — components, references, and simulation parameters (same scope as MagicaCloth's own presets) — is now stored in an asset. **Restore Map** brings it back after a broken prefab, re-import, or on a fresh copy of the character.

<!-- CAPTURE: screenshot — Colliders tab after generation: settings block on top, generated collider list below, avatar with visible capsule gizmos in Scene view. -->
*(media pending)*

Every control in the window has a hover tooltip. For the full tour, see the [UI Reference](/EasyMC2Helper/ui-reference).
