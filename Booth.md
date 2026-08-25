# MocapSeitai 0.12.0-beta-1 | Live Motion Retargeting Middleware

MocapSeitai is a Windows application for live humanoid motion capture.
It receives motion from VMC, mocopi, or Rokoko, retargets it to one VRM avatar, and sends corrected VMC data to a receiver application.

This public beta is for creators who want to tune hand-to-face poses and varied hand motion for a specific avatar.
Start with Offset mode, the beta default, then save settings for that avatar.

## Main features

- **Offset transfer mode**: the default transfer mode for this beta.
- **Six Retarget adjustments**: tune consistent arm, leg, and shoulder pose differences between the tracked actor and your avatar.
- **Spatial Hand**: place avatar hands from their position relative to the tracked actor's head or shoulders, then use hand IK for the target.
- **VMC output**: send corrected motion to your VMC receiver application.
- **Input support**: VMC, Sony mocopi, and Rokoko Studio.
- **Comparison views**: check corrected and source motion before you keep a setting.
- **Per-avatar settings**: save and load tuning and collider values in a `.map.json` sidecar file.

## Requirements

- Windows PC
- VRM avatar: VRM 0.x or VRM 1.0
- VMC receiver application
- One supported motion-capture input: VMC, mocopi, or Rokoko

## Quick setup

1. Extract the download archive to a normal folder.
2. Start MocapSeitai from that folder.
3. Load the same VRM avatar that you use in the receiver application.
4. Select VMC, mocopi, or Rokoko input, then set the sender port.
5. Set the VMC receiver address and port.
6. Start the sender, then confirm that MocapSeitai receives motion.
7. Start with the default controls and tune one at a time.

Settings are for one exact avatar.
Do not use a settings file with a different avatar.

## Experimental features and beta limits

MocapSeitai is public beta software.
Motion quality depends on the avatar, input data, calibration, and movement speed.

Spatial Hand can help to keep the context of hand poses.
It does not guarantee that hands meet, avoid the body, or stay correct for every motion.

Hand anti-penetration and hand contact are experimental and opt-in.
Hand anti-penetration is Off by default.
**Hybrid** is the recommended opt-in mode for this beta.
It can reduce some hand-to-body intersections, but it can change the hand pose and cannot solve every avatar shape, input quality level, or fast movement.

Tune the base retargeting and colliders first.
Test each experimental setting with the movement that you want to improve.

## Manual and support

Read the online manual before use:
https://kanzaki1201.github.io/malloc_public/MocapSeitai/quickstart

For questions, bug reports, or feature requests, open an issue:
https://github.com/kanzaki1201/malloc_public/issues

## License summary

- One license is for one user and may be used on that user's machines.
- Commercial and non-commercial use are allowed.
- Redistribution, file sharing, and resale are not allowed.
- MocapSeitai is provided as-is.
- The author is not responsible for problems, loss, or damage caused by this product.

<!--
Primary sources used for this draft:
- https://booth.pm/en/items/8544339
  Opti Matcher listing. It presents a related VMC correction application with concise sections for purpose, tested environment, included files, license, and detailed-use guidance. Its product-specific claims, such as OptiTrack/Motive support, foot correction, and its trial terms, are intentionally not used here.
- docs/MocapSeitai/quickstart.md
  Version, product flow, supported inputs, Windows and VRM requirements, setup, per-avatar settings, and beta limitation claims.
- docs/MocapSeitai/changelog.md
  0.12.0-beta-1 features, Offset beta default, Spatial Hand, comparison views, and experimental anti-penetration modes.
- docs/MocapSeitai/retarget-adjustments.md
  Six Retarget adjustments and their relationship to Spatial Hand IK.
- docs/MocapSeitai/spatial-hands.md
  Spatial Hand purpose and limits.
- docs/MocapSeitai/experimental-features.md
  Experimental hand contact and anti-penetration behavior, Off default, Hybrid recommendation, and known limits.
- docs/MocapSeitai/reference.md
  UI-specific feature details and per-avatar settings behavior.
- docs/credits.md
  Third-party components and notice statement.

Uncertainty to confirm before publication:
- Add final archive contents only after a fresh build inventory and corrected third-party notice are complete.
- Generate a MocapSeitai-specific VN3 set. Do not reuse the lilEasyFace PDFs; check that the final license matches this summary before publication.
-->
