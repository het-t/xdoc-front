import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../components/LogIn.vue')
    },
    {
      path: '/:pageId',
      name: 'render-page',
      component: () => import('../components/RenderPage.vue')
    }
  ]
})
export default router