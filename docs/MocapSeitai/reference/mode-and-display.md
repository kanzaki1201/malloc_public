# Mode & display

This section controls the viewport's visual aids and the comparison view — the tools you reach for when you want to *see* what the correction pipeline is doing to the incoming motion, rather than just feel it. It's a foldout in the main panel, expanded by default, sitting between Load model and Actor body.

::: tip
Turn on **Comparison** any time a correction looks wrong and you're not sure whether it's the retargeting or the source motion. Watching the raw and corrected poses side by side is the fastest way to tell.
:::

## Settings

- **Comparison** — dropdown with choices Off / Ghost / Side by side. Shows the uncorrected motion as a ghost or a twin beside the model; the VMC output sent to your renderer stays corrected regardless of what you pick here. This setting is **not persisted** across restarts — it always resets to Off when you relaunch the app. (default Off)
- **Show source skeleton** — toggle. Draws the incoming motion as a stick figure: the raw input before any correction is applied. Useful for confirming what your tracker is actually sending, independent of the retarget pipeline. Persisted. (default off)
- **Show shadow rig** — toggle. Draws the destination-proportioned reference rig used internally as the hand/foot IK targets — this is the skeleton the corrections are steering toward, scaled to your character's proportions. Persisted. (default off)

## Comparison modes in detail

**Off** hides both the ghost and the twin; you just see your corrected character.

**Ghost** overlays the uncorrected pose directly on top of your character, semi-transparent, so you can see exactly how far a hand or foot moved from its raw position. This is the better choice when you want to judge the *magnitude* of a specific correction — for example, how much [hand contact](/MocapSeitai/reference/hand-position-alignment) pulled your hands together for a clap.

**Side by side** renders a second, uncorrected twin next to your character instead of overlapping it. This is easier to read when corrections are large or the poses are visually busy, since the ghost overlay can get cluttered.

Because comparison only changes what you see in the viewport — the corrected stream sent out over VMC is unaffected — it's safe to leave on while performing to a renderer app; your audience never sees the ghost or twin.

::: info
**Show source skeleton** and **Show shadow rig** are independent of Comparison and of each other. You can run all three at once if you're debugging a tricky case: source skeleton shows you the raw tracker data, shadow rig shows you the IK target skeleton, and Comparison shows you the resulting pose delta.
:::

<!-- CAPTURE: Comparison dropdown cycled Off -> Ghost -> Side by side while the actor claps and reaches toward the face; ~10s per mode, character visibly diverging from the raw ghost/twin during hand contact and spatial hand alignment corrections -->
*(media pending)*

<!-- CAPTURE: Show source skeleton and Show shadow rig toggled on together during a squat, showing the raw stick figure vs the corrected character vs the shadow IK rig at differing hip heights -->
*(media pending)*

::: warning
Comparison mode resets to Off every time you restart the app — if you rely on it for a recording session, re-enable it after launch.
:::

For the underlying corrections these views are meant to expose, see [Hand position alignment](/MocapSeitai/reference/hand-position-alignment), [Smoothing](/MocapSeitai/reference/smoothing), and [Colliders](/MocapSeitai/reference/colliders).
