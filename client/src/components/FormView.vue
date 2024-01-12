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
import axios from "axios";

const formData = reactive({
  firstName: "",
  surname: "",
  experience: 0,
  productivity: 0,
  job: "",
});

const handleSubmit = async () => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/data",
      formData
    );
    console.log("Data saved:", response.data);
    // Optionally update UI or perform other actions on successful save
  } catch (error) {
    console.error("Error saving data:", error);
    // Handle error (e.g., show a message to the user)
  }
  formData.firstName = "";
  formData.surname = "";
  formData.experience = 0;
  formData.productivity = 0;
  formData.job = "";
};

// Fetch data from the backend (optional)
const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/data");
    console.log("Fetched data:", response.data);
    // Optionally update UI with fetched data
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle error (e.g., show a message to the user)
  }
};
</script>
