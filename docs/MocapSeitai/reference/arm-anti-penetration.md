# Arm anti-penetration

This is the correction stage for the rest of the arm. [Hand anti-penetration](/MocapSeitai/reference/hand-anti-penetration) keeps the hand target itself out of the body, but a hand target sitting cleanly in space doesn't guarantee the upper arm or forearm behind it does too — on a stocky character, or with wide shoulder-to-hand reaches, the elbow or forearm can still clip straight through the torso or head. This section runs a small search over the arm's muscle-space degrees of freedom to relax the segment away from a collision while keeping the hand exactly where it landed. You'll come here whenever you see an arm poking through the body in the corrected output, or when you want to trade search quality for CPU cost.

The **Arm anti-penetration** foldout sits between Hand anti-penetration and Colliders, and is expanded by default.

## Settings

- **Enable** — master switch for arm anti-penetration. Turn it off to compare corrected against uncorrected arm behavior, or if you don't need it for a particular avatar. (default on)
- **(arm swivel mask matrix)** — for each arm segment row, choose which body parts that segment should avoid. Rows are L forearm, R forearm, L upper arm, R upper arm; columns are the same nine body-part groups used throughout the app (Head, Torso, Legs, L hand, R hand, L forearm, R forearm, L upper arm, R upper arm). Defaults: forearms avoid Head + Torso, upper arms avoid Head.
- **Max deviation** — the maximum angle searched away from the solved arm pose. Raise it if an arm still clips even with the stage enabled — the search needs more room to find a clear pose. Lower it to keep corrections subtle and closer to the original motion. (default 120, range 5–120 degrees)
- **Max speed** — the maximum change speed for the applied arm angle. 0 means unlimited, letting the correction snap instantly when a collision starts or ends. Set a finite value if a sudden pop as an arm enters or leaves a collider is distracting, at the cost of a short lag before the arm fully clears. (default 0 = unlimited, range 0–720 deg/s)
- **Upper arm** — enables the upper-arm anti-penetration stage. (default on)
- **Forearm** — enables the forearm anti-penetration stage. (default on)
- **Upper-arm test** — how the upper arm is tested against the torso: **Elbow point** checks a single point at the elbow, which is cheaper and more stable; **Full segment** tests the whole upper-arm capsule, which is more thorough but costs more to evaluate. If you're not sure which to use, try both and compare — see the recipe in [Common adjustments](/MocapSeitai/common-adjustments). (default Elbow point)
- **Upper-arm gap** — extra gap kept outside the avoided body parts for the upper-arm stage; this margin also decides when the correction kicks in in the first place. (default 0.015, range 0–0.05 m)
- **Forearm gap** — the same margin, for the forearm stage. (default 0.015, range 0–0.05 m)
- **Arm anti-pen max candidates** — the search budget: the maximum number of candidate poses the arm anti-penetration search evaluates. Higher tries harder and finds better solutions in tricky poses, but costs more CPU. Lower it if arm correction is contributing to frame drops. (default 600, range 50–2000)

::: tip
If an elbow or forearm is still visibly clipping with **Enable** on, first check that the offending body part is actually included in that segment's row of the mask matrix — a forearm set to avoid only Head won't react to a torso collision. From there, widening **Max deviation** or raising **Arm anti-pen max candidates** gives the search more room and more attempts to find a clean pose.
:::

::: info
This stage searches in muscle space and only ever adjusts the arm — the hand target set by [Hand position alignment](/MocapSeitai/reference/hand-position-alignment) and [Hand anti-penetration](/MocapSeitai/reference/hand-anti-penetration) is not moved. It corrects what happens between the shoulder and the hand, not the hand itself.
:::

Both stages, and the mask matrix, read the same body colliders you can inspect and reshape in [Colliders](/MocapSeitai/reference/colliders). If an arm is clipping somewhere the gap settings alone can't fix, the underlying collider shape is usually the better place to fix it.

Tuning here persists per-avatar via the map, the same as hand anti-penetration and colliders.

<!-- CAPTURE: Arm anti-penetration section with Enable toggled off vs on, same clip-prone pose (e.g. arm crossed tight against the torso) shown both ways to demonstrate the correction. ~10s -->
*(media pending)*

<!-- CAPTURE: Upper-arm test set to Elbow point vs Full segment on the same clipping pose, showing the difference in how cleanly the upper arm clears the torso. ~10s -->
*(media pending)*
