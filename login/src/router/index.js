import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/home.vue";
import Login from "@/components/login.vue";
import Register from '@/components/register.vue'
import User from "@/components/userdata.vue"
import Test from "@/components/test.vue"


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
    path: "/test ",
    name: "te-st",
    component: Test,
  },
  {
    path: "/Register",
    name: "Regis-ter",
    component: Register,
  },
  {
    path: "/user ",
    name: "us-ers",
    component: User,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
