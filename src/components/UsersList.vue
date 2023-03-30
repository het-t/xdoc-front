<template>
    <table-main>
        <template #thead>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
        </template>

        <template #tbody>
            <tr @click.right.prevent="{openMenu($event, this, user.id); menu.username = user.firstName + ' ' +user.lastName}" v-for="(user, index) in users" :class="menu.id == user.id ? 'tr-right-clicked' : ''" :key="user.id" class="cursor-ptr">
                <td>{{ index + 1 }}</td>
                <td>{{ user.firstName }} {{ user.lastName }}</td>
                <td>{{ user.email }}</td>
            </tr>

            <BaseMenu @click-outside="closeMenu(this, username)" v-if="menu.visibility == true" :posX="menu.posX" :posY="menu.posY">
                <template v-slot:menu-actions>
                    <div class="menu-action">
                        <div class="action-parent mrl6">
                            <font-awesome-icon :icon="['far', 'pen-to-square']" class="action-pic"></font-awesome-icon>
                        </div>
                        <div class="mrl6">
                            Edit
                        </div>
                    </div>
                    <div @click="del(menu.id, menu.username)" class="menu-action">
                        <div class="action-parent mrl6">
                            <font-awesome-icon :icon="['far', 'trash-can']" class="action-pic"></font-awesome-icon>
                        </div>
                        <div class="mrl6">
                            Delete
                        </div>
                    </div>
                </template>
            </BaseMenu>
        </template>
    </table-main>
</template>

<script>
    import { users } from '@/api';
    import TableMain from './TableMain.vue';
    import useDeleteSwal from '@/helpers/swalDelete.js'
    import BaseMenu from './BaseMenu.vue';

    export default {
        name: 'UsersList',
        data() {
            return {
                menu: {
                    visibility: false,
                    posX: '',
                    posY: '',
                    id: '',
                    username: ''
                }
            }
        },
        components: {
            TableMain,
                BaseMenu
        },
        computed: {
            users() {
                return this.$store.getters['users/getList']
            }
        },
        methods: {
            del(userId, username) {
                useDeleteSwal({
                    text: username,
                    mutationFn: 'users/getList',
                    promise: () => users.delete({userId}),
                    context: this
                })
            }
        },
        created() {
            this.$store.dispatch('users/getList', {from:0, to:100})
        }
    }
</script>