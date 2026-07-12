# Mode & display

Visual aids and comparison view for seeing what the correction pipeline is doing.

## Settings

- **Comparison** Off / Ghost / Side by side. Shows the uncorrected motion as a ghost or twin. Not persisted across restarts. (default Off)
- **Show source skeleton** draws the incoming motion as a stick figure: the raw input before any correction. (default off, persisted)
- **Show shadow rig** draws the destination-proportioned reference rig used as hand/foot IK targets. (default off, persisted)

## Comparison modes

**Off** hides both ghost and twin; you just see your corrected character.

**Ghost** overlays the uncorrected pose on top of your character, semi-transparent. Better for judging the magnitude of a specific correction (e.g. how much hand contact pulled your hands together).

**Side by side** renders a second, uncorrected twin next to your character. Easier to read when corrections are large or poses are visually busy.

Comparison only changes viewport display. The corrected VMC stream is unaffected, so it's safe to leave on while performing.

::: tip
Turn on Comparison when a correction looks wrong and you're not sure whether it's the retargeting or the source motion.
:::

::: info
Show source skeleton and Show shadow rig are independent of Comparison and each other. You can run all three at once for debugging: source skeleton shows raw tracker data, shadow rig shows the IK target skeleton, Comparison shows the resulting pose delta.
:::

<!-- CAPTURE: Comparison dropdown cycled Off -> Ghost -> Side by side while the actor claps and reaches toward the face; ~10s per mode, character visibly diverging from the raw ghost/twin during hand contact and spatial hand alignment corrections -->
*(media pending)*

<!-- CAPTURE: Show source skeleton and Show shadow rig toggled on together during a squat, showing the raw stick figure vs the corrected character vs the shadow IK rig at differing hip heights -->
*(media pending)*

::: warning
Comparison resets to Off every time you restart the app.
:::

For the underlying corrections, see [Hand position alignment](/MocapSeitai/reference/hand-position-alignment), [Smoothing](/MocapSeitai/reference/smoothing), and [Colliders](/MocapSeitai/reference/colliders).
