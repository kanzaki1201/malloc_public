# Hand anti-penetration

::: warning Experimental feature
Hand anti-penetration is a best-effort correction. It can reduce some hand-to-body intersections, but it can change the hand pose. It cannot solve every avatar shape, input quality level, or fast motion.
:::

The shipped default is **Off**. Enable it only after you tune the base retargeting.

## Choose a mode

| Mode          | Description                                                             |
| ------------- | ----------------------------------------------------------------------- |
| **SdfSearch** | Forward search of a hand placement that minimizes collider penetration. |
| **Ragdoll**   | Uses ragdoll for hands.                                                 |
| **Hybrid**    | SDF search but when the result is ambiguous, consult ragdoll.           |

**Hybrid** is the recommended opt-in mode for this public beta. It is still experimental.

## Basic workflow

1. Tune actor measurements and Retarget adjustments first.
2. Adjust colliders using **Overlay** and **Adjust Colliders**
3. Click on each collider to adjust them. 
4. Click **Adjust Colliders** and **Overlay** again to leave collider editing
5. Select **Hybrid**.
6. Reproduce the hand-to-body pose that you want to improve.
7. Check the result at normal and fast motion speed.
8. Keep the mode only if the new pose is better for your use case.

## Check colliders

The feature uses avatar colliders. Turn on the collider overlay before you change collider values. A collider that does not match the model can give a worse result.

Save collider edits in the avatar settings file. Test that map only with the avatar that it was made for.

## Known limits

- Fast hand motion can still produce a bad result.
- A correction can trade clipping for a different hand pose.
- Clothing, accessories, and unusual avatar shapes can need manual collider work.
- The feature does not guarantee no clipping.

If the result is worse, set the mode back to **Off** and report the pose with diagnostics.
