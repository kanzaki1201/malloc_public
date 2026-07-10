# Quickstart

MocapSeitai is a correction box you drop into your existing VMC chain. Your tracking app (anything that speaks the VMC protocol, or Sony mocopi / Rokoko Studio Live sending directly) streams motion in, MocapSeitai retargets it onto **your** VRM avatar with body-proportion-aware corrections, and sends the corrected VMC stream out to your renderer — VSeeFace, VNyan, Warudo, or any other app that accepts VMC. Nothing else in your setup changes; you just point the two ends at MocapSeitai instead of at each other.

What it fixes is the stuff raw retargeting gets wrong when the performer and the avatar have different proportions: hands that miss the face, claps that never quite meet, arms clipping through the torso, hips sinking into the floor on chibi models. The correction pipeline — spatial hand alignment, hand contact, hand and arm anti-penetration, squat body-scale correction, muscle limits — handles those automatically, and you can tune each part per avatar.

<!-- CAPTURE: hero before/after clip — Comparison set to "Side by side", performer does a face-touch and a clap on a small-proportioned avatar; uncorrected twin misses the face and the clap, corrected model lands both. ~10 s loop. -->
*(media pending)*

::: info
Version 0.9.x is a beta — the panel header may still show the old title **VMC Seitai**. Same app.
:::

## Requirements

- Windows 10 or 11, 64-bit.
- A mocap source that outputs VMC protocol — or Sony mocopi / Rokoko Studio Live sending directly to MocapSeitai.
- A receiver app that accepts VMC: VSeeFace, VNyan, Warudo, and similar.
- Your avatar as a VRM file. VRM 0.x and VRM 1.0 are both supported.

No Unity install is needed — MocapSeitai is a standalone app.

## Install

::: tip Download
Get MocapSeitai on Booth. <!-- VERIFY: Booth item URL -->
:::

1. Extract the **whole zip** to a folder before running. If you run the exe from inside the zip preview window, your settings will not save.
2. Windows SmartScreen will warn on first launch because the build is unsigned. Click **More info**, then **Run anyway**.
3. On first launch, Windows Firewall asks for network access. Allow it for **Private networks** — without this, tracking data never arrives.

## First run

The golden path below uses VMC input, which is the default. Everything runs on one PC.

1. Run the MocapSeitai executable.
2. Load your avatar: click **Open model…** in the **Load model** section and pick your VRM file. The model's title and author appear once it loads.
3. Point your tracking app's VMC output at this PC, port **39539**. That matches MocapSeitai's **Listen port** default in the **Input** section, so you don't need to change anything on this side.
4. Set up the output in the **Output** section: leave **Send address** at `127.0.0.1` when everything runs on the same PC, and leave **Send port** at **39540**. Set your receiver app to *listen* on port 39540.
5. Press **Start**.
6. Check the **Status** section: **Messages/s** should be counting up. If it stays at 0, see [Troubleshooting](/MocapSeitai/troubleshooting).

Your avatar should now be moving with corrections applied.

<!-- CAPTURE: screenshot of the main panel after a successful first run — Input (VMC mode, Listen port 39539), Output (127.0.0.1 / 39540), Load model showing a loaded VRM's title/author card, Status line showing Running with Messages/s counting. -->
*(media pending)*

::: warning Load the same VRM in your receiver
MocapSeitai sends bone data for the model **it** has loaded. Load the exact same VRM file in your receiver app as in MocapSeitai, or the motion will land on the wrong proportions and everything the corrections fixed comes back.
:::

To actually see what the corrections are doing, set **Comparison** in the **Mode & display** section to **Ghost** or **Side by side** — it shows the uncorrected motion as a ghost overlay or a twin next to your model, while the VMC output stays corrected. Details in [Mode & display](/MocapSeitai/reference/mode-and-display).

<!-- CAPTURE: short clip — Comparison dropdown switched Off → Ghost → Side by side while motion is running; ghost overlay visibly diverges from the corrected model on a face-touch. ~8 s. -->
*(media pending)*

## Using mocopi or Rokoko directly

If your source is Sony mocopi or Rokoko Studio Live, you don't need a VMC bridge: switch **Input mode** in the **Input** section from **VMC** to **mocopi** or **Rokoko**, and the matching port field appears (**mocopi port** 12351, **Rokoko port** 14043). Point the sender at this PC and that port. Details, including face-blendshape forwarding, are on the [Connections](/MocapSeitai/reference/connections) page.

## Next steps

Your avatar moves — now make it move like itself. [Common adjustments](/MocapSeitai/common-adjustments) is the follow-up page: tuning recipes for the corrections, matched to what you see on screen. Save your tuning per avatar with **Save map…** in the **Load model** section (see [Loading your model](/MocapSeitai/reference/loading-your-model)) — app settings themselves save automatically about a second after you change them.

For a control-by-control tour of the panel, start at the [Reference](/MocapSeitai/reference/), and if something isn't working, go to [Troubleshooting](/MocapSeitai/troubleshooting).
