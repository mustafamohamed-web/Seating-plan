<template>
  <form class="custom-form">
    <label for="firstName">First Name:</label>
    <input type="text" v-model="firstName" id="firstName" />

    <label for="surname">Surname:</label>
    <input type="text" v-model="surname" id="surname" />

    <label for="experience">Years of Experience:</label>
    <input type="number" v-model="experience" id="experience" />

    <label for="productivity">Productivity:</label>
    <input
      type="number"
      v-model="productivity"
      id="productivity"
      min="1"
      max="5"
      required
    />

    <label for="job">Select Job:</label>
    <select id="job" v-model="jobs" required>
      <option value="">Select</option>
      <option value="Externals">Externals</option>
      <option value="Exceptions">Exceptions</option>
      <option value="Hot cell">Hot cell</option>
      <option value="Phones">Phones</option>
      <option value="Cold cell">Cold cell</option>
    </select>

    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
const firstName = ref("");
const surname = ref("");
const experience = ref();
const productivity = ref();
const jobs = ref("");
</script>
