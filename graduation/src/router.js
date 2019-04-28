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
import AU_activity from './components/management/AU_activity.vue'
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
import preach from "./components/Join_us/preach.vue"

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
          path: 'AU_activity',
          name: '企业活动',
          component: AU_activity
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
      // meta: {title: 'AboutUs'},
      meta: {title: '关于我们'},
      children: [
        // {
        //   path: 'AboutUs-1',
        //   name: 'AboutUs-1',
        //   component: AboutUs,
        //   meta: { title: 'AboutUs-1'},
        //   children: []
        // },
          {
            path: "about",
            name: "AUabout",
            component: about,
            // meta: {title: 'AUabout'}
            meta: {title: '公司概括'}
          },
          {
            path: "history",
            name: "AUhistory",
            component: history,
            // meta: {title: 'AUhistory'}
            meta: {title: '发展历程'}
          },
          {
            path: "culture",
            name: "AUculture",
            component: culture,
            // meta: {title: 'AUculture'}
            meta: {title: '企业文化'}
          },
          {
            path: "activity",
            name: "AUactivity",
            component: activity,
            // meta: {title: 'AUactivity'}
            meta: {title: '企业活动'}
          },
          {
            path: "contactus",
            name: "AUcontactus",
            component: contactus,
            // meta: {title: 'AUcontactus'}
            meta: {title: '联系我们'}
          }
      ]
    },
    {
      path: "/JoinUs",
      name: "JoinUs",
      component: JoinUs,
      meta: {title: '加入我们'},
      children: [
          {
            path: "treatment",
            name: "JUtreatment",
            component: treatment,
            // meta: {title: 'JUtreatment'}
            meta: {title: '员工福利'}
          },
          {
            path: "promote",
            name: "JUpromote",
            component: promote,
            // meta: {title: 'JUpromote'}
            meta: {title: '培养与竞升'}
          },
          {
            path: "job2/:title",
            name: "JUjob2",
            component: job2,
            // meta: {title: 'JUjob2'}
            meta: {title: '招聘岗位'}
          },
          {
            path: "jobflow",
            name: "JUjobflow",
            component: jobflow,
            // meta: {title: 'JUjobflow'}
            meta: {title: '招聘流程'}
          },
          {
            path: "preach",
            name: "JUpreach",
            component: preach,
            // meta: {title: 'JUjobflow'}
            meta: {title: '宣讲行程'}
          }
      ]
    },
    {
      path: "/Product",
      name: "Product",
      component: Product,
      meta: {title: '产品中心'},
      children: [
        {
          path: "xipro/:type/:id",
          // path: "xipro",
          name: "Pxipro",
          component: xipro,
          props: true,
          meta: {title: 'Pxipro'}
        },
        {
          path: "communication/:id",
          name: "Pcommunication",
          component: communication,
          props: true,
          meta: {title: 'Pcommunication'}
        }
      ]
    },
    {
      path: "/News",
      name: "News",
      component: News,
      meta: {title: '新闻资讯'},
      children: [
        {
          path: "news/:type",
          name: "Nnews",
          component: news,
          props: true,
          meta: {title: 'Nnews'}
        },
        {
          path: "news_show/:type/:id",
          name: "Nnews_show",
          component: news_show
        }
      ]
    }
  ]
});
