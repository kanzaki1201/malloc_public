# Actor body

The **Actor body** section tells MocapSeitai the performer's real-world proportions. The correction
pipeline uses this to place hands and feet in the right physical spot — not just the right bone rotation —
so claps meet, hands land on the face, and reach feels correct even when your body and your VRM avatar are
shaped differently. You'll mostly touch this once, when you set up a tracker whose skeleton proportions
aren't accurate, or when your own measurements change.

::: info
This is a foldout in the main panel, expanded by default.
:::

## Proportions

- **Proportions** — chooses where body measurements come from. **Tracker skeleton** (default) trusts the
  proportions your tracking app reports. **My body** switches to the measurements you enter below — pick
  this when the tracker's skeleton is inaccurate, which is common with mocopi and webcam-based trackers.
  Contact motions like claps come back correctly once the real measurements are in. (default Tracker
  skeleton, choices Tracker skeleton / My body)

::: tip
Height, Arm span, and the whole Detailed foldout below are only editable when Proportions is set to
My body — they're greyed out in Tracker skeleton mode.
:::

## Height and arm span

- **Height (m)** — your real height in meters. If Arm span currently equals Height, editing Height also
  updates Arm span to match, so the two stay in sync until you deliberately set them apart. (default 1.7)
- **Arm span (m)** — fingertip-to-fingertip with arms spread. If you don't know it, height is a reasonable
  stand-in. (default 1.7)

## Detailed

A collapsed sub-foldout holding five finer measurements. Leave any of them at `0` and MocapSeitai derives
it automatically from Height (or from leg proportions, for Knee height) — you only need to fill one in if
the automatic estimate is off for your build.

- **Shoulder width (m)** — (default 0, derived from height)
- **Hip height (m)** — (default 0, derived from height)
- **Hip width (m)** — (default 0, derived from height)
- **Knee height (m)** — (default 0, derived from leg proportions)
- **Forearm length (m)** — fingertip-to-elbow (forearm + hand). This only splits the arm at the elbow into
  an upper-arm and forearm portion — it does not change your total arm length, so it's safe to fill in
  without throwing off Arm span. (default 0)

## Realigning after a change

Changing any Actor body value while the correction loop is running raises a **Body settings changed —
realign actor rig** notice, because the actor rig was built from the old proportions. Click
**Realign actor rig** (in the row above Input, see [the panel at a glance](/MocapSeitai/reference/)) to
rebuild it from the current values and clear the notice — stopping and restarting isn't necessary.

<!-- CAPTURE: switch Proportions from Tracker skeleton to My body while the loop is running, enter Height ~1.7 and watch Arm span follow, open Detailed, then click Realign actor rig to clear the stale-calibration notice — about 20s -->
*(media pending)*

For tuning recipes around getting contact motions to line up, see
[Common adjustments](/MocapSeitai/common-adjustments).
