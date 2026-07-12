# Common Adjustments

Quick fixes for common problems you can see on screen. For full control descriptions, see the individual [reference](/MocapSeitai/reference/) pages. Tuning persists per avatar through the map file (Save map in [Load model](/MocapSeitai/reference/loading-your-model)).

## Pick your transfer mode

Stay on `Muscle` (the default). `Offset` is a legacy mode; only try it if you experience serious trouble in Muscle mode.

If using `My body` proportions (under [Actor body](/MocapSeitai/reference/actor-body)), enter your real height and arm span so spatial corrections land in the right place.

See [Smoothing](/MocapSeitai/reference/smoothing) and [Actor body](/MocapSeitai/reference/actor-body).

## Claps don't meet

Turn on **Hand contact** and adjust **Hand contact distance** until claps look right. Raise if hands overlap, lower if they stop short.

See [Hand position alignment](/MocapSeitai/reference/hand-position-alignment).

## Hyperextended, straight-locked limbs

Lower **Tightness** slightly (try `0.95`) in [Muscle limits](/MocapSeitai/reference/muscle-limits). Muscle mode only.

## Upper arm clips the torso

In Muscle mode, try increasing **Arm spread** in Retarget offsets ([Muscle limits](/MocapSeitai/reference/muscle-limits)) first. A small increment is often enough.

If that's not sufficient, go to [Arm anti-penetration](/MocapSeitai/reference/arm-anti-penetration): tick **Torso** in the `L upper arm` / `R upper arm` rows, and try **Upper-arm test** `Full segment` if `Elbow point` still clips.

## Feet slide

Raise **pinFeet** toward 1 in [Hand position alignment](/MocapSeitai/reference/hand-position-alignment).

## Hips sink on a chibi

Check **Squat body-scale correction** is on in [Smoothing](/MocapSeitai/reference/smoothing).

## Motion is jittery or laggy

Try a different **Smoothing** preset in [Smoothing](/MocapSeitai/reference/smoothing). `Low latency` follows faster with some jitter, `Smooth` filters harder with more lag, `Balanced` sits between.

::: tip
Happy with the result? Click **Save map...** in Load model so the whole setup rides with your avatar as one JSON file. See [Loading your model](/MocapSeitai/reference/loading-your-model).
:::
