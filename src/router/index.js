import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
// import RecordsView from '../views/RecordView.vue'
// import * as bc from './breadcrumbs.js'
// import usersRoutes from './users.js'
// import fieldsRoutes from './fields.js'

// const recordsRoutes = [
//   {
//     path: 'upcomings',
//     name: 'records-upcomings',
//     component: () => import('../components/UpcomingsC.vue'),
//     meta: {
//       heroTitle: 'Records',
//       bc: bc.upcomingsList,
//       action: true,
//       actionRouteName: 'records-create'
//     }
//   },
//   {
//     path: 'create',
//     name: 'records-create',
//     component: () => import('../components/RecordCreate.vue'),
//     meta: {
//       heroTitle: 'Records',
//       bc: bc.recordCreate
//     }
//   },
// ]

// const mainRoutes = [
//   {
//     path: 'setting',
//     // component: () => import('../components/TheSetting.vue'),
//     children: [ 
//       ...usersRoutes,
//       ...fieldsRoutes
//     ]
//   },
//   {
//     path: 'records',
//     component: RecordsView,
//     children: recordsRoutes
//   },
// ]

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
      component: MainView,
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