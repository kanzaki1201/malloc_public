# Quickstart

**Public beta: 0.12.0-beta-1**

MocapSeitai is middleware that helps retarget and correct live motion capture. It receives motion from a tracking app, retargets it for one loaded avatar, and sends corrected VMC data to a receiver app.

::: warning Public beta
MocapSeitai can help but does not guarantee that every motion or avatar will be perfect and free from clipping.
::: 

The trial permits 300 seconds of active streaming in each app session.

## You need

- A Windows PC.
- A VRM avatar (VRM0 and VRM1 are both supported)
- A VMC receiver app.
- One motion capture input. Currently supported inputs: VMC, mocopi, Rokoko.

## Install

1. Extract the whole download archive to a normal folder.
2. Run the application from that folder.
3. When Windows Firewall asks, allow the application on Private networks if your sender or receiver is on your local network.

## First run

1. Start the application.
2. In **Setup** > **Load model**, open the VRM avatar that you use in your receiver app.
3. Select the input mode: **VMC**, **mocopi**, or **Rokoko**.
4. Configure your sender to use the shown input port.
5. Set the output address and port to the VMC receiver. For one-PC use, use `127.0.0.1` as the address.
6. Start motion in the sender. Check that **Messages/s** increases.
7. Load the same VRM file in your receiver app.

The receiver now gets corrected VMC output. If motion does not arrive, see [Troubleshooting](/MocapSeitai/troubleshooting).

## Tune safely

Start with the shipped settings. Use **Display** > **Comparison** to check changes:

- **Off**: show only the corrected avatar.
- **Ghost**: show a comparison overlay.
- **Side by side**: show corrected and source motion together.

Change one control, move through the problem pose, then keep or undo the change. See [Tune your avatar](/MocapSeitai/tuning).


## Save your settings!
You can save your settings in **Setup** tab.

Settings are per-avatar. That means you should not apply the settings for an avatar A on any other character that is not that exact same avatar A. 

Settings are not auto-saved nor auto-loaded. 

