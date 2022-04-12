const routes = [
  {
    path: "/",
    component: () => import("layouts/Home.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
  },
  {
    path: "/Login",
    component: () => import("components/modal/LoginModal.vue"),
    children: [{ path: "", component: () => import("layouts/Home.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
