<template>
  <form-view />
</template>

<script setup>
import { ref } from "vue";
import FormView from "../components/FormView.vue";

const firstName = ref("");
const surname = ref("");
const experience = ref();
const productivity = ref();
const jobs = ref("");
</script>
