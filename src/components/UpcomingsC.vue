<template>
    <table-main>
        <template #thead>
            <th>#</th>
            <th>User</th>
            <th>Created At</th>
            <th>Last Edited At</th>
            <th>Status</th>
            <th></th>
        </template>

        <template #tbody>
            <tr @click.right.prevent="openMenu($event, this, record.id)" v-for="(record) in records" :class="menu.id == record.id ? 'tr-right-clicked' : ''" :key="record.id" class="cursor-ptr">
                <td>{{ record.id }}</td>
                <td>{{ record.username }}</td>
                <td>{{ record.createdAt }}</td>
                <td>{{ record.editedAt }}</td>
                <td>{{ record.status }}</td>
                <td>
                    <div class="flex">
                        <font-awesome-icon @click="edit(record.id)" icon="fa-solid fa-square-pen" class="fa-icon"></font-awesome-icon>
                        <font-awesome-icon @click="del(record.id)" icon="fa-solid fa-trash" class="fa-icon"></font-awesome-icon>
                    </div>
                </td>
            </tr>

            <BaseMenu v-if="menu.visibility == true" @click-outside="closeMenu(this)" :posX="menu.posX" :posY="menu.posY"> 
                <template v-slot:menu-actions>
                    <div @click="edit(menu.id)" class="menu-action">
                        <div class="action-parent mrl6">
                            <font-awesome-icon :icon="['far', 'pen-to-square']" class="action-pic"></font-awesome-icon>
                        </div>
                        <div class="mrl6">
                            Edit
                        </div>
                    </div>
                    <div @click="del(menu.id)" class="menu-action">
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
import TableMain from './TableMain.vue'
import { records } from '@/api'
import useDeleteSwal from '@/helpers/swalDelete.js'
import BaseMenu from './BaseMenu.vue'

export default {
    components: { TableMain, BaseMenu },
    name: 'UpcomingsC',
    data() {
        return {
            menu: {
                visibility: false,
                posY: '',
                posX: '',
                id: ''
            }
        }
    },
    computed: {
        records() {
            return this.$store.getters['records/getUpcomings']
        }
    },
    methods: {
        edit(recordId) {
            this.$store.dispatch('records/fetchBaseRecordsIds', recordId)
            this.$router.push({name: 'records-create'})
        },
        del(recordId) {
            useDeleteSwal({
                text: `record #${recordId}`,
                mutationFn: 'records/fetchUpcomings',
                promise: () => records.delete({recordId}),
                context: this
            })     
        }
    },
    mounted() {
        this.$store.dispatch('records/fetchUpcomings')
    }
}
</script>

<style scoped>
td {
    vertical-align: text-top;
}
table {
    height: fit-content;
}
</style>