import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Search from "../views/Search.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/search",
  },

  {
    path: "/search",
    name: "Search",
    component: Search,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
