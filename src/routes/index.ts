import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Search from "./../components/Search.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Search",
    component: Search,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
