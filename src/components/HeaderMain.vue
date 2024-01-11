<template>
  <header>
    <div class="info">
      <p class="welcome-message">Welcome to Medlife</p>
      <img src="../images/gold.png" class="gold-line" alt="" />

      <h1 class="title">
        Elevating Pathology through Strategic
        <span class="mid-header">Collaboration Regain Productivity</span>
      </h1>
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </p>
      <input-message />
      <img src="../images/grey.png" class="grey-line" alt="" />
    </div>

    <img src="../images/ring.png" class="ring" alt="" />

    <div class="main-img-container">
      <blob-overlay />
    </div>
  </header>
</template>

<script setup>
import BlobOverlay from "./BlobOverlay.vue";
import InputMessage from "./InputMessage.vue";
</script>
