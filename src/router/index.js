import Vue from "vue";
import VueRouter from "vue-router";

import indexPage from "../views/index";
import homePage from "../views/home/home";
import pjPage from "../views/pj/pj";
import homeNextPage from "../views/home/next";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: indexPage,
    children: [
      {
        path: "",
        name: "home",
        component: homePage,
        
      },
      {
        path: "/next",
        name: "next",
        component: homeNextPage,
        
      },
      {
        path: "/pj",
        name: "pj",
        component: pjPage,
        
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
