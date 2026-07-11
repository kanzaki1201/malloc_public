# Colliders

MocapSeitai fits tapered-capsule colliders to your VRM's mesh on load. These are what [Hand anti-penetration](/MocapSeitai/reference/hand-anti-penetration), [Arm anti-penetration](/MocapSeitai/reference/arm-anti-penetration), and [Hand position alignment](/MocapSeitai/reference/hand-position-alignment)'s contact barrier test against. Check them after loading a new avatar; if a hand still clips the torso with anti-penetration tuned, the fix is often a collider that's undersized.

The main panel has a compact overlay control; clicking **Adjust colliders** opens a full editor in a side panel.

::: warning
The nine per-part toggles below are overlay display filters only. They control what you *see* in the wireframe, not what collides. Turning "Legs" off does not disable leg collision.
:::

## Settings

- **Head** show/hide in wireframe overlay. (default on)
- **Torso** show/hide in wireframe overlay. (default on)
- **Legs** show/hide in wireframe overlay. (default on)
- **Left hand** show/hide in wireframe overlay. (default on)
- **Right hand** show/hide in wireframe overlay. (default on)
- **Left forearm** show/hide in wireframe overlay. (default on)
- **Right forearm** show/hide in wireframe overlay. (default on)
- **Left upper arm** show/hide in wireframe overlay. (default on)
- **Right upper arm** show/hide in wireframe overlay. (default on)
- **Overlay** toggles the wireframe overlay in the 3D view. (default off)
- **Adjust colliders** opens the collider editor side panel. Automatically turns Overlay on. Mutually exclusive with the muscle editor.

<!-- CAPTURE: main panel with Overlay switched on, then each of the nine per-part toggles clicked off one at a time to show the wireframe segments disappearing from the 3D view, roughly 15s -->
*(media pending)*

## Colliders (editor side panel)

Click **Adjust colliders** to open. Clicking a capsule in the 3D viewport selects it, same as picking from the list.

- **Group** filters the collider list by body region: All, Head, Torso, Legs, Left hand, Right hand, Left forearm, Right forearm, Left upper arm, Right upper arm. Changing it clears the selection. Clicking a collider outside the current filter auto-clears the filter. (default All)

Once you select a collider, shape controls appear:

- **Start radius** radius at the near end. When Uniform radius is on, also moves End radius. (default per collider, range 0.005 to 0.4 m)
- **Uniform radius** keeps start and end equal (non-tapered capsule). Turn off to taper. (default on when no separate end radius)
- **End radius** radius at the far end. Disabled while Uniform radius is on. (default per collider, range 0.005 to 0.4 m)
- **Half length** half the capsule's length along its axis. (default per collider, range 0.01 to 0.6 m)
- **Center X / Y / Z** local offset from the bone. (default per collider, range -0.3 to 0.3)
- **Rotation X / Y / Z** local Euler rotation. (default per collider, range 0 to 360 deg)
- **Enabled** enable/disable the selected collider without touching its shape. (default per collider)
- **Mirror** copies the shape to its left/right counterpart (`L`/`R`, `.L`/`.R`, `_L`/`_R` naming). Shows a status message if no match is found.

At the bottom:

- **Refit** re-fits every collider from the mesh, discarding all manual tweaks on all colliders. Use to start over, not to touch up one collider.

::: warning
Refit discards all manual edits on all colliders, not just the selected one.
:::

<!-- CAPTURE: collider editor panel open, selecting a forearm collider by clicking it in the 3D view, then dragging Start radius and Half length to visibly resize it, roughly 15s -->
*(media pending)*

Collider edits persist in memory per session but are only written to disk via **Save map...** in [Loading your model](/MocapSeitai/reference/loading-your-model).
