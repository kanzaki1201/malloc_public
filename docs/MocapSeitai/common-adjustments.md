# Common Adjustments

Quick fixes for common problems you can see on screen. Defaults are a good starting point, but every model needs some tuning. For full control descriptions, see the individual [reference](/MocapSeitai/reference/) pages. Tuning persists per avatar through the map file (Save map in [Load model](/MocapSeitai/reference/loading-your-model)).

## First: tune retarget offsets

Posture depends on three things at once: your mocap input, your body, and the model. No default fits every combination, and getting this right fixes most clipping.

Open **Retarget offsets** in [Muscle limits](/MocapSeitai/reference/muscle-limits) and adjust the sliders until the pose looks natural on your avatar. **Arm spread** is the usual first knob if arms sit too close to the torso.

## Then: tune hand alignment

Same three-way dependency. Adjust these in [Hand position alignment](/MocapSeitai/reference/hand-position-alignment) to your needs:

- **Alignment strength** how strongly hands are placed at their spatial target.
- **Shoulder vs head** anchor blend: toward 1 for face touches to land accurately, toward 0 for contacts that should track the torso.

## Hyperextended, straight-locked limbs

Lower **Tightness** slightly (try `0.95`) in [Muscle limits](/MocapSeitai/reference/muscle-limits).

## Upper arm clips the torso

Try increasing **Arm spread** in Retarget offsets first (see above). A small increment is often enough.

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
