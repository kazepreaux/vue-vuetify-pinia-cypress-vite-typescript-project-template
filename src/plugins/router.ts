import { createRouter, createWebHistory } from "vue-router";
import Details from "../views/DetailsView.vue";
import Home from "../views/HomeView.vue";
import NotFound from "../views/NotFoundView.vue";

export const buildRouter = (history = createWebHistory()) =>
  createRouter({
    history,
    routes: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/name/:id",
        component: Details,
        props: true,
      },
      {
        path: "/:pathMatch(.*)*",
        component: NotFound,
      },
    ],
  });
