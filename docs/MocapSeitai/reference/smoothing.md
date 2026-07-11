# Smoothing

Transfer mode and bone smoothing. Set these once per setup, come back if the motion looks jittery or laggy. Foldout between Actor body and Muscle limits, expanded by default.

## Settings

- **Transfer mode** how the actor's pose is converted onto your character. (default Muscle)
  - **Muscle** converts through Unity's humanoid muscle space.
  - **Offset** directly copies bone rotations through the T-pose offset. Greys out [Muscle limits](/MocapSeitai/reference/muscle-limits) and the muscle editor panel.
  - Corrections run in both modes. Global app setting; loading a map never changes it. See [Common adjustments](/MocapSeitai/common-adjustments) for picking.
- **Smoothing** bone-smoothing preset: **Off** / **Low latency** / **Balanced** / **Smooth** / **Custom**. (default Balanced)

  ::: tip
  Set **Off** if your receiving app already smooths the pose. Stacking two smoothers just adds lag.
  :::

  ::: info
  **Custom** is a read-back state, not something you pick. It appears once you've hand-edited the Filter details sliders. To get back to a named preset, just pick one.
  :::

- **Squat body-scale correction** scales hip translation by body proportion so squat depth matches. Without it, a chibi character can sink through the floor or float when you squat. (default on)
- **Filter details** collapsed sub-foldout with the raw One-Euro filter parameters behind the Smoothing preset. Editing any of these flips the dropdown to Custom.
  - **boneFilterMinCutoff** minimum cutoff. Lower is smoother but laggier. (default 1, range 0 to 10)
  - **boneFilterBeta** responsiveness to fast motion. Higher follows faster motion more closely. (default 0.5, range 0 to 5)
  - **boneFilterDCutoff** cutoff for the filter's speed signal. Rarely needs changing. (default 1, range 0.01 to 10)

  ::: info
  Preset values for reference: Off sets minCutoff to 0; Low latency uses 2.5 / 1.0; Balanced uses 1 / 0.5; Smooth uses 0.6 / 0.3.
  :::

<!-- CAPTURE: Transfer mode dropdown switched from Muscle to Offset, showing the Muscle limits section and muscle editor panel grey out in real time. ~8s -->
*(media pending)*

<!-- CAPTURE: Smoothing preset dropdown cycled through Off / Low latency / Balanced / Smooth on a moving actor, showing the visible difference in follow lag/jitter at each step. ~15s -->
*(media pending)*

<!-- CAPTURE: Filter details expanded, dragging boneFilterMinCutoff by hand while Smoothing preset flips from Balanced to Custom. ~8s -->
*(media pending)*
