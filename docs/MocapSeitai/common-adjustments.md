# Common Adjustments

Once motion is flowing through MocapSeitai, the defaults get most avatars looking right — but every body is different, and every tracker lies a little. This page collects the tuning recipes you will actually reach for: each one names a problem you can see on screen, then walks the exact controls that fix it. All of these corrections run in both transfer modes, and the tuning you dial in here persists with your avatar through the map file (see the tip at the bottom).

## Pick your transfer mode

Before tuning anything else, make sure the pose is being transferred the right way for your setup. Two settings decide this: **Transfer mode** in the [Smoothing](/MocapSeitai/reference/smoothing) section, and **Proportions** in the [Actor body](/MocapSeitai/reference/actor-body) section.

If your mocap source is accurate — calibrated optical tracking or a good suit — the cleanest combination is:

- **Transfer mode** — set to `Offset`. Offset directly copies bone rotations through the T-pose offset, so precise input passes through with the least interpretation. (default Muscle, choices Muscle / Offset)
- **Proportions** — leave on `Tracker skeleton`, since an accurate tracker reports an accurate skeleton. (default Tracker skeleton, choices Tracker skeleton / My body)

If your source is consumer-grade or imprecise — mocopi, webcam trackers — use `Muscle` instead, which converts the pose through Unity's muscle space and holds up better under noisy input. Keep **Proportions** on `Tracker skeleton` first; if the motion feels off or the proportions feel wrong, switch to `My body` and enter your real measurements:

- **Height (m)** — your real height in meters. (default 1.7)
- **Arm span (m)** — fingertip to fingertip with arms spread; your height is a good stand-in if you don't know it. (default 1.7)

::: info
Why **My body** exists: consumer senders often report inaccurate skeleton proportions, so spatial corrections computed from that skeleton land in the wrong place. Giving MocapSeitai your real measurements brings contact motions — claps, face touches — back to where they belong.
:::

::: warning
Selecting `Offset` greys out the entire [Muscle limits](/MocapSeitai/reference/muscle-limits) section and the muscle editor panel — those only apply in Muscle mode.
:::

## Make claps meet

Bring your hands together in front of you and watch where they land on the model. On a differently-proportioned avatar, raw retargeting makes claps hover apart or overlap into each other. The fix lives in [Hand position alignment](/MocapSeitai/reference/hand-position-alignment):

- **Hand contact** — pulls the hands to a fixed contact distance as they come together, for claps and heart-hands. It is on by default; make sure it stayed on. (default on)
- **Hand contact distance** — the distance between the hands when they meet. Tune this per model until claps look right on *your* avatar: raise it if the hands sink into each other, lower it if they stop short. Negative values are allowed for poses where the hands interleave. (default 0.05, range -0.1 to 0.3 m)

<!-- CAPTURE: before/after clap comparison — Comparison: Ghost enabled, performer claps twice; first shot with Hand contact off (hands miss/overlap), second with Hand contact on and Hand contact distance tuned (clean clap). ~10 s total. -->
*(media pending)*

## Stop hyperextended, straight-locked limbs

If elbows and knees snap dead straight and stick there, the incoming motion is slamming joints into the end of their range. Clamp them slightly short of full extension in [Muscle limits](/MocapSeitai/reference/muscle-limits):

- **Enable** — keeps each joint inside its allowed range, applied both after transfer and after arm correction. On by default. (default on)
- **Tightness** — scales all ranges around their centers; 1 uses the configured ranges, 0 freezes joints at their centers. Set it slightly below 1 — try `0.95` — so limbs stop just short of hyperextension and never lock straight. (default 1, range 0–1)

::: info
This recipe is Muscle mode only — the whole Muscle limits section is greyed out when **Transfer mode** is `Offset`.
:::

## Upper arm clips the torso

Arms resting at your sides sinking into the avatar's chest or belly is the classic proportion mismatch. Two things to check in [Arm anti-penetration](/MocapSeitai/reference/arm-anti-penetration):

First, the avoid matrix. Each arm segment row lists the body parts that segment should avoid. By default the upper arms only avoid the head — so look at the `L upper arm` and `R upper arm` rows and tick **Torso** if it isn't already. (default: forearms avoid Head + Torso; upper arms avoid Head)

Second, how the upper arm is tested:

- **Upper-arm test** — selects how the upper arm is tested against the torso. `Elbow point` only checks the elbow's position — cheaper and stabler. `Full segment` tests the whole upper-arm segment — more thorough, catches mid-segment clipping the point test misses. Try both and pick whichever looks better on your model. (default Elbow point, choices Elbow point / Full segment)

::: warning
Anti-penetration is only as good as the colliders it tests against. If arms still clip, turn on the **Overlay** in the [Colliders](/MocapSeitai/reference/colliders) section and check the capsules roughly fit your avatar's body before tuning further.
:::

<!-- CAPTURE: before/after arm clipping — avatar with a wide torso, performer holds arms at sides then gestures across the chest; first shot with Arm anti-penetration Enable off (upper arm sinks into torso), second with Enable on, Torso ticked for upper arms, Upper-arm test: Full segment. ~12 s. -->
*(media pending)*

## Feet slide, or hips sink on a chibi

Two separate symptoms, two knobs:

- **pinFeet** — how strongly feet are pinned by IK, in [Hand position alignment](/MocapSeitai/reference/hand-position-alignment). Raise it toward 1 for firmly planted feet if they skate across the floor. (default 0.918, range 0–1)
- **Squat body-scale correction** — in the [Smoothing](/MocapSeitai/reference/smoothing) section; scales hip translation by body proportion so squat depth matches. It is on by default — if a chibi model sinks into the floor or floats when you crouch, check this toggle is still on. (default on)

<!-- CAPTURE: feet + squat — chibi avatar; performer side-steps then squats; first shot with pinFeet at 0 and Squat body-scale correction off (feet slide, hips sink through floor), second with pinFeet at 1 and the correction on. ~12 s. -->
*(media pending)*

## Motion is jittery or laggy

Jitter and lag are two ends of one tradeoff, controlled by the **Smoothing** preset in the [Smoothing](/MocapSeitai/reference/smoothing) section:

- **Smoothing** — the bone smoothing preset. `Low latency` follows your motion fastest at the cost of some jitter; `Smooth` filters harder at the cost of lag; `Balanced` sits between. Set `Off` if your receiving app smooths again — double smoothing just stacks latency. (default Balanced, choices Off / Low latency / Balanced / Smooth / Custom)

If you see `Custom` in the dropdown, that means the raw filter values under **Filter details** have been hand-edited; picking a named preset snaps them back.

::: tip
Happy with the result? Click **Save map…** in the Load model section so the whole setup — tuning, muscle limits, and collider edits — rides with your avatar as one JSON file. See [Loading your model](/MocapSeitai/reference/loading-your-model).
:::
