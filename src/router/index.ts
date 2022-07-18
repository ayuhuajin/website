import { createRouter,createWebHistory  } from "vue-router";

const home = () => import("../views/home.vue")
const login = () => import("../views/login.vue")

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: home
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/test",
    name: "test",
    component: ()=>import('../views/test.vue')
  },
  {
    path: "/crud",
    name: "crud",
    component: ()=>import('../views/crud.vue')
  },
  {
    path: "/demo",
    name: "demo",
    component: () => import('../views/demo/DemoVue.vue'),
    children: [
      {
        path: "/demo1",
        name: "demo1",
        component: () => import('../views/demo/demo1.vue')
      },
      {
        path: "/demo2",
        name: "demo2",
        component: () => import('../views/demo/demo2.vue')
      },
      {
        path: "/demo3",
        name: "demo3",
        component: () => import('../views/demo/demo3.vue')
      },
      {
        path: "/demo4",
        name: "demo4",
        component: () => import('../views/demo/demo4.vue')
      },
      {
        path: "/vuex",
        name: "vuex",
        component: () => import('../views/demo/vuex.vue')
      },
      {
        path: "/axios",
        name: "axios",
        component: () => import('../views/demo/axios.vue')
      }
    ]
  },
  {// 404路由
    path: '/404',
    name: '404',
    component: ()=>import('../views/404.vue')
  },
  {// 404路由  需正则表达式配置
    path: '/:pathMatch(.*)*',
    redirect: "/404" 
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
router.beforeEach((to, from) => {
  console.log(to, from,'路由守卫');
  // return false
})
export default router;   