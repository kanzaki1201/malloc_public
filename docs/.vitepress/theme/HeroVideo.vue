<script setup>
// Imported (not a public path) so Vite bundles it with a hashed, base-correct URL.
import heroSrc from '../../assets/hero.webm'
</script>

<template>
  <video class="hero-video" :src="heroSrc" autoplay loop muted playsinline></video>
</template>

<style scoped>
.hero-video {
  display: block;
  width: 100%;
  max-width: 480px;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}
</style>
