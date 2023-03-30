import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import RecordsView from '../views/RecordView.vue'
import * as bc from './breadcrumbs.js'

const recordsRoutes = [
  {
    path: 'upcomings',
    name: 'records-upcomings',
    component: () => import('../components/UpcomingsC.vue'),
    meta: {
      heroTitle: 'Records',
      bc: bc.upcomingsList,
      action: true,
      actionRouteName: 'records-create'
    }
  },
  {
    path: 'create',
    name: 'records-create',
    component: () => import('../components/RecordCreate.vue'),
    meta: {
      heroTitle: 'Records',
      bc: bc.recordCreate
    }
  },
]

const usersSetting = [
  {
    path: 'users',
    name: 'users-setting',
    component: () => import('../views/UsersSettingView.vue'),
    children: [
      {
        path: '',
        name: 'user-list',
        component: () => import('../components/UsersList.vue'),
        meta: {
          heroTitle: 'Users',
          bc: bc.userList,
          action: true,
          actionRouteName: 'user-create'
        }
      },
      {
        path: 'create',
        name: 'user-create',
        component: () => import('../components/UsersCreate.vue'),
        meta: {
          heroTitle: 'Users',
          bc: bc.userCreate
        }
      }
    ]
  }
]

const fieldsSetting = [
  {
    path: 'fields',
    name: 'fields-setting',
    component: () => import('../views/FieldsSettingView.vue'),
    children: [
      {
        path: ':blockId',
        name: 'field-list',
        component: () => import('../components/BlockRender.vue'),
        meta: {
          heroTitle: 'Fields',
          bc: bc.fieldList,
          action: true,
          actionRouteName: 'field-create'
        }
      },
      {
        path: 'create',
        name: 'field-create',
        component: () => import('../components/FieldsCreate.vue'),
        meta: {
          heroTitle: 'Fields',
          bc: bc.fieldCreate
        }
      }
    ]
  },
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