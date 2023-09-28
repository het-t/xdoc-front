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
        overlayDefault: () => import('../components/SidePeekRenderer.vue')
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
          let pageId = route.query.p;
          let peekMode = route.query.pm;

          if (peekMode !== "s") {
            pageId = null;
            peekMode = null;
          }

          return {
            pageId,
            peekMode
          }
        },
        overlayDefault: (route) => {
          let pageId = route.query.p;
          let peekMode = route.query.pm;

          if (peekMode !== "c") {
            pageId = null;
            peekMode = null;
          }
          
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