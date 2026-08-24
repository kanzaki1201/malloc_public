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
2. Click **Realign character rig** button on the top right.
3. Click **Realign actor rig** button on the top right.
4. Check the actor measurements and the six **Retarget adjustments**.
5. Make sure you use a separate settings for each avatar.
6. Turn off experimental features.

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
