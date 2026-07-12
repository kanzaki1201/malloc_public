# Arm anti-penetration

Correction for the upper arm and forearm. [Hand anti-penetration](/MocapSeitai/reference/hand-anti-penetration) keeps the hand target out of the body, but the arm behind it can still clip through the torso or head on a stocky character. This section searches over the arm's muscle-space degrees of freedom to relax the segment away from a collision while keeping the hand where it landed.

## Settings

- **Enable** master switch. (default on)
- **(arm swivel mask matrix)** for each arm segment row, choose which body parts to avoid. (defaults: forearms avoid Head + Torso, upper arms avoid Head)
  - Rows: L forearm, R forearm, L upper arm, R upper arm. Columns: the nine body-part groups.
- **Max deviation** maximum angle searched away from the solved arm pose. Raise if an arm still clips; lower to keep corrections subtle. (default 120, range 5 to 120 degrees)
- **Max speed** maximum change speed for the applied arm angle. 0 = unlimited (instant snap). Set a finite value if the correction popping on/off is distracting. (default 0, range 0 to 720 deg/s)
- **Upper arm** enables upper-arm anti-penetration. (default on)
- **Forearm** enables forearm anti-penetration. (default on)
- **Upper-arm test** how the upper arm is tested against the torso. Try both and compare. (default Elbow point)
  - **Elbow point** checks a single point at the elbow (cheaper, stabler).
  - **Full segment** tests the whole capsule (more thorough).
- **Upper-arm gap** extra gap outside avoided body parts for the upper-arm stage. Also decides when the correction kicks in. (default 0.015, range 0 to 0.05 m)
- **Forearm gap** same margin, for the forearm stage. (default 0.015, range 0 to 0.05 m)
- **Arm anti-pen max candidates** search budget: maximum candidate poses evaluated. Higher tries harder but costs more CPU. Lower if arm correction contributes to frame drops. (default 600, range 50 to 2000)

::: tip
If an elbow or forearm still clips with Enable on, first check the mask matrix. A forearm set to avoid only Head won't react to torso collision. Then try widening Max deviation or raising max candidates.
:::

::: info
This stage searches in muscle space and only adjusts the arm. The hand target set by [Hand position alignment](/MocapSeitai/reference/hand-position-alignment) and [Hand anti-penetration](/MocapSeitai/reference/hand-anti-penetration) is not moved.
:::

Both stages read the same body colliders from [Colliders](/MocapSeitai/reference/colliders). If an arm clips where gap settings alone can't fix it, the collider shape is usually the better place to fix it.

Tuning persists per-avatar via the map.

<!-- CAPTURE: Arm anti-penetration section with Enable toggled off vs on, same clip-prone pose (e.g. arm crossed tight against the torso) shown both ways to demonstrate the correction. ~10s -->
*(media pending)*

<!-- CAPTURE: Upper-arm test set to Elbow point vs Full segment on the same clipping pose, showing the difference in how cleanly the upper arm clears the torso. ~10s -->
*(media pending)*
