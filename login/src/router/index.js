import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/home.vue";
import Login from "@/components/login.vue";
import Test from "@/components/test.vue";

const routes = [
  {
    path: "/",
    name: "home-comp",
    component: Home,
  },
  {
    path: "/login",
    name: "login-comp",
    component: Login,
  },
  {
    path: "/test",
    name: "te-st",
    component: Test,
  },
];



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


export default router;
