<template>
  <form @submit.prevent="handleSubmit" class="custom-form">
    <label for="firstName">First Name:</label>
    <input type="text" v-model="formData.firstName" id="firstName" />

    <label for="surname">Surname:</label>
    <input type="text" v-model="formData.surname" id="surname" />

    <label for="experience">Years of Experience:</label>
    <input type="number" v-model="formData.experience" id="experience" />

    <label for="productivity">Productivity:</label>
    <input
      type="number"
      v-model="formData.productivity"
      id="productivity"
      min="1"
      max="5"
      required
    />

    <label for="job">Select Job:</label>
    <select id="job" v-model="formData.job" required>
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
import { ref, reactive } from "vue";

const formData = reactive({
  firstName: "",
  surname: "",
  experience: 0,
  productivity: 0,
  job: "",
});
const staff = ref([]);

const handleSubmit = () => {
  const newData = { ...formData };
  staff.value.push(newData);

  console.log(newData);

  formData.name = "";
  formData.surname = "";
  formData.experience = 0;
  formData.productivity = 0;
  formData.job = "";
};
</script>
