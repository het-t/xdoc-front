<template>
    <table-main>
        <template #thead>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th></th>
        </template>

        <template #tbody>
            <tr v-for="(user, index) in users" :key="user.id">
                <td>{{ index + 1 }}</td>
                <td>{{ user.firstName }} {{ user.lastName }}</td>
                <td>{{ user.email }}</td>
                <td>
                    <div class="flex">
                        <font-awesome-icon icon="fa-solid fa-square-pen" class="fa-icon"></font-awesome-icon>
                        <font-awesome-icon icon="fa-solid fa-trash" class="fa-icon"></font-awesome-icon>
                    </div>
                </td>
            </tr>
        </template>
    </table-main>
</template>

<script>
    import TableMain from './TableMain.vue';

    export default {
        name: 'UsersList',
        components: {
            TableMain
        },
        computed: {
            users() {
                return this.$store.getters['users/getList']({
                    from: 0,
                    to: 100
                })
            }
        },
        created() {
            this.$store.dispatch('users/getList', {from:0, to:100})
        }
    }
</script>