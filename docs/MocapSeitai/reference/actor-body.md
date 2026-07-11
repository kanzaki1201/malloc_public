# Actor body

The performer's real-world proportions. The correction pipeline uses these to place hands and feet in the right physical spot, so claps meet and hands land on the face even when your body and avatar are shaped differently. Foldout in the main panel, expanded by default.

## Proportions

- **Proportions** chooses where body measurements come from. **Tracker skeleton** trusts the proportions your tracking app reports. **My body** uses the measurements you enter below. Pick My body when the tracker's skeleton is inaccurate (common with mocopi and webcam trackers). (default Tracker skeleton)

::: tip
Height, Arm span, and the Detailed foldout below are only editable when Proportions is set to My body.
:::

## Height and arm span

- **Height (m)** your real height in meters. If Arm span currently equals Height, editing Height also updates Arm span to match. (default 1.7)
- **Arm span (m)** fingertip-to-fingertip with arms spread. Height is a reasonable stand-in if you don't know it. (default 1.7)

## Detailed

Collapsed sub-foldout with five finer measurements. Leave any at `0` and MocapSeitai derives it from Height (or leg proportions for Knee height). Only fill one in if the automatic estimate is off for your build.

- **Shoulder width (m)** (default 0, derived from height)
- **Hip height (m)** (default 0, derived from height)
- **Hip width (m)** (default 0, derived from height)
- **Knee height (m)** (default 0, derived from leg proportions)
- **Forearm length (m)** fingertip-to-elbow (forearm + hand). Only splits the arm at the elbow; does not change total arm length. (default 0)

## Realigning after a change

Changing any Actor body value while the loop is running shows a **Body settings changed** notice. Click **Realign actor rig** (in the row above Input, see [the panel at a glance](/MocapSeitai/reference/)) to rebuild from the current values and clear the notice. No need to stop and restart.

<!-- CAPTURE: switch Proportions from Tracker skeleton to My body while the loop is running, enter Height ~1.7 and watch Arm span follow, open Detailed, then click Realign actor rig to clear the stale-calibration notice — about 20s -->
*(media pending)*

For tuning recipes around contact motions, see [Common adjustments](/MocapSeitai/common-adjustments).
