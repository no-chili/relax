import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
      meta: {
        title: "Home",
      },
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("@/views/StatsView.vue"),
        },
        {
          path: "dashboard",
          name: "dashboard",
          component: () => import("@/views/DashBoardView.vue"),
          meta: {
            title: "表盘",
          },
        },
        {
          path: "table",
          name: "table",
          component: () => import("@/views/TableView.vue"),
          meta: {
            title: "表格",
          },
        },
        {
          path: "state",
          name: "home",
          component: () => import("@/views/StatsView.vue"),
          meta: {
            title: "统计表",
          },
        },
        {
          path: "vetting",
          name: "vetitng",
          component: () => import("@/views/VettingView.vue"),
          meta: {
            title: "审核",
          },
        },
        {
          path: "edit",
          name: "edit",
          component: () => import("@/views/EditView.vue"),
          meta: {
            title: "编辑",
          },
        },
        {
          path: "setting",
          name: "setting",
          component: () => import("@/views/SettingView.vue"),
          meta: {
            title: "设置",
          },
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue"),
    },

    {
      path: "/:catchAll(.*)",
      name: "error",
      component: () => import("@/views/ErrorView.vue"),
    },
  ],
});
export default router;
