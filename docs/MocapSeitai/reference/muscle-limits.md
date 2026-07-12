# Muscle limits

Joint-range clamping and per-avatar pose offsets. Only applies in **Muscle** transfer mode; switching to Offset (see [Smoothing](/MocapSeitai/reference/smoothing)) greys out this section and the muscle editor panel.

## Settings

- **Adjust muscles** opens the muscle range editor side panel (documented below). Closes the collider editor if open.
- **Enable** keeps each joint inside its allowed range. Applied after transfer and after arm correction. (default on)
- **Tightness** scales all muscle ranges around their centers. 1 uses configured ranges as-is; 0 freezes every joint at center. (default 1, range 0 to 1)
- **Forearm twist share** moves part of the hand's twist rotation onto the forearm while preserving the hand's world rotation. (default 0.35, range 0 to 1)

<!-- CAPTURE: Muscle limits section expanded, toggling Enable off and on with an arm pushed past its natural range — show the joint popping out of clamp when Enable is off vs held in range when on. ~10s -->
*(media pending)*

### Retarget offsets

Small constant offsets applied to the retargeted pose, mirrored left/right. Use these to calibrate posture per avatar. All default 0, range -30 to +30 degrees.

- **Arm spread** how far arms sit from the torso.
- **Arm preroll** arm twist around its long axis before the rest of the pipeline.
- **Elbow spread** how far elbows point outward.
- **Leg spread** how far apart the legs sit.
- **Shoulder height** shoulder height offset.
- **Shoulder shift** shoulder position sideways.

::: tip
Retarget offsets fix a consistent posture mismatch on one avatar (e.g. rest pose arms too close to the body). Save the result to that avatar's map.
:::

<!-- CAPTURE: Retarget offsets sub-foldout expanded, dragging Arm spread and Shoulder height sliders with a character on screen — show the visible posture shift. ~10s -->
*(media pending)*

- **fingerDirectCopy** copies finger rotations directly from the actor, bypassing the muscle pipeline. (default on)

## Muscle limits (editor side panel)

Click **Adjust muscles** to open. Mutually exclusive with the collider editor panel. Disabled when Transfer mode is Offset. Per-muscle rows require a loaded avatar.

- **Tightness** same value as the main section's slider; both controls edit one shared value. (default 1, range 0 to 1)
- **Arms** multiplier for arm and finger muscles. (default 1, range 0 to 1)
- **Legs** multiplier for leg muscles. (default 1, range 0 to 1)
- **Torso** multiplier for torso, neck, head, eye, and jaw muscles. (default 1, range 0 to 1)

Individual muscles are grouped under **Arms**, **Legs**, **Torso**, and **Fingers**. Each is labeled with the raw Unity muscle name (English only) and has a **Min** / **Max** pair (range -1 to 1) defining its allowed range before Tightness and group multipliers scale it.

::: warning
Dragging Max below Min (or vice versa) auto-swaps them so Min never exceeds Max.
:::

<!-- CAPTURE: Muscle editor side panel open with a character loaded — expand the Arms group, drag a Min/Max pair on one muscle row, show the joint's range visibly tightening in the viewport. ~15s -->
*(media pending)*

::: info
Muscle limits, collider edits, and correction tuning are per-avatar and saved into the map file. See [Loading your model](/MocapSeitai/reference/loading-your-model).
:::
