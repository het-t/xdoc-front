export const fieldList = [{
    title: 'list',
    path: '/u/setting/fields/',
}]

export const fieldCreate = [
    ...fieldList,
    {
        title: 'create',
        path: '/u/setting/fields/create',
    }
]

export const userList = [{
    title: 'list',
    path: '/u/setting/users/'
}]

export const userCreate = [
    ...userList,
    {
        title: 'create',
        path: '/u/setting/users/create'
    }
]

export const upcomingsList = [{
    title: 'list',
    path: '/u/records/upcomings'
}]

export const recordCreate = [
    ...upcomingsList,
    {
        title: 'create',
        path: '/u/records/create'
    }
]