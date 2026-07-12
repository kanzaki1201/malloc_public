# Quickstart

MocapSeitai sits between your tracking app and your renderer in a VMC chain. It retargets motion onto your VRM avatar with body-proportion-aware corrections, then sends the corrected stream out. Your tracking app sends VMC (or mocopi/Rokoko data) in, your renderer receives corrected VMC out.

The correction pipeline handles spatial hand alignment, hand contact, hand and arm anti-penetration, squat body-scale correction, and muscle limits. Each part is tunable per avatar.

<!-- CAPTURE: hero before/after clip — Comparison set to "Side by side", performer does a face-touch and a clap on a small-proportioned avatar; uncorrected twin misses the face and the clap, corrected model lands both. ~10 s loop. -->
*(media pending)*

## Requirements

- Windows 10 or 11, 64-bit.
- A mocap source that outputs VMC protocol, or Sony mocopi / Rokoko Studio Live.
- A receiver app that accepts VMC (VSeeFace, VNyan, Warudo, etc.).
- Your avatar as a VRM file (0.x and 1.0 both supported).

No Unity install needed.

## Install

::: tip Download
Get MocapSeitai on Booth. <!-- VERIFY: Booth item URL -->
:::

1. Extract the **whole zip** to a folder before running. Running from inside the zip preview window will not save your settings.
2. Windows SmartScreen will warn on first launch (the build is unsigned). Click **More info**, then **Run anyway**.
3. On first launch, Windows Firewall asks for network access. Allow it for **Private networks**.

## First run

Everything runs on one PC.

1. Run the MocapSeitai executable.
2. Load your avatar: click **Open model…** in the **Load model** section and pick your VRM file.
3. Set up the input:
   - **VMC** (the default **Input mode**): in your tracking app, set VMC output to this PC on port **39539** (matches MocapSeitai's default **Listen port**).
   - **mocopi** / **Rokoko**: switch **Input mode** accordingly and point the sender at the port shown (mocopi default **12351**, Rokoko default **14043**). See [Connections](/MocapSeitai/reference/connections) for details.
4. In the **Output** section, leave **Send address** at `127.0.0.1` for same-PC setups. Set **Send port** to match your receiver app's listen port (default **39540**).
5. Press **Start**.
6. Check the **Status** section: **Messages/s** should be counting up. If it stays at 0, see [Troubleshooting](/MocapSeitai/troubleshooting).
7. Click **Realign actor rig** and **Realign character rig** to make sure the rigs are aligned to the current pose.

Your avatar should now be moving with corrections applied.

<!-- CAPTURE: screenshot of the main panel after a successful first run — Input (VMC mode, Listen port 39539), Output (127.0.0.1 / 39540), Load model showing a loaded VRM's title/author card, Status line showing Running with Messages/s counting. -->
*(media pending)*

::: warning Load the same VRM in your receiver
MocapSeitai sends bone data for the model it has loaded. Load the exact same VRM in your receiver app, or the corrected proportions won't match.
:::

<!-- CAPTURE: short clip — Comparison dropdown switched Off → Ghost → Side by side while motion is running; ghost overlay visibly diverges from the corrected model on a face-touch. ~8 s. -->
*(media pending)*

## Next steps

To see what the corrections are doing, set **Comparison** in **Mode & display** to **Ghost** or **Side by side**. Details in [Mode & display](/MocapSeitai/reference/mode-and-display).

To tune the corrections for your avatar, see [Common adjustments](/MocapSeitai/common-adjustments). Save your tuning per avatar with **Save map…** in **Load model** (see [Loading your model](/MocapSeitai/reference/loading-your-model)). App settings save automatically.

For a control-by-control tour, start at [Reference](/MocapSeitai/reference/). If something isn't working, see [Troubleshooting](/MocapSeitai/troubleshooting).
