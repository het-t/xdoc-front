import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import RecordsView from '../views/RecordView.vue'

const recordsRoutes = [
  {
    path: 'list',
    name: 'records-upcomings',
    component: () => import('../components/UpcomingsC.vue')
  },
  {
    path: 'create',
    name: 'records-create',
    component: () => import('../components/RecordCreate.vue')
  },
]

const usersSetting = [
  {
    path: 'users',
    name: 'users-setting',
    component: () => import('../views/UsersSettingView.vue')
  }
]

const fieldsSetting = [
  {
    path: 'fields',
    name: 'fields-setting',
    component: () => import('../views/FieldsSettingView.vue')
  }
]

const userRoutes = [
  {
    path: 'setting',
    // component: () => import('../components/TheSetting.vue'),
    children: [ 
      ...usersSetting,
      ...fieldsSetting
    ]
  },
  {
    path: 'records',
    component: RecordsView,
    children: recordsRoutes
  }
]

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
      children: userRoutes
    }
  ]
})

export default router
