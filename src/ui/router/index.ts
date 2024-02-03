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
      },
      props: {
        default: (route) => {
          const blockId: string | null = transformToStandardUUIDFormat(route.params.blockId as string);

          return {
            blockId
          }
        }
      }
    },
  ]
})
export default router