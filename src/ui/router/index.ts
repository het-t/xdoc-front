import { createRouter, createWebHistory } from 'vue-router'
import { transformToStandardUUIDFormat } from "@/ui/helpers/router/transformToStandardUUIDFormat";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../components/LogIn.vue')
    },
    {
      path: '/:blockId',
      name: 'render-page',
      components: {
        default: () => import('../components/RenderMain.vue'),
        sidePeek: () => import('../components/PagePeekSide.vue'),
        overlayDefault: () => import('../components/PagePeekSide.vue')
      },
      props: {
        default: (route) => {
          const blockId: string | null = transformToStandardUUIDFormat(route.params.blockId as string);

          return {
            blockId
          }
        },
        sidePeek: (route) => {
          let blockId: string | null = null;
          let peekMode: string | null = null;

          if (peekMode === "s") {
            blockId = transformToStandardUUIDFormat(route.query.p as string);
            peekMode = route.query.pm as string;
          }

          return {
            blockId,
            peekMode
          }
        },
        overlayDefault: (route) => {
          let blockId: string | null = null;
          let peekMode: string | null = null;

          if (peekMode === "c") {
            blockId = transformToStandardUUIDFormat(route.query.p as string);
            peekMode = route.query.pm as string;
          }
          
          return {
            blockId,
            peekMode
          }
        }
      }
    },
  ]
})
export default router