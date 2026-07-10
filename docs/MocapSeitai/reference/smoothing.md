# Smoothing

This is where you pick how motion gets transferred onto your character and how much it gets smoothed before it's sent out. You'll usually set these once per setup, then come back if the motion looks jittery, laggy, or if your receiving app is smoothing it a second time. The **Smoothing** foldout sits between Actor body and Muscle limits, and is expanded by default.

::: info
The panel's runtime title is "Smoothing" — some 0.9.x beta builds may still show the older title "Smoothing / correction" or "VMC Seitai" elsewhere in the app; the settings themselves are the same.
:::

## Settings

- **Transfer mode** — chooses how the actor's pose is converted onto your character. **Muscle** converts through Unity's humanoid muscle space; **Offset** directly copies bone rotations through the T-pose offset instead. Corrections (spatial hands, anti-penetration, squat scaling, and so on) run in both modes. Selecting Offset greys out the entire [Muscle limits](/MocapSeitai/reference/muscle-limits) section, its Retarget offsets sub-foldout, and the muscle editor side panel — none of that applies when you're not going through muscle space. This is a global app setting: loading a map never changes it. For guidance on which mode to pick, see [Common adjustments](/MocapSeitai/common-adjustments). (default Muscle)
- **Smoothing** — a bone-smoothing preset: **Off** / **Low latency** / **Balanced** / **Smooth** / **Custom**. (default Balanced)

  ::: tip
  Set **Off** if your receiving app (VSeeFace, VNyan, Warudo, etc.) already smooths the pose itself — stacking two smoothers just adds extra lag for no benefit.
  :::

  ::: info
  **Custom** is a read-back state, not something you pick. The dropdown shows it automatically once you've hand-edited any of the Filter details sliders below; selecting Custom directly does nothing. To get back to a named preset, just pick one — that overwrites your custom filter values with the preset's.
  :::

- **Squat body-scale correction** — scales hip translation by your character's body proportion so squat depth matches between actor and character. Without it, a chibi or otherwise differently-proportioned character can sink through the floor or float above it when you squat, because a raw hip-height copy doesn't account for the leg-length difference. (default on)
- **Filter details** — a sub-foldout, collapsed by default, holding the raw One-Euro filter parameters behind the Smoothing preset. Editing any of these flips the Smoothing dropdown to Custom.
  - **boneFilterMinCutoff** — the One-Euro filter's minimum cutoff. Lower is smoother but laggier. (default 1, range 0–10)
  - **boneFilterBeta** — responsiveness to fast motion; higher follows faster motion more closely. (default 0.5, range 0–5)
  - **boneFilterDCutoff** — cutoff for the filter's speed signal. Rarely needs changing. (default 1, range 0.01–10)

  ::: info
  Preset filter values, for reference: Off sets minCutoff to 0 (no smoothing); Low latency uses 2.5 / 1.0; Balanced uses 1 / 0.5 (the defaults); Smooth uses 0.6 / 0.3. Beta and dCutoff track along with whichever preset you pick, except where noted.
  :::

<!-- CAPTURE: Transfer mode dropdown switched from Muscle to Offset, showing the Muscle limits section and muscle editor panel grey out in real time. ~8s -->
*(media pending)*

<!-- CAPTURE: Smoothing preset dropdown cycled through Off / Low latency / Balanced / Smooth on a moving actor, showing the visible difference in follow lag/jitter at each step. ~15s -->
*(media pending)*

<!-- CAPTURE: Filter details expanded, dragging boneFilterMinCutoff by hand while Smoothing preset flips from Balanced to Custom. ~8s -->
*(media pending)*
