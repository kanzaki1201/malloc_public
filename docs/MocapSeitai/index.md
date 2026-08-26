---
title: MocapSeitai
description: Real-time motion capture retargeting and correction for VRM avatars.
aside: false
---

<div class="mocapseitai-intro">
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

  <div class="custom-block warning mocapseitai-intro-beta">
    <p class="custom-block-title">Public beta 0.12.0-beta-1</p>
    <p>MocapSeitai does not guarantee zero clipping for every motion or avatar.</p>
  </div>

  <section aria-labelledby="mocapseitai-about">
    <h2 id="mocapseitai-about">Live motion in. Corrected VMC out.</h2>
    <p>MocapSeitai is a Windows application for live humanoid motion capture. It receives motion from VMC, mocopi, or Rokoko, retargets and corrects it to one VRM avatar, and sends corrected VMC data to a receiver application.</p>

    <div class="mocapseitai-intro-facts">
      <div>
        <h3>Input and output</h3>
        <p>Receive VMC, mocopi, or Rokoko motion. Send corrected VMC motion.</p>
      </div>
      <div>
        <h3>Avatar support</h3>
        <p>Load VRM 0.x or VRM 1.0. Use the same VRM in the sender and receiver.</p>
      </div>
      <div>
        <h3>Retargeting</h3>
        <p>Use Offset mode by default, or try the experimental Muscle mode.</p>
      </div>
      <div>
        <h3>Review and save</h3>
        <p>Compare the source and corrected pose, then save settings for each avatar.</p>
      </div>
    </div>
  </section>

  <section aria-labelledby="mocapseitai-corrections">
    <h2 id="mocapseitai-corrections">Retargeting and hand correction</h2>
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
        <figcaption><strong>Hand contact</strong><span>Experimentally adjust poses where the hands should meet.</span></figcaption>
      </figure>
      <figure>
        <img src="./assets/booth_promo_5.png" alt="Before-and-after avatar poses showing experimental hand anti-penetration" width="1024" height="1024" loading="lazy" decoding="async">
        <figcaption><strong>Hand anti-penetration</strong><span>Experiment with physics-based or non-physics-based correction when hands enter the body.</span></figcaption>
      </figure>
    </div>
  </section>

  <section class="mocapseitai-intro-details" aria-label="Trial and requirements">
    <div>
      <h2>Try before you buy</h2>
      <p>The trial streams for up to 300 seconds in each app session with no feature limits. Test your own motion and avatar before you buy.</p>
    </div>
    <div>
      <h2>Requirements</h2>
      <ul>
        <li>Windows 10 or 11</li>
        <li>A VRM 0.x or VRM 1.0 avatar</li>
        <li>A VMC receiver application</li>
      </ul>
    </div>
  </section>

  <section aria-labelledby="mocapseitai-next">
    <h2 id="mocapseitai-next">Manual and support</h2>
    <nav class="mocapseitai-intro-links" aria-label="MocapSeitai manual and support links">
      <a href="./quickstart"><strong>Quickstart</strong><span>Install, connect, and send corrected motion.</span></a>
      <a href="./license"><strong>License</strong><span>Read the complete product terms.</span></a>
      <a href="./changelog"><strong>Changelog</strong><span>See the current public-beta release notes.</span></a>
      <a href="../bug-report"><strong>Support and bug reports</strong><span>Open a GitHub issue or send a BOOTH message.</span></a>
    </nav>
  </section>
</div>
