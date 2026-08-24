# Troubleshooting

## Messages/s stays at 0

1. Check that the selected input mode matches your sender.
2. Check the sender port against the value in the application.
3. Allow the application through Windows Firewall on Private networks.
4. Close another application that uses the same port, then restart the application.

## The receiver does not move

1. Check the output address and port.
2. For a one-PC setup, use `127.0.0.1` for output.
3. Check that the receiver accepts VMC input.
4. Load the same VRM file in the receiver and in MocapSeitai.

## The pose looks wrong

1. Use **Ghost** or **Side by side** comparison in **Display** tab to see the difference from source motion.
2. Realign. See [Realign](#Realign)
3. Check the actor measurements and the six **Retarget adjustments**.
4. Make sure you use a separate settings for each avatar.
5. Turn off experimental features.
## Realign

Use the buttons in the upper-right corner when a rig needs a rebuild:

- **Realign actor rig** (source rig): Use this after you recalibrate the sender or switch its tracked model. MocapSeitai reads the incoming skeleton again and rebuilds the source baseline. 
- **Realign character rig**: Use this when the loaded avatar still has an incorrect pose. 


## Hand anti-penetration gives an unwanted pose

Hand anti-penetration is experimental. It can change hand motion and cannot solve every fast motion or model shape.

1. Set the mode to **Off** to confirm that the feature causes the result.
2. Start again with **Hybrid**.
3. Check the collider overlay and correct the collider fit if needed.
4. Test the pose with **Side by side** comparison.

See [Hand anti-penetration](/MocapSeitai/hand-anti-penetration).

## A saved tune does not load

The per-avatar sidecar map stores avatar tuning. It does not apply automatically to every model.

1. Extract the application archive before you run it.
2. Save the sidecar map after tuning.
3. Load the matching sidecar map with the matching avatar.

## Windows blocks the application

The build can show a SmartScreen warning because it is unsigned. Select **More info**, then select **Run anyway** if you trust the download source.

## Send a useful bug report

Use **Copy diagnostics**, then paste the result into a [bug report](/bug-report). Include the input mode, receiver app, avatar type, and steps that reproduce the problem.
