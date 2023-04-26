import * as bc from './breadcrumbs.js'

export default [
    {
      path: 'fields',
      name: 'fields-setting',
      component: () => import('../views/FieldsSettingView.vue'),
      children: [
        {
          path: '',
          name: 'field-list',
          component: () => import('../components/FieldsList.vue'),
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