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
      component: () => import('../components/RenderPage.vue'),
      props: (route) => {
        const childPageId = route.query.p;
        const childPagePeekMode = route.query.pm;
        const pageId = route.params.pageId;

        return {
          pageId: pageId ? pageId : childPageId,
          peekMode: childPagePeekMode,
        }
      }
    },
  ]
})
export default router