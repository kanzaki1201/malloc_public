# Tune your avatar

Tune one avatar at a time. Start from the shipped values, then use a short repeatable motion to evaluate each change.

## 1. Load the avatar and sidecar map

Load the avatar first. Load its sidecar map if you already saved one. The map stores per-avatar tuning such as Retarget adjustments and collider edits.

Save the map when the result is good. Do not expect the same map to fit a different avatar.

## 2. Check actor measurements

Set the actor measurements so they describe the tracked person. Incorrect measurements can make retargeting look wrong before fine tuning.

Use the same short motion after each change. A reach, a clap, and a relaxed arm pose are useful checks.

## 3. Adjust retargeting

The public beta uses Offset mode. It has six **Retarget adjustments** for proportion and pose differences between the actor and avatar:

- **Upper-arm spread**
- **Forearm preroll**
- **Upper-arm twist**
- **Upper-leg spread**
- **Shoulder height**
- **Shoulder shift**

1. Set **Comparison** to **Ghost** or **Side by side**.
2. Change one Retarget adjustment by a small amount.
3. Repeat the target motion.
4. Keep the change only when it improves the intended pose without making another common pose worse.

## 4. Tune hand contact separately

Use a clap or face-touch motion to evaluate hand placement. Retarget adjustments help the base pose. They do not replace correct input calibration.

If hands still enter the body, see [Hand anti-penetration](/MocapSeitai/hand-anti-penetration). That feature is experimental.

## 5. Save and verify

Save the sidecar map. Restart the application, then load the avatar and map again. This confirms that the tune is stored where you expect.
