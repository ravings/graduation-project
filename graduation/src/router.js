import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";

import Content from "./components/Content.vue"

import Login from "./components/management/login.vue"
import Management from './components/management/manage.vue'
import tinymce from './components/management/tinymce.vue'
import home from './components/management/home.vue'
import news_company from './components/management/news_company.vue'
import news_industry from './components/management/news_industry.vue'
import Personal_information from './components/management/Personal_information.vue'
import product from './components/management/product.vue'
import administrator from './components/management/administrator.vue'
import AU_about from './components/management/AU_about.vue'
import AU_history from './components/management/AU_history.vue'
import job_1 from './components/management/job_1.vue'
import job_2 from './components/management/job_2.vue'

import AboutUs from "./components/About_us.vue"
import about from "./components/About_us/about.vue"
import history from "./components/About_us/history.vue"
import culture from "./components/About_us/culture.vue"
import activity from "./components/About_us/activity.vue"
import contactus from "./components/About_us/contactus.vue"

import JoinUs from "./components/Join_us.vue"
import treatment from "./components/Join_us/treatment.vue"
import promote from "./components/Join_us/promote.vue"
import job2 from "./components/Join_us/job_2.vue"
import jobflow from "./components/Join_us/jobflow.vue"

import Product from "./components/Product.vue"
import xipro from "./components/Product/xipro.vue"
import communication from './components/Product/communication.vue'

import News from "./components/News.vue"
import news from "./components/News/news.vue"
import news_show from "./components/News/news_show.vue"

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
      path: "/Login",
      name: "Login",
      component: Login
    },
    {
      path: '/Management',
      name: "Management",
      component: Management,
      children: [
        {
          path: 'tinymce',
          name: 'tinymce编辑器',
          component: tinymce
        },
        {
          path: 'home',
          name: '首页',
          component: home
        },
        {
          path: 'news_company',
          name: '公司新闻',
          component: news_company
        },
        {
          path: 'news_industry',
          name: '行业动态',
          component: news_industry
        },
        {
          path: 'Personal_information',
          name: '个人信息',
          component: Personal_information
        },
        {
          path: 'AU_about',
          name: '公司概括',
          component: AU_about
        },
        {
          path: 'AU_history',
          name: '发展历程',
          component: AU_history
        },
        {
          path: 'administrator',
          name: '管理员',
          component: administrator
        },
        {
          path: 'product',
          name: '产品中心',
          component: product
        },
        {
          path: 'job_1',
          name: '校招岗位',
          component: job_1
        },
        {
          path: 'job_2',
          name: '社招岗位',
          component: job_2
        }
      ]
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
            name: "AUabout",
            component: about
          },
          {
            path: "history",
            name: "AUhistory",
            component: history
          },
          {
            path: "culture",
            name: "AUculture",
            component: culture
          },
          {
            path: "activity",
            name: "AUactivity",
            component: activity
          },
          {
            path: "contactus",
            name: "AUcontactus",
            component: contactus
          }
      ]
    },
    {
      path: "/JoinUs",
      name: "JoinUs",
      component: JoinUs,
      children: [
          {
            path: "treatment",
            name: "JUtreatment",
            component: treatment
          },
          {
            path: "promote",
            name: "JUpromote",
            component: promote
          },
          {
            path: "job2",
            name: "JUjob2",
            component: job2
          },
          {
            path: "jobflow",
            name: "JUjobflow",
            component: jobflow
          }
      ]
    },
    {
      path: "/Product",
      name: "Product",
      component: Product,
      children: [
        {
          path: "xipro/:id",
          // path: "xipro",
          name: "Pxipro",
          component: xipro,
          props: true
        },
        {
          path: "communication/:id",
          name: "Pcommunication",
          component: communication,
          props: true
        }
      ]
    },
    {
      path: "/News",
      name: "News",
      component: News,
      children: [
        {
          path: "news/:id",
          name: "Nnews",
          component: news
        },
        {
          path: "news_show/:id",
          name: "Nnews_show",
          component: news_show
        }
      ]
    }
  ]
});
