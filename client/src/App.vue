<template>
  <div class="container">
    <nav>
      <div class="img-container">
        <h3 class="logo-title">MedLife</h3>
      </div>

      <ul>
        <router-link to="/" class="li">Home</router-link>
        <router-link to="/form" class="li">Form</router-link>
        <router-link to="/seatingPlan" class="li">Seating Plan</router-link>
        <router-link to="/about" class="li">About Us</router-link>
      </ul>
    </nav>
    <router-view />
    <pattern-image />
  </div>
</template>

<script setup>
import PatternImage from "@/components/PatternImage.vue";
</script>
