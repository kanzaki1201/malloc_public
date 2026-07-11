# Common Adjustments

Defaults get most avatars looking right, but every body is different. This page collects tuning recipes: each one names a problem you can see on screen, then the controls that fix it. All corrections run in both transfer modes. Tuning persists per avatar through the map file (see tip at the bottom).

## Pick your transfer mode

Two settings decide how the pose is transferred: **Transfer mode** in [Smoothing](/MocapSeitai/reference/smoothing), and **Proportions** in [Actor body](/MocapSeitai/reference/actor-body).

For accurate sources (calibrated optical tracking, good suit):

- **Transfer mode** set to `Offset`. Directly copies bone rotations through the T-pose offset, so precise input passes through with the least interpretation. (default Muscle)
- **Proportions** left on `Tracker skeleton`, since an accurate tracker reports an accurate skeleton. (default Tracker skeleton)

For consumer-grade or imprecise sources (mocopi, webcam trackers), use `Muscle` instead. It converts through Unity's muscle space and holds up better under noisy input. Keep **Proportions** on `Tracker skeleton` first. If the motion feels off, switch to `My body` and enter your real measurements:

- **Height (m)** (default 1.7)
- **Arm span (m)** (default 1.7, your height is a good stand-in)

::: info
**My body** exists because consumer senders often report inaccurate skeleton proportions, so spatial corrections land in the wrong place. Entering your real measurements brings contact motions (claps, face touches) back to where they belong.
:::

::: warning
Selecting `Offset` greys out the entire [Muscle limits](/MocapSeitai/reference/muscle-limits) section and the muscle editor panel.
:::

## Make claps meet

Bring your hands together and watch where they land on the model. The fix is in [Hand position alignment](/MocapSeitai/reference/hand-position-alignment):

- **Hand contact** pulls the hands to a fixed contact distance as they come together. On by default. (default on)
- **Hand contact distance** is the gap between the hands when they meet. Raise it if the hands sink into each other, lower it if they stop short. Negative values are allowed for poses where the hands interleave. (default 0.05, range -0.1 to 0.3 m)

<!-- CAPTURE: before/after clap comparison — Comparison: Ghost enabled, performer claps twice; first shot with Hand contact off (hands miss/overlap), second with Hand contact on and Hand contact distance tuned (clean clap). ~10 s total. -->
*(media pending)*

## Stop hyperextended, straight-locked limbs

If elbows and knees snap dead straight and stick, the incoming motion is hitting end-of-range. Clamp them in [Muscle limits](/MocapSeitai/reference/muscle-limits):

- **Enable** keeps each joint inside its allowed range. On by default. (default on)
- **Tightness** scales all ranges around their centers. Set it slightly below 1 (try `0.95`) so limbs stop just short of hyperextension. (default 1, range 0 to 1)

::: info
Muscle mode only. The whole Muscle limits section is greyed out when **Transfer mode** is `Offset`.
:::

## Upper arm clips the torso

Arms resting at your sides sinking into the chest is the classic proportion mismatch. Two things to check in [Arm anti-penetration](/MocapSeitai/reference/arm-anti-penetration):

First, the avoid matrix. Look at the `L upper arm` and `R upper arm` rows and tick **Torso** if it isn't already. (default: forearms avoid Head + Torso; upper arms avoid Head only)

Second, how the upper arm is tested:

- **Upper-arm test** selects how the upper arm is tested against the torso. `Elbow point` checks the elbow's position only (cheaper, stabler). `Full segment` tests the whole upper-arm capsule (more thorough, catches mid-segment clipping). Try both and pick whichever looks better. (default Elbow point)

::: warning
Anti-penetration depends on accurate colliders. If arms still clip, turn on **Overlay** in [Colliders](/MocapSeitai/reference/colliders) and check the capsules fit your avatar's body before tuning further.
:::

<!-- CAPTURE: before/after arm clipping — avatar with a wide torso, performer holds arms at sides then gestures across the chest; first shot with Arm anti-penetration Enable off (upper arm sinks into torso), second with Enable on, Torso ticked for upper arms, Upper-arm test: Full segment. ~12 s. -->
*(media pending)*

## Feet slide, or hips sink on a chibi

- **pinFeet** in [Hand position alignment](/MocapSeitai/reference/hand-position-alignment): how strongly feet are pinned by IK. Raise toward 1 for firmly planted feet. (default 0.918, range 0 to 1)
- **Squat body-scale correction** in [Smoothing](/MocapSeitai/reference/smoothing): scales hip translation by body proportion so squat depth matches. On by default. (default on)

<!-- CAPTURE: feet + squat — chibi avatar; performer side-steps then squats; first shot with pinFeet at 0 and Squat body-scale correction off (feet slide, hips sink through floor), second with pinFeet at 1 and the correction on. ~12 s. -->
*(media pending)*

## Motion is jittery or laggy

Controlled by the **Smoothing** preset in [Smoothing](/MocapSeitai/reference/smoothing):

- `Low latency` follows motion fastest, some jitter.
- `Balanced` sits between.
- `Smooth` filters harder, more lag.
- `Off` if your receiving app smooths again (double smoothing just stacks latency).
- `Custom` appears when the raw filter values under **Filter details** have been hand-edited.

(default Balanced)

::: tip
Happy with the result? Click **Save map...** in the Load model section so the whole setup (tuning, muscle limits, collider edits) rides with your avatar as one JSON file. See [Loading your model](/MocapSeitai/reference/loading-your-model).
:::
