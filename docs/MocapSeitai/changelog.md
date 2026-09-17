# Changelog

## 0.13.0-beta-1 — Spatial Hands fix and stability

Added:

- Refit enables every fitted finger collider by default.
- Status strip names port bind failures and firewall blocks for device input modes.

Fixed:

- Hands landed a third too close with head anchoring: the destination bake measured a bent-arm pose. Each anchor now scales by its own T-pose distance measured on the rest pose.
- Straight arms flipped and twitched near full extension: the elbow hinge now keeps a stable axis there.
- Status strip drew the port hint over the state text.

Removed:

- Experimental hand contact and the hand-pair solve. Spatial Hands preserves the inter-hand distance by itself.

## 0.12.0-beta-1 — Public beta target

Added:

- VMC, mocopi, and Rokoko input modes, with VMC output.
- Per-avatar settings that save and load manually in a `.map.json` sidecar file.
- Offset transfer mode as the beta default, plus Muscle transfer mode and six Retarget adjustments.
- Spatial Hand alignment controls.
- Smoothing and comparison views: Off, Ghost, and Side by side.
- Experimental hand contact.
- Experimental hand anti-penetration, Off by default, with SdfSearch, Ragdoll, and Hybrid modes.
