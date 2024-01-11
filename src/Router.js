import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Form from "./views/Form.vue";
import SeatingPlan from "./views/SeatingPlan.vue";
import About from "./views/About.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
  },
  {
    path: "/seatingPlan",
    name: "SeatingPlan",
    component: SeatingPlan,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
