# Actor body

The performer's real-world proportions. The correction pipeline uses these to place hands and feet in the right physical spot, so claps meet and hands land on the face even when your body and avatar are shaped differently.

## Proportions

- **Proportions** chooses where body measurements come from. (default Tracker skeleton)
  - **Tracker skeleton** trusts the proportions your tracking app reports.
  - **My body** uses the measurements you enter below. Pick this when the tracker's skeleton is inaccurate (common with mocopi and webcam trackers).

::: tip
Height, Arm span, and Detailed are only editable when Proportions is set to My body.
:::

## Height and arm span

- **Height (m)** your real height in meters. If Arm span currently equals Height, editing Height also updates Arm span to match. (default 1.7)
- **Arm span (m)** fingertip-to-fingertip with arms spread. Height is a reasonable stand-in if you don't know it. (default 1.7)

## Detailed

Five finer measurements. Leave any at `0` and MocapSeitai derives it from Height (or leg proportions for Knee height). Only fill one in if the automatic estimate is off for your build.

- **Shoulder width (m)** (default 0, derived from height)
- **Hip height (m)** (default 0, derived from height)
- **Hip width (m)** (default 0, derived from height)
- **Knee height (m)** (default 0, derived from leg proportions)
- **Forearm length (m)** fingertip-to-elbow (forearm + hand). Only splits the arm at the elbow; does not change total arm length. (default 0)

## Realigning after a change

After changing anything about the actor body (dimensions, or switching to a new tracking source), press both **Realign Actor Rig** and **Realign Character Rig** (see [Loading your model](/MocapSeitai/reference/loading-your-model)). A **Body settings changed** notice appears when values change while the loop is running; realigning clears it. No need to stop and restart.

<!-- CAPTURE: switch Proportions from Tracker skeleton to My body while the loop is running, enter Height ~1.7 and watch Arm span follow, open Detailed, then click Realign actor rig to clear the stale-calibration notice — about 20s -->
*(media pending)*

For tuning recipes around contact motions, see [Common adjustments](/MocapSeitai/common-adjustments).
