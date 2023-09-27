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
      components: {
        default: () => import('../components/RenderPage.vue'),
        sidePeek: () => import('../components/SidePeekRenderer.vue'),
      },
      props: {
        default: (route) => {
          const pageId = route.params.pageId;

          return {
            pageId,
            peekMode: "default"
          }
        },
        sidePeek: (route) => {
          const pageId = route.query.p;
          const peekMode = route.query.pm;

          return {
            pageId,
            peekMode
          }
        }
      }
    },
  ]
})
export default router