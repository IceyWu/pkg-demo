import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router'
import { defineAsyncComponent } from 'vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: defineAsyncComponent(
        () => import(`../views/home/index.vue`)
      ),
    },
    {
      path: '/ElpForm',
      name: 'ElpForm',
      component: defineAsyncComponent(() => import(`../views/ElpForm/index.vue`)),
    },
    
  ],
})
// 全局路由守卫
router.beforeEach((to, from, next) => {
  // console.log(to, from)
  if (to.meta.title) {
    document.title = `${to.meta.title}`
  }
  next()
})

export default router
