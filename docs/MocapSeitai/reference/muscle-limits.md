# Muscle limits

This is where you clamp how far each joint can rotate, and dial in small per-avatar pose offsets. It's the only main-panel section collapsed by default — treat it as the advanced section, and expect to open it only when a specific joint is popping, hyperextending, or sitting at a slightly wrong angle for your avatar's proportions. It only applies in **Muscle** transfer mode; switching **Transfer mode** to Offset (see [Smoothing](/MocapSeitai/reference/smoothing)) greys out this whole section and the muscle editor side panel.

## Settings

- **Adjust muscles** — opens the muscle range editor side panel (documented below). Opening it closes the collider editor panel if it's open — the two side panels are mutually exclusive.
- **Enable** — keeps each joint inside its allowed range. Applied both after transfer and after arm correction. (default on)
- **Tightness** — scales all muscle ranges around their centers. 1 uses the configured ranges as-is; 0 freezes every joint at its center. Setting this slightly below 1 helps prevent hyperextended, straight-locked limbs — see [Common adjustments](/MocapSeitai/common-adjustments) for tuning recipes. This value is shared with the muscle editor panel's own Tightness slider — editing either one updates both. (default 1, range 0–1)
- **Forearm twist share** — moves part of the hand's twist rotation onto the forearm, while preserving the hand's world rotation. (default 0.35, range 0–1)

<!-- CAPTURE: Muscle limits section expanded, toggling Enable off and on with an arm pushed past its natural range — show the joint popping out of clamp when Enable is off vs held in range when on. ~10s -->
*(media pending)*

### Retarget offsets

A collapsed sub-foldout inside Muscle limits holding six sliders, each -30 to +30 degrees. Use these to calibrate posture per avatar — small constant offsets applied to the retargeted pose, mirrored on both left and right sides.

- **Arm spread** — adjusts how far the arms sit away from the torso.
- **Arm preroll** — adjusts the arm's twist around its long axis before the rest of the pipeline runs.
- **Elbow spread** — adjusts how far the elbows point outward.
- **Leg spread** — adjusts how far apart the legs sit.
- **Shoulder height** — adjusts shoulder height.
- **Shoulder shift** — adjusts shoulder position sideways.

All six default to 0 and share the same -30 to +30 degree range.

::: tip
Retarget offsets are for fixing a consistent posture mismatch on one specific avatar — for example if its rest pose has the arms sitting slightly too close to the body compared to your actor. Save the result to that avatar's map so it comes back next time you load the model.
:::

<!-- CAPTURE: Retarget offsets sub-foldout expanded, dragging Arm spread and Shoulder height sliders with a character on screen — show the visible posture shift. ~10s -->
*(media pending)*

Last in the section, below the Retarget offsets sub-foldout:

- **fingerDirectCopy** — copies finger rotations directly from the actor, bypassing the muscle pipeline entirely. (default on)

## Muscle limits (editor side panel)

Click **Adjust muscles** to open this panel. Like the collider editor, it's mutually exclusive with the collider editor panel — opening one closes the other. The whole column is disabled when Transfer mode is set to Offset, and the per-muscle rows require a loaded avatar to edit.

- **Tightness** — the same global tightness value as the main section's Tightness slider; both controls edit one shared value. (default 1, range 0–1)
- **Arms** — multiplies the global tightness for arm and finger muscles. (default 1, range 0–1)
- **Legs** — multiplies the global tightness for leg muscles. (default 1, range 0–1)
- **Torso** — multiplies the global tightness for torso, neck, head, eye, and jaw muscles. (default 1, range 0–1)

Below the three group multipliers are four foldouts, each listing the individual muscles in that group as dynamic rows. **Arms**, **Legs**, and **Torso** are expanded by default; **Fingers** is collapsed by default.

- **Arms** — one row per Unity humanoid arm muscle (fingers excluded).
- **Legs** — one row per Unity humanoid leg muscle.
- **Torso** — torso, neck, head, eye, and jaw muscles.
- **Fingers** — muscles whose name contains Thumb, Index, Middle, Ring, or Little. Collapsed by default since you'll rarely need to touch individual finger joints.

Each row is labeled with the raw Unity muscle name (English only, not localized) and carries a **Min** / **Max** slider pair plus input fields, ranged -1 to 1. Together they define that muscle's allowed range before the map-wide Tightness and group multipliers scale it. Left at the full -1 to 1 range unless the avatar's map defines a limit for that muscle.

::: warning
If you drag Max below Min (or vice versa), the values are automatically re-clamped and swapped so Min never exceeds Max.
:::

<!-- CAPTURE: Muscle editor side panel open with a character loaded — expand the Arms group, drag a Min/Max pair on one muscle row, show the joint's range visibly tightening in the viewport. ~15s -->
*(media pending)*

::: info
Muscle limits, along with collider edits and correction tuning, are per-avatar and saved into the map file — see **Save map…** / **Load map…** on [Loading your model](/MocapSeitai/reference/loading-your-model).
:::
