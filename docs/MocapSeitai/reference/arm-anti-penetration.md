# Arm anti-penetration

Correction for the upper arm and forearm. [Hand anti-penetration](/MocapSeitai/reference/hand-anti-penetration) keeps the hand target out of the body, but the arm behind it can still clip through the torso or head on a stocky character. This section searches over the arm's muscle-space degrees of freedom to relax the segment away from a collision while keeping the hand where it landed.

This feature is experimental; the recommended way to fix arm-into-body clipping is Retarget offsets (**Upper-arm spread**) plus [hand anti-penetration](/MocapSeitai/reference/hand-anti-penetration).

## Settings

- **Arm anti-penetration** **(experimental)** master switch. (default off)
- **(arm swivel mask matrix)** for each arm segment row, choose which body parts to avoid. (defaults: forearms avoid Head + Torso, upper arms avoid Head + Torso)
  - Rows: L forearm, R forearm, L upper arm, R upper arm. Columns: Head, Torso, Legs.
  - To disable a stage, untick every column in that row.
- **Max deviation** maximum angle searched away from the solved arm pose. Raise if an arm still clips; lower to keep corrections subtle. (default 120, range 5 to 120 degrees)
- **Max speed** maximum change speed for the applied arm angle. 0 = unlimited (instant snap). Set a finite value if the correction popping on/off is distracting. (default 0, range 0 to 720 deg/s)
- **Upper-arm test** how the upper arm is tested against the torso. Try both and compare. (default Elbow point)
  - **Elbow point** checks a single point at the elbow (cheaper, stabler).
  - **Full segment** tests the whole capsule (more thorough).
- **Upper-arm gap** extra gap outside avoided body parts for the upper-arm stage. Also decides when the correction kicks in. Negative shrinks the effective arm thickness used by the check. (default 0, range -0.05 to 0.05 m)
- **Forearm gap** same margin, for the forearm stage. Negative shrinks the effective arm thickness used by the check. (default 0, range -0.05 to 0.05 m)
- **Swivel clear target** how much clearance counts as "safe"; corrections stop once the arm is this far from the body. (default 0.025, range 0 to 0.05 m)
- **Swivel min orbit** below this elbow orbit radius (arm nearly straight) the correction has no visible effect and stays off. (default 0.05, range 0 to 0.1 m)
- **Swivel blend half-life** how quickly a visible correction change settles; 0 is instant. (default 0.205, range 0 to 0.5 s)
- **External bias** head start given to outward (external) arm rotations when candidates tie; counters a round-shoulder look. (default 15, range 0 to 45 degrees)
- **Release motion min** below this source-arm speed a correction holds instead of releasing. (default 15, range 0 to 180 deg/s)
- **Release motion max** at or above this speed a release runs at full speed; releases hide inside your real motion. (default 90, range 0 to 360 deg/s)

::: tip
If an elbow or forearm still clips with Arm anti-penetration on, first check the mask matrix. A forearm set to avoid only Head won't react to torso collision. Then try widening Max deviation.
:::

::: info
This stage searches in muscle space and only adjusts the arm. The hand target set by [Hand position alignment](/MocapSeitai/reference/hand-position-alignment) and [Hand anti-penetration](/MocapSeitai/reference/hand-anti-penetration) is not moved.
:::

Both stages read the same body colliders from [Colliders](/MocapSeitai/reference/colliders). If an arm clips where gap settings alone can't fix it, the collider shape is usually the better place to fix it.

Tuning persists per-avatar via the map.

<!-- CAPTURE: Arm anti-penetration section toggled off vs on, same clip-prone pose (e.g. arm crossed tight against the torso) shown both ways to demonstrate the correction. ~10s -->
*(media pending)*

<!-- CAPTURE: Upper-arm test set to Elbow point vs Full segment on the same clipping pose, showing the difference in how cleanly the upper arm clears the torso. ~10s -->
*(media pending)*
