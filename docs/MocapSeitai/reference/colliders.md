# Colliders

MocapSeitai fits a set of tapered-capsule colliders to your VRM's mesh when you load it, and those colliders are what both [Hand anti-penetration](/MocapSeitai/reference/hand-anti-penetration) and [Arm anti-penetration](/MocapSeitai/reference/arm-anti-penetration) test hand and arm positions against, as well as what [Hand position alignment](/MocapSeitai/reference/hand-position-alignment)'s hand contact barrier keeps hands outside of. This section is where you look at those colliders and, if the auto-fit missed on an unusual body shape, reshape them by hand. You'll come back here after loading a new avatar to sanity-check the fit, or whenever a hand still clips the torso even with anti-penetration tuned — the fix is often a collider that's slightly undersized, not a tuning value.

The main panel has a compact overlay control; clicking **Adjust colliders** opens a full editor in a side panel.

::: warning
The nine per-part toggles below are overlay display filters only — they control what you can *see* in the wireframe overlay, not what actually collides. Turning "Legs" off does not disable leg collision.
:::

## Settings

- **Head** — shows or hides the head collider in the wireframe overlay. Display only. (default on)
- **Torso** — shows or hides the torso collider in the wireframe overlay. Display only. (default on)
- **Legs** — shows or hides the leg colliders in the wireframe overlay. Display only. (default on)
- **Left hand** — shows or hides the left hand collider in the wireframe overlay. Display only. (default on)
- **Right hand** — shows or hides the right hand collider in the wireframe overlay. Display only. (default on)
- **Left forearm** — shows or hides the left forearm collider in the wireframe overlay. Display only. (default on)
- **Right forearm** — shows or hides the right forearm collider in the wireframe overlay. Display only. (default on)
- **Left upper arm** — shows or hides the left upper arm collider in the wireframe overlay. Display only. (default on)
- **Right upper arm** — shows or hides the right upper arm collider in the wireframe overlay. Display only. (default on)
- **Overlay** — toggles the wireframe overlay of the body colliders in the 3D view. Turn this on to actually see any of the nine toggles above take effect. (default off)
- **Adjust colliders** — opens the collider editor side panel described below, so you can click a collider in the view and reshape it. Opening it automatically turns Overlay on if it was off. Mutually exclusive with the muscle editor side panel — opening this one closes that one, and vice versa.

<!-- CAPTURE: main panel with Overlay switched on, then each of the nine per-part toggles clicked off one at a time to show the wireframe segments disappearing from the 3D view, roughly 15s -->
*(media pending)*

## Colliders (editor side panel)

Clicking **Adjust colliders** opens this panel to the right of the main panel, titled "Colliders". While it's open, clicking a collider capsule directly in the 3D viewport selects it, same as picking it from the list here.

- **Click a collider in the view to select** — a hint label at the top of the panel; not an interactive control.
- **Group** — filters the collider list below by body region: All, Head, Torso, Legs, Left hand, Right hand, Left forearm, Right forearm, Left upper arm, Right upper arm. Changing it clears the current selection. If you pick a collider in the viewport that's outside the current filter, the filter auto-clears so the selection can show. (default All)
- The collider list itself is a scrollable list of buttons, one per collider, labeled with its display name and group; the selected entry is highlighted.

Once you select a collider (from the list or by clicking it in the view), a group of shape controls appears — they're only visible while a collider is selected:

- **Start radius** — radius at the near end of the capsule. Raise it if the collider is letting a hand or arm pass through near that end; lower it if it's blocking contact that should be allowed. When Uniform radius is on, dragging this also moves the End radius display to match. (default per collider, range 0.005–0.4 m)
- **Uniform radius** — keeps start and end radius equal, for a plain (non-tapered) capsule. While on, End radius is disabled and just mirrors Start radius. Turn it off to taper the collider — the current radius is copied into End radius as the starting point for the split. (default on when the collider has no separate end radius)
- **End radius** — radius at the far end of the capsule, for a tapered shape. Disabled while Uniform radius is on. (default per collider, falls back to Start radius; range 0.005–0.4 m)
- **Half length** — half the capsule's length along its axis. Raise it to cover a longer limb segment, lower it to shrink coverage toward the center. (default per collider, range 0.01–0.6 m)
- **Center X / Center Y / Center Z** — local offset of the collider's center from its bone. Nudge these if the auto-fit collider is off-center relative to the mesh. (default per collider, range -0.3 to 0.3 each)
- **Rotation** — heading label for the three rotation sliders below; local rotation of the selected collider.
- **Rotation X / Rotation Y / Rotation Z** — local Euler rotation of the collider. Use this to align a tapered capsule's axis with a limb that doesn't sit on a straight bone axis. (default per collider, range 0–360 deg)
- **Enabled** — enables or disables the selected collider individually, without touching its shape. (default per collider)
- **Mirror** — copies the selected collider's shape to its left/right counterpart, handling `L`/`R`, `.L`/`.R`, and `_L`/`_R` bone naming automatically. If it can't find a matching counterpart it shows a status message instead of failing silently. Use this to fix one side and mirror it instead of tuning both by hand.

At the bottom of the panel:

::: warning
**Refit** re-fits every collider from the mesh again and discards any manual tweaks you've made — on all colliders, not just the selected one. Use it to start over, not to touch up one collider.
:::

- **Refit** — auto-fits all colliders from the mesh again, clearing the current selection.

<!-- CAPTURE: collider editor panel open, selecting a forearm collider by clicking it in the 3D view, then dragging Start radius and Half length to visibly resize it, roughly 15s -->
*(media pending)*

Collider edits aren't saved automatically to disk — they persist in memory per session and are written out with the rest of the per-avatar map. Use **Save map…** in [Loading your model](/MocapSeitai/reference/loading-your-model) to keep them, and **Load map…** there to bring them back.
