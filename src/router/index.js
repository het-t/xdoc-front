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
      path: '/u',
      name: 'home',
      children: [
        {
          path: ':blockId',
          name: 'render-object',
          component: () => import('../components/RenderObject.vue')
        },
      ]
    }
  ]
})
export default router