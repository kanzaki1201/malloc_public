---
title: MocapSeitai
description: Real-time motion capture retargeting and correction for VRM avatars.
aside: false
---

# MocapSeitai

**Retarget and correct live motion capture for one VRM avatar, then send the result to any VMC receiver.**

![MocapSeitai logo with the real-time motion-capture correction tagline](./assets/booth_promo_1.png)

[Get it on BOOTH](https://malloc5566.booth.pm/items/8764040) · [Get it on Gumroad](https://malloc.gumroad.com/l/mocapseitai)

::: warning Public beta 0.12.0-beta-1
MocapSeitai does not guarantee zero clipping for every motion or avatar.
:::

## Live motion in. Corrected VMC out.

MocapSeitai is a Windows application for live humanoid motion capture. It receives motion from VMC, mocopi, or Rokoko, retargets and corrects it to one VRM avatar, and sends corrected VMC data to a receiver application.

### Input and output

Receive VMC, mocopi, or Rokoko motion. Send corrected VMC motion.

### Avatar support

Load VRM 0.x or VRM 1.0. Use the same VRM in the sender and receiver.

### Retargeting

Use Offset mode by default, or try the experimental Muscle mode.

### Review and save

Compare the source and corrected pose, then save settings for each avatar.

## Retargeting and hand correction

### Retarget adjustments

![MocapSeitai Retarget panel showing six Retarget adjustments and an avatar arm-pose diagram](./assets/booth_promo_2.png)

Correct consistent arm, leg, and shoulder pose differences with six controls.

### Spatial Hand

![Before-and-after avatar poses showing Spatial Hand preserving hand positions relative to the body](./assets/booth_promo_3.png)

Preserve the relative position of the hands for gestures that depend on body context.

### Hand contact

![Before-and-after avatar poses showing experimental hand-contact alignment](./assets/booth_promo_4.png)

Experimentally adjust poses where the hands should meet.

### Hand anti-penetration

![Before-and-after avatar poses showing experimental hand anti-penetration](./assets/booth_promo_5.png)

Experiment with physics-based or non-physics-based correction when hands enter the body.

## Try before you buy

The trial streams for up to 300 seconds in each app session with no feature limits. Test your own motion and avatar before you buy.

## Requirements

- Windows 10 or 11
- A VRM 0.x or VRM 1.0 avatar
- A VMC receiver application

## Manual and support

- [Quickstart](./quickstart): Install, connect, and send corrected motion.
- [License](./license): Read the complete product terms.
- [Changelog](./changelog): See the current public-beta release notes.
- [Support and bug reports](../bug-report): Open a GitHub issue or send a BOOTH message.
