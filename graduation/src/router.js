import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import AboutUs from "./components/About_us.vue"
import Content from "./components/Content.vue"
import about from "./components/about.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Content",
      component: Content
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
        path: "/AboutUs",
        name: "AboutUs",
        component: AboutUs,
        children: [
            {
                path: "about",
                name: "about",
                component: about
            },
            {
                path: "history",
                name: "history",
                component: history
            }
        ]
    }
    // {
    //     path: "/Content",
    //     name: "Content",
    //     component: Content
    // }
  ]
});
