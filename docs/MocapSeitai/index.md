---
title: MocapSeitai
description: Real-time motion capture retargeting and correction for VRM avatars.
aside: false
---

<section class="mocapseitai-intro-hero">
  <div class="mocapseitai-intro-hero-copy">
    <p class="mocapseitai-intro-kicker">Real-time mocap correction</p>
    <h1>MocapSeitai</h1>
    <p class="mocapseitai-intro-lede">Retarget and correct live motion capture for one VRM avatar, then send the result to any VMC receiver.</p>
    <div class="mocapseitai-intro-actions">
      <a class="mocapseitai-intro-action primary" href="https://malloc5566.booth.pm/items/8764040" target="_blank" rel="noreferrer">Get it on BOOTH</a>
      <a class="mocapseitai-intro-action secondary" href="https://malloc.gumroad.com/l/mocapseitai" target="_blank" rel="noreferrer">Get it on Gumroad</a>
    </div>
  </div>
  <img src="./assets/booth_promo_1.png" alt="MocapSeitai logo with the real-time motion-capture correction tagline" width="1024" height="1024" decoding="async">
</section>

::: warning Public beta 0.12.0-beta-1
MocapSeitai does not guarantee zero clipping for every motion or avatar.
:::

## Live motion in. Corrected VMC out.

MocapSeitai is a Windows application for live humanoid motion capture. It receives motion from VMC, mocopi, or Rokoko, retargets and corrects it to one VRM avatar, and sends corrected VMC data to a receiver application.

## Retargeting and hand correction

<div class="mocapseitai-promo-grid">
  <figure>
    <img src="./assets/booth_promo_2.png" alt="MocapSeitai Retarget panel showing six Retarget adjustments and an avatar arm-pose diagram" width="1024" height="1024" loading="lazy" decoding="async">
    <figcaption><strong>Retarget adjustments</strong><span>Correct consistent arm, leg, and shoulder pose differences with six controls.</span></figcaption>
  </figure>
  <figure>
    <img src="./assets/booth_promo_3.png" alt="Before-and-after avatar poses showing Spatial Hand preserving hand positions relative to the body" width="1024" height="1024" loading="lazy" decoding="async">
    <figcaption><strong>Spatial Hand</strong><span>Preserve the relative position of the hands for gestures that depend on body context.</span></figcaption>
  </figure>
  <figure>
    <img src="./assets/booth_promo_4.png" alt="Before-and-after avatar poses showing experimental hand-contact alignment" width="1024" height="1024" loading="lazy" decoding="async">
    <figcaption><strong>Hand contact</strong><span>Adjust where the hands should meet (experimental)</span></figcaption>
  </figure>
  <figure>
    <img src="./assets/booth_promo_5.png" alt="Before-and-after avatar poses showing experimental hand anti-penetration" width="1024" height="1024" loading="lazy" decoding="async">
    <figcaption><strong>Hand anti-penetration</strong><span>Physics-based or non-physics-based solutions to prevent hands enter the body. (experimental)</span></figcaption>
  </figure>
</div>

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
