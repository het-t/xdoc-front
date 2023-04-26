import * as bc from './breadcrumbs.js'

export default [
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