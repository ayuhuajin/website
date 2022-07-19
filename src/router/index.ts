import { createRouter,createWebHistory  } from "vue-router";

const HomeIndex = () => import("@/views/frontEnd/HomeIndex.vue")
const AdminIndex = () => import("@/views/backend/AdminIndex.vue")
const PracticeIndex = () => import("@/views/practice/PracticeIndex.vue")

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: HomeIndex
  },
  {
    path: "/backend",
    name: "AdminIndex",
    component: AdminIndex,
    children:[
      {
        path: '/backend',
        component: () => import('@/views/backend/TestDemo.vue'),
      },
      {
        path: '/backend/VueDemo',
        component: () => import('@/views/backend/VueDemo.vue'),
      },
    ]
  },
  {
    path: "/practice",
    name: "PracticeIndex",
    component: PracticeIndex,
    children:[
      {
        path: '/practice',
        component: () => import('@/views/practice/paractice1.vue'),
      },
      {
        path: '/backend/VueDemo',
        component: () => import('@/views/practice/paractice2.vue'),
      },
    ]
  },
  {// 404路由
    path: '/404',
    name: '404',
    component: ()=>import('@/views/common/404.vue')
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
  // console.log(to, from,'路由守卫');
  // return false
})
export default router;   